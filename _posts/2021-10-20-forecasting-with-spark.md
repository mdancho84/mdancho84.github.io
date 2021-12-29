---
layout: post
title: "Tidy Time Series Forecasting in R with Spark"
date:   2021-10-20 06:01:01
excerpt: "I'm super excited to introduce the new Modeltime Backend for Spark. Let's use it to perform forecasting with tidymodels."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-Timeseries, Learn-Machine-Learning, R, modeltime, spark]
image: /assets/2021-10-20-forecasting-spark/tidy-forecasting-with-spark.jpg
image_preview: /assets/2021-10-20-forecasting-spark/tidy-forecasting-with-spark.jpg
---



<span style="font-size:26px;">I'm SUPER EXCITED to show fellow time-series enthusiasts a new way that we can __scale time series analysis__ using an amazing technology called `Spark`! </span>

<div class="pull-right" style="width:40%; margin-left:20px; margin-bottom:20px;">
  <a href="#" target="_blank">
  <img class="img-responsive" style="border:none !important;" src="/assets/2021-10-20-forecasting-spark/tidy-forecasting-with-spark.jpg">
  </a>
</div>

Without Spark, large-scale forecasting projects of __10,000 time series__ can take days to run because of long-running for-loops and the need to test many models on each time series. 

Spark has been widely accepted as a __"big data" solution__, and we'll use it to scale-out (distribute) our time series analysis to Spark Clusters, and run our analysis in parallel. 


# TLDR

- `Spark` is an amazing technology for processing __large-scale__ data science workloads. 

- `Modeltime` is a state-of-the-art forecasting library that I personally developed for __"Tidy Forecasting"__ in R. `Modeltime` now integrates a `Spark` Backend with capability of forecasting 10,000+ time series using distributed Spark Clusters.

- I show an introductory tutorial to __get you started.__ Readers can sign up for a [__Free Live Training using Modeltime and Spark__](https://bit.ly/spark_ts) where we'll cover more detail that we couldn't cover during this introductory tutorial including:

  - Forecasting Ensembles (New Capability)
  - More Advanced Time Series Algorithms
  - Feature Engineering at Scale
  - Special Offers on Courses
  


# Free Training: 3-Tips to Scale Forecasting

As mentioned above, we are hosting a [Free Training: 3-Tips to Scale Forecasting](https://bit.ly/spark_ts). This will be a 1-hour full-code training with __3 tips to scale your forecasting.__ 

<a href="https://bit.ly/spark_ts">
  <img class="img-responsive" style="border:none !important;" src="/assets/2021-10-20-forecasting-spark/free-training.jpg">
</a>
<p class="date text-center">Click image for Free Time Series Training</p>

<p class="text-center">
  <a class="btn btn-xxl-wide-green" href="https://bit.ly/spark_ts">
  Register Here for Free Training
  </a>
</p>


# What is Spark? 


>_I feel like I've unlocked __infinite__ power._

If you're like me, you have heard this term, _"Spark"_, but maybe you haven't tried it yet. That was me about 2-months ago... Boy, am I glad I tried it. __I feel like I've unlocked infinite power.__ 



<div style="max-width:480px;margin-left:auto;margin-right:auto;height:0;padding-bottom:35%;position:relative;"><iframe src="https://giphy.com/embed/5GoVLqeAOo6PK" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>

## Spark's Best Qualities

According to Spark's website, Spark is a __"unified analytics engine for large-scale data processing."__

<img class="img img-responsive" style="border:none !important;max-width:350px; margin-left:auto; margin-bottom:auto;" src="/assets/2021-10-20-forecasting-spark/logo-spark.png">

This means that Spark has the following amazing qualities:

1. __Spark is Unified:__ We can use different languages like Python, R, SQL and Java to interact with Spark.

2. __Spark is made for Large-Scale__: We can run workloads 100X faster versus Hadoop (according to Spark).

## How Spark Works

Here's a picture showing how Spark works. 

![How Spark Works](/assets/2021-10-20-forecasting-spark/how-spark-works.jpg)
<p class="date text-center">How Spark Works</p>

- Spark runs on Java Virtual Machines (JVMs), which allow Spark to run and distribute workloads very fast. 

- But most of us aren't Java Programmers (we're R and Python programmers), so Spark has an interface to R and Python. 

- This means we can communicate with Spark via R, and send the work to Spark Executors all from the comfort of R. Boom. 💥 

# What is Modeltime?

Modeltime is a time series forecasting framework for __"tidy time series forecasting"__. 

<img class="img img-responsive" style="border:none !important;max-width:350px; margin-left:auto; margin-bottom:auto;" src="/assets/2021-10-20-forecasting-spark/logo-modeltime.png">

## Tidy Modeling

>Tidymodels is like Scikit Learn, but better.

The "Tidy" in "Tidy time series forecasting" is because `modeltime` builds on top of `tidymodels`, a collection of packages for modeling and machine learning using `tidyverse` principles. 

I equate Tidymodels in R to Scikit Learn in Python... __Tidymodels is like Scikit Learn, but better.__ It's simply easier to use especially when it comes to feature engineering (very important for time series), and I become more productive because of it. 

![Tidymodels](/assets/2021-10-20-forecasting-spark/tidymodels-website.jpg)

<p class="date text-center"><a href="https://www.tidymodels.org/" target="_blank">tidymodels.org</a></p>

## Tidy Time Series Forecasting

Because `modeltime` builds on top of Tidymodels, any user that learns `tidymodels` can use `modeltime`. 

<div style="width:100%;height:0;padding-bottom:30%;position:relative;"><iframe src="https://giphy.com/embed/3ohzdIuqJoo8QdKlnW" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>


# The Modeltime Spark Backend

Now for the best part - the highlight of your day! 

<span style="font-size:26px;">__Modeltime integrates Spark.__</span>

<span style="blue">__YES! I said it people.__</span>

I've just upgraded Modeltime's parallel processing backend so now you can swap out your local machine for Spark Clusters. This means you can:

1. __Run Spark Locally__ - Ok, this is cool but doesn't get me much beyond normal parallel processing. What else ya got, Matt?

2. __Run Spark in the Cloud__ - Ahhh, this is where Matt was going. Now we're talking. 

3. __Run Spark on Databricks__ - Bingo! Many enterprises are adopting Databricks as their data engineering solution. So now Matt's saying I can run Modeltime in the cloud using databricks! Suh. Weet! 

Yes! And you are now no longer limited by your CPU cores for parallel processing. You can easily scale modeltime to as many Spark Clusters as your company can afford. 

<div style="width:100%;height:0;padding-bottom:30%;position:relative;"><iframe src="https://giphy.com/embed/5VKbvrjxpVJCM" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>

<br>

Ok, on to the forecasting tutorial!

# Spark Forecasting Tutorial

We'll run through a short forecasting example to __get you started.__ Refer to the [__FREE Time Series with Spark Training__](https://bit.ly/spark_ts) for how to perform iterative forecasting with larger datasets using `modeltime` and 3-tips for scalable forecasting (beyond what we could cover in this tutorial).

## Iterative Forecasting

One of the most common situations that parallel computation is required is when doing __iterative forecasting__ where the data scientist needs to experiment with 10+ models across 10,000+ time series. It's common for this large-scale, high-performance forecasting exercise to take days. 

![Iterative Forecasting with Modeltime](/assets/2021-08-26-modeltime-nested/modeltime-nested.jpg)
<p class="text-center date">Iterative (Nested) Forecasting with Modeltime</p>

We'll show you how we can __combine Modeltime _"Nested Forecasting"_ and it's Parallel Spark Backend__ to scale this computation with distributed parallel Spark execution. 

## Matt said "Nested"... What's Nested?

A term that you'll hear me use frequently is __"nested"__. 

__What I'm referring to is the "nested" data structure__, which come from `tidyr` package that allows us to organize data frames as lists inside data frames. This is a powerful feature of the `tidyverse` that allows us for modeling at scale. 

The book, ["R for Data Science"](https://r4ds.had.co.nz/many-models.html), has a __FULL Chapter on Many Models (and Nested Data).__ This is a great resource for those that want more info on Nested Data and Modeling (bookmark it ✅). 

OK, let's go!

## System Requirements

This tutorial requires:

1. __sparklyr, modeltime, and tidyverse__: Make sure you have these R libraries installed (use `install.packages(c("sparklyr", "modeltime", "tidyverse"), dependencies = TRUE)`). If this is a fresh install, it may take a bit. Just be patient. ☕

2. __Java__: Spark installation depends on Java being installed. [Download Java here.](https://java.com/en/) 

3. __Spark Installation:__ Can be accomplished via `sparklyr::spark_install()` provided the user has `sparklyr` and Java installed (see Steps 1 and 2). 

## Libraries

Load the following libraries. 


{% highlight r %}
library(sparklyr)
library(tidymodels)
library(modeltime)
library(tidyverse)
library(timetk)
{% endhighlight %}

## Spark Connection

Next, we set up a Spark connection via `sparklyr`. For this tutorial, we use the "local" connection. But many users will use [Databricks](https://databricks.com/) to scale the forecasting workload. 

To run Spark locally:


{% highlight r %}
sc <- spark_connect(master = "local")
{% endhighlight %}

If using Databricks, you can use:


{% highlight r %}
sc <- spark_connect(method = "databricks")
{% endhighlight %}

## Setup the Spark Backend

Next, we register the Spark Backend using `parallel_start(sc, .method = "spark")`. This is a helper to set up the `registerDoSpark()` foreach adaptor. In layman's terms, this just means that we can now run  parallel using Spark. 


{% highlight r %}
parallel_start(sc, .method = "spark")
{% endhighlight %}

## Data Preparation (for Nested Forecasting)

The dataset we'll be forecasting is the `walmart_sales_weekly`, which we modify to just include 3 columns: "id", "date", "value". 

1. The __id__ feature is the grouping variable. 
2. The __date__ feature contains timestamps.
3. The __value__ feature is the sales value for the Walmart store-department combination. 


{% highlight r %}
walmart_sales_weekly %>%
    select(id, Date, Weekly_Sales) %>%
    set_names(c("id", "date", "value")) %>%
    group_by(id) %>%
    plot_time_series(date, value, .facet_ncol = 2, .interactive = F)
{% endhighlight %}

![plot of chunk unnamed-chunk-5](/figure/source/2021-10-20-forecasting-with-spark/unnamed-chunk-5-1.png)

We prepare as nested data using the Nested Forecasting preparation functions. 

1. `extend_timeseries()`: This extends each one of our time series into the future by 52 timestamps (this is one year for our weekly data set).

2. `nest_timeseries()`: This converts our data to the nested data format indicating that our future data will be the last 52 timestamps (that we just extended).

3. `split_nested_timeseries()`: This adds indicies for the train / test splitting so we can develop accuracy metrics and determine which model to use for which time series. 


{% highlight r %}
nested_data_tbl <- walmart_sales_weekly %>%
    select(id, Date, Weekly_Sales) %>%
    set_names(c("id", "date", "value")) %>%
    extend_timeseries(
        .id_var        = id,
        .date_var      = date,
        .length_future = 52
    ) %>%
    nest_timeseries(
        .id_var        = id,
        .length_future = 52
    ) %>%
    
    split_nested_timeseries(
        .length_test = 52
    )

nested_data_tbl
{% endhighlight %}



{% highlight text %}
## # A tibble: 7 × 4
##   id    .actual_data       .future_data      .splits        
##   <fct> <list>             <list>            <list>         
## 1 1_1   <tibble [143 × 2]> <tibble [52 × 2]> <split [91|52]>
## 2 1_3   <tibble [143 × 2]> <tibble [52 × 2]> <split [91|52]>
## 3 1_8   <tibble [143 × 2]> <tibble [52 × 2]> <split [91|52]>
## 4 1_13  <tibble [143 × 2]> <tibble [52 × 2]> <split [91|52]>
## 5 1_38  <tibble [143 × 2]> <tibble [52 × 2]> <split [91|52]>
## 6 1_93  <tibble [143 × 2]> <tibble [52 × 2]> <split [91|52]>
## 7 1_95  <tibble [143 × 2]> <tibble [52 × 2]> <split [91|52]>
{% endhighlight %}

### Key Concept: Nested Data

You'll notice our data frame (tibble) is only 7 rows and 4 columns. This is because we've nested our data. 

![Nested Data](/assets/2021-10-20-forecasting-spark/nested-data.jpg)

If you examine each of the rows, you'll notice each row is an ID. And we have "tibbles" in each of the other columns. 

That is nested data!

## Modeling

We'll create two unfitted models: XGBoost and Prophet. Then we'll use `modeltime_nested_fit()` to iteratively fit the models to each of the time series using the Spark Backend. 

### Model 1: XGBoost

We create the XGBoost model on features derived from the date column. This gets a bit complicated because we are adding `recipes` to process the data. Basically, we are creating a bunch of features from the date column in each of the time series. 

1. First, we use `extract_nested_train_split(nested_data_tbl, 1)` to extract the first time series, so we can begin to create a "recipe"

2. Once we develop a recipe, we add "steps" that build features. We start by creating timeseries signature features from the date column. Then we remove "date" and further process the signature features. 

3. Then we create an XGBoost model by developing a tidymodels "workflow". The workflow combines a model (`boost_tree()` in this case) with a recipe that we previously created. 

4. The output is an unfitted workflow that will be applied to all 7 of our timeseries. 


{% highlight r %}
rec_xgb <- recipe(value ~ ., extract_nested_train_split(nested_data_tbl, 1)) %>%
    step_timeseries_signature(date) %>%
    step_rm(date) %>%
    step_zv(all_predictors()) %>%
    step_dummy(all_nominal_predictors(), one_hot = TRUE)

wflw_xgb <- workflow() %>%
    add_model(boost_tree("regression") %>% set_engine("xgboost")) %>%
    add_recipe(rec_xgb)

wflw_xgb
{% endhighlight %}



{% highlight text %}
## ══ Workflow ════════════════════════════════════════════════════════════════════
## Preprocessor: Recipe
## Model: boost_tree()
## 
## ── Preprocessor ────────────────────────────────────────────────────────────────
## 4 Recipe Steps
## 
## • step_timeseries_signature()
## • step_rm()
## • step_zv()
## • step_dummy()
## 
## ── Model ───────────────────────────────────────────────────────────────────────
## Boosted Tree Model Specification (regression)
## 
## Computational engine: xgboost
{% endhighlight %}

### Prophet

Next, we create a prophet workflow. The process is actually simpler than XGBoost because Prophet doesn't require all of the preprocessing recipe steps that XGBoost does. 


{% highlight r %}
rec_prophet <- recipe(value ~ date, extract_nested_train_split(nested_data_tbl)) 

wflw_prophet <- workflow() %>%
    add_model(
        prophet_reg("regression", seasonality_yearly = TRUE) %>% 
            set_engine("prophet")
    ) %>%
    add_recipe(rec_prophet)

wflw_prophet
{% endhighlight %}



{% highlight text %}
## ══ Workflow ════════════════════════════════════════════════════════════════════
## Preprocessor: Recipe
## Model: prophet_reg()
## 
## ── Preprocessor ────────────────────────────────────────────────────────────────
## 0 Recipe Steps
## 
## ── Model ───────────────────────────────────────────────────────────────────────
## PROPHET Regression Model Specification (regression)
## 
## Main Arguments:
##   seasonality_yearly = TRUE
## 
## Computational engine: prophet
{% endhighlight %}

## Nested Forecasting with Spark

Now, the beauty is that everything is set up for us to perform the nested forecasting with Spark. We simply use `modeltime_nested_fit()` and make sure it uses the Spark Backend by setting `control_nested_fit(allow_par = TRUE)`.

Note that this will take about __20-seconds__ because we have a one-time cost to move data, libraries, and environment variables to the Spark clusters. But the good news is that when we scale up to 10,000+ time series, that the one-time cost is minimal compared to the speed up from distributed computation. 


{% highlight r %}
nested_modeltime_tbl <- nested_data_tbl %>%
    modeltime_nested_fit(
        wflw_xgb,
        wflw_prophet,
        
        control = control_nested_fit(allow_par = TRUE, verbose = TRUE)
    )
{% endhighlight %}



{% highlight text %}
## Using existing parallel backend with 12 clusters (cores)...
##  Beginning Parallel Loop | 0.004 seconds
##  Finishing parallel backend. Clusters are remaining open. | 19.556 seconds
##  Close clusters by running: `parallel_stop()`.
## 
## Finished in: 19.55732 secs.
{% endhighlight %}

The nested modeltime object has now __fit the models using Spark.__ You'll see a new column added to our nested data with the name ".modeltime_tables". This contains 2 fitted models (one XGBoost and one Prophet) for each time series. 


{% highlight r %}
nested_modeltime_tbl
{% endhighlight %}



{% highlight text %}
## # Nested Modeltime Table
##   # A tibble: 7 × 5
##   id    .actual_data       .future_data      .splits         .modeltime_tables  
##   <fct> <list>             <list>            <list>          <list>             
## 1 1_1   <tibble [143 × 2]> <tibble [52 × 2]> <split [91|52]> <mdl_time_tbl [2 ×…
## 2 1_3   <tibble [143 × 2]> <tibble [52 × 2]> <split [91|52]> <mdl_time_tbl [2 ×…
## 3 1_8   <tibble [143 × 2]> <tibble [52 × 2]> <split [91|52]> <mdl_time_tbl [2 ×…
## 4 1_13  <tibble [143 × 2]> <tibble [52 × 2]> <split [91|52]> <mdl_time_tbl [2 ×…
## 5 1_38  <tibble [143 × 2]> <tibble [52 × 2]> <split [91|52]> <mdl_time_tbl [2 ×…
## 6 1_93  <tibble [143 × 2]> <tibble [52 × 2]> <split [91|52]> <mdl_time_tbl [2 ×…
## 7 1_95  <tibble [143 × 2]> <tibble [52 × 2]> <split [91|52]> <mdl_time_tbl [2 ×…
{% endhighlight %}

### Model Test Accuracy

We can observe the results. First, we can check the accuracy for each model. 

- Let's use `extract_nested_test_accuracy()` to extract the logged accuracy table. 

- We can format it as an HTML table with `table_modeltime_accuracy()`. This function is great for reports!


{% highlight r %}
nested_modeltime_tbl %>%
  extract_nested_test_accuracy() %>%
  table_modeltime_accuracy(.interactive = F)
{% endhighlight %}

<!--html_preserve--><div id="bdnvjocphr" style="overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', 'Fira Sans', 'Droid Sans', Arial, sans-serif;
}

#bdnvjocphr .gt_table {
  display: table;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
  color: #333333;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  background-color: #FFFFFF;
  width: auto;
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #A8A8A8;
  border-right-style: none;
  border-right-width: 2px;
  border-right-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #A8A8A8;
  border-left-style: none;
  border-left-width: 2px;
  border-left-color: #D3D3D3;
}

#bdnvjocphr .gt_heading {
  background-color: #FFFFFF;
  text-align: center;
  border-bottom-color: #FFFFFF;
  border-left-style: none;
  border-left-width: 1px;
  border-left-color: #D3D3D3;
  border-right-style: none;
  border-right-width: 1px;
  border-right-color: #D3D3D3;
}

#bdnvjocphr .gt_title {
  color: #333333;
  font-size: 125%;
  font-weight: initial;
  padding-top: 4px;
  padding-bottom: 4px;
  border-bottom-color: #FFFFFF;
  border-bottom-width: 0;
}

#bdnvjocphr .gt_subtitle {
  color: #333333;
  font-size: 85%;
  font-weight: initial;
  padding-top: 0;
  padding-bottom: 6px;
  border-top-color: #FFFFFF;
  border-top-width: 0;
}

#bdnvjocphr .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}

#bdnvjocphr .gt_col_headings {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
  border-left-style: none;
  border-left-width: 1px;
  border-left-color: #D3D3D3;
  border-right-style: none;
  border-right-width: 1px;
  border-right-color: #D3D3D3;
}

#bdnvjocphr .gt_col_heading {
  color: #333333;
  background-color: #FFFFFF;
  font-size: 100%;
  font-weight: normal;
  text-transform: inherit;
  border-left-style: none;
  border-left-width: 1px;
  border-left-color: #D3D3D3;
  border-right-style: none;
  border-right-width: 1px;
  border-right-color: #D3D3D3;
  vertical-align: bottom;
  padding-top: 5px;
  padding-bottom: 6px;
  padding-left: 5px;
  padding-right: 5px;
  overflow-x: hidden;
}

#bdnvjocphr .gt_column_spanner_outer {
  color: #333333;
  background-color: #FFFFFF;
  font-size: 100%;
  font-weight: normal;
  text-transform: inherit;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 4px;
  padding-right: 4px;
}

#bdnvjocphr .gt_column_spanner_outer:first-child {
  padding-left: 0;
}

#bdnvjocphr .gt_column_spanner_outer:last-child {
  padding-right: 0;
}

#bdnvjocphr .gt_column_spanner {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
  vertical-align: bottom;
  padding-top: 5px;
  padding-bottom: 5px;
  overflow-x: hidden;
  display: inline-block;
  width: 100%;
}

#bdnvjocphr .gt_group_heading {
  padding: 8px;
  color: #333333;
  background-color: #FFFFFF;
  font-size: 100%;
  font-weight: initial;
  text-transform: inherit;
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
  border-left-style: none;
  border-left-width: 1px;
  border-left-color: #D3D3D3;
  border-right-style: none;
  border-right-width: 1px;
  border-right-color: #D3D3D3;
  vertical-align: middle;
}

#bdnvjocphr .gt_empty_group_heading {
  padding: 0.5px;
  color: #333333;
  background-color: #FFFFFF;
  font-size: 100%;
  font-weight: initial;
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
  vertical-align: middle;
}

#bdnvjocphr .gt_from_md > :first-child {
  margin-top: 0;
}

#bdnvjocphr .gt_from_md > :last-child {
  margin-bottom: 0;
}

#bdnvjocphr .gt_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  margin: 10px;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: #D3D3D3;
  border-left-style: none;
  border-left-width: 1px;
  border-left-color: #D3D3D3;
  border-right-style: none;
  border-right-width: 1px;
  border-right-color: #D3D3D3;
  vertical-align: middle;
  overflow-x: hidden;
}

#bdnvjocphr .gt_stub {
  color: #333333;
  background-color: #FFFFFF;
  font-size: 100%;
  font-weight: initial;
  text-transform: inherit;
  border-right-style: solid;
  border-right-width: 2px;
  border-right-color: #D3D3D3;
  padding-left: 12px;
}

#bdnvjocphr .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

#bdnvjocphr .gt_first_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
}

#bdnvjocphr .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

#bdnvjocphr .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}

#bdnvjocphr .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}

#bdnvjocphr .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}

#bdnvjocphr .gt_footnotes {
  color: #333333;
  background-color: #FFFFFF;
  border-bottom-style: none;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
  border-left-style: none;
  border-left-width: 2px;
  border-left-color: #D3D3D3;
  border-right-style: none;
  border-right-width: 2px;
  border-right-color: #D3D3D3;
}

#bdnvjocphr .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding: 4px;
}

#bdnvjocphr .gt_sourcenotes {
  color: #333333;
  background-color: #FFFFFF;
  border-bottom-style: none;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
  border-left-style: none;
  border-left-width: 2px;
  border-left-color: #D3D3D3;
  border-right-style: none;
  border-right-width: 2px;
  border-right-color: #D3D3D3;
}

#bdnvjocphr .gt_sourcenote {
  font-size: 90%;
  padding: 4px;
}

#bdnvjocphr .gt_left {
  text-align: left;
}

#bdnvjocphr .gt_center {
  text-align: center;
}

#bdnvjocphr .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}

#bdnvjocphr .gt_font_normal {
  font-weight: normal;
}

#bdnvjocphr .gt_font_bold {
  font-weight: bold;
}

#bdnvjocphr .gt_font_italic {
  font-style: italic;
}

#bdnvjocphr .gt_super {
  font-size: 65%;
}

#bdnvjocphr .gt_footnote_marks {
  font-style: italic;
  font-weight: normal;
  font-size: 65%;
}
</style>
<table class="gt_table">
  <thead class="gt_header">
    <tr>
      <th colspan="10" class="gt_heading gt_title gt_font_normal gt_bottom_border" style>Accuracy Table</th>
    </tr>
    
  </thead>
  <thead class="gt_col_headings">
    <tr>
      <th class="gt_col_heading gt_columns_bottom_border gt_center" rowspan="1" colspan="1">id</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1">.model_id</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1">.model_desc</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1">.type</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1">mae</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1">mape</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1">mase</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1">smape</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1">rmse</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1">rsq</th>
    </tr>
  </thead>
  <tbody class="gt_table_body">
    <tr><td class="gt_row gt_center">1_1</td>
<td class="gt_row gt_right">1</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">4552.91</td>
<td class="gt_row gt_right">18.14</td>
<td class="gt_row gt_right">0.90</td>
<td class="gt_row gt_right">17.04</td>
<td class="gt_row gt_right">7905.80</td>
<td class="gt_row gt_right">0.39</td></tr>
    <tr><td class="gt_row gt_center">1_1</td>
<td class="gt_row gt_right">2</td>
<td class="gt_row gt_left">PROPHET</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">4078.01</td>
<td class="gt_row gt_right">17.53</td>
<td class="gt_row gt_right">0.80</td>
<td class="gt_row gt_right">17.58</td>
<td class="gt_row gt_right">5984.31</td>
<td class="gt_row gt_right">0.65</td></tr>
    <tr><td class="gt_row gt_center">1_3</td>
<td class="gt_row gt_right">1</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">1556.36</td>
<td class="gt_row gt_right">10.51</td>
<td class="gt_row gt_right">0.60</td>
<td class="gt_row gt_right">11.12</td>
<td class="gt_row gt_right">2361.35</td>
<td class="gt_row gt_right">0.94</td></tr>
    <tr><td class="gt_row gt_center">1_3</td>
<td class="gt_row gt_right">2</td>
<td class="gt_row gt_left">PROPHET</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">2126.56</td>
<td class="gt_row gt_right">13.15</td>
<td class="gt_row gt_right">0.83</td>
<td class="gt_row gt_right">13.91</td>
<td class="gt_row gt_right">3806.99</td>
<td class="gt_row gt_right">0.82</td></tr>
    <tr><td class="gt_row gt_center">1_8</td>
<td class="gt_row gt_right">1</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">3573.49</td>
<td class="gt_row gt_right">9.31</td>
<td class="gt_row gt_right">1.52</td>
<td class="gt_row gt_right">9.87</td>
<td class="gt_row gt_right">4026.58</td>
<td class="gt_row gt_right">0.13</td></tr>
    <tr><td class="gt_row gt_center">1_8</td>
<td class="gt_row gt_right">2</td>
<td class="gt_row gt_left">PROPHET</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">3068.24</td>
<td class="gt_row gt_right">8.00</td>
<td class="gt_row gt_right">1.31</td>
<td class="gt_row gt_right">8.38</td>
<td class="gt_row gt_right">3639.60</td>
<td class="gt_row gt_right">0.00</td></tr>
    <tr><td class="gt_row gt_center">1_13</td>
<td class="gt_row gt_right">1</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">2626.57</td>
<td class="gt_row gt_right">6.53</td>
<td class="gt_row gt_right">0.97</td>
<td class="gt_row gt_right">6.78</td>
<td class="gt_row gt_right">3079.24</td>
<td class="gt_row gt_right">0.43</td></tr>
    <tr><td class="gt_row gt_center">1_13</td>
<td class="gt_row gt_right">2</td>
<td class="gt_row gt_left">PROPHET</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">3367.92</td>
<td class="gt_row gt_right">8.26</td>
<td class="gt_row gt_right">1.24</td>
<td class="gt_row gt_right">8.73</td>
<td class="gt_row gt_right">4006.58</td>
<td class="gt_row gt_right">0.11</td></tr>
    <tr><td class="gt_row gt_center">1_38</td>
<td class="gt_row gt_right">1</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">7865.35</td>
<td class="gt_row gt_right">9.62</td>
<td class="gt_row gt_right">0.67</td>
<td class="gt_row gt_right">10.14</td>
<td class="gt_row gt_right">10496.79</td>
<td class="gt_row gt_right">0.24</td></tr>
    <tr><td class="gt_row gt_center">1_38</td>
<td class="gt_row gt_right">2</td>
<td class="gt_row gt_left">PROPHET</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">16120.88</td>
<td class="gt_row gt_right">19.73</td>
<td class="gt_row gt_right">1.38</td>
<td class="gt_row gt_right">22.49</td>
<td class="gt_row gt_right">18856.72</td>
<td class="gt_row gt_right">0.05</td></tr>
    <tr><td class="gt_row gt_center">1_93</td>
<td class="gt_row gt_right">1</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">6838.18</td>
<td class="gt_row gt_right">8.49</td>
<td class="gt_row gt_right">0.69</td>
<td class="gt_row gt_right">9.05</td>
<td class="gt_row gt_right">8860.59</td>
<td class="gt_row gt_right">0.48</td></tr>
    <tr><td class="gt_row gt_center">1_93</td>
<td class="gt_row gt_right">2</td>
<td class="gt_row gt_left">PROPHET</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">7304.08</td>
<td class="gt_row gt_right">10.00</td>
<td class="gt_row gt_right">0.74</td>
<td class="gt_row gt_right">9.57</td>
<td class="gt_row gt_right">9024.07</td>
<td class="gt_row gt_right">0.03</td></tr>
    <tr><td class="gt_row gt_center">1_95</td>
<td class="gt_row gt_right">1</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">5678.51</td>
<td class="gt_row gt_right">4.59</td>
<td class="gt_row gt_right">0.68</td>
<td class="gt_row gt_right">4.72</td>
<td class="gt_row gt_right">7821.85</td>
<td class="gt_row gt_right">0.57</td></tr>
    <tr><td class="gt_row gt_center">1_95</td>
<td class="gt_row gt_right">2</td>
<td class="gt_row gt_left">PROPHET</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">5856.69</td>
<td class="gt_row gt_right">4.87</td>
<td class="gt_row gt_right">0.71</td>
<td class="gt_row gt_right">4.81</td>
<td class="gt_row gt_right">7540.48</td>
<td class="gt_row gt_right">0.49</td></tr>
  </tbody>
  
  
</table>
</div><!--/html_preserve-->

### Test Forecast

Next, we can examine the test forecast for each of the models. 

- We can use `extract_nested_test_forecast()` to extract the logged forecast and visualize how each did. 

- We `group_by(id)` then pipe (`%>%`) into `plot_modeltime_forecast()` to make the visualization (great for reports and shiny apps!)


{% highlight r %}
nested_modeltime_tbl %>%
  extract_nested_test_forecast() %>%
  group_by(id) %>%
  plot_modeltime_forecast(.facet_ncol = 2, .interactive = F)
{% endhighlight %}

![plot of chunk unnamed-chunk-12](/figure/source/2021-10-20-forecasting-with-spark/unnamed-chunk-12-1.png)

## More we didn't cover

There's a lot more we didn't cover. We actually didn't: 

1. __Select__ the best models for each of the 7 time series
2. __Improve__ performance with ensembles
3. __Forecast__ the future

I'll cover these and much more in the [__Free Live Training on Forecasting with Spark__](https://bit.ly/spark_ts). 

Make sure to sign up and you'll __get 3 immediately actionable tips__ and a full code tutorial that goes well beyond this introduction. 

Plus you'll get exclusive offers on our courses and get to ask me (Matt, the creator of Modeltime) questions!

## Close Clusters and Shutdown Spark

We can close the Spark adapter and shut down the Spark session when we are finished. 


{% highlight r %}
# Unregisters the Spark Backend
parallel_stop()

# Disconnects Spark
spark_disconnect_all()
{% endhighlight %}



{% highlight text %}
## [1] 1
{% endhighlight %}

 

# Summary

We've now successfully completed an __Forecast with Spark.__ You may find this challenging, especially if you are not familiar with the Modeltime Workflow, terminology, or tidymodeling in R. If this is the case, we have a solution. __Take our high-performance forecasting course.__ 


# Take the High-Performance Forecasting Course

> Become the forecasting expert for your organization

<a href="https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting/" target="_blank"><img src="https://www.filepicker.io/api/file/bKyqVAi5Qi64sS05QYLk" alt="High-Performance Time Series Forecasting Course" width="100%" style="box-shadow: 0 0 5px 2px rgba(0, 0, 0, .5);"/></a>

[_High-Performance Time Series Course_](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting/)

### Time Series is Changing

Time series is changing. __Businesses now need 10,000+ time series forecasts every day.__ This is what I call a _High-Performance Time Series Forecasting System (HPTSF)_ - Accurate, Robust, and Scalable Forecasting. 

 __High-Performance Forecasting Systems will save companies by improving accuracy and scalability.__ Imagine what will happen to your career if you can provide your organization a "High-Performance Time Series Forecasting System" (HPTSF System).

### How to Learn High-Performance Time Series Forecasting

I teach how to build a HPTFS System in my [__High-Performance Time Series Forecasting Course__](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting). You will learn:

- __Time Series Machine Learning__ (cutting-edge) with `Modeltime` - 30+ Models (Prophet, ARIMA, XGBoost, Random Forest, & many more)
- __Deep Learning__ with `GluonTS` (Competition Winners)
- __Time Series Preprocessing__, Noise Reduction, & Anomaly Detection
- __Feature engineering__ using lagged variables & external regressors
- __Hyperparameter Tuning__
- __Time series cross-validation__
- __Ensembling__ Multiple Machine Learning & Univariate Modeling Techniques (Competition Winner)
- __Scalable Forecasting__ - Forecast 1000+ time series in parallel
- and more.

<p class="text-center" style="font-size:24px;">
Become the Time Series Expert for your organization.
</p>
<br>
<p class="text-center" style="font-size:30px;">
<a href="https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting">Take the High-Performance Time Series Forecasting Course</a>
</p>

