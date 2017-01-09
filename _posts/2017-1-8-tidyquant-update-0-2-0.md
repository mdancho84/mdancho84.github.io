---
layout: post
title:  "tidyquant 0.2.0: Added Functionality for Financial Engineers and Business Analysts"
categories: [Code-Tools]
tags: [R-Project, R, Stock Analysis, Trading Strategy, tidyverse, tidyquant, quantmod, xts, TTR, zoo, dplyr, tidyr, ggplot2]
image: tidyquant-logo.png
---



`tidyquant`, version 0.2.0, is now available on CRAN. If your not already familiar, `tidyquant` integrates the best quantitative resources for collecting and analyzing quantitative data, `xts`, `zoo`, `quantmod` and `TTR`, with the tidy data infrastructure of the `tidyverse` allowing for seamless interaction between each. I'll briefly touch on some of the updates. The package is open source, and you can view the code on the [tidyquant github page](https://github.com/mdancho84/tidyquant).


# Table of Contents

  * [Who Will Benefit?](#benefits)
  * [Updates](#updates)
  * [Example 1: Getting and Visualizing Key Ratios](#example1)
  * [Example 2: Taking the New Zoo Integration for a Spin](#example2)
  * [Conclusion](#conclusion)
  * [Recap](#recap)
  * [Further Reading](#further-reading)


# Who Will Benefit? <a class="anchor" id="benefits"></a>

The `tidyquant` package was developed with two people in mind:

1. __Financial Engineers__: These individuals systematically analyze financial securities (typically stocks) implementing technical trading rules such as MACD, Bollinger Bands, Moving Averages, etc to determine buy and sell signals in an automated way. Charting and implementing modelling algorithms are highly important. 

2. __Financial / Business Analysts__: These individuals systematically analyze financial securities, financial statements, key ratios such as valuation (e.g. price to earnings multiples), financial health (e.g. current ratio), efficiency (e.g. inventory turnover). Getting financial and key ratio data is highly important along with charting and to a lesser degree modelling.


For the __financial engineer__, the package is designed to integrate specialty financial functions within the `tidyverse` so the user doesn't need to jump back and forth between tibbles (tidy data frames) / data frames and xts / zoo time-series objects. Methods like `tq_transform()` and `tq_mutate()` exist to apply the various xts, zoo, quantmod, and TTR functions to data frames, so you never need to leave the tidyverse. Further, if the user needs to switch object classes, coercion functions exist to easily convert (see `as_tibble()` for converting xts to tibbles / data frames, and `as_xts()` for converting data frames to xts).

For the __financial analyst__, the package is designed to enable retrieving key financial data fast and analyzing financial data easy and efficient. The core function, `tq_get()`, has the `get` argument that can be set to:

* _Stock Index_: Retrieve a list of stock symbols for an entire index such as the S&amp;P500 with `tq_get("SP500", get = "stock.index")`. 18 indexes are available.


* _Stock Prices_: Retrieve the stock prices for an individual stock such as Apple with `tq_get("AAPL", get = "stock.prices")`.


* _Financial Statements_: Retrieve income statements, balance sheets, and cash flow statements for both annual and quarterly periods for an individual stock, `tq_get("AAPL", get = "financials")`.


* _Key Ratios_: Retrieve 10-years of historical key ratios (89 total available) for an individual stock, `tq_get("AAPL", get = "key.ratios")`.  

Most importantly, `tidyquant` is designed to work in the `tidyverse`. This means users can use `dplyr` and `tidyr` verbs to slice and dice data and `purrr` to map functions at scale. This enables new capabilities for both financial engineers and analysts. Instead of analyzing one stock at a time, __you can now analyze as many stocks as you want at the same time and systematically compare each__. See the [S&amp;P500](http://www.mattdancho.com/investments/2016/10/23/SP500_Analysis.html) and the more advanced [Russell 2000](http://www.mattdancho.com/investments/2016/11/30/Russell2000_Analysis.html) posts for tutorials on mapping functions to stock lists.

Ok, enough about the benefits. You can read more about them in the [vignette](https://cran.r-project.org/web/packages/tidyquant/vignettes/tidyquant.html). Let's discuss the updates, and I'll go through some examples of the new functionality.

# Updates <a class="anchor" id="updates"></a>

The major updates are:

1. __Key ratios from Morningstar__: Users can now get 89 different key ratios that span 10 years historically. This is great for users that want to know how EPS, P/E, and even financials have changed over time. The source is [Morningstar](https://www.morningstar.com).
    
    
2. __zoo integration__: The `rollapply` functions from the `zoo` package are now fully integrated with `tq_transform` and `tq_mutate`. This means you can calculate rolling averages, maximums, medians, and whatever else your heart desires. 

3. __Making things more intuitive and hassle-free__: These are small tweaks. The transform and mutate function arguments have changed slightly. The `x_fun` argument has been replaced with the more intuitive name `ohlc_fun`, so users know to enter a OHLC function such as Op to select the open price of stock prices. The `.x` and `.y` are replaced with `x` and `y`, which make more sense and don't interfere with mapping functions in `purrr`.


Now, let's go through some examples.

# Prerequisites

First, update `tidyquant` version 0.2.0. Note that you will need the development version 0.2.0.9000 for this post.


{% highlight r %}
# install.packages("tidyquant")
devtools::install_github("mdancho84/tidyquant")
{% endhighlight %}

Next, load `tidyquant`.


{% highlight r %}
# Loads tidyquant, tidyverse, lubridate, quantmod, TTR, xts, zoo
library(tidyquant)
{% endhighlight %}


I also recommend the open-source [RStudio](https://www.rstudio.com/) IDE, which makes _R Programming_ easy and efficient.

# Example 1: Getting and Visualizing Key Ratios <a class="anchor" id="example1"></a>

__You will need to download the development version for this example due to an issue with retrieving key ratios from stocks listed on the NYSE exchange. Key ratios are only available for stocks listed on the NASDAQ exchange in 0.2.0. To continue, upgrade to 0.2.0.9000 using `devtools::install_github("mdancho84/tidyquant")` to get the latest development version.__

Let's say we want to compare the valuation over time using the price to earnings (P/E) multiple. This is often done when comparing several companies in the same industry to determine those that may be below normal valuation (i.e. the price may be at a discount to historical trends and to peers). 

Hypothetically, we'll select some big banks to visualize the P/E valuation: JP Morgan (JPM), Goldman Sachs (GS), Bank of America (BAC), and Citi Group (C). Before we can visualize all stocks, let's first get the key ratios for one stock. Use `tq_get()`, which gets data, and set the `get` argument to "key.ratios".


{% highlight r %}
JPM_key_ratios <- tq_get("JPM", get = "key.ratios")
JPM_key_ratios
{% endhighlight %}



{% highlight text %}
## # A tibble: 7 × 2
##             section               data
##               <chr>             <list>
## 1        Financials <tibble [150 × 5]>
## 2     Profitability <tibble [170 × 5]>
## 3            Growth <tibble [160 × 5]>
## 4         Cash Flow  <tibble [50 × 5]>
## 5  Financial Health <tibble [240 × 5]>
## 6 Efficiency Ratios  <tibble [80 × 5]>
## 7  Valuation Ratios  <tibble [40 × 5]>
{% endhighlight %}

Let's check out the key ratios by unnesting.


{% highlight r %}
JPM_key_ratios %>%
    unnest()
{% endhighlight %}



{% highlight text %}
## # A tibble: 890 × 6
##       section sub.section group        category       date  value
##         <chr>       <chr> <dbl>           <chr>     <date>  <dbl>
## 1  Financials  Financials     1 Revenue USD Mil 2006-12-01  61437
## 2  Financials  Financials     1 Revenue USD Mil 2007-12-01  71372
## 3  Financials  Financials     1 Revenue USD Mil 2008-12-01  67252
## 4  Financials  Financials     1 Revenue USD Mil 2009-12-01 100434
## 5  Financials  Financials     1 Revenue USD Mil 2010-12-01 102694
## 6  Financials  Financials     1 Revenue USD Mil 2011-12-01  97234
## 7  Financials  Financials     1 Revenue USD Mil 2012-12-01  97031
## 8  Financials  Financials     1 Revenue USD Mil 2013-12-01  97367
## 9  Financials  Financials     1 Revenue USD Mil 2014-12-01  95112
## 10 Financials  Financials     1 Revenue USD Mil 2015-12-01  93543
## # ... with 880 more rows
{% endhighlight %}

Yikes, there's 890 rows of data. We can get the unique categories by selecting the "category" column and using the `unique` function. We first `filter` to the section we want, "Valuation Ratios".


{% highlight r %}
JPM_key_ratios %>%
    unnest() %>%
    filter(section == "Valuation Ratios") %>%
    select(category) %>%
    unique()
{% endhighlight %}



{% highlight text %}
## # A tibble: 4 × 1
##             category
##                <chr>
## 1  Price to Earnings
## 2     Price to Sales
## 3      Price to Book
## 4 Price to Cash Flow
{% endhighlight %}

We see that "Price to Earnings" is one of the valuation ratios we can get. Let's `filter` and plot with `ggplot2`.


{% highlight r %}
JPM_key_ratios %>%
    unnest() %>%
    filter(category == "Price to Earnings") %>%
    ggplot(aes(x = date, y = value)) +
    geom_line() +
    labs(title = "P/E Ratios are Easy to Retrieve with tidyquant", 
         x = "", y = "Price to Earnings",
         subtitle = "JPM Valuation Over Time") +
    lims(y = c(0, 30))
{% endhighlight %}

![plot of chunk unnamed-chunk-6](/figure/source/2017-1-8-tidyquant-update-0-2-0/unnamed-chunk-6-1.png)

This is great, but we want to evaluate more than one stock. That's easy to do with `dplyr` and `purrr`. First, we'll make a function to get the P/E ratios using the same procedure as for one stock. Then we'll map it to scale to many stocks.


{% highlight r %}
get_pe_ratios <- function(stock.symbol) {
    tq_get(stock.symbol, get = "key.ratios") %>%
        unnest() %>%
        filter(category == "Price to Earnings")
}
{% endhighlight %}

Now, let's scale it to a tibble of stocks.


{% highlight r %}
bank_stock_pe_ratios <- tibble(symbol = c("JPM", "GS", "BAC", "C")) %>%
    mutate(pe.ratio = map(.x = symbol, get_pe_ratios))
bank_stock_pe_ratios
{% endhighlight %}



{% highlight text %}
## # A tibble: 4 × 2
##   symbol          pe.ratio
##    <chr>            <list>
## 1    JPM <tibble [10 × 6]>
## 2     GS <tibble [10 × 6]>
## 3    BAC <tibble [10 × 6]>
## 4      C <tibble [10 × 6]>
{% endhighlight %}

Now that we have a nested tibble of P/E ratios, we can use the same technique to visualize four stocks as with one stock. We'll unnest the list to get a single level tibble, then plot using `ggplot2` tacking on a facet wrap to split the plots by stock.


{% highlight r %}
bank_stock_pe_ratios %>%
    unnest() %>%
    ggplot(aes(x = date, y = value, col = symbol)) +
    geom_line() +
    labs(title = "P/E Ratios are Easy to Retrieve with tidyquant", 
         x = "", y = "Price to Earnings",
         subtitle = "JPM, GS, BAC, C: Valuation Over Time") +
    lims(y = c(-10, 50)) +
    facet_wrap(~ symbol, ncol = 2)
{% endhighlight %}

![plot of chunk unnamed-chunk-9](/figure/source/2017-1-8-tidyquant-update-0-2-0/unnamed-chunk-9-1.png)

We now have the price to earnings ratio visualization for the four bank stocks. We can see how the valuation of each stock compares historically and against its peers. Just a few observations:

* GS has the highest current valuation at almost 15X earnings. JPM, C, and BAC are all priced closer to 10X earnings. 
* BAC is missing some values, which were cut off by the y-limits. This happened after the financial crisis, which may be a red flag since earnings were impacted more than peers.
* C had negative PE multiples in 2009 and 2010. This was the result of the financial crisis. Again, this may be a red flag.

The P/E multiple is just one of the 89 key ratios that can be used to evaluate stocks that are now available using `tq_get(x, get = "key.ratios")`. 


# Example 2: Taking the New Zoo Integration for a Spin <a class="anchor" id="example2"></a>

The `rollapply` functions from the `zoo` package are useful in calculating rolling averages, medians, maximums, etc, which are integral in separating the trend from the noise from time-series. One common technique is use simple moving averages to determine the crossover (which was discussed in my [last post](http://www.mattdancho.com/code-tools/2017/01/01/tidyquant-introduction.html) on `tidyquant`). A potential issue is that an average is more susceptible to outliers. Instead of using averages, let's use the zoo functions to get the 15-day and 50-day rolling medians, which are more resistent to noise. 

First, we get the past year of stock prices for AAPL using `tq_get(get = "stock.prices", from = today - years(1))`. 


{% highlight r %}
AAPL_prices <- tq_get("AAPL", get = "stock.prices", from = today() - years(1))
AAPL_prices
{% endhighlight %}



{% highlight text %}
## # A tibble: 252 × 7
##          date   open   high   low  close   volume adjusted
##        <date>  <dbl>  <dbl> <dbl>  <dbl>    <dbl>    <dbl>
## 1  2016-01-08  98.55  99.11 96.76  96.96 70798000 94.84967
## 2  2016-01-11  98.97  99.06 97.34  98.53 49739400 96.38550
## 3  2016-01-12 100.55 100.69 98.84  99.96 49154200 97.78438
## 4  2016-01-13 100.32 101.19 97.30  97.39 62439600 95.27031
## 5  2016-01-14  97.96 100.48 95.74  99.52 63170100 97.35395
## 6  2016-01-15  96.20  97.71 95.36  97.13 79010000 95.01597
## 7  2016-01-19  98.41  98.65 95.50  96.66 53087700 94.55621
## 8  2016-01-20  95.10  98.19 93.42  96.79 72334400 94.68337
## 9  2016-01-21  97.06  97.88 94.94  96.30 52161500 94.20404
## 10 2016-01-22  98.63 101.46 98.37 101.42 65800500 99.21260
## # ... with 242 more rows
{% endhighlight %}

Next, we use `tq_mutate()` to add the 15-day and 50-day rolling medians. The first two arguments are `ohlc_fun = Cl`, which selects the closing price using `quantmod` OHLC notation, and `mutate_fun = rollapply`, which sends the closing price to the rollapply function. The next arguments, `width` and `FUN` are arguments that are passed to the `rollapply` function. Width is the number of periods to take the median, and FUN is the function we intend to apply (i.e. median). The workflow is as follows:


{% highlight r %}
AAPL_prices <- AAPL_prices %>%
    tq_mutate(ohlc_fun = Cl, mutate_fun = rollapply, width = 15, FUN = median) %>%
    tq_mutate(ohlc_fun = Cl, mutate_fun = rollapply, width = 50, FUN = median) %>%
    rename(median.15 = rollapply,
           median.50 = rollapply.1)
AAPL_prices
{% endhighlight %}



{% highlight text %}
## # A tibble: 252 × 9
##          date   open   high   low  close   volume adjusted median.15
##        <date>  <dbl>  <dbl> <dbl>  <dbl>    <dbl>    <dbl>     <dbl>
## 1  2016-01-08  98.55  99.11 96.76  96.96 70798000 94.84967        NA
## 2  2016-01-11  98.97  99.06 97.34  98.53 49739400 96.38550        NA
## 3  2016-01-12 100.55 100.69 98.84  99.96 49154200 97.78438        NA
## 4  2016-01-13 100.32 101.19 97.30  97.39 62439600 95.27031        NA
## 5  2016-01-14  97.96 100.48 95.74  99.52 63170100 97.35395        NA
## 6  2016-01-15  96.20  97.71 95.36  97.13 79010000 95.01597        NA
## 7  2016-01-19  98.41  98.65 95.50  96.66 53087700 94.55621        NA
## 8  2016-01-20  95.10  98.19 93.42  96.79 72334400 94.68337        NA
## 9  2016-01-21  97.06  97.88 94.94  96.30 52161500 94.20404        NA
## 10 2016-01-22  98.63 101.46 98.37 101.42 65800500 99.21260        NA
## # ... with 242 more rows, and 1 more variables: median.50 <dbl>
{% endhighlight %}

Two new columns, rollapply and rollapply.1, were added to the tibble. We `rename` these to be more descriptive. The next part is the same visualization code used in the last post. Essentially we `gather` the prices we wish to visualize so they are in one long tibble with two columns, "type" (close, median.15, and median.50) and "value". We color each line by "type" using the ggplot aesthetics.



{% highlight r %}
my_palette <- c("black", "blue", "red")
AAPL_prices %>%
    select(date, close, median.15, median.50) %>%
    gather(key = type, value = price, close:median.50) %>%
    ggplot(aes(x = date, y = price, col = type)) +
    geom_line() +
    scale_colour_manual(values = my_palette) + 
    theme(legend.position="bottom") +
    ggtitle("Simple Moving Medians are a Breeze with tidyquant") +
    xlab("") + 
    ylab("Stock Price")
{% endhighlight %}

![plot of chunk unnamed-chunk-12](/figure/source/2017-1-8-tidyquant-update-0-2-0/unnamed-chunk-12-1.png)

And, we're done. We now have an alternative to the SMA that is more resistant to changes caused by outliers. 

# Conclusion <a class="anchor" id="conclusion"></a>

The `tidyquant` package is a useful tool for both financial engineers and financial analysts, with tools to collect, analyze, visualize and model financial data. 
 
# Recap <a class="anchor" id="recap"></a>

You should now have a good understanding of the benefits and new features of the `tidyquant` package. We addressed some of the benefits that financial engineers and analysts can get from using the package. We discussed new features including key ratios and the `zoo` integration. Eighty nine key ratios are now available using `tq_get()`. The `zoo` `rollapply()` function can be used with `tq_mutate()` and `tq_transform()`. This example just scratches the surface of the power of `tidyquant`. See the [vignette](https://cran.r-project.org/web/packages/tidyquant/vignettes/tidyquant.html) for a detailed discussion on each of the `tidyquant` features.


# Further Reading <a class="anchor" id="further-reading"></a>

1. __[tidyquant Vignette](https://cran.r-project.org/web/packages/tidyquant/vignettes/tidyquant.html)__: This tutorial just scratches the surface of `tidyquant`. The vignette explains much, much more!

2. __[R for Data Science](http://r4ds.had.co.nz/)__: A free book that thoroughly covers the `tidyverse` packages. 

3. __[Quantmod Website](http://www.quantmod.com/)__: Covers many of the `quantmod` functions. Also, see the [quantmod vignette](https://CRAN.R-project.org/package=quantmod).

4. __[Extensible Time-Series Website](http://joshuaulrich.github.io/xts/index.html)__: Covers many of the `xts` functions. Also, see the [xts vignette](https://CRAN.R-project.org/package=xts). 

5. __[TTR Vignette](https://CRAN.R-project.org/package=TTR)__: Covers each of the `TTR` functions. 
