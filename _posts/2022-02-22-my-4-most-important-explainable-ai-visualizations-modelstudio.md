---
layout: post
author: Matt Dancho
categories:
- R
tags:
- modelStudio
- R-Bloggers
- Learn-R
- R
title: My 4 most important explainable AI visualizations (modelStudio)
date: 2022-02-22 08:03:00 -0500
excerpt: 'The modelStudio library offers an interactive studio for developing and
  exploring explainable AI visualizations. '
image: "/assets/modelstudio-thumb.jpg"
image_preview: "/assets/modelstudio-thumb.jpg"

---
**Machine learning is great, until you have to explain it.** Thank god for `modelStudio`.

`modelStudio` is a new R package that makes it easy to interactively explain machine learning models using state-of-the-art techniques like Shapley Values, Break Down plots, and Partial Dependence. I was **_shocked_** at how quickly I could get up and running!  

In the **next 10-minutes**, we'll learn how to make my **4 most important Explainable AI plots**:

* 1: Feature Importance
* 2: Break Down Plot
* 3: Shapley Values
* 4: Partial Dependence
* **BONUS: I'll _not only_ show you how to make the plots in under 10-minutes, but I'll explain exactly** **how to discover insights from each plot!**

## R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://mailchi.mp/business-science/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<p>Here are the links to get set up. 👇</p>

<ul> <li><a href="https://mailchi.mp/business-science/r-tips-newsletter">Get the Code</a></li> <li><a href="https://youtu.be/Bi8sHIo3s1Y">YouTube Tutorial</a></li> </ul>

# Video Tutorial

Learn how to use the `modelStudio` package in our 10-minute YouTube video tutorial.

<iframe width="100%" height="450" src="https://www.youtube.com/embed/XW1ZeJKVnZk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# What you make in this R-Tip

By the end of this tutorial, you'll make the **4 most helpful plots** for explaining machine learning models.

![](/assets/modelstudio-app.jpg)

<p class="text-center date">Explain your machine learning models (made with <code>modelStudio</code>)</p>

# Thank You Developers.

Before we move on, please recognize that `modelStudio` was developed by [Hubert Baniecki](https://github.com/hbaniecki) and [Przemyslaw Biecek](https://github.com/pbiecek), and is part of the [Dr. Why ecosystem](https://modeloriented.github.io/DrWhy/) of R packages, which are a collection of tools for Visual Exploration, Explanation and Debugging of Predictive Models. Thank you for everything you do!

# `modelStudio` Tutorial

Let's get up and running with `modelStudio` so we can interactively **explain a predictive model.** 

## Step 1: Load the Libraries and Data

First, run this code to:

1. **Load Libraries:** Load `modelStudio` , `DALEX`, `tidyverse` and `tidymodels`.
2. **Import Data:** We're using the `mpg` dataset that comes with `ggplot2`.

![](/assets/modelstudio_01_libraries_data.jpg)

<p class='text-center date'> <a href='https://mailchi.mp/business-science/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

Our data looks like this. We want to understand how Highway Fuel Economy (miles per gallon, `hwy`) can be estimated based on the remaining 9 columns `manufacturer:class`.

  
![](/assets/modelstudio_02_data.jpg)

## Step 2: Make a Predictive Model

The best way to understand what affects `hwy` is to build a predictive model (and then explain it).  Let's build an `xgboost` model using the `tidymodels` ecosystem. If you've never heard of Tidymodels, it's like Scikit Learn for R (and easier to use if I may be so bold).

* **Select Model Type:** We use the `boost_tree()` function to establish that we are making a Boosted Tree
* **Set the Mode:** Using `set_mode()` we select "regression" because we are predicting a numeric value `hwy`.
* **Set the Engine:** Next we use `set_engine()` to tell Tidymodels to use the "xgboost" library. 
* **Fit the Model:** This performs a simple training of the model to fit each of the 9 predictors to the target `hwy`. _Note that we did not perform cross-validation, hyperparameter tuning, or any advanced concepts as they are beyond the scope of this tutorial._ 

![](/assets/modelstudio_03_xgboost.jpg)

<p class='text-center date'> <a href='https://mailchi.mp/business-science/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

## Step 3: Make an Explainer

With a predictive model in hand, we are ready to create an **explainer**. In basic terms, an explainer is a consistent and unified way to explain predictive models. The explainer can accept many different model types like:

* Tidymodels
* mlr3
* H2O
* Python Scikit Learn Models

And it returns the explanation results from the model in a consistent format for investigation.

OK, here's the code to create the explainer. 

![](/assets/modelstudio_04_dalex.jpg)

<p class='text-center date'> <a href='https://mailchi.mp/business-science/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

## Step 4: Run `modelStudio`

The last step is to run `modelStudio`. Now you are ready to explore your predictive model. 

![](/assets/modelstudio_05_modelstudio.jpg)

This opens up the `modelStudio` app - **an interactive tool for exploring predictive models!**

![](/assets/modelstudio_06_modelstudio_app.jpg)

# BONUS: My 4 Most Important Explainable AI Plots

OK, it would be **_pretty_** **_silly_** to end the tutorial here. 

Well... I mean, you can pull up the tool. 

BUT, you can't use it to generate anything meaningful (yet). 

The good news is I'm going to keep going with a **MEGA-BONUS**. 

I'm going to show you **which 4 plots I use the most**, and **explain them** in detail so you can use them (and understand them) to generate **MASSIVE INSIGHTS** for your business. 

Alright, let's go. 

## Plot 1: Feature Importance

![](/assets/modelstudio_07_plot1.jpg)

### What is it?

The feature importance plot is a **global representation**. This means that it looks all of your observations and tells you which features (columns that help you predict) have in-general the most predictive value for your model. 

### How do I interpret it?

So here's how I read this plot:

1. `displ` - The Engine Displacement (Volume) has the **most predictive value** in general for this dataset. It's an important feature. In fact, it's 5X more important than the `model` feature. And 100X more important than `cyl`. So I should DEFINITELY investigate it more. 
2. `drv` is the **second most** important feature. Definitely want to review the Drive Train too. 
3. Other features - The Feature importance plot shows the the other features have some importance, but the **80/20 rule** tells me to focus on `displ` and `drv`. 

## Plot 2: Break Down Plot

Next, an incredibly valuable plot is the **Break Down Plot**. 

![](/assets/modelstudio_07_plot2.jpg)

### What is it?

The Breakdown plot is a **local representation** that explains one specific observation. The plot then shows a intercept (starting value) and the positive or negative contribution that each feature has to developing the prediction. 

### How do I interpret it?

So here's how I read this breakdown plot:

1. For Observation ID 70 (Dodge Caravan), that has an actual `hwy` of 12 Miles Per Gallon (MPG)
2. The **starting point (intercept)** for all observations is 23.281 MPG. 
3. The `displ = 2.4` which **boosts** the model's prediction by +3.165 MPG. 
4. The `drv = 'f'` which **increases** the model's prediction another +1.398 MPG
5. The `manufacturer = 'dodge'` which **decreases** the MPG prediction by -1.973
6. And we **keep going** until we reach the prediction. Notice that the first features tend to be the most important because they move the prediction the most.

### Careful: Global vs Local Explanations

**Important Note: Global Versus Local Explanations**

I can select a different observation, and we get a completely different Break Down plot. This is what happens with **local explainers**. They _change telling us different insights by each observation._ 

When I switch to ID = 222, I get a totally different vehicle (VW New Beetle). Accordingly the Local Break Down Plot changes (but the global Feature Importance Plot does not!)

![](/assets/modelstudio_07_plot2b.jpg)

## Plot 3: Shapley Values

The third most important plot I look at is the shapley values. 

![](/assets/modelstudio_07_plot3.jpg)

### What is it?

Shapley values are a **local representation** of the feature importance. Instead of being global, the shapley values will change by observation telling you again the contribution. 

The shapley values are related closely to the **Breakdown plot**, however you may seem slight differences in the feature contributions. The order of the shapley plot is always in the most important magnitude contribution. We also get positive and negative indicating if the feature decreases or increases the prediction. 

### How do I interpret it?

* The **centerline** is again the intercept (23.28 MPG)
* The `displ` feature is the **most important** for the observation (ID = 38). The `displ` increases the prediction by 2.728 MPG. 
* We can keep going for the rest of the features. 

## Plot 4: Partial Dependence Plot

The last plot is super powerful!

![](/assets/modelstudio_07_plot4.jpg)

### What is it?

The partial dependence plot helps us examine one feature at a time. Above we are only looking at Displacement. The partial dependence is a global representation, meaning it will not change by observation, but rather helps us see how the model predicts over a range of values for the feature being examined. 

### How do I interpret it?

We are investigating only `displ`. As values go from low (smaller engines are 1.6 liter) to high (larger engines are 7 liter), the average prediction for highway fuel becomes lower going from 30-ish Highway MPG to under 20 Highway MPG.  

# Recap

We learned how to use the `modelStudio` to not only create explainable models but also interpret the plots. Great work! **But, there's a lot more to becoming a data scientist.**

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

{% include top_rtips.html %}