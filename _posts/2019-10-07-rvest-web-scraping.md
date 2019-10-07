---
layout: post
title: "Web Scraping Product Data in R with rvest and purrr"
date:   2019-10-07 06:58:01
excerpt: "Learn how to web scrape HTML, wangle JSON, and visualize product data from the Bicycle Manufacturer, Specialized Bicycles."
author: "Joon Im"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, rvest, tidyverse, jsonlite, purrr]
image: 2019-10-07-rvest/web_scrape_rvest_workflow.jpg
image_preview: 2019-10-07-rvest/web_scrape_rvest_workflow.jpg
---



<p class="lead">
This article comes from <a href="https://www.linkedin.com/in/joonhoim/" target="_blank">Joon Im</a>, a student in <a href="https://university.business-science.io/" target="_blank">Business Science University</a>. Joon has completed both the 201 (Advanced Machine Learning with H2O) and 102 (Shiny Web Applications) courses. Joon shows off his progress in this <strong><em>Web Scraping Tutorial with <code>rvest</code></em></strong>.
</p>

__R Packages Covered__:

* `rvest` & `jsonlite` - Web Scraping `HTML` and working with `JSON` data
* `purrr` - Iteration through lists using `map()` and `safely()` 
* `stringr` - Text manipulation
* `ggplot2` - Data visualization and understanding data

# Scraping Website Data and Analyzing Specialized Bicycles

<blockquote>
  <p>by <a href="https://www.linkedin.com/in/joonhoim/" target="_blank">Joon Im</a>, Data Analyst with Instacart</p>
</blockquote>

<div class="pull-right hidden-xs" style="width:50%; margin-left:20px;">
  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6559147216978669569" height="600" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe> 
</div>

Happy Monday everyone! I recently completed [the Part 2 of the Shiny Web Applications Course, DS4B 102-R](https://university.business-science.io/p/ds4b-102-r-shiny-web-application-business-level-1) and decided to make my own price prediction app. The app works by predicting prices on potential new bike models based on current existing data. 

Using techniques gleaned from Matt Dancho's [Learning Lab 8 on web-scraping](https://university.business-science.io/courses/learning-labs-pro/lectures/9931459) with `rvest` to get data, I took on the challenge he mentioned there and scraped product data on bicycles from _Specialized.com_ to create my own data set. (I highly encourage you to sign up for [Learning Labs Pro](https://university.business-science.io/p/learning-labs-pro): web-scraping with `rvest` has fundamentally changed the way I understand the Internet). I also tried to match the website's styling with some `CSS` tweaking but I'm new to all that so please bear with me if there are issues (e.g. fonts). 

I welcome any questions and would appreciate any feedback. Thank you for your time, BSU community! 

<br>

{% include cta_rtrack.html %}

# My Workflow {#workflow}

Here's a diagram of the workflow I used to web scrape the Specialized Data and create an application:

1. Start with URL of Specialized Bicycles

2. Use `rvest` and `jsonlite` to extract product data

3. Clean up data into "tidy" format using `purrr` and `stringr`

4. Visualize product prices with `ggplot2`

4. Make a `Shiny` Web App using the Business Science 102 Course. 

<br>

<a href="/code-tools/2019/10/07/rvest-web-scraping.html#workflow">
  <img src="/assets/2019-10-07-rvest/web_scrape_rvest_workflow.jpg" width="100%"/>
</a>

<p class="date text-center">
  <a href = "#workflow">My Code Workflow for Web Scraping with <code>rvest</code></a>
</p>


# My Shiny App 

<p>I built a <code>shiny</code> web application to recommend product prices of new bicylces, which you can try out: <a href="https://joon.shinyapps.io/specialized_price_prediction/" target="_blank">Specialize Product Price Recommendation Application</a>.</p>

I explain more details about how I built my `shiny` app in [Section 5 - Predictive Web App](#shiny-app). 

<br>

<a href="https://joon.shinyapps.io/specialized_price_prediction/" target="_blank">
  <img src="/assets/2019-10-07-rvest/specialized_bike_prediction_app.jpg" width="100%"/>
</a>

<p class="date text-center">
  <a href="https://joon.shinyapps.io/specialized_price_prediction/" target="_blank">
    Try out my Shiny App that Recommends Specialized Bicycle Prices using XGBoost
  </a>
</p>





# Tutorial - Web Scraping with rvest

This tutorial showcases how to web scrape websites using `rvest` and `purrr`. I'll show how to collect data on the 2020 Specialized Bicycles Product Collection, a useful task in ___building a strategic database of product and competitive information for an organization___. 

## 1. Set Up

### 1.1 Introduction

![Specialized Bikes](/assets/2019-10-07-rvest/specialized_bikes_1.jpg)

[Specialized®](https://www.specialized.com/us/en/) is a bicycle company founded by Mike Sinyard in 1974 from his hometown of Morgan Hill, California. They became known for creating the first production mountain bike back in 1981, called the _Stumpjumper_. Now they are building professional-grade bikes for riders around the world. Here’s a nice breakdown of different models on [Bike Radar](https://www.bikeradar.com/brand/specialized/) if you are interested in learning more.

[Business Science](https://www.business-science.io/) is an online learning company founded by [Matt Dancho](https://www.linkedin.com/in/mattdancho/) in 2017 and is my favorite place to learn data science skills with R such as:

- [Data Science Foundations](https://university.business-science.io/p/ds4b-101-r-business-analysis-r/)

- [Adanced Machine Learning and Business Consulting with H20](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover)

- [Shiny Web Applications](https://university.business-science.io/p/ds4b-102-r-shiny-web-application-business-level-1)

One great offering is their ongoing [Learning Labs Pro series](https://university.business-science.io/p/learning-labs-pro), which teaches additional skills such as time series forecasting, customer churn survival analysis, web-scraping and more.

In [Learning Lab 8: Web Scraping — Build A Strategic Database With Product Data](https://university.business-science.io/courses/learning-labs-pro/lectures/9931459) from Business Science, a challenge for students was issued to scrape product data on bikes from Specialized’s website. Today, we’re going to do just that.

> ___In Learning Lab 8, a challenge for students was issued to scrape product data on bikes from Specialized’s website. Today, we’re going to do just that.___

### 1.2 Check Robots

Always look at the website’s `robots.txt` to check crawling permissions. Here's [Specialized's robots.txt](https://www.specialized.com/us/en/robots.txt).

![robots.txt](/assets/2019-10-07-rvest/robots_txt.png)

### 1.3 Load Libraries

Let’s start with loading libraries that we know we will need.


{% highlight r %}
# Load libraries
library(rvest)     # HTML Hacking & Web Scraping
library(jsonlite)  # JSON manipulation
library(tidyverse) # Data Manipulation
library(tidyquant) # ggplot2 theme
library(xopen)     # Opens URL in Browser
library(knitr)     # Pretty HTML Tables
{% endhighlight %}

### 1.4 Check Out the Products

Let's navigate to the ["Bikes" Page](https://www.specialized.com/us/en/shop/bikes/c/bikes) for Specialized. 

![Specialized Bikes](/assets/2019-10-07-rvest/specialized_bikes_2.jpg)

We can click "View All" to view all 399 bikes on a single page. This makes things a bit easier when it comes time to scrape so we don’t have to iterate over multiple pages.

![View All Bikes](/assets/2019-10-07-rvest/view_all.jpg)

Save the URL.

{% highlight r %}
# URL to View All Bikes
url <- "https://www.specialized.com/us/en/shop/bikes/c/bikes?q=%3Aprice-desc%3Aarchived%3Afalse&show=All" 
{% endhighlight %}

You can then use `xopen()` to open the URL in your default web browser. 


{% highlight r %}
# View URL in Browser
xopen(url)
{% endhighlight %}

### 1.5 Read HTML

Load the `HTML` code into an object using `read_html()`. We've just grabbed all of the HTML from that page.


{% highlight r %}
# Read HTML from URL 
html <- read_html(url)
html
{% endhighlight %}



{% highlight text %}
## {html_document}
## <html lang="en">
## [1] <head>\n<title>\n        Bikes | Specialized.com</title>\n<meta ...
## [2] <body class="page-productListPage pageType-CategoryPage templat ...
{% endhighlight %}


## 2. Get the Raw Data

Use [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) to locate the product information. In our case, there is a `JSON`-like dictionary containing what we need.

### 2.1 Locate Data with Chrome DevTools

Find the data by using the hover tool.

![Bike Data as JSON](/assets/2019-10-07-rvest/bike_data_json.png)

### 2.2 Find Product Data Nodes

Find the nodes where the product data lives.

![Product List Node](/assets/2019-10-07-rvest/nodes_product_list.png) 



### 2.3 Filter HTML to Isolate Nodes 

Copy and paste the class into the `html_nodes()` function from the `rvest` library.


{% highlight r %}
html %>%
    html_nodes(".product-list__item-wrapper")
{% endhighlight %}

### 2.4 Find the Attribute That Contains the Data

![Product Data Attribute](/assets/2019-10-07-rvest/attr_product_data.png)

### 2.4 Extract the Attribute Data

Extract the attributes with the `html_attr()` function and store it as a `JSON` object. Note that we'll need to convert the JSON into a better format for analysis (more on this in a minute).


{% highlight r %}
# Store JSON as object
json <- html %>% 
    html_nodes(".product-list__item-wrapper") %>% 
    html_attr("data-product-ic")

# Show the 1st JSON element (1st bike of 399 bikes)
json[1]
{% endhighlight %}



{% highlight text %}
## [1] "{\"name\":\"S-Works Roubaix - SRAM Red eTap AXS\",\"id\":\"171042\",\"brand\":\"Specialized\",\"price\":11500,\"currencyCode\":\"USD\",\"position\":\"\",\"variant\":\"61\",\"dimension1\":\"Bikes\",\"dimension2\":\"Road\",\"dimension3\":\"Roubaix\",\"dimension4\":\"\",\"dimension5\":\"Performance Road\",\"dimension6\":\"S-Works\",\"dimension7\":\"\",\"dimension8\":\"Men/Women\"}"
{% endhighlight %}

## 3. Format as Tidy Data with purrr

Tidy data is a `tibble` (data frame) that has one row for the each of the Specialized Bike Models and columns for each of the features like model name, price, and various categories (denoted as dimensions).  

### 3.1 Make a Function that Converts JSON to Tibble

This function is just a wrapper for `toJSON` from the `jsonlite` package. The only addition is converting the `data frame` to a `tibble` using `as_tibble()`.


{% highlight r %}
# Make Function
from_json_to_tibble <- function(json) {
    json %>%
        fromJSON() %>%
        as_tibble()
}
{% endhighlight %}

We can run this on the first element of the list. 


{% highlight r %}
json[1] %>%
    from_json_to_tibble() %>%
    knitr::kable()
{% endhighlight %}



|name                                |id     |brand       | price|currencyCode |position |variant |dimension1 |dimension2 |dimension3 |dimension4 |dimension5       |dimension6 |dimension7 |dimension8 |
|:-----------------------------------|:------|:-----------|-----:|:------------|:--------|:-------|:----------|:----------|:----------|:----------|:----------------|:----------|:----------|:----------|
|S-Works Roubaix - SRAM Red eTap AXS |171042 |Specialized | 11500|USD          |         |61      |Bikes      |Road       |Roubaix    |           |Performance Road |S-Works    |           |Men/Women  |

### 3.2 Iterate to All JSON Elements

We'll use `map()` to iteratively apply our `from_json_to_tibble()` function. If we just run this, the iterative conversion error's out - This is common in long-running iterative scripts. We can get around this using the `safely()` function, which isolates the errors and allows the iteration to continue (instead of grinding to a hault). 


{% highlight r %}
# Iterate - All JSON objects ----
bike_data_list <- json %>%
    map(safely(from_json_to_tibble)) 
{% endhighlight %}



### 3.3 Inspect First Converted Element

We can see that a list is returned with 2 elements for each item: 

1. __`$result`__ - Contains the result. If conversion succeeds, we get a `tibble`. If error, we get `NULL`.

2. __`$error`__ - Contains the error message (if error). Otherwise, we get `NULL`.


{% highlight r %}
# Inspect first conversion: $result & $error
bike_data_list[1]
{% endhighlight %}



{% highlight text %}
## [[1]]
## [[1]]$result
## # A tibble: 1 x 15
##   name  id    brand price currencyCode position variant dimension1
##   <chr> <chr> <chr> <int> <chr>        <chr>    <chr>   <chr>     
## 1 S-Wo… 1710… Spec… 11500 USD          ""       61      Bikes     
## # … with 7 more variables: dimension2 <chr>, dimension3 <chr>,
## #   dimension4 <chr>, dimension5 <chr>, dimension6 <chr>,
## #   dimension7 <chr>, dimension8 <chr>
## 
## [[1]]$error
## NULL
{% endhighlight %}

### 3.4 Inspect for Errors

We are bound to get errors in this JSON conversion process for 399 bikes. Let's check to see where errors occurred. 


{% highlight r %}
error_tbl <- bike_data_list %>%
    # Grab just the $error elements
    map(~ pluck(., "error")) %>%
    # Convert from list to tibble
    enframe(name = "row") %>%
    # Return TRUE if element has error
    mutate(is_error = map(value, function(x) !is.null(x))) %>%
    # Unnest nested list
    unnest(is_error) %>%
    # Filter where error == TRUE
    filter(is_error)

error_tbl
{% endhighlight %}



{% highlight text %}
## # A tibble: 2 x 3
##     row value      is_error
##   <int> <list>     <lgl>   
## 1   222 <smplErrr> TRUE    
## 2   288 <smplErrr> TRUE
{% endhighlight %}


### 3.5 What happened?

We got two errors - Bike 222 and 288. We can use `pluck()` to grab the first error in the "value" column. It's the result of an errant `"` symbol that represents inches. 


{% highlight r %}
error_tbl %>% pluck("value", 1)
{% endhighlight %}



{% highlight text %}
## <simpleError: lexical error: invalid char in json text.
##           osition":"","variant":"22.5" TT","dimension1":"Bikes","dimen
##                      (right here) ------^
## >
{% endhighlight %}

We can get around this by replacing the `"`. Let's re-run the code using the `str_replace()` function to replace the quote. 


{% highlight r %}
json[222] %>%
    str_replace('22.5\\" TT', '22.5 TT') %>%
    from_json_to_tibble()
{% endhighlight %}



{% highlight text %}
## Error: lexical error: invalid char in json text.
##           imension4":"","dimension5":""BMX / Dirt Jump"","dimension6":
##                      (right here) ------^
{% endhighlight %}

We get another error. There is an errant set of quotes around "BMX / Dirt Jump". We can use `str_replace()` again to resolve. Success!


{% highlight r %}
json[222] %>%
    str_replace('\\"BMX / Dirt Jump\\"', 'BMX / Dirt Jump') %>%
    str_replace('22.5\\" TT', '22.5 TT') %>%
    from_json_to_tibble()
{% endhighlight %}



{% highlight text %}
## # A tibble: 1 x 15
##   name  id    brand price currencyCode position variant dimension1
##   <chr> <chr> <chr> <int> <chr>        <chr>    <chr>   <chr>     
## 1 P.Sl… 1710… Spec…  2500 USD          ""       22.5 TT Bikes     
## # … with 7 more variables: dimension2 <chr>, dimension3 <chr>,
## #   dimension4 <chr>, dimension5 <chr>, dimension6 <chr>,
## #   dimension7 <chr>, dimension8 <chr>
{% endhighlight %}

### 3.6 Run Again - Success - Errors Fixed!

We can try one more time, now using the `str_replace()` to remove the quotes causing conversion errors, and `map_dfr()` to return a data frame stacked row-wise. 


{% highlight r %}
# Fix errors, re-run
bike_features_tbl <- json %>%
    str_replace('\\"BMX / Dirt Jump\\"', 'BMX / Dirt Jump') %>%
    str_replace('22.5\\" TT', '22.5 TT') %>%
    map_dfr(from_json_to_tibble) 

# Show first 6 rows
bike_features_tbl %>%
    head() %>%
    kable()
{% endhighlight %}



|name                                   |id     |brand       | price|currencyCode |position |variant |dimension1 |dimension2 |dimension3      |dimension4 |dimension5       |dimension6 |dimension7 |dimension8 |
|:--------------------------------------|:------|:-----------|-----:|:------------|:--------|:-------|:----------|:----------|:---------------|:----------|:----------------|:----------|:----------|:----------|
|S-Works Roubaix - SRAM Red eTap AXS    |171042 |Specialized | 11500|USD          |         |61      |Bikes      |Road       |Roubaix         |           |Performance Road |S-Works    |           |Men/Women  |
|S-Works Roubaix - Shimano Dura-Ace Di2 |170241 |Specialized | 11000|USD          |         |56      |Bikes      |Road       |Roubaix         |           |Performance Road |S-Works    |           |Men/Women  |
|S-Works Epic AXS                       |171229 |Specialized | 11020|USD          |         |S       |Bikes      |Mountain   |Epic FSR/Epic   |           |Cross Country    |S-Works    |           |Men/Women  |
|Stumpjumper EVO Comp Carbon 29         |173494 |Specialized |  4520|USD          |         |S3      |Bikes      |Mountain   |Stumpjumper EVO |           |Trail            |           |           |Men/Women  |
|Stumpjumper EVO Comp Carbon 27.5       |173495 |Specialized |  4520|USD          |         |S2      |Bikes      |Mountain   |Stumpjumper EVO |           |Trail            |           |           |Men/Women  |
|Fuse Expert 29                         |171068 |Specialized |  2150|USD          |         |XS      |Bikes      |Mountain   |Fuse            |           |Trail            |           |           |Men/Women  |

## 4. Explore Bike Models

I want to understand how price depends on various features like model, type of bike (electric, mountain, road), and other features that will eventually be used in my `XGBoost` Machine Learning model inside of my `Shiny` Web App. 

### 4.1 Most and Least Expensive Bike Models

There's a clear relationship between price and "Dimension 3" (bike model). We can see this visually. 



{% highlight r %}
bike_features_tbl %>%
    select(dimension3, price) %>%
    mutate(dimension3 = as_factor(dimension3) %>% 
               fct_reorder(price, .fun = median)) %>%
    # Plot
    ggplot(aes(dimension3, price)) +
    geom_boxplot() +
    coord_flip() +
    theme_tq()  +
    scale_y_continuous(labels = scales::dollar_format()) +
    labs(title = "Specialized Bike Models by Price")
{% endhighlight %}

![plot of chunk unnamed-chunk-16](/figure/source/2019-10-07-rvest-web-scraping/unnamed-chunk-16-1.png)

### 4.2 S-Works Effect

I also noticed that "S-Works" is Specialized's Premium Brand. We can update the `ggplot2` visualization to segment bikes with "S-Works" in the model name to visually compare the "S-Works Effect". I see that the S-Works bikes tend to have a higher median price than "non-S-Works". 


{% highlight r %}
bike_features_tbl %>%
    select(name, price, dimension3) %>%
    mutate(s_works = ifelse(str_detect(name, "S-Works"), "S-Works", "Not S-Works")) %>%
    mutate(dimension3 = as_factor(dimension3) %>% 
               fct_reorder(price, .fun = median)) %>%
    # Plot
    ggplot(aes(dimension3, price, color = s_works)) +
    geom_boxplot() +
    coord_flip() +
    facet_wrap(~ s_works, ncol = 1, scales = "free_y") +
    theme_tq()  +
    scale_color_tq() +
    scale_y_continuous(labels = scales::dollar_format()) +
    labs(title = "S-Works Effect on Price by Model")
{% endhighlight %}

![plot of chunk unnamed-chunk-17](/figure/source/2019-10-07-rvest-web-scraping/unnamed-chunk-17-1.png)


## 5. Predictive Web Application {#shiny-app}

I made and deployed a [Product Price Recommendation Application for Specialized Bicycles](https://joon.shinyapps.io/specialized_price_prediction/) using the web-scraped Specialized Data. Here's how I built it: 

- The `Shiny` app uses the webscraped data from 2019 Specialized Models (this tutorial covers web-scraping 2020 models), which I learned in [Learning Lab 8](https://university.business-science.io/courses/learning-labs-pro/lectures/9931459). 

- I built the Shiny app using Part 2 of the [Shiny Web Applications Course (DS4B 102-R)](https://university.business-science.io/p/ds4b-102-r-shiny-web-application-business-level-1/), the 2nd course in the [3-Course R-Track](https://university.business-science.io/p/machine-learning-web-apps-level-1-bundle-r-track-courses-101-102-201).

- The `shiny` application uses an ___`XGBoost` Machine Learning model___ to recommend product prices based on the existing product portfolio.  

- The code is available in my [GitHub Repo Here](https://github.com/joon-im/specialized_price_prediction).

<br>

<a href="https://joon.shinyapps.io/specialized_price_prediction/" target="_blank">
  <img src="/assets/2019-10-07-rvest/specialized_bike_prediction_app.jpg" width="100%"/>
</a>

<p class="date text-center">
  <a href="https://joon.shinyapps.io/specialized_price_prediction/" target="_blank">
    Try out my Shiny App that Recommends Specialized Bicycle Prices using XGBoost
  </a>
</p>

# Parting Thoughts

Web-scraping with `rvest` has fundamentally changed the way I understand the Internet. Once I realized that the entire Internet (well, most of it) is basically just one big database, it rocked my world. I highly encourage you to sign up for [Learning Labs Pro](https://university.business-science.io/p/learning-labs-pro). Learning Lab 8 - Web Scraping - Build A Strategic Database With Product Data with `rvest` was what opened my eyes to the power of web scraping. 

Using the data, I was able to make and deploy a `Shiny` web application that uses an `XGBoost` Machine Learning model to predict and recommend bicycle prices. This is just one way that businesses can use the strategic database. If you want to learn `shiny`, I highly recommend the Shiny Web Applications Course by Business Science. You can take it as part of the [3-Course R-Track Bundle](https://university.business-science.io/p/machine-learning-web-apps-level-1-bundle-r-track-courses-101-102-201/) offered by Business Science. 

<br>

{% include cta_rtrack.html %}


# Other Student Articles You Might Enjoy

Here are two more Student Success Tutorials related to scraping data and building `shiny` applications. 

- __[PDF Scraping in R with tabulizer](https://www.business-science.io/code-tools/2019/09/23/tabulizer-pdf-scraping.html) - By Jennifer Cooper__

- __[Build An R Shiny App - Wedding Risk Model](https://www.business-science.io/business/2019/06/09/Wedding-Risk-Model-App.html) - By Bryan Clark__
