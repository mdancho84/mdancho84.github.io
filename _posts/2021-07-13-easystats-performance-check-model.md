---
layout: post
title: 'easystats: Quickly investigate model performance'
date: 2021-07-13T11:37:00.000+00:00
excerpt: The easystats performance R package makes it easy to investigate the relevant
  assumptions for regression models. Simply use the check_model() function to produce
  a visualization that combines 6 tests for model performance.
author: Matt Dancho
categories:
- R
tags:
- R-Bloggers
- Learn-R
- easystats
- performance
image: "/assets/2021-07-13-easystats/000-easystats-performance-thumb.jpg"
image_preview: "/assets/2021-07-13-easystats/000-easystats-performance-thumb.jpg"

---
Easystats `performance` is an R package that makes it easy to investigate the relevant assumptions for regression models. I'm super impressed with it! In the **next 10-minutes**, we'll:

* Learn how to investigate performance with `performance::check_model()`
* Check out the `Tidymodels` integration with `check_model()`
* **\[BIG BONUS\] Step through each of the 6 Model Performance Plots so you know how to use them.**

This article was last updated on: February 11th, 2022.

## R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<p>Here are the links to get set up. 👇</p>

<ul>
<li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li>
<li><a href="https://youtu.be/Bi8sHIo3s1Y">YouTube Tutorial</a></li>
</ul>

# Video Tutorial

Learn how to use easystats's `performance` package in our 7-minute YouTube video tutorial.

<iframe width="100%" height="450" src="https://www.youtube.com/embed/Bi8sHIo3s1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# What you make in this R-Tip

By the end of this tutorial, you'll make a helpful plot for analyzing the model quality of regression models.

<img src="/assets/2021-07-13-easystats/performance_check_model_plot.jpg" style='max-width:80%'>

<p class="text-center date">Model Performance Plot (made with <code>easystats</code>)</p>

# Thank You Developers.

Before we move on, please recognize that the `easystats`-verse of R packages is developed by [Daniel Lüdecke](https://github.com/strengejacke), [Dominique Makowski](https://dominiquemakowski.github.io/), [Mattan S. Ben-Shachar](https://github.com/mattansb), [Indrajeet Patil](https://sites.google.com/site/indrajeetspatilmorality/), and [Brenton M. Wiernik](https://wiernik.org/). Thank you for all that you do!

# Model `performance` tutorial

Let's get up and running with the `performance` package so we can assess **Model Performance**.

## Step 1: Load the Libraries and Data

First, run this code to:

1. **Load Libraries:** Load `performance` and `tidyverse`.
2. **Import Data:** We're using the `mpg` dataset that comes with `ggplot2`.

<img src="/assets/2021-07-13-easystats/00_libraries.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>
<a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

Load the data. We're using the `mpg` dataset.

<img src="/assets/2021-07-13-easystats/00_data.jpg" style='max-width:100%;margin-bottom:5px;'>

## Step 2: Make & Check a Linear Regression Model

Next, we'll quickly make a Linear Regression model with `tidymodels`. Then I'll cover more specifics on what we are doing. Here's the code. We follow 3-Steps:

1. **Load Tidymodels**: This loads `parsnip` (the modeling package in the tidymodels ecosystem)
2. **Make Linear Regression Model**: We set up a model specification using `linear_reg()`.
   * We then select an engine with `set_engine()`. In our case we want "lm", which connects to `stats::lm()`.
   * We then `fit()` the model. We use a formula `hwy ~ displ + class` to make highway fuel economy our target and displacement and vehicle class our predictors. This creates a trained model.
3. **Run Check Model**: With a fitted model in hand, we can run `performance::check_model()`, which generates the **Model Performance Plot**.

<img src="/assets/2021-07-13-easystats/01_code.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>
<a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

## Step 3: Check out the 6-Model Performance Plots!

Here is the output of `check_model()`, which returns a **Model Performance Plot**. This is actually 6-plots in one. We'll go through them next.

![Model Performance Plot](/assets/2021-07-13-easystats/performance_check_model_plot.jpg)

Let's go through the plots, analyzing our model performance.

# BONUS: Analyzing the 6 Model Performance Plots

Let's step through the 6-plots that were returned.

## Plots 1 & 2: Residual Linearity

The first two plots analyze the linearity of the residuals (in-sample model error) versus the fitted values. We want to make sure that our model is error is relatively flat.

![Residual Linearity](/assets/2021-07-13-easystats/02A_residual_linearity.jpg)

Quick Assessment:

* We can see that when our model predictions are around 30, **our model has larger error compared to below 30.** We may want to inspect these points to see what could be contributing to the lower predictions than actuals.

## Plots 3 & 4: Collinearity and High Leverage Points

The next two plots analyze for collinearity and high leverage points.

* **Collinearity** is when features are highly correlated, which can throw off simple regression models (more advanced models use a concept called regularization and hyperparameter tuning to control for collinearity).
* **High Leverage Points** are observations that deviate far from the average. These can skew the predictions for linear models, and removal or model adjustment may be necessary to control model performance.

![Collinearity and High Leverage Points](/assets/2021-07-13-easystats/02B_collinearity_leverage.jpg)

Quick Assessment:

* **Collinearity**: We can see that both of the features have low collinearity (green bars). No model adjustments are necessary.
* **Influential Observations**: None of the predictins are outside of the contour lines indicating we don't have high leverage points. No model adjustments are necessary.

## Plots 5& 6: Normality of Residuals

The last two plots analyze for the **normality of residuals**, which is how the model error is distributed. If the distributions are skewed, this can indicate problems with the model.

![Residual Normality](/assets/2021-07-13-easystats/02C_residual_normality.jpg)

Quick Assessment:

* **Quantile-Quantile Plot**: We can see that several points towards the end of the quantile plot do fall along the straight-line. This indicates that the model is not predicting well for these points. Further inspection is required.
* **Normal Density Plot**: We can see there is a slight increase in density around 15, which looks to shift the distribution to the left of zero. This means that the high-error predictions should be investigated further to see why the model is far off on this subset of the data.

# Conclusions

You learned how to use the `check_model()` function from the `performance` package, which makes it easy to quickly analyze regression models for model performance. **But, there's a lot more to becoming a data scientist.**

If you'd like to become a data scientist (and have an awesome career, improve your quality of life, enjoy your job, and all the fun that comes along), then I can help with that.

## My Struggles with Learning Data Science

It took me a long time to learn how to apply data science to business. And I made a lot of mistakes as I fumbled through learning R.

I specifically had a tough time navigating the ever-increasing landscape of tools and packages, trying to pick between R and Python, and getting lost along the way.

**If you feel like this, you're not alone.**

In fact, that's the driving reason that I created Business Science and Business Science University ([You can read about my personal journey here](https://www.business-science.io/business/2019/07/22/how-i-started-my-data-science-business.html)).

What I found out is that:

1. **Data Science does not have to be difficult, it just has to be taught from a business perspective**
2. **Anyone can learn data science fast provided they are motivated.**

# How I can help

If you are interested in learning R and the ecosystem of tools at a deeper level, then I have a streamlined program that will **get you past your struggles** and improve your career in the process.

It's my [5-Course R-Track System](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series/). It's an integrated system containing 5 courses that work together on a learning path. Through 8 projects, you learn everything you need to help your organization: from data science foundations, to advanced machine learning, to web applications and deployment.

The result is that **you break through previous struggles**, learning from my experience & our community of 2653 data scientists that are ready to help you succeed.

Ready to take the next step? Then [let's get started.](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series/)

![](/assets/rtrack_what_theyre_doing_2.jpg)

<p style="font-size: 36px;text-align: center;"><a href="https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series">Join My 5-Course R-Track Program<br>(Become A 6-Figure Data Scientist)</a></p>