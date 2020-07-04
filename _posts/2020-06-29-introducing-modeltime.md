---
layout: post
title: "Introducing Modeltime: Tidy Time Series Forecasting using Tidymodels"
date:   2020-06-29 06:01:01
excerpt: "I'm so excited to introduce modeltime, a new time series forecasting package designed to integrate tidymodels machine learning packages into a streamlined workflow for tidyverse forecasting."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-Timeseries, Learn-Machine-Learning, R, modeltime]
image: 2020-06-29-modeltime/forecast_plot.jpg
image_preview: 2020-06-29-modeltime/forecast_plot.jpg
---



I'm beyond excited to introduce `modeltime`, a new time series forecasting package designed to speed up model evaluation, selection, and forecasting. `modeltime` does this by integrating the `tidymodels` machine learning ecosystem of packages into a _streamlined workflow_ for `tidyverse` forecasting. Follow [the updated modeltime article](#) to get started with `modeltime`. If you like what you see, I have an [Advanced Time Series Course coming soon (join the waitlist)](https://mailchi.mp/business-science/time-series-forecasting-course-coming-soon) where you will become a time-series expert for your organization by learning `modeltime` and `timetk`. 


# Modeltime <br><small>The forecasting framework for the tidymodels ecosystem</small>

<div class="pull-right" style="width:25%; margin-left:20px; margin-bottom:20px;">
  <a href="#" target="_blank">
  <img class="img-responsive" style="border:none !important;" src="/assets/2020-06-29-modeltime/logo-modeltime.png"> 
  </a>
</div>

`modeltime` is a new package designed for rapidly developing and testing time series models using machine learning models, classical models, and automated models. There are three key benefits:

1. __Systematic Workflow for Forecasting.__ Learn a few key functions like `modeltime_table()`, `modeltime_calibrate()`, and `modeltime_refit()` to develop and train time series models.

2. __Unlocks Tidymodels for Forecasting.__ Gain the benefit of all or the `parsnip` models including `boost_tree()` (XGBoost, C5.0), `linear_reg()` (GLMnet, Stan, Linear Regression), `rand_forest()` (Random Forest), and more

3. __New Time Series Boosted Models__ including Boosted ARIMA (`arima_boost()`) and Boosted Prophet (`prophet_boost()`) that can improve accuracy by applying XGBoost model to the errors  

# Getting Started <br><small>Let's kick the tires on modeltime</small>

Install `modeltime`. 


{% highlight r %}
install.packages("modeltime")
{% endhighlight %}

Load the following libraries. 


{% highlight r %}
library(tidymodels)
library(modeltime)
library(timetk)   
library(lubridate)
library(tidyverse)
{% endhighlight %}

# Get Your Data <br><small>Forecasting daily bike transactions</small>

We'll start with a `bike_sharing_daily` time series data set that includes bike transactions. We'll simplify the data set to a univariate time series with columns, "date" and "value".


{% highlight r %}
bike_transactions_tbl <- bike_sharing_daily %>%
  select(dteday, cnt) %>%
  set_names(c("date", "value")) 

bike_transactions_tbl
{% endhighlight %}



{% highlight text %}
## # A tibble: 731 x 2
##    date       value
##    <date>     <dbl>
##  1 2011-01-01   985
##  2 2011-01-02   801
##  3 2011-01-03  1349
##  4 2011-01-04  1562
##  5 2011-01-05  1600
##  6 2011-01-06  1606
##  7 2011-01-07  1510
##  8 2011-01-08   959
##  9 2011-01-09   822
## 10 2011-01-10  1321
## # … with 721 more rows
{% endhighlight %}

Next, visualize the dataset with the `plot_time_series()` function. Toggle `.interactive = TRUE` to get a plotly interactive plot. `FALSE` returns a ggplot2 static plot. 


{% highlight r %}
bike_transactions_tbl %>%
  plot_time_series(date, value, .interactive = FALSE)
{% endhighlight %}

![plot of chunk unnamed-chunk-4](/figure/source/2020-06-29-introducing-modeltime/unnamed-chunk-4-1.png)

# Train / Test <br><small>Split your time series into training and testing sets</small>

Next, use `time_series_split()` to make a train/test set. 

- Setting `assess = "3 months"` tells the function to use the last 3-months of data as the testing set. 
- Setting `cumulative = TRUE` tells the sampling to use all of the prior data as the training set. 


{% highlight r %}
splits <- bike_transactions_tbl %>%
  time_series_split(assess = "3 months", cumulative = TRUE)
{% endhighlight %}

Next, visualize the train/test split. 

- `tk_time_series_cv_plan()`: Converts the splits object to a data frame 
- `plot_time_series_cv_plan()`: Plots the time series sampling data using the "date" and "value" columns. 


{% highlight r %}
splits %>%
  tk_time_series_cv_plan() %>%
  plot_time_series_cv_plan(date, value, .interactive = FALSE)
{% endhighlight %}

![plot of chunk unnamed-chunk-6](/figure/source/2020-06-29-introducing-modeltime/unnamed-chunk-6-1.png)


# Modeling <br><small>This is <strong>exciting.</strong></small>

Now for the fun part! Let's make some models using functions from `modeltime` and `parsnip`. 

## Automatic Models

Automatic models are generally modeling approaches that have been automated. This includes "Auto ARIMA" and "Auto ETS" functions from `forecast` and the "Prophet" algorithm from `prophet`. These algorithms have been integrated into `modeltime`. The process is simple to set up:

- __Model Spec:__ Use a specification function (e.g. `arima_reg()`, `prophet_reg()`) to initialize the algorithm and key parameters
- __Engine:__ Set an engine using one of the engines available for the Model Spec. 
- __Fit Model__: Fit the model to the training data

Let's make several models to see this process in action. 

### Auto ARIMA

Here's the basic Auto Arima Model fitting process. 

- __Model Spec: `arima_reg()`__ <-- This sets up your general model algorithm and key parameters
- __Set Engine: `set_engine("auto_arima")`__ <-- This selects the specific package-function to use and you can add any function-level arguments here.
- __Fit Model: `fit(value ~ date, training(splits))`__ <-- All modeltime models require a date column to be a regressor. 


{% highlight r %}
model_fit_arima <- arima_reg() %>%
  set_engine("auto_arima") %>%
  fit(value ~ date, training(splits))
{% endhighlight %}



{% highlight text %}
## frequency = 7 observations per 1 week
{% endhighlight %}



{% highlight r %}
model_fit_arima
{% endhighlight %}



{% highlight text %}
## parsnip model object
## 
## Fit time:  313ms 
## Series: outcome 
## ARIMA(0,1,3) with drift 
## 
## Coefficients:
##           ma1      ma2      ma3   drift
##       -0.6106  -0.1868  -0.0673  9.3169
## s.e.   0.0396   0.0466   0.0398  4.6225
## 
## sigma^2 estimated as 730568:  log likelihood=-5227.22
## AIC=10464.44   AICc=10464.53   BIC=10486.74
{% endhighlight %}


### Prophet

Prophet is specified just like Auto ARIMA. Note that I've changed to `prophet_reg()`, and I'm passing an engine-specific parameter `yearly.seasonality = TRUE` using `set_engine()`. 


{% highlight r %}
model_fit_prophet <- prophet_reg() %>%
  set_engine("prophet", yearly.seasonality = TRUE) %>%
  fit(value ~ date, training(splits))

model_fit_prophet
{% endhighlight %}



{% highlight text %}
## parsnip model object
## 
## Fit time:  145ms 
## PROPHET Model
## - growth: 'linear'
## - n.changepoints: 25
## - seasonality.mode: 'additive'
## - extra_regressors: 0
{% endhighlight %}



## Machine Learning Models

Machine learning models are more complex than the automated models. This complexity typically requires a ___workflow___ (sometimes called a _pipeline_ in other languages). The general process goes like this:

- __Create Preprocessing Recipe__
- __Create Model Specifications__
- __Use Workflow to combine Model Spec and Preprocessing, and Fit Model__

### Preprocessing Recipe

First, I'll create a preprocessing recipe using `recipe()` and adding time series steps. The process uses the "date" column to create 45 new features that I'd like to model. These include time-series signature features and fourier series. 


{% highlight r %}
recipe_spec <- recipe(value ~ date, training(splits)) %>%
  step_timeseries_signature(date) %>%
  step_rm(contains("am.pm"), contains("hour"), contains("minute"),
          contains("second"), contains("xts")) %>%
  step_fourier(date, period = 365, K = 5) %>%
  step_dummy(all_nominal())

recipe_spec %>% prep() %>% juice()
{% endhighlight %}



{% highlight text %}
## # A tibble: 641 x 47
##    date       value date_index.num date_year date_year.iso date_half
##    <date>     <dbl>          <int>     <int>         <int>     <int>
##  1 2011-01-01   985     1293840000      2011          2010         1
##  2 2011-01-02   801     1293926400      2011          2010         1
##  3 2011-01-03  1349     1294012800      2011          2011         1
##  4 2011-01-04  1562     1294099200      2011          2011         1
##  5 2011-01-05  1600     1294185600      2011          2011         1
##  6 2011-01-06  1606     1294272000      2011          2011         1
##  7 2011-01-07  1510     1294358400      2011          2011         1
##  8 2011-01-08   959     1294444800      2011          2011         1
##  9 2011-01-09   822     1294531200      2011          2011         1
## 10 2011-01-10  1321     1294617600      2011          2011         1
## # … with 631 more rows, and 41 more variables: date_quarter <int>,
## #   date_month <int>, date_day <int>, date_wday <int>, date_mday <int>,
## #   date_qday <int>, date_yday <int>, date_mweek <int>, date_week <int>,
## #   date_week.iso <int>, date_week2 <int>, date_week3 <int>, date_week4 <int>,
## #   date_mday7 <int>, date_sin365_K1 <dbl>, date_cos365_K1 <dbl>,
## #   date_sin365_K2 <dbl>, date_cos365_K2 <dbl>, date_sin365_K3 <dbl>,
## #   date_cos365_K3 <dbl>, date_sin365_K4 <dbl>, date_cos365_K4 <dbl>,
## #   date_sin365_K5 <dbl>, date_cos365_K5 <dbl>, date_month.lbl_01 <dbl>,
## #   date_month.lbl_02 <dbl>, date_month.lbl_03 <dbl>, date_month.lbl_04 <dbl>,
## #   date_month.lbl_05 <dbl>, date_month.lbl_06 <dbl>, date_month.lbl_07 <dbl>,
## #   date_month.lbl_08 <dbl>, date_month.lbl_09 <dbl>, date_month.lbl_10 <dbl>,
## #   date_month.lbl_11 <dbl>, date_wday.lbl_1 <dbl>, date_wday.lbl_2 <dbl>,
## #   date_wday.lbl_3 <dbl>, date_wday.lbl_4 <dbl>, date_wday.lbl_5 <dbl>,
## #   date_wday.lbl_6 <dbl>
{% endhighlight %}

With a recipe in-hand, we can set up our machine learning pipelines. 

### Elastic Net

Making an Elastic NET model is easy to do. Just set up your model spec using `linear_reg()` and `set_engine("glmnet")`. Note that we have not fitted the model yet (as we did in previous steps).


{% highlight r %}
model_spec_glmnet <- linear_reg(penalty = 0.01, mixture = 0.5) %>%
  set_engine("glmnet")
{% endhighlight %}

Next, make a fitted workflow:

- __Start__ with a `workflow()`
- __Add a Model Spec:__ `add_model(model_spec_glmnet)`
- __Add Preprocessing:__ `add_recipe(recipe_spec %>% step_rm(date))` <-- Note that I'm removing the "date" column since Machine Learning algorithms don't typically know how to deal with date or date-time features
- __Fit the Workflow__: `fit(training(splits))`


{% highlight r %}
workflow_fit_glmnet <- workflow() %>%
  add_model(model_spec_glmnet) %>%
  add_recipe(recipe_spec %>% step_rm(date)) %>%
  fit(training(splits))
{% endhighlight %}


### Random Forest

We can fit a Random Forest using a similar process as the Elastic Net. 


{% highlight r %}
model_spec_rf <- rand_forest(trees = 500, min_n = 50) %>%
  set_engine("randomForest")

workflow_fit_rf <- workflow() %>%
  add_model(model_spec_rf) %>%
  add_recipe(recipe_spec %>% step_rm(date)) %>%
  fit(training(splits))
{% endhighlight %}


## New Hybrid Models

I've included several hybrid models (e.g. `arima_boost()` and `prophet_boost()`) that combine both automated algorithms with machine learning. I'll showcase `prophet_boost()` next!

### Prophet Boost

The ___Prophet Boost algorithm___ combines Prophet with XGBoost to get the best of both worlds (i.e. Prophet Automation + Machine Learning). The algorithm works by:

1. First modeling the univariate series using Prophet
2. Using regressors supplied via the preprocessing recipe (remember our recipe generated 45 new features), and regressing the Prophet Residuals with the XGBoost model

We can set the model up using a workflow just like with the machine learning algorithms. 


{% highlight r %}
model_spec_prophet_boost <- prophet_boost() %>%
  set_engine("prophet_xgboost", yearly.seasonality = TRUE) 

workflow_fit_prophet_boost <- workflow() %>%
  add_model(model_spec_prophet_boost) %>%
  add_recipe(recipe_spec) %>%
  fit(training(splits))

workflow_fit_prophet_boost
{% endhighlight %}



{% highlight text %}
## ══ Workflow [trained] ═════════════════════════════════════════════════════════════════════════════════
## Preprocessor: Recipe
## Model: prophet_boost()
## 
## ── Preprocessor ───────────────────────────────────────────────────────────────────────────────────────
## 4 Recipe Steps
## 
## ● step_timeseries_signature()
## ● step_rm()
## ● step_fourier()
## ● step_dummy()
## 
## ── Model ──────────────────────────────────────────────────────────────────────────────────────────────
## PROPHET w/ XGBoost Errors
## ---
## Model 1: PROPHET
## - growth: 'linear'
## - n.changepoints: 25
## - seasonality.mode: 'additive'
## 
## ---
## Model 2: XGBoost Errors
## 
## xgboost::xgb.train(params = list(eta = 0.3, max_depth = 6, gamma = 0, 
##     colsample_bytree = 1, min_child_weight = 1, subsample = 1), 
##     data = x, nrounds = 15, watchlist = wlist, verbose = 0, objective = "reg:squarederror", 
##     nthread = 1)
{% endhighlight %}


# The Modeltime Workflow <br><small>Speed up model evaluation and selection with modeltime</small>


![Modeltime Workflow](/assets/2020-06-29-modeltime/modeltime_workflow.jpg)

__The `modeltime` workflow__ is designed to speed up model evaluation and selection. Now that we have several time series models, let's analyze them and forecast the future with the `modeltime` workflow. 

## Modeltime Table

__The Modeltime Table__ organizes the models with IDs and creates generic descriptions to help us keep track of our models. Let's add the models to a `modeltime_table()`.  


{% highlight r %}
model_table <- modeltime_table(
  model_fit_arima, 
  model_fit_prophet,
  workflow_fit_glmnet,
  workflow_fit_rf,
  workflow_fit_prophet_boost
) 

model_table
{% endhighlight %}



{% highlight text %}
## # Modeltime Table
## # A tibble: 5 x 3
##   .model_id .model     .model_desc              
##       <int> <list>     <chr>                    
## 1         1 <fit[+]>   ARIMA(0,1,3) WITH DRIFT  
## 2         2 <fit[+]>   PROPHET                  
## 3         3 <workflow> GLMNET                   
## 4         4 <workflow> RANDOMFOREST             
## 5         5 <workflow> PROPHET W/ XGBOOST ERRORS
{% endhighlight %}

## Calibration

__Model Calibration__ is used to quantify error and estimate confidence intervals. We'll perform model calibration on the out-of-sample data (aka. the Testing Set) with the `modeltime_calibrate()` function. Two new columns are generated (".type" and ".calibration_data"), the most important of which is the ".calibration_data". This includes the actual values, fitted values, and residuals for the testing set. 


{% highlight r %}
calibration_table <- model_table %>%
  modeltime_calibrate(testing(splits))

calibration_table
{% endhighlight %}



{% highlight text %}
## # Modeltime Table
## # A tibble: 5 x 5
##   .model_id .model     .model_desc               .type .calibration_data
##       <int> <list>     <chr>                     <chr> <list>           
## 1         1 <fit[+]>   ARIMA(0,1,3) WITH DRIFT   Test  <tibble [90 × 4]>
## 2         2 <fit[+]>   PROPHET                   Test  <tibble [90 × 4]>
## 3         3 <workflow> GLMNET                    Test  <tibble [90 × 4]>
## 4         4 <workflow> RANDOMFOREST              Test  <tibble [90 × 4]>
## 5         5 <workflow> PROPHET W/ XGBOOST ERRORS Test  <tibble [90 × 4]>
{% endhighlight %}

### Forecast (Testing Set)

With calibrated data, we can visualize the testing predictions (forecast). 

- Use `modeltime_forecast()` to generate the forecast data for the testing set as a tibble. 
- Use `plot_modeltime_forecast()` to visualize the results in interactive and static plot formats.



{% highlight r %}
calibration_table %>%
  modeltime_forecast(actual_data = bike_transactions_tbl) %>%
  plot_modeltime_forecast(.interactive = FALSE)
{% endhighlight %}

![plot of chunk unnamed-chunk-16](/figure/source/2020-06-29-introducing-modeltime/unnamed-chunk-16-1.png)

### Accuracy (Testing Set)

Next, calculate the testing accuracy to compare the models. 

- Use `modeltime_accuracy()` to generate the out-of-sample accuracy metrics as a tibble.
- Use `table_modeltime_accuracy()` to generate interactive and static 


{% highlight r %}
calibration_table %>%
  modeltime_accuracy() %>%
  table_modeltime_accuracy(.interactive = FALSE)
{% endhighlight %}

<!--html_preserve--><style>html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', 'Fira Sans', 'Droid Sans', Arial, sans-serif;
}

#jobwpqxmlh .gt_table {
  display: table;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
  color: #333333;
  font-size: 16px;
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

#jobwpqxmlh .gt_heading {
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

#jobwpqxmlh .gt_title {
  color: #333333;
  font-size: 125%;
  font-weight: initial;
  padding-top: 4px;
  padding-bottom: 4px;
  border-bottom-color: #FFFFFF;
  border-bottom-width: 0;
}

#jobwpqxmlh .gt_subtitle {
  color: #333333;
  font-size: 85%;
  font-weight: initial;
  padding-top: 0;
  padding-bottom: 4px;
  border-top-color: #FFFFFF;
  border-top-width: 0;
}

#jobwpqxmlh .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}

#jobwpqxmlh .gt_col_headings {
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

#jobwpqxmlh .gt_col_heading {
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

#jobwpqxmlh .gt_column_spanner_outer {
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

#jobwpqxmlh .gt_column_spanner_outer:first-child {
  padding-left: 0;
}

#jobwpqxmlh .gt_column_spanner_outer:last-child {
  padding-right: 0;
}

#jobwpqxmlh .gt_column_spanner {
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

#jobwpqxmlh .gt_group_heading {
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

#jobwpqxmlh .gt_empty_group_heading {
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

#jobwpqxmlh .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}

#jobwpqxmlh .gt_from_md > :first-child {
  margin-top: 0;
}

#jobwpqxmlh .gt_from_md > :last-child {
  margin-bottom: 0;
}

#jobwpqxmlh .gt_row {
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

#jobwpqxmlh .gt_stub {
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

#jobwpqxmlh .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

#jobwpqxmlh .gt_first_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
}

#jobwpqxmlh .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

#jobwpqxmlh .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}

#jobwpqxmlh .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}

#jobwpqxmlh .gt_footnotes {
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

#jobwpqxmlh .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding: 4px;
}

#jobwpqxmlh .gt_sourcenotes {
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

#jobwpqxmlh .gt_sourcenote {
  font-size: 90%;
  padding: 4px;
}

#jobwpqxmlh .gt_left {
  text-align: left;
}

#jobwpqxmlh .gt_center {
  text-align: center;
}

#jobwpqxmlh .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}

#jobwpqxmlh .gt_font_normal {
  font-weight: normal;
}

#jobwpqxmlh .gt_font_bold {
  font-weight: bold;
}

#jobwpqxmlh .gt_font_italic {
  font-style: italic;
}

#jobwpqxmlh .gt_super {
  font-size: 65%;
}

#jobwpqxmlh .gt_footnote_marks {
  font-style: italic;
  font-size: 65%;
}
</style>
<div id="jobwpqxmlh" style="overflow-x:auto;overflow-y:auto;width:auto;height:auto;"><table class="gt_table">
  <thead class="gt_header">
    <tr>
      <th colspan="9" class="gt_heading gt_title gt_font_normal" style>Accuracy Table</th>
    </tr>
    <tr>
      <th colspan="9" class="gt_heading gt_subtitle gt_font_normal gt_bottom_border" style></th>
    </tr>
  </thead>
  <thead class="gt_col_headings">
    <tr>
      <th class="gt_col_heading gt_columns_bottom_border gt_center" rowspan="1" colspan="1">.model_id</th>
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
    <tr>
      <td class="gt_row gt_center">1</td>
      <td class="gt_row gt_left">ARIMA(0,1,3) WITH DRIFT</td>
      <td class="gt_row gt_left">Test</td>
      <td class="gt_row gt_right">2540.11</td>
      <td class="gt_row gt_right">474.89</td>
      <td class="gt_row gt_right">2.74</td>
      <td class="gt_row gt_right">46.00</td>
      <td class="gt_row gt_right">3188.09</td>
      <td class="gt_row gt_right">0.39</td>
    </tr>
    <tr>
      <td class="gt_row gt_center">2</td>
      <td class="gt_row gt_left">PROPHET</td>
      <td class="gt_row gt_left">Test</td>
      <td class="gt_row gt_right">1221.18</td>
      <td class="gt_row gt_right">365.13</td>
      <td class="gt_row gt_right">1.32</td>
      <td class="gt_row gt_right">28.68</td>
      <td class="gt_row gt_right">1764.93</td>
      <td class="gt_row gt_right">0.44</td>
    </tr>
    <tr>
      <td class="gt_row gt_center">3</td>
      <td class="gt_row gt_left">GLMNET</td>
      <td class="gt_row gt_left">Test</td>
      <td class="gt_row gt_right">1197.06</td>
      <td class="gt_row gt_right">340.57</td>
      <td class="gt_row gt_right">1.29</td>
      <td class="gt_row gt_right">28.44</td>
      <td class="gt_row gt_right">1650.87</td>
      <td class="gt_row gt_right">0.49</td>
    </tr>
    <tr>
      <td class="gt_row gt_center">4</td>
      <td class="gt_row gt_left">RANDOMFOREST</td>
      <td class="gt_row gt_left">Test</td>
      <td class="gt_row gt_right">1309.79</td>
      <td class="gt_row gt_right">327.88</td>
      <td class="gt_row gt_right">1.42</td>
      <td class="gt_row gt_right">30.24</td>
      <td class="gt_row gt_right">1809.05</td>
      <td class="gt_row gt_right">0.47</td>
    </tr>
    <tr>
      <td class="gt_row gt_center">5</td>
      <td class="gt_row gt_left">PROPHET W/ XGBOOST ERRORS</td>
      <td class="gt_row gt_left">Test</td>
      <td class="gt_row gt_right">1189.28</td>
      <td class="gt_row gt_right">332.44</td>
      <td class="gt_row gt_right">1.28</td>
      <td class="gt_row gt_right">28.48</td>
      <td class="gt_row gt_right">1644.25</td>
      <td class="gt_row gt_right">0.55</td>
    </tr>
  </tbody>
  
  
</table></div><!--/html_preserve-->

### Analyze Results

From the accuracy measures and forecast results, we see that:

- Auto ARIMA model is not a good fit for this data. 
- The best model is Prophet + XGBoost

Let's exclude the Auto ARIMA from our final model, then make future forecasts with the remaining models. 

## Refit and Forecast Forward

__Refitting__ is a best-practice before forecasting the future. 

- `modeltime_refit()`: We re-train on full data (`bike_transactions_tbl`)
- `modeltime_forecast()`: For models that only depend on the "date" feature, we can use `h` (horizon) to forecast forward. Setting `h = "12 months"` forecasts then next 12-months of data. 


{% highlight r %}
calibration_table %>%
  # Remove ARIMA model with low accuracy
  filter(.model_id != 1) %>%
  
  # Refit and Forecast Forward
  modeltime_refit(bike_transactions_tbl) %>%
  modeltime_forecast(h = "12 months", actual_data = bike_transactions_tbl) %>%
  plot_modeltime_forecast(.interactive = FALSE)
{% endhighlight %}

![plot of chunk unnamed-chunk-18](/figure/source/2020-06-29-introducing-modeltime/unnamed-chunk-18-1.png)

# It gets better<br><small>You've just scratched the surface, here's what's coming...</small>

The `modeltime` package functionality is much more feature-rich than what we've covered here (I couldn't possibly cover everything in this post). 😀

Here's what I didn't cover:

- __Feature engineering:__ The art of time series analysis is feature engineering. Modeltime works with cutting-edge time-series preprocessing tools including those in `recipes` and `timetk` packages.  

- __Hyper parameter tuning:__ ARIMA models and Machine Learning models can be tuned. There's a right and a wrong way (and it's not the same for both types). 

- __Scalability:__ Training multiple time series groups and automation is a huge need area in organizations. You need to know how to scale your analyses to thousands of time series. 

- __Strengths and weaknesses:__ Did you know certain machine learning models are better for trend, seasonality, but not both? Why is ARIMA way better for certain datasets? When will Random Forest and XGBoost fail?

- __Advanced machine learning and deep learning:__ Recurrent Neural Networks (RRNs) have been crushing time series competitions. Will they work for business data? How can you implement them?

I teach each of these techniques and strategies so you __become the time series expert for your organization.__ [Here's how.](#time-series-course) 👇


{% include course_promo_time_series.md %}

<br>



# Future Work

I'm just getting started with `modeltime`. The main functionality should not change so you can begin using. Let me know of any issues via [GitHub](https://github.com/business-science/modeltime/issues). Regarding future work, here's a short list of what's coming over the next few months.

### Ensembles and Model Stacking

__A top priority on the software roadmap is to include model ensembling__, various techniques for combining models to improve forecast results. The plan is to collaborate with the `tidymodels` team to develop ensembling tools. 

### More Time Series Algorithms

It's critical to have a diverse set of algorithms included in `modeltime` or as extensions to `modeltime` because this improves the speed of experimentation, model selections, and moving into production. To support extensibility:

- I have [Model Roadmap here](https://github.com/business-science/modeltime/issues/5) for additional models. 
- I also have a [vignette with instructions to help developers extend `modeltime`](https://business-science.github.io/modeltime/articles/extending-modeltime.html), creating R packages that leverage the forecasting workflow. 

Comment on [GitHub Issue #5](https://github.com/business-science/modeltime/issues/5) to let me know what you would like to see or if you have plans to extend `modeltime`. 


# Modeling time Resources <br><small>With <strong>modeltime</strong></small>

- [Modeltime Documentation](https://business-science.github.io/modeltime/index.html) - Learn about `modeltime` workflow and which models have been included
- [Modeltime GitHub Page](https://github.com/business-science/modeltime) - Give it a Star if you like it!
- [Timetk Documentation](https://business-science.github.io/timetk/) - Data wrangling, visualization, and preprocessing for time series.
- [Tidymodels.org](https://www.tidymodels.org/) - The `tidymodels` framework is a collection of packages for modeling and machine learning using `tidyverse` principles.


# Have questions about modeltime?

Make a comment in the chat below. 👇

And, if you plan on using `modeltime` for your business, it's a no-brainer - [Join my Time Series Course Waitlist](https://mailchi.mp/business-science/time-series-forecasting-course-coming-soon) (It's coming, it's really insane). 
