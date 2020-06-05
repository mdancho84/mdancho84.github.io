---
layout: post
title: "(JUST RELEASED) timetk 2.0.0: Visualize, Wrangle, and Preprocess Time Series Data"
date:   2020-06-05 09:24:01
excerpt: "Timetk Version 2.0.0 has just been released. Here's what's new for time series data analysis."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-Timeseries, Learn-Machine-Learning, R, timetk]
image: 2020-06-05-timetk/timetk_version_2.jpg
image_preview: 2020-06-05-timetk/timetk_version_2.jpg
---




__I'm EXTACTIC 😃 to announce the release of `timetk` version 2.0.0.__ This is a monumental release that significantly expands the functionality of `timetk` to go WAY BEYOND the original goals of the package. Now, the package is a ___full-featured time series visualization, data wrangling, and preprocessing toolkit.___ 

I'll go into detail about [what you can do in 1-line of code](#single-line-of-code), and I have several more articles coming on how to use several of the new features. 

But first a little history...

## Background

Time series has been a passion project for me since my days of forecasting sales and economic data for a manufacturing company I worked for. My one gripe has always been that I had to use 50 different packages (`zoo`, `xts`, `dplyr`, etc) made by 50 different people to perform common data wrangling and visualization analyses. `timetk` solves this problem by making a consistent approach to visualize, wrangle, and preprocess time series data inside the `tidyverse` and `tidymodels` ecosystem. 

With advancements in tidy-time series, the combination of the `tidyverse` and time series is an amazingly powerful concept. I'm not the first one to think of this idea. In fact, Davis Vaughan created `tibbletime` and the "tidyverts" (Rob Hyndman, Earo Wang, and Mitchell O'Hara-Wild) have created a whole forecasting and data wrangling system using a `tsibble` data structure. 

These are amazing packages, but they solve different needs. `tibbletime` focused on data wrangling. The `tidyverts` focused on forecasting at scale using ARIMA and company. 

<div class="pull-right hidden-xs" style="width:50%; margin-left:20px;">
  <a href="#" target="_blank">
  <img class="img-responsive" src="/assets/2020-06-05-timetk/timetk_version_2.jpg"> 
  </a>
  <p class="date text-center">Visualize, wrangle, and preprocess time series data</p>
</div>

My needs are different. I need:

- __Interactive visualizations__ for easy data exploration
- __Time series data wrangling__ for doing time series summarization, filtering, padding, and simple date-based arithmetic
- __Transformations and preprocessing__ that fit into the NEW `tidymodels` ecosystem (so I can do _Time Series Machine Learning_ in addition to ARIMA forecasting)

So I created `timetk` version 2.0.0 to solve these needs. 


Here's the new _mission_, and what you can do _in 1-line of code_ with `timetk` >= 2.0.0. 

## Mission

To make it easy to <span style="color:blue;">___visualize, wrangle and preprocess time series data___</span> for forecasting and machine learning prediction. 

## What Can You Do in 1-Line of Code? {#single-line-of-code}

First step, load these R packages.


{% highlight r %}
library(tidyverse)
library(lubridate)
library(timetk)
{% endhighlight %}

### Investigate a time series...

This is fun! In 1 line of code we can visualize a dataset. 


{% highlight r %}
# Static ggplot
taylor_30_min %>%
    plot_time_series(date, value, .color_var = week(date),
                     .interactive = FALSE, .color_lab = "Week")
{% endhighlight %}

![plot of chunk unnamed-chunk-2](/figure/source/2020-06-05-timetk-vesion-2-announcement/unnamed-chunk-2-1.png)

__So what did we just do?__

We are exploring `taylor_30_min`, which is a classic electricity-demand time series that comes from one of my all-time-favorite packages, `forecast`. It's been updated to the `tibble` structure with a time stamp column called "date" and a value column called "value". 

We can plotted it using `plot_time_series()`. I set `.interactive = FALSE` to return a `ggplot` (I'll do that for all of the visualizations in this tutorial). The default is to return an interactive `plotly` graph, which is great for `shiny` apps, `rmarkdown` HTML documents, and super powerful for exploring time series (zooming, panning, etc). 

__Want the an interactive `plotly` visualization?__ 

Just try this code and explore the `plotly` visualization.


{% highlight r %}
# INTERACTIVE Plotly
taylor_30_min %>%
    plot_time_series(date, value, .color_var = week(date),
                     .interactive = TRUE, .plotly_slider = TRUE, .color_lab = "Week")
{% endhighlight %}

Let's pick up the pace. Here's some more amazing visualization capabilities!

### Visualize anomalies...

We can visualize anomalies for multiple time series groups. Here we use `group_by()` to group the time series. Note this is a different dataset, `walmart_sales_weekly`.


{% highlight r %}
walmart_sales_weekly %>%
    group_by(Store, Dept) %>%
    plot_anomaly_diagnostics(Date, Weekly_Sales, 
                             .facet_ncol = 3, .interactive = FALSE)
{% endhighlight %}

![plot of chunk unnamed-chunk-4](/figure/source/2020-06-05-timetk-vesion-2-announcement/unnamed-chunk-4-1.png)

### Make a seasonality plot...

We can get seasonality plots. 


{% highlight r %}
taylor_30_min %>%
    plot_seasonal_diagnostics(date, value, .interactive = FALSE)
{% endhighlight %}

![plot of chunk unnamed-chunk-5](/figure/source/2020-06-05-timetk-vesion-2-announcement/unnamed-chunk-5-1.png)

### Inspect autocorrelation, partial autocorrelation (and cross correlations too)...

And we can search the Autocorrelation and Partial Autocorrelation. 


{% highlight r %}
taylor_30_min %>%
    plot_acf_diagnostics(date, value, .lags = "1 week", .interactive = FALSE)
{% endhighlight %}

![plot of chunk unnamed-chunk-6](/figure/source/2020-06-05-timetk-vesion-2-announcement/unnamed-chunk-6-1.png)




## Documentation

I have several more tutorials and a [full time series course](https://mailchi.mp/business-science/time-series-forecasting-course-coming-soon) coming. [Visit the timetk website documentation](https://business-science.github.io/timetk/) for more information and a [complete list of function references](https://business-science.github.io/timetk/reference/index.html). 


## Time Series Course <small>(Coming Soon)</small>

I teach `timetk` in my __Time Series Analysis & Forecasting Course__. If interested in learning Pro-Forecasting Strategies then [join my waitlist](https://mailchi.mp/business-science/time-series-forecasting-course-coming-soon). The course is coming soon. 

<div class="" style="width:100%; ">
  <a href="#" target="_blank">
  <img class="img-responsive" src="/assets/2020-06-05-timetk/time_series_course.jpg"> 
  </a>
</div>

You will learn:

- Time Series Preprocessing, Noise Reduction, & Anomaly Detection
- Feature engineering using lagged variables & external regressors
- Hyperparameter tuning
- Time series cross-validation
- Ensembling Multiple Machine Learning & Univariate Modeling Techniques (Competition Winner)
- NEW - Deep Learning with RNNs (Competition Winner)
- and more.

<p class="text-center" style="font-size:30px;">
<a href="https://mailchi.mp/business-science/time-series-forecasting-course-coming-soon">Signup for the Time Series Course waitlist</a>
</p>


# Have questions on using Timetk for time series?

Make a comment in the chat below. 👇

And, if you plan on using `timetk` for your business, it's a no-brainer - [Join my Time Series Course Waitlist](https://mailchi.mp/business-science/webinars) (It's coming, it's really insane). 
