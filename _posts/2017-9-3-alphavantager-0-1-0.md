---
layout: post
title:  "alphavantager: An R interface to the Free Alpha Vantage Financial Data API"
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Project, R, alphavantager, Learn-R]
image: alphavantager-0-1-0.png
---




We're excited to announce the `alphavantager` package, a lightweight R interface to the Alpha Vantage API! [Alpha Vantage](https://www.alphavantage.co/) is a __FREE API for retreiving real-time and historical financial data__. It's very easy to use, and, with the recent _glitch_ with the _Yahoo Finance_ API, _Alpha Vantage_ is a solid alternative for retrieving financial data for FREE! It's definitely worth checking out if you are interested in financial analysis. We'll go through the `alphavantager` R interface in this post to show you how easy it is to get __real-time and historical financial data__. In the near future, we have plans to incorporate the `alphavantager` into `tidyquant` to enable scaling from one equity to many. 

If you like what you read, please [follow us on social media](#social) to stay up on the latest [Business Science](#contact) news, events and information! As always, we are interested in both expanding our _network of data scientists_ and seeking _new clients interested in applying data science to business and finance_. If interested, [contact us](http://www.business-science.io/contact.html).


## Alpha Vantage

Alpha Vantage is a free service that enables users to get real-time and historical equity data. New users will need to visit [Alpha Vantage](https://www.alphavantage.co/) and obtain an API key. 

![Alpha Vantage](/assets/alphavantager-0-1-0.png)

## R Interface: Getting Started

The `alphavantager` package provides a convenient and lightweight interface to the Alpha Vantage API. 

To get started, install the package from CRAN or from GitHub:


{% highlight r %}
install.packages("alphavantager")
# Or
devtools::install_github("business-science/alphavantager")
{% endhighlight %}

Load the package.


{% highlight r %}
library(alphavantager)
{% endhighlight %}

Set your API key (get one from [Alpha Vantage](https://www.alphavantage.co/) if you don't already have one... it's free).


{% highlight r %}
av_api_key("YOUR_API_KEY")
print(av_api_key())
{% endhighlight %}



{% highlight text %}
## [1] "YOUR_API_KEY"
{% endhighlight %}




## Getting Financial Data from Alpha Vantage

Now, you're ready to get financial data via `av_get()`, which accepts the same<sup>1</sup> arguments as the [API Documentation](https://www.alphavantage.co/documentation/) parameters. The function is setup with two primary arguments, `symbol` and `av_fun`, which accepts an equity and one of the API "function" parameters. You can pass additional API parameters via the `...`.


{% highlight r %}
# Function is streamlined and user adds additional parameters via ... 
args(av_get)
{% endhighlight %}



{% highlight text %}
## function (symbol = NULL, av_fun, ...) 
## NULL
{% endhighlight %}

Let's take `av_get()` for a test spin!

#### Time Series Data

We can get __real-time intraday stock data__ by setting `av_fun = "TIME_SERIES_INTRADAY"` and the `interval` to one of the available resolutions ("1min", "5min", "15min", "30min" or "60min"). We can also get daily, daily adjusted, weekly and monthly time series. Note that only 100 rows are returned by default, add the parameter `outputsize = "full"` to get the full number of rows. 


{% highlight r %}
av_get(symbol = "MSFT", av_fun = "TIME_SERIES_INTRADAY", interval = "15min", outputsize = "compact")
{% endhighlight %}



{% highlight text %}
## # A tibble: 100 x 6
##              timestamp   open    high    low  close volume
##                 <dttm>  <dbl>   <dbl>  <dbl>  <dbl>  <int>
##  1 2017-08-29 11:30:00 72.800 72.8601 72.710 72.725 250459
##  2 2017-08-29 11:45:00 72.730 72.8600 72.680 72.850 354759
##  3 2017-08-29 12:00:00 72.850 72.9400 72.835 72.870 328545
##  4 2017-08-29 12:15:00 72.870 72.9300 72.870 72.890 157598
##  5 2017-08-29 12:30:00 72.900 72.9300 72.860 72.890 193864
##  6 2017-08-29 12:45:00 72.890 72.9300 72.860 72.920 140217
##  7 2017-08-29 13:00:00 72.923 73.0000 72.900 72.910 163803
##  8 2017-08-29 13:15:00 72.910 72.9600 72.880 72.890 132402
##  9 2017-08-29 13:30:00 72.890 73.0100 72.860 72.985 470568
## 10 2017-08-29 13:45:00 72.985 73.0199 72.920 72.980 292979
## # ... with 90 more rows
{% endhighlight %}

#### Technical Indicators

A full suite of __real-time and historical__ technical indicators are available. The "SMA" (Simple Moving Average) is shown below.  


{% highlight r %}
av_get(symbol = "MSFT", av_fun = "SMA", interval = "monthly", time_period = 60, series_type = "close")
{% endhighlight %}



{% highlight text %}
## # A tibble: 153 x 2
##              timestamp     sma
##                 <dttm>   <dbl>
##  1 2005-01-31 05:00:00 47.5243
##  2 2005-02-28 05:00:00 46.4542
##  3 2005-03-31 05:00:00 45.0862
##  4 2005-04-29 04:00:00 44.3453
##  5 2005-05-31 04:00:00 43.7327
##  6 2005-06-30 04:00:00 42.8133
##  7 2005-07-29 04:00:00 42.0767
##  8 2005-08-31 04:00:00 41.3695
##  9 2005-09-30 04:00:00 40.7932
## 10 2005-10-31 05:00:00 40.0737
## # ... with 143 more rows
{% endhighlight %}

#### Sector Performances

Various __real-time and historical sector performances__ are available. 


{% highlight r %}
av_get(av_fun = "SECTOR")
{% endhighlight %}



{% highlight text %}
## # A tibble: 106 x 3
##                       rank.group                     sector value
##                            <chr>                      <chr> <dbl>
##  1 Rank A: Real-Time Performance                     Energy  0.81
##  2 Rank A: Real-Time Performance                  Materials  0.63
##  3 Rank A: Real-Time Performance     Consumer Discretionary  0.46
##  4 Rank A: Real-Time Performance                 Financials  0.44
##  5 Rank A: Real-Time Performance           Consumer Staples  0.42
##  6 Rank A: Real-Time Performance                Industrials  0.15
##  7 Rank A: Real-Time Performance Telecommunication Services  0.04
##  8 Rank A: Real-Time Performance     Information Technology -0.05
##  9 Rank A: Real-Time Performance                Real Estate -0.08
## 10 Rank A: Real-Time Performance                Health Care -0.08
## # ... with 96 more rows
{% endhighlight %}


#### Important Notes: av_get()

For the most part, the `av_get()` function works the same as the [Alpha Vantage API Parameters](https://www.alphavantage.co/documentation/). However, users will want to understand a few important aspects to the R interface:

1. The `av_fun` argument replaces the API parameter "function" because function is a reserved name in R. All other arguments match the Alpha Vantage API parameters.

2. There is no need to specify the `apikey` parameter as an argument to `av_get()`. The required method is to set the API key using `av_api_key("YOUR_API_KEY")`.

3. There is no need to specify the `datatype` parameter as an argument to `av_get()`. The function will return a tibble data frame. 

4. Some data sets only return 100 rows by default. Change the parameter `outputsize = "full"` to get the full dataset.

## Next Steps

We have plans to integrate `alphavantager` into `tidyquant`, which will enable scaling from one equity to many! The change will be incorporated into `tq_get()`, the one-stop shop for getting financial data. It's coming soon!!! 



## About Business Science <a class="anchor" id="contact"></a>

We have a full suite of data science services to _supercharge_ your organizations financial and business performance! For example, our experienced data scientists reduced a manufacturer's sales forecasting error by 50%, which led to improved personnel planning, material purchasing and inventory management. 

How do we do it? __With team-based data science__: Using our network of data science consultants with expertise in Marketing, Forecasting, Finance, Human Resources and more, we pull together the _right team_ to get _custom projects_ done _on time_, _within budget_, and of the _highest quality_. Learn about our [data science services](http://www.business-science.io/services.html) or [contact us](http://www.business-science.io/contact.html)!


We are growing! Let us know if you are interested in joining our __network of data scientist consultants__. If you have expertise in Marketing Analytics, Data Science for Business, Financial Analytics, Forecasting or data science in general, we'd love to talk. [Contact us](http://www.business-science.io/contact.html)!

## Follow Business Science on Social Media <a class="anchor" id="social"></a>

* Connect with [@bizScienc](https://twitter.com/bizScienc) on [twitter](https://twitter.com/bizScienc)!
* Like us on [Facebook](https://www.facebook.com/Business-Science-LLC-754699134699054/)!!!
* Follow us on [LinkedIn](https://www.linkedin.com/company/business.science)!
* Sign up for [our insights blog](http://www.business-science.io/) to stay updated!
* If you like our software, [star our GitHub packages](https://github.com/business-science) :)
