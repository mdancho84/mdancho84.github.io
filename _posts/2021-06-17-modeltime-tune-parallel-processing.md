---
layout: post
title: "Hyperparameter Tuning Forecasts in Parallel with Modeltime"
date:   2021-06-17 06:01:01
excerpt: "I'm super excited to introduce the new parallel processing functionality in modeltime. It's perfect for speeding up hyperparameter tuning of forecast models using parallel processing."
author: "Matt Dancho and Alberto González Almuiña"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-Timeseries, Learn-Machine-Learning, R, modeltime, parallel processing]
image: 2021-06-17-modeltime-parallel/modeltime_parallel.jpg
image_preview: 2021-06-17-modeltime-parallel/modeltime_parallel.jpg
---



> __Speed up__ forecasting with `modeltime`'s new built-in parallel processing.

Fitting many time series models can be an expensive process. To help speed up computation, `modeltime` now includes __parallel processing__, which is support for high-performance computing by spreading the model fitting steps across multiple CPUs or clusters. 

# Forecast Hyperparameter Tuning Tutorial <br><small>Speed up forecasting</small>

<p style="text-align:center">
<img src="/assets/2021-06-17-modeltime-parallel/modeltime_parallel.jpg" style="width:60%;">
</p>
<p class="date text-center">Speed up forecasting using multiple processors</p>


[In this tutorial](#), we go through a common __Hyperparameter Tuning__ workflow that shows off the `modeltime` parallel processing integration and support for `workflowsets` from the tidymodels ecosystem. Hyperparameter tuning is an expensive process that can benefit from parallelization. 

If you like what you see, I have an [Advanced Time Series Course](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting) where you will learn the foundations of the growing Modeltime Ecosystem.

{% include forecasting-software-articles.md %}

# What is Modeltime? <br><small>A <strong>growing</strong> ecosystem for tidymodels forecasting</small>

<div class="pull-right" style="width:60%; margin-left:20px; margin-bottom:20px;">
  <a href="#" target="_blank">
  <img class="img-responsive" style="border:none !important;" src="/assets/2021-03-15-modeltime-h2o/modeltime_ecosystem.jpg">
  </a>
</div>

Modeltime is a __growing__ ecosystem of forecasting packages used to develop scalable forecasting systems for your business. 

The Modeltime Ecosystem __extends__ `tidymodels`, which means any machine learning algorithm can now become a forecasting algorithm. 

The Modeltime Ecosystem __includes__:

- [Modeltime (Machine Learning, Forecasting Workflow)](https://business-science.github.io/modeltime/)

- [Modeltime H2O (Forecasting with AutoML)](https://business-science.github.io/modeltime.h2o/)

- [Modeltime GluonTS (Deep Learning)](https://business-science.github.io/modeltime.gluonts/)

- [Modeltime Ensemble (Blending Forecasts)](https://business-science.github.io/modeltime.ensemble/)

- [Modeltime Resample (Backtesting)](https://business-science.github.io/modeltime.resample/)

- [Timetk (Data Transformation, Feature Engineering, Time Series Visualization)](https://business-science.github.io/timetk/)



# Out-of-the-Box<br><small>Parallel Processing Functionality Included</small>

The newest feature of the `modeltime` package is __parallel processing functionality.__ Modeltime comes with:

- Use of `parallel_start()` and `parallel_stop()` to simplify the parallel processing setup.

- Use of `create_model_grid()` to help generate `parsnip` model specs from `dials` parameter grids.

- Use of `modeltime_fit_workflowset()` for initial fitting many models in parallel using `workflowsets` from the `tidymodels` ecosystem.

- Use of `modeltime_refit()` to refit models in parallel.

- Use of `control_fit_workflowset()` and `control_refit()` for controlling the fitting and refitting of many models.

# Download the Cheat Sheet

As you go through this tutorial, it may help to use the [Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html). Page 3 covers the _Modeltime Forecasting Ecosystem_ with links to key documentation. 

<a href="https://www.business-science.io/r-cheatsheet.html" target="_blank">
<img src="/assets/2021-03-15-modeltime-h2o/cheatsheet_forecasting.jpg" style="width:100%;">
</a>

<p class="date text-center"><a href="https://www.business-science.io/r-cheatsheet.html" target="_blank">Forecasting Ecosystem Links (Ultimate R Cheat Sheet)</a></p>


# How to Use Parallel Processing

Let's go through a common __Hyperparameter Tuning__ workflow that shows off the `modeltime` __parallel processing integration__ and support for `workflowsets` from the tidymodels ecosystem.



## Libraries 

Load the following libraries. Note that the new parallel processing functionality is available in Modeltime 0.6.1 (or greater).


{% highlight r %}
# Machine Learning
library(modeltime) # Requires version >= 0.6.1
library(tidymodels)
library(workflowsets)

# Core
library(tidyverse)
library(timetk)
{% endhighlight %}

## Setup Parallel Backend

I'll set up this tutorial to use two (2) cores. 

- To simplify creating clusters, `modeltime` includes `parallel_start()`. We can simply supply the number of cores we'd like to use. 
- To detect how many physical cores you have, you can run `parallel::detectCores(logical = FALSE)`. 


{% highlight r %}
parallel_start(2)
{% endhighlight %}

## Load Data

We'll use the `walmart_sales_weeekly` dataset from `timetk`. It has seven (7) time series that represent weekly sales demand by department. 


{% highlight r %}
dataset_tbl <- walmart_sales_weekly %>%
  select(id, Date, Weekly_Sales)

dataset_tbl %>% 
  group_by(id) %>%
  plot_time_series(
    .date_var    = Date, 
    .value       = Weekly_Sales, 
    .facet_ncol  = 2, 
    .interactive = FALSE
  )
{% endhighlight %}

![plot of chunk unnamed-chunk-3](/figure/source/2021-06-17-modeltime-tune-parallel-processing/unnamed-chunk-3-1.png)


## Train / Test Splits

Use `time_series_split()` to make a temporal split for all seven time series. 


{% highlight r %}
splits <- time_series_split(
  dataset_tbl, 
  assess     = "6 months", 
  cumulative = TRUE
)

splits %>% 
  tk_time_series_cv_plan() %>% 
  plot_time_series_cv_plan(Date, Weekly_Sales, .interactive = F)
{% endhighlight %}

![plot of chunk unnamed-chunk-4](/figure/source/2021-06-17-modeltime-tune-parallel-processing/unnamed-chunk-4-1.png)

## Recipe

Make a preprocessing recipe that generates time series features. 


{% highlight r %}
recipe_spec_1 <- recipe(Weekly_Sales ~ ., data = training(splits)) %>%
  step_timeseries_signature(Date) %>%
  step_rm(Date) %>%
  step_normalize(Date_index.num) %>%
  step_zv(all_predictors()) %>%
  step_dummy(all_nominal_predictors(), one_hot = TRUE)
{% endhighlight %}

## Model Specifications

We'll make 6 `xgboost` model specifications using `boost_tree()` and the "xgboost" engine. These will be combined with the `recipe` from the previous step using a `workflow_set()` in the next section. 

### The general idea

We can vary the `learn_rate` parameter to see it's effect on forecast error.  


{% highlight r %}
# XGBOOST MODELS
model_spec_xgb_1 <- boost_tree(learn_rate = 0.001) %>%
  set_engine("xgboost")

model_spec_xgb_2 <- boost_tree(learn_rate = 0.010) %>%
  set_engine("xgboost")

model_spec_xgb_3 <- boost_tree(learn_rate = 0.100) %>%
  set_engine("xgboost")

model_spec_xgb_4 <- boost_tree(learn_rate = 0.350) %>%
  set_engine("xgboost")

model_spec_xgb_5 <- boost_tree(learn_rate = 0.500) %>%
  set_engine("xgboost")

model_spec_xgb_6 <- boost_tree(learn_rate = 0.650) %>%
  set_engine("xgboost")
{% endhighlight %}

### A faster way

You may notice that this is a lot of repeated code to adjust the `learn_rate`. To simplify this process, we can use `create_model_grid()`.


{% highlight r %}
model_tbl <- tibble(
  learn_rate = c(0.001, 0.010, 0.100, 0.350, 0.500, 0.650)
) %>%
  create_model_grid(
    f_model_spec = boost_tree,
    engine_name  = "xgboost",
    mode         = "regression"
  )

model_tbl
{% endhighlight %}



{% highlight text %}
## # A tibble: 6 x 2
##   learn_rate .models  
##        <dbl> <list>   
## 1      0.001 <spec[+]>
## 2      0.01  <spec[+]>
## 3      0.1   <spec[+]>
## 4      0.35  <spec[+]>
## 5      0.5   <spec[+]>
## 6      0.65  <spec[+]>
{% endhighlight %}

### Extracting the model list

We can extract the model list for use with our `workflowset` next. This is the same result if we would have placed the manually generated 6 model specs into a `list()`.


{% highlight r %}
model_list <- model_tbl$.models

model_list
{% endhighlight %}



{% highlight text %}
## [[1]]
## Boosted Tree Model Specification (regression)
## 
## Main Arguments:
##   learn_rate = 0.001
## 
## Computational engine: xgboost 
## 
## 
## [[2]]
## Boosted Tree Model Specification (regression)
## 
## Main Arguments:
##   learn_rate = 0.01
## 
## Computational engine: xgboost 
## 
## 
## [[3]]
## Boosted Tree Model Specification (regression)
## 
## Main Arguments:
##   learn_rate = 0.1
## 
## Computational engine: xgboost 
## 
## 
## [[4]]
## Boosted Tree Model Specification (regression)
## 
## Main Arguments:
##   learn_rate = 0.35
## 
## Computational engine: xgboost 
## 
## 
## [[5]]
## Boosted Tree Model Specification (regression)
## 
## Main Arguments:
##   learn_rate = 0.5
## 
## Computational engine: xgboost 
## 
## 
## [[6]]
## Boosted Tree Model Specification (regression)
## 
## Main Arguments:
##   learn_rate = 0.65
## 
## Computational engine: xgboost
{% endhighlight %}



## Workflowsets

With the `workflow_set()` function, we can combine the 6 xgboost models with the 1 recipe to return six (6) combinations of recipe and model specifications. These are currently untrained (unfitted).


{% highlight r %}
model_wfset <- workflow_set(
  preproc = list(
    recipe_spec_1
  ),
  models = model_list, 
  cross = TRUE
)

model_wfset
{% endhighlight %}



{% highlight text %}
## # A workflow set/tibble: 6 x 4
##   wflow_id            info             option      result    
##   <chr>               <list>           <list>      <list>    
## 1 recipe_boost_tree_1 <tibble [1 × 4]> <wrkflw__ > <list [0]>
## 2 recipe_boost_tree_2 <tibble [1 × 4]> <wrkflw__ > <list [0]>
## 3 recipe_boost_tree_3 <tibble [1 × 4]> <wrkflw__ > <list [0]>
## 4 recipe_boost_tree_4 <tibble [1 × 4]> <wrkflw__ > <list [0]>
## 5 recipe_boost_tree_5 <tibble [1 × 4]> <wrkflw__ > <list [0]>
## 6 recipe_boost_tree_6 <tibble [1 × 4]> <wrkflw__ > <list [0]>
{% endhighlight %}
## Parallel Training (Fitting)

We can train each of the combinations in parallel. 

### Controlling the Fitting Proces

Each fitting function in `modeltime` has a "control" function:

 - `control_fit_workflowset()` for `modeltime_fit_workflowset()`
 - `control_refit()` for `modeltime_refit()`
 
The control functions help the user control the verbosity (adding remarks while training) and set up parallel processing. We can see the output when `verbose = TRUE` and `allow_par = TRUE`. 

- __allow_par:__ Whether or not the user has indicated that parallel processing should be used. 

    - If the user has set up parallel processing externally, the clusters will be reused.
  
    - If the user has not set up parallel processing, the fitting (training) process will set up parallel processing internally and shutdown. Note that this is more expensive, and usually costs around 10-15 seconds to set up. 

- __verbose:__ Will return important messages showing the progress of the fitting operation. 

- __cores:__ The cores that the user has set up. Since we've already set up `doParallel` to use 2 cores, the control recognizes this. 

- __packages:__ The packages are packages that will be sent to each of the workers. 


{% highlight r %}
control_fit_workflowset(
  verbose   = TRUE,
  allow_par = TRUE
)
{% endhighlight %}



{% highlight text %}
## workflowset control object
## --------------------------
## allow_par : TRUE 
## cores     : 2 
## verbose   : TRUE 
## packages  : modeltime parsnip dplyr stats lubridate tidymodels timetk forcats stringr readr tidyverse yardstick workflowsets workflows tune tidyr tibble rsample recipes purrr modeldata infer ggplot2 dials scales broom graphics grDevices utils datasets methods base
{% endhighlight %}

### Fitting Using Parallel Backend

We use the `modeltime_fit_workflowset()` and `control_fit_workflowset()` together to train the unfitted workflowset in parallel. 


{% highlight r %}
model_parallel_tbl <- model_wfset %>%
  modeltime_fit_workflowset(
    data    = training(splits),
    control = control_fit_workflowset(
      verbose   = TRUE,
      allow_par = TRUE
    )
  )
{% endhighlight %}



{% highlight text %}
## Using existing parallel backend with 2 clusters (cores)...
##  Beginning Parallel Loop | 0.006 seconds
##  Finishing parallel backend. Clusters are remaining open. | 12.458 seconds
##  Close clusters by running: `parallel_stop()`.
##  Total time | 12.459 seconds
{% endhighlight %}

This returns a modeltime table. 


{% highlight r %}
model_parallel_tbl
{% endhighlight %}



{% highlight text %}
## # Modeltime Table
## # A tibble: 6 x 3
##   .model_id .model     .model_desc
##       <int> <list>     <chr>      
## 1         1 <workflow> XGBOOST    
## 2         2 <workflow> XGBOOST    
## 3         3 <workflow> XGBOOST    
## 4         4 <workflow> XGBOOST    
## 5         5 <workflow> XGBOOST    
## 6         6 <workflow> XGBOOST
{% endhighlight %}


### Comparison to Sequential Backend

We can compare to a sequential backend. We have a slight perfomance boost. Note that this performance benefit increases with the size of the training task. 


{% highlight r %}
model_sequential_tbl <- model_wfset %>%
  modeltime_fit_workflowset(
    data    = training(splits),
    control = control_fit_workflowset(
      verbose   = TRUE,
      allow_par = FALSE
    )
  )
{% endhighlight %}



{% highlight text %}
## ℹ Fitting Model: 1
## ✓ Model Successfully Fitted: 1
## ℹ Fitting Model: 2
## ✓ Model Successfully Fitted: 2
## ℹ Fitting Model: 3
## ✓ Model Successfully Fitted: 3
## ℹ Fitting Model: 4
## ✓ Model Successfully Fitted: 4
## ℹ Fitting Model: 5
## ✓ Model Successfully Fitted: 5
## ℹ Fitting Model: 6
## ✓ Model Successfully Fitted: 6
## Total time | 15.781 seconds
{% endhighlight %}

## Accuracy Assessment

We can review the forecast accuracy. We can see that Model 5 has the lowest MAE.


{% highlight r %}
model_parallel_tbl %>%
  modeltime_calibrate(testing(splits)) %>%
  modeltime_accuracy() %>%
  table_modeltime_accuracy(.interactive = FALSE)
{% endhighlight %}

<!--html_preserve--><div id="bmtmtneevx" style="overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', 'Fira Sans', 'Droid Sans', Arial, sans-serif;
}

#bmtmtneevx .gt_table {
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

#bmtmtneevx .gt_heading {
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

#bmtmtneevx .gt_title {
  color: #333333;
  font-size: 125%;
  font-weight: initial;
  padding-top: 4px;
  padding-bottom: 4px;
  border-bottom-color: #FFFFFF;
  border-bottom-width: 0;
}

#bmtmtneevx .gt_subtitle {
  color: #333333;
  font-size: 85%;
  font-weight: initial;
  padding-top: 0;
  padding-bottom: 4px;
  border-top-color: #FFFFFF;
  border-top-width: 0;
}

#bmtmtneevx .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}

#bmtmtneevx .gt_col_headings {
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

#bmtmtneevx .gt_col_heading {
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

#bmtmtneevx .gt_column_spanner_outer {
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

#bmtmtneevx .gt_column_spanner_outer:first-child {
  padding-left: 0;
}

#bmtmtneevx .gt_column_spanner_outer:last-child {
  padding-right: 0;
}

#bmtmtneevx .gt_column_spanner {
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

#bmtmtneevx .gt_group_heading {
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

#bmtmtneevx .gt_empty_group_heading {
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

#bmtmtneevx .gt_from_md > :first-child {
  margin-top: 0;
}

#bmtmtneevx .gt_from_md > :last-child {
  margin-bottom: 0;
}

#bmtmtneevx .gt_row {
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

#bmtmtneevx .gt_stub {
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

#bmtmtneevx .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

#bmtmtneevx .gt_first_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
}

#bmtmtneevx .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

#bmtmtneevx .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}

#bmtmtneevx .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}

#bmtmtneevx .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}

#bmtmtneevx .gt_footnotes {
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

#bmtmtneevx .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding: 4px;
}

#bmtmtneevx .gt_sourcenotes {
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

#bmtmtneevx .gt_sourcenote {
  font-size: 90%;
  padding: 4px;
}

#bmtmtneevx .gt_left {
  text-align: left;
}

#bmtmtneevx .gt_center {
  text-align: center;
}

#bmtmtneevx .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}

#bmtmtneevx .gt_font_normal {
  font-weight: normal;
}

#bmtmtneevx .gt_font_bold {
  font-weight: bold;
}

#bmtmtneevx .gt_font_italic {
  font-style: italic;
}

#bmtmtneevx .gt_super {
  font-size: 65%;
}

#bmtmtneevx .gt_footnote_marks {
  font-style: italic;
  font-weight: normal;
  font-size: 65%;
}
</style>
<table class="gt_table">
  <thead class="gt_header">
    <tr>
      <th colspan="9" class="gt_heading gt_title gt_font_normal gt_bottom_border" style>Accuracy Table</th>
    </tr>
    
  </thead>
  <thead class="gt_col_headings">
    <tr>
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
    <tr><td class="gt_row gt_right">1</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">55572.50</td>
<td class="gt_row gt_right">98.52</td>
<td class="gt_row gt_right">1.63</td>
<td class="gt_row gt_right">194.17</td>
<td class="gt_row gt_right">66953.92</td>
<td class="gt_row gt_right">0.96</td></tr>
    <tr><td class="gt_row gt_right">2</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">48819.23</td>
<td class="gt_row gt_right">86.15</td>
<td class="gt_row gt_right">1.43</td>
<td class="gt_row gt_right">151.49</td>
<td class="gt_row gt_right">58992.30</td>
<td class="gt_row gt_right">0.96</td></tr>
    <tr><td class="gt_row gt_right">3</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">13426.89</td>
<td class="gt_row gt_right">21.69</td>
<td class="gt_row gt_right">0.39</td>
<td class="gt_row gt_right">25.06</td>
<td class="gt_row gt_right">17376.53</td>
<td class="gt_row gt_right">0.98</td></tr>
    <tr><td class="gt_row gt_right">4</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">3699.94</td>
<td class="gt_row gt_right">8.94</td>
<td class="gt_row gt_right">0.11</td>
<td class="gt_row gt_right">8.68</td>
<td class="gt_row gt_right">5163.37</td>
<td class="gt_row gt_right">0.98</td></tr>
    <tr><td class="gt_row gt_right">5</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">3296.74</td>
<td class="gt_row gt_right">7.30</td>
<td class="gt_row gt_right">0.10</td>
<td class="gt_row gt_right">7.37</td>
<td class="gt_row gt_right">5166.48</td>
<td class="gt_row gt_right">0.98</td></tr>
    <tr><td class="gt_row gt_right">6</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_right">3612.70</td>
<td class="gt_row gt_right">8.15</td>
<td class="gt_row gt_right">0.11</td>
<td class="gt_row gt_right">8.24</td>
<td class="gt_row gt_right">5308.19</td>
<td class="gt_row gt_right">0.98</td></tr>
  </tbody>
  
  
</table>
</div><!--/html_preserve-->

## Forecast Assessment

We can visualize the forecast. 


{% highlight r %}
model_parallel_tbl %>%
  modeltime_forecast(
    new_data    = testing(splits),
    actual_data = dataset_tbl,
    keep_data   = TRUE
  ) %>%
  group_by(id) %>%
  plot_modeltime_forecast(
    .facet_ncol  = 3,
    .interactive = FALSE
  )
{% endhighlight %}

![plot of chunk unnamed-chunk-15](/figure/source/2021-06-17-modeltime-tune-parallel-processing/unnamed-chunk-15-1.png)


## Closing Clusters

We can close the parallel clusters using `parallel_stop()`.


{% highlight r %}
parallel_stop()
{% endhighlight %}


# It gets better<br><small>You've just scratched the surface, here's what's coming...</small>

The Modeltime Ecosystem functionality is much more feature-rich than what we've covered here (I couldn't possibly cover everything in this post). 😀

Here's what I didn't cover:

- __Feature Engineering:__ We can make this forecast much more accurate by including features from competition-winning strategies   

- __Ensemble Modeling:__ We can stack H2O Models with other models not included in H2O like GluonTS Deep Learning.

- __Deep Learning:__ We can use GluonTS Deep Learning for developing high-performance, scalable forecasts.

### So how are you ever going to <span style='color:#18bc9c'>learn time series analysis and forecasting?</span>

You're probably thinking:

- There's so much to learn
- My time is precious
- I'll never learn time series

I have good news that will put those doubts behind you. 

You can learn time series analysis and forecasting in hours with my [state-of-the-art time series forecasting course](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting/). 👇


{% include course_promo_time_series.md %}


# Project Roadmap, Future Work, and Contributing to Modeltime

Modeltime is a growing ecosystem of packages that work together for forecasting and time series analysis. Here are several useful links:

- [Modeltime Ecosystem Roadmap on GitHub](https://github.com/business-science/modeltime/issues/5) - See the past development and future trajectory. Did we miss something? Make a suggestion. 

- [Business Science data science blog](https://mailchi.mp/business-science/blog-registration) - I announce all Modeltime Software happenings

# Acknowledgements

I'd like to acknowledge a __Business Science University student__ that is part of the _BSU Modeltime Dev Team_. [Alberto González Almuiña](https://www.linkedin.com/in/alberto-gonz%C3%A1lez-almui%C3%B1a-b1176881/) has helped BIG TIME with development of `modeltime`'s parallel processing functionality, contributing the initial software design. His effort is truly appreciated.



# Have questions about Modeltime?

Make a comment in the chat below. 👇

And, if you plan on using `modeltime` for your business, it's a no-brainer: [Join my Time Series Course](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting). 

{% include cta_rtrack.html %}

