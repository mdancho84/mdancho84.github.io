---
layout: post
title:  "It's tibbletime: Time-Aware Tibbles"
author: "Davis Vaughan"
categories: [Code-Tools]
tags: [R-Project, R, tibbletime, Learn-R]
image: tibbletime-0-0-1.png
---




We are very excited to announce the initial release of our newest R package,
`tibbletime`. As evident from the name, `tibbletime` is built on top of the
`tibble` package (and more generally on top of the `tidyverse`) with the main
purpose of being able to create __time-aware tibbles__ through a one-time
specification of an "index" column (a column containing timestamp information). There are a ton of useful time functions that we can now use such as `time_filter()`, `time_summarize()`, `tmap()`, `as_period()` and `time_collapse()`. We'll walk through the basics in this post.  

If you like what we do, please [follow us on social media](#social) to stay up on the latest [Business Science](#contact) news, events and information! As always, we are interested in both expanding our _network of data scientists_ and seeking _new clients interested in applying data science to business and finance_. If interested, [contact us](http://www.business-science.io/contact.html).

## Why tibbletime?

The tidyverse has some great packages such as `dplyr`, `tidyr`, and `purrr` that really make data science in R both easier and fun. However, none of these packages specifically address time series. Often R users will find themselves continuously switching to and from `xts` to leverage the benefits of time-based functions and operations such as grouping, applying functions, summarizing and so on all by time. 

Enter `tibbletime`, a new class that is __time-aware__. Advantages of this new class are:

* The ability to perform compact, time-based subsetting on tibbles.

* Quickly summarisize and aggregate results by time period (yearly, monthly, etc).

* Change the periodicity of a tibble, meaning from a daily dataset to a monthly or yearly dataset with one function call.

* Call functions similar in spirit to the `map` family from `purrr` on time based tibbles.

In addition to these new abilities, all functions were designed to support the pipe (`%>%`) and to work seamlessly with "tidyverse" packages like `dplyr`, `tidyr` and `purrr`. The end result is a new set of tools that make time series in the "tidyverse" much easier and more productive. 

## Libraries Needed

To get started, load `tibbletime`. You can download from CRAN or from GitHub.


{% highlight r %}
# Install from either CRAN or GH
# install.packages("tibbletime")
# devtools::install_github("business-science/tibbletime")

# Load libraries
library(tibbletime)
{% endhighlight %}


## Creating time-based tibbles

To get started with `tibbletime`, you'll use `as_tbl_time()` to transform
your `tibble` into a `tbl_time` object. Of course, you'll need a column of
dates to use as your index.

Below, we'll use the `FB` data set included with the package (Facebook stock
prices). 


{% highlight r %}
# Facebook stock prices. Comes with the package
data(FB)
{% endhighlight %}

We start with a `tibble`. Notice the specification of the `index` argument as the `date` column of `FB`.


{% highlight r %}
# Originally a tibble
FB
{% endhighlight %}



{% highlight text %}
## # A tibble: 1,008 x 8
##    symbol       date  open  high   low close    volume adjusted
##     <chr>     <date> <dbl> <dbl> <dbl> <dbl>     <dbl>    <dbl>
##  1     FB 2013-01-02 27.44 28.18 27.42 28.00  69846400    28.00
##  2     FB 2013-01-03 27.88 28.47 27.59 27.77  63140600    27.77
##  3     FB 2013-01-04 28.01 28.93 27.83 28.76  72715400    28.76
##  4     FB 2013-01-07 28.69 29.79 28.65 29.42  83781800    29.42
##  5     FB 2013-01-08 29.51 29.60 28.86 29.06  45871300    29.06
##  6     FB 2013-01-09 29.67 30.60 29.49 30.59 104787700    30.59
##  7     FB 2013-01-10 30.60 31.45 30.28 31.30  95316400    31.30
##  8     FB 2013-01-11 31.28 31.96 31.10 31.72  89598000    31.72
##  9     FB 2013-01-14 32.08 32.21 30.62 30.95  98892800    30.95
## 10     FB 2013-01-15 30.64 31.71 29.88 30.10 173242600    30.10
## # ... with 998 more rows
{% endhighlight %}


Using `as_tbl_time()`, we convert `FB` to class `tbl_time`. It now has the "date" stored as an index. 


{% highlight r %}
# Convert FB to tbl_time
FB <- as_tbl_time(FB, index = date)
{% endhighlight %}

Inspecting the class, we see it's now a `tbl_time`!


{% highlight r %}
# Now at tbl_time!
class(FB)
{% endhighlight %}



{% highlight text %}
## [1] "tbl_time"   "tbl_df"     "tbl"        "data.frame"
{% endhighlight %}

With the exception of the "Index: date" in the print statement, the returned object doesn't look much different... The differences are all under the hood, but they come out when we use our `tibbletime` functions. 


{% highlight r %}
# The differences are under the hood!
FB
{% endhighlight %}



{% highlight text %}
## # A time tibble: 1,008 x 8
## # Index: date
##    symbol       date  open  high   low close    volume adjusted
##     <chr>     <date> <dbl> <dbl> <dbl> <dbl>     <dbl>    <dbl>
##  1     FB 2013-01-02 27.44 28.18 27.42 28.00  69846400    28.00
##  2     FB 2013-01-03 27.88 28.47 27.59 27.77  63140600    27.77
##  3     FB 2013-01-04 28.01 28.93 27.83 28.76  72715400    28.76
##  4     FB 2013-01-07 28.69 29.79 28.65 29.42  83781800    29.42
##  5     FB 2013-01-08 29.51 29.60 28.86 29.06  45871300    29.06
##  6     FB 2013-01-09 29.67 30.60 29.49 30.59 104787700    30.59
##  7     FB 2013-01-10 30.60 31.45 30.28 31.30  95316400    31.30
##  8     FB 2013-01-11 31.28 31.96 31.10 31.72  89598000    31.72
##  9     FB 2013-01-14 32.08 32.21 30.62 30.95  98892800    30.95
## 10     FB 2013-01-15 30.64 31.71 29.88 30.10 173242600    30.10
## # ... with 998 more rows
{% endhighlight %}



## tibbletime functions

There are a number of functions that were designed specifically for `tbl_time`
objects. Some of them are:

* `time_filter`: Succinctly filter a `tbl_time` object by date.

* `time_summarise`: Similar to `dplyr::summarise()` but with the added benefit of being able to summarise by a time period such as "yearly" or "monthly".

* `tmap`: The family of `tmap_*` functions transform a `tbl_time` input by applying a function to each column at a specified time interval.

* `as_period`: Convert a `tbl_time` object from daily to monthly, from minute data to hourly, and more. This allows the user to easily aggregate data to a less granular level.

* `time_collapse`: When `time_collapse()` is used, the index of a `tbl_time` object is altered so that all dates falling inside the specifiedperiod share a common date. This is generally used internally by some of theother functions, but is useful on its own to perform analyses grouped by some time period.

## A few examples

Let's take `tibbletime` for a spin so we can try out some of the useful time-based functions. 

#### time_filter()

Let's look at `time_filter()`, a neat way to slice your dataset with a
compact `time formula`.


{% highlight r %}
# Filter for rows with dates from March 15th 2013 to December 31st 2015
FB %>% 
  time_filter(2013-03-15 ~ 2015-12-31)
{% endhighlight %}



{% highlight text %}
## # A time tibble: 706 x 8
## # Index: date
##    symbol       date  open  high   low close   volume adjusted
##  *  <chr>     <date> <dbl> <dbl> <dbl> <dbl>    <dbl>    <dbl>
##  1     FB 2013-03-15 27.03 27.06 26.56 26.65 31597400    26.65
##  2     FB 2013-03-18 26.37 26.79 25.78 26.49 26653700    26.49
##  3     FB 2013-03-19 26.53 26.90 26.21 26.55 25254200    26.55
##  4     FB 2013-03-20 26.68 26.69 25.78 25.86 44006500    25.86
##  5     FB 2013-03-21 25.66 26.11 25.56 25.74 24336100    25.74
##  6     FB 2013-03-22 25.80 26.01 25.63 25.73 18456300    25.73
##  7     FB 2013-03-25 25.75 25.80 25.08 25.13 39199000    25.13
##  8     FB 2013-03-26 25.08 25.48 25.03 25.21 26957200    25.21
##  9     FB 2013-03-27 25.00 26.28 24.72 26.09 52297400    26.09
## 10     FB 2013-03-28 26.09 26.17 25.52 25.58 28585700    25.58
## # ... with 696 more rows
{% endhighlight %}

As you can see, you specify a date range using `from ~ to`. A nice shorthand is 
also available. Here's observations from March 2013 through the end of 2015.


{% highlight r %}
# Only rows with dates from 2013-03-01 to 2015-12-31
FB %>% 
  time_filter(2013-03 ~ 2015)
{% endhighlight %}



{% highlight text %}
## # A time tibble: 716 x 8
## # Index: date
##    symbol       date  open  high   low close   volume adjusted
##  *  <chr>     <date> <dbl> <dbl> <dbl> <dbl>    <dbl>    <dbl>
##  1     FB 2013-03-01 27.05 28.12 26.81 27.78 54064800    27.78
##  2     FB 2013-03-04 27.76 28.06 27.44 27.72 32400700    27.72
##  3     FB 2013-03-05 27.88 28.18 27.21 27.52 40622200    27.52
##  4     FB 2013-03-06 28.10 28.13 27.35 27.45 33532600    27.45
##  5     FB 2013-03-07 27.57 28.68 27.47 28.58 74540200    28.58
##  6     FB 2013-03-08 28.43 28.47 27.73 27.96 44198900    27.96
##  7     FB 2013-03-11 28.01 28.64 27.83 28.14 35642100    28.14
##  8     FB 2013-03-12 28.10 28.32 27.60 27.83 27569600    27.83
##  9     FB 2013-03-13 27.62 27.65 26.92 27.08 39619500    27.08
## 10     FB 2013-03-14 27.10 27.43 26.83 27.04 27646400    27.04
## # ... with 706 more rows
{% endhighlight %}

Here's observations only in the month of March 2013.


{% highlight r %}
# Only March 2013 dates using a one sided formula
FB %>%
  time_filter(~2013-03)
{% endhighlight %}



{% highlight text %}
## # A time tibble: 20 x 8
## # Index: date
##    symbol       date  open  high   low close   volume adjusted
##  *  <chr>     <date> <dbl> <dbl> <dbl> <dbl>    <dbl>    <dbl>
##  1     FB 2013-03-01 27.05 28.12 26.81 27.78 54064800    27.78
##  2     FB 2013-03-04 27.76 28.06 27.44 27.72 32400700    27.72
##  3     FB 2013-03-05 27.88 28.18 27.21 27.52 40622200    27.52
##  4     FB 2013-03-06 28.10 28.13 27.35 27.45 33532600    27.45
##  5     FB 2013-03-07 27.57 28.68 27.47 28.58 74540200    28.58
##  6     FB 2013-03-08 28.43 28.47 27.73 27.96 44198900    27.96
##  7     FB 2013-03-11 28.01 28.64 27.83 28.14 35642100    28.14
##  8     FB 2013-03-12 28.10 28.32 27.60 27.83 27569600    27.83
##  9     FB 2013-03-13 27.62 27.65 26.92 27.08 39619500    27.08
## 10     FB 2013-03-14 27.10 27.43 26.83 27.04 27646400    27.04
## 11     FB 2013-03-15 27.03 27.06 26.56 26.65 31597400    26.65
## 12     FB 2013-03-18 26.37 26.79 25.78 26.49 26653700    26.49
## 13     FB 2013-03-19 26.53 26.90 26.21 26.55 25254200    26.55
## 14     FB 2013-03-20 26.68 26.69 25.78 25.86 44006500    25.86
## 15     FB 2013-03-21 25.66 26.11 25.56 25.74 24336100    25.74
## 16     FB 2013-03-22 25.80 26.01 25.63 25.73 18456300    25.73
## 17     FB 2013-03-25 25.75 25.80 25.08 25.13 39199000    25.13
## 18     FB 2013-03-26 25.08 25.48 25.03 25.21 26957200    25.21
## 19     FB 2013-03-27 25.00 26.28 24.72 26.09 52297400    26.09
## 20     FB 2013-03-28 26.09 26.17 25.52 25.58 28585700    25.58
{% endhighlight %}


#### time_summarise()

Have you ever wanted to calculate yearly averages for your data? Or quarterly
summary results for your boss? Now, it's easy with `time_summarise()`!

Just specify a `period`, and then calculate your summary results just as you
would with `dplyr::summarise()`, `tibbletime` takes care of the rest.


{% highlight r %}
# Get the average mean and standard deviation for each year
FB %>%
  time_summarise(
      period   = "yearly",
      adj_mean = mean(adjusted),
      adj_sd   = sd(adjusted)
      )
{% endhighlight %}



{% highlight text %}
## # A time tibble: 4 x 3
## # Index: date
##         date  adj_mean    adj_sd
## *     <date>     <dbl>     <dbl>
## 1 2013-12-31  35.48115 10.621172
## 2 2014-12-31  68.76234  7.502259
## 3 2015-12-31  88.77286 10.211442
## 4 2016-12-30 117.03587  8.899858
{% endhighlight %}

It even works with groups! We'll check out the `FANG` data set, which contains sample stock prices for FB, AMZN, NFLX and GOOG. 




{% highlight r %}
# Facebook, Amazon, Netflix and Google stocks
# Another data set in the package
data(FANG)

# Summarise by period and by group
FANG %>% 
  as_tbl_time(date) %>%
  group_by(symbol) %>%
  time_summarise(period = "yearly",
        adj_min   = min(adjusted),
        adj_max   = max(adjusted),
        adj_range = adj_max - adj_min)
{% endhighlight %}



{% highlight text %}
## # A time tibble: 16 x 5
## # Index:  date
## # Groups: symbol [4]
##    symbol       date   adj_min   adj_max adj_range
##  *  <chr>     <date>     <dbl>     <dbl>     <dbl>
##  1   AMZN 2013-12-31 248.23000 404.39002 156.16002
##  2   AMZN 2014-12-31 287.06000 407.04999 119.98999
##  3   AMZN 2015-12-31 286.95001 693.96997 407.01996
##  4   AMZN 2016-12-30 482.07001 844.35999 362.28998
##  5     FB 2013-12-31  22.90000  57.96000  35.06000
##  6     FB 2014-12-31  53.53000  81.45000  27.92000
##  7     FB 2015-12-31  74.05000 109.01000  34.96000
##  8     FB 2016-12-30  94.16000 133.28000  39.12000
##  9   GOOG 2013-12-31 351.08451 559.79618 208.71167
## 10   GOOG 2014-12-31 495.39224 609.47654 114.08430
## 11   GOOG 2015-12-31 492.55224 776.59998 284.04774
## 12   GOOG 2016-12-30 668.26001 813.10999 144.84998
## 13   NFLX 2013-12-31  13.14429  54.36857  41.22429
## 14   NFLX 2014-12-31  44.88714  69.19857  24.31143
## 15   NFLX 2015-12-31  45.54714 130.92999  85.38285
## 16   NFLX 2016-12-30  82.79000 128.35001  45.56001
{% endhighlight %}



#### as_period()

In the `xts` world, there are nice functions to convert your `xts` object to a
different periodicity. Nothing like that existed natively 
for tibbles outside of using one of our other packages, `tidyquant`, to call
`xts` functions indirectly.

With `as_period()`, that native support now exists and you can convert your
time-based tibble to any of the following periodicities.

* `"yearly"`
* `"quarterly"`
* `"monthly"`
* `"weekly"`
* `"daily"`
* `"hour"`
* `"minute"`
* `"second"`


{% highlight r %}
# Change from daily to monthly periodicity
FB %>% 
  as_period("monthly")
{% endhighlight %}



{% highlight text %}
## # A time tibble: 48 x 8
## # Index: date
##    symbol       date  open  high   low close    volume adjusted
##  *  <chr>     <date> <dbl> <dbl> <dbl> <dbl>     <dbl>    <dbl>
##  1     FB 2013-01-02 27.44 28.18 27.42 28.00  69846400    28.00
##  2     FB 2013-02-01 31.01 31.02 29.63 29.73  85856700    29.73
##  3     FB 2013-03-01 27.05 28.12 26.81 27.78  54064800    27.78
##  4     FB 2013-04-01 25.63 25.89 25.28 25.53  22249300    25.53
##  5     FB 2013-05-01 27.85 27.92 27.31 27.43  64567600    27.43
##  6     FB 2013-06-03 24.27 24.32 23.71 23.85  35733800    23.85
##  7     FB 2013-07-01 24.97 25.06 24.62 24.81  20582200    24.81
##  8     FB 2013-08-01 37.30 38.29 36.92 37.49 106066500    37.49
##  9     FB 2013-09-03 41.84 42.16 41.51 41.87  48774900    41.87
## 10     FB 2013-10-01 49.97 51.03 49.45 50.42  98114000    50.42
## # ... with 38 more rows
{% endhighlight %}

By default, the first date in that period is used as the new date. 
You can use the last date in that period with the `side` argument.


{% highlight r %}
FB %>%
  as_period("monthly", side = "end")
{% endhighlight %}



{% highlight text %}
## # A time tibble: 48 x 8
## # Index: date
##    symbol       date  open  high   low close    volume adjusted
##  *  <chr>     <date> <dbl> <dbl> <dbl> <dbl>     <dbl>    <dbl>
##  1     FB 2013-01-31 29.15 31.47 28.74 30.98 190744900    30.98
##  2     FB 2013-02-28 26.84 27.30 26.34 27.25  83027800    27.25
##  3     FB 2013-03-28 26.09 26.17 25.52 25.58  28585700    25.58
##  4     FB 2013-04-30 27.13 27.85 27.01 27.77  36245700    27.77
##  5     FB 2013-05-31 24.63 24.95 24.27 24.35  35925000    24.35
##  6     FB 2013-06-28 24.68 24.98 24.42 24.88  96778900    24.88
##  7     FB 2013-07-31 37.96 38.31 36.33 36.80 154828700    36.80
##  8     FB 2013-08-30 42.02 42.26 41.06 41.29  67735100    41.29
##  9     FB 2013-09-30 50.14 51.60 49.80 50.23 100095000    50.23
## 10     FB 2013-10-31 47.16 52.00 46.50 50.21 248809000    50.21
## # ... with 38 more rows
{% endhighlight %}

But remember, you cannot convert to a _more granular_ periodicity. Meaning that if
you have daily data, you cannot convert to hourly data. We can't make up new
data points for you!


#### tmap()

The family of `tmap` functions add __a time layer__ onto the existing
`purrr::map` family of functions. They map a function over every column in the
data set (besides groups and the index), but also allow you to map at specified
intervals (yearly, monthly, etc). This provides 
flexibility at the cost of requiring the use of the slightly
more complex _list-columns_.


{% highlight r %}
# Setup FANG as tbl_time object
FANG <- FANG %>% 
  as_tbl_time(date) %>%
  group_by(symbol)

# Get the yearly average of every column in FANG, by group
mapped_mean <- FANG %>%
  tmap(.f = ~mean(.x), period = "yearly")

# Result is returned as a list-column because the time period adds
# an extra dimension to the mapping
mapped_mean
{% endhighlight %}



{% highlight text %}
## # A time tibble: 16 x 3
## # Index:  date
## # Groups: symbol [4]
##    symbol       date       data
##  *  <chr>     <date>     <list>
##  1     FB 2013-12-31 <list [6]>
##  2     FB 2014-12-31 <list [6]>
##  3     FB 2015-12-31 <list [6]>
##  4     FB 2016-12-30 <list [6]>
##  5   AMZN 2013-12-31 <list [6]>
##  6   AMZN 2014-12-31 <list [6]>
##  7   AMZN 2015-12-31 <list [6]>
##  8   AMZN 2016-12-30 <list [6]>
##  9   NFLX 2013-12-31 <list [6]>
## 10   NFLX 2014-12-31 <list [6]>
## # ... with 6 more rows
{% endhighlight %}



{% highlight r %}
# Access individual elements. Here, the means for Facebook in 2013
mapped_mean$data[[1]]
{% endhighlight %}



{% highlight text %}
## $open
## [1] 35.47643
## 
## $high
## [1] 36.04504
## 
## $low
## [1] 34.93016
## 
## $close
## [1] 35.48115
## 
## $volume
## [1] 60091994
## 
## $adjusted
## [1] 35.48115
{% endhighlight %}

A more useful way to do this is to use the `tmap_dfc()` function, which
attempts to convert each of those lists inside the list-column into a tibble 
by using `dplyr::bind_cols()`. Combined with `unnest()` to unroll each of 
the tibbles, you can get back a very clean result. 




{% highlight r %}
# Map mean() to each column within the yearly time-based slices of data
mapped_df_means <- FANG %>%
  tmap_dfc(~mean(.x), period = "yearly")

# Show the output of tmap_dfc()
mapped_df_means
{% endhighlight %}



{% highlight text %}
## # A time tibble: 16 x 3
## # Index:  date
## # Groups: symbol [4]
##    symbol       date             data
##  *  <chr>     <date>           <list>
##  1     FB 2013-12-31 <tibble [1 x 6]>
##  2     FB 2014-12-31 <tibble [1 x 6]>
##  3     FB 2015-12-31 <tibble [1 x 6]>
##  4     FB 2016-12-30 <tibble [1 x 6]>
##  5   AMZN 2013-12-31 <tibble [1 x 6]>
##  6   AMZN 2014-12-31 <tibble [1 x 6]>
##  7   AMZN 2015-12-31 <tibble [1 x 6]>
##  8   AMZN 2016-12-30 <tibble [1 x 6]>
##  9   NFLX 2013-12-31 <tibble [1 x 6]>
## 10   NFLX 2014-12-31 <tibble [1 x 6]>
## 11   NFLX 2015-12-31 <tibble [1 x 6]>
## 12   NFLX 2016-12-30 <tibble [1 x 6]>
## 13   GOOG 2013-12-31 <tibble [1 x 6]>
## 14   GOOG 2014-12-31 <tibble [1 x 6]>
## 15   GOOG 2015-12-31 <tibble [1 x 6]>
## 16   GOOG 2016-12-30 <tibble [1 x 6]>
{% endhighlight %}



{% highlight r %}
# Just add a simple unnest() and our means are in a tbl_time
mapped_df_means %>%
  unnest()
{% endhighlight %}



{% highlight text %}
## # A time tibble: 16 x 8
## # Index:  date
## # Groups: symbol [4]
##    symbol       date      open      high       low     close   volume
##  *  <chr>     <date>     <dbl>     <dbl>     <dbl>     <dbl>    <dbl>
##  1     FB 2013-12-31  35.47643  36.04504  34.93016  35.48115 60091994
##  2     FB 2014-12-31  68.76397  69.63952  67.83020  68.76234 47530552
##  3     FB 2015-12-31  88.74941  89.68337  87.76278  88.77286 26955191
##  4     FB 2016-12-30 117.08107 118.09171 115.86587 117.03587 25453798
##  5   AMZN 2013-12-31 297.87512 300.92599 294.65651 298.03159  2967880
##  6   AMZN 2014-12-31 332.79845 336.31754 328.54544 332.55103  4083598
##  7   AMZN 2015-12-31 478.12496 483.19623 472.88214 478.13830  3797368
##  8   AMZN 2016-12-30 699.75659 705.80496 692.64623 699.52313  4115498
##  9   NFLX 2013-12-31 246.74833 251.12960 242.40151 246.90282 27443614
## 10   NFLX 2014-12-31 402.61278 408.01056 396.59623 402.46583 19438156
## 11   NFLX 2015-12-31 325.71254 330.06774 321.55794 326.09663 18570959
## 12   NFLX 2016-12-30 102.00052 103.56952 100.42675 102.03036 12810911
## 13   GOOG 2013-12-31 883.62171 890.14014 877.71396 884.24425  4190346
## 14   GOOG 2014-12-31 697.57502 702.13282 690.68587 696.31786  2487038
## 15   GOOG 2015-12-31 602.51356 607.90291 596.54278 602.46210  2069231
## 16   GOOG 2016-12-30 743.73246 749.42163 737.59791 743.48671  1829845
## # ... with 1 more variables: adjusted <dbl>
{% endhighlight %}



## Final thoughts

Mind you this is only v0.0.1. We have a lot of work to do, but we couldn't
wait any longer to share this. Feel free to kick the tires on `tibbletime`, and let us know your thoughts. Please submit any comments, issues or bug reports to us on GitHub [here](https://github.com/business-science/tibbletime). Enjoy!

![It's tibbletime](/assets/tibbletime-0-0-1.png)

## About Business Science <a class="anchor" id="contact"></a>

We have a full suite of data science services to _supercharge_ your financial and business performance. How do we do it? Using our network of data science consultants, we pull together the right team to get custom projects done on time, within budget, and of the highest quality. Find out more about our [data science services](http://www.business-science.io/services.html) or [contact us](http://www.business-science.io/contact.html)!

We are growing! Let us know if you are interested in joining our __network of data scientist consultants__. If you have expertise in Marketing Analytics, Data Science for Business, Financial Analytics, or Data Science in general, we'd love to talk. [Contact us](http://www.business-science.io/contact.html)!

## Follow Business Science on Social Media <a class="anchor" id="social"></a>

* [@bizScienc](https://twitter.com/bizScienc) is on [twitter](https://twitter.com/bizScienc)!
* Check us out on [Facebook page](https://www.facebook.com/Business-Science-LLC-754699134699054/)!
* Check us out on [LinkedIn](https://www.linkedin.com/company/business.science)!
* Sign up for [our insights blog](http://www.business-science.io/) to stay updated!
* If you like our software, [star our GitHub packages](https://github.com/business-science)!

