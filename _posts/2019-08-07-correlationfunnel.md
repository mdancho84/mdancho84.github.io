---
layout: post
title: "Introducing correlationfunnel v0.1.0 - Speed Up Exploratory Data Analysis by 100X"
date:   2019-08-07 08:08:01
excerpt: "I'm pleased to announce the introduction of correlationfunnel version 0.1.0, which officially hit CRAN yesterday. The correlationfunnel package is something I've been using for a while to efficiently explore data, understand relationships, and get to business insights as fast as possible."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, Learn-Marketing, Learn-Machine-Learning, correlationfunnel]
image: /assets/2019-08-07-correlationfunnel/correlationfunnel_website.jpg
image_preview: /assets/2019-08-07-correlationfunnel/correlationfunnel_website.jpg
---



I'm pleased to announce the introduction of `correlationfunnel` version 0.1.0, which officially hit CRAN yesterday. The `correlationfunnel` package is a tool that enables ___efficient exploration of data, understanding relationships, and get to business insights as fast as possible___. I've taught `correlationfunnel` to my 500+ students enrolled in the _Advanced Machine Learning course (DS4B 201-R)_ at [Business Science University](https://www.business-science.io/). The results have been great so far. Students are using it as the ___EDA step prior to Machine Learning___ to ensure that features have relationship before they spend significant time tuning ML models on bad data. It's helped me ___get to business insights 100X faster___, which has been a massive productivity boost. And, it's a ___great communication tool___ that has helped explain business insights to executives and project stakeholders! Win-win-win. 

## A Critical Tool in My Machine Learning Arsenal

<a href="https://business-science.github.io/correlationfunnel/"><img src="/assets/2019-08-07-correlationfunnel/correlationfunnel_website.jpg" width="35%" align="right" style="border-style: solid; border-width: 2px; border-color: #2c3e50; margin-left: 10px; "/></a>

Why do I teach the `correlationfunnel`? Why is it an 80/20 tool that I use in every analysis? Why is it so great for communication?

It's because of the ___Correlation Funnel Visualization___. The correlation funnel succinctly explains relationships to the target feature. Plus, every executive and business leader understands correlation. So it makes it super easy to explain results.

Here's the correlation funnel that we'll make in the [__2-Minute Case Study - Bank Marketing Campaign__](#section3). It's examining a ___Marketing Campaign for a Bank___ (provided by the [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/datasets/Bank+Marketing)). Without knowing much about the data, we can see that the most important features (those with highest absolute correlation) go to the top. This is the crux of business insights - We know know which features are important, without spending significant time on machine learning. Further, we can make educated guesses about the story within the data (great for communicating with stakeholders).

![Correlation Funnel Visualization](/assets/2019-08-07-correlationfunnel/plot_correlationfunnel.png)
<p class="date text-center">Correlation Funnel Visualization - Important Features go to the Top</p>

## Table of Contents

1. [Two-Minute Case Study - Bank Marketing Campaign](#section1)

    - [Getting Started](#section1_1)
    - [Response &amp; Predictor Relationships](#section1_2)
    - [Binary Correlation Analysis](#section1_3)
    - [Examining Results](#section1_4)

2. [Other Great EDA Packages](#section2)

3. [What do you think of Correlation Funnel?](#comments)

4. [Help Others Learn R - Share this article](#share)

5. [New Expert Shiny Course - Coming Soon!](#announcements)

<br>
{% include cta_rtrack.html %}

## 1. Bank Marketing Campaign Case Study - 2 Minute Example {#section1}

The following case study showcases the power of __fast exploratory correlation analysis with `correlationfunnel`__. The goal of the analysis is to determine which features relate to the bank's marketing campaign goal of having customers opt into a TERM DEPOSIT (financial product). 

We will see that using __3 functions__, we can quickly:

1. Transform the data into a binary format with `binarize()`

2. Perform correlation analysis using `correlate()`

3. Visualize the highest correlation features using `plot_correlation_funnel()`

__Result__: 

Rather than spend hours looking at individual plots of campaign features and comparing them to which customers opted in to the TERM DEPOSIT product, in seconds we can discover which groups of customers have enrolled, drastically speeding up EDA. 



### Getting Started {#section1_1}

First, install `correlationfunnel` with:


{% highlight r %}
install.packages("correlationfunnel")
{% endhighlight %}


Next, load the following libraries.


{% highlight r %}
library(correlationfunnel)
library(dplyr)
{% endhighlight %}

Next, collect data to analyze. We'll use Marketing Campaign Data for a Bank that was popularized by the [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/datasets/Bank+Marketing). We can load the data with `data("marketing_campaign_tbl")`.


{% highlight r %}
# Use ?marketing_campagin_tbl to get a description of the marketing campaign features
data("marketing_campaign_tbl")

marketing_campaign_tbl %>% glimpse()
{% endhighlight %}



{% highlight text %}
## Observations: 45,211
## Variables: 18
## $ ID           <chr> "2836", "2837", "2838", "2839", "2840", "2841"…
## $ AGE          <dbl> 58, 44, 33, 47, 33, 35, 28, 42, 58, 43, 41, 29…
## $ JOB          <chr> "management", "technician", "entrepreneur", "b…
## $ MARITAL      <chr> "married", "single", "married", "married", "si…
## $ EDUCATION    <chr> "tertiary", "secondary", "secondary", "unknown…
## $ DEFAULT      <chr> "no", "no", "no", "no", "no", "no", "no", "yes…
## $ BALANCE      <dbl> 2143, 29, 2, 1506, 1, 231, 447, 2, 121, 593, 2…
## $ HOUSING      <chr> "yes", "yes", "yes", "yes", "no", "yes", "yes"…
## $ LOAN         <chr> "no", "no", "yes", "no", "no", "no", "yes", "n…
## $ CONTACT      <chr> "unknown", "unknown", "unknown", "unknown", "u…
## $ DAY          <dbl> 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5…
## $ MONTH        <chr> "may", "may", "may", "may", "may", "may", "may…
## $ DURATION     <dbl> 261, 151, 76, 92, 198, 139, 217, 380, 50, 55, …
## $ CAMPAIGN     <dbl> 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1…
## $ PDAYS        <dbl> -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1…
## $ PREVIOUS     <dbl> 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0…
## $ POUTCOME     <chr> "unknown", "unknown", "unknown", "unknown", "u…
## $ TERM_DEPOSIT <chr> "no", "no", "no", "no", "no", "no", "no", "no"…
{% endhighlight %}

### Response &amp; Predictor Relationships {#section1_2}

Modeling and Machine Learning problems often involve a response (Enrolled in `TERM_DEPOSIT`, yes/no) and many predictors (AGE, JOB, MARITAL, etc). Our job is to determine which predictors are related to the response. We can do this through __Binary Correlation Analysis__.

### Binary Correlation Analysis {#section1_3}

___Binary Correlation Analysis___ is the process of converting continuous (numeric) and categorical (character/factor) data to binary features. We can then perform a correlation analysis to see if there is predictive value between the features and the response (target). Refer to [Methodology, Key Considerations, and FAQs Documentation](https://business-science.github.io/correlationfunnel/articles/key_considerations.html) for more information on the methodology.

#### Step 1: Convert to Binary Format

The first step is converting the continuous and categorical data into binary (0/1) format. We de-select any non-predictive features. The `binarize()` function then converts the features into binary features. 

- __Numeric Features:__ Are binned into ranges or if few unique levels are binned by their value, and then converted to binary features via one-hot encoding

- __Categorical Features__: Are binned by one-hot encoding

The result is a data frame that has only binary data with columns representing the bins that the observations fall into. There are now 74 columns that are binary (0/1). Note that the output was trimmed to the first 10 rows using `slice()`. 


{% highlight r %}
marketing_campaign_binarized_tbl <- marketing_campaign_tbl %>%
    select(-ID) %>%
    binarize(n_bins = 4, thresh_infreq = 0.01)

marketing_campaign_binarized_tbl %>% 
    slice(1:10) %>%
    knitr::kable()
{% endhighlight %}



| AGE__-Inf_33| AGE__33_39| AGE__39_48| AGE__48_Inf| JOB__admin.| JOB__blue-collar| JOB__entrepreneur| JOB__housemaid| JOB__management| JOB__retired| JOB__self-employed| JOB__services| JOB__student| JOB__technician| JOB__unemployed| JOB__-OTHER| MARITAL__divorced| MARITAL__married| MARITAL__single| EDUCATION__primary| EDUCATION__secondary| EDUCATION__tertiary| EDUCATION__unknown| DEFAULT__no| DEFAULT__yes| BALANCE__-Inf_72| BALANCE__72_448| BALANCE__448_1428| BALANCE__1428_Inf| HOUSING__no| HOUSING__yes| LOAN__no| LOAN__yes| CONTACT__cellular| CONTACT__telephone| CONTACT__unknown| DAY__-Inf_8| DAY__8_16| DAY__16_21| DAY__21_Inf| MONTH__apr| MONTH__aug| MONTH__feb| MONTH__jan| MONTH__jul| MONTH__jun| MONTH__mar| MONTH__may| MONTH__nov| MONTH__oct| MONTH__sep| MONTH__-OTHER| DURATION__-Inf_103| DURATION__103_180| DURATION__180_319| DURATION__319_Inf| CAMPAIGN__-Inf_2| CAMPAIGN__2_3| CAMPAIGN__3_Inf| PDAYS__-1| PDAYS__-OTHER| PREVIOUS__0| PREVIOUS__1| PREVIOUS__2| PREVIOUS__3| PREVIOUS__4| PREVIOUS__5| PREVIOUS__-OTHER| POUTCOME__failure| POUTCOME__other| POUTCOME__success| POUTCOME__unknown| TERM_DEPOSIT__no| TERM_DEPOSIT__yes|
|------------:|----------:|----------:|-----------:|-----------:|----------------:|-----------------:|--------------:|---------------:|------------:|------------------:|-------------:|------------:|---------------:|---------------:|-----------:|-----------------:|----------------:|---------------:|------------------:|--------------------:|-------------------:|------------------:|-----------:|------------:|----------------:|---------------:|-----------------:|-----------------:|-----------:|------------:|--------:|---------:|-----------------:|------------------:|----------------:|-----------:|---------:|----------:|-----------:|----------:|----------:|----------:|----------:|----------:|----------:|----------:|----------:|----------:|----------:|----------:|-------------:|------------------:|-----------------:|-----------------:|-----------------:|----------------:|-------------:|---------------:|---------:|-------------:|-----------:|-----------:|-----------:|-----------:|-----------:|-----------:|----------------:|-----------------:|---------------:|-----------------:|-----------------:|----------------:|-----------------:|
|            0|          0|          0|           1|           0|                0|                 0|              0|               1|            0|                  0|             0|            0|               0|               0|           0|                 0|                1|               0|                  0|                    0|                   1|                  0|           1|            0|                0|               0|                 0|                 1|           0|            1|        1|         0|                 0|                  0|                1|           1|         0|          0|           0|          0|          0|          0|          0|          0|          0|          0|          1|          0|          0|          0|             0|                  0|                 0|                 1|                 0|                1|             0|               0|         1|             0|           1|           0|           0|           0|           0|           0|                0|                 0|               0|                 0|                 1|                1|                 0|
|            0|          0|          1|           0|           0|                0|                 0|              0|               0|            0|                  0|             0|            0|               1|               0|           0|                 0|                0|               1|                  0|                    1|                   0|                  0|           1|            0|                1|               0|                 0|                 0|           0|            1|        1|         0|                 0|                  0|                1|           1|         0|          0|           0|          0|          0|          0|          0|          0|          0|          0|          1|          0|          0|          0|             0|                  0|                 1|                 0|                 0|                1|             0|               0|         1|             0|           1|           0|           0|           0|           0|           0|                0|                 0|               0|                 0|                 1|                1|                 0|
|            1|          0|          0|           0|           0|                0|                 1|              0|               0|            0|                  0|             0|            0|               0|               0|           0|                 0|                1|               0|                  0|                    1|                   0|                  0|           1|            0|                1|               0|                 0|                 0|           0|            1|        0|         1|                 0|                  0|                1|           1|         0|          0|           0|          0|          0|          0|          0|          0|          0|          0|          1|          0|          0|          0|             0|                  1|                 0|                 0|                 0|                1|             0|               0|         1|             0|           1|           0|           0|           0|           0|           0|                0|                 0|               0|                 0|                 1|                1|                 0|
|            0|          0|          1|           0|           0|                1|                 0|              0|               0|            0|                  0|             0|            0|               0|               0|           0|                 0|                1|               0|                  0|                    0|                   0|                  1|           1|            0|                0|               0|                 0|                 1|           0|            1|        1|         0|                 0|                  0|                1|           1|         0|          0|           0|          0|          0|          0|          0|          0|          0|          0|          1|          0|          0|          0|             0|                  1|                 0|                 0|                 0|                1|             0|               0|         1|             0|           1|           0|           0|           0|           0|           0|                0|                 0|               0|                 0|                 1|                1|                 0|
|            1|          0|          0|           0|           0|                0|                 0|              0|               0|            0|                  0|             0|            0|               0|               0|           1|                 0|                0|               1|                  0|                    0|                   0|                  1|           1|            0|                1|               0|                 0|                 0|           1|            0|        1|         0|                 0|                  0|                1|           1|         0|          0|           0|          0|          0|          0|          0|          0|          0|          0|          1|          0|          0|          0|             0|                  0|                 0|                 1|                 0|                1|             0|               0|         1|             0|           1|           0|           0|           0|           0|           0|                0|                 0|               0|                 0|                 1|                1|                 0|
|            0|          1|          0|           0|           0|                0|                 0|              0|               1|            0|                  0|             0|            0|               0|               0|           0|                 0|                1|               0|                  0|                    0|                   1|                  0|           1|            0|                0|               1|                 0|                 0|           0|            1|        1|         0|                 0|                  0|                1|           1|         0|          0|           0|          0|          0|          0|          0|          0|          0|          0|          1|          0|          0|          0|             0|                  0|                 1|                 0|                 0|                1|             0|               0|         1|             0|           1|           0|           0|           0|           0|           0|                0|                 0|               0|                 0|                 1|                1|                 0|
|            1|          0|          0|           0|           0|                0|                 0|              0|               1|            0|                  0|             0|            0|               0|               0|           0|                 0|                0|               1|                  0|                    0|                   1|                  0|           1|            0|                0|               1|                 0|                 0|           0|            1|        0|         1|                 0|                  0|                1|           1|         0|          0|           0|          0|          0|          0|          0|          0|          0|          0|          1|          0|          0|          0|             0|                  0|                 0|                 1|                 0|                1|             0|               0|         1|             0|           1|           0|           0|           0|           0|           0|                0|                 0|               0|                 0|                 1|                1|                 0|
|            0|          0|          1|           0|           0|                0|                 1|              0|               0|            0|                  0|             0|            0|               0|               0|           0|                 1|                0|               0|                  0|                    0|                   1|                  0|           0|            1|                1|               0|                 0|                 0|           0|            1|        1|         0|                 0|                  0|                1|           1|         0|          0|           0|          0|          0|          0|          0|          0|          0|          0|          1|          0|          0|          0|             0|                  0|                 0|                 0|                 1|                1|             0|               0|         1|             0|           1|           0|           0|           0|           0|           0|                0|                 0|               0|                 0|                 1|                1|                 0|
|            0|          0|          0|           1|           0|                0|                 0|              0|               0|            1|                  0|             0|            0|               0|               0|           0|                 0|                1|               0|                  1|                    0|                   0|                  0|           1|            0|                0|               1|                 0|                 0|           0|            1|        1|         0|                 0|                  0|                1|           1|         0|          0|           0|          0|          0|          0|          0|          0|          0|          0|          1|          0|          0|          0|             0|                  1|                 0|                 0|                 0|                1|             0|               0|         1|             0|           1|           0|           0|           0|           0|           0|                0|                 0|               0|                 0|                 1|                1|                 0|
|            0|          0|          1|           0|           0|                0|                 0|              0|               0|            0|                  0|             0|            0|               1|               0|           0|                 0|                0|               1|                  0|                    1|                   0|                  0|           1|            0|                0|               0|                 1|                 0|           0|            1|        1|         0|                 0|                  0|                1|           1|         0|          0|           0|          0|          0|          0|          0|          0|          0|          0|          1|          0|          0|          0|             0|                  1|                 0|                 0|                 0|                1|             0|               0|         1|             0|           1|           0|           0|           0|           0|           0|                0|                 0|               0|                 0|                 1|                1|                 0|

#### Step 2: Perform Correlation Analysis

The second step is to perform a correlation analysis between the response (`target = TERM_DEPOSIT_yes`) and the rest of the features. This returns a specially formatted tibble with the feature, the bin, and the bin's correlation to the target. The format is exactly what we need for the next step - Producing the __Correlation Funnel__


{% highlight r %}
marketing_campaign_correlated_tbl <- marketing_campaign_binarized_tbl %>%
    correlate(target = TERM_DEPOSIT__yes)

marketing_campaign_correlated_tbl
{% endhighlight %}



{% highlight text %}
## # A tibble: 74 x 3
##    feature      bin      correlation
##    <fct>        <chr>          <dbl>
##  1 TERM_DEPOSIT no            -1.000
##  2 TERM_DEPOSIT yes            1.000
##  3 DURATION     319_Inf        0.318
##  4 POUTCOME     success        0.307
##  5 DURATION     -Inf_103      -0.191
##  6 PDAYS        -OTHER         0.167
##  7 PDAYS        -1            -0.167
##  8 PREVIOUS     0             -0.167
##  9 POUTCOME     unknown       -0.167
## 10 CONTACT      unknown       -0.151
## # … with 64 more rows
{% endhighlight %}

#### Step 3: Visualize the Correlation Funnel

A __Correlation Funnel__ is an tornado plot that lists the highest correlation features (based on absolute magnitude) at the top of the and the lowest correlation features at the bottom. The resulting visualization looks like a Funnel. 

To produce the __Correlation Funnel__, use `plot_correlation_funnel()`. Try setting `interactive = TRUE` to get an interactive plot that can be zoomed in on.


{% highlight r %}
marketing_campaign_correlated_tbl %>%
    plot_correlation_funnel(interactive = FALSE)
{% endhighlight %}

![plot of chunk unnamed-chunk-5](/figure/source/2019-08-07-correlationfunnel/unnamed-chunk-5-1.png)


### Examining the Results {#section1_4}

The most important features are towards the top. We can investigate these.


{% highlight r %}
marketing_campaign_correlated_tbl %>%
    filter(feature %in% c("DURATION", "POUTCOME", "PDAYS", 
                          "PREVIOUS", "CONTACT", "HOUSING")) %>%
    plot_correlation_funnel(interactive = FALSE, limits = c(-0.4, 0.4))
{% endhighlight %}

![plot of chunk unnamed-chunk-6](/figure/source/2019-08-07-correlationfunnel/unnamed-chunk-6-1.png)

We can see that the following prospect groups have a much greater correlation with enrollment in the TERM DEPOSIT product:

- When the "DURATION", the amount of time a prospect is engaged in marketing campaign material, is 319 seconds or longer.

- When "POUTCOME", whether or not a prospect has previously enrolled in a product, is "success".

- When "CONTACT", the medium used to contact the person, is "cellular"

- When "HOUSING", whether or not the contact has a HOME LOAN is "no"



## 2. My EDA Workflow R {#section2}

> The main addition of `correlationfunnel` to the EDA ecosystem in `R` is to quickly expose feature relationships.

There are other EDA packages, but none implement the __binarization process__ as a preprocessing step before correlation. This is critical to extracting insights especially in nonlinear continuous data. 

### Correlation funnel requires semi-processed data meaning

- Missing (`NA`) values have been treated
- Date or date-time features have been feature engineered into categorical variables
- Data is in a "clean" format (numeric data and categorical data are ready to be correlated to a Yes/No response)

Because of this, I use other packages to understand data (e.g. missing values) and correct data (preprocessing).

### EDA Packages I Use Before I Use Correlation Funnel to identify processing steps

- [GGally](https://ggobi.github.io/ggally/) - The `ggpairs()` function is one of my all-time favorites for visualizing many features quickly. I teach `GGally` in __DS4B 201-R, Advanced Machine Learning and Business Consulting__, part of the [3-Course R-Track for Business](https://university.business-science.io/p/machine-learning-web-apps-level-1-bundle-r-track-courses-101-102-201/).

- [skimr](https://ropensci.github.io/skimr/) - The `skim()` function is my go-to for console statistics on each of my variables. It's like `str()` combined with `summary()` on steroids. I teach `skimr` in __DS4B 201-R, Advanced Machine Learning and Business Consulting__, part of the [3-Course R-Track for Business](https://university.business-science.io/p/machine-learning-web-apps-level-1-bundle-r-track-courses-101-102-201/).

- [Data Explorer](https://boxuancui.github.io/DataExplorer/) - Automates Exploration and Data Treatment. Amazing for investigating features quickly and efficiently including by data type, missing data, feature engineering, and identifying relationships. 

### Packages I use to implement preprocessing

- [recipes](https://tidymodels.github.io/recipes/) - This is one of the most important R packages in my exploratory and machine learning workflow. It's use to create ___preprocessing pipelines___ - A series of steps to correct data and prepare for machine learning, correlation analysis, etc. I teach `recipes` in __DS4B 201-R, Advanced Machine Learning and Business Consulting__, part of the [3-Course R-Track for Business](https://university.business-science.io/p/machine-learning-web-apps-level-1-bundle-r-track-courses-101-102-201/).

### Other Great EDA Packages (Notable Mentions)

- [VisDat](http://visdat.njtierney.com/) - Similar in concept to Data Explorer. Utilities for visualizing missing data

- [naniar](http://naniar.njtierney.com/) - For understanding missing data.

- [UpSetR](https://github.com/hms-dbmi/UpSetR) - For generating upset plots

<br>
{% include cta_rtrack.html %}

## 3. What do you think of Correlation Funnel? {#comments}

Let me know what to do you think of `correlationfunnel` in the ___comments___. I'm interested in getting ___your feedback___ on how it works on different data sets. I've tried it on a ton, but that doesn't mean that it's perfect. Let me know your results - good or bad.

## 4. Help Others Learn R - Share this article if you like it! {#share}

Post the article on [___LinkedIn___](https://www.linkedin.com). Tag ___Matt Dancho (@Matt Dancho)___, and I'll respond!

## 5. New Expert Shiny Course - Coming Soon! {#announcements}

Expert `Shiny` Apps! Build these two apps:

- [Stock Portfolio Optimization](https://business-science.shinyapps.io/stock_optimization_app/)

- [HR Employee Churn Prediction and Prevention](https://business-science.shinyapps.io/hr_analytics_attrition_app/)

<br>
{% include cta_expert_shiny.html %}




