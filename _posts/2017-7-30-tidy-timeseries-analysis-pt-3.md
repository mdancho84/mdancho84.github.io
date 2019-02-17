---
layout: post
title:  "Tidy Time Series Analysis, Part 3: The Rolling Correlation"
author: "Matt Dancho"
categories: [Timeseries-Analysis]
tags: [R-Project, R, tidyquant, TTR, cranlogs, corrr, cowplot, Learn-Timeseries]
image: tidy-timeseries-part3.png
---




In the third part in a series on __Tidy Time Series Analysis__, we'll use the `runCor` function from `TTR` to investigate __rolling (dynamic) correlations__. We'll again use `tidyquant` to investigate CRAN downloads. This time we'll also get some help from the `corrr` package to investigate correlations over specific timespans, and the `cowplot` package for multi-plot visualizations. We'll end by reviewing the changes in rolling correlations to show how to __detect events and shifts in trend__. If you like what you read, please [follow us on social media](#social) to stay up on the latest [Business Science](#contact) news, events and information! As always, we are interested in both expanding our _network of data scientists_ and seeking _new clients interested in applying data science to business and finance_. If interested, [contact us](http://www.business-science.io/contact.html). 

If you haven't checked out the previous two tidy time series posts, you may want to review them to get up to speed. 

* [Part 1: Tidy Period Apply](http://www.business-science.io/timeseries-analysis/2017/07/02/tidy-timeseries-analysis.html)
* [Part 2: Tidy Rolling Functions](http://www.business-science.io/timeseries-analysis/2017/07/23/tidy-timeseries-analysis-pt-2.html)
* [Part 3: Tidy Rolling Correlations](http://www.business-science.io/timeseries-analysis/2017/07/30/tidy-timeseries-analysis-pt-3.html)
* [Part 4: Lags and Autocorrelations](http://www.business-science.io/timeseries-analysis/2017/08/30/tidy-timeseries-analysis-pt-4.html)

An example of the visualization we can create using the `runCor` function with `tq_mutate_xy()` in combination with the `corrr` and `cowplot` packages:

![tidyquant correlation over time](/assets/tidy-timeseries-part3.png)

<span data-sumome-listbuilder-embed-id="6cf8523a01e2faac60392073d460d72402c5971ce4821a8a8e81b28cde43f056"></span>

# Libraries Needed

We'll need to load four libraries today.


{% highlight r %}
library(tidyquant)  # Loads tidyverse, tidyquant, financial pkgs, xts/zoo
library(cranlogs)   # For inspecting package downloads over time
library(corrr)      # Tidy correlation tables and correlation plotting
library(cowplot)    # Multiple plots with plot_grid()
{% endhighlight %}

# CRAN tidyverse Downloads

We'll be using the same "tidyverse" dataset as the last two posts. The script below gets the package downloads for the first half of 2017. 


{% highlight r %}
# tidyverse packages (see my laptop stickers from first post) ;)
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

![plot of chunk unnamed-chunk-2](/figure/source/2017-7-30-tidy-timeseries-analysis-pt-3/unnamed-chunk-2-1.png)

We'll also investigate correlations to the "broader market" meaning the __total CRAN dowloads over time__. To do this, we need to get the total downloads using `cran_downloads()` and leaving the `package` argument `NULL`, which is the default.


{% highlight r %}
# Get data for total CRAN downloads
all_downloads <- cran_downloads(from = "2017-01-01", to = "2017-06-30") %>%
    tibble::as_tibble()

# Visualize the downloads
all_downloads %>%
    ggplot(aes(x = date, y = count)) +
    # Data
    geom_point(alpha = 0.5, color = palette_light()[[1]], size = 2) +
    # Aesthetics
    labs(title = "Total CRAN Packages: Daily downloads", x = "",
         subtitle = "2017-01-01 through 2017-06-30",
         caption = "Downloads data courtesy of cranlogs package") +
    scale_y_continuous(labels = scales::comma) +
    theme_tq() +
    theme(legend.position="none")
{% endhighlight %}

![plot of chunk unnamed-chunk-3](/figure/source/2017-7-30-tidy-timeseries-analysis-pt-3/unnamed-chunk-3-1.png)

# Rolling Correlations

Correlations in time series are very useful because __if a relationship exists, you can actually model/predict/forecast using the correlation__. However, there's one issue: __a correlation is NOT static__! It changes over time. Even the best models can be rendered useless during periods when correlation is low. 

One of the most important calculations in time series analysis is the __rolling correlation__. Rolling correlations are simply applying a correlation between two time series (say sales of product x and product y) as a rolling window calculation. 

![Rolling Correlation Example](/assets/rolling-corr-explanation.png)

One major benefit of a rolling correlation is that we can visualize the change in correlation over time. The sample data (above) is charted (below). As shown, there's a relatively high correlation between Sales of Product X and Y until a big shift in December. The question is, "What happened in December?" Just being able to ask this question can be critical to an organization.

![plot of chunk unnamed-chunk-4](/figure/source/2017-7-30-tidy-timeseries-analysis-pt-3/unnamed-chunk-4-1.png)

In addition to visualizations, the rolling correlation is great for a number of reasons. First, __changes in correlation can signal events__ that have occurred causing two correlated time series to deviate from each other. Second, when modeling, __timespans of low correlation can help in determining whether or not to trust a forecast model__. Third, you can __detect shifts in trend as time series__ become more or less correlated over time.

# Time Series Functions

The `xts`, `zoo`, and `TTR` packages have some great functions that enable working with time series. Today, we'll take a look at the `runCor()` function from the `TTR` package. You can see which `TTR` functions are integrated into `tidyquant` package below:


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




# Tidy Implementation of Time Series Functions

We'll use the `tq_mutate_xy()` function to apply time series functions in a "tidy" way. Similar to `tq_mutate()` used in the [last post](http://www.business-science.io/timeseries-analysis/2017/07/23/tidy-timeseries-analysis-pt-2.html), the `tq_mutate_xy()` function always adds columns to the existing data frame (rather than returning a new data frame like `tq_transmute()`). It's well suited for tasks that result in column-wise dimension changes (not row-wise such as periodicity changes, use `tq_transmute` for those!). 

Most running statistic functions only take one data argument, `x`. In these cases you can use `tq_mutate()`, which has an argument, `select`. See how `runSD` only takes `x`.


{% highlight r %}
# If first arg is x (and no y) --> us tq_mutate()
args(runSD)
{% endhighlight %}



{% highlight text %}
## function (x, n = 10, sample = TRUE, cumulative = FALSE) 
## NULL
{% endhighlight %}

However, functions like `runCor` and `runCov` are setup to take in two data arguments, `x` and `y`. In these cases, use `tq_mutate_xy()`, which takes two arguments, `x` and `y` (as opposed to `select` from `tq_mutate()`). This makes it well suited for functions that have the first two arguments being `x` and `y`. See how `runCor` has two arguments `x` and `y`. 


{% highlight r %}
# If first two arguments are x and y --> use tq_mutate_xy()
args(runCor)
{% endhighlight %}



{% highlight text %}
## function (x, y, n = 10, use = "all.obs", sample = TRUE, cumulative = FALSE) 
## NULL
{% endhighlight %}


# Static Correlations

Before we jump into rolling correlations, let's examine the static correlations of our package downloads. This gives us an idea of how in sync the various packages are with each other over the entire timespan. 

We'll use the `correlate()` and `shave()` functions from the `corrr` package to output a tidy correlation table. We'll hone in on the last column "all_cran", which measures the correlation between individual packages and the broader market (i.e. total CRAN downloads).  


{% highlight r %}
# Correlation table
tidyverse_static_correlations <- tidyverse_downloads %>%
    # Data wrangling
    spread(key = package, value = count) %>%
    left_join(all_downloads, by = "date") %>%
    rename(all_cran = count) %>%
    select(-date) %>%
    # Correlation and formating
    correlate() 

# Pretty printing
tidyverse_static_correlations %>%
    shave(upper = F)
{% endhighlight %}



|rowname   | broom| dplyr| ggplot2| knitr| lubridate| purrr| stringr| tidyquant| tidyr| all_cran|
|:---------|-----:|-----:|-------:|-----:|---------:|-----:|-------:|---------:|-----:|--------:|
|broom     |      |  0.63|    0.78|  0.67|      0.52|  0.40|    0.81|      0.17|  0.53|     0.74|
|dplyr     |      |      |    0.73|  0.71|      0.59|  0.58|    0.71|      0.14|  0.64|     0.76|
|ggplot2   |      |      |        |  0.91|      0.82|  0.67|    0.91|      0.20|  0.82|     0.94|
|knitr     |      |      |        |      |      0.72|  0.74|    0.88|      0.21|  0.89|     0.92|
|lubridate |      |      |        |      |          |  0.79|    0.72|      0.29|  0.73|     0.82|
|purrr     |      |      |        |      |          |      |    0.66|      0.35|  0.82|     0.80|
|stringr   |      |      |        |      |          |      |        |      0.23|  0.81|     0.91|
|tidyquant |      |      |        |      |          |      |        |          |  0.26|     0.31|
|tidyr     |      |      |        |      |          |      |        |          |      |     0.87|
|all_cran  |      |      |        |      |          |      |        |          |      |         |

The correlation table is nice, but the outliers don't exactly jump out. For instance, it's difficult to see that `tidyquant` is low compared to the other packages withing the "all_cran" column. 

Fortunately, the `corrr` package has a nice visualization called a `network_plot()`. It helps to identify strength of correlation. Similar to a "kmeans" analysis, we are looking for association by distance (or in this case by correlation). __How well the packages correlate with each other is akin to how associated they are with each other.__ The network plot shows us exactly this association! 


{% highlight r %}
# Network plot
gg_all <- tidyverse_static_correlations %>%
    network_plot(colours = c(palette_light()[[2]], "white", palette_light()[[4]]), legend = TRUE) +
    labs(
        title = "Correlations of tidyverse Package Downloads to Total CRAN Downloads",
        subtitle = "Looking at January through June, tidyquant is a clear outlier"
        ) +
    expand_limits(x = c(-0.75, 0.25), y = c(-0.4, 0.4)) +
    theme_tq() +
    theme(legend.position = "bottom")
gg_all
{% endhighlight %}

![plot of chunk unnamed-chunk-10](/figure/source/2017-7-30-tidy-timeseries-analysis-pt-3/unnamed-chunk-10-1.png)

We can see that `tidyquant` has a very low correlation to "all_cran" and the rest of the "tidyverse" packages. This would lead us to believe that `tidyquant` is trending abnormally with respect to the rest, and thus is possibly not as associated as we think. Is this really the case?


# Rolling Correlations

Let's see what happens when we incorporate time using a rolling correlation. The script below uses the `runCor` function from the `TTR` package. We apply it using `tq_mutate_xy()`, which is useful for applying functions such has `runCor` that have both an `x` and `y` input.  



{% highlight r %}
# Get rolling correlations
tidyverse_rolling_corr <- tidyverse_downloads %>%
    # Data wrangling
    left_join(all_downloads, by = "date") %>%
    select(date, package, count.x, count.y) %>%
    # Mutation
    tq_mutate_xy(
        x          = count.x,
        y          = count.y,
        mutate_fun = runCor, 
        # runCor args
        n          = 30,
        use        = "pairwise.complete.obs",
        # tq_mutate args
        col_rename = "rolling_corr"
    )

# Join static correlations with rolling correlations
tidyverse_static_correlations <- tidyverse_static_correlations %>%
    select(rowname, all_cran) %>%
    rename(package = rowname)

tidyverse_rolling_corr <- tidyverse_rolling_corr %>%
    left_join(tidyverse_static_correlations, by = "package") %>%
    rename(static_corr = all_cran)

# Plot
tidyverse_rolling_corr %>%
    ggplot(aes(x = date, color = package)) +
    # Data
    geom_line(aes(y = static_corr), color = "red") +
    geom_point(aes(y = rolling_corr), alpha = 0.5) +
    facet_wrap(~ package, ncol = 3, scales = "free_y") +
    # Aesthetics
    scale_color_tq() +
    labs(
        title = "tidyverse: 30-Day Rolling Download Correlations, Package vs Total CRAN",
        subtitle = "Relationships are dynamic vs static correlation (red line)",
        x = "", y = "Correlation"
    ) +
    theme_tq() +
    theme(legend.position="none")
{% endhighlight %}

![plot of chunk unnamed-chunk-11](/figure/source/2017-7-30-tidy-timeseries-analysis-pt-3/unnamed-chunk-11-1.png)

The rolling correlation shows the dynamic nature of the relationship. If we just went by the static correlation over the full timespan (red line), we'd be misled about the dynamic nature of these time series. Further, we can see that most packages are highly correlated with the broader market (total CRAN downloads) with the exception of various periods where the correlations dropped. The __drops could indicate events or changes in user behavior__ that resulted in shocks to the download patterns. 

Focusing on the main outlier `tidyquant`, we can see that once April hit `tidyquant` is trending closer to a 0.60 correlation meaning that the 0.31 relationship (red line) is likely too low going forward. 

Last, we can redraw the network plot from April through June to investigate the shift in relationship. We can use the `cowplot` package to plot two ggplots (or corrr network plots) side-by-side. 



{% highlight r %}
# Redrawing Network Plot from April through June
gg_subset <- tidyverse_downloads %>%
    # Filter by date >= April 1, 2017
    filter(date >= ymd("2017-04-01")) %>%
    # Data wrangling
    spread(key = package, value = count) %>%
    left_join(all_downloads, by = "date") %>%
    rename(all_cran = count) %>%
    select(-date) %>%
    # Correlation and formating
    correlate() %>%
    # Network Plot
    network_plot(colours = c(palette_light()[[2]], "white", palette_light()[[4]]), legend = TRUE) +
    labs(
        title = "April through June (Last 3 Months)",
        subtitle = "tidyquant correlation is increasing"
        ) +
    expand_limits(x = c(-0.75, 0.25), y = c(-0.4, 0.4)) +
    theme_tq() +
    theme(legend.position = "bottom")

# Modify the January through June network plot (previous plot)
gg_all <- gg_all +
    labs(
        title = "January through June (Last 6 months)",
        subtitle = "tidyquant is an outlier"
        )

# Format cowplot
cow_net_plots <- plot_grid(gg_all, gg_subset, ncol = 2)
title <- ggdraw() + 
    draw_label(label = 'tidyquant is getting "tidy"-er',
               fontface = 'bold', size = 18)
cow_out <- plot_grid(title, cow_net_plots, ncol=1, rel_heights=c(0.1, 1))
cow_out
{% endhighlight %}

![plot of chunk unnamed-chunk-12](/figure/source/2017-7-30-tidy-timeseries-analysis-pt-3/unnamed-chunk-12-1.png)


# Conclusions

The `tq_mutate_xy()` function from `tidyquant` enables efficient and "tidy" application of `TTR::runCor()` and other functions with x and y arguments. The `corrr` package is useful for computing the correlations and visualizing relationships, and it fits nicely into the "tidy" framework. The `cowplot` package helps with arranging multiple ggplots to create compeling stories. In this case, it appears that __`tidyquant` is becoming "tidy"-er__, not to be confused with the package `tidyr`. ;) 


## Business Science University  <a class="anchor" id="bsu"></a>

Enjoy data science for business? We do too. This is why we created [Business Science University](https://university.business-science.io/) where we teach you how to do __Data Science For Busines (#DS4B)__ just like us!

Our first [DS4B course (HR 201)](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover) is now available! 

#### Who is this course for?

Anyone that is interested in applying data science in a business context (we call this DS4B). All you need is basic `R`, `dplyr`, and `ggplot2` experience. If you understood this article, you are qualified. 

#### What do you get it out of it?


You learn everything you need to know about how to apply data science in a business context:

- __Using ROI-driven data science taught from consulting experience!__

- __Solve high-impact problems__ (e.g. $15M Employee Attrition Problem)

- __Use advanced, bleeding-edge machine learning algorithms__ (e.g. H2O, LIME)

- __Apply systematic data science frameworks__ (e.g. [Business Science Problem Framework](https://university.business-science.io/courses/246843/lectures/5029853))

>__"If you've been looking for a program like this, I'm happy to say it's finally here! This is what I needed when I first began data science years ago. It's why I created Business Science University."__
>
>__Matt Dancho, Founder of Business Science__


### DS4B Virtual Workshop: Predicting Employee Attrition <a class="anchor" id="vw"></a>

Did you know that __an organization that loses 200 high performing employees per year is essentially losing $15M/year in lost productivity__? Many organizations don't realize this because it's an indirect cost. It goes unnoticed. What if you could use data science to predict and explain turnover in a way that managers could make better decisions and executives would see results? You will learn the tools to do so in our Virtual Workshop. Here's an example of a Shiny app you will create.

![HR 301 Shiny Application: Employee Prediction](/img/hr_301_app.png) 
<p class="text-center date">Shiny App That Predicts Attrition and Recommends Management Strategies, Taught in HR 301</p> 


Our first [__Data Science For Business (HR 201) Virtual Workshop__](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover) teaches you how to solve this employee attrition problem in four courses that are fully integrated:

* HR 201: Predicting Employee Attrition with `h2o` and `lime`
* HR 301: Building A `Shiny` Web Application
* HR 302: Data Story Telling With `RMarkdown` Reports and Presentations
* HR 303: Building An R Package For Your Organization, `tidyattrition`

The Virtual Workshop is intended for __intermediate and advanced R users__. It's __code intensive (like these articles)__, but also teaches you fundamentals of data science consulting including CRISP-DM and the Business Science Problem Framework. __The content bridges the gap between data science and the business, making you even more effective and improving your organization in the process.__

Interested? [__Enroll in Business Science University today!__](https://university.business-science.io/)

# About Business Science <a class="anchor" id="contact"></a>

We have a full suite of data science services to _supercharge_ your organizations financial and business performance! For example, our experienced data scientists reduced a manufacturer's sales forecasting error by 50%, which led to improved personnel planning, material purchasing and inventory management. 

How do we do it? __With team-based data science__: Using our network of data science consultants with expertise in Marketing, Forecasting, Finance and more, we pull together the _right team_ to get _custom projects_ done _on time_, _within budget_, and of the _highest quality_. Learn about our [data science services](http://www.business-science.io/services.html) or [contact us](http://www.business-science.io/contact.html)!


We are growing! Let us know if you are interested in joining our __network of data scientist consultants__. If you have expertise in Marketing Analytics, Data Science for Business, Financial Analytics, Forecasting or data science in general, we'd love to talk. [Contact us](http://www.business-science.io/contact.html)!

# Follow Business Science on Social Media <a class="anchor" id="social"></a>

* Connect with [@bizScienc](https://twitter.com/bizScienc) on [twitter](https://twitter.com/bizScienc)!
* Like us on [Facebook](https://www.facebook.com/Business-Science-LLC-754699134699054/)!!!
* Follow us on [LinkedIn](https://www.linkedin.com/company/business.science)!
* Sign up for [our insights blog](http://www.business-science.io/) to stay updated!
* If you like our software, [star our GitHub packages](https://github.com/business-science) :)
