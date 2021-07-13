---
layout: post
title: "easystats: Quickly investigate model performance"
date:   2021-07-13 11:37:00
excerpt: "The easystats performance R package makes it easy to investigate the relevant assumptions for regression models. Simply use the check_model() function to produce a visualization that combines 6 tests for model performance."
author: "Matt Dancho"
categories: [R]
tags: [R-Bloggers, Learn-R, easystats, performance ]
image: "/2021-07-13-easystats/000-easystats-performance-thumb.jpg"
image_preview: "/2021-07-13-easystats/000-easystats-performance-thumb.jpg"
---

Easystats `performance` is an R package that makes it easy to investigate the relevant assumptions for regression models. Simply use the `check_model()` function to produce a visualization that combines 6 tests for model performance. We'll quickly:

- Learn how to investigate performance with `performance::check_model()`
- Check out the `Tidymodels` integration with `check_model()`
- __Step through each of the 6 Model Performance Plots so you know how to use them.__

## R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://mailchi.mp/business-science/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.


<p>Here are the links to get set up. 👇</p>

<ul>
    <li><a href="https://mailchi.mp/business-science/r-tips-newsletter">Get the Code</a></li>
    <li><a href="https://youtu.be/Bi8sHIo3s1Y">YouTube Tutorial</a></li> 
</ul>




# Video Tutorial<br><small>For those that prefer Full YouTube Video Tutorials.</small>

Learn how to use `performance::check_model()` in our 7-minute YouTube video tutorial. 

<figure class="text-center">
    <a href="https://youtu.be/Bi8sHIo3s1Y" target="_blank">
    <img src="/assets/2021-07-13-easystats/000-easystats-performance-thumb.jpg" style='max-width:100%;'> </a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>



# What is Model Performance?

__Model performance__ is the ability to understand the quality of our model predictions. This means both understanding if we have a good model and where our model is susceptible to poor predictions. We'll see how with `performance::check_model()`. 


__About the performance package__:

`performance` is a new R package for evaluating statistical models in R. It provides a suite of tools to measure and evaluate model performance. We'll focus on the `check_model()` function, which makes a helpful plot for analyzing the model quality of regression models. 

<img src="/assets/2021-07-13-easystats/performance_check_model_plot.jpg" style='max-width:80%'>

<p class='text-center date'>
  <a href='https://github.com/easystats/performance' target='_blank'> The performance package (GitHub)</a>
</p>

We'll go through a short tutorial to get you up and running with `performance::check_model()`. 



# Before we get started, get the R Cheat Sheet

`performance` is great for making quick plots of model performance. But, you'll still need to learn how to model data with `tidymodels`. For those topics, I'll use the [Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html) to refer to `tidymodels` code in my workflow.

### Quick Example:

[Download the Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html). Then __Click the hyperlink__ to "tidymodels".

<a href="https://www.business-science.io/r-cheatsheet.html"> <img src="/assets/2021-07-13-easystats/cheatsheet_tidymodels.jpg" style='max-width:80%;display:block;margin:auto;'>

<br>

Now you're ready to quickly reference the `tidymodels` ecosystem and functions.

![tidymodels ecosystem](/assets/2021-07-13-easystats/tidymodels_org.jpg)


Onto the tutorial. 

# Model Performance Tutorial

Let's get up and running with the `performance` package using `check_model()` with the `tidymodels` integration so we can assess __Model Performance__. 



## Load the Libraries and Data

First, run this code to:

1. __Load Libraries:__ Load `performance` and `tidyverse`. 
2. __Import Data:__ We're using the `mpg` dataset that comes with `ggplot2`. 

<img src="/assets/2021-07-13-easystats/00_libraries.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'> 
  <a href='https://mailchi.mp/business-science/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

Load the data. We're using the `mpg` dataset. 

<img src="/assets/2021-07-13-easystats/00_data.jpg" style='max-width:100%;margin-bottom:5px;'>


## Linear Regression: Make and Check Models

Next, we'll quickly make a Linear Regression model with `tidymodels`. Then I'll cover more specifics on what we are doing. Refer to the [Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html) for more on Tidymodels beyond what we cover here. Alternatively, check out my [R for Business Analysis Course (DS4B 101-R)](https://university.business-science.io/p/ds4b-101-r-business-analysis-r) to learn Tidymodels in-depth. 

### Modeling: Making and Checking the Tidymodels Linear Regression Model

Here's the code. We follow 3-Steps:

1. __Load Tidymodels__: This loads `parsnip` (the modeling package in the tidymodels ecosystem)

2. __Make Linear Regression Model__: We set up a model specification using `linear_reg()`. We then select an engine with `set_engine()`. In our case we want "lm", which connects to `stats::lm()`. We then `fit()` the model. We use a formula `hwy ~ displ + class` to make highway fuel economy our target and displacement and vehicle class our predictors. This creates a trained model. 

3. __Run Check Model__: With a fitted model in hand, we can run `performance::check_model()`, which generates the __Model Performance Plot__. 


<img src="/assets/2021-07-13-easystats/01_code.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'> 
  <a href='https://mailchi.mp/business-science/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

### Model Performance Plot

Here is the output of `check_model()`, which returns a __Model Performance Plot__. This is actually 6-plots in one. We'll go through them next. 

![Model Performance Plot](/assets/2021-07-13-easystats/performance_check_model_plot.jpg)

Let's go through the plots, analyzing our model performance. 

## Analyzing the 6 Model Performance Plots

Let's step through the 6-plots that were returned. 

### Residual Linearity

The first two plots analyze the linearity of the residuals (in-sample model error) versus the fitted values. We want to make sure that our model is error is relatively flat.

![Residual Linearity](/assets/2021-07-13-easystats/02A_residual_linearity.jpg)

Quick Assessment: 

- We can see that when our model predictions are around 30, __our model has larger error compared to below 30.__ We may want to inspect these points to see what could be contributing to the lower predictions than actuals. 

## Collinearity and High Leverage Points

The next two plots analyze for collinearity and high leverage points. __Collinearity__ is when features are highly correlated, which can throw off simple regression models (more advanced models use a concept called regularization and hyperparameter tuning to control for collinearity). __High Leverage Points__ are observations that deviate far from the average. These can skew the predictions for linear models, and removal or model adjustment may be necessary to control model performance. 

![Collinearity and High Leverage Points](/assets/2021-07-13-easystats/02B_collinearity_leverage.jpg)

Quick Assessment:

- __Collinearity__: We can see that both of the features have low collinearity (green bars). No model adjustments are necessary.

- __Influential Observations__: None of the predictins are outside of the contour lines indicating we don't have high leverage points. No model adjustments are necessary. 


## Normality of Residuals

The last two plots analyze for the __normality of residuals__, which is how the model error is distributed. If the distributions are skewed, this can indicate problems with the model. 

![Residual Normality](/assets/2021-07-13-easystats/02C_residual_normality.jpg)

Quick Assessment:

- __Quantile-Quantile Plot__: We can see that several points towards the end of the quantile plot do fall along the straight-line. This indicates that the model is not predicting well for these points. Further inspection is required. 

- __Normal Density Plot__: We can see there is a slight increase in density around 15, which looks to shift the distribution to the left of zero. This means that the high-error predictions should be investigated further to see why the model is far off on this subset of the data. 


# Summary

We learned how to use the `check_model()` function from the `performance` package, which makes it easy to quickly analyze regression models for model performance. __But, there's a lot more to modeling.__ 

It's critical to __learn how to build predictive models__ with `tidymodels`, which is the premier framework for modeling and machine learning in R. 

If you'd like to learn `tidymodels` and data science for business, then read on. 👇



# My Struggles with Learning Data Science

It took me a long time to learn data science. And I made a lot of mistakes as I fumbled through learning R.  I specifically had a tough time navigating the ever increasing landscape of tools and packages, trying to pick between R and Python, and getting lost along the way.

__If you feel like this, you're not alone.__

In fact, that's the driving reason that I created Business Science and Business Science University ([You can read about my personal journey here](https://www.business-science.io/business/2019/07/22/how-i-started-my-data-science-business.html)).

What I found out is that:

1. __Data Science does not have to be difficult, it just has to be taught smartly__

2. __Anyone can learn data science fast provided they are motivated.__

# How I can help

If you are interested in learning R and the ecosystem of tools at a deeper level, then I have a streamlined program that will __get you past your struggles__ and improve your career in the process. 

It's called the [5-Course R-Track System](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series/). It's an integrated system containing 5 courses that work together on a learning path. Through 5+ projects, you learn everything you need to help your organization: from data science foundations, to advanced machine learning, to web applications and deployment. 

The result is that __you break through previous struggles__, learning from my experience & our community of 2000+ data scientists that are ready to help you succeed. 

Ready to take the next step? Then [let's get started.](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series/)



<!-- This is markdown code. It wont look formatted in your browser, 
    but will be fine when published. to the website -->

<br><br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}


