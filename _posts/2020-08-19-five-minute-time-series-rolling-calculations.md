---
layout: post
title: "Time Series in 5-Minutes, Part 1: Data Wrangling and Rolling Calculations"
date:   2020-08-19 08:10:00
excerpt: "A collection of tools for working with time series in R Time series data wrangling is an essential skill for any forecaster. timetk includes the essential data wrangling tools."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-Timeseries, Learn-Machine-Learning, R, timetk]
image: 2020-08-19-time-series-rolling-calcuations/time-series-rolling-calculations.png
image_preview: 2020-08-19-time-series-rolling-calcuations/time-series-rolling-calculations-preview.png
---



__Have 5-minutes? Then let's learn time series.__ In this short articles series, I highlight how you can get up to speed quickly on important aspects of time series analysis. Today we are focusing preparing data for timeseries analysis rolling calculations.

### Updates

This article has been updated. [View the updated Time Series in 5-Minutes article at Business Science.](https://www.business-science.io/code-tools/2020/08/19/five-minute-time-series-rolling-calculations.html) 

## Time Series in 5-Mintues <br><small>Articles in this Series</small>

<div class="pull-right hidden-xs" style="width:50%; margin-left:20px;">
  <a href="#" target="_blank">
  <img class="img-responsive" src="/assets/2020-08-19-time-series-rolling-calcuations/time-series-rolling-calculations.png"> 
  </a>
  <p class="date text-center">Rolling Calculations - A fundamental tool in your arsenal</p>
</div>

I just released `timetk` 2.0.0 ([read the release announcement](https://www.business-science.io/code-tools/2020/06/05/timetk-vesion-2-announcement.html)). A ton of new functionality has been added. We'll discuss some of the key pieces in this article series:

- [Part 1, Data Wrangling and Rolling Calculations](https://www.business-science.io/code-tools/2020/08/19/five-minute-time-series-rolling-calculations.html)
- [Part 2, The Time Plot](https://www.business-science.io/code-tools/2020/06/08/five-minute-time-series-time-plot.html)
- [Part 3, Autocorrelation](https://www.business-science.io/code-tools/2020/06/17/five-minute-time-series-part-2.html)
- [Part 4, Seasonality](https://www.business-science.io/code-tools/2020/08/26/five-minute-time-series-seasonality.html)
- [Part 5, Anomalies and Anomaly Detection](/code-tools/2020/09/02/five-minute-time-series-anomaly-detection.html)
- Part 6, Dealing with Missing Time Series Data

👉 [__Register for our blog to get new articles as we release them.__](https://mailchi.mp/business-science/blog-registration)  

# Have 5-Minutes? <br><small>Then let's learn Rolling Calculations</small>

> A collection of tools for working with time series in R
Time series data wrangling is an essential skill for any forecaster. `timetk` includes the essential data wrangling tools. In this tutorial:

- __Summarise by Time__ - For time-based aggregations
- __Filter by Time__ - For complex time-based filtering
- __Pad by Time__ - For filling in gaps and going from _low to high frequency_
- __Slidify__ - For turning any function into a sliding (rolling) function

Additional concepts covered:

- __Imputation__ - Needed for Padding (See Low to High Frequency)
- __Advanced Filtering__ - Using the new add time `%+time` infix operation (See _Padding Data: Low to High Frequency_)
- __Visualization__ - `plot_time_series()` for all visualizations

{% include course_promo_time_series.md %}



# Let's Get Started

{% highlight r %}
library(tidyverse)
library(tidyquant) 
library(timetk)
{% endhighlight %}

# Data

This tutorial will use the `FANG` dataset: 

- Daily
- Irregular (missing business holidays and weekends)
- 4 groups (FB, AMZN, NFLX, and GOOG). 

{% highlight r %}
FANG
{% endhighlight %}

![adjusted column](/assets/2020-08-19-time-series-rolling-calcuations/adjusted-column.png)


The adjusted column contains the adjusted closing prices for each day. 

{% highlight r %}
FANG %>%
  group_by(symbol) %>%
  plot_time_series(date, adjusted, .facet_ncol = 2, .interactive = FALSE)
{% endhighlight %}

![times series plot 1](/assets/2020-08-19-time-series-rolling-calcuations/time-series-plot-1.png)

The volume column contains the trade volume (number of times the stock was transacted) for the day. 

{% highlight r %}
FANG %>%
  group_by(symbol) %>%
  plot_time_series(date, volume, .facet_ncol = 2, .interactive = FALSE)
{% endhighlight %}

![times series plot 2](/assets/2020-08-19-time-series-rolling-calcuations/time-series-plot-2.png)


# Summarize by Time

`summarise_by_time()` aggregates by a period. It's great for:

- Period Aggregation - `SUM()`
- Period Smoothing - `AVERAGE()`, `FIRST()`, `LAST()`

## Period Summarization

Objective: Get the total trade volume by quarter

- Use `SUM()`
- Aggregate using `.by = "quarter"`

{% highlight r %}
FANG %>%
  group_by(symbol) %>%
  summarise_by_time(
    date, .by = "quarter",
    volume = SUM(volume)
  ) %>%
  plot_time_series(date, volume, .facet_ncol = 2, .interactive = FALSE, .y_intercept = 0)
{% endhighlight %}

![times series plot 3](/assets/2020-08-19-time-series-rolling-calcuations/time-series-plot-3.png)


## Period Smoothing

Objective: Get the first value in each month

- We can use `FIRST()` to get the first value, which has the effect of reducing the data (i.e. smoothing). We could use `AVERAGE()` or `MEDIAN()`. 
- Use the summarization by time: `.by = "month"` to aggregate by month. 

{% highlight r %}
FANG %>%
  group_by(symbol) %>%
  summarise_by_time(
    date, .by = "month",
    adjusted = FIRST(adjusted)
  ) %>%
  plot_time_series(date, adjusted, .facet_ncol = 2, .interactive = FALSE)
{% endhighlight %}

![times series plot 4](/assets/2020-08-19-time-series-rolling-calcuations/time-series-plot-4.png)


# Filter By Time

Used to quickly filter a continuous time range. 

## Time Range Filtering

Objective: Get the adjusted stock prices in the 3rd quarter of 2013. 

- `.start_date = "2013-09"`: Converts to "2013-09-01
- `.end_date = "2013"`: Converts to "2013-12-31
- A more advanced example of filtering using `%+time`  and `%-time` is shown in _"Padding Data: Low to High Frequency"_. 

{% highlight r %}
FANG %>%
  group_by(symbol) %>%
  filter_by_time(date, "2013-09", "2013") %>%
  plot_time_series(date, adjusted, .facet_ncol = 2, .interactive = FALSE)
{% endhighlight %}

![times series plot 5](/assets/2020-08-19-time-series-rolling-calcuations/time-series-plot-5.png)


# Padding Data

Used to fill in (pad) gaps and to go from from low frequency to high frequency. This function uses the awesome `padr` library for filling and expanding timestamps. 

## Fill in Gaps

Objective: Make an irregular series regular. 

- We will leave padded values as `NA`. 
- We can add a value using `.pad_value` or we can impute using a function like `ts_impute_vec()` (shown next). 

{% highlight r %}
FANG %>%
  group_by(symbol) %>%
  pad_by_time(date, .by = "auto") # Guesses .by = "day"
{% endhighlight %}

![padding data](/assets/2020-08-19-time-series-rolling-calcuations/padding-data.png)


## Low to High Frequency

Objective: Go from Daily to Hourly timestamp intervals for 1 month from the start date. Impute the missing values.

- `.by = "hour"` pads from daily to hourly
- Imputation of hourly data is accomplished with `ts_impute_vec()`, which performs linear interpolation when `period = 1`.
- Filtering is accomplished using:  
    - "start": A special keyword that signals the start of a series
    - `FIRST(date) %+time% "1 month"`: Selecting the first date in the sequence then using a special infix operation, `%+time%`, called "add time". In this case I add "1 month". 

{% highlight r %}
FANG %>%
  group_by(symbol) %>%
  pad_by_time(date, .by = "hour") %>%
  mutate_at(vars(open:adjusted), .funs = ts_impute_vec, period = 1) %>%
  filter_by_time(date, "start", FIRST(date) %+time% "1 month") %>%
  plot_time_series(date, adjusted, .facet_ncol = 2, .interactive = FALSE) 
{% endhighlight %}

![times series plot 6](/assets/2020-08-19-time-series-rolling-calcuations/time-series-plot-6.png)



# Sliding (Rolling) Calculations

We have a new function, `slidify()` that turns any function into a sliding (rolling) window function. It takes concepts from `tibbletime::rollify()` and it improves them with the R package `slider`.

## Rolling Mean

Objective: Calculate a "centered" simple rolling average with partial window rolling and the start and end windows. 

- `slidify()` turns the `AVERAGE()` function into a rolling average. 

{% highlight r %}
# Make the rolling function
roll_avg_30 <- slidify(.f = AVERAGE, .period = 30, .align = "center", .partial = TRUE)
# Apply the rolling function
FANG %>%
  select(symbol, date, adjusted) %>%
  group_by(symbol) %>%
  # Apply Sliding Function
  mutate(rolling_avg_30 = roll_avg_30(adjusted)) %>%
  pivot_longer(cols = c(adjusted, rolling_avg_30)) %>%
  plot_time_series(date, value, .color_var = name,
                   .facet_ncol = 2, .smooth = FALSE, 
                   .interactive = FALSE)
{% endhighlight %}

![times series plot 7](/assets/2020-08-19-time-series-rolling-calcuations/time-series-plot-7.png)

For simple rolling calculations (rolling average), we can accomplish this operation faster with `slidify_vec()` - A vectorized rolling function for simple summary rolls (e.g. `mean()`, `sd()`, `sum()`, etc)

{% highlight r %}
FANG %>%
  select(symbol, date, adjusted) %>%
  group_by(symbol) %>%
  # Apply roll apply Function
  mutate(rolling_avg_30 = slidify_vec(adjusted,  ~ AVERAGE(.), 
                                      .period = 30, .partial = TRUE))
{% endhighlight %}

![rolling mean](/assets/2020-08-19-time-series-rolling-calcuations/rolling-mean-table.png)

## Rolling Regression

Objective: Calculate a rolling regression.

- This is a complex sliding (rolling) calculation that requires multiple columns to be involved. 
- `slidify()` is built for this.
- Use the multi-variable `purrr` `..1`, `..2`, `..3`, etc notation to setup a function

{% highlight r %}
# Rolling regressions are easy to implement using `.unlist = FALSE`
lm_roll <- slidify(~ lm(..1 ~ ..2 + ..3), .period = 90, 
                   .unlist = FALSE, .align = "right")
FANG %>%
  select(symbol, date, adjusted, volume) %>%
  group_by(symbol) %>%
  mutate(numeric_date = as.numeric(date)) %>%
  # Apply rolling regression
  mutate(rolling_lm = lm_roll(adjusted, volume, numeric_date)) %>%
  filter(!is.na(rolling_lm))
{% endhighlight %}

![rolling regression](/assets/2020-08-19-time-series-rolling-calcuations/rolling-regression-table.png)


{% include course_promo_time_series.md %}

<br>

{% include cta_rtrack.html %}


# Have questions on using Timetk for time series?

Make a comment in the chat below. 👇

And, if you plan on using `timetk` for your business, it's a no-brainer - [Join my Time Series Course Waitlist](https://mailchi.mp/business-science/time-series-forecasting-course-coming-soon) (It's coming, it's really insane). 
