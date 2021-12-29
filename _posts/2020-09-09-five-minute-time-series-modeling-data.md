---
layout: post
title: "Time Series in 5-Minutes, Part 6: Modeling Time Series Data"
date:   2020-09-09 06:00:00
excerpt: "Modeltime unlocks time series models and machine learning in one framework."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-Timeseries, Learn-Machine-Learning, R, timetk]
image: /assets/2020-09-09-time-series-modeling-data/time_series_modeling_cover.png
image_preview: /assets/2020-09-09-time-series-modeling-data/time_series_modeling_preview.png
---



__Have 5-minutes? Then let's learn time series.__ In this short articles series, I highlight how you can get up to speed quickly on important aspects of time series analysis. 

In this article we walk through modeling time series data using the `modeltime` package. In part 1-5 of the series we learned how to use `timetk` to visualize, wrangle, and feature engineer time series data, and in this article you'll see how simple it is is to prepare the data for modeling using the `timetk` package.

### Updates

This article has been updated. [View the updated Time Series in 5-Minutes article at Business Science.](/code-tools/2020/09/09/five-minute-time-series-modeling-data.html) 

## Time Series in 5-Mintues <br><small>Articles in this Series</small>

<div class="pull-right hidden-xs" style="width:50%; margin-left:20px;">
  <a href="#" target="_blank">
  <img class="img-responsive" src="/assets/2020-09-02-time-series-anomaly-detection/time_series_anomaly_detection_cover.png"> 
  </a>
  <p class="date text-center">Time Series Modeling - A fundamental tool in your arsenal</p>
</div>

I just released `timetk` 2.0.0 ([read the release announcement](https://www.business-science.io/code-tools/2020/06/05/timetk-vesion-2-announcement.html)). A ton of new functionality has been added. We'll discuss some of the key pieces in this article series:

- [Part 1, Data Wrangling and Rolling Calculations](https://www.business-science.io/code-tools/2020/08/19/five-minute-time-series-rolling-calculations.html)
- [Part 2, The Time Plot](https://www.business-science.io/code-tools/2020/06/08/five-minute-time-series-time-plot.html)
- [Part 3, Autocorrelation](https://www.business-science.io/code-tools/2020/06/17/five-minute-time-series-part-2.html)
- [Part 4, Seasonality](https://www.business-science.io/code-tools/2020/08/26/five-minute-time-series-seasonality.html)
- [Part 5, Anomalies and Anomaly Detection](/code-tools/2020/09/02/five-minute-time-series-anomaly-detection.html)
- [Part 6, Modeling Time Series Data](/code-tools/2020/09/09/five-minute-time-series-modeling-data.html)

👉 [__Register for our blog to get new articles as we release them.__](https://mailchi.mp/business-science/blog-registration)  

# Have 5-Minutes? <br><small>Then let's learn Time Series Modeling</small>

Forecasting with `tidymodels` made easy! This short tutorial shows how you can use:

- __Modeltime models__ like `arima_reg()`, `arima_boost()`, `exp_smoothing()`, `prophet_reg()`, `prophet_boost()`, and more
- __Parsnip models__ like `linear_reg()`, `mars()`, `svm_rbf()`, `rand_forest()`, `boost_tree()` and more

To perform classical time series analysis and machine learning ___in one framework!___  See [_"Model List"_](https://business-science.github.io/modeltime/articles/modeltime-model-list.html) for the full list of `modeltime` models. 



{% include cta_rtrack.html %}


## The Modeltime Workflow

Here's the general process and where the functions fit. 

![Modeltime Time Series Wokflow](/assets/2020-09-09-time-series-modeling-data/modeltime_workflow.jpg)

Just follow the `modeltime` workflow, which is detailed in 6 convenient steps:

1. Collect data and split into training and test sets
2. Create & Fit Multiple Models
3. Add fitted models to a __Model Table__
4. __Calibrate__ the models to a testing set.
5. Perform Testing Set _Forecast_ & _Accuracy_ Evaluation
6. __Refit__ the models to Full Dataset & _Forecast_ Forward

Let's go through a guided tour to kick the tires on `modeltime`. 


Load libraries to complete this short tutorial.


## Time Series Forecasting Example

Load libraries to complete this short tutorial.

{% highlight r %}
library(tidymodels)
library(modeltime)
library(tidyverse)
library(lubridate)
library(timetk)
# This toggles plots from plotly (interactive) to ggplot (static)
interactive <- TRUE
{% endhighlight r %}

### Step 1 - Collect data and split into training and test sets. 

{% highlight r %}
# Data
m750 <- m4_monthly %>% filter(id == "M750")
{% endhighlight r %}

We can visualize the dataset. 

{% highlight r %}
m750 %>%
  plot_time_series(date, value, .interactive = interactive)
{% endhighlight r %}

![Modeltime Time Series Wokflow](/assets/2020-09-09-time-series-modeling-data/plot_time_series.png)

Let's split the data into training and test sets using `initial_time_split()`

{% highlight r %}
# Split Data 80/20
splits <- initial_time_split(m750, prop = 0.9)
{% endhighlight r %}


### Step 2 - Create & Fit Multiple Models

We can easily create dozens of forecasting models by combining `modeltime` and `parsnip`. We can also use the `workflows` interface for adding preprocessing! Your forecasting possibilities are endless. Let's get a few basic models developed:

- ARIMA
- Exponential Smoothing
- Linear Regression
- MARS (Multivariate Adaptive Regression Splines)


__Important note: Handling Date Features__

_Modeltime models_ (e.g. `arima_reg()`) are created with a date or date time feature in the model. You will see that most models include a formula like `fit(value ~ date, data)`. 

_Parsnip models_ (e.g. `linear_reg()`) typically should not have date features, but may contain derivatives of dates (e.g. month, year, etc). You will often see formulas like `fit(value ~ as.numeric(date) + month(date), data)`.

#### Model 1: Auto ARIMA (Modeltime)

First, we create a basic univariate ARIMA model using "Auto Arima" using `arima_reg()`

{% highlight r %}
# Model 1: auto_arima ----
model_fit_arima_no_boost <- arima_reg() %>%
    set_engine(engine = "auto_arima") %>%
    fit(value ~ date, data = training(splits))
#> frequency = 12 observations per 1 year
{% endhighlight r %}

#### Model 2: Boosted Auto ARIMA (Modeltime)

Next, we create a boosted ARIMA using `arima_boost()`. Boosting uses XGBoost to model the ARIMA errors. Note that model formula contains both a date feature and derivatives of date
 - ARIMA uses the date
 - XGBoost uses the derivatives of date as regressors
 
Normally I'd use a preprocessing workflow for the month features using a function like `step_timeseries_signature()` from `timetk` to help reduce the complexity of the parsnip formula interface. 

{% highlight r %}
# Model 2: arima_boost ----
model_fit_arima_boosted <- arima_boost(
    min_n = 2,
    learn_rate = 0.015
) %>%
    set_engine(engine = "auto_arima_xgboost") %>%
    fit(value ~ date + as.numeric(date) + factor(month(date, label = TRUE), ordered = F),
        data = training(splits))
#> frequency = 12 observations per 1 year
{% endhighlight r %}


#### Model 3: Exponential Smoothing (Modeltime)

Next, create an Error-Trend-Season (ETS) model using an Exponential Smoothing State Space model. This is accomplished with `exp_smoothing()`.

{% highlight r %}
# Model 3: ets ----
model_fit_ets <- exp_smoothing() %>%
    set_engine(engine = "ets") %>%
    fit(value ~ date, data = training(splits))
#> frequency = 12 observations per 1 year
{% endhighlight r %}


#### Model 4: Prophet (Modeltime)

We'll create a `prophet` model using `prophet_reg()`.

{% highlight r %}
# Model 4: prophet ----
model_fit_prophet <- prophet_reg() %>%
    set_engine(engine = "prophet") %>%
    fit(value ~ date, data = training(splits))
#> Disabling weekly seasonality. Run prophet with weekly.seasonality=TRUE to override this.
#> Disabling daily seasonality. Run prophet with daily.seasonality=TRUE to override this.
{% endhighlight r %}

#### Model 5: Linear Regression (Parsnip)

We can model time series linear regression (TSLM) using the `linear_reg()` algorithm from `parsnip`. The following derivatives of date are used:

- _Trend:_ Modeled using `as.numeric(date)`
- _Seasonal:_ Modeled using `month(date)`

{% highlight r %}
# Model 5: lm ----
model_fit_lm <- linear_reg() %>%
    set_engine("lm") %>%
    fit(value ~ as.numeric(date) + factor(month(date, label = TRUE), ordered = FALSE),
        data = training(splits))
{% endhighlight r %}

#### Model 6: MARS (Workflow)

We can model a Multivariate Adaptive Regression Spline model using `mars()`. I've modified the process to use a `workflow` to standardize the preprocessing of the features that are provided to the machine learning model (mars). 

{% highlight r %}
# Model 6: earth ----
model_spec_mars <- mars(mode = "regression") %>%
    set_engine("earth") 
recipe_spec <- recipe(value ~ date, data = training(splits)) %>%
    step_date(date, features = "month", ordinal = FALSE) %>%
    step_mutate(date_num = as.numeric(date)) %>%
    step_normalize(date_num) %>%
    step_rm(date)
  
wflw_fit_mars <- workflow() %>%
    add_recipe(recipe_spec) %>%
    add_model(model_spec_mars) %>%
    fit(training(splits))
{% endhighlight r %}

OK, with these 6 models, we'll show how easy it is to forecast. 

### Step 3 - Add fitted models to a Model Table. 

The next step is to add each of the models to a Modeltime Table using `modeltime_table()`. This step does some basic checking to make sure each of the models are fitted and that organizes into a scalable structure called a ___"Modeltime Table"___ that is used as part of our _forecasting workflow._

We have 6 models to add. A couple of notes before moving on:

- Note that some of the models have _tunable parameters_. 
- It's expected that tuning and parameter selection is performed prior to incorporating into a Modeltime Table. 
- If you try to add an unfitted model, the `modeltime_table()` will complain (throw an informative error) saying you need to `fit()` the model. 

{% highlight r %}
models_tbl <- modeltime_table(
    model_fit_arima_no_boost,
    model_fit_arima_boosted,
    model_fit_ets,
    model_fit_prophet,
    model_fit_lm,
    wflw_fit_mars
)
models_tbl

#> # Modeltime Table
#> # A tibble: 6 x 3
#>   .model_id .model     .model_desc                              
#>       <int> <list>     <chr>                                    
#> 1         1 <fit[+]>   ARIMA(0,1,1)(0,1,1)[12]                  
#> 2         2 <fit[+]>   ARIMA(0,1,1)(0,1,1)[12] W/ XGBOOST ERRORS
#> 3         3 <fit[+]>   ETS(M,A,A)                               
#> 4         4 <fit[+]>   PROPHET                                  
#> 5         5 <fit[+]>   LM                                       
#> 6         6 <workflow> EARTH
{% endhighlight r %}

### Step 4 - Calibrate the model to a testing set. 

Calibrating adds a new column, `.calibration_data`, with the test predictions and residuals inside. A few notes on Calibration:

- Calibration is how confidence intervals and accuracy metrics are determined 
- ___Calibration Data___ is simply forecasting predictions and residuals that are calculated from out-of-sample data.
- After calibrating, the calibration data follows the data through the forecasting workflow. 

{% highlight r %}
calibration_tbl <- models_tbl %>%
    modeltime_calibrate(new_data = testing(splits))

calibration_tbl

#> # Modeltime Table
#> # A tibble: 6 x 5
#>   .model_id .model     .model_desc                        .type .calibration_da…
#>       <int> <list>     <chr>                              <chr> <list>          
#> 1         1 <fit[+]>   ARIMA(0,1,1)(0,1,1)[12]            Test  <tibble [31 × 4…
#> 2         2 <fit[+]>   ARIMA(0,1,1)(0,1,1)[12] W/ XGBOOS… Test  <tibble [31 × 4…
#> 3         3 <fit[+]>   ETS(M,A,A)                         Test  <tibble [31 × 4…
#> 4         4 <fit[+]>   PROPHET                            Test  <tibble [31 × 4…
#> 5         5 <fit[+]>   LM                                 Test  <tibble [31 × 4…
#> 6         6 <workflow> EARTH                              Test  <tibble [31 × 4…
{% endhighlight r %}

### Step 5 - Testing Set Forecast & Accuracy Evaluation

There are 2 critical parts to an evaluation.

- Visualizing the Forecast vs Test Data Set
- Evaluating the Test (Out of Sample) Accuracy

#### 5A - Visualizing the Forecast Test

Visualizing the Test Error is easy to do using the __interactive plotly visualization (just toggle the visibility of the models using the Legend).__ 

{% highlight r %}
calibration_tbl %>%
    modeltime_forecast(
        new_data    = testing(splits),
        actual_data = m750
    ) %>%
    plot_modeltime_forecast(
      .legend_max_width = 25, # For mobile screens
      .interactive      = interactive
    )
{% endhighlight r %}

![Time Series Forecast](/assets/2020-09-09-time-series-modeling-data/forecast_plot.png)

From visualizing the test set forecast:

- __Models 1&2: ARIMA & ARIMA Boost__ are performing well. Both models have "auto" components because we used Auto ARIMA. The XGBoost component has parameters that were specified. We can possibly get better accuracy by tuning, but because the ARIMA component is working well on this data, additional improvement may be low. 
- __Model 3: ETS(M,A,A)__ is performing the best. The 80% confidence interval is the most narrow of the bunch, indicating the hold out set is modeled well. 
- __Model 4: PROPHET__ is comparable to the ARIMA models, but has a slightly wider test error confidence interval. 
- __Model 5: LM__ is over-shooting the local trend. This is because the trend component is a simple linear line, which doesn't account for the change points. 
- __Model 6: EARTH__ is overfitting the local trend. This is because we did not tune the number of change points, so the algorithm is auto-calculating the change points. 

#### 5B - Accuracy Metrics

We can use `modeltime_accuracy()` to collect common accuracy metrics. The default reports the following metrics using `yardstick` functions:

- __MAE__ - Mean absolute error, `mae()`
- __MAPE__ - Mean absolute percentage error, `mape()`
- __MASE__ - Mean absolute scaled error, `mase()`
- __SMAPE__ - Symmetric mean absolute percentage error, `smape()`
- __RMSE__ - Root mean squared error, `rmse()`
- __RSQ__ - R-squared, `rsq()`

These of course can be customized following the rules for creating new yardstick metrics, but the defaults are very useful. Refer to `default_forecast_accuracy_metrics()` to learn more.

To make table-creation a bit easier, I've included `table_modeltime_accuracy()` for outputing results in either interactive (`reactable`) or static (`gt`) tables. 

{% highlight r %}
calibration_tbl %>%
    modeltime_accuracy() %>%
    table_modeltime_accuracy(
        .interactive = interactive
    )
{% endhighlight r %}

![Time Series Model Accuracy Metrics](/assets/2020-09-09-time-series-modeling-data/model_accuracy_metrics.png)

From the accuracy metrics:

- __Model 3: ETS is clearly the winner here with MAE of 77__
- __Model 6: MARS__ is over-fitting the local trend. This comes out in the R-Squared of 0.55. 

### Step 6 - Refit to Full Dataset & Forecast Forward

The final step is to refit the models to the full dataset using `modeltime_refit()` and forecast them forward. 

{% highlight r %}
refit_tbl <- calibration_tbl %>%
    modeltime_refit(data = m750)
refit_tbl %>%
    modeltime_forecast(h = "3 years", actual_data = m750) %>%
    plot_modeltime_forecast(
      .legend_max_width = 25, # For mobile screens
      .interactive      = interactive
    )
{% endhighlight r %}

![Time Series Model Refit](/assets/2020-09-09-time-series-modeling-data/forecast_plot_refit.png)


## Refitting - What happened? 

__The models have all changed!__ (Yes - this is the point of refitting)

- The __LM__ model looks much better now because the linear trend line has now been fit to new data that follows the longer term trend. 
- The __EARTH__ model has a trend that is more representative of the near-term trend.
- The __PROPHET__ model has a trend that is very similar to the EARTH model (this is because both modeling algorithms use changepoints to model trend, and prophet's auto algorithm seems to be doing a better job at adapting).
- The __ETS__ model has changed from (M,A,A) to (A,A,A).
- The __ARIMA__ model have been updated and better capture the upswing. 

__This is the (potential) benefit of refitting.__ 

More often than not refitting is a good idea. Refitting:

- Retrieves your model and preprocessing steps
- Refits the model to the new data
- Recalculates any automations. This includes:
    - Recalculating the long-term trend for Linear Model
    - Recalculating the changepoints for the Earth Model
    - Recalculating the ARIMA and ETS parameters
- Preserves any parameter selections. This includes:
    - XGBoost Parameters in the Boosted ARIMA `min_n = 2`, `learn_rate = 0.015`.
    - Any other defaults that are not automatic calculations are used.


<br>

{% include cta_rtrack.html %}


# Have questions on using Modeltime for time series?

Make a comment in the chat below. 👇

And, if you plan on using `modeltime` for your business, it's a no-brainer - [Join the Time Series Course](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting). 
