---
layout: post
title: "Introducing Iterative (Nested) Forecasting with Modeltime"
date:   2021-08-26 06:01:01
excerpt: "I'm super excited to introduce the experimental feature for performing iterative forecasting."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-Timeseries, Learn-Machine-Learning, R, modeltime, iterative forecasting]
image: /assets/2021-08-26-modeltime-nested/modeltime-nested.jpg
image_preview: /assets/2021-08-26-modeltime-nested/modeltime-nested.jpg
---




> Iteratively forecast with __tidyverse nested modeling__

__Why is nested forecasting important?__ For starters, the ability to _iteratively forecast_ time series with many models that are trained on many individual groups has been a huge request from students in our [Time Series Course](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting/). 

<div class="pull-right" style="width:40%; margin-left:20px; margin-bottom:20px;">
  <a href="#" target="_blank">
  <img class="img-responsive" style="border:none !important;" src="/assets/2021-08-26-modeltime-nested/modeltime-nested.jpg">
  </a>
</div>

Two methods exist for forecasting many time series that get results: 

1. __Global Modeling:__ Best for scalability using a Global Models and Panel Data structure. See [Forecasting with Global Models](https://business-science.github.io/modeltime/articles/modeling-panel-data.html). 

2. __Iterative Forecasting:__ Best for accuracy using a Nested Data Structure. Takes longer than global model (more resources due to for-loop iteration), but can yield great results. (Discussed Here) 

We've incorporated a new approach called ___"Nested Forecasting"___ to help perform _Iterative Forecasting_ inside of a __tidyverse nested data structure.__ You'll scalably create 7 `prophet` and 7 `xgboost` models.

If you like what you see, I have an [Advanced Time Series Course](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting) where you will learn the foundations of the growing Modeltime Ecosystem.

<!-- CTA 
Before we move on, what if I want to __learn more__ in-depth forecasting training with Modeltime? 👇

# Free Forecasting Training!

I can't possibly go over all of the __NEW `modeltime` Nested Forecasting features__ in this tutorial. If you would like to learn more about __Nested Forecasting__, I'm hosting a [__FREE live webinar__](https://bit.ly/nested-forecasting) on on Thursday, September 9th at 2PM EST. I'll cover: 

- __Nested Forecasting__ using a Real-World Example
- __NEW High-Performance Algorithms__ (thief, smooth) designed for Nested Forecasting
- __NEW Parallel Processing__ to speed up Nested Forecasting
- And, a lot of `</code>` 

<p style="font-size:36px;text-align:center;">
<a href="https://bit.ly/nested-forecasting" target="_blank">👉 Register Here.</a>
</p>
<!-- END CTA -->



# Before we get started, install `modeltime`

__The new nested forecasting__ is only available in the development version of `modeltime`. We will be releasing to CRAN soon. 

For now, you can install with:

{% highlight r %}
remotes::install_github("business-science/modeltime", dependencies = TRUE)
{% endhighlight %}

# What is Modeltime? <br><small>A <strong>growing</strong> ecosystem for tidymodels forecasting</small>

<div class="pull-right" style="width:60%; margin-left:20px; margin-bottom:20px;">
  <a href="#" target="_blank">
  <img class="img-responsive" style="border:none !important;" src="/assets/2021-03-15-modeltime-h2o/modeltime_ecosystem.jpg">
  </a>
</div>

Modeltime is part of a __growing ecosystem__ of forecasting packages. Modeltime integrates `tidymodels` for forecasting at scale. The ecosystem contains: 

- [Modeltime (Machine Learning, Forecasting Workflow)](https://business-science.github.io/modeltime/)

- [Modeltime H2O (AutoML)](https://business-science.github.io/modeltime.h2o/)

- [Modeltime GluonTS (Deep Learning)](https://business-science.github.io/modeltime.gluonts/)

- [Modeltime Ensemble (Blending Forecasts)](https://business-science.github.io/modeltime.ensemble/)

- [Modeltime Resample (Backtesting)](https://business-science.github.io/modeltime.resample/)

- [Timetk (Data Transformation, Feature Engineering, Time Series Visualization)](https://business-science.github.io/timetk/)

And several new community-contributed `modeltime` extension packages have emerged including: [boostime](https://github.com/AlbertoAlmuinha/boostime), [bayesmodels](https://albertoalmuinha.github.io/bayesmodels/), [garchmodels](https://albertoalmuinha.github.io/garchmodels/), and [sknifedatar](https://rafzamb.github.io/sknifedatar/)

# What is Nested Forecasting?

__Nested forecasting is a new feature__ in `modeltime`. The core idea of nested forecasting is to convert a dataset containing __many time series groups__ into a nested data set, then fit __many models__ to each of the nested data sets. The result is an iterative forecasting process that generates Nested Modeltime Tables with all of the forecast attributes needed to make decisions. 


![Nested Forecasting](/assets/2021-08-26-modeltime-nested/modeltime-nested.jpg)



## Important Concepts: Logging & Attributes

A new feature to nested forecasting workflow is __logged attributes__, which is very useful in complex workflows where loops (iteration) is performed. In a _Nested Modeltime Table_, we push as many operations as possible into the fitting and refitting stages, logging important aspects including:

- __Test Accuracy:__ `extract_nested_test_accuracy()`
- __Test Forecast:__ `extract_nested_test_forecast()`
- __Error Reports:__ `extract_nested_error_report()`
- __Best Models:__ `extract_nested_best_model_report()`
- __Future Forecasts:__ `extract_nested_future_forecast()`

While this deviates from the traditional Modeltime Workflow, we find that __logging vastly speeds up experimentation and information retrieval__ especially when the number of time series increases. 


![Logging Attributes](/assets/2021-08-26-modeltime-nested/nested-logs.jpg)




## Getting Started

We'll go through a short tutorial on __Nested Forecasting.__ The first thing to do is to load the following libraries:


{% highlight r %}
library(tidymodels)
library(modeltime)
library(tidyverse)
library(timetk)
{% endhighlight %}

### Dataset

Next, let's use the `walmart_sales_weekly` dataset that comes with `timetk`. 


{% highlight r %}
data_tbl <- walmart_sales_weekly %>%
    select(id, Date, Weekly_Sales) %>%
    set_names(c("id", "date", "value"))

data_tbl
{% endhighlight %}



{% highlight text %}
## # A tibble: 1,001 × 3
##    id    date        value
##    <fct> <date>      <dbl>
##  1 1_1   2010-02-05 24924.
##  2 1_1   2010-02-12 46039.
##  3 1_1   2010-02-19 41596.
##  4 1_1   2010-02-26 19404.
##  5 1_1   2010-03-05 21828.
##  6 1_1   2010-03-12 21043.
##  7 1_1   2010-03-19 22137.
##  8 1_1   2010-03-26 26229.
##  9 1_1   2010-04-02 57258.
## 10 1_1   2010-04-09 42961.
## # … with 991 more rows
{% endhighlight %}

The problem with this dataset is that it's set up for panel data modeling. 

The important columns are:

- __"id":__ This separates the time series groups (in this case these represent sales from departments in a walmart store)

- __"date":__ This is the weekly sales period

- __"value":__ This is the value for sales during the week and store/department

__We can visualize__ the sales data by time series group (department ID) to expose the differences in sales by department. 


{% highlight r %}
data_tbl %>%
  group_by(id) %>%
  plot_time_series(
    date, value, .interactive = F, .facet_ncol = 2
  )
{% endhighlight %}

![plot of chunk unnamed-chunk-5](/figure/source/2021-08-26-modeltime-iterative-forecasting/unnamed-chunk-5-1.png)

We can clearly see that there are 7 time series groups (store departments) with different weekly sales patterns. 

### Nested Forecasting Preparation

There are two key components that we need to prepare for:

1. __Nested Data Structure:__ Most critical to ensure your data is prepared (covered next)

2. __Nested Modeltime Workflow:__ This stage is where we create many models, fit the models to the data, and generate forecasts at scale

Conceptually, the workflow looks like this where we combine nested data and tidymodels workflows using an upcoming function, `modeltime_nested_fit()`. 


![Core Functions of Nested Forecasting](/assets/2021-08-26-modeltime-nested/modeltime_nested_fit.jpg)


## Data Preparation (Nesting)

__The most critical stage in "Nested Forecasting" is data preparation__, making sure that the input to the nested forecasting workflow is in the appropriate structure. We've included several functions to help that involve a bit of forethought that can be broken into 3 steps:

1. __Extending each of the times series:__ How far into the future do you need to predict for each time series? See `extend_timeseries()`.

2. __Nesting by the grouping variable:__ This is where you create the nested structure. You'll identify the ID column that separates each time series, and the number of timestamps to include in the ".future_data" and optionally ".actual_data". Typically, you'll select the same `.length_future` as your extension from the previous step. See `nest_timeseries()`.

3. __Train/Test Set Splitting:__ Finally, you'll take your `.actual_data` and convert into train/test splits that can be used for accuracy and confidence interval estimation. See `split_nested_timeseries()`.

Here are the 3-steps in action:


{% highlight r %}
nested_data_tbl <- data_tbl %>%
    
    # 1. Extending: We'll predict 52 weeks into the future.
    extend_timeseries(
        .id_var        = id,
        .date_var      = date,
        .length_future = 52
    ) %>%
    
    # 2. Nesting: We'll group by id, and create a future dataset
    #    that forecasts 52 weeks of extended data and
    #    an actual dataset that contains 104 weeks (2-years of data)
    nest_timeseries(
        .id_var        = id,
        .length_future = 52,
        .length_actual = 52*2
    ) %>%
    
   # 3. Splitting: We'll take the actual data and create splits
   #    for accuracy and confidence interval estimation of 52 weeks (test)
   #    and the rest is training data
    split_nested_timeseries(
        .length_test = 52
    )

nested_data_tbl
{% endhighlight %}



{% highlight text %}
## # A tibble: 7 × 4
##   id    .actual_data       .future_data      .splits        
##   <fct> <list>             <list>            <list>         
## 1 1_1   <tibble [104 × 2]> <tibble [52 × 2]> <split [52/52]>
## 2 1_3   <tibble [104 × 2]> <tibble [52 × 2]> <split [52/52]>
## 3 1_8   <tibble [104 × 2]> <tibble [52 × 2]> <split [52/52]>
## 4 1_13  <tibble [104 × 2]> <tibble [52 × 2]> <split [52/52]>
## 5 1_38  <tibble [104 × 2]> <tibble [52 × 2]> <split [52/52]>
## 6 1_93  <tibble [104 × 2]> <tibble [52 × 2]> <split [52/52]>
## 7 1_95  <tibble [104 × 2]> <tibble [52 × 2]> <split [52/52]>
{% endhighlight %}

This creates a nested tibble with ".actual_data", ".future_data", and ".splits". Each column will help in the nested modeltime workflow. 

## Nested Modeltime Workflow


Next, we move into the __Nested Modeltime Workflow__ now that nested data has been created. The Nested Modeltime Workflow includes 3 core functions:

1. __Modeling Fitting:__ This is the training stage where we fit to _training data_. The _test forecast_ is generated from this step. See `modeltime_nested_fit()`.

2. __Model Evaluation and Selection:__ This is where we review model performance and select the best model by minimizing or maximizing an error metric. See `modeltime_nested_select_best()`.

3. __Model Refitting:__ This is the final fitting stage where we fit to _actual data_. The _future forecast_ is generated from this step. See `modeltime_nested_refit()`.

![Core Functions of Nested Forecasting](/assets/2021-08-26-modeltime-nested/nested-core-functions.jpg)


### Step 1: Create Tidymodels Workflows

First, we create `tidymodels` workflows for the various models that you intend to create.

#### Prophet

A common modeling method is prophet, that can be created using `prophet_reg()`. We’ll create a workflow. Note that we use the `extract_nested_train_split(nested_data_tbl)` to help us build preprocessing features.


{% highlight r %}
rec_prophet <- recipe(value ~ date,  extract_nested_train_split(nested_data_tbl)) 

wflw_prophet <- workflow() %>%
    add_model(
      prophet_reg("regression", seasonality_yearly = TRUE) %>% 
        set_engine("prophet")
    ) %>%
    add_recipe(rec_prophet)
{% endhighlight %}


#### XGBoost

Next, we can use a machine learning method that can get good results: XGBoost. We will add a few extra features in the recipe feature engineering step to generate features that tend to get better modeling results. Note that we use the `extract_nested_train_split(nested_data_tbl)` to help us build preprocessing features.


{% highlight r %}
rec_xgb <- recipe(value ~ .,  extract_nested_train_split(nested_data_tbl)) %>%
    step_timeseries_signature(date) %>%
    step_rm(date) %>%
    step_zv(all_predictors()) %>%
    step_dummy(all_nominal_predictors(), one_hot = TRUE)

wflw_xgb <- workflow() %>%
    add_model(boost_tree("regression") %>% set_engine("xgboost")) %>%
    add_recipe(rec_xgb)
{% endhighlight %}


### Step 2: Nested Modeltime Tables

With a couple of modeling workflows in hand, we are now ready to test them on each of the time series. We start by using the `modeltime_nested_fit()` function, which iteratively fits each model to each of the nested time series train/test ".splits" column. 


{% highlight r %}
nested_modeltime_tbl <- modeltime_nested_fit(
  # Nested data 
  nested_data = nested_data_tbl,
  
  # Add workflows
  wflw_prophet,
  wflw_xgb
)

nested_modeltime_tbl
{% endhighlight %}



{% highlight text %}
## # Nested Modeltime Table
## # Trained on: .splits | Model Errors: [0]
## # A tibble: 7 × 5
##   id    .actual_data       .future_data     .splits        .modeltime_tables    
##   <fct> <list>             <list>           <list>         <list>               
## 1 1_1   <tibble [104 × 2]> <tibble [52 × 2… <split [52/52… <mdl_time_tbl [2 × 5…
## 2 1_3   <tibble [104 × 2]> <tibble [52 × 2… <split [52/52… <mdl_time_tbl [2 × 5…
## 3 1_8   <tibble [104 × 2]> <tibble [52 × 2… <split [52/52… <mdl_time_tbl [2 × 5…
## 4 1_13  <tibble [104 × 2]> <tibble [52 × 2… <split [52/52… <mdl_time_tbl [2 × 5…
## 5 1_38  <tibble [104 × 2]> <tibble [52 × 2… <split [52/52… <mdl_time_tbl [2 × 5…
## 6 1_93  <tibble [104 × 2]> <tibble [52 × 2… <split [52/52… <mdl_time_tbl [2 × 5…
## 7 1_95  <tibble [104 × 2]> <tibble [52 × 2… <split [52/52… <mdl_time_tbl [2 × 5…
{% endhighlight %}

This adds a new column with `.modeltime_tables` for each of the data sets and has created several __logged attributes__ that are part of the "Nested Modeltime Table". We also can see that the models were trained on ".splits" and none of the models had any errors. 

### Step 3: Logged Attributes

During the forecasting, the iterative modeltime fitting process logs important information that enable us to evaluate the models. These logged attributes are accessable with "extract" functions. 

#### Extract Nested Test Accuracy

Using the `extract_nested_test_accuracy()`, we can get the accuracy measures by time series and model. This allows us to see which model performs best on which time series. 


{% highlight r %}
nested_modeltime_tbl %>% 
  extract_nested_test_accuracy() %>%
  table_modeltime_accuracy(.interactive = F)
{% endhighlight %}

<!--html_preserve--><div id="hntciiongg" style="overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', 'Fira Sans', 'Droid Sans', Arial, sans-serif;
}

#hntciiongg .gt_table {
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

#hntciiongg .gt_heading {
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

#hntciiongg .gt_title {
  color: #333333;
  font-size: 125%;
  font-weight: initial;
  padding-top: 4px;
  padding-bottom: 4px;
  border-bottom-color: #FFFFFF;
  border-bottom-width: 0;
}

#hntciiongg .gt_subtitle {
  color: #333333;
  font-size: 85%;
  font-weight: initial;
  padding-top: 0;
  padding-bottom: 4px;
  border-top-color: #FFFFFF;
  border-top-width: 0;
}

#hntciiongg .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}

#hntciiongg .gt_col_headings {
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

#hntciiongg .gt_col_heading {
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

#hntciiongg .gt_column_spanner_outer {
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

#hntciiongg .gt_column_spanner_outer:first-child {
  padding-left: 0;
}

#hntciiongg .gt_column_spanner_outer:last-child {
  padding-right: 0;
}

#hntciiongg .gt_column_spanner {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
  vertical-align: bottom;
  padding-top: 5px;
  padding-bottom: 6px;
  overflow-x: hidden;
  display: inline-block;
  width: 100%;
}

#hntciiongg .gt_group_heading {
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

#hntciiongg .gt_empty_group_heading {
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

#hntciiongg .gt_from_md > :first-child {
  margin-top: 0;
}

#hntciiongg .gt_from_md > :last-child {
  margin-bottom: 0;
}

#hntciiongg .gt_row {
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

#hntciiongg .gt_stub {
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

#hntciiongg .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

#hntciiongg .gt_first_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
}

#hntciiongg .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

#hntciiongg .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}

#hntciiongg .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}

#hntciiongg .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}

#hntciiongg .gt_footnotes {
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

#hntciiongg .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding: 4px;
}

#hntciiongg .gt_sourcenotes {
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

#hntciiongg .gt_sourcenote {
  font-size: 90%;
  padding: 4px;
}

#hntciiongg .gt_left {
  text-align: left;
}

#hntciiongg .gt_center {
  text-align: center;
}

#hntciiongg .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}

#hntciiongg .gt_font_normal {
  font-weight: normal;
}

#hntciiongg .gt_font_bold {
  font-weight: bold;
}

#hntciiongg .gt_font_italic {
  font-style: italic;
}

#hntciiongg .gt_super {
  font-size: 65%;
}

#hntciiongg .gt_footnote_marks {
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
<td class="gt_row gt_left">PROPHET</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">10071.47</td>
<td class="gt_row gt_right">45.88</td>
<td class="gt_row gt_right">1.99</td>
<td class="gt_row gt_right">59.97</td>
<td class="gt_row gt_right">11776.87</td>
<td class="gt_row gt_right">0.38</td></tr>
    <tr><td class="gt_row gt_center">1_1</td>
<td class="gt_row gt_right">2</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">6236.79</td>
<td class="gt_row gt_right">25.31</td>
<td class="gt_row gt_right">1.23</td>
<td class="gt_row gt_right">24.57</td>
<td class="gt_row gt_right">9017.22</td>
<td class="gt_row gt_right">0.19</td></tr>
    <tr><td class="gt_row gt_center">1_3</td>
<td class="gt_row gt_right">1</td>
<td class="gt_row gt_left">PROPHET</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">3539.80</td>
<td class="gt_row gt_right">29.87</td>
<td class="gt_row gt_right">1.37</td>
<td class="gt_row gt_right">25.46</td>
<td class="gt_row gt_right">4707.77</td>
<td class="gt_row gt_right">0.80</td></tr>
    <tr><td class="gt_row gt_center">1_3</td>
<td class="gt_row gt_right">2</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">3085.78</td>
<td class="gt_row gt_right">18.81</td>
<td class="gt_row gt_right">1.20</td>
<td class="gt_row gt_right">20.40</td>
<td class="gt_row gt_right">5085.81</td>
<td class="gt_row gt_right">0.79</td></tr>
    <tr><td class="gt_row gt_center">1_8</td>
<td class="gt_row gt_right">1</td>
<td class="gt_row gt_left">PROPHET</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">4282.96</td>
<td class="gt_row gt_right">11.15</td>
<td class="gt_row gt_right">1.82</td>
<td class="gt_row gt_right">11.96</td>
<td class="gt_row gt_right">4845.08</td>
<td class="gt_row gt_right">0.00</td></tr>
    <tr><td class="gt_row gt_center">1_8</td>
<td class="gt_row gt_right">2</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">3585.77</td>
<td class="gt_row gt_right">9.33</td>
<td class="gt_row gt_right">1.53</td>
<td class="gt_row gt_right">9.89</td>
<td class="gt_row gt_right">4009.47</td>
<td class="gt_row gt_right">0.30</td></tr>
    <tr><td class="gt_row gt_center">1_13</td>
<td class="gt_row gt_right">1</td>
<td class="gt_row gt_left">PROPHET</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">6861.13</td>
<td class="gt_row gt_right">17.02</td>
<td class="gt_row gt_right">2.53</td>
<td class="gt_row gt_right">18.78</td>
<td class="gt_row gt_right">7309.61</td>
<td class="gt_row gt_right">0.15</td></tr>
    <tr><td class="gt_row gt_center">1_13</td>
<td class="gt_row gt_right">2</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">2338.42</td>
<td class="gt_row gt_right">5.83</td>
<td class="gt_row gt_right">0.86</td>
<td class="gt_row gt_right">6.02</td>
<td class="gt_row gt_right">2721.47</td>
<td class="gt_row gt_right">0.54</td></tr>
    <tr><td class="gt_row gt_center">1_38</td>
<td class="gt_row gt_right">1</td>
<td class="gt_row gt_left">PROPHET</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">26007.21</td>
<td class="gt_row gt_right">32.57</td>
<td class="gt_row gt_right">2.22</td>
<td class="gt_row gt_right">39.60</td>
<td class="gt_row gt_right">27938.83</td>
<td class="gt_row gt_right">0.08</td></tr>
    <tr><td class="gt_row gt_center">1_38</td>
<td class="gt_row gt_right">2</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">6847.04</td>
<td class="gt_row gt_right">8.47</td>
<td class="gt_row gt_right">0.58</td>
<td class="gt_row gt_right">8.75</td>
<td class="gt_row gt_right">8825.28</td>
<td class="gt_row gt_right">0.40</td></tr>
    <tr><td class="gt_row gt_center">1_93</td>
<td class="gt_row gt_right">1</td>
<td class="gt_row gt_left">PROPHET</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">17165.30</td>
<td class="gt_row gt_right">21.37</td>
<td class="gt_row gt_right">1.73</td>
<td class="gt_row gt_right">24.46</td>
<td class="gt_row gt_right">19123.17</td>
<td class="gt_row gt_right">0.03</td></tr>
    <tr><td class="gt_row gt_center">1_93</td>
<td class="gt_row gt_right">2</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">7233.95</td>
<td class="gt_row gt_right">9.11</td>
<td class="gt_row gt_right">0.73</td>
<td class="gt_row gt_right">9.66</td>
<td class="gt_row gt_right">8879.21</td>
<td class="gt_row gt_right">0.49</td></tr>
    <tr><td class="gt_row gt_center">1_95</td>
<td class="gt_row gt_right">1</td>
<td class="gt_row gt_left">PROPHET</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">22836.06</td>
<td class="gt_row gt_right">18.30</td>
<td class="gt_row gt_right">2.75</td>
<td class="gt_row gt_right">20.37</td>
<td class="gt_row gt_right">24094.49</td>
<td class="gt_row gt_right">0.48</td></tr>
    <tr><td class="gt_row gt_center">1_95</td>
<td class="gt_row gt_right">2</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">10783.75</td>
<td class="gt_row gt_right">8.54</td>
<td class="gt_row gt_right">1.30</td>
<td class="gt_row gt_right">8.96</td>
<td class="gt_row gt_right">12843.50</td>
<td class="gt_row gt_right">0.14</td></tr>
  </tbody>
  
  
</table>
</div><!--/html_preserve-->

#### Extract Nested Test Forecast

Next, we can visualize the test forecast with `extract_nested_test_forecast()`.


{% highlight r %}
nested_modeltime_tbl %>% 
  extract_nested_test_forecast() %>%
  group_by(id) %>%
  plot_modeltime_forecast(
    .facet_ncol  = 2,
    .interactive = FALSE
  )
{% endhighlight %}

![plot of chunk unnamed-chunk-11](/figure/source/2021-08-26-modeltime-iterative-forecasting/unnamed-chunk-11-1.png)

#### Extract Nested Error Logs

If any of the models have errors, then we can investigate the error logs with `extract_nested_error_report()`. Fortunately, we don't have any errors, but if we did we could investigate further. 


{% highlight r %}
nested_modeltime_tbl %>% 
  extract_nested_error_report()
{% endhighlight %}



{% highlight text %}
## # A tibble: 0 × 4
## # … with 4 variables: id <fct>, .model_id <int>, .model_desc <chr>,
## #   .error_desc <chr>
{% endhighlight %}

### Step 4: Select the Best

Using the accuracy data, we can pick a metric and select the best model based on that metric. The available metrics are in the `default_forecast_accuracy_metric_set()`. Make sure to select `minimize` based on the metric. The `filter_test_forecasts` parameter tells the function to filter the logged test forecasts to just the best. 


{% highlight r %}
best_nested_modeltime_tbl <- nested_modeltime_tbl %>%
            modeltime_nested_select_best(
              metric                = "rmse", 
              minimize              = TRUE, 
              filter_test_forecasts = TRUE
            )
{% endhighlight %}

This identifies which models should be used for the final forecast. With the models selected, we can make the future forecast. 

#### Extract Nested Best Model Report

The best model selections can be accessed with `extract_nested_best_model_report()`.


{% highlight r %}
best_nested_modeltime_tbl %>%
  extract_nested_best_model_report()
{% endhighlight %}



{% highlight text %}
## # Nested Modeltime Table
##   # A tibble: 7 × 10
##   id    .model_id .model_desc .type    mae  mape  mase smape   rmse   rsq
##   <fct>     <int> <chr>       <chr>  <dbl> <dbl> <dbl> <dbl>  <dbl> <dbl>
## 1 1_1           2 XGBOOST     Test   6237. 25.3  1.23  24.6   9017. 0.191
## 2 1_3           1 PROPHET     Test   3540. 29.9  1.37  25.5   4708. 0.796
## 3 1_8           2 XGBOOST     Test   3586.  9.33 1.53   9.89  4009. 0.297
## 4 1_13          2 XGBOOST     Test   2338.  5.83 0.861  6.02  2721. 0.536
## 5 1_38          2 XGBOOST     Test   6847.  8.47 0.585  8.75  8825. 0.402
## 6 1_93          2 XGBOOST     Test   7234.  9.11 0.728  9.66  8879. 0.488
## 7 1_95          2 XGBOOST     Test  10784.  8.54 1.30   8.96 12843. 0.139
{% endhighlight %}


#### Extract Nested Best Test Forecasts

Once we've selected the best models, we can easily visualize the best forecasts by time series. Note that the nested test forecast logs have been modified to isolate the best models. 


{% highlight r %}
best_nested_modeltime_tbl %>%
  extract_nested_test_forecast() %>%
  group_by(id) %>%
  plot_modeltime_forecast(
    .facet_ncol  = 2,
    .interactive = FALSE
  )
{% endhighlight %}

![plot of chunk unnamed-chunk-15](/figure/source/2021-08-26-modeltime-iterative-forecasting/unnamed-chunk-15-1.png)


### Step 5: Refitting and Future Forecast

With the best models in hand, we can make our future forecasts by refitting the models to the full dataset. 

- If the best models have been selected, the only the best models will be refit. 

- If best models have not been selected, then all models will be refit.

We've selected our best models, and will move forward with refitting and future forecast logging using the `modeltime_nested_refit()` function. 


{% highlight r %}
nested_modeltime_refit_tbl <- best_nested_modeltime_tbl %>%
    modeltime_nested_refit(
        control = control_nested_refit(verbose = TRUE)
    )

## ℹ [1/7] Starting Modeltime Table: ID 1_1...
## ✓ Model 2 Passed XGBOOST.
## ✓ [1/7] Finished Modeltime Table: ID 1_1

## ℹ [2/7] Starting Modeltime Table: ID 1_3...
## ✓ Model 1 Passed PROPHET.
## ✓ [2/7] Finished Modeltime Table: ID 1_3

## ℹ [3/7] Starting Modeltime Table: ID 1_8...
## ✓ Model 2 Passed XGBOOST.
## ✓ [3/7] Finished Modeltime Table: ID 1_8

## ℹ [4/7] Starting Modeltime Table: ID 1_13...
## ✓ Model 2 Passed XGBOOST.
## ✓ [4/7] Finished Modeltime Table: ID 1_13

## ℹ [5/7] Starting Modeltime Table: ID 1_38...
## ✓ Model 2 Passed XGBOOST.
## ✓ [5/7] Finished Modeltime Table: ID 1_38

## ℹ [6/7] Starting Modeltime Table: ID 1_93...
## ✓ Model 2 Passed XGBOOST.
## ✓ [6/7] Finished Modeltime Table: ID 1_93

## ℹ [7/7] Starting Modeltime Table: ID 1_95...
## ✓ Model 2 Passed XGBOOST.
## ✓ [7/7] Finished Modeltime Table: ID 1_95

## Finished in: 3.52616 secs.
{% endhighlight %}

Note that we used `control_nested_refit(verbose = TRUE)` to display the modeling results as each model is refit. This is not necessary, but can be useful to follow the nested model fitting process. 

We can see that the nested modeltime table appears the same, but has now been trained on `.actual_data`.  


{% highlight r %}
nested_modeltime_refit_tbl

## # Nested Modeltime Table
## # Trained on: .actual_data | Model Errors: [0]
## # A tibble: 7 × 5
##   id    .actual_data       .future_data     .splits        .modeltime_tables    
##   <fct> <list>             <list>           <list>         <list>               
## 1 1_1   <tibble [104 × 2]> <tibble [52 × 2… <split [52/52… <mdl_time_tbl [1 × 5…
## 2 1_3   <tibble [104 × 2]> <tibble [52 × 2… <split [52/52… <mdl_time_tbl [1 × 5…
## 3 1_8   <tibble [104 × 2]> <tibble [52 × 2… <split [52/52… <mdl_time_tbl [1 × 5…
## 4 1_13  <tibble [104 × 2]> <tibble [52 × 2… <split [52/52… <mdl_time_tbl [1 × 5…
## 5 1_38  <tibble [104 × 2]> <tibble [52 × 2… <split [52/52… <mdl_time_tbl [1 × 5…
## 6 1_93  <tibble [104 × 2]> <tibble [52 × 2… <split [52/52… <mdl_time_tbl [1 × 5…
## 7 1_95  <tibble [104 × 2]> <tibble [52 × 2… <split [52/52… <mdl_time_tbl [1 × 5…
{% endhighlight %}

#### Extract Nested Future Forecast

After the refitting process completes, we can now access the future forecast, which is logged.


{% highlight r %}
nested_modeltime_refit_tbl %>%
  extract_nested_future_forecast() %>%
  group_by(id) %>%
  plot_modeltime_forecast(
    .interactive = FALSE,
    .facet_ncol  = 2
  )
{% endhighlight %}

![plot of chunk unnamed-chunk-18](/figure/source/2021-08-26-modeltime-iterative-forecasting/unnamed-chunk-18-1.png)

## Summary

We've now successfully completed a __Nested Forecast.__ You may find this challenging, especially if you are not familiar with the Modeltime Workflow, terminology, or tidymodeling in R. If this is the case, we have a solution. Take our [high-performance time series forecasting course](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting/).  👇

# There's a lot to learn


__There's a lot more to learning time series:__ 

- Many more algorithms
- Feature Engineering for Time Series
- Ensembling
- Machine Learning
- Deep Learning
- Scalable Modeling: 10,000+ time series

Your probably thinking how am I ever going to learn time series forecasting. Here's the solution that will save you years of struggling. 

# It gets better<br><small>You've just scratched the surface, here's what's coming...</small>

The Modeltime Ecosystem functionality is much more feature-rich than what we've covered here (I couldn't possibly cover everything in this post). 😀

Here's what I didn't cover:

- __Feature Engineering:__ We can make this forecast much more accurate by including features from competition-winning strategies   

- __Ensemble Modeling:__ We can stack models together to make super-learners that stabilize predictions.

- __Deep Learning:__ We can use GluonTS Deep Learning for developing high-performance, scalable forecasts.

### So how are you ever going to <span style='color:#18bc9c'>learn time series analysis and forecasting?</span>

You're probably thinking:

- There's so much to learn
- My time is precious
- I'll never learn time series

I have good news that will put those doubts behind you. 

You can learn time series analysis and forecasting in hours with my [high-performance time series forecasting course](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting/). 👇

{% include course_promo_time_series.md %}

# Have questions about Modeltime?

Make a comment in the chat below. 👇

And, if you plan on using `modeltime` for your business, it's a no-brainer - [Join my Time Series Course](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting). 

