---
layout: post
title:  "Tidy Time Series Analysis, Part 2: Rolling Functions"
author: "Matt Dancho"
categories: [Timeseries-Analysis]
tags: [R-Project, R, tidyquant, zoo, TTR, cranlogs, corrr]
image: tidy-timeseries-part2.png
---




In the second part in a series on __Tidy Time Series Analysis__, we'll again use `tidyquant` to investigate CRAN downloads this time focusing on __Rolling Functions__. If you haven't checked out the previous post on [period apply functions](http://www.business-science.io/timeseries-analysis/2017/07/02/tidy-timeseries-analysis.html), you may want to review it to get up to speed. Both `zoo` and `TTR` have a number of "roll" and "run" functions, respectively, that are integrated with `tidyquant`. In this post, we'll focus on the `rollapply` function from `zoo` because of its flexibility with __applying custom functions across rolling windows__. If you like what you read, please [follow us on social media](#social) to stay up on the latest [Business Science](#contact) news, events and information! As always, we are interested in both expanding our _network of data scientists_ and seeking _new clients interested in applying data science to business and finance_. 



An example of the visualization we can create using the `rollapply` function with `tq_mutate()`:

![tidyverse Bollinger Bands](/assets/tidy-timeseries-part2.png)

# Libraries Needed

We'll primarily be using two libraries today.


{% highlight r %}
library(tidyquant)  # Loads tidyverse, tidyquant, financial pkgs, xts/zoo
library(cranlogs)   # For inspecting package downloads over time
{% endhighlight %}

# CRAN tidyverse Downloads

We'll be using the same "tidyverse" dataset as the last post. The script below gets the package downloads for the first half of 2017. The data is very __noisy__, meaning it's difficult to identify trends. We'll see how rolling functions can help shortly.


{% highlight r %}
# tidyverse packages (see my laptop stickers from last post) ;)
pkgs <- c(
    "tidyr", "lubridate", "dplyr", 
    "broom", "tidyquant", "ggplot2", "purrr", 
    "stringr", "knitr"
)

# Get the downloads for the individual packages
tidyverse_downloads <- cran_downloads(
    packages = pkgs, 
    from     = "2017-01-01", 
    to       = "2017-06-30") %>%
    tibble::as_tibble() %>%
    group_by(package)

# Visualize the package downloads
tidyverse_downloads %>%
    ggplot(aes(x = date, y = count, color = package)) +
    # Data
    geom_point(alpha = 0.5) +
    facet_wrap(~ package, ncol = 3, scale = "free_y") +
    # Aesthetics
    labs(title = "tidyverse packages: Daily downloads", x = "",
         subtitle = "2017-01-01 through 2017-06-30",
         caption = "Downloads data courtesy of cranlogs package") +
    scale_color_tq() +
    theme_tq() +
    theme(legend.position="none")
{% endhighlight %}

![plot of chunk unnamed-chunk-2](/figure/source/2017-7-23-tidy-timeseries-analysis-pt-2/unnamed-chunk-2-1.png)


# Rolling Window Calculations
 
What are _rolling window calculations_, and why do we care? In time series analysis, nothing is static. A correlation may exist for a subset of time or an average may vary from one day to the next. Rolling calculations simply apply functions to a fixed width subset of this data (aka a window), indexing one observation each calculation. There are a few common reasons you may want to use a rolling calculation in time series analysis:

* Measuring the central tendency over time (`mean`, `median`)
* Measuring the volatility over time (`sd`, `var`)
* Detecting changes in trend (fast vs slow moving averages)
* Measuring a relationship between two time series over time (`cor`, `cov`)

The most common example of a rolling window calculation is a [_moving average_](https://en.wikipedia.org/wiki/Moving_average). Here's a nice illustration of a 3-month rolling window calculation from [Chandoo.org](http://chandoo.org/wp/2009/04/28/calculate-moving-average/).  

![Sample Moving Average Calculation](http://assets.chandoo.org/img/n/calculate-moving-average.png)

<center><em>Source: <a href="http://chandoo.org/wp/2009/04/28/calculate-moving-average/">Chandoo.org</a></em></center><br>

A _moving average_ allows us to visualize how an average changes over time, which is very useful in __cutting through the noise to detect a trend__ in a time series dataset. Further, by varying the window (the number of observations included in the rolling calculation), we can __vary the sensitivity of the window calculation__. This is useful in comparing fast and slow moving averages (shown later). 

Combining a _rolling mean_ with a _rolling standard deviation_ can help __detect regions of abnormal volatility and consolidation__. This is the concept behind _Bollinger Bands_ in the financial industry. The bands can be useful in detecting breakouts in trend for many time series, not just financial.



# Time Series Functions

The `xts`, `zoo`, and `TTR` packages have some great functions that enable working with time series. Today, we'll take a look at the __Rolling or Running Functions__ from the `zoo` and `TTR` packages. The roll apply functions are helper functions that enable the application of _other functions_ across a rolling window. What "other functions" can be supplied? Any function that returns a numeric vector such as scalars (`mean`, `median`, `sd`, `min`, `max`, etc) or vectors (`quantile`, `summary`, and custom functions). The rolling (or running) functions are in the format `roll[apply or fun name]` for `zoo` or `run[Fun]` for `TTR`. You can see which functions are integrated into `tidyquant` package below:


{% highlight r %}
# "roll" functions from zoo
tq_mutate_fun_options()$zoo %>%
    stringr::str_subset("^roll")
{% endhighlight %}



{% highlight text %}
##  [1] "rollapply"          "rollapplyr"         "rollmax"           
##  [4] "rollmax.default"    "rollmaxr"           "rollmean"          
##  [7] "rollmean.default"   "rollmeanr"          "rollmedian"        
## [10] "rollmedian.default" "rollmedianr"        "rollsum"           
## [13] "rollsum.default"    "rollsumr"
{% endhighlight %}



{% highlight r %}
# "run" functions from TTR
tq_mutate_fun_options()$TTR %>%
    stringr::str_subset("^run")
{% endhighlight %}



{% highlight text %}
##  [1] "runCor"         "runCov"         "runMAD"        
##  [4] "runMax"         "runMean"        "runMedian"     
##  [7] "runMin"         "runPercentRank" "runSD"         
## [10] "runSum"         "runVar"
{% endhighlight %}

We'll investigate the `rollapply` function from the `zoo` package because it allows us to use _custom functions_ that we create! 


# Tidy Implementation of Time Series Functions

We'll be using the `tq_mutate()` function to apply time series functions in a "tidy" way. The `tq_mutate()` function always adds columns to the existing data frame (rather than returning a new data frame like `tq_transmute()`). It's well suited for tasks that result in column-wise dimension changes (not row-wise such as periodicity changes, use `tq_transmute` for those!). It comes with a bunch of integrated financial and time series package integrations. We can see which apply functions will work by investigating the list of available functions returned by `tq_mutate_fun_options()`.


{% highlight r %}
# Condensed function options... lot's of 'em
tq_mutate_fun_options() %>%
    str()
{% endhighlight %}



{% highlight text %}
## List of 5
##  $ zoo                 : chr [1:14] "rollapply" "rollapplyr" "rollmax" "rollmax.default" ...
##  $ xts                 : chr [1:27] "apply.daily" "apply.monthly" "apply.quarterly" "apply.weekly" ...
##  $ quantmod            : chr [1:25] "allReturns" "annualReturn" "ClCl" "dailyReturn" ...
##  $ TTR                 : chr [1:61] "adjRatios" "ADX" "ALMA" "aroon" ...
##  $ PerformanceAnalytics: chr [1:7] "Return.annualized" "Return.annualized.excess" "Return.clean" "Return.cumulative" ...
{% endhighlight %}



# Tidy Application of Rolling Functions


As we saw in the tidyverse daily download graph above, it can be difficult to understand _changes in trends_ just by visualizing the data. We can use __rolling functions to better understand how trends are changing over time__. 


## Rolling Mean: Inspecting Fast and Slow Moving Averages

Suppose we'd like to investigate if significant changes in trend are taking place among the package downloads such that future downloads are likely to continue to increase, decrease or stay the same. One way to do this is to use moving averages. Rather than try to sift through the noise, we can __use a combination of a fast and slow moving average to detect momentum__. 

We'll create a fast moving average with `width = 30` days (just enough to detrend the data) and a slow moving average with `width = 90` days (slow window = 3X fast window). To do this we apply two calls to `tq_mutate()`, the first for the 30 day (fast) and the second for the 90 day (slow) moving average. There are three groups of arguments we need to supply: 

1. `tq_mutate` args: These `select` the column to apply the mutation to ("count") and the mutation function (`mutate_fun`) to apply (`rollapply` from `zoo`).
2. `rollapply` args: These set the `width`, `align = "right"` (aligns with end of data frame), and the `FUN` we wish to apply (`mean` in this case).
3. `FUN` args: These are arguments that get passed to the function. In this case we want to set `na.rm = TRUE` so `NA` values are skipped if present.

I add an additional `tq_mutate` arg, `col_rename`, at the end to rename the column. This is my preference, but it can be placed with the other `tq_mutate` args above. 


{% highlight r %}
# Rolling mean
tidyverse_downloads_rollmean <- tidyverse_downloads %>%
    tq_mutate(
        # tq_mutate args
        select     = count,
        mutate_fun = rollapply, 
        # rollapply args
        width      = 30,
        align      = "right",
        FUN        = mean,
        # mean args
        na.rm      = TRUE,
        # tq_mutate args
        col_rename = "mean_30"
    ) %>%
    tq_mutate(
        # tq_mutate args
        select     = count,
        mutate_fun = rollapply,
        # rollapply args
        width      = 90,
        align      = "right",
        FUN        = mean,
        # mean args
        na.rm      = TRUE,
        # tq_mutate args
        col_rename = "mean_90"
    )

# ggplot
tidyverse_downloads_rollmean %>%
    ggplot(aes(x = date, y = count, color = package)) +
    # Data
    geom_point(alpha = 0.1) +
    geom_line(aes(y = mean_30), color = palette_light()[[1]], size = 1) +
    geom_line(aes(y = mean_90), color = palette_light()[[2]], size = 1) +
    facet_wrap(~ package, ncol = 3, scale = "free_y") +
    # Aesthetics
    labs(title = "tidyverse packages: Daily Downloads", x = "",
         subtitle = "30 and 90 Day Moving Average") +
    scale_color_tq() +
    theme_tq() +
    theme(legend.position="none")
{% endhighlight %}

![plot of chunk unnamed-chunk-5](/figure/source/2017-7-23-tidy-timeseries-analysis-pt-2/unnamed-chunk-5-1.png)

The output is a little difficult to see. We'll need to zoom in a little more to detect momentum. Let's drop the "count" data from the plots and inspect just the moving averages. What we are looking for are points where the fast trend is above (has momentum) or below (is slowing) the slow trend. In addition, we want to inspect for cross-over, which indicates shifts in trend.


{% highlight r %}
tidyverse_downloads_rollmean %>%
    ggplot(aes(x = date, color = package)) +
    # Data
    # geom_point(alpha = 0.5) +  # Drop "count" from plots
    geom_line(aes(y = mean_30), color = palette_light()[[1]], linetype = 1, size = 1) +
    geom_line(aes(y = mean_90), color = palette_light()[[2]], linetype = 1, size = 1) +
    facet_wrap(~ package, ncol = 3, scale = "free_y") +
    # Aesthetics
    labs(title = "tidyverse packages: Daily downloads", x = "", y = "",
         subtitle = "Zoomed In: 30 and 90 Day Moving Average") +
    scale_color_tq() +
    theme_tq() +
    theme(legend.position="none")
{% endhighlight %}

![plot of chunk unnamed-chunk-6](/figure/source/2017-7-23-tidy-timeseries-analysis-pt-2/unnamed-chunk-6-1.png)


We can see that several packages have strong upward momentum (`purrr` and `lubridate`). Others such as `dplyr`, `knitr` and `tidyr` seem to be cycling in a range. Others such as `ggplot2` and `stringr` have short term downward trends (keep in mind these packages are getting the most downloads of the bunch). The last point is this is only a six month window of data. The long term trends may be much different than short term, but we'll leave that for another day.


## Rolling Custom Functions: Useful for multiple statistics

You may find in your analytic endeavors that you want more than one statistic. Well you're in luck with custom functions! In this example, we'll create a custom function, `custom_stat_fun_2()`, that returns four statistics:

* mean
* standard deviation
* 95% confidence interval (mean +/- 2SD)

The custom function can then be applied in the same way that `mean` was applied. 


{% highlight r %}
# Custom function to return mean, sd, 95% conf interval
custom_stat_fun_2 <- function(x, na.rm = TRUE) {
    # x     = numeric vector
    # na.rm = boolean, whether or not to remove NA's
    
    m  <- mean(x, na.rm = na.rm)
    s  <- sd(x, na.rm = na.rm)
    hi <- m + 2*s
    lo <- m - 2*s
    
    ret <- c(mean = m, stdev = s, hi.95 = hi, lo.95 = lo) 
    return(ret)
}
{% endhighlight %}

Now for the fun part: __performing the "tidy" rollapply__. Let's apply the `custom_stat_fun_2()` to groups using `tq_mutate()` and the rolling function `rollapply()`. The process is almost identical to the process of applying `mean()` with the main exception that we need to set `by.column = FALSE` to prevent a "length of dimnames [2]" error. The output returned is a "tidy" data frame with __each statistic in its own column__.


{% highlight r %}
# Roll apply using custom stat function
tidyverse_downloads_rollstats <- tidyverse_downloads %>%
    tq_mutate(
        select     = count,
        mutate_fun = rollapply, 
        # rollapply args
        width      = 30,
        align      = "right",
        by.column  = FALSE,
        FUN        = custom_stat_fun_2,
        # FUN args
        na.rm      = TRUE
    )
tidyverse_downloads_rollstats
{% endhighlight %}



{% highlight text %}
## # A tibble: 1,629 x 7
## # Groups:   package [9]
##    package       date count  mean stdev hi.95 lo.95
##      <chr>     <date> <dbl> <dbl> <dbl> <dbl> <dbl>
##  1   tidyr 2017-01-01   873    NA    NA    NA    NA
##  2   tidyr 2017-01-02  1840    NA    NA    NA    NA
##  3   tidyr 2017-01-03  2495    NA    NA    NA    NA
##  4   tidyr 2017-01-04  2906    NA    NA    NA    NA
##  5   tidyr 2017-01-05  2847    NA    NA    NA    NA
##  6   tidyr 2017-01-06  2756    NA    NA    NA    NA
##  7   tidyr 2017-01-07  1439    NA    NA    NA    NA
##  8   tidyr 2017-01-08  1556    NA    NA    NA    NA
##  9   tidyr 2017-01-09  3678    NA    NA    NA    NA
## 10   tidyr 2017-01-10  7086    NA    NA    NA    NA
## # ... with 1,619 more rows
{% endhighlight %}


We now have the data needed to visualize the rolling average (trend) and the 95% confidence bands (volatility). If you're familiar with finance, this is actually the concept of the [Bollinger Bands](http://www.investopedia.com/terms/b/bollingerbands.asp?lgl=rira-baseline-vertical). While we're not trading stocks here, we can see some similarities. We can see periods of consolidation and periods of high variability. Many of the high variability periods are when the package downloads are rapidly increasing. For example, `lubridate`, `purrr` and `tidyquant` all had spikes in downloads causing the 95% Confidence Interval (CI) bands to widen. 


{% highlight r %}
tidyverse_downloads_rollstats %>%
    ggplot(aes(x = date, color = package)) +
    # Data
    geom_point(aes(y = count), color = "grey40", alpha = 0.5) +
    geom_ribbon(aes(ymin = lo.95, ymax = hi.95), alpha = 0.4) +
    geom_point(aes(y = mean), linetype = 3, size = 1, alpha = 0.5) +
    facet_wrap(~ package, ncol = 3, scale = "free_y") +
    # Aesthetics
    labs(title = "tidyverse packages: Volatility and Trend", x = "",
         subtitle = "30-Day Moving Average with 95% Confidence Interval Bands (+/-2 Standard Deviations)") +
    scale_color_tq(theme = "light") +
    theme_tq() +
    theme(legend.position="none")
{% endhighlight %}

![plot of chunk unnamed-chunk-9](/figure/source/2017-7-23-tidy-timeseries-analysis-pt-2/unnamed-chunk-9-1.png)


# Conclusions

The rollapply functions from `zoo` and `TTR` can be used to apply __rolling window calculations__. The `tq_mutate()` function from `tidyquant` enables efficient and "tidy" application of the functions. We were able to use the `rollapply` functions to visualize averages and standard deviations on a rolling basis, which gave us a better perspective of the dynamic trends. Using custom functions, we are unlimited to the statistics we can apply to rolling windows. In fact, rolling correlations, regressions, and more complicated statistics can be applied, which will be the subject of the next posts. Stay tuned! ;)


# About Business Science <a class="anchor" id="contact"></a>

We have a full suite of data science services to _supercharge_ your organizations financial and business performance! For example, our experienced data scientists reduced a manufacturer's sales forecasting error by 50%, which led to improved personnel planning, material purchasing and inventory management. 

How do we do it? __With team-based data science__: Using our network of data science consultants with expertise in Marketing, Forecasting, Finance and more, we pull together the _right team_ to get _custom projects_ done _on time_, _within budget_, and of the _highest quality_. Learn about our [data science services](http://www.business-science.io/services.html) or [contact us](http://www.business-science.io/contact.html)!



# Announcements <a class="anchor" id="announcements"></a>

We're super excited to announce four new data scientists have joined our network!

* Max, a data science expert in Marketing Analytics
* Robert, a data scientist with background in causal inference, Bayesian statistics, and STAN
* Mary, an expert in Anti-Money Laundering (AML)
* Nana, a data scientist with a background in applied statistics

We are growing! Let us know if you are interested in joining our __network of data scientist consultants__. If you have expertise in Marketing Analytics, Data Science for Business, Financial Analytics, Forecasting or data science in general, we'd love to talk. [Contact us](http://www.business-science.io/contact.html)!

# Follow Business Science on Social Media <a class="anchor" id="social"></a>

* Connect with [@bizScienc](https://twitter.com/bizScienc) on [twitter](https://twitter.com/bizScienc)!
* Like us on [Facebook](https://www.facebook.com/Business-Science-LLC-754699134699054/)!!!
* Follow us on [LinkedIn](https://www.linkedin.com/company/business.science)!
* Sign up for [our insights blog](http://www.business-science.io/) to stay updated!
* If you like our software, [star our GitHub packages](https://github.com/business-science) :)
