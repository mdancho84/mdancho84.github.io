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
**Machine learning is great... until you have to explain it.** Stakeholders are normally non-technical, C-suites that ultimately want to know what the model does for the business. And how it helps increase revenue or decrease costs. A new R package, `modelDown` can help. And, I want to teach you how to extract that precious business value that companies crave.

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

## 💡 Step 1: Load the Libraries and Data

### First, run this code to **load the R libraries:**

Load `tidyverse` , `janitor`,  `tidymodels`, `DALEX` and `modelDown`. I'll explain the importance of each of these R packages as we use them.

![](/assets/modeldown_01_libraries.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

### Next, run this code to **pull in the data**.

We'll read in the Customer Churn data set that was used in the previous R-Tip on Survival Analysis.

![](/assets/modeldown_02_data.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the Data.</a> </p>

[**Our data**](https://learn.business-science.io/r-tips-newsletter) looks like this.

![](/assets/modeldown_03_churn_data.jpg)

<p class='text-center date'>The customer churn dataset</p>

We want to understand how customer churn data (Yes/No) depends on other factors like how long they have been a customer and what type of subscription plan they have (monthly, one-year, two-year).

## 💡 Step 2: Make a tidymodel

Next, it's time to make a `tidymodel`. This can be a bit challenging for beginners (and even experienced R users, so at the end of this tutorial I'll give you some more help).

**If you are less experienced**, I recommend to just go with it (but then check out the guidance at the end of the training). I'll explain a lot about tidymodels through the process too.

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

**We have the two ingredients to train a model:** A preprocessing recipe specification and a model specification. Next, we combine them and train them on the unprocessed dataset.

**Key Concept: The Tidymodels Workflow.** Combining the model, recipe, and training is called creating a "tidymodels workflow". The tidymodels workflow is the object that can then be saved, loaded, and used to make predictions.

**Important:** I'm skipping some key steps like cross-validation for the sake of simplifying this tutorial. But, if you need to learn these key steps, then I will give you some free advice at the end of this tutorial.

Run this code to train the model.

![](/assets/modeldown_07_workflow.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

We can test the fitted model by making some predictions. Run this code.

![](/assets/modeldown_08a_predict.jpg)

Here's the result. A bunch of Yes/No's. **This is what we call "Class Predictions".** The algorithm is actually assigning "class" or category to the churn prediction.

![](/assets/modeldown_08a_predict_result.jpg)

### Avoid THIS big mistake (the class probability trick)

**Problem: the Explainable AI algorithm can't use Class Predictions.** It needs "Class Probabilities", or actual numeric values from 0 to 1 that indicate the algorithms estimate of being a Yes.

**THIS was a big mistake that cost me about an hour of headache** when making this tutorial for you. So hopefully showing you the **"Class Probability Trick"** helps save you some time.

Run this code to get class probabilities.

![](/assets/modeldown_08b_predict_proba_2.jpg)

**Solution: the Explainable AI algorithm can use the Class Probabilities.** We now have values from 0-1 for Churn=Yes.

Here's the result. Instead of Yes/Nos we get the algorithm's probability of churn being a yes or a no.

![](/assets/modeldown_08b_predict_proba_result.jpg)

OK, now that we have a way to get class probabilities, now we can make our "Black-Box" model explainable. Let's see how.

## 💡 Step 3: Apply Explainable AI

With a model in hand that predicts, we are now ready to explain the model. There's a trick you need to learn.

### The cheat-code for explainable AI

Here's a quick hack to make your models explainable. We will use the `DALEX` package, but we need to **make a custom prediction function**, first.

**A "custom prediction function"** is just a simple function that takes a model and data and retrieves the class probability predictions in the format that the DALEX package needs.

Run this code to make a custom explainer function.

![](/assets/modeldown_09_custom_explainer-1.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

**We can test our custom prediction function** using our trained `tidymodels` workflow. By running on the head (first 6 rows of our dataset), I can truncate to the first 6 predictions. Looks like it's working.

![](/assets/modeldown_10_test_custom_explainer-1.jpg)

### Explain ANY black-box model with `DALEX`

With the cheat code in hand (aka our custom prediction function), I can put all of the pieces together to make an explainer with an amazing R package called `DALEX`.

**What is a DALEX explainer?** Think of it like the precursor to understanding your Black-Box model.  A "DALEX Explainer" is just an object that connects the model, data, prediction function, to a series of algorithms designed to interpret the model and develop explanations.

Run this code to make a DALEX Explainer.

![](/assets/modeldown_11_dalex_explainer.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

### BIG Mistake: Don't forget to check your explainer

**Here's how to check your explainer was set up correctly.** Look at the DALEX explainer output.

![](/assets/modeldown_12_dalex_explainer_output.jpg)

I can see from the output that the explainer has been "initialized" and that several calculations have completed including making predicted values and residuals.

**Important: If the explainer is not set up correctly, you'll get _warnings_ in this stage.** When creating this tutorial (before fixing my prediction function), I had a bunch of warnings indicating my residuals weren't calculated. I just had to go back and change my custom prediction function to set up class probabilities (shown in Step 2 above).

### Create the Automated `modelDown` Website

Once you create a `DALEX` explainer, the beauty is that the ecosystem of [DrWhy Explainable AI packages can all use DALEX explainers](https://modeloriented.github.io/DrWhy/). Here's a snapshot of the DrWhy DALEXverse.

![](/assets/dalexverse.png)

<p class='text-center date'> The DALEXverse </p>

Run this code to create the automated `modelDown` website.

![](/assets/modeldown_13_modeldown.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

This creates a folder containing a deployable website with the automated explainable model report.

![](/assets/modeldown_report_1.jpg)

<p class='text-center date'> The modelDown Explainable AI Website </p>

# 💡 BONUS: Understand the Explainable AI Visualizations!

**Here's the next problem you're going to face.** The Model Down website is great! BUT, you need to know how to interpret the findings (AND uncover business insights).

I want to help. Here's how to interpret and find business insights.

### Step 1: The Variable (Feature) Importance Plot

**First, head to the "Variable Importance" Tab.** You will find a plot called "Feature Importance". This is how we know which features to invest time into.

**Important: I ALWAYS use the Feature Importance Plot first.** This tells me which features I need to focus my time and attention on.

![](/assets/modeldown_14_var_imp_plot.jpg)

<p class='text-center date'> Variable (Feature Importance) </p>

**The feature importance plot** is quite simply a visualization that identifies the top features in your modelDown report. I can see that "contract" and "tenure" are my top 2 features.

### Step 2: The Variable Response Plots

Now that we know WHICH features are important, I head over to the "Variable Response" tab. This is where I gain my Business Insights.

**Warning:** If you skip Step 1, you'll waste time investigating bad features. So make sure you do Step 1 first.

#### Business Insight #1: Contract Type

From Step 1, I saw that "contract" was the most important. On the Variable Response Tab, I select "contract", which leads me to my first Business Insight.

![](/assets/modeldown_15_feature_contract.jpg)

<p class='text-center date'> Inspecting the Top Feature (Most Important) </p>

I can quickly see that Month-to-Month contracts have increased churn probability according to my Random Forest Model.

**Business Insight #1:** To reduce churn, we could try giving customers incentivized offers to upgrade to longer-term contracts like one-year or two-year.

#### Business Insight #2: Tenure

In Step 1 above, I also saw that "tenure" was an important feature. On the Variable Response Tab, I select "tenure", and this leads me to my second Business Insight.

![](/assets/modeldown_16_feature_tenure.jpg)

<p class='text-center date'> Inspecting the 2nd Most Important Feature </p>

I can see that when tenure is low (less than 6-months), that customers have a much higher churn probability according to my Random Forest Model.

**Business Insight #2:** To reduce churn, we could try rewarding customer loyalty to stay beyond 6-months (Example promotion: "_Try for 6-months and the 7th is on us!"_).

# 💡 Conclusions

You learned how to use the `modelDown` library to not only automate an Explainable AI website report but you also learned how to use it to create 2 business insights. Great work! **But, there's a lot more to becoming a Business Scientist.**

If you'd like to become a Business Scientist (and have an awesome career, improve your quality of life, enjoy your job, and all the fun that comes along), then I can help with that.

## Step 1: Watch my Free 40-Minute Webinar

Learning data science on your own is hard. I know because **IT TOOK ME 5-YEARS to feel confident.**

AND, I don't want it to take that long for you.

So, I put together a [**FREE 40-minute webinar (a masterclass)**](https://learn.business-science.io/free-rtrack-masterclass-signup) that provides a roadmap for what worked for me.

Literally 5-years of learning, consolidated into 40-minutes. It's jammed packed with value. I wish I saw this when I was starting... It would have made a huge difference.

## Step 2: Take action

For my action-takers, if you are ready to become a Business Scientist, then read on.

If you need take your skills to the next level and DON'T want to wait 5-years to learn data science for business, AND you want a career you love that earns you $100,000+ salary (plus bonuses), AND you'd like someone to help you do this in UNDER  6-MONTHS or less....

**Then I can help with that too.**

## Surprise! 

There's a link in the [**FREE 40-minute webinar**](https://learn.business-science.io/free-rtrack-masterclass-signup) for a **special price (because you are special!)** and taking that action will kickstart your journey with me in your corner.

Get ready. The ride is wild. And the destination is AMAZING!

![](/assets/rtrack_what_they_are_doing.jpeg)

{% include top_rtips.html %}
