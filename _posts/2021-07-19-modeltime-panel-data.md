---
layout: post
title: "Forecasting Many Time Series (Using NO For-Loops)"
date:   2021-07-19 06:01:01
excerpt: "I'm super excited to introduce the new panel data forecasting functionality in modeltime. It's perfect for making many forecasts at once without for-loops."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-Timeseries, Learn-Machine-Learning, R, modeltime, parallel processing]
image: 2021-07-19-panel-data/say_no_to_for_loops_forecasting.jpg
image_preview: 2021-07-19-panel-data/say_no_to_for_loops_forecasting.jpg
---

Spending too much time on making iterative forecasts? I'm __super excited__ to introduce the new panel data forecasting functionality in `modeltime`. It's perfect for forecasting many time series at once without for-loops saving you time ⏱️ and aggravation 😞.  <span style="color:red">__Just say NO to for-loops for forecasting.__</span>

<div class="pull-right" style="width:60%; margin-left:20px; margin-bottom:20px;">
  <a href="#" target="_blank">
  <img class="img-responsive" style="border:none !important;" src="/assets/2021-07-19-panel-data/say_no_to_for_loops_forecasting.jpg">
  </a>
</div>


__Fitting many time series can be an expensive process.__ The most widely-accepted technique is to iteratively run an ARIMA model on each time series in a for-loop. 

__Times are changing.__ Organizations now need 1000's of forecasts. Think 1000s of customers, products, and complex hierarchical data. 

In this tutorial: 

1. We'll explain __new techniques__ involving Global Models and Panel Data for dealing with many time series. 

2. We'll then provide an __introductory tutorial__ using `modeltime` 0.7.0 new features (now available on CRAN 🎉) for modeling time series as Panel Data to make forecasts without for-loops. 

First, here's a quick overview of the Modeltime Forecasting Ecosystem that unlocks `tidymodels` (similar to scikit learn but in R). 

<!--
Before we move on, what if I want to __learn more__ in-depth forecasting training with Modeltime? 👇


# Free Forecasting Training!

I can't possibly go over all of the new modeltime features released in 0.7.0 in this tutorial. If you would like to learn more about the new features in `modeltime` 0.7.0, I'm hosting a [__free live webinar__](https://bit.ly/lab60-torch) on on Wednesday July, 28th at 2PM EST. I'll cover: 

- Deep Learning (Torch Integration)
- Global Models
- Panel Data Forecasting
- New Modeltime Features
- And, a lot of `code` 

<p style="font-size:36px;text-align:center;">
<a href="https://bit.ly/lab60-torch" target="_blank">👉 Register Here.</a>
</p>
-->

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

# Problem: Forecasting with For-Loops is <span style='color:red'>Not Scalable</span>

__Time series data is increasing at an exponential rate.__ Organization-wide forecasting demands have changed from top-level to bottom-level forecasting, which has increased the number of forecasts that need to be made from the range of 1-100 to the range of 1,000-10,000. 

Think of forecasting by customer for an organization that has __10,000 customers__. It becomes a _challenge_ to make these forecasts one at a time in an iterative approach. As that organization grows, moving from 10,000 to 100,000 customers, <span style='color:red;'>__forecasting with an iterative approach is not scalable.__</span>

__Modeltime__ has been designed to take a different approach using __Panel Data and Global Models__ (more on these concepts shortly). Using these approaches, we can dramatically increase the scale at which forecasts can be made. Prior limitations in the range of 1,000 to 10,000 forecasts become managable. Beyond is also possible with clustering techniques and making several panel models. __We are only limited by RAM, not modeling time.__ 

Before we move on, we need to cover __two key concepts:__ 

1. Panel Data
2. Global Models

# What are Panel Data and Global Models?

In it's simplest form, __Panel Data__ is a time series dataset that has more than one series. Each time series is stacked row-wise (on-top) of each other. 

![Panel Data](/assets/2021-07-19-panel-data/panel_data.jpg)

<p class="text-center date">The Panel Data Time Series Format</p>


__Traditional modeling techniques like ARIMA__ can only be used on one time series at a time. The widely accepted forecasting approach is to iterate through each time series producing a unique model and forecast for each time series identifier. The downside with this approach is that it's expensive when you have many time series. Think of the number of products in a database. As the number of time series approaches the range of 1000-10,000, __the iterative approach becomes <span style='color:red'>unscalable</span> as for-loops run endlessly and errors can grind your analysis to a hault.__ 

![Panel Data](/assets/2021-07-19-panel-data/panel_data_arima.jpg)
<p class="text-center date">Problem: 1000 ARIMA Models Needed for 1000 Time Series</p>


__Global Models__ are alternatives to the iterative approach. A Global Model is a single model that forecasts all time series at once. Global Models are highly scalable, which solves the problem of 1-10,000 time series. An example is an XGBoost Model, which can determine relationships for all 1000 time series panels with a single model. __This is great: No For-Loops!__


![Panel Data](/assets/2021-07-19-panel-data/panel_data_xgboost.jpg)
<p class="text-center date">Solution: A Single XGBOOST Model can Model 1000 Time Series leaves you waiting for hours ⏳...</p>


The downside is that an global model approach can be less accurate than the iterative approach. To improve accuracy, __feature engineering and localized model selection__ by time series identifier become critical to large-scale forecasting success. If interested, I teach proven feature engineering techniques in my [Time Series Forecasting Course](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting/). 




# Say No to For-Loops

If you're tired of waiting for ARIMA models to finish, then maybe it's time to __say NO to for-loops__ and give `modeltime` a try. 

![Forecasting without For-Loops](/assets/2021-07-19-panel-data/say_no_to_for_loops_forecasting.jpg)

<p class="text-center date">Forecast using Global Models and Panel Data with Modeltime for a 1000X Speed-up</p>

While Modeltime [can perform iterative modeling](https://rafzamb.github.io/sknifedatar/articles/workflowsets_multi_times.html), Modeltime excels at __forecasting at scale without For-Loops__ using:

- __Global Modeling:__ Global model Machine Learning and Deep Learning strategies using the Modeltime Ecosystem (e.g. `modeltime`, `modeltime.h2o`, and `modeltime.gluonts`). 

- __Panel Data:__ Tidy data that is easy to work with if you are familiar with the `tidyverse` and `tidymodels`. 

- __Feature Engineering__: Developing calendar features, lagged features, and other time-based, window-based, and sequence-based features using `timetk`. 

- __Multi-Forecast Visualization__: Visualizing multiple local time series forecasts at once.

- __Global and Localized Accuracy Reporting__: Generating out-of-sample accuracy both globally and at a local level by time series identifier (available in `modeltime` >= 0.7.0)

- __Global and Localized Confidence Intervals Reporting__: Generating out-of-sample confidence intervals both globally and at a local level by time series identifier (available in `modeltime` >= 0.7.0)

Once you learn these concepts, you can achieve __speed-ups of 1000X or more.__ We'll showcase several of these features in our tutorial on forecasting many time series without for-loops. 

# Tutorial on Forecasting Many Time Series (Without For-Loops)

We'll cover a short tutorial on Forecasting Many Time Series (Without For-Loops). 

![Forecast](/figure/source/2021-07-19-modeltime-panel-data/unnamed-chunk-11-1.png)

## Load Libraries

First, load the following libraries. 


{% highlight r %}
library(tidymodels)
library(modeltime)
library(tidyverse)
library(timetk)
{% endhighlight %}

## Collect data

Next, collect the `walmart_sales_weekly` dataset. The dataset consists of 1001 observations of revenue generated by a store-department combination on any given week. It contains:

- __7 Time Series Groups__ denoted by the "ID" column
- The data is structured in __Panel Data__ format
- The time series groups will be modeled with a single __Global Model__


{% highlight r %}
data <- walmart_sales_weekly %>% 
    select(id, Date, Weekly_Sales) %>%
    set_names(c("ID", "date", "value"))

data
{% endhighlight %}



{% highlight text %}
## # A tibble: 1,001 x 3
##    ID    date        value
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

## Visualize the Data

From visualizing, the weekly department revenue patterns emerge. Most of the series have yearly seasonality and long-term trends. 


{% highlight r %}
data %>%
  group_by(ID) %>%
  plot_time_series(
    .date_var    = date, 
    .value       = value,
    .facet_ncol  = 3,
    .interactive = FALSE
  )
{% endhighlight %}

![Time Series Plot](/figure/source/2021-07-19-modeltime-panel-data/unnamed-chunk-3-1.png)

## Train/Test Splitting

We can split the data into training and testing sets using `time_series_split()`. We'll investigate the last 3-months of the year to test a global model on a 3-month forecast. The message on overlapping dates is to let us know that multiple time series are being processed using the last 3-month window for testing. 


{% highlight r %}
splits <- data %>% time_series_split(assess = "3 months", cumulative = TRUE)
{% endhighlight %}



{% highlight text %}
## Using date_var: date
## Data is not ordered by the 'date_var'. Resamples will be arranged by `date`.
## Overlapping Timestamps Detected. Processing overlapping time series together using sliding windows.
{% endhighlight %}



{% highlight r %}
splits
{% endhighlight %}



{% highlight text %}
## <Analysis/Assess/Total>
## <917/84/1001>
{% endhighlight %}

## Feature Engineering (Recipe)

We can move to preprocessing the data. We will use the `recipes` workflow for generating time series features. 

- This results in 37 derived features for modeling. 

- We can certainly include more features such as lags and rolling features, which are covered in the [High-Performance Time Series Course](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting/).


{% highlight r %}
rec_obj <- recipe(value ~ ., training(splits)) %>%
    step_mutate(ID = droplevels(ID)) %>%
    step_timeseries_signature(date) %>%
    step_rm(date) %>%
    step_zv(all_predictors()) %>%
    step_dummy(all_nominal_predictors(), one_hot = TRUE)

summary(prep(rec_obj))
{% endhighlight %}



{% highlight text %}
## # A tibble: 38 x 4
##    variable       type    role      source  
##    <chr>          <chr>   <chr>     <chr>   
##  1 value          numeric outcome   original
##  2 date_index.num numeric predictor derived 
##  3 date_year      numeric predictor derived 
##  4 date_year.iso  numeric predictor derived 
##  5 date_half      numeric predictor derived 
##  6 date_quarter   numeric predictor derived 
##  7 date_month     numeric predictor derived 
##  8 date_month.xts numeric predictor derived 
##  9 date_day       numeric predictor derived 
## 10 date_mday      numeric predictor derived 
## # … with 28 more rows
{% endhighlight %}

## Machine Learning 

We'll create an `xgboost` workflow by fitting the default xgboost model to our derived features from our in-sample training data set. 

- We create a __Global XGBOOST Model__, a single model that forecasts all of our time series

- Training the global xgboost model takes __approximately 50 milliseconds__. 

- Conversely, an ARIMA model might take __several minutes__ to iterate through possible parameter combinations for each of the 7 time series. 

- Global modeling  is a __1000X speedup.__ 


{% highlight r %}
# Workflow
wflw_xgb <- workflow() %>%
    add_model(
        boost_tree() %>% set_engine("xgboost")
    ) %>%
    add_recipe(rec_obj) %>%
    fit(training(splits))

wflw_xgb
{% endhighlight %}



{% highlight text %}
## ══ Workflow [trained] ══════════════════════════════════════════════════════════
## Preprocessor: Recipe
## Model: boost_tree()
## 
## ── Preprocessor ────────────────────────────────────────────────────────────────
## 5 Recipe Steps
## 
## • step_mutate()
## • step_timeseries_signature()
## • step_rm()
## • step_zv()
## • step_dummy()
## 
## ── Model ───────────────────────────────────────────────────────────────────────
## ##### xgb.Booster
## raw: 58.3 Kb 
## call:
##   xgboost::xgb.train(params = list(eta = 0.3, max_depth = 6, gamma = 0, 
##     colsample_bytree = 1, colsample_bynode = 1, min_child_weight = 1, 
##     subsample = 1, objective = "reg:squarederror"), data = x$data, 
##     nrounds = 15, watchlist = x$watchlist, verbose = 0, nthread = 1)
## params (as set within xgb.train):
##   eta = "0.3", max_depth = "6", gamma = "0", colsample_bytree = "1", colsample_bynode = "1", min_child_weight = "1", subsample = "1", objective = "reg:squarederror", nthread = "1", validate_parameters = "TRUE"
## xgb.attributes:
##   niter
## callbacks:
##   cb.evaluation.log()
## # of features: 37 
## niter: 15
## nfeatures : 37 
## evaluation_log:
##     iter training_rmse
##        1     46315.141
##        2     33001.734
## ---                   
##       14      3676.542
##       15      3373.945
{% endhighlight %}

## Modeltime Workflow

We'll step through the modeltime workflow, which is used to test many different models on the time series and organize the entire process. 



### Create a Modeltime Table

First, we create a __Modeltime Table__ using `modeltime_table()`. The Modeltime Table organizes our model(s). We can even add more models if we'd like, and each model will get an ID (.model_id) and description (.model_desc).

{% highlight r %}
model_tbl <- modeltime_table(
    wflw_xgb
)

model_tbl
{% endhighlight %}



{% highlight text %}
## # Modeltime Table
## # A tibble: 1 x 3
##   .model_id .model     .model_desc
##       <int> <list>     <chr>      
## 1         1 <workflow> XGBOOST
{% endhighlight %}

### Calibrate by ID

Next, we calibrate. __Calibration__ calculates the out of sample residual error.A new feature in `modeltime` 0.7.0 is the ability to calibrate by each time series.  


{% highlight r %}
calib_tbl <- model_tbl %>%
    modeltime_calibrate(
      new_data = testing(splits), 
      id       = "ID"
    )

calib_tbl
{% endhighlight %}



{% highlight text %}
## # Modeltime Table
## # A tibble: 1 x 5
##   .model_id .model     .model_desc .type .calibration_data
##       <int> <list>     <chr>       <chr> <list>           
## 1         1 <workflow> XGBOOST     Test  <tibble [84 × 5]>
{% endhighlight %}

## Measure Accuracy

Next, we measure the global and local accuracy on the global model. 

### Global Accuracy

__Global Accuracy__ is the overall accuracy of the test forecasts, which simply returns an aggregated error without taking into account that there are multiple time series. The default is `modeltime_accuracy(acc_by_id = FALSE)`, which returns a global model accuracy. 


{% highlight r %}
calib_tbl %>% 
    modeltime_accuracy(acc_by_id = FALSE) %>% 
    table_modeltime_accuracy(.interactive = FALSE)
{% endhighlight %}

<!--html_preserve--><div id="zvdtbotode" style="overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', 'Fira Sans', 'Droid Sans', Arial, sans-serif;
}

#zvdtbotode .gt_table {
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

#zvdtbotode .gt_heading {
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

#zvdtbotode .gt_title {
  color: #333333;
  font-size: 125%;
  font-weight: initial;
  padding-top: 4px;
  padding-bottom: 4px;
  border-bottom-color: #FFFFFF;
  border-bottom-width: 0;
}

#zvdtbotode .gt_subtitle {
  color: #333333;
  font-size: 85%;
  font-weight: initial;
  padding-top: 0;
  padding-bottom: 4px;
  border-top-color: #FFFFFF;
  border-top-width: 0;
}

#zvdtbotode .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}

#zvdtbotode .gt_col_headings {
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

#zvdtbotode .gt_col_heading {
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

#zvdtbotode .gt_column_spanner_outer {
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

#zvdtbotode .gt_column_spanner_outer:first-child {
  padding-left: 0;
}

#zvdtbotode .gt_column_spanner_outer:last-child {
  padding-right: 0;
}

#zvdtbotode .gt_column_spanner {
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

#zvdtbotode .gt_group_heading {
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

#zvdtbotode .gt_empty_group_heading {
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

#zvdtbotode .gt_from_md > :first-child {
  margin-top: 0;
}

#zvdtbotode .gt_from_md > :last-child {
  margin-bottom: 0;
}

#zvdtbotode .gt_row {
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

#zvdtbotode .gt_stub {
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

#zvdtbotode .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

#zvdtbotode .gt_first_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
}

#zvdtbotode .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

#zvdtbotode .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}

#zvdtbotode .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}

#zvdtbotode .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}

#zvdtbotode .gt_footnotes {
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

#zvdtbotode .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding: 4px;
}

#zvdtbotode .gt_sourcenotes {
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

#zvdtbotode .gt_sourcenote {
  font-size: 90%;
  padding: 4px;
}

#zvdtbotode .gt_left {
  text-align: left;
}

#zvdtbotode .gt_center {
  text-align: center;
}

#zvdtbotode .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}

#zvdtbotode .gt_font_normal {
  font-weight: normal;
}

#zvdtbotode .gt_font_bold {
  font-weight: bold;
}

#zvdtbotode .gt_font_italic {
  font-style: italic;
}

#zvdtbotode .gt_super {
  font-size: 65%;
}

#zvdtbotode .gt_footnote_marks {
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
<td class="gt_row gt_right">3254.56</td>
<td class="gt_row gt_right">7.19</td>
<td class="gt_row gt_right">0.1</td>
<td class="gt_row gt_right">7</td>
<td class="gt_row gt_right">4574.52</td>
<td class="gt_row gt_right">0.98</td></tr>
  </tbody>
  
  
</table>
</div><!--/html_preserve-->

### Local Accuracy

The __drawback with the global accuracy__ is that the model may not perform well on specific time series. By toggling `modeltime_accuracy(acc_by_id = TRUE)`, we can obtain the __Local Accuracy__, which is the accuracy that the model has on each of the time series groups. This can be useful for identifying specifically which time series the model does well on (and which it does poorly on). We can then __apply model selection logic__ to select specific global models for specific IDs. 


{% highlight r %}
calib_tbl %>% 
    modeltime_accuracy(acc_by_id = TRUE) %>% 
    table_modeltime_accuracy(.interactive = FALSE)
{% endhighlight %}

<!--html_preserve--><div id="zmwsxwhwmc" style="overflow-x:auto;overflow-y:auto;width:auto;height:auto;">
<style>html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', 'Fira Sans', 'Droid Sans', Arial, sans-serif;
}

#zmwsxwhwmc .gt_table {
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

#zmwsxwhwmc .gt_heading {
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

#zmwsxwhwmc .gt_title {
  color: #333333;
  font-size: 125%;
  font-weight: initial;
  padding-top: 4px;
  padding-bottom: 4px;
  border-bottom-color: #FFFFFF;
  border-bottom-width: 0;
}

#zmwsxwhwmc .gt_subtitle {
  color: #333333;
  font-size: 85%;
  font-weight: initial;
  padding-top: 0;
  padding-bottom: 4px;
  border-top-color: #FFFFFF;
  border-top-width: 0;
}

#zmwsxwhwmc .gt_bottom_border {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}

#zmwsxwhwmc .gt_col_headings {
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

#zmwsxwhwmc .gt_col_heading {
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

#zmwsxwhwmc .gt_column_spanner_outer {
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

#zmwsxwhwmc .gt_column_spanner_outer:first-child {
  padding-left: 0;
}

#zmwsxwhwmc .gt_column_spanner_outer:last-child {
  padding-right: 0;
}

#zmwsxwhwmc .gt_column_spanner {
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

#zmwsxwhwmc .gt_group_heading {
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

#zmwsxwhwmc .gt_empty_group_heading {
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

#zmwsxwhwmc .gt_from_md > :first-child {
  margin-top: 0;
}

#zmwsxwhwmc .gt_from_md > :last-child {
  margin-bottom: 0;
}

#zmwsxwhwmc .gt_row {
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

#zmwsxwhwmc .gt_stub {
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

#zmwsxwhwmc .gt_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

#zmwsxwhwmc .gt_first_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
}

#zmwsxwhwmc .gt_grand_summary_row {
  color: #333333;
  background-color: #FFFFFF;
  text-transform: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

#zmwsxwhwmc .gt_first_grand_summary_row {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-top-style: double;
  border-top-width: 6px;
  border-top-color: #D3D3D3;
}

#zmwsxwhwmc .gt_striped {
  background-color: rgba(128, 128, 128, 0.05);
}

#zmwsxwhwmc .gt_table_body {
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: #D3D3D3;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #D3D3D3;
}

#zmwsxwhwmc .gt_footnotes {
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

#zmwsxwhwmc .gt_footnote {
  margin: 0px;
  font-size: 90%;
  padding: 4px;
}

#zmwsxwhwmc .gt_sourcenotes {
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

#zmwsxwhwmc .gt_sourcenote {
  font-size: 90%;
  padding: 4px;
}

#zmwsxwhwmc .gt_left {
  text-align: left;
}

#zmwsxwhwmc .gt_center {
  text-align: center;
}

#zmwsxwhwmc .gt_right {
  text-align: right;
  font-variant-numeric: tabular-nums;
}

#zmwsxwhwmc .gt_font_normal {
  font-weight: normal;
}

#zmwsxwhwmc .gt_font_bold {
  font-weight: bold;
}

#zmwsxwhwmc .gt_font_italic {
  font-style: italic;
}

#zmwsxwhwmc .gt_super {
  font-size: 65%;
}

#zmwsxwhwmc .gt_footnote_marks {
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
      <th class="gt_col_heading gt_columns_bottom_border gt_right" rowspan="1" colspan="1">.model_id</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1">.model_desc</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_left" rowspan="1" colspan="1">.type</th>
      <th class="gt_col_heading gt_columns_bottom_border gt_center" rowspan="1" colspan="1">ID</th>
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
<td class="gt_row gt_center">1_1</td>
<td class="gt_row gt_right">1138.25</td>
<td class="gt_row gt_right">6.19</td>
<td class="gt_row gt_right">0.85</td>
<td class="gt_row gt_right">5.93</td>
<td class="gt_row gt_right">1454.25</td>
<td class="gt_row gt_right">0.95</td></tr>
    <tr><td class="gt_row gt_right">1</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_center">1_3</td>
<td class="gt_row gt_right">3403.81</td>
<td class="gt_row gt_right">18.47</td>
<td class="gt_row gt_right">0.57</td>
<td class="gt_row gt_right">16.96</td>
<td class="gt_row gt_right">4209.29</td>
<td class="gt_row gt_right">0.91</td></tr>
    <tr><td class="gt_row gt_right">1</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_center">1_8</td>
<td class="gt_row gt_right">1891.35</td>
<td class="gt_row gt_right">4.93</td>
<td class="gt_row gt_right">0.86</td>
<td class="gt_row gt_right">5.07</td>
<td class="gt_row gt_right">2157.43</td>
<td class="gt_row gt_right">0.55</td></tr>
    <tr><td class="gt_row gt_right">1</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_center">1_13</td>
<td class="gt_row gt_right">1201.11</td>
<td class="gt_row gt_right">2.92</td>
<td class="gt_row gt_right">0.53</td>
<td class="gt_row gt_right">2.97</td>
<td class="gt_row gt_right">1461.49</td>
<td class="gt_row gt_right">0.60</td></tr>
    <tr><td class="gt_row gt_right">1</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_center">1_38</td>
<td class="gt_row gt_right">8036.27</td>
<td class="gt_row gt_right">10.52</td>
<td class="gt_row gt_right">0.99</td>
<td class="gt_row gt_right">10.64</td>
<td class="gt_row gt_right">8955.32</td>
<td class="gt_row gt_right">0.02</td></tr>
    <tr><td class="gt_row gt_right">1</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_center">1_93</td>
<td class="gt_row gt_right">3493.69</td>
<td class="gt_row gt_right">4.50</td>
<td class="gt_row gt_right">0.34</td>
<td class="gt_row gt_right">4.64</td>
<td class="gt_row gt_right">4706.68</td>
<td class="gt_row gt_right">0.78</td></tr>
    <tr><td class="gt_row gt_right">1</td>
<td class="gt_row gt_left">XGBOOST</td>
<td class="gt_row gt_left">Test</td>
<td class="gt_row gt_center">1_95</td>
<td class="gt_row gt_right">3617.45</td>
<td class="gt_row gt_right">2.83</td>
<td class="gt_row gt_right">0.46</td>
<td class="gt_row gt_right">2.83</td>
<td class="gt_row gt_right">4184.46</td>
<td class="gt_row gt_right">0.72</td></tr>
  </tbody>
  
  
</table>
</div><!--/html_preserve-->

## Forecast the Data

The last step we'll cover is forecasting the test dataset. This is useful to evaluate the model using a sampling of the time series within the panel dataset. In `modeltime` 0.7.0, we now have `modeltime_forecast(conf_by_id  = TRUE)` to allow the confidence intervals (prediction intervals) to be calculated by time series identifier. Note, that the `modeltime_calibrate()` must have been performed with an `id` specified. 


{% highlight r %}
calib_tbl %>%
    modeltime_forecast(
        new_data    = testing(splits),
        actual_data = bind_rows(training(splits), testing(splits)),
        conf_by_id  = TRUE
    ) %>%
    group_by(ID) %>%
    plot_modeltime_forecast(
        .facet_ncol  = 3,
        .interactive = FALSE
    )
{% endhighlight %}

![plot of chunk unnamed-chunk-11](/figure/source/2021-07-19-modeltime-panel-data/unnamed-chunk-11-1.png)



# Summary

We just showcased the __Modeltime Workflow for Panel Data using a Global XGBOOST Model__. But, this is a simple problem. And, __there's a lot more to learning time series:__ 

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

You can learn time series analysis and forecasting in hours with my [state-of-the-art time series forecasting course](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting/). 👇


{% include course_promo_time_series.md %}

# Have questions about Modeltime?

Make a comment in the chat below. 👇

And, if you plan on using `modeltime` for your business, it's a no-brainer - [Join my Time Series Course](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting). 

{% include cta_rtrack.html %}

