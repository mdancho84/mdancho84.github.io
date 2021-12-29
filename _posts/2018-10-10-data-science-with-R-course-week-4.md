---
layout: post
title: "Data Science With R Course Series - Week 4"
author: "David Curry"
date: 2018-10-10 6:00:00 -0400
categories: [University]
tags: [R-Project, R, Data Science, DS4B 201-R, Business Understanding]
image: /assets/2018-10-10-data-science-with-R-4/system_week4.png
---

This week in the Data Science With R Course Series we’ll cover [Data Preparation](#week4), where we structure the data in preparation for modeling. This week’s modules will teach you:

1. How to create a preprocessing pipeline with the `recipes` package
2. How to prepare data for human readability and machine-readable formats
3. How to perform a __Correlation Analysis__

<br/>
<p>Here is a recap of our trajectory and the course overview:</p>

## Recap: Data Science With R Course Series
You’re in the [Week 4: Data Preparation](#week4). Here’s our game-plan over the 10 articles in this series. We’ll cover how to apply __data science for business with R__ following our systematic process.


- [Week 1: Getting Started](https://www.business-science.io/university/2018/09/20/data-science-with-R-week-1.html)
- [Week 2: Business Understanding](https://www.business-science.io/university/2018/09/24/data-science-with-R-course-week-2.html)
- [Week 3: Data Understanding](https://www.business-science.io/university/2018/10/01/data-science-with-R-course-week-3.html) 
- __Week 4: Data Preparation__ (You're here)
- [Week 5: Predictive Modeling With H2O](https://www.business-science.io/university/2018/10/15/data-science-with-R-course-week-5.html)
- [Week 6: H2O Model Performance](https://www.business-science.io/university/2018/10/22/data-science-with-R-course-week-6.html)
- [Week 7: Machine Learning Interpretability With LIME](https://www.business-science.io/university/2018/10/29/data-science-with-R-course-week-7.html) 
- [Week 8: Link Data Science To Business With Expected Value](https://www.business-science.io/university/2018/11/05/data-science-with-R-course-week-8.html)
- [Week 9: Expected Value Optimization And Sensitivity Analysis](https://www.business-science.io/university/2018/11/12/data-science-with-R-course-week-9.html)
- [Week 10: Build A Recommendation Algorithm To Improve Decision Making](https://www.business-science.io/university/2018/11/19/data-science-with-R-course-week-10.html)


<p style="text-align:center">
<img src="/assets/2018-10-10-data-science-with-R-4/system_week4.png" style="width:100%;">
</p>
<p class="date text-center">Week 4: Data Preparation</p>

<br/>
<p style="text-align:center">
<img src="/assets/2018-10-10-data-science-with-R-4/week_4_testimonial.png" style="width:100%;">
</p>
<p class="date text-center">Student Feedback</p>

<hr/>

## Week 4: Data Preparation {#week4}

### Preprocessing Pipeline

In data science, the data is used for both analyzing/modeling and communicating insights to people. This module demonstrates how to create a reusable preprocessing structure to prepare data for people (communication) and machines (analyzing/modeling). 

<p style="text-align:center">
<img src="/assets/2018-10-10-data-science-with-R-4/preprocessing_pipeline.png" style="width:100%;">
</p>

<br/>

### Data Preparation For People

The Data Preparation for People module focuses on formatting data so it is easily understood in plots, visualizations, and other data communication methods. 

This module will teach you how to merge data, join data, and maintain accurate ordering for categorical data.

<p style="text-align:center">
<img src="/assets/2018-10-10-data-science-with-R-4/data_preparation_for_people.png" style="width:100%;">
</p>

<br/>

### Data Preparation For Machines 

Properly formatting data for machine learning is one of the most important aspects of data science. This step involves understanding your goal, your algorithm, and your data. The Data Preparation for Machines module will teach you how to create a custom histogram function to visually analyze data features. 

Through the [`recipes` package](https://tidymodels.github.io/recipes/), this module also teaches important data science topics, such as zero variance features, data transformations, center & scale, and dummy variables.

<br/>
<iframe width="100%" height="450" src="https://www.youtube.com/embed/uwEBqmhiWyI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<br/>

### Correlation Analysis

Without good features, you can't make good predictions. The most effective way to build a good model is to build good features that correlate to the problem.  Correlation analysis is a way of reviewing features in the data to let us know if we are on the right track before modeling. 

This module will teach you how to group similar features, calculate feature correlation, and analyze feature correlation. 
>
Correlation analysis is an important step because it saves time by avoiding modeling features with low correlation.

<p style="text-align:center">
<img src="/assets/2018-10-10-data-science-with-R-4/correlation_analysis.png" style="width:100%;">
</p>

<br/>

### Challenge #3

Course challenges are short exercises that give you the opportunity to apply the skills you’re learning. This week's modules teach you how to perform correlation analysis on some of the features. 

Challenge #3 provides an opportunity for you to __apply your correlation analysis skills__ to a group of features.  

<p style="text-align:center">
<img src="/assets/2018-10-10-data-science-with-R-4/challenge_3.png" style="width:100%;">
</p>

<!-- begin University CTA -->
<br>
<hr>

<h2>You Need To Learn R For Business</h2>

<p><a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?coupon_code=DS4B15">
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
<a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?coupon_code=DS4B15"><strong>Start Learning Today!</strong></a>
</p>


<br>
<hr>
<!-- end University CTA -->


## Next Up

The next article in the ___Data Science With R Series___ covers __Automated Machine Learning with [H2O](https://www.h2o.ai/products/h2o/)__. 

Week 5 is an exciting part of the course where you learn how to create machine learning models with the R package, H2O. The culmination of the previous weeks have been preparation for machine learning modeling. 

__Get ready for a FUN week!__  During week 5, you will learn:

<ol>
    <li>Modeling Setup</li>
    <li>H2O Automated Machine Learning</li>
    <li>Advanced concepts, such as cross validation and grid search</li>
    <li>Visualizing the best performing models</li>
</ol>


<p style="text-align:center">
<img src="/assets/2018-10-10-data-science-with-R-4/system_week5.png" style="width:100%;">
</p>
<p class="date text-center">Week 5: Modeling & Performance</p>

<br>
<hr>

## New Course Coming Soon: Build A Shiny Web App!

You’re experiencing the magic of creating a high performance employee turnover risk prediction algorithm in DS4B 201-R. Why not put it to good use in an ___Interactive Web Dashboard___?

In our new course, ___Build A Shiny Web App (DS4B 301-R)___, you’ll learn how to integrate the H2O model, LIME results, and recommendation algorithm building in the 201 course into an ML-Powered R + Shiny Web App!

<br/>
<p class="text-center" style="font-size:30px;">Shiny Apps Course Coming in October 2019!!! Sign up for <a href = "https://university.business-science.io/">Business Science University Now!</a></p>

<br/>
<p style="text-align:center"><a href="https://university.business-science.io/">
<img src="/img/hr_301_app.png" alt="DS4B 301-R Shiny Application: Employee Prediction" style="width:100%;">
</a></p>
<p class="text-center date">Building an R + Shiny Web App, DS4B 301-R</p>

<br/>
<p class="text-center" style="font-size:30px;"><a href = "https://university.business-science.io/">Get Started Today!</a></p>
