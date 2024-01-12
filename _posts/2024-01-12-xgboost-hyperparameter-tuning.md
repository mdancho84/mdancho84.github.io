---
layout: post
title: "XGBoost: Tuning the Hyperparameters (My Secret 2 Step Process in R)"
date: 2024-01-12 17:00:00 -0500
excerpt: "Hey guys, welcome back to my R-tips newsletter. In today's lesson, I'm sharing how I tune XGBoost Hyperparameters in R. Let's go!" 
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- xgboost
image: "/assets/076_xgboost_hyperparameters.jpg"
image_preview: "/assets/076_xgboost_hyperparameters.jpg"

---
Hey guys, welcome back to my [R-tips newsletter](https://learn.business-science.io/r-tips-newsletter). For years, I was hyperparameter tuning XGBoost models wrong. In 3 minutes, I'll share one secret that took me 3 years to figure out. When I did, it cut my training time 10X. Let's dive in. 

### Table of Contents

Here's what you're learning today:

* **My big mistake** I'll explain what I was doing wrong for 3 years. And how I fixed it.
* **How I Hyperparameter Tune XGBoost Models Now in R**. This will blow your mind.

![XGBoost R Code](/assets/076_get_the_r_code.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 076 Folder)</a></p>

---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> 
    <li><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Sign up for our R-Tips Newsletter and get the code.</a></li> 
    <!-- <li><a href="https://youtu.be/fkwKQi7skAw">YouTube Tutorial</a></li>-->
</ul>

# For years I was hyperparameter tuning XGBoost wrong. Here's how I do it now.

First, here's a quick review of XGBoost and the algorithm's hyperparameters.

![XGBoost Hyperparameter Tuning](/assets/076_xgboost_hyperparameters.jpg)

### What is XGBoost?

XGBoost (eXtreme Gradient Boosting) is a popular machine learning algorithm, especially for structured (tabular) data. It's claim to fame is winning tons of Kaggle Competitions. But more importantly, it's fast, accurate, and easy to use. But it's also easy to screw it up. 

### Hyperparameter Tuning

To stabilize your XGBoost models, you need to perform hyperparameter tuning. Otherwise XGBoost can overfit your data causing predictions to be horribly wrong on out of sample data. 

### My 3-Year "Beginner" Mistake: 

**XGBoost has tons of parameters.** The mistake I was making was treating all of the parameters equally. This caused me hours of tuning my models. And my results weren't half as good until I started doing this.


### How I improved my hyperparameter tuning: 

XGBoost has one parameter that rules them all. And after 3 years, I noticed that model stability was 80% driven by this parameter. What was it? 

**Learning rate.** When I figured this out that's when things started to change. My models got better. My training times were reduced. Win win. 

### My Simple 2 Step Hyperparameter Tuning Method for XGBoost: 

What I was doing wrong was doing random grid search over all of the parameters. This took hours. So I made a key change. I began isolating Learning Rate, tuning it first. This was Step 1. The search space for one parameter is super fast to tune. 

**What about the other parameters?** Once learning rate was tuned, I then opened the search space to more parameters. This is Step 2. The rest of the parameters have maybe 20% contribution to performance, so that means I can reduce the search space dramatically.

### The BIG benefit: 

Separating tuning into 2 steps cut my training times by a factor of 10X. And my models actually became better. Faster training, better models. Win win. 

# XGBoost Hyperparameter Tuning (how to do my 2 step process in `R`)

Now that you know the secret, let's see how to do it in `R`.

### R Code

**Get The Code:** You can follow along with the R code in the [R-Tips Newsletter](https://learn.business-science.io/r-tips-newsletter?el=website). **All code is avaliable in R-Tip 076.**

![R Code](/assets/076_get_the_r_code.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 076 Folder)</a></p>

## Load the Libraries and Data

First, we load the libraries and data. Run this code from the [R-Tips Newsletter 076 Folder](https://learn.business-science.io/r-tips-newsletter?el=website).

![Libraries and Data](/assets/076_1_libraries_data.jpg)

This loads in the customer churn dataset. We'll use this to demonstrate the 2 step process.

![Customer Churn Data](/assets/076_2_churn_data.jpg)

## Set up a Model and Preprocessor Specification

This is from `tidymodels`. We'll use this to set up our model and preprocessing specification. Run this code from the [R-Tips Newsletter 076 Folder](https://learn.business-science.io/r-tips-newsletter?el=website).

**Important:** We only specify the `learn_rate = tune()` as the only tuning parameter right now. This is Step 1. We'll add more parameters in Step 2.

![Model and Preprocessor](/assets/076_3_model_and_preprocessor.jpg)

## Step 1: Tuning the Learn Rate

For the first stage, we tune the learn rate. This is the most important parameter. Run this code from the [R-Tips Newsletter 076 Folder](https://learn.business-science.io/r-tips-newsletter?el=website).

![Tune Learn Rate](/assets/076_4_tune_learn_rate.jpg)

In the code above:

1. You make a Tuning Grid specifying 10 values for the learn rate.
2. You set up the Workflow using the model and preprocessing specification.
3. You set up the Resampling Specification using 5-fold cross validation. Then tune the learn rate using the `tune_grid()` function and optimizing for the maximum ROC AUC value.

The last line of code returns the ranked results. You can see that the best learn rate is 2.91e-2.

![Tune Learn Rate Results](/assets/076_5_rankings.jpg)

## Step 2: Tuning the Rest of the Parameters

Now that we have the learn rate, we can tune the rest of the parameters. Run this code from the [R-Tips Newsletter 076 Folder](https://learn.business-science.io/r-tips-newsletter?el=website).

![Tune Rest of Parameters](/assets/076_6_tune_other_params.jpg)

In the code above:

1. Get the best learn rate from step 1
2. Update the model specification with the best learn rate and the other parameters to tune.
3. Make a new grid with 10 combinations of the new tuning parameters
4. Tune the model using the new grid and the same resampling specification as before.

The last line of code returns the ranked results. You can see that the best AUC is still 0.839, which is what we obtained before.

![Tune Rest of Parameters Results](/assets/076_7_rankings.jpg) 

## Bonus Code: Finalize the Model

Now that we have the best parameters, we can finalize the model. Run this code from the [R-Tips Newsletter 076 Folder](https://learn.business-science.io/r-tips-newsletter?el=website).

![Bonus Code](/assets/076_8_bonus_code.jpg) 



# Conclusions:

You've learned my secret 2 step process for tuning XGBoost models in R. But there's a lot more to becoming an elite data scientist. 

If you are struggling to become a Data Scientist for Business, then please read on...

{% include cta_struggles_rtrack.md %}