---
layout: post
title: "Data Science With R Course Series - Week 8"
excerpt: "Learn everything you need to know about the Expected Value Framework.  The Expected Value Framework is way to apply an expected value to a classification model - it connects a machine learning classification model to ROI for the business."
author: "David Curry"
date: 2018-11-05 3:00:00 -0500
categories: [University]
tags: [R-Project, R, Data Science, DS4B 201-R, Business Understanding]
image: 2018-11-05-data-science-with-R-8/system_week8.png
image_preview: 2018-11-05-data-science-with-R-8/system_week8_preview.png
---


This is a fun part of the course where you learn how to add value to the business by providing __ROI-Driven Data Science!__

Week 8 will teach you how to calculate a simple policy change - __Implementing a No Overtime Policy.__ You will calculate the expected savings compared to the current policy of allowing overtime. 

Next, develop a more sophisticated policy change - __Implementing a Targeted Overtime Policy__ - wherein you target high-flight risk employees. 

We'll teach you everything you need to know about the __Expected Value Framework__ so you can begin to implement this for __ANY BINARY CLASSIFICATION MODEL__. This includes Customer Churn, Targeted Advertisements, and more!


<br/>
<p>Here is a recap of our trajectory and the course overview:</p>

## Recap: Data Science With R Course Series
You’re in the [Week 8: Link Data Science To Business With Expected Value](#week8). Here’s our game-plan over the 10 articles in this series. We’ll cover how to apply __data science for business with R__ following our systematic process.


- [Week 1: Getting Started](https://www.business-science.io/university/2018/09/20/data-science-with-R-week-1.html)
- [Week 2: Business Understanding](https://www.business-science.io/university/2018/09/24/data-science-with-R-course-week-2.html)
- [Week 3: Data Understanding](https://www.business-science.io/university/2018/10/01/data-science-with-R-course-week-3.html) 
- [Week 4: Data Preparation](https://www.business-science.io/university/2018/10/10/data-science-with-R-course-week-4.html)
- [Week 5: Predictive Modeling With H2O](https://www.business-science.io/university/2018/10/15/data-science-with-R-course-week-5.html)
- [Week 6: H2O Model Performance](https://www.business-science.io/university/2018/10/22/data-science-with-R-course-week-6.html)
- [Week 7: Machine Learning Interpretability With LIME](https://www.business-science.io/university/2018/10/29/data-science-with-R-course-week-7.html)
- __Week 8: Link Data Science To Business With Expected Value__ (You’re here)
- [Week 9: Expected Value Optimization And Sensitivity Analysis](https://www.business-science.io/university/2018/11/12/data-science-with-R-course-week-9.html)
- [Week 10: Build A Recommendation Algorithm To Improve Decision Making](https://www.business-science.io/university/2018/11/19/data-science-with-R-course-week-10.html)


<p style="text-align:center">
<img src="/assets/2018-11-05-data-science-with-R-8/system_week8.png" style="width:100%;">
</p>
<p class="date text-center">Week 8: Link Data Science To Business With Expected Value</p>

<br/>
<p style="text-align:center">
<img src="/assets/2018-11-05-data-science-with-R-8/course_testimonial.png" style="width:100%;">
</p>
<p class="date text-center">Student Feedback</p>

<hr/>


## Week 8: Link Data Science To Business With Expected Value {#week8}

### Overview &amp; Setup

This overview will teach you how to quantify the business return on investment (ROI) using the Expected Value Framework.

<p style="text-align:center">
<img src="/assets/2018-11-05-data-science-with-R-8/expected_value_framework.png" style="width:100%;">
</p>

The Expected Value Framework is way to apply an expected value to a classification model - it connects a machine learning classification model to ROI for the business. 

Learn how to combine:

1. The threshold,
2. Knowledge of costs and benefits, and
3. The confusion matrix converted to expected error rates to account for the presence of false positives and false negatives.

We can use this combination to calculate the business savings for implementing policy as a results of your data science work.


<br/>


### Calculating Expected ROI: No Overtime Policy

Over the past few weeks you have created a machine learning model to predict which employees are likely to leave. Through your analysis, you determined the number one cause of employee turnover is working overtime hours.

In this module, you will create a baseline calculation to determine how much the business will save if they completely remove overtime for all employees.

<p style="text-align:center">
<img src="/assets/2018-11-05-data-science-with-R-8/no_overtime.png" style="width:100%;">
</p>

<br/>


### Targeting By Threshold Primer

Targeting by threshold will allow you to target employees above a certain level of turnover risk to __pinpoint those who are most likely to leave__. 

Use the calculation to determine the expected value to __find the optimal threshold that will maximize business savings__ for implementing the policy. 

<p style="text-align:center">
<img src="/assets/2018-11-05-data-science-with-R-8/threshold.png" style="width:100%;">
</p>

<br/>


### Calculating Expected ROI: Targeted Overtime Policy

Using the threshold from the previous module, learn how to apply the expected value to employees above a certain probability to leave.  

You will also compare the <i>targeted overtime policy</i> to the previous <i>no overtime policy</i> to calculate the cost difference between each policy. 

This will enable you to clearly communicate the savings for implementing overtime policy.

<br/>
<iframe width="100%" height="450" src="https://www.youtube.com/embed/eOvw8UEiObs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

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

The next article in the ___Data Science With R Series___ covers __Expected Value Optimization And Sensitivity Analysis__.

This is a really fun series of chapters that teach you the skills to align your data science work with business ROI.

This week’s targeted analysis leads into Week 9, where you will perform two advanced analyses that are critical in the course:

- __Threshold Optimization__ - A method used to maximize expected saving via iteratively calculating savings at various thresholds

- __Sensitivity Analysis__ - A method used to investigate how sensitive the expected savings is to various parameter values that were created based on assumptions


<p style="text-align:center">
<img src="/assets/2018-11-05-data-science-with-R-8/system_week9.png" style="width:100%;">
</p>
<p class="date text-center">Week 9: Expected Value Optimization And Sensitivity Analysis</p>

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