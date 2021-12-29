---
layout: post
title: "Time Series in 5-Minutes, Part 5: Anomaly Detection"
date:   2020-09-02 06:00:00
excerpt: "Anomaly detection is the process of identifying items or events in data sets that are different than the norm. Anomaly detection is an important part of time series analysis: (1) Detecting anomalies can signify special events, and (2) Cleaning anomalies can improve forecast error."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-Timeseries, Learn-Machine-Learning, R, timetk]
image: /assets/2020-09-02-time-series-anomaly-detection/time_series_anomaly_detection_cover.png
image_preview: /assets/2020-09-02-time-series-anomaly-detection/time_series_anomaly_detection_cover.png
---



__Have 5-minutes? Then let's learn time series.__ In this short articles series, I highlight how you can get up to speed quickly on important aspects of time series analysis. Today we are focusing analyzing anomalies in time series data.

### Updates

This article has been updated. [View the updated Time Series in 5-Minutes article at Business Science.](https://www.business-science.io/code-tools/2020/09/02/five-minute-time-series-anomaly-detection.html) 

## Time Series in 5-Mintues <br><small>Articles in this Series</small>

<div class="pull-right hidden-xs" style="width:50%; margin-left:20px;">
  <a href="#" target="_blank">
  <img class="img-responsive" src="/assets/2020-09-02-time-series-anomaly-detection/time_series_anomaly_detection_cover.png"> 
  </a>
  <p class="date text-center">Anomaly Detection - A fundamental tool in your arsenal</p>
</div>

I just released `timetk` 2.0.0 ([read the release announcement](https://www.business-science.io/code-tools/2020/06/05/timetk-vesion-2-announcement.html)). A ton of new functionality has been added. We'll discuss some of the key pieces in this article series:

- [Part 1, Data Wrangling and Rolling Calculations](https://www.business-science.io/code-tools/2020/08/19/five-minute-time-series-rolling-calculations.html)
- [Part 2, The Time Plot](https://www.business-science.io/code-tools/2020/06/08/five-minute-time-series-time-plot.html)
- [Part 3, Autocorrelation](https://www.business-science.io/code-tools/2020/06/17/five-minute-time-series-part-2.html)
- [Part 4, Seasonality](https://www.business-science.io/code-tools/2020/08/26/five-minute-time-series-seasonality.html)
- [Part 5, Anomalies and Anomaly Detection](/code-tools/2020/09/02/five-minute-time-series-anomaly-detection.html)
- [Part 6, Modeling Time Series Data](/code-tools/2020/09/09/five-minute-time-series-modeling-data.html)

👉 [__Register for our blog to get new articles as we release them.__](https://mailchi.mp/business-science/blog-registration)  

# Have 5-Minutes? <br><small>Then let's learn Time Series Anomaly Detection</small>

__Anomaly detection__ is an important part of time series analysis:

1. Detecting anomalies can signify special events
2. Cleaning anomalies can improve forecast error

In this short tutorial, we will cover the `plot_anomaly_diagnostics()` and `tk_anomaly_diagnostics()` functions for visualizing and automatically detecting anomalies at scale. 


{% include cta_rtrack.html %}


# Let's Get Started

First setup the libraries we'll use:

{% highlight r %}
library(tidyverse)
library(timetk)
{% endhighlight %}


# Data

This tutorial will use the `walmart_sales_weekly` dataset: 

- Weekly
- Sales spikes at various events 

{% highlight r %}
walmart_sales_weekly
{% endhighlight %}

![Data Summary](/assets/2020-09-02-time-series-anomaly-detection/data_summary.png)



# Automatic Anomaly Detection

To get the data on the anomalies, we use `tk_anomaly_diagnostics()`, the preprocessing function. 

The `tk_anomaly_diagnostics()` method for anomaly detection implements a 2-step process to detect outliers in time series.

#### Step 1: Detrend & Remove Seasonality using STL Decomposition

The decomposition separates the "season" and "trend" components from the "observed" values leaving the "remainder" for anomaly detection.

The user can control two parameters: frequency and trend.

1. `.frequency`: Adjusts the "season" component that is removed from the "observed" values.
2. `.trend`: Adjusts the trend window (t.window parameter from `stats::stl()` that is used.

The user may supply both .frequency and .trend as time-based durations (e.g. "6 weeks") or numeric values (e.g. 180) or "auto", which predetermines the frequency and/or trend based on the scale of the time series using the `tk_time_scale_template()`.

#### Step 2: Anomaly Detection

Once "trend" and "season" (seasonality) is removed, anomaly detection is performed on the "remainder". Anomalies are identified, and boundaries (recomposed_l1 and recomposed_l2) are determined.

The Anomaly Detection Method uses an inner quartile range (IQR) of +/-25 the median.

IQR Adjustment, alpha parameter

With the default alpha = 0.05, the limits are established by expanding the 25/75 baseline by an IQR Factor of 3 (3X). The IQR Factor = 0.15 / alpha (hence 3X with alpha = 0.05):

- To increase the IQR Factor controlling the limits, decrease the alpha, which makes it more difficult to be an outlier.
- Increase alpha to make it easier to be an outlier.
- The IQR outlier detection method is used in `forecast::tsoutliers()`.
- A similar outlier detection method is used by Twitter's AnomalyDetection package.
- Both Twitter and Forecast tsoutliers methods have been implemented in Business Science's anomalize package.

{% highlight r %}
walmart_sales_weekly %>%
  group_by(Store, Dept) %>%
  tk_anomaly_diagnostics(Date, Weekly_Sales)
{% endhighlight %}

![Anomaly Detection](/assets/2020-09-02-time-series-anomaly-detection/automatic_anomaly_detection_summary.png)


# Anomaly Visualization

Using the `plot_anomaly_diagnostics()` function, we can interactively detect anomalies at scale. 

The `plot_anomaly_diagnostics()` is a visualtion wrapper for `tk_anomaly_diagnostics()` group-wise anomaly detection, implementing the 2-step process from above.

{% highlight r %}
walmart_sales_weekly %>%
  group_by(Store, Dept) %>%
  plot_anomaly_diagnostics(Date, Weekly_Sales, .facet_ncol = 2)
{% endhighlight %}

![Anomaly Diagnostics](/assets/2020-09-02-time-series-anomaly-detection/anomaly_diagnostics.png)


{% include cta_rtrack.html %}


# Have questions on using Timetk for time series?

Make a comment in the chat below. 👇

And, if you plan on using `timetk` for your business, it's a no-brainer - [Join the Time Series Course](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting). 
