---
layout: post
title: "R for Excel Users: Pivot Tables, VLOOKUPs in R"
date:   2020-02-26 09:12:01
excerpt: "Learn about how the NEW tidyquant package (v1.0.0) makes popular Excel functions like Pivot Tables, VLOOKUP(), SUMIFS(), and much more possible in R."
author: "Matt Dancho"
categories: [Finance]
tags: [R-Bloggers, Learn-R, Learn-Finance, Learn-Business, tidyquant, tidyverse]
image: 2020-02-26-r-for-excel/r-for-excel-users.jpg
image_preview: 2020-02-26-r-for-excel/r-for-excel-users.jpg
---



__New business and financial analysts are finding `R` every day.__ Most of these new _userRs_ (R users) are coming from a non-programming background. They have ample domain experience in functions like finance, marketing, and business, but their tool of choice is __<span style="color:green">Excel</span> (or more recently Tableau & PowerBI)__. 

__Learning `R` can be a major hurdle.__ You need to learn data structures, algorithms, data science, machine learning, web applications with `Shiny` and more to be able to accomplish a basic dashboard. This is a _BIG ASK_ for non-coders. This is the problem I aim to begin solving with the _upcoming_ release of `tidyquant` v1.0.0. [Read the updated _'R for Excel Users'_ on Business Science](#). 

Let's demo several of the new Excel features!

# Excel in R: Introducing tidyquant <br><small>New Features in v1.0.0.9000 (Beta on GitHub)</small> {#new-features}

<div class="pull-right hidden-xs" style="width:50%; margin-left:20px;">
  <a href="#" target="_blank">
  <img class="img-responsive" src="/assets/2020-02-26-r-for-excel/r-for-excel-users.jpg"> 
  </a>
</div>

In `tidyquant` version 1.0.0.9000 (_[still in beta-mode on GitHub Here](https://github.com/business-science/tidyquant){:target="_blank"}, but expected CRAN release of tidyquant v1.0.0 is March 2020_), I have added the following features to __support new _useRs_ transitioning from an <span style="color:green">Excel background.</span>__

## New Features <br><small>To make the transition to R easier for Excel Users</small>

✅ [__Pivot Tables in R__](#pivot-tables)

✅ [__VLOOKUP in R__](#vlookup)

✅ [__Summarizing "IFS" Functions__](#sum-ifs)

✅ [__100 + New Excel Functions__](#excel-functions)

✅ [__NEW Tidyverse Functions - Summarize By Time__](#tidyverse-functions)

📅 [__NEW API Integrations (Implementation scheduled for March)__](#api-integrations)


I'll showcase a __small portion__ of the new features in this post. [__Attend Learning Lab 30 (Register Here for Free)__](http://bit.ly/lab-30-shiny-tidyquant) for a real business example where I showcase `Shiny` and `tidyquant` together. You'll see how the new `tidyquant` features streamline development of __Financial and Business `Shiny` Apps__.  

<br>

<iframe class="logo-shadow" width="100%" height="500" src="https://www.youtube.com/embed/6H8q6UAFVpI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p class="text-center date">Shiny App with Pivot Table using tidyquant <br>
  <a href="http://bit.ly/lab-30-shiny-tidyquant" >Register for Learning Lab 30 Here</a>
</p>



## Replication Requirements

Please use `tidyquant (>= 1.0.0)`. Installation is recommended via GitHub until the official CRAN release (expected in March 2020).


{% highlight r %}
devtools::install_github("business-science/tidyquant")
{% endhighlight %}

Load the following libraries.


{% highlight r %}
library(tidyverse)
library(tidyquant)
library(knitr)
{% endhighlight %}


## ✅ Pivot Tables {#pivot-tables}

__The Pivot Table is one of Excel's most powerful features.__ Honestly, when I came to R, one of the biggest things I lost was the _Pivot Table_ - A tool used for quickly summarizing data into a digestable table. It's now in `R` with `pivot_table()`.

### Excel Pivot Table

For those that may have never used the __Excel Pivot Table__ before, the process goes something like this.  

1. Start with a raw table in "long" format where each row is a unique observation 
2. Use the Excel Pivot Table dialog to position fields into Columns, Rows, and Summarized Values
3. The Pivot Table is returned with the data summarized into columns and rows

![Pivot Tables](/assets/2020-02-26-r-for-excel/excel_pivot_process.jpg)

<p class="text-center date">Excel Pivot Table is now in R</p>



### R Pivot Table

Excel's Pivot Table now in `R` with `pivot_table()`. Let's try it out.

First, let's get some raw data. The `FANG` data set ships with `tidyquant` and represents the ouput of the `tq_get(c("FB", "AMZN", "NFLX", "GOOG"))` from 2013 to 2016. This is raw OHLCV data with adjusted stock prices downloaded from Yahoo Finance.  


{% highlight r %}
FANG
{% endhighlight %}



{% highlight text %}
## # A tibble: 4,032 x 8
##    symbol date        open  high   low close    volume adjusted
##    <chr>  <date>     <dbl> <dbl> <dbl> <dbl>     <dbl>    <dbl>
##  1 FB     2013-01-02  27.4  28.2  27.4  28    69846400     28  
##  2 FB     2013-01-03  27.9  28.5  27.6  27.8  63140600     27.8
##  3 FB     2013-01-04  28.0  28.9  27.8  28.8  72715400     28.8
##  4 FB     2013-01-07  28.7  29.8  28.6  29.4  83781800     29.4
##  5 FB     2013-01-08  29.5  29.6  28.9  29.1  45871300     29.1
##  6 FB     2013-01-09  29.7  30.6  29.5  30.6 104787700     30.6
##  7 FB     2013-01-10  30.6  31.5  30.3  31.3  95316400     31.3
##  8 FB     2013-01-11  31.3  32.0  31.1  31.7  89598000     31.7
##  9 FB     2013-01-14  32.1  32.2  30.6  31.0  98892800     31.0
## 10 FB     2013-01-15  30.6  31.7  29.9  30.1 173242600     30.1
## # … with 4,022 more rows
{% endhighlight %}

We can summarize this information with a Pivot Table using `pivot_table(.rows, .columns, .values)`. First, I'll take a look to see if there are any missing (`NA`) values. The only trick is to use a `~` in front of any calculations. All zeros is good. 


{% highlight r %}
FANG %>%
    pivot_table(
        .columns = symbol,
        .values  = ~ SUM(is.na(adjusted))
    ) %>%
    kable()
{% endhighlight %}



| AMZN| FB| GOOG| NFLX|
|----:|--:|----:|----:|
|    0|  0|    0|    0|


Next, I'll do some financial summarizations. I'd like to take a look at percentage returns by year and quarter. This is easy to do by using stacked functions with the `c()` operator on `.columns` and `.rows`. 


{% highlight r %}
FANG %>%
    pivot_table(
        .rows    = c(symbol, ~ QUARTER(date)),
        .columns = ~ YEAR(date),
        .values  = ~ (LAST(adjusted) - FIRST(adjusted)) / FIRST(adjusted)
    ) %>%
    kable()
{% endhighlight %}



|symbol | QUARTER(date)|       2013|       2014|       2015|       2016|
|:------|-------------:|----------:|----------:|----------:|----------:|
|AMZN   |             1|  0.0356768| -0.1547856|  0.2060807| -0.0680544|
|AMZN   |             2|  0.0614656| -0.0530919|  0.1723923|  0.1956892|
|AMZN   |             3|  0.1082595| -0.0299348|  0.1703285|  0.1538281|
|AMZN   |             4|  0.2425300| -0.0223965|  0.2979913| -0.1038196|
|FB     |             1| -0.0864286|  0.1010785|  0.0480561|  0.1162199|
|FB     |             2| -0.0254603|  0.0745768|  0.0502020| -0.0153369|
|FB     |             3|  1.0245869|  0.1613283|  0.0344034|  0.1233033|
|FB     |             4|  0.0838954|  0.0192031|  0.1507422| -0.1065466|
|GOOG   |             1|  0.0980851|  0.0017401|  0.0441873|  0.0041923|
|GOOG   |             2|  0.0988279|  0.0143170| -0.0406450| -0.0770892|
|GOOG   |             3| -0.0134815| -0.0091132|  0.1659128|  0.1116688|
|GOOG   |             4|  0.2634837| -0.0736798|  0.2414403| -0.0009578|
|NFLX   |             1|  1.0571677| -0.0297393|  0.1941594| -0.0702983|
|NFLX   |             2|  0.1571014|  0.2081494|  0.5901917| -0.1345316|
|NFLX   |             3|  0.3786783| -0.0463327|  0.1027844|  0.0194477|
|NFLX   |             4|  0.1341568| -0.2214904|  0.0792602|  0.2062750|

A few points:

1. __Collapsing__ - I just used functions to collapse the daily date by `YEAR()` and `QUARTER()`. This essentially creates a new grouping variable that is a part of the date. 
2. __Stacking__ - I _stacked_ multiple grouping operations with the `c()` operator: `.rows = c(symbol, ~ QUARTER(date))`
3. __Summarization Details__  - I added multiple function calls to get the Percentage Change in the `.values` summarization operation. This is allowed as long as the result returns a single value. 
4. __Tilde Required__ - For calculations (e.g. `~ YEAR(date)`), I used the tilde (`~`) each time, which __is required.__  
5. __Tilde Not Required__ - For bare column names with no calculation, a tilde (`~`) is __not required.__ 

### My Favorite Part of Pivot Tables in R

__We can easily switch Pivot Tables to provide different levels of summarization.__ Now I'll quickly change to returns by year. Notice I'm using a new summarization function, `PCT_CHANGE_FIRSTLAST()` to save me some typing. 


{% highlight r %}
FANG %>%
    pivot_table(
        .rows    = symbol,
        .columns = ~ YEAR(date),
        .values  = ~ PCT_CHANGE_FIRSTLAST(adjusted)
    ) %>% 
    kable()
{% endhighlight %}



|symbol |      2013|       2014|      2015|      2016|
|:------|---------:|----------:|---------:|---------:|
|AMZN   | 0.5498426| -0.2201673| 1.1907495| 0.1772084|
|FB     | 0.9517858|  0.4260647| 0.3340983| 0.1255136|
|GOOG   | 0.5495473| -0.0532416| 0.4460024| 0.0404130|
|NFLX   | 3.0014129| -0.0584587| 1.2945491| 0.1258640|


## ✅ VLOOKUP {#vlookup}

__When I first started learning R, I couldn't grasp how to merge / join data.__ It was very frustrating because I was used to Excel's VLOOKUP function that pulled a value or a column of values as needed. 

### Excel VLOOKUP

VLOOKUP is an Excel function to lookup and retrieve data from a specific column in table. Here's how the process works in Excel.

1. Start with a Lookup Table. Contains Key-Value pairs.
2. Simple Case - Use a VLOOKUP to input a single value and output a single value. 
3. More Powerful Case - Use a VLOOKUP to add a column to an Excel Table. 

![VLOOKUP](/assets/2020-02-26-r-for-excel/excel_vlookup_process.jpg)
<p class="text-center date">Excel VLOOKUP() is now in R</p>

### R VLOOKUP

The most popular Excel Reference Function, `VLOOKUP`, is now in R as `VLOOKUP()`. It's vectorized, which means we can use `VLOOKUP()` inside of `dplyr::mutate()`.

Let's replicate a VLOOKUP in R using the new `VLOOKUP()` function. First, let's create a simple lookup table.


{% highlight r %}
lookup_table <- tibble(
    stock   = c("FB", "AMZN", "NFLX", "GOOG"),
    company = c("Facebook", "Amazon", "Netflix", "Google")
)

lookup_table %>% kable()
{% endhighlight %}



|stock |company  |
|:-----|:--------|
|FB    |Facebook |
|AMZN  |Amazon   |
|NFLX  |Netflix  |
|GOOG  |Google   |

### Simple VLOOKUP Case

First, let's mimic the "simple" case where we just want to lookup a __Single Value.__


{% highlight r %}
VLOOKUP("AMZN", lookup_table, stock, company)
{% endhighlight %}



{% highlight text %}
## [1] "Amazon"
{% endhighlight %}

So what happened? We supplied the string "AMZN", and the `VLOOKUP()` function new to search the `lookup_table` matching the `stock` column and returning the `company`.

### More Powerful VLOOKUP Case

Let's try the more __Powerful Case__ - pulling in a column of matched lookup values. We can do this by using the `mutate()` function from `dplyr`. This works because `VLOOKUP()` is vectorized. 


{% highlight r %}
FANG %>%
    mutate(company = VLOOKUP(symbol, lookup_table, stock, company))
{% endhighlight %}



{% highlight text %}
## # A tibble: 4,032 x 9
##    symbol date        open  high   low close    volume adjusted company 
##    <chr>  <date>     <dbl> <dbl> <dbl> <dbl>     <dbl>    <dbl> <chr>   
##  1 FB     2013-01-02  27.4  28.2  27.4  28    69846400     28   Facebook
##  2 FB     2013-01-03  27.9  28.5  27.6  27.8  63140600     27.8 Facebook
##  3 FB     2013-01-04  28.0  28.9  27.8  28.8  72715400     28.8 Facebook
##  4 FB     2013-01-07  28.7  29.8  28.6  29.4  83781800     29.4 Facebook
##  5 FB     2013-01-08  29.5  29.6  28.9  29.1  45871300     29.1 Facebook
##  6 FB     2013-01-09  29.7  30.6  29.5  30.6 104787700     30.6 Facebook
##  7 FB     2013-01-10  30.6  31.5  30.3  31.3  95316400     31.3 Facebook
##  8 FB     2013-01-11  31.3  32.0  31.1  31.7  89598000     31.7 Facebook
##  9 FB     2013-01-14  32.1  32.2  30.6  31.0  98892800     31.0 Facebook
## 10 FB     2013-01-15  30.6  31.7  29.9  30.1 173242600     30.1 Facebook
## # … with 4,022 more rows
{% endhighlight %}

### What I'm Most Excited About Using VLOOKUP for

I actually can't wait to use `VLOOKUP()` in `Shiny` apps. There are many times when I want the user to input a variable (a Key), and internally on the Shiny Server convert it to something more useful in a table (a Value). I'll showcase this technique LIVE in [Learning Lab 30 - Shiny + Tidyquant Apps (Register Here for FREE)](http://bit.ly/lab-30-shiny-tidyquant).


## ✅ Summarizing "IFS" Functions {#sum-ifs}

One of the functions that many Excel Users (including myself) become accustomed to is __filtering summations, which I refer to as "IFS" functions.__ These are very handy at quickly filtering on conditions while aggregating your data. 

### Excel Sum-If's (and friends)

Excel has `SUMIFS()`, `COUNTIFS()`, `AVERAGEIFS()`, and several more Summarizing "IFS" Functions. Here's how they work:

1. Develop a Condition to summarize: Sum Sales when Region = "East"
2. Use one or more Conditioning Column(s) to develop a logical cases (e.g. region = "East")
3. Use a Summarizing Column to aggregate (e.g. SUMIFS(sales))
4. Put it together returning a single value: SUMIFS(sales, region, "=East")

![Excel SUMIFS](/assets/2020-02-26-r-for-excel/excel_sumifs.jpg)

<p class="text-center date">Excel SUMIFS is now in R as SUM_IFS()</p>

### R Sum-If's (and friends)

__`R` now has a full suite of "IFS" functions.__ We can test them to get the basics.

#### SUM_IFS()

Summarizing things.


{% highlight r %}
SUM_IFS(x = 1:10, x > 5)
{% endhighlight %}



{% highlight text %}
## [1] 40
{% endhighlight %}

#### COUNT_IFS()

Counting things. 


{% highlight r %}
COUNT_IFS(x = letters, str_detect(x, "[a-c]"))
{% endhighlight %}



{% highlight text %}
## [1] 3
{% endhighlight %}

#### Used in tidyverse

Let's use `COUNT_IFS()` to count how many times high trade volume occurs in 2015. We can accomplish this shockingly easily by combining `summarise()` and the `COUNT_IFS()` function.  


{% highlight r %}
FANG %>%
    group_by(symbol) %>%
    summarise(
        high_volume_in_2015 = COUNT_IFS(volume,
                                        year(date) == 2015,
                                        volume > quantile(volume, 0.75))
    )
{% endhighlight %}



{% highlight text %}
## # A tibble: 4 x 2
##   symbol high_volume_in_2015
##   <chr>                <int>
## 1 AMZN                    62
## 2 FB                      15
## 3 GOOG                    19
## 4 NFLX                    54
{% endhighlight %}



## ✅ 100+ New Excel Functions {#excel-functions}

__100+ Excel-based statistical, date/date-time, and financial math functions__ have been ported to `R`. The things I'm most excited about are Business Calendar calculations:

- __Business Holiday Calendars__ - Solves a major pain point with business date calculations. Integrations with `lubridate` and `timeDate` have enabled Holiday Date Sequences to automate calculation of Net Work Days and working periods. 

- __Financial Calculations__ - I've ported `NPV`, `IRR`, `FV`, `PV`, `PMT`, and `RATE`. Then I realized that there's an amazing package called [FinCal](https://github.com/felixfan/FinCal){:target="_blank"}. The plan is to leverage `FinCal` going forward.  

![100 Excel Functions](/assets/2020-02-26-r-for-excel/excel_function_integrations.jpg)

<p class="text-center date">100+ Excel Functions now in R</p>

### Business Calendars: Factoring in Business Holidays made Easy

Businesses rely on their ability to accurately predict revenue. A key driver is whether or not the business is open (shocker!). For a business that's closed on weekends and standard business holidays, it's now super easy to calculate something simple like `NET_WORKDAYS()`.

#### Net Working Days Example

When run with just a start and end, it returns the number of days excluding weekends. 


{% highlight r %}
NET_WORKDAYS("2020-01-01", "2020-07-01") # 131 Skipping Weekends
{% endhighlight %}



{% highlight text %}
## [1] 131
{% endhighlight %}

But what about holidays? We have a new function called `HOLIDAY_SEQUENCE()` to calculate the business holidays between two dates (thanks to `timeDate`!).


{% highlight r %}
HOLIDAY_SEQUENCE("2020-01-01", "2020-07-01", calendar = "NYSE")
{% endhighlight %}



{% highlight text %}
## [1] "2020-01-01" "2020-01-20" "2020-02-17" "2020-04-10" "2020-05-25"
{% endhighlight %}

Now we can simply remove these dates from the Net Workdays calculation. We get 126 days removing standard business holidays. 


{% highlight r %}
NET_WORKDAYS("2020-01-01", "2020-07-01",
             holidays = HOLIDAY_SEQUENCE("2020-01-01", "2020-07-01",
                                         calendar = "NYSE")) # 126 Skipping 5 NYSE Holidays
{% endhighlight %}



{% highlight text %}
## [1] 126
{% endhighlight %}





## ✅ NEW Tidyverse Functionality {#tidyverse-functions}

`summarise_by_time()` is a new time-based variant of `dplyr::summarise()` that allows collapsing time-series data by "second", "minute", "hour", "day", "week", "month", "quarter", and "year". 

### By Month 

Here's a quick example summarizing by `"month"`.


{% highlight r %}
FANG %>%
    group_by(symbol) %>%

    # Collapse from daily to FIRST value by month
    summarise_by_time(
        .date_var  = date,
        .by        = "month",
        adjusted   = FIRST(adjusted)
    )
{% endhighlight %}



{% highlight text %}
## # A tibble: 192 x 3
## # Groups:   symbol [4]
##    symbol date       adjusted
##    <chr>  <date>        <dbl>
##  1 AMZN   2013-01-01     257.
##  2 AMZN   2013-02-01     265 
##  3 AMZN   2013-03-01     266.
##  4 AMZN   2013-04-01     262.
##  5 AMZN   2013-05-01     248.
##  6 AMZN   2013-06-01     267.
##  7 AMZN   2013-07-01     282.
##  8 AMZN   2013-08-01     306.
##  9 AMZN   2013-09-01     289.
## 10 AMZN   2013-10-01     321.
## # … with 182 more rows
{% endhighlight %}

### By Year

The benefit is that I can quickly switch periods. 


{% highlight r %}
FANG %>%
    group_by(symbol) %>%
    summarise_by_time(
        .date_var  = date,
        .by        = "year",
        adjusted   = FIRST(adjusted)
    )
{% endhighlight %}



{% highlight text %}
## # A tibble: 16 x 3
## # Groups:   symbol [4]
##    symbol date       adjusted
##    <chr>  <date>        <dbl>
##  1 AMZN   2013-01-01    257. 
##  2 AMZN   2014-01-01    398. 
##  3 AMZN   2015-01-01    309. 
##  4 AMZN   2016-01-01    637. 
##  5 FB     2013-01-01     28  
##  6 FB     2014-01-01     54.7
##  7 FB     2015-01-01     78.4
##  8 FB     2016-01-01    102. 
##  9 GOOG   2013-01-01    361. 
## 10 GOOG   2014-01-01    556. 
## 11 GOOG   2015-01-01    525. 
## 12 GOOG   2016-01-01    742. 
## 13 NFLX   2013-01-01     13.1
## 14 NFLX   2014-01-01     51.8
## 15 NFLX   2015-01-01     49.8
## 16 NFLX   2016-01-01    110.
{% endhighlight %}

### What I'm Most Excited About

I can use `summarise_by_time()` in Shiny Apps to make common summarization plots. In fact, I'm teaching it: [Learning Lab 30 - Shiny + Tidyquant for Finance Apps (Register Here, It's Free)](http://bit.ly/lab-30-shiny-tidyquant)

![Summarize by Time - Shiny App](/assets/2020-02-26-r-for-excel/summarise_by_time_shiny.jpg)

<p class="text-center date">Summarizing by Time in a Shiny App</p>

## 📅 NEW API Integration (Implementation scheduled for March) {#api-integrations}

Coming Soon - `Tingo API` is a popular free and open source for stock prices, cryptocurrencies, and intraday feeds from the IEX (Investors Exchange). I'm planning integration via the `riingo` package.


# Summary

<div class="pull-right hidden-xs" style="width:50%; margin-left:20px;">
  <a href="#" target="_blank">
  <img class="img-responsive" src="/assets/2020-02-26-r-for-excel/r-for-excel-users.jpg"> 
  </a>
</div>

There's a ton to learn. So much that I couldn't possibly go over all of the new features in `tidyquant v1.0.0` in this article. __And, most importantly, you haven't seen `tidyquant` tackle some real messy business problems.__

I have good news. In [Learning Lab 30 - Shiny + Tidyquant for Finance Apps (Register Here, It's Free)](http://bit.ly/lab-30-shiny-tidyquant), I'm going to be tackling some real financial data and showing how we can do really important things like:

- Perform Portfolio Analysis
- Use NEW Excel Features
- __Build Shiny Apps with Pivot Tables, VLOOKUPs and SUMIFS.__

# Experience Shiny + tidyquant  <br><small>Financial Modeling App with Shiny &amp; tidyquant</small>

Learn how to make a __Shiny Finance App__ using `Shiny` + `tidyquant` for financial modeling automation - __FOR FREE.__ Plus, I'll be showing off my `tidyquant 1.0.0` <span style="color:green">NEW Excel in R Features</span> and how they make it super easy to leverage `Shiny`. Registration is a no-brainer. Sign up here. 👇

<p class = "text-center">
    <a class="btn btn-lg btn-success" href="http://bit.ly/lab-30-shiny-tidyquant" target="_blank">Register for Learning Lab 30 Here</a>
    <p class="text-center" style="color:red;">Registration closes March 11th (Day of the event).</p>
    <p class="text-center">Lab 30 - Shiny + Tidyquant starts in...</p>
    <div style="text-align: center!important"><img align="center" src="http://i.countdownmail.com/f5zxs.gif" style="display:inline-block!important;width:90%!important;max-width:416px!important;border:0px!important;" alt="countdownmail.com"/></div>
    
</p>
<hr>
