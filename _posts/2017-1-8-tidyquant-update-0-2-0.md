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
## [1] NA
{% endhighlight %}

Let's check out the key ratios by unnesting.


{% highlight r %}
JPM_key_ratios %>%
    unnest()
{% endhighlight %}



{% highlight text %}
## Error in UseMethod("unnest_"): no applicable method for 'unnest_' applied to an object of class "logical"
{% endhighlight %}

















