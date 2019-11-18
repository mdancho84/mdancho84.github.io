---
layout: post
title: "Churn Modeling using Machine Learning with parsnip"
date:   2019-11-18 10:44:01
excerpt: "Learn how to performa a tidy approach to classification problem with the new parsnip R package for machine learning."
author: "Diego Usai"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, parsnip, rsample, recipes, yardstick, ranger, skimr]
image: 2019-11-18-parsnip/parsnip_workflow.jpg
image_preview: 2019-11-18-parsnip/parsnip_workflow.jpg
---



<p class="lead">
This article comes from <a href="https://www.linkedin.com/in/diegousaiuk/" target="_blank">Diego Usai</a>, a student in <a href="https://university.business-science.io/" target="_blank">Business Science University</a>. Diego has completed both  101 (Data Science Foundations) and 201 (Advanced Machine Learning &amp; Business Consulting) courses. Diego shows off his progress in this <strong><em>Customer Churn Tutorial using Machine Learning with <code>parsnip</code></em></strong>. Diego originally posted the article on his personal website, <a href="https://diegousai.io/2019/06/modelling-with-tidymodels-and-parsnip/" target="_blank">diegousai.io</a>, which has been reproduced on the <a href="/code-tools/2019/11/18/parsnip-churn-classification-machine-learning.html">Business Science blog here</a>. Enjoy!
</p>

__R Packages Covered__:

* `parsnip` - NEW Machine Learning API in R, similar to `scikit learn` in Python
* `rsample` - 10-Fold Cross Validation
* `recipes` - Data preprocessing
* `yardstick` - Model scoring and metrics
* `skimr` - Quickly skim data
* `ranger` - Random Forest Library used for churn modeling 

# Churn Modeling Using Machine Learning

<blockquote>
  <p>by <a href="https://www.linkedin.com/in/diegousaiuk/" target="_blank">Diego Usai</a>, Customer Insights Consultant</p>
</blockquote>

<div class="pull-right hidden-xs" style="width:50%; margin-left:20px;">
  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6550769325224054784" height="600" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe> 
</div>

Recently I have completed the online course [__Business Analysis With R__](https://university.business-science.io/p/ds4b-101-r-business-analysis-r) focused on __applied data and business science with R__, which introduced me to a couple of new modelling concepts and approaches. One that especially captured my attention is `parsnip` and its attempt to implement a unified modelling and analysis interface (similar to python’s `scikit-learn`) to seamlessly access several modelling platforms in R.

`parsnip` is the brainchild of RStudio’s [Max Khun](https://twitter.com/topepos) (of `caret` fame) and [Davis Vaughan](https://twitter.com/dvaughan32) and forms part of `tidymodels`, a growing ensemble of tools to explore and iterate modelling tasks that shares a common philosophy (and a few libraries) with the `tidyverse`.

Although there are a number of packages at different stages in their development, I have decided to take `tidymodels` “for a spin”, and create and execute a “tidy” modelling workflow to tackle a __classification problem__. My aim is to show how easy it is to fit a simple ___logistic regression___ in R’s `glm` and quickly switch to a ___cross-validated random forest___ using the `ranger` engine by changing only a few lines of code.

For this post in particular I’m focusing on four different libraries from the `tidymodels` suite: 

- `parsnip` for machine learning and modeling
- `rsample` for data sampling and 10-fold cross-validation
- `recipes` for data preprocessing
- `yardstick` for model assessment.

Note that the focus is on modelling workflow and libraries interaction. For that reason, I am keeping data exploration and feature engineering to a minimum. __Data exploration, data wrangling, visualization, and business understanding are _CRITICAL_ to your ability to perform machine learning__. If you want to learn the end-to-end process for completing business projects with data science with `H2O` and `parsnip` and `Shiny` web applications using `AWS`, then I recommend Business Science's [4-Course R-Track System](https://university.business-science.io/p/4-course-bundle-machine-learning-and-web-applications-r-track-101-102-201-202a/) - One complete system to go from beginner to expert in 6-months. 

<br>

{% include cta_rtrack.html %}

# My Workflow {#workflow}

Here's a diagram of the workflow I used to web scrape the Specialized Data and create an application:

1. Start with raw data in CSV format

2. Use `skimr` to _quickly_ understand the features 

3. Use `rsample` to split into training/testing sets

4. Use `recipes` to create data preprocessing pipeline

4. Use `parsnip`, `rsample` and `yardstick` to build models and assess machine learning performance 

<br>

<a href="/code-tools/2019/11/18/parsnip-churn-classification-machine-learning.html#workflow">
  <img src="/assets/2019-11-18-parsnip/parsnip_workflow.jpg" width="100%"/>
</a>

<p class="date text-center">
  <a href = "#workflow">My Code Workflow for Machine Learning with <code>parsnip</code></a>
</p>





# Tutorial - Churn Classification using Machine Learning

This is an ___intermediate tutorial to expose business analysts and data scientists to churn modeling___ with the new `parsnip` Machine Learning API. 

## 1.0 Setup and Data

First, I load the packages I need for this analysis.


{% highlight r %}
library(tidyverse)   # Loads dplyr, ggplot2, purrr, and other useful packages
library(tidymodels)  # Loads parsnip, rsample, recipes, yardstick
library(skimr)       # Quickly get a sense of data
library(knitr)       # Pretty HTML Tables
{% endhighlight %}

For this project I am using the [Telco Customer Churn](https://www.ibm.com/communities/analytics/watson-analytics-blog/predictive-insights-in-the-telco-customer-churn-data-set/) from _IBM Watson Analytics_, one of IBM Analytics Communities. The data contains 7,043 rows, each representing a customer, and 21 columns for the potential predictors, providing information to forecast customer behaviour and help develop focused customer retention programmes.

__Churn__ is the ___Dependent Variable___ and shows the _customers who left within the last month_. The dataset also includes details on the __Services__ that each customer has signed up for, along with __Customer Account__ and __Demographic__ information.

Next, we read in the data (I have hosted on my [GitHub repo for this project](https://github.com/DiegoUsaiUK/Classification_Churn_with_Parsnip)).


{% highlight r %}
telco <- read_csv("https://raw.githubusercontent.com/DiegoUsaiUK/Classification_Churn_with_Parsnip/master/00_Data/WA_Fn-UseC_-Telco-Customer-Churn.csv")

telco %>% head() %>% kable()
{% endhighlight %}



|customerID |gender | SeniorCitizen|Partner |Dependents | tenure|PhoneService |MultipleLines    |InternetService |OnlineSecurity |OnlineBackup |DeviceProtection |TechSupport |StreamingTV |StreamingMovies |Contract       |PaperlessBilling |PaymentMethod             | MonthlyCharges| TotalCharges|Churn |
|:----------|:------|-------------:|:-------|:----------|------:|:------------|:----------------|:---------------|:--------------|:------------|:----------------|:-----------|:-----------|:---------------|:--------------|:----------------|:-------------------------|--------------:|------------:|:-----|
|7590-VHVEG |Female |             0|Yes     |No         |      1|No           |No phone service |DSL             |No             |Yes          |No               |No          |No          |No              |Month-to-month |Yes              |Electronic check          |          29.85|        29.85|No    |
|5575-GNVDE |Male   |             0|No      |No         |     34|Yes          |No               |DSL             |Yes            |No           |Yes              |No          |No          |No              |One year       |No               |Mailed check              |          56.95|      1889.50|No    |
|3668-QPYBK |Male   |             0|No      |No         |      2|Yes          |No               |DSL             |Yes            |Yes          |No               |No          |No          |No              |Month-to-month |Yes              |Mailed check              |          53.85|       108.15|Yes   |
|7795-CFOCW |Male   |             0|No      |No         |     45|No           |No phone service |DSL             |Yes            |No           |Yes              |Yes         |No          |No              |One year       |No               |Bank transfer (automatic) |          42.30|      1840.75|No    |
|9237-HQITU |Female |             0|No      |No         |      2|Yes          |No               |Fiber optic     |No             |No           |No               |No          |No          |No              |Month-to-month |Yes              |Electronic check          |          70.70|       151.65|Yes   |
|9305-CDSKC |Female |             0|No      |No         |      8|Yes          |Yes              |Fiber optic     |No             |No           |Yes              |No          |Yes         |Yes             |Month-to-month |Yes              |Electronic check          |          99.65|       820.50|Yes   |


## 2.0 Skim the Data

We can get a quick sense of the data using the `skim()` function from the `skimr` package. 


{% highlight r %}
telco %>% skim()
{% endhighlight %}



{% highlight text %}
## Skim summary statistics
##  n obs: 7043 
##  n variables: 21 
## 
## ── Variable type:character ───────────────────────────────────────────────────────────────────────────────────────────────────
##          variable missing complete    n min max empty n_unique
##             Churn       0     7043 7043   2   3     0        2
##          Contract       0     7043 7043   8  14     0        3
##        customerID       0     7043 7043  10  10     0     7043
##        Dependents       0     7043 7043   2   3     0        2
##  DeviceProtection       0     7043 7043   2  19     0        3
##            gender       0     7043 7043   4   6     0        2
##   InternetService       0     7043 7043   2  11     0        3
##     MultipleLines       0     7043 7043   2  16     0        3
##      OnlineBackup       0     7043 7043   2  19     0        3
##    OnlineSecurity       0     7043 7043   2  19     0        3
##  PaperlessBilling       0     7043 7043   2   3     0        2
##           Partner       0     7043 7043   2   3     0        2
##     PaymentMethod       0     7043 7043  12  25     0        4
##      PhoneService       0     7043 7043   2   3     0        2
##   StreamingMovies       0     7043 7043   2  19     0        3
##       StreamingTV       0     7043 7043   2  19     0        3
##       TechSupport       0     7043 7043   2  19     0        3
## 
## ── Variable type:numeric ─────────────────────────────────────────────────────────────────────────────────────────────────────
##        variable missing complete    n    mean      sd    p0    p25
##  MonthlyCharges       0     7043 7043   64.76   30.09 18.25  35.5 
##   SeniorCitizen       0     7043 7043    0.16    0.37  0      0   
##          tenure       0     7043 7043   32.37   24.56  0      9   
##    TotalCharges      11     7032 7043 2283.3  2266.77 18.8  401.45
##      p50     p75    p100     hist
##    70.35   89.85  118.75 ▇▁▃▂▆▅▅▂
##     0       0       1    ▇▁▁▁▁▁▁▂
##    29      55      72    ▇▃▃▂▂▃▃▅
##  1397.47 3794.74 8684.8  ▇▃▂▂▁▁▁▁
{% endhighlight %}

There are a couple of things to notice here:

- __customerID__ is a unique identifier for each row. As such it has no descriptive or predictive power and it needs to be removed.

- Given the relative small number of missing values in __TotalCharges__ (only 11 of them) I am dropping them from the dataset.


{% highlight r %}
telco <- telco %>%
    select(-customerID) %>%
    drop_na()
{% endhighlight %}

## 3.0 Tidymodels Workflow - Generalized Linear Model (Baseline)

To show the basic steps in the `tidymodels` framework I am fitting and evaluating a simple logistic regression model as a baseline.

### 3.1 Train/Test Split

`rsample` provides a streamlined way to create a randomised training and test split of the original data.


{% highlight r %}
set.seed(seed = 1972) 

train_test_split <-
    rsample::initial_split(
        data = telco,     
        prop = 0.80   
    ) 

train_test_split
{% endhighlight %}



{% highlight text %}
## <5626/1406/7032>
{% endhighlight %}

Of the 7,043 total customers, 5,626 have been assigned to the training set and 1,406 to the test set. I save them as `train_tbl` and `test_tbl`.


{% highlight r %}
train_tbl <- train_test_split %>% training() 
test_tbl  <- train_test_split %>% testing() 
{% endhighlight %}


### 3.2 Prepare

The `recipes` package uses a __cooking metaphor__ to handle all the data preprocessing, like missing values imputation, removing predictors, centring and scaling, one-hot-encoding, and more.

First, I create a `recipe` where I define the transformations I want to apply to my data. In this case I create a simple recipe to change all character variables to factors.

Then, I _“prep the recipe”_ by mixing the ingredients with prep. Here I have included the prep bit in the recipe function for brevity.


{% highlight r %}
recipe_simple <- function(dataset) {
    recipe(Churn ~ ., data = dataset) %>%
        step_string2factor(all_nominal(), -all_outcomes()) %>%
        prep(data = dataset)
}
{% endhighlight %}

__Note__ - In order to avoid ___Data Leakage___ (e.g: transferring information from the train set into the test set), data should be “prepped” using the train_tbl only.


{% highlight r %}
recipe_prepped <- recipe_simple(dataset = train_tbl)
{% endhighlight %}

Finally, to continue with the cooking metaphor, I _“bake the recipe”_ to apply all preprocessing to the data sets.


{% highlight r %}
train_baked <- bake(recipe_prepped, new_data = train_tbl)
test_baked  <- bake(recipe_prepped, new_data = test_tbl)
{% endhighlight %}


### 3.3 Machine Learning and Performance

#### Fit the Model

`parsnip` is a recent addition to the `tidymodel`s suite and is probably the one I like best. This package offers a unified API that allows access to several machine learning packages without the need to learn the syntax of each individual one.

With 3 simple steps you can:

1. Set the type of model you want to fit (here is a logistic regression) and its mode (classification)

2. Decide which computational engine to use (glm in this case)

3. Spell out the exact model specification to fit (I’m using all variables here) and what data to use (the baked train dataset)


{% highlight r %}
logistic_glm <- logistic_reg(mode = "classification") %>%
    set_engine("glm") %>%
    fit(Churn ~ ., data = train_baked)
{% endhighlight %}

If you want to use another engine, you can simply switch the `set_engine` argument (for logistic regression you can choose from `glm`, `glmnet`, `stan`, `spark`, and `keras`) and `parsnip` will take care of changing everything else for you behind the scenes.

#### Assess Performance


{% highlight r %}
predictions_glm <- logistic_glm %>%
    predict(new_data = test_baked) %>%
    bind_cols(test_baked %>% select(Churn))

predictions_glm %>% head() %>% kable()
{% endhighlight %}



|.pred_class |Churn |
|:-----------|:-----|
|Yes         |No    |
|No          |No    |
|No          |No    |
|No          |No    |
|No          |No    |
|No          |No    |

There are several metrics that can be used to investigate the performance of a classification model but for simplicity I’m only focusing on a selection of them: ___accuracy, precision, recall and F1_Score___.

All of these measures (and many more) can be derived by the ___Confusion Matrix___, a table used to describe the performance of a classification model on a set of test data for which the true values are known.

In and of itself, the confusion matrix is a relatively easy concept to get your head around as is shows the number of _false positives_, _false negatives_, _true positives_, and _true negatives_. However some of the measures that are derived from it may take some reasoning with to fully understand their meaning and use.


{% highlight r %}
predictions_glm %>%
    conf_mat(Churn, .pred_class) %>%
    pluck(1) %>%
    as_tibble() %>%
    
    # Visualize with ggplot
    ggplot(aes(Prediction, Truth, alpha = n)) +
    geom_tile(show.legend = FALSE) +
    geom_text(aes(label = n), colour = "white", alpha = 1, size = 8)
{% endhighlight %}

![plot of chunk unnamed-chunk-12](/figure/source/2019-11-18-parsnip-churn-classification-machine-learning/unnamed-chunk-12-1.png)

##### Accuracy

The model’s ___Accuracy___ is the fraction of predictions the model got right and can be easily calculated by passing the predictions_glm to the metrics function. However, accuracy is not a very reliable metric as it will provide misleading results if the data set is unbalanced.

With only basic data manipulation and feature engineering the simple logistic model has achieved 80% accuracy.


{% highlight r %}
predictions_glm %>%
    metrics(Churn, .pred_class) %>%
    select(-.estimator) %>%
    filter(.metric == "accuracy") %>%
    kable()
{% endhighlight %}



|.metric  | .estimate|
|:--------|---------:|
|accuracy | 0.8058321|

##### Precision and Recall

___Precision___ shows how sensitive models are to False Positives (i.e. predicting a customer is leaving when he-she is actually staying) whereas ___Recall___ looks at how sensitive models are to False Negatives (i.e. forecasting that a customer is staying whilst he-she is in fact leaving).

__These are very relevant business metrics__ because organisations are particularly interested in accurately predicting which customers are truly at risk of leaving so that they can target them with retention strategies. At the same time they want to minimising efforts of retaining customers incorrectly classified as leaving who are instead staying.


{% highlight r %}
tibble(
    "precision" = 
        precision(predictions_glm, Churn, .pred_class) %>%
        select(.estimate),
    "recall" = 
        recall(predictions_glm, Churn, .pred_class) %>%
        select(.estimate)
) %>%
    unnest(cols = c(precision, recall)) %>%
    kable()
{% endhighlight %}



| precision|    recall|
|---------:|---------:|
| 0.8466368| 0.9024857|

##### F1 Score

Another popular performance assessment metric is the ___F1 Score___, which is the harmonic average of the precision and recall. An F1 score reaches its best value at 1 with perfect precision and recall.


{% highlight r %}
predictions_glm %>%
    f_meas(Churn, .pred_class) %>%
    select(-.estimator) %>%
    kable()
{% endhighlight %}



|.metric | .estimate|
|:-------|---------:|
|f_meas  | 0.8736696|


## 4.0 Random Forest - Machine Learning Modeling and Cross Validation

This is where the real beauty of `tidymodels` comes into play. Now I can use this tidy modelling framework to fit a __Random Forest__ model with the `ranger` engine.

### 4.1 Cross Validation - 10-Fold

To further refine the model’s predictive power, I am implementing a __10-fold cross validation__ using `vfold_cv` from `rsample`, which splits again the initial training data.


{% highlight r %}
cross_val_tbl <- vfold_cv(train_tbl, v = 10)
cross_val_tbl
{% endhighlight %}



{% highlight text %}
## #  10-fold cross-validation 
## # A tibble: 10 x 2
##    splits             id    
##    <named list>       <chr> 
##  1 <split [5.1K/563]> Fold01
##  2 <split [5.1K/563]> Fold02
##  3 <split [5.1K/563]> Fold03
##  4 <split [5.1K/563]> Fold04
##  5 <split [5.1K/563]> Fold05
##  6 <split [5.1K/563]> Fold06
##  7 <split [5.1K/562]> Fold07
##  8 <split [5.1K/562]> Fold08
##  9 <split [5.1K/562]> Fold09
## 10 <split [5.1K/562]> Fold10
{% endhighlight %}

If we take a further look, we should recognise the 5,626 number, which is the total number of observations in the initial train_tbl. In each round, 563 observations will in turn be retained from estimation and used to validate the model for that fold.


{% highlight r %}
cross_val_tbl %>% pluck("splits", 1)
{% endhighlight %}



{% highlight text %}
## <5063/563/5626>
{% endhighlight %}

To avoid confusion and distinguish the initial train/test splits from those used for cross validation, the author of rsample Max Kuhn has coined two new terms: the ___analysis___ and the ___assessment____ sets. The former is the portion of the train data used to recursively estimate the model, where the latter is the portion used to validate each estimate.

### 4.2 Machine Learning

#### Random Forest

Switching to another model could not be simpler! All I need to do is to change the __type of model__ to `random_forest`, add its hyper-parameters, change the `set_engine` argument to `ranger`, and I’m ready to go.

I’m bundling all steps into a function that estimates the model across all folds, runs predictions and returns a convenient tibble with all the results. I need to add an extra step before the recipe “prepping” to maps the cross validation splits to the `analysis()` and `assessment()` functions. This will guide the iterations through the 10 folds.


{% highlight r %}
rf_fun <- function(split, id, try, tree) {
    
    analysis_set <- split %>% analysis()
    analysis_prepped <- analysis_set %>% recipe_simple()
    analysis_baked <- analysis_prepped %>% bake(new_data = analysis_set)
    
    model_rf <-
        rand_forest(
            mode = "classification",
            mtry = try,
            trees = tree
        ) %>%
        set_engine("ranger",
                   importance = "impurity"
        ) %>%
        fit(Churn ~ ., data = analysis_baked)
    
    assessment_set     <- split %>% assessment()
    assessment_prepped <- assessment_set %>% recipe_simple()
    assessment_baked   <- assessment_prepped %>% bake(new_data = assessment_set)
    
    tibble(
        "id" = id,
        "truth" = assessment_baked$Churn,
        "prediction" = model_rf %>%
            predict(new_data = assessment_baked) %>%
            unlist()
    )
    
}
{% endhighlight %}

#### Modeling with purrr

I iteratively apply the random forest modeling function, `rf_fun()`, to each of the 10 cross validation folds using `purrr`. 


{% highlight r %}
pred_rf <- map2_df(
    .x = cross_val_tbl$splits,
    .y = cross_val_tbl$id,
    ~ rf_fun(split = .x, id = .y, try = 3, tree = 200)
)

head(pred_rf)
{% endhighlight %}



{% highlight text %}
## # A tibble: 6 x 3
##   id     truth prediction
##   <chr>  <fct> <fct>     
## 1 Fold01 Yes   Yes       
## 2 Fold01 Yes   No        
## 3 Fold01 Yes   Yes       
## 4 Fold01 No    No        
## 5 Fold01 No    No        
## 6 Fold01 Yes   Yes
{% endhighlight %}

#### Assess Performance

I’ve found that `yardstick` has a very handy confusion matrix `summary()` function, which returns an array of __13 different confusion matrix metrics__ but in this case I want to see the four I used for the glm model.


{% highlight r %}
pred_rf %>%
    conf_mat(truth, prediction) %>%
    summary() %>%
    select(-.estimator) %>%
    filter(.metric %in% c("accuracy", "precision", "recall", "f_meas")) %>%
    kable()
{% endhighlight %}



|.metric   | .estimate|
|:---------|---------:|
|accuracy  | 0.7975471|
|precision | 0.8328118|
|recall    | 0.9050279|
|f_meas    | 0.8674194|

The `random forest` model is performing in par with the `simple logistic regression`. Given the very basic feature engineering that I’ve carried out, there is scope to further improve the model but this is beyond the scope of this post.

# Parting Thoughts

One of the great advantage of `tidymodels` is the flexibility and ease of access to every phase of the analysis workflow. Creating the modelling pipeline is a breeze and you can easily re-use the initial framework by changing model type with `parsnip` and data pre-processing with `recipes` and in no time you’re ready to check your new model’s performance with `yardstick`.

In any analysis you would typically audit several models and `parsnip` frees you up from having to learn the unique syntax of every modelling engine so that you can focus on finding the best solution for the problem at hand.

If you would like to learn how to ___apply Data Science to Business Problems___, take the program that I chose to build my skills. You will learn tools like `parsnip` and `H2O` for machine learning and `Shiny` for web applications, and many more critical tools (`tidyverse`, `recipes`, and more!) for applying data science to business problems. For a limited time you can get 15% OFF the [4-Course R-Track System](https://university.business-science.io/p/4-course-bundle-machine-learning-and-web-applications-r-track-101-102-201-202a/?coupon_code=ds4b15). 

<br>

{% include cta_rtrack.html %}

# Code Repository

The full R code can be found on [my GitHub profile](https://github.com/DiegoUsaiUK/Classification_Churn_with_Parsnip).

# Other Student Articles You Might Enjoy

Here are more _Student Success Tutorials_ on data science for business and building `shiny` applications. 

- __[Web Scraping Product Data in R with rvest and purrr](https://www.business-science.io/code-tools/2019/10/07/rvest-web-scraping.html) - By Joon Im__

- __[PDF Scraping in R with tabulizer](https://www.business-science.io/code-tools/2019/09/23/tabulizer-pdf-scraping.html) - By Jennifer Cooper__

- __[Build An R Shiny App - Wedding Risk Model](https://www.business-science.io/business/2019/06/09/Wedding-Risk-Model-App.html) - By Bryan Clark__

