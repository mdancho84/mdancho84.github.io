---
layout: post
title: "Build and Evaluate A Logistic Regression Classifier"
date:   2020-12-22 07:00:00
excerpt: "Logistic regression is a simple, yet powerful classification model. In this  tutorial, learn how to build a predictive classifier that classifies the age of a vehicle."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, R, R-Tips, Logistic Regression, Classification]
image: 2020-12-22-logistic-regression-classifier/logistic_regression_cover.jpg
image_preview: 2020-12-22-logistic-regression-classifier/logistic_regression_cover.jpg
---



This article is part of a R-Tips Weekly, a [weekly video tutorial](https://mailchi.mp/business-science/r-tips-newsletter) that shows you step-by-step how to do common R coding tasks.

<br/>

Logistic regression is a simple, yet powerful classification model. In this  tutorial, learn how to build a predictive classifier that classifies the age of a vehicle. Then use `ggplot` to tell the story! 

Here are the links to get set up. 👇

- [Get the Code](https://mailchi.mp/business-science/r-tips-newsletter)
- [YouTube Tutorial](https://youtu.be/Qi-sVE0SWFc)


## The Story

In this analysis we learn that newer vehicles are MORE EFFICIENT, and we'll make a data visualization that tells the story.

<figure class="text-center">
  <a href="https://youtu.be/Qi-sVE0SWFc"><img src="/assets/2020-12-22-logistic-regression-classifier/video_thumb.jpg" border="0" /></a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>


## How did we make this plot?

1. Our logistic regression classifier modeled the data
2. We used `VIP` to find the most important features
3. We visualized with ggplot 💥



## Making a Logistic Regression Classifier

Logistic regression is a must-know tool in your data science arsenal. 

- Logistic Regression is **easy to explain**
- The classifier has no tuning parameters (**no knobs that need adjusted**)

Simply split our dataset, train on the training set, evaluate on the testing set.

Folks, it's that simple. 👏

<figure class="text-center">
  <img src="/assets/2020-12-22-logistic-regression-classifier/split_train_predict.jpg" border="0" />
  <figcaption>Full code in the video Github Repository</figcaption>
</figure>



## Evaluating Our Classification Model

_Question:_ How do we know our if our model is good? <br>
_Answer:_ Area Under the Curve (AUC)!

#### About AUC:

- Simple measure.
- We want greater than 0.5.
- Closer to 1.0, the better our model is. 
- Bonus: **ROC Plot - A way to visualize the AUC.**

<br>

<figure class="text-center">
  <img src="/assets/2020-12-22-logistic-regression-classifier/auc_plot.jpg" border="0" />
  <figcaption>Full code in the video Github Repository</figcaption>
</figure>



## Telling the Story

What can we do with a Logistic Regression Classifier? Let's **develop a story to communicate our insight**!

<br>

**1.** First, find the most important features (predictors) using `vip()`.

<br>

<figure class="text-center">
  <img src="/assets/2020-12-22-logistic-regression-classifier/feature_importance.jpg" border="0" />
  <figcaption>Full code in the video Github Repository</figcaption>
</figure>


<br>

**2.** Next, use `ggplot()` to make a visualization that focuses on the top features:
- _HWY_: The highway fuel economy (miles per gallon)
- _CLASS_: The Vehicle Class (e.g. pickup, subcompact, SUV) 

<br>

<figure class="text-center">
  <img src="/assets/2020-12-22-logistic-regression-classifier/logistic_regression_fuel_economy.jpg" border="0" />
  <figcaption>Full code in the video Github Repository</figcaption>
</figure>


### What did we learn using Logistic Regression?

It's clear now:
- Vehicles have become more efficient over time. 
- Highway fuel economy has gone up for every single class of vehicle. 
 


<br>

<center><p>Your story-telling skills are amazing. Santa approves. 👇</p></center>

![](/assets/2020-12-22-logistic-regression-classifier/santa.gif)



<br>

### But if you really want to improve your productivity... 

Here's how to **master R programming and become powered by R**.  👇
 
What happens after you learn R for Business. 

![](/assets/2020-12-22-logistic-regression-classifier/tree.gif)


Your **Job Performance Review** after you've launched [your first Shiny App](https://www.business-science.io/business/2020/08/05/build-data-science-app-3-months.html). 👇

![](/assets/2020-12-22-logistic-regression-classifier/applause.gif)


**This is career acceleration.**



<br>

### SETUP R-TIPS WEEKLY PROJECT

1. [Get the Code](https://mailchi.mp/business-science/r-tips-newsletter)

2. Check out the [R-Tips Setup Video](https://youtu.be/F7aYV0RPyD0).

Once you take these actions, you'll be set up to receive R-Tips with Code every week. =)

<br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}