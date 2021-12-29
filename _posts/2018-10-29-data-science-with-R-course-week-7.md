---
layout: post
title: "Data Science With R Course Series - Week 7"
excerpt: "Learn how to explain machine learning models with LIME. LIME stands for Local Interpretable Model-Agnostic Explanations and is used to understand which model features have the most predictive impact."
author: "David Curry"
date: 2018-10-29 5:15:00 -0400
categories: [University]
tags: [R-Project, R, Data Science, DS4B 201-R, Business Understanding]
image: /assets/2018-10-29-data-science-with-R-7/system_week7.png
image_preview: /assets/2018-10-29-data-science-with-R-7/system_week7_preview.png
---


After week 7, you will be able to communicate confidently which model features are the most important.

Interpretability is a very important topic in machine learning. The automated machine learning tool, `H2O`, makes a data scientist’s life easier, however it doesn't remove the need to understand your model. As the data scientist, you need to be able to explain why the selected model is the best.

In this week’s curriculum, you learn how to explain “black-box” machine learning models with `LIME`. `LIME` stands for Local Interpretable Model-Agnostic Explanations and is used to understand __which model features have the most predictive impact__.



<br/>
<p>Here is a recap of our trajectory and the course overview:</p>

## Recap: Data Science With R Course Series
You’re in the [Week 7: Machine Learning Interpretability with LIME](#week7). Here’s our game-plan over the 10 articles in this series. We’ll cover how to apply __data science for business with R__ following our systematic process.


- [Week 1: Getting Started](https://www.business-science.io/university/2018/09/20/data-science-with-R-week-1.html)
- [Week 2: Business Understanding](https://www.business-science.io/university/2018/09/24/data-science-with-R-course-week-2.html)
- [Week 3: Data Understanding](https://www.business-science.io/university/2018/10/01/data-science-with-R-course-week-3.html) 
- [Week 4: Data Preparation](https://www.business-science.io/university/2018/10/10/data-science-with-R-course-week-4.html)
- [Week 5: Predictive Modeling With H2O](https://www.business-science.io/university/2018/10/15/data-science-with-R-course-week-5.html)
- [Week 6: H2O Model Performance](https://www.business-science.io/university/2018/10/22/data-science-with-R-course-week-6.html)
- __Week 7: Machine Learning Interpretability With LIME__ (You're Here)
- [Week 8: Link Data Science To Business With Expected Value](https://www.business-science.io/university/2018/11/05/data-science-with-R-course-week-8.html)
- [Week 9: Expected Value Optimization And Sensitivity Analysis](https://www.business-science.io/university/2018/11/12/data-science-with-R-course-week-9.html)
- [Week 10: Build A Recommendation Algorithm To Improve Decision Making](https://www.business-science.io/university/2018/11/19/data-science-with-R-course-week-10.html)


<p style="text-align:center">
<img src="/assets/2018-10-29-data-science-with-R-7/system_week7.png" style="width:100%;">
</p>
<p class="date text-center">Week 7: Machine Learning Interpretability with LIME</p>

<br/>
<p style="text-align:center">
<img src="/assets/2018-10-22-data-science-with-R-6/course_testimonial.png" style="width:100%;">
</p>
<p class="date text-center">Student Feedback</p>

<hr/>


## Week 7: Machine Learning Interpretability with LIME {#week7}

### Overview &amp; Setup

The Overview &amp; Setup will walk through the setup to support `LIME` within the project workflow, and prepare the machine learning model for interpretation.

After understanding the features that make up your machine learning model, __you will be able to answer the critical business question__, <i>Why is employee churn happening?</i>


<p style="text-align:center">
<img src="/assets/2018-10-29-data-science-with-R-7/overview.png" style="width:100%;">
</p>

<br/>


### Feature Explanation With LIME

Jump right into learning about the `LIME` package and how it works to interpret machine learning models. Here you will make predictions using your model and investigate employee turnover model results. You will then use LIME to produce an explanation of why certain employees were selected.


<p style="text-align:center">
<img src="/assets/2018-10-29-data-science-with-R-7/feature_explanation.png" style="width:100%;">
</p>

<br/>


### Challenge #4

In this 2 part challenge, you will recreate a single explanation plot and a full explanations plot to visualize important features. 

After you complete the challenge, walk through the Solution videos to compare and review your working solution. 


<br/>
<iframe width="100%" height="450" src="https://www.youtube.com/embed/zoqFD9-vB-s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<br/>


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

The next article in the ___Data Science With R Series___ covers __Evaluation: Calculating The Expected ROI (Savings) Of A Policy Change__.

Learn how to communicate the cost savings of using your model. Inform the business to make decisions around time and resources based on __the value of your findings__.

Use the Expected Value Framework after your model is complete to explain which features are most important. The Expected Value Framework is a method to calculate savings from implementing business changes based on the model’s results.


<p style="text-align:center">
<img src="/assets/2018-10-29-data-science-with-R-7/system_week8.png" style="width:100%;">
</p>
<p class="date text-center">Week 8: Evaluation: Calculating The Expected ROI (Savings) Of A Policy Change
</p>

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
