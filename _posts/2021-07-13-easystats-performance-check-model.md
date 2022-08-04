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

# Recap

We learned how to use the `check_model()` function from the `performance` package, which makes it easy to quickly analyze regression models for model performance. **But, there's a lot more to becoming a data scientist.**

If you'd like to become a data scientist (and have an awesome career, improve your quality of life, enjoy your job, and all the fun that comes along), then I can help with that.

## Step 1: Watch my Free 40-Minute Webinar

Learning data science on your own is hard. I know because **IT TOOK ME 5-YEARS to feel confident.**

AND, I don't want it to take that long for you.

So, I put together a [**FREE 40-minute webinar (a masterclass)**](https://learn.business-science.io/free-rtrack-masterclass-signup) that provides a roadmap for what worked for me.

Literally 5-years of learning, consolidated into 40-minutes. It's jammed packed with value. I wish I saw this when I was starting... It would have made a huge difference.

## Step 2: Take action

For my action-takers, if you are ready to take your skills to the next level and DON'T want to wait 5-years to learn data science for business, AND you want a career you love that earns you $100,000+ salary (plus bonuses), and you'd like someone to help you do this in UNDER  6-MONTHS or less....

Then I can help with that too. There's a link in the [**FREE 40-minute webinar**](https://learn.business-science.io/free-rtrack-masterclass-signup) for a special price (because you are special!) and taking that action will kickstart your journey with me in your corner.

Get ready. The ride is wild. And the destination is AMAZING!

{% include top_rtips.html %}
