---
layout: post
title: "Time Series in 5-Minutes, Part 2: Autocorrelation and Cross Correlation"
date:   2020-06-17 08:01:01
excerpt: "The 2nd part in our Time Series in 5-minutes article series. Learn how to visualize autocorrelations and cross correlation."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-Timeseries, Learn-Machine-Learning, R, timetk]
image: 2020-06-17-acf/autocorrelation.jpg
image_preview: 2020-06-17-acf/autocorrelation.jpg
---



__Have 5-minutes? Then let's learn time series.__ In this short articles series, I highlight how you can get up to speed quickly on important aspects of time series analysis. Today we are focusing on a critical visualization technique: __Autocorrelation and Cross Correlation__. Learn how to make _interactive_ (`plotly`) and _static_ (`ggplot2`) visualizations easily with `timetk`. 

### Updates

This article has been updated. [View the updated Time Series in 5-Minutes article at Business Science.](#) 

## Time Series in 5-Mintues <br><small>Articles in this Series</small>

<div class="pull-right hidden-xs" style="width:50%; margin-left:20px;">
  <a href="#" target="_blank">
  <img class="img-responsive" src="/assets/2020-06-17-acf/autocorrelation.jpg"> 
  </a>
  <p class="date text-center">The ACF Plot - A fundamental tool in your arsenal</p>
</div>

I just released `timetk` 2.0.0 ([read the release announcement](https://www.business-science.io/code-tools/2020/06/05/timetk-vesion-2-announcement.html)). A ton of new functionality has been added. We'll discuss some of the key pieces in this article series:

- [Part 1, The Time Plot](/code-tools/2020/06/08/five-minute-time-series-time-plot.html)
- [Part 2, Autocorrelation](/code-tools/2020/06/17/five-minute-time-series-part-2.html)
- Part 3, Seasonality
- Part 4, Anomalies and Anomaly Detection
- Part 5, Dealing with Missing Time Series Data

👉 [__Register for our blog to get new articles as we release them.__](https://mailchi.mp/business-science/blog-registration)  

# Have 5-Minutes? <br><small>Then let's learn the Time Plot</small>

This tutorial focuses on, `plot_acf_diagnostics()`, a workhorse time-series plotting function that makes interactive:

- __ACF and PACF Plots__ (Autocorrelation and Partial Autocorrelation)
- __CCF Plots__ (Cross Correlation)

in interactive (`plotly`) and static (`ggplot2`) visualization formats. 

{% include course_promo_time_series.md %}

<br>

### Libraries

Load the following libraries. For the purposes of this tutorial, I'm setting all plots to static `ggplot2` using `interactive <- FALSE`, but I encourage you to switch this to `TRUE` to see how easy it is to make interactive `plotly` plots. 


{% highlight r %}
library(tidyverse)
library(lubridate)
library(timetk)

# Setup for the plotly charts (# FALSE returns ggplots)
interactive <- FALSE
{% endhighlight %}

## Part 1: Autocorrelation

___Autocorrelation___ is the presence of correlation that is connected to lagged versions of a time series. In laymen's terms, this means that past history is related to future history. We can visualize this relationship with an __ACF plot.__

First, plot the time series we'll be looking at `taylor_30_min` using `plot_time_series()`. We learned how to plot time series with the Time Plot in [Part 1 of this series](/code-tools/2020/06/08/five-minute-time-series-time-plot.html). 


{% highlight r %}
taylor_30_min %>%
    plot_time_series(date, value, .interactive = interactive)
{% endhighlight %}

![plot of chunk unnamed-chunk-2](/figure/source/2020-06-17-five-minute-time-series-part-2/unnamed-chunk-2-1.png)

This series represents hourly electricity demand taken at 30-min intervals for about 3-months. We can visualize the autocorrelation in the series using a new function, `plot_acf_diagnostics()`. 


{% highlight r %}
taylor_30_min %>%
    plot_acf_diagnostics(date, value, .interactive = interactive)
{% endhighlight %}

![plot of chunk unnamed-chunk-3](/figure/source/2020-06-17-five-minute-time-series-part-2/unnamed-chunk-3-1.png)


### Why are ACF and PACF important?

From the `plot_acf_diagnostics()` we get:

- __ACF Plot:__ The autocorrleation (y-axis), which is the relationship between the series and each progressive lag (x-axis) with the series. 

- __PACF Plot:__ The partial-autocorrelation vs lags. The Partial Autocorrelation shows how much each progressive ACF adds to the predictability. In other words, lags that are correlated with each other are de-weighted so the most important lags are present. 

__These 2 visualizations help us model relationships and develop predictive forecasts__:

- ___Seasonality:___ Possible Fourier Series we can use to model a relationship
- ___Lags as Predictors___: We can find important lags to include in our models

If you want to learn __Time Series Forecasting for Business__, it's a no-brainer - [Join my Time Series Course Waitlist](https://mailchi.mp/business-science/time-series-forecasting-course-coming-soon) (It's coming, it's really insane).

### Grouped ACF and PACFs

Often in time series we are dealing with more than one series - these are called groups. Let's switch to a different hourly dataset, `m4_hourly`, that contains 4-groups. 


{% highlight r %}
m4_hourly %>%
    group_by(id) %>%
    plot_time_series(date, value, 
                     .facet_ncol = 2, 
                     .facet_scale = "free",
                     .interactive = interactive)
{% endhighlight %}

![plot of chunk unnamed-chunk-4](/figure/source/2020-06-17-five-minute-time-series-part-2/unnamed-chunk-4-1.png)

We can get the ACF and PACF plots easily using `plot_acf_diagnostics()`. We can isolate 14-days of lags using the `.lags = "14 days"`. 


{% highlight r %}
m4_hourly %>%
    group_by(id) %>%
    plot_acf_diagnostics(
        date, value,               # ACF & PACF
        .lags = "14 days",         # 14-Days of hourly lags
        .interactive = interactive
    )
{% endhighlight %}

![plot of chunk unnamed-chunk-5](/figure/source/2020-06-17-five-minute-time-series-part-2/unnamed-chunk-5-1.png)

### Why use time series groups?

- Using groups helps us to evaluate time series __much faster__ than analyzing every time series individually. We're able to quickly evaluate 4 time series. 

- Grouped analysis can highlight __similarities and differences between time series__. We can see H150 and H410 have spikes at 1-week in addition to the daily frequency.


## Part 2: Cross Correlation

The last example here is __Cross Correlation__, an important technique for finding external predictors. We start with a new time series, `walmart_sales_weekly`, which contains weekly sales for walmart, time series groups consisting of various departments, and several (potential) predictors including temperature and fuel price. 

_Note that you will need to the development version of `timetk` for this functionality until `timetk` 2.0.1 is released._ You can upgrade using `devtools::install_github("business-science/timetk")`.


{% highlight r %}
walmart_sales_weekly
{% endhighlight %}



{% highlight text %}
## # A tibble: 1,001 x 17
##    id    Store  Dept Date       Weekly_Sales IsHoliday Type    Size Temperature
##    <fct> <dbl> <dbl> <date>            <dbl> <lgl>     <chr>  <dbl>       <dbl>
##  1 1_1       1     1 2010-02-05       24924. FALSE     A     151315        42.3
##  2 1_1       1     1 2010-02-12       46039. TRUE      A     151315        38.5
##  3 1_1       1     1 2010-02-19       41596. FALSE     A     151315        39.9
##  4 1_1       1     1 2010-02-26       19404. FALSE     A     151315        46.6
##  5 1_1       1     1 2010-03-05       21828. FALSE     A     151315        46.5
##  6 1_1       1     1 2010-03-12       21043. FALSE     A     151315        57.8
##  7 1_1       1     1 2010-03-19       22137. FALSE     A     151315        54.6
##  8 1_1       1     1 2010-03-26       26229. FALSE     A     151315        51.4
##  9 1_1       1     1 2010-04-02       57258. FALSE     A     151315        62.3
## 10 1_1       1     1 2010-04-09       42961. FALSE     A     151315        65.9
## # … with 991 more rows, and 8 more variables: Fuel_Price <dbl>,
## #   MarkDown1 <dbl>, MarkDown2 <dbl>, MarkDown3 <dbl>, MarkDown4 <dbl>,
## #   MarkDown5 <dbl>, CPI <dbl>, Unemployment <dbl>
{% endhighlight %}

We can visualize Cross Correlations using the `.ccf_vars` between Weekly Sales and Temperature and Fuel Price. 


{% highlight r %}
walmart_sales_weekly %>%
    select(id, Date, Weekly_Sales, Temperature, Fuel_Price) %>%
    group_by(id) %>%
    plot_acf_diagnostics(
        Date, Weekly_Sales,        # ACF & PACF
        .ccf_vars           = c(Temperature, Fuel_Price),   # CCFs
        .show_ccf_vars_only = TRUE,                         # Toggle just CCFs?
        .lags               = "2 years",                    # Lags
        .interactive        = interactive
    )
{% endhighlight %}

![plot of chunk unnamed-chunk-7](/figure/source/2020-06-17-five-minute-time-series-part-2/unnamed-chunk-7-1.png)


{% include course_promo_time_series.md %}

<br>

{% include cta_rtrack.html %}


# Have questions on using Timetk for time series?

Make a comment in the chat below. 👇

And, if you plan on using `timetk` for your business, it's a no-brainer - [Join my Time Series Course Waitlist](https://mailchi.mp/business-science/time-series-forecasting-course-coming-soon) (It's coming, it's really insane). 
