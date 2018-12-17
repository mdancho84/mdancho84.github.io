---
layout: post
title: "Marketing Analytics - Fast-Food Promotion Effectiveness"
excerpt: "In this marketing analysis, we used promotion campaign data from a fast-food business to determine which promotion produced the most sales."
author: "David Curry"
date: 2018-12-11 6:00:00 -0500
categories: [Business]
tags: [R-Project, R, Data Science, DS4B 201-R, Business Understanding]
image: 2018-12-11-marketing-analysis-promotion-campaign/fast-food-promotion-campaign.jpg
image_preview: 2018-12-11-marketing-analysis-promotion-campaign/fast-food-promotion-campaign_preview.jpg
canonical: https://sureoptimize.com/marketing-analytics-fast-food-promotion-campaign
---


## Summary

A fast-food chain plans to add a new item to their menu. However, they are undecided on three possible marketing campaigns for promoting the new item. 

The new item is introduced at several randomly selected markets to determine which promotion has the best sales performance. Weekly sales for each promotion are recorded for the first four weeks.

To solve this marketing problem, I will be using the [Business Science Problem Framework](https://www.business-science.io/business/2018/08/21/agile-business-science-problem-framework.html) (BSPF) from [Business Science University](https://university.business-science.io/). The BSPF is a methodology for using data science to solve problems in a business context.

This marketing analysis uses marketing campaign data from IBM Watson, found [here](https://www.ibm.com/communities/analytics/watson-analytics-blog/marketing-campaign-eff-usec_-fastf/).

### Other articles you might like:

- [Marketing Analytics and Data Science - Business Science](https://www.business-science.io/business/2018/10/26/marketing-analytics-data-science.html)
- [Time Series Analysis for Business Forecasting with Artificial Neural Networks](https://www.business-science.io/business/2018/12/04/time-series-forecasting.html)
- [New R Cheatsheet: Data Science Workflow with R](https://www.business-science.io/learning-r/2018/11/04/data-science-r-cheatsheet.html)
- [Ultimate Python Cheatsheet: Data Science Workflow with Python](https://www.business-science.io/learning-python/2018/11/18/data-science-python-cheatsheet.html)

<br/>
<hr/>


## Table of Contents

<ol type="I" style="line-height:36px;">
    <li><a href="#objective">Business Objective</a></li>
    <li><a href="#analysis">Campaign Data Analysis</a></li>
    <ol type="A">
        <li><a href="#analysis">Data Summary</a></li>
        <li><a href="#data-analysis">Data Analysis</a></li>
    </ol>
    <li><a href="#predict">Predict Campaign Performance</a></li>
    <ol type="A">
        <li><a href="#model">Model Interpretability</a></li>
    </ol>
    <li><a href="#results">Business Results</a></li>
    <li><a href="#conclusion">Conclusion</a></li>
</ol>



## I. Business Objective <a name="objective"></a>

The fast-food chain ran a promotion campaign to determine the best market for their new menu item. Our objective is to analyze the marketing promotion data to <strong class="highlight">determine which marketing promotion has the best sales performance</strong> for the new item.



## II. Campaign Data Analysis <a name="analysis"></a>

Data analysis is performed to find relationships to help determine which marketing promotion was the most effective.  



<!-- CTA -->
<br>
<hr>
### 10-Week System: Data Science Education For Enterprise

<a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B15">
<img src="/assets/2018-12-11-marketing-analysis-promotion-campaign/DS4B_201_R.png" class="img-rounded pull-right" alt="DS4B 201-R Course" style="width:30%;margin-left:20px"/></a>

##### Learn to analyze data, create machine learning models and solve business problems with our DS4B 201-R Course.

- Learn by following a [proven data science framework](https://www.business-science.io/bspf.html)
- Learn `H2O` & `LIME` for building High-Performance Machine Learning Models
- Learn __Expected Value Framework__ by connecting Data Science to ROI
- Learn __Preprocessing__ with `recipes`
- Learn how to build a __Recommendation Algorithm__ from scratch
- All while learning `R` __coding__!
<br><br>
<hr>
<!-- CTA end -->


### A. Data Summary 

The data consists of 7 variables: 

- __Market ID__ - Unique identifier for market.
- __Market Size__ - Size of market area by sales (Small, Medium, Large).
- __Location ID__ - Unique identifier for store location.
- __Age__ - Age of store in years.
- __Promotion__ - One of three promotions that were tested.
- __Week__ - One of four weeks when the promotions were run.
- __Sales__ - Sales amount for a specific LocationID, Promotion and week.

For the variables Market ID, Location ID and Promotion are coded with numbers, therefore you will see references to numbers such as Market ID 3.

There are 548 records (observations), each representing the sales for a given Week, Promotion, and Location.



### B. Data Analysis <a name="data-analysis"></a>

This section is a walkthrough of the data analysis in order to find relationships that may help with solving the [business objective](#objective).

<br>

#### 1. What is the distribution of sales compared to the other variables?


#### Sales by Market Size
Most sales were made in Medium and Large markets.
<p style="text-align:center">
<img src="/assets/2018-12-11-marketing-analysis-promotion-campaign/Sales-MarketSize.jpg" style="width:70%;">
</p>

<br>

#### Sales by Promotion
Sales are mostly even across campaign Promotion type.
<p style="text-align:center">
<img src="/assets/2018-12-11-marketing-analysis-promotion-campaign/Sales-Promotion.jpg" style="width:70%;">
</p>

<br>

#### Sales by Market ID
Market 3 has outperformed all other markets with over $6,000,000 in sales. Market 10 in second with just over $4,000,000 in sales.
<p style="text-align:center">
<img src="/assets/2018-12-11-marketing-analysis-promotion-campaign/Sales-MarketID.jpg" style="width:70%;">
</p>

<br>

#### Sales by Week
Sales are mostly even across each Week the promotion was run.
<p style="text-align:center">
<img src="/assets/2018-12-11-marketing-analysis-promotion-campaign/Sales-Week.jpg" style="width:70%;">
</p>

<br>

#### Sales by Age of Store
One-year-old stores outperformed other age stores. Overall, newer stores produced more revenue than older stores.
<p style="text-align:center">
<img src="/assets/2018-12-11-marketing-analysis-promotion-campaign/Sales-AgeOfStore.jpg" style="width:70%;">
</p>

<br>

#### 2. Market Size, Market ID, and Age of Store Comparisons


From the Sales comparisons above, Market Size, Market ID and Age of Store seem to be important variables for campaign sales performance. The following analyzes variable comparisons with Market Size, Market ID, Age of Store and Promotion.

<br>

#### Sales by Market Size and MarketID
Market 3 in the Large Market performed the best. 
<p style="text-align:center">
<img src="/assets/2018-12-11-marketing-analysis-promotion-campaign/Sales-MarketSize-MarketID.jpg" style="width:70%;">
</p>

<br>

#### Sales by Promotion and Market Size
For each promotion, Large market size outperformed the other market sizes.
<p style="text-align:center">
<img src="/assets/2018-12-11-marketing-analysis-promotion-campaign/Sales-Promotion-MarketSize.jpg" style="width:70%;">
</p>

<br>

#### Sales by Promotion and Market ID
This confirms the ‘Sales by Market ID’ chart from above. Market ID 3 outperforms all other markets across all promotions.
<p style="text-align:center">
<img src="/assets/2018-12-11-marketing-analysis-promotion-campaign/Sales-Promotion-MarketID.jpg" style="width:70%;">
</p>

<br>

#### Sales by Market Size and Age of Store
This chart is messy, but it is another look at sales performance by Age of Store, with Market Size. 
Large market stores around 9,10,18 years underperformed versus other stores in the same market size.
<p style="text-align:center">
<img src="/assets/2018-12-11-marketing-analysis-promotion-campaign/Sales-MarketSize-AgeOfStore.jpg" style="width:70%;">
</p>



<!-- CTA -->
<br>
<hr>
### 10-Week System: Data Science Education For Enterprise

<a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B15">
<img src="/assets/2018-12-11-marketing-analysis-promotion-campaign/DS4B_201_R.png" class="img-rounded pull-right" alt="DS4B 201-R Course" style="width:30%;margin-left:20px"/></a>

##### Learn to analyze data, create machine learning models and solve business problems with our DS4B 201-R Course.

- Learn by following a [proven data science framework](https://www.business-science.io/bspf.html)
- Learn `H2O` & `LIME` for building High-Performance Machine Learning Models
- Learn __Expected Value Framework__ by connecting Data Science to ROI
- Learn __Preprocessing__ with `recipes`
- Learn how to build a __Recommendation Algorithm__ from scratch
- All while learning `R` __coding__!
<br><br>
<hr>
<!-- CTA end -->



### III. Predict Campaign Performance <a name="predict"></a>

We created a machine learning model to predict sales. Providing the variables, Market ID, Market Size, Location ID, Age of Store, Promotion and Week, we are able to predict total sales.

A group of models was created using [automated machine learning](https://en.wikipedia.org/wiki/Automated_machine_learning). Below is a model leaderboard displaying models in order of predictive accuracy. The accuracy is measured on the metric root mean squared error (RMSE). The Stacked Ensemble model performs best, with an __RMSE of 5.13__.

With continued fine-tuning, the RMSE may be lowered further, creating an even more accurate model.

<p style="text-align:center">
<img src="/assets/2018-12-11-marketing-analysis-promotion-campaign/model-metrics.jpg" style="width:70%;">
</p>

<br>


#### A. Model Interpretability <a name="model"></a>

Automated machine learning is a good way to automatically generate high-performing models. However, it is important to inspect model details to understand what makes the model good.

The following is a graphical method used to highlight features the model interprets as important to predicting Sales. 

<p style="padding-left:30px;">
On the left (Y-axis) are the variables (features), with some features grouped by numeric ranges. The bottom (X-axis) represents 80 observations from test data used to test the model’s performance. The more green a features are, the more important they are in predicting Sales.
</p>

For example, for test cases 25 to 50, Market ID 3, Market Size Large and Location ID numbered below 218 are good features for prediction. 

<p style="text-align:center">
<img src="/assets/2018-12-11-marketing-analysis-promotion-campaign/machine-learning-model-interpretability.jpg" style="width:70%;">
</p>

This method of interpretability allows us to communicate what the machine learning model is doing behind the scenes. 


<br>

### IV. Business Results <a name="results"></a>

Our goal is to determine which promotions generate the most sales for the new fast-food item. Based on our analysis, machine learning model, and model interpretability, we determined the following:

- Large Market sales outperform other markets by approximately 40%
- Newer stores have better sales performance than older stores.
- All promotions performed well with Market ID 3.
- Promotions are mostly even, with Promotion 1 having a slight edge in the Large market.

<strong class="highlight">For maximum sales performance, we recommend targeting the new item with Promotion 1, in the Large Market, at stores less than 9 of age. </strong>

Verifying Large Market stores under 9 years of age - the chart below confirms Large Market stores under 9 years of age outperform the other market stores:

<p style="text-align:center">
<img src="/assets/2018-12-11-marketing-analysis-promotion-campaign/Verify-Sales-MarketSize-AgeOfStore-Less9.jpg" style="width:70%;">
</p>


<br>

### V. Conclusion <a name="conclusion"></a>

In this marketing analysis, we used promotion campaign data from a fast-food business to determine which promotion produced the most sales. We determined all promotions are close in performance, but the market size and age of store will affect the promotion's sales performance.

Knowing which locations to promote the new item will allow the fast-food business to target specific locations and maximize sales.

<br>
<hr>
<br>

__About the Author:__ <br>
David Curry<br>
Founder, [Sure Optimize](https://sureoptimize.com)<br>
david@sureoptimize.com<br>
ROI-focused Marketing Analytics and Digital Marketing.