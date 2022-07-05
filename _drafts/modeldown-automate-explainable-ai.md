---
layout: post
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
title: 'modelDown: Automate Explainable AI (Machine Learning) in R'
date: 2022-07-06 06:00:00 -0400
excerpt: 'Machine learning is great... until you have to explain it. Stakeholders
  are normally non-technical, C-suites that ultimately want to know what the model
  does for the business. And how it helps increase revenue or decrease costs. A new
  R package, modelDown can help. '
image: "/assets/modeldown_report_1.jpg"
image_preview: "/assets/modeldown_report_1.jpg"

---
**Machine learning is great... until you have to explain it.** Stakeholders are normally non-technical, C-suites that ultimately want to know what the model does for the business. And how it helps increase revenue or decrease costs. A new R package, `modelDown` can help. And, I want to teach you how to extract that precious business value that company's crave.

In this R-tip, I'm going to show you how to unlock _massive business value_ with `modelDown` in **under 5-minutes:**

1. Learn how to **make machine learning models** with `tidymodels`
2. **Unlock the cheat-code** to making ANY machine learning model explainable
3. **BONUS:** Learn how to read the Automated Explainable AI Report that you create **(so you can explain the ML model to ANYONE!)**

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<p>Here are the links to get set up. 👇</p>

<ul> <li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li> <li><a href="https://youtu.be/pZ3vqzaE7lk">YouTube Tutorial</a></li> </ul>

# Video Tutorial

I have a companion video tutorial that shows even more secrets (plus mistakes to avoid).

<iframe width="100%" height="450" src="https://www.youtube.com/embed/pZ3vqzaE7lk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# What you make in this R-Tip

By the end of this tutorial, you'll make a full explainable AI report that helps you explain business insights to executives, managers, non-technical business people, and even your parents (_"Hey Dad, this is why customers are churning!"_). OK, maybe not your parents, but definitely C-suite executives.

![](/assets/modeldown_report_2.jpg)

<p class="text-center date">Uncover business insights by automating explainable AI</p>

# Thank You Developers.

Before we move on, please recognize that `modelDown` was developed by Przemyslaw Biecek, Magda Tatarynowicz, Kamil Romaszko, and Mateusz Urbanski. Thank you for everything you do!

Also, the full documentation for `modelDown` can be [accessed here](https://modeloriented.github.io/modelDown/).

# `modelDown` Tutorial

Let's dive into using `modelDown` so we can **automate explainable AI**.

**Important:** All of the data and code shown can be accessed through our Business Science [**R-Tips Project**](https://learn.business-science.io/r-tips-newsletter).

**Warning:** This is an advanced tutorial that will depend on knowledge of `tidymodels`. And, it may be uncomfortable if you are a _complete beginner_. BUT, I'll explain how you can learn R, tidymodels, and data science for business from scratch at the end of this tutorial.

Plus I have a **surprise** at the end (for everyone)!

## Step 1: Load the Libraries and Data

### First, run this code to **load the R libraries:**

Load `tidyverse` , `janitor`,  `tidymodels`, `DALEX` and `modelDown`. I'll explain the importance of each of these R packages as we use them.

![](/assets/modeldown_01_libraries.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

### Next, run this code to **pull in the data**.

We'll read in the Customer Churn data set that was used in the previous R-Tip on Survival Analysis.

![](/assets/modeldown_02_data.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the Data.</a> </p>

**Our data looks like this.**

![](/assets/modeldown_03_churn_data.jpg)

<p class='text-center date'>The customer churn dataset</p>

[We want to understand how customer churn data (Yes/No) depends on other factors](https://learn.business-science.io/r-tips-newsletter) like how long they have been a customer and what type of subscription plan they have (monthly, one-year, two-year).

## Step 2: Make a tidymodel

Next, it's time to make a `tidymodel`. This can be a bit challenging for beginners (and even experienced R users, so at the end of this tutorial I'll give you some more help). But just go with it until then...

### Recipes: Feature Engineering and Preprocessing

We'll start by getting our data into a format that the models can handle. Run this code to remove unnecessary columns "customer_id" and to one-hot encode any categorical predictors (e.g. "contract" and "gender").

![](/assets/modeldown_04_recipe.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

The preprocessing recipe is just **a template (often called a pipeline)** that takes incoming data and processes it into the "right" format for our models to learn from it.

### Here's the preprocessing effect.

**Before preprocessing** we have predictors like "contract" containing factors (categories) and unnecessary columns like "customer_id" that won't help us predict.

![](/assets/modeldown_05a_before.jpg)

<p class='text-center date'>Before Preprocessing</p>

**And after preprocessing**, our data changes into a format where predictors have been one-hot encoded and unnecessary columns have been removed. This format is much better for machine learning algorithms.

![](/assets/modeldown_05b_after.jpg)

<p class='text-center date'>After Preprocessing</p>

### Machine Learning with Tidymodels

Next, let's create a Random Forest model (Machine Learning). Random Forest models are usually accurate but suffer from being **"Black Box"**, a term that simply means not easy to explain.

Run this code.

![](/assets/modeldown_06_random_forest-1.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

We now have a **model specification**. A common beginner mistake is thinking a model specification is a trained model. The model specification is NOT a trained model. Rather, it's a template to create a model.

We'll train the model next.

### Train the Model

We have the two ingredients to train a model: A preprocessing recipe specification and a model specification. Next, we combine them and train them on the unprocessed dataset.

**Important:** I'm skipping some key steps like cross-validation for the sake of simplifying this tutorial. But, if you need to learn these key steps, then I will give you some free advice at the end of this tutorial.

Run this code to train the model.

![](/assets/modeldown_07_workflow.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

We can test the fitted model by making some predictions. Run this code.

![](/assets/modeldown_08a_predict.jpg)

Here's the result. A bunch of Yes/No's. **This is what we call "Class Predictions".** The algorithm is actually assigning "class" or category to the churn prediction.

![](/assets/modeldown_08a_predict_result.jpg)

**Problem: the Explainable AI algorithm can't use Class Predictions.** It needs "Class Probabilities", or actual numeric values from 0 to 1 that indicate the algorithms estimate of being a Yes.

Run this code to get class probabilities.

![](/assets/modeldown_08b_predict_proba_2.jpg)

**Solution: the Explainable AI algorithm can use the Class Probabilities.** We now have values from 0-1 for Churn=Yes.

Here's the result. Instead of Yes/Nos we get the algorithm's probability of churn being a yes or a no.

![](/assets/modeldown_08b_predict_proba_result.jpg)

OK, now that we have a way to get class probabilities, now we can make our "Black-Box" model explainable. Let's see how. 

## Step 3: Apply Explainable AI

# BONUS: Understand the Explainable AI Visualizations!

If you thought you were done...

We're just gettin' started!

THIS is the magic of trelliscope!!

* Add interactivity with the Plotly integration inside of `facet_trelliscope()`.
* Simply add `as_plotly = TRUE`

![](/assets/05_trelliscope_bonus_code.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

Check out the interactivity from plotly!!

![](/assets/05_trelliscope_bonus.gif)

<p class='text-center date'>Interactivity with the plotly-trelliscopejs integration</p>

# Recap

We learned how to use the `trelliscopejs` library to not only create 100's of static ggplots _but_ create 100's of interactive plotly plots. Great work! **But, there's a lot more to becoming a data scientist.**

If you'd like to become a data scientist (and have an awesome career, improve your quality of life, enjoy your job, and all the fun that comes along), then I can help with that.

## Step 1: Watch my Free 40-Minute Webinar

Learning data science on your own is hard. I know because **IT TOOK ME 5-YEARS to feel confident.**

AND, I don't want it to take that long for you.

So, I put together a [**FREE 40-minute webinar (a masterclass)**](https://mailchi.mp/business-science/rtrack-master-class-signup-3) that provides a roadmap for what worked for me.

Literally 5-years of learning, consolidated into 40-minutes. It's jammed packed with value. I wish I saw this when I was starting... It would have made a huge difference.

## Step 2: Take action

For my action-takers, if you are ready to take your skills to the next level and DON'T want to wait 5-years to learn data science for business, AND you want a career you love that earns you $100,000+ salary (plus bonuses), and you'd like someone to help you do this in UNDER  6-MONTHS or less....

Then I can help with that too. There's a link in the [**FREE 40-minute webinar**](https://mailchi.mp/business-science/rtrack-master-class-signup-3) for a special price (because you are special!) and taking that action will kickstart your journey with me in your corner.

Get ready. The ride is wild. And the destination is AMAZING!

![](/assets/rtrack_what_they_are_doing.jpeg)

{% include top_rtips.html %}