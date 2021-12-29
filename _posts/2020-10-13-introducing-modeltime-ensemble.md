---
layout: post
title: "Introducing Modeltime Ensemble: Time Series Forecast Stacking"
date:   2020-10-13 06:01:01
excerpt: "I'm super excited to introduce modeltime.ensemble, a new time series forecasting package designed to extend modeltime with ensemble methods like stacking, weighting, and averaging."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-Timeseries, Learn-Machine-Learning, R, modeltime, modeltime.ensemble]
image: /assets/2020-10-13-modeltime-ensemble/modeltime-ensemble.jpg
image_preview: /assets/2020-10-13-modeltime-ensemble/modeltime-ensemble.jpg
---



I'm SUPER EXCITED to introduce `modeltime.ensemble`. Modeltime Ensemble implements __three competition-winning forecasting strategies.__ [This article (recently updated)](#) introduces Modeltime Ensemble, which makes it easy to perform blended and stacked forecasts that improve forecast accuracy. 

- We'll quickly introduce you to the __growing modeltime ecosystem.__ 
- We'll explain __what Modeltime Ensemble does.__
- Then, we'll do a [Modeltime Ensemble Forecast Tutorial](#ensemble-tutorial) using the `modeltime.ensemble` 

If you like what you see, I have an [Advanced Time Series Course](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting) where you will become the time-series expert for your organization by learning `modeltime`, `modeltime.ensemble`, and `timetk`.

{% include forecasting-software-articles.md %}

# Meet the Modeltime Ecosystem <br><small>A <strong>growing</strong> ecosystem for tidymodels forecasting</small>

<div class="pull-right" style="width:60%; margin-left:20px; margin-bottom:20px;">
  <a href="#" target="_blank">
  <img class="img-responsive" style="border:none !important;" src="/assets/2021-03-15-modeltime-h2o/modeltime_ecosystem.jpg">
  </a>
</div>

Modeltime Ensemble is part of a __growing ecosystem__ of Modeltime forecasting packages. The main purpose of the Modeltime Ecosystem is to develop scalable forecasting systems. 

- [Modeltime (Machine Learning, Forecasting Workflow)](https://business-science.github.io/modeltime/)

- [Modeltime H2O (AutoML)](https://business-science.github.io/modeltime.h2o/)

- [Modeltime GluonTS (Deep Learning)](https://business-science.github.io/modeltime.gluonts/)

- [Modeltime Ensemble (Blending Forecasts)](https://business-science.github.io/modeltime.ensemble/)

- [Modeltime Resample (Backtesting)](https://business-science.github.io/modeltime.resample/)

- [Timetk (Data Transformation, Feature Engineering, Time Series Visualization)](https://business-science.github.io/timetk/)

# Modeltime Ensemble <br><small>The time series <strong>ensemble API</strong> for Modeltime</small>

<div class="pull-right" style="width:25%; margin-left:20px; margin-bottom:20px;">
  <a href="#" target="_blank">
  <img class="img-responsive" style="border:none !important;" src="/assets/2020-10-13-modeltime-ensemble/logo-modeltime-ensemble.png"> 
  </a>
</div>

Three months ago I introduced `modeltime`, a new R package that [speeds up forecasting experimentation and model selection with Machine Learning](/code-tools/2020/06/29/introducing-modeltime.html) (XGBoost, GLMNET, Prophet, Prophet Boost, ARIMA, and ARIMA Boost). Fast-forward to now. I'm thrilled to announce the first expansion to the Modeltime Ecosystem: `modeltime.ensemble`.

Modeltime Ensemble is a cutting-edge package that integrates __competition-winning__ time series ensembling strategies:

1. Stacked Meta-Learners

2. Weighted Ensembles 

3. Average Ensembles 



## What is a Stacked Ensemble?

Using `modeltime.ensemble`, you can build something called a Stacked Ensemble. Let's break this down:

- __An ensemble__ is just a combination of models. We can combine them in many ways. 

- One method is __stacking__, which typically uses a "meta-learning algorithm" to learn how to combine "sub-models" (the lower level models used as inputs to the stacking algorithm)

<iframe width="100%" height="455" src="https://www.youtube.com/embed/6YdYMvclOV0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Stacking Diagram

Here's a __Multi-Level Stack__, which won the [_Kaggle Grupo Bimbo Inventory Demand Forecasting Competition_](https://www.kaggle.com/c/grupo-bimbo-inventory-demand).  

![Time Series Forecast Stacking](/assets/2020-10-13-modeltime-ensemble/modeltime-ensemble.jpg)

<p class="text-center date">
The Multi-Level Stacked Ensemble that won the Kaggle Grupo Bimbo Inventory Demand Challenge
</p>

The __multi-level stack__ can be broken down:

1. __Level 1 - Sub-Models.__ Includes models like ARIMA, Elastic Net, Support Vector Machines, or XGBoost. These models each predict independently on the time series data. 

2. __Level 2 - Stacking Algorithms.__ Stacking algorithms learn how to combine each of the sub-models by training a "meta-model" on the predictions from the sub-models. 

3. __Level 3 - Weighted Stacking.__ Weighted stacking is a simple approach that is fast and effective. It's a very simple approach where we apply a weighting and average the predictions of the incoming models. We can use this approach on sub-models, stacked models, or even a combination of stacked and sub-models. We decide the weighting. 

I teach how to do a Multi-Level Stack in Module 14 of my [High-Performance Time Series Forecasting Course](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting). 

## What Modeltime Ensemble Functions do I need to know?

Here's the low-down on which functions you'll need to learn to implement different strategies. I teach these in in Module 14 of my [High-Performance Time Series Forecasting Course](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting).

1. __Stacked Meta-Learners:__ Use `modeltime_fit_resamples()` to create sub-model predictions. Use `ensemble_model_spec()` to create super learners (models that learn from the predictions of sub-models).

2. __Weighted Ensembles__: Use `ensemble_weighted()` to create weighted ensemble blends. You choose the weights.

3. __Average Ensembles__: Use `ensemble_average()` to build simple average and median ensembles. No decisions necessary, but accuracy may be sub-optimal.

<br>


# Ensemble Tutorial<br><small>Forecasting with Weighted Ensembles</small> {#ensemble-tutorial}

Today, I'll cover forecasting Product Sales Demand with __Average and Weighted Ensembles__, which are fast to implement and can have good performance (although stacked ensembles tend to have better performance). 

## Get the Cheat Sheet

As you go through this tutorial, it may help to use the [Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html). Page 3 Covers the Modeltime Forecasting Ecosystem with links to key documentation. 

<a href="https://www.business-science.io/r-cheatsheet.html" target="_blank">
<img src="/assets/2021-03-15-modeltime-h2o/cheatsheet_forecasting.jpg" style="width:100%;">
</a>

<p class="date text-center"><a href="https://www.business-science.io/r-cheatsheet.html" target="_blank">Forecasting Ecosystem Links (Ultimate R Cheat Sheet)</a></p>

## Modeltime Ensemble Diagram

Here's an ensemble diagram of what we are going to accomplish. 

![Weighted Stacking with Modeltime Ensemble](/assets/2020-10-13-modeltime-ensemble/weighted_stacking.jpg)

<p class="text-center date">
Weighted Stacking, Modeltime Ensemble Diagram
</p>

## Modeltime Ensemble Functions used in this Tutorial

The idea is that we have several sub-models (Level 1) that make predictions. We can then take these predictions and blend them using weighting and averaging techniques (Level 2):

- __Simple Average:__ Weights all models with the same proportion. Selects the average for each timestamp. Use `ensemble_average(type = "mean")`. 
- __Median Average__: No weighting. Selects prediction using the centered value for each time stamp. Use `ensemble_average(type = "median")`. 
- __Weighted Average:__ User defines the weights (loadings). Applies a weighted average at each of the timestamps. Use `ensemble_weighted(loadings = c(1, 2, 3, 4))`.

__More Advanced Ensembles: Stacked Meta-Learners__

The average and weighted ensembles are the simplest approaches to ensembling. One method that Modeltime Ensemble has integrated is ___Stacked Meta-Learners___, which learn from the predictions of sub-models. We won't cover stacked meta-learners in this tutorial. But, I teach them in my [__High-Performance Time Series Course__](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting). 💪



# Getting Started <br><small>Let's kick the tires on modeltime.ensemble</small>

Install `modeltime.ensemble`. 


{% highlight r %}
install.packages("modeltime.ensemble")
{% endhighlight %}

Load the following libraries. 


{% highlight r %}
# Time Series Modeling and Machine Learning
library(tidymodels)
library(modeltime)
library(modeltime.ensemble)

# Time Series and Data Wrangling
library(timetk)
library(tidyverse)
{% endhighlight %}

# Get Your Data <br><small>Forecasting Product Sales</small>

Start with our __Business Objective:__

> <span style="color:blue;">Our Business objective is to forecast the next 12-weeks of Product Sales Demandgiven 2-year sales history.</span>

We'll use the `walmart_sales_weekly` time series data set that includes Walmart Product Transactions from several stores, which is a small sample of the dataset from [Kaggle Walmart Recruiting - Store Sales Forecasting](https://www.kaggle.com/c/walmart-recruiting-store-sales-forecasting). We'll simplify the data set to a univariate time series with columns, "Date" and "Weekly_Sales" from Store 1 and Department 1.


{% highlight r %}
store_1_1_tbl <- walmart_sales_weekly %>%
    filter(id == "1_1") %>%
    select(Date, Weekly_Sales)

store_1_1_tbl
{% endhighlight %}



{% highlight text %}
## # A tibble: 143 x 2
##    Date       Weekly_Sales
##    <date>            <dbl>
##  1 2010-02-05       24924.
##  2 2010-02-12       46039.
##  3 2010-02-19       41596.
##  4 2010-02-26       19404.
##  5 2010-03-05       21828.
##  6 2010-03-12       21043.
##  7 2010-03-19       22137.
##  8 2010-03-26       26229.
##  9 2010-04-02       57258.
## 10 2010-04-09       42961.
## # … with 133 more rows
{% endhighlight %}

Next, visualize the dataset with the `plot_time_series()` function. Toggle `.interactive = TRUE` to get a plotly interactive plot. `FALSE` returns a ggplot2 static plot. 


{% highlight r %}
store_1_1_tbl %>%
    plot_time_series(Date, Weekly_Sales, .smooth_period = "3 months", .interactive = FALSE)
{% endhighlight %}

![plot of chunk unnamed-chunk-4](/figure/source/2020-10-13-introducing-modeltime-ensemble/unnamed-chunk-4-1.png)

# Seasonality Evaluation

Let's do a quick seasonality evaluation to hone in on important features using `plot_seasonal_diagnostics()`. 


{% highlight r %}
store_1_1_tbl %>%
    plot_seasonal_diagnostics(
        Date, Weekly_Sales,
        .feature_set = c("week", "month.lbl"),
        .interactive = FALSE
    )
{% endhighlight %}

![plot of chunk unnamed-chunk-5](/figure/source/2020-10-13-introducing-modeltime-ensemble/unnamed-chunk-5-1.png)

We can see that certain weeks and months of the year have higher sales. __These anomalies are likely due to events.__ The Kaggle Competition informed competitors that Super Bowl, Labor Day, Thanksgiving, and Christmas were special holidays. To approximate the events, week number and month may be good features. Let's come back to this when we preprocess our data. 

# Train / Test <br><small>Split your time series into training and testing sets</small>

Give the objective to forecast 12 weeks of product sales, we use `time_series_split()` to make a train/test set consisting of 12-weeks of test data (hold out) and the rest for training.   

- Setting `assess = "12 weeks"` tells the function to use the last 12-weeks of data as the testing set. 
- Setting `cumulative = TRUE` tells the sampling to use all of the prior data as the training set. 


{% highlight r %}
splits <- store_1_1_tbl %>%
    time_series_split(assess = "12 weeks", cumulative = TRUE)
{% endhighlight %}

Next, visualize the train/test split. 

- `tk_time_series_cv_plan()`: Converts the splits object to a data frame 
- `plot_time_series_cv_plan()`: Plots the time series sampling data using the "date" and "value" columns. 


{% highlight r %}
splits %>%
    tk_time_series_cv_plan() %>%
    plot_time_series_cv_plan(Date, Weekly_Sales, .interactive = FALSE)
{% endhighlight %}

![plot of chunk unnamed-chunk-7](/figure/source/2020-10-13-introducing-modeltime-ensemble/unnamed-chunk-7-1.png)

# Feature Engineering

We'll make a number of ___calendar features___ using `recipes`. Most of the heavy lifting is done by `timetk::step_timeseries_signature()`, which generates a series of common time series features. We remove the ones that won't help. After dummying we have 74 total columns, 72 of which are engineered calendar features.  


{% highlight r %}
recipe_spec <- recipe(Weekly_Sales ~ Date, store_1_1_tbl) %>%
    step_timeseries_signature(Date) %>%
    step_rm(matches("(iso$)|(xts$)|(day)|(hour)|(min)|(sec)|(am.pm)")) %>%
    step_mutate(Date_week = factor(Date_week, ordered = TRUE)) %>%
    step_dummy(all_nominal()) %>%
    step_normalize(contains("index.num"), Date_year)

recipe_spec %>% prep() %>% juice()
{% endhighlight %}



{% highlight text %}
## # A tibble: 143 x 74
##    Date       Weekly_Sales Date_index.num Date_year Date_half Date_quarter
##    <date>            <dbl>          <dbl>     <dbl>     <int>        <int>
##  1 2010-02-05       24924.          -1.71     -1.21         1            1
##  2 2010-02-12       46039.          -1.69     -1.21         1            1
##  3 2010-02-19       41596.          -1.67     -1.21         1            1
##  4 2010-02-26       19404.          -1.64     -1.21         1            1
##  5 2010-03-05       21828.          -1.62     -1.21         1            1
##  6 2010-03-12       21043.          -1.59     -1.21         1            1
##  7 2010-03-19       22137.          -1.57     -1.21         1            1
##  8 2010-03-26       26229.          -1.54     -1.21         1            1
##  9 2010-04-02       57258.          -1.52     -1.21         1            2
## 10 2010-04-09       42961.          -1.50     -1.21         1            2
## # … with 133 more rows, and 68 more variables: Date_month <int>,
## #   Date_mweek <int>, Date_week2 <int>, Date_week3 <int>, Date_week4 <int>,
## #   Date_month.lbl_01 <dbl>, Date_month.lbl_02 <dbl>, Date_month.lbl_03 <dbl>,
## #   Date_month.lbl_04 <dbl>, Date_month.lbl_05 <dbl>, Date_month.lbl_06 <dbl>,
## #   Date_month.lbl_07 <dbl>, Date_month.lbl_08 <dbl>, Date_month.lbl_09 <dbl>,
## #   Date_month.lbl_10 <dbl>, Date_month.lbl_11 <dbl>, Date_week_01 <dbl>,
## #   Date_week_02 <dbl>, Date_week_03 <dbl>, Date_week_04 <dbl>,
## #   Date_week_05 <dbl>, Date_week_06 <dbl>, Date_week_07 <dbl>,
## #   Date_week_08 <dbl>, Date_week_09 <dbl>, Date_week_10 <dbl>,
## #   Date_week_11 <dbl>, Date_week_12 <dbl>, Date_week_13 <dbl>,
## #   Date_week_14 <dbl>, Date_week_15 <dbl>, Date_week_16 <dbl>,
## #   Date_week_17 <dbl>, Date_week_18 <dbl>, Date_week_19 <dbl>,
## #   Date_week_20 <dbl>, Date_week_21 <dbl>, Date_week_22 <dbl>,
## #   Date_week_23 <dbl>, Date_week_24 <dbl>, Date_week_25 <dbl>,
## #   Date_week_26 <dbl>, Date_week_27 <dbl>, Date_week_28 <dbl>,
## #   Date_week_29 <dbl>, Date_week_30 <dbl>, Date_week_31 <dbl>,
## #   Date_week_32 <dbl>, Date_week_33 <dbl>, Date_week_34 <dbl>,
## #   Date_week_35 <dbl>, Date_week_36 <dbl>, Date_week_37 <dbl>,
## #   Date_week_38 <dbl>, Date_week_39 <dbl>, Date_week_40 <dbl>,
## #   Date_week_41 <dbl>, Date_week_42 <dbl>, Date_week_43 <dbl>,
## #   Date_week_44 <dbl>, Date_week_45 <dbl>, Date_week_46 <dbl>,
## #   Date_week_47 <dbl>, Date_week_48 <dbl>, Date_week_49 <dbl>,
## #   Date_week_50 <dbl>, Date_week_51 <dbl>, Date_week_52 <dbl>
{% endhighlight %}


# Make Sub-Models <br><small>Let's make some sub-models with <strong>Modeltime</strong></small>

Now for the fun part! Let's make some models using functions from `modeltime` and `parsnip`. 

### Auto ARIMA

Here's the basic Auto ARIMA Model. 

- __Model Spec: `arima_reg()`__ <-- This sets up your general model algorithm and key parameters
- __Set Engine: `set_engine("auto_arima")`__ <-- This selects the specific package-function to use and you can add any function-level arguments here.
- __Fit Model: `fit(Weekly_Sales ~ Date, training(splits))`__ <-- All Modeltime Models require a date column to be a regressor. 


{% highlight r %}
model_fit_arima <- arima_reg(seasonal_period = 52) %>%
    set_engine("auto_arima") %>%
    fit(Weekly_Sales ~ Date, training(splits))

model_fit_arima
{% endhighlight %}



{% highlight text %}
## parsnip model object
## 
## Fit time:  206ms 
## Series: outcome 
## ARIMA(0,0,1)(0,1,0)[52] 
## 
## Coefficients:
##          ma1
##       0.6704
## s.e.  0.0767
## 
## sigma^2 estimated as 60063672:  log likelihood=-819.37
## AIC=1642.74   AICc=1642.9   BIC=1647.48
{% endhighlight %}


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
wflw_fit_glmnet <- workflow() %>%
    add_model(model_spec_glmnet) %>%
    add_recipe(recipe_spec %>% step_rm(Date)) %>%
    fit(training(splits))
{% endhighlight %}


### XGBoost

We can fit a XGBoost Model using a similar process as the Elastic Net. 


{% highlight r %}
model_spec_xgboost <- boost_tree() %>%
    set_engine("xgboost")

set.seed(123)
wflw_fit_xgboost <- workflow() %>%
    add_model(model_spec_xgboost) %>%
    add_recipe(recipe_spec %>% step_rm(Date)) %>%
    fit(training(splits))
{% endhighlight %}


### NNETAR

We can use a NNETAR model. Note that `add_recipe()` uses the full recipe (with the Date column) because this is a Modeltime Model. 


{% highlight r %}
model_spec_nnetar <- nnetar_reg(
        seasonal_period = 52,
        non_seasonal_ar = 4,
        seasonal_ar     = 1
    ) %>%
    set_engine("nnetar")

set.seed(123)
wflw_fit_nnetar <- workflow() %>%
    add_model(model_spec_nnetar) %>%
    add_recipe(recipe_spec) %>%
    fit(training(splits))
{% endhighlight %}

### Prophet w/ Regressors

We'll build a Prophet Model with Regressors. This uses the Facebook Prophet forecasting algorithm and supplies all of the 72 features as regressors to the model. Note - Because this is a Modeltime Model we need to have a Date Feature in the recipe. 


{% highlight r %}
model_spec_prophet <- prophet_reg(
      seasonality_yearly = TRUE
    ) %>%
    set_engine("prophet") 

wflw_fit_prophet <- workflow() %>%
    add_model(model_spec_prophet) %>%
    add_recipe(recipe_spec) %>%
    fit(training(splits))
{% endhighlight %}





# Sub-Model Evaluation

Let's take a look at our progress so far. We have 5 models. We'll put them into a Modeltime Table to organize them using `modeltime_table()`.


{% highlight r %}
submodels_tbl <- modeltime_table(
    model_fit_arima,
    wflw_fit_glmnet,
    wflw_fit_xgboost,
    wflw_fit_nnetar,
    wflw_fit_prophet
)

submodels_tbl
{% endhighlight %}



{% highlight text %}
## # Modeltime Table
## # A tibble: 5 x 3
##   .model_id .model     .model_desc            
##       <int> <list>     <chr>                  
## 1         1 <fit[+]>   ARIMA(0,0,1)(0,1,0)[52]
## 2         2 <workflow> GLMNET                 
## 3         3 <workflow> XGBOOST                
## 4         4 <workflow> NNAR(4,1,10)[52]       
## 5         5 <workflow> PROPHET W/ REGRESSORS
{% endhighlight %}

We can get the accuracy on the hold-out set using `modeltime_accuracy()` and `table_modeltime_accuracy()`. The best model is the Prophet with Regressors with a MAE of 1031.


{% highlight r %}
submodels_tbl %>% 
    modeltime_accuracy(testing(splits)) %>%
    table_modeltime_accuracy(.interactive = FALSE)
{% endhighlight %}

<!--html_preserve--><style>html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', 'Fira Sans', 'Droid Sans', Arial, sans-serif;
}

#xknakfojlc .gt_table {
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

#xknakfojlc .gt_heading {
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

#xknakfojlc .gt_title {
  color: #333333;
  font-size: 125%;
  font-weight: initial;
  padding-top: 4px;
  padding-bottom: 4px;
  border-bottom-color: #FFFFFF;
  border-bottom-width: 0;
}

#xknakfojlc .gt_subtitle {
  color: #333333;
  font-size: 85%;
  font-weight: initial;
  padding-top: 0;
  padding-bottom: 4px;
  border-top-color: #FFFFFF;
  border-top-width: 0;
}

#xknakfojlc .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}

#xknakfojlc .gt_col_headings {
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

#xknakfojlc .gt_col_heading {
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

#xknakfojlc .gt_column_spanner_outer {
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

#xknakfojlc .gt_column_spanner_outer:first-child {
  padding-left: 0;
}

#xknakfojlc .gt_column_spanner_outer:last-child {
  padding-right: 0;
}

#xknakfojlc .gt_column_spanner {
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

#xknakfojlc .gt_group_heading {
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

#xknakfojlc .gt_empty_group_heading {
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

#xknakfojlc .gt_from_md > :first-child {
  margin-top: 0;
}

#xknakfojlc .gt_from_md > :last-child {
  margin-bottom: 0;
}

#xknakfojlc .gt_row {
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

#xknakfojlc .gt_stub {
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

#xknakfojlc .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

#xknakfojlc .gt_first_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
}

#xknakfojlc .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

#xknakfojlc .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}

#xknakfojlc .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}

#xknakfojlc .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}

#xknakfojlc .gt_footnotes {
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

#xknakfojlc .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding: 4px;
}

#xknakfojlc .gt_sourcenotes {
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

#xknakfojlc .gt_sourcenote {
  font-size: 90%;
  padding: 4px;
}

#xknakfojlc .gt_left {
  text-align: left;
}

#xknakfojlc .gt_center {
  text-align: center;
}

#xknakfojlc .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}

#xknakfojlc .gt_font_normal {
  font-weight: normal;
}

#xknakfojlc .gt_font_bold {
  font-weight: bold;
}

#xknakfojlc .gt_font_italic {
  font-style: italic;
}

#xknakfojlc .gt_super {
  font-size: 65%;
}

#xknakfojlc .gt_footnote_marks {
  font-style: italic;
  font-size: 65%;
}
</style>
<div id="xknakfojlc" style="overflow-x:auto;overflow-y:auto;width:auto;height:auto;"><table class="gt_table">
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
      <td class="gt_row gt_left">ARIMA(0,0,1)(0,1,0)[52]</td>
      <td class="gt_row gt_left">Test</td>
      <td class="gt_row gt_right">1359.99</td>
      <td class="gt_row gt_right">6.77</td>
      <td class="gt_row gt_right">1.02</td>
      <td class="gt_row gt_right">6.93</td>
      <td class="gt_row gt_right">1721.47</td>
      <td class="gt_row gt_right">0.95</td>
    </tr>
    <tr>
      <td class="gt_row gt_center">2</td>
      <td class="gt_row gt_left">GLMNET</td>
      <td class="gt_row gt_left">Test</td>
      <td class="gt_row gt_right">1222.38</td>
      <td class="gt_row gt_right">6.47</td>
      <td class="gt_row gt_right">0.91</td>
      <td class="gt_row gt_right">6.73</td>
      <td class="gt_row gt_right">1349.88</td>
      <td class="gt_row gt_right">0.98</td>
    </tr>
    <tr>
      <td class="gt_row gt_center">3</td>
      <td class="gt_row gt_left">XGBOOST</td>
      <td class="gt_row gt_left">Test</td>
      <td class="gt_row gt_right">1089.56</td>
      <td class="gt_row gt_right">5.22</td>
      <td class="gt_row gt_right">0.82</td>
      <td class="gt_row gt_right">5.20</td>
      <td class="gt_row gt_right">1266.62</td>
      <td class="gt_row gt_right">0.96</td>
    </tr>
    <tr>
      <td class="gt_row gt_center">4</td>
      <td class="gt_row gt_left">NNAR(4,1,10)[52]</td>
      <td class="gt_row gt_left">Test</td>
      <td class="gt_row gt_right">2529.92</td>
      <td class="gt_row gt_right">11.68</td>
      <td class="gt_row gt_right">1.89</td>
      <td class="gt_row gt_right">10.73</td>
      <td class="gt_row gt_right">3507.55</td>
      <td class="gt_row gt_right">0.93</td>
    </tr>
    <tr>
      <td class="gt_row gt_center">5</td>
      <td class="gt_row gt_left">PROPHET W/ REGRESSORS</td>
      <td class="gt_row gt_left">Test</td>
      <td class="gt_row gt_right">1031.53</td>
      <td class="gt_row gt_right">5.13</td>
      <td class="gt_row gt_right">0.77</td>
      <td class="gt_row gt_right">5.22</td>
      <td class="gt_row gt_right">1226.80</td>
      <td class="gt_row gt_right">0.98</td>
    </tr>
  </tbody>
  
  
</table></div><!--/html_preserve-->

And, we can visualize the forecasts with `modeltime_forecast()` and `plot_modeltime_forecast()`.


{% highlight r %}
submodels_tbl %>%
    modeltime_forecast(
        new_data    = testing(splits),
        actual_data = store_1_1_tbl
    ) %>%
    plot_modeltime_forecast(.interactive = FALSE)
{% endhighlight %}

![plot of chunk unnamed-chunk-17](/figure/source/2020-10-13-introducing-modeltime-ensemble/unnamed-chunk-17-1.png)


# Build Modeltime Ensembles <br><small>This is <strong>exciting.</strong></small>

__We'll make Average, Median, and Weighted Ensembles.__ If you are interested in making Super Learners (Meta-Learner Models that leverage sub-model predictions), I teach this in my new [__High-Performance Time Series course__](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting/). 

I've made it super simple to build an ensemble from a Modeltime Tables. Here's how to use `ensemble_average()`. 

- Start with your Modeltime Table of Sub-Models
- Pipe into `ensemble_average(type = "mean")`

You now have a fitted average ensemble. 


{% highlight r %}
# Simple Average Ensemble
ensemble_fit_avg <- submodels_tbl %>%
    ensemble_average(type = "mean")

ensemble_fit_avg
{% endhighlight %}



{% highlight text %}
## ── Modeltime Ensemble ───────────────────────────────────────────
## Ensemble of 5 Models (MEAN)
## 
## # Modeltime Table
## # A tibble: 5 x 3
##   .model_id .model     .model_desc            
##       <int> <list>     <chr>                  
## 1         1 <fit[+]>   ARIMA(0,0,1)(0,1,0)[52]
## 2         2 <workflow> GLMNET                 
## 3         3 <workflow> XGBOOST                
## 4         4 <workflow> NNAR(4,1,10)[52]       
## 5         5 <workflow> PROPHET W/ REGRESSORS
{% endhighlight %}

We can make median and weighted ensembles just as easily. Note - For the weighted ensemble I'm loading the better performing models higher. 


{% highlight r %}
# Simple Median Ensemble
ensemble_fit_med <- submodels_tbl %>%
    ensemble_average("median")

# Higher Loading on Better Models (Test RMSE)
ensemble_fit_wt <- submodels_tbl %>%
    ensemble_weighted(loadings = c(2, 4, 6, 1, 6))
{% endhighlight %}

# Ensemble Evaluation <br><small>Let's see how we did</small>

We need to have Modeltime Tables that organize our ensembles before we can assess performance. Just use `modeltime_table()` to organize ensembles just like we did for the Sub-Models. 


{% highlight r %}
ensemble_models_tbl <- modeltime_table(
    ensemble_fit_avg,
    ensemble_fit_med,
    ensemble_fit_wt
)

ensemble_models_tbl
{% endhighlight %}



{% highlight text %}
## # Modeltime Table
## # A tibble: 3 x 3
##   .model_id .model         .model_desc                  
##       <int> <list>         <chr>                        
## 1         1 <ensemble [5]> ENSEMBLE (MEAN): 5 MODELS    
## 2         2 <ensemble [5]> ENSEMBLE (MEDIAN): 5 MODELS  
## 3         3 <ensemble [5]> ENSEMBLE (WEIGHTED): 5 MODELS
{% endhighlight %}

Let's check out the Accuracy Table using `modeltime_accuracy()` and `table_modeltime_accuracy()`. 

- From MAE, Ensemble Model ID 1 has 1000 MAE, __a 3% improvement__ over our best submodel (MAE 1031). 
- From RMSE, Ensemble Model ID 3 has 1228, which is on par with our best submodel.


{% highlight r %}
ensemble_models_tbl %>%
    modeltime_accuracy(testing(splits)) %>%
    table_modeltime_accuracy(.interactive = FALSE)
{% endhighlight %}

<!--html_preserve--><style>html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', 'Fira Sans', 'Droid Sans', Arial, sans-serif;
}

#cdaqgjoslc .gt_table {
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

#cdaqgjoslc .gt_heading {
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

#cdaqgjoslc .gt_title {
  color: #333333;
  font-size: 125%;
  font-weight: initial;
  padding-top: 4px;
  padding-bottom: 4px;
  border-bottom-color: #FFFFFF;
  border-bottom-width: 0;
}

#cdaqgjoslc .gt_subtitle {
  color: #333333;
  font-size: 85%;
  font-weight: initial;
  padding-top: 0;
  padding-bottom: 4px;
  border-top-color: #FFFFFF;
  border-top-width: 0;
}

#cdaqgjoslc .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}

#cdaqgjoslc .gt_col_headings {
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

#cdaqgjoslc .gt_col_heading {
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

#cdaqgjoslc .gt_column_spanner_outer {
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

#cdaqgjoslc .gt_column_spanner_outer:first-child {
  padding-left: 0;
}

#cdaqgjoslc .gt_column_spanner_outer:last-child {
  padding-right: 0;
}

#cdaqgjoslc .gt_column_spanner {
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

#cdaqgjoslc .gt_group_heading {
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

#cdaqgjoslc .gt_empty_group_heading {
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

#cdaqgjoslc .gt_from_md > :first-child {
  margin-top: 0;
}

#cdaqgjoslc .gt_from_md > :last-child {
  margin-bottom: 0;
}

#cdaqgjoslc .gt_row {
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

#cdaqgjoslc .gt_stub {
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

#cdaqgjoslc .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

#cdaqgjoslc .gt_first_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
}

#cdaqgjoslc .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

#cdaqgjoslc .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}

#cdaqgjoslc .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}

#cdaqgjoslc .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}

#cdaqgjoslc .gt_footnotes {
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

#cdaqgjoslc .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding: 4px;
}

#cdaqgjoslc .gt_sourcenotes {
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

#cdaqgjoslc .gt_sourcenote {
  font-size: 90%;
  padding: 4px;
}

#cdaqgjoslc .gt_left {
  text-align: left;
}

#cdaqgjoslc .gt_center {
  text-align: center;
}

#cdaqgjoslc .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}

#cdaqgjoslc .gt_font_normal {
  font-weight: normal;
}

#cdaqgjoslc .gt_font_bold {
  font-weight: bold;
}

#cdaqgjoslc .gt_font_italic {
  font-style: italic;
}

#cdaqgjoslc .gt_super {
  font-size: 65%;
}

#cdaqgjoslc .gt_footnote_marks {
  font-style: italic;
  font-size: 65%;
}
</style>
<div id="cdaqgjoslc" style="overflow-x:auto;overflow-y:auto;width:auto;height:auto;"><table class="gt_table">
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
      <td class="gt_row gt_left">ENSEMBLE (MEAN): 5 MODELS</td>
      <td class="gt_row gt_left">Test</td>
      <td class="gt_row gt_right">1000.01</td>
      <td class="gt_row gt_right">4.63</td>
      <td class="gt_row gt_right">0.75</td>
      <td class="gt_row gt_right">4.58</td>
      <td class="gt_row gt_right">1408.68</td>
      <td class="gt_row gt_right">0.97</td>
    </tr>
    <tr>
      <td class="gt_row gt_center">2</td>
      <td class="gt_row gt_left">ENSEMBLE (MEDIAN): 5 MODELS</td>
      <td class="gt_row gt_left">Test</td>
      <td class="gt_row gt_right">1146.60</td>
      <td class="gt_row gt_right">5.68</td>
      <td class="gt_row gt_right">0.86</td>
      <td class="gt_row gt_right">5.77</td>
      <td class="gt_row gt_right">1310.30</td>
      <td class="gt_row gt_right">0.98</td>
    </tr>
    <tr>
      <td class="gt_row gt_center">3</td>
      <td class="gt_row gt_left">ENSEMBLE (WEIGHTED): 5 MODELS</td>
      <td class="gt_row gt_left">Test</td>
      <td class="gt_row gt_right">1056.59</td>
      <td class="gt_row gt_right">5.15</td>
      <td class="gt_row gt_right">0.79</td>
      <td class="gt_row gt_right">5.20</td>
      <td class="gt_row gt_right">1228.45</td>
      <td class="gt_row gt_right">0.98</td>
    </tr>
  </tbody>
  
  
</table></div><!--/html_preserve-->

And finally we can visualize the performance of the ensembles. 


{% highlight r %}
ensemble_models_tbl %>%
    modeltime_forecast(
        new_data    = testing(splits),
        actual_data = store_1_1_tbl
    ) %>%
    plot_modeltime_forecast(.interactive = FALSE)
{% endhighlight %}

![plot of chunk unnamed-chunk-22](/figure/source/2020-10-13-introducing-modeltime-ensemble/unnamed-chunk-22-1.png)




# It gets better<br><small>You've just scratched the surface, here's what's coming...</small>

The `modeltime.ensemble` package functionality is much more feature-rich than what we've covered here (I couldn't possibly cover everything in this post). 😀

Here's what I didn't cover:

- __Scalable Forecasting with Ensembles__: What happens when your data has more than one time series. This is called scalable forecasting, and we need to use special techniques to ensemble these models. 

- __Stacked Super-Learners:__ We can make use resample predictions from our sub-models as inputs to a meta-learner. This can result is significantly better accuracy (5% improvement is what we achieve in my Time Series Course).   

- __Multi-Level Stacking:__ This is the strategy that won the Grupo Bimbo Inventory Demand Forecasting Challenge where multiple layers of ensembles are used.

- __Refitting Sub-Models and Meta-Learners:__ Refitting is special task that is needed prior to forecasting future data. Refitting requires careful attention to control the sub-model and meta-learner retraining process. 

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

# Have questions about Modeltime Ensemble?

Make a comment in the chat below. 👇

And, if you plan on using `modeltime.ensemble` for your business, it's a no-brainer - [Take my Time Series Course](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting). 

{% include cta_rtrack.html %}

<br>
