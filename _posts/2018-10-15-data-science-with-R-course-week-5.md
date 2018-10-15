---
layout: post
title: "Data Science With R Course Series - Week 5"
author: "David Curry"
date: 2018-10-15 6:30:00 -0400
categories: [University]
tags: [R-Project, R, Data Science, DS4B 201-R, Business Understanding]
image: 2018-10-15-data-science-with-R-5/system_week5.png
---


The culmination of the previous weeks has been preparation for machine learning modeling. At this stage, we have defined the business problem, we’ve explored and understood how the data relates to the business problem, and we’ve preprocessed the data in preparation for modeling. 

This week will focus on the following topics:

- Introduction to automated machine learning, predictive modeling with H2O
- Apply automated machine learning to the Attrition problem
- Develop high-performance models and learn how automated machine learning works 
- Develop a visualization of the models to communicate the best and worst performing models


<br/>
<p>Here is a recap of our trajectory and the course overview:</p>

## Recap: Data Science With R Course Series
You’re in the [Week 5: Predictive Modeling With H2O](#week5). Here’s our game-plan over the 10 articles in this series. We’ll cover how to apply __data science for business with R__ following our systematic process.


- [Week 1: Getting Started](https://www.business-science.io/university/2018/09/20/data-science-with-R-week-1.html)
- [Week 2: Business Understanding](https://www.business-science.io/university/2018/09/24/data-science-with-R-course-week-2.html)
- [Week 3: Data Understanding](https://www.business-science.io/university/2018/10/01/data-science-with-R-course-week-3.html) 
- [Week 4: Data Preparation](https://www.business-science.io/university/2018/10/10/data-science-with-R-course-week-4.html)
- __Week 5: Predictive Modeling With H2O__ (You're Here)
- Week 6: H2O Model Performance 
- Week 7: Machine Learning Interpretability With LIME
- Week 8: Link Data Science To Business With Expected Value
- Week 9: Expected Value Optimization And Sensitivity Analysis
- Week 10: Build A Recommendation Algorithm To Improve Decision Making


<p style="text-align:center">
<img src="/assets/2018-10-15-data-science-with-R-5/system_week5.png" style="width:100%;">
</p>
<p class="date text-center">Week 5: Predictive Modeling With H2O</p>

<br/>
<p style="text-align:center">
<img src="/assets/2018-10-15-data-science-with-R-5/course_testimonial.png" style="width:100%;">
</p>
<p class="date text-center">Student Feedback</p>

<hr/>


## Week 5: Predictive Modeling With H2O {#week5}

### Modeling Setup

The modeling setup focuses on structuring your project to support new utility functions and extracted models from H2O automated machine learning.

In addition, you will be introduced to the new libraries `cowplot`, `fs` and `glue` - used in evaluating H2O model performance.

<p style="text-align:center">
<img src="/assets/2018-10-15-data-science-with-R-5/modeling_setup.png" style="width:100%;">
</p>

<br/>


### H2O Automated Machine Learning

H2O automated machine learning is an exciting part of the course. This module will teach you the following:

- Learn how to use the H2O library to create machine learning models
- Inspect the model leaderboard to select the best performing models
- Extract and save models to your directory structure for exploration
- Make predictions using your models
- Use H2O documentation to continue learning

<p style="text-align:center">
<img src="/assets/2018-10-15-data-science-with-R-5/automated_machine_learning.png" style="width:100%;">
</p>

<br/>


### Advanced Concepts

Automated machine learning is an effective way to create and compare multiple machine learning models. However, you still need to understand why a model is good or bad and adjust individual model parameters for better performance. 

The advanced concepts will teach you how to modify model parameters, create a stable model using k-fold cross-validation, and an introduction to the grid search algorithm - the process automated machine learning uses to generate models.

<p style="text-align:center">
<img src="/assets/2018-10-15-data-science-with-R-5/cross_validation.png" style="width:100%;">
</p>

<br/>


### Visualizing The Leaderboard

Leaderboard visualization is a great way to communicate model performance. Learn how to create a function for visual representation of your machine learning models. The visualization can be filtered by model metrics, such as AUC or Logloss (more about AUC and Logloss in week 6). 

<br/>
<iframe width="100%" height="450" src="https://www.youtube.com/embed/NVI4gVfrSZk?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<br/>


### Bonus! Grid Search In H2O

The __Grid Search in H2O Bonus__ continues the model performance discussion from Advanced Concepts!  In this module you will learn how to tune a model that was generated from automated machine learning. 

Learn the details of extracting a model, analyzing performance metrics, and more!

<p style="text-align:center">
<img src="/assets/2018-10-15-data-science-with-R-5/grid_search.png" style="width:100%;">
</p>

<br/>


<!-- begin University CTA -->
<br>
<hr>

<h2>You Need To Learn R For Business</h2>

<p><a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&amp;coupon_code=DS4B_15">
<img src="/img/course_logo_full_DS4B_201_R.png" class="img-rounded pull-right" alt="Data Science For Business With R Course" style="width:30%;margin-left:20px;" />
</a></p>

<p><strong>To be efficient as a data scientist, you need to learn R.</strong> Take the course that has <strong>cut data science projects in half</strong> (see <a href="https://youtu.be/yw5CtGTzIw0">this testimonial</a> from a leading data science consultant) and has <strong>progressed data scientists more than anything they have tried before</strong>. Over 10-weeks you learn what it has taken data scientists 10-years to learn:</p>

<ul>
  <li>Our systematic data science for business framework</li>
  <li>R and H2O for Machine Learning</li>
  <li>How to produce Return-On-Investment from data science</li>
  <li>And much more.</li>
</ul>

<p class="text-center" style="font-size:30px;">
<a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15"><strong>Start Learning Today!</strong></a>
</p>


<br>
<hr>
<!-- end University CTA -->


## Next Up

The next article in the ___Data Science With R Series___ covers __H2O Model Performance__. 

Week 6 will cover H2O model performance and communicating performance to different stakeholders. You will learn how to:

1. Analyze H2O performance with precision and recall
2. Create a performance chart for data scientists
3. Create a performance chart for business people
4. Create the ultimate model performance dashboard



<p style="text-align:center">
<img src="/assets/2018-10-15-data-science-with-R-5/system_week6.png" style="width:100%;">
</p>
<p class="date text-center">Week 6: H2O Model Performance</p>

<br>
<hr>

## New Course Coming Soon: Build A Shiny Web App!

You’re experiencing the magic of creating a high performance employee turnover risk prediction algorithm in DS4B 201-R. Why not put it to good use in an ___Interactive Web Dashboard___?

In our new course, ___Build A Shiny Web App (DS4B 301-R)___, you’ll learn how to integrate the H2O model, LIME results, and recommendation algorithm building in the 201 course into an ML-Powered R + Shiny Web App!

<br/>
<p class="text-center" style="font-size:30px;">Shiny Apps Course Coming in October 2018!!! Sign up for <a href = "https://university.business-science.io/">Business Science University Now!</a></p>

<br/>
<p style="text-align:center"><a href="https://university.business-science.io/">
<img src="/img/hr_301_app.png" alt="DS4B 301-R Shiny Application: Employee Prediction" style="width:100%;">
</a></p>
<p class="text-center date">Building an R + Shiny Web App, DS4B 301-R</p>

<br/>
<p class="text-center" style="font-size:30px;"><a href = "https://university.business-science.io/">Get Started Today!</a></p>