---
layout: post
title: "Data Science With R Course Series - Week 3"
author: "Matt Dancho"
date:   2018-10-01 6:28:00
categories: [University]
tags: [R-Project, R, Data Science, DS4B 201-R, Business Understanding]
image: 2018-10-01-data-science-with-R-3/system_week3.png
---


Data Science and Machine Learning in business begins with R. Why? R is the premier language that enables ___rapid exploration, modeling, and communication___ in a way that no other programming language can match: __SPEED!__ This is why you need to learn R. Time is money, and, in a world where you are measured on productivity and skill, R is your machine-learning powered productivity booster. 

In this __Data Science With R Course Series__, we’ll cover what life is like in our ground-breaking, enterprise-grade course called [Data Science For Business With R (DS4B 201-R)](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15). The objective is to experience the qualities that make R great for business by following a real-world data science project. We review the course that will take you to advanced in __10 weeks__.

In this article, we’ll cover [Week 3: Data Understanding](#week3), which is where we expand our exploratory techniques with the goal of exposing key characteristics of the features in our data set.

But, first, a quick recap of our trajectory and the course overview.


## Data Science With R Course Series
You’re in the [__Week 3: Data Understanding__](#week3). Here’s our game-plan over the 10 articles in this series. We’ll cover how to apply data science for business with R following our systematic process.


- [Week 1: Getting Started](https://www.business-science.io/university/2018/09/20/data-science-with-R-week-1.html)
- [Week 2: Business Understanding](https://www.business-science.io/university/2018/09/24/data-science-with-R-course-week-2.html)
- [__Week 3: Data Understanding__](https://www.business-science.io/university/2018/10/01/data-science-with-R-course-week-3.html) (You're here)
- [Week 4: Data Preparation](https://www.business-science.io/university/2018/10/10/data-science-with-R-course-week-4.html)
- [Week 5: Predictive Modeling With H2O](https://www.business-science.io/university/2018/10/15/data-science-with-R-course-week-5.html)
- [Week 6: H2O Model Performance](https://www.business-science.io/university/2018/10/22/data-science-with-R-course-week-6.html)
- [Week 7: Machine Learning Interpretability With LIME](https://www.business-science.io/university/2018/10/29/data-science-with-R-course-week-7.html) 
- [Week 8: Link Data Science To Business With Expected Value](https://www.business-science.io/university/2018/11/05/data-science-with-R-course-week-8.html)
- [Week 9: Expected Value Optimization And Sensitivity Analysis](https://www.business-science.io/university/2018/11/12/data-science-with-R-course-week-9.html)
- [Week 10: Build A Recommendation Algorithm To Improve Decision Making](https://www.business-science.io/university/2018/11/19/data-science-with-R-course-week-10.html)


<p style="text-align:center">
<img src="/assets/2018-10-01-data-science-with-R-3/system_week3.png" style="width:100%;">
</p>
<p class="date text-center">Week 3: Data Understanding</p>


## Week 3: Data Understanding {#week3}

In data understanding, you’ll learn two key packages that can help identify characteristics of your data:

<ol>
    <li>`skimr`: For efficiently exploring data by data type (e.g. numeric, character, etc)</li>
    <li>`GGally`: For visualizing pair plots for many features within the data</li>
</ol>

Let’s take a peek at the course.

<br/>
### EDA with skimr

We kick week 3 off with `skimr`, a package for quickly skimming data by data type. In the course you’ll review both numeric data and character data. This is important to identify quickly what issues may be present such as missing values, numeric data that should be categorical, and so on. 

Here’s a snapshot of our first use of the `skim()` function.


<p style="text-align:center">
<img src="/assets/2018-10-01-data-science-with-R-3/eda-part-1.png" style="width:100%;">
</p>

<br/>
### EDA with GGally

Next, we build our knowledge of the data by making use of the GGally package for visually identifying relationships in the data. We focus on identifying relationships between the target (employee attrition) and various features in the data set. We make use of the `ggpairs()` function that enables us to visualize the complex relationships.

<p style="text-align:center">
<img src="/assets/2018-10-01-data-science-with-R-3/eda-part-2.png" style="width:100%;">
</p>

<iframe width="100%" height="450" src="https://www.youtube.com/embed/mom1-6aao9Q" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Next, you’ll build a custom plotting function with `Tidy Eval` (learned in Week 2) to extend the functionality of `ggpairs()` and enable honing in on the relationship between each feature and its interaction with attrition.

We end Week 3 with the second Challenge.

<br>
### Challenge #2

In Challenge 2, you’ll use your custom plotting function `plot_ggpairs()` to investigate many complex relationships. You’ll combine features into logical groups based on business knowledge and then visualize the grouped features together to explore their complex relationships to attrition. 

<p style="text-align:center">
<img src="/assets/2018-10-01-data-science-with-R-3/challenge-2.png" style="width:100%;">
</p>

<br/>

<br>
<hr>

<h2 class="text-center">Data Science For Business With R (DS4B 201-R)</h2>

<p class="text-center">
Learn everything you need to know to complete a real-world, end-to-end data science project with the R programming language. Transform your abilities in 10 weeks. 
</p>

<p class="text-center" style="font-size:30px;">
<a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15"><strong>Start Learning Today!</strong></a> 
</p>

<hr>
<br>


## Next Up

The next article in the ___Data Science With R Series___ covers Data Preprocessing. We’ll learn about an awesome package called `recipes` that enables preprocessing workflows. We’ll focus on two aspects of data preparation:

<ol>
    <li>Preparing data for people </li>
    <li>Preparing data for machines</li>
</ol>

<p style="text-align:center">
<img src="/assets/2018-10-01-data-science-with-R-3/system_week4.png" style="width:100%;">
</p>
<p class="date text-center">Week 4: Data Preprocessing</p>

<br>
<hr>
## New Course Coming Soon: Build A Shiny Web App!

You’re experiencing the magic of creating a high performance employee turnover risk prediction algorithm in DS4B 201-R. Why not put it to good use in an ___Interactive Web Dashboard___?

In our new course, ___Build A Shiny Web App (DS4B 301-R)___, you’ll learn how to integrate the H2O model, LIME results, and recommendation algorithm building in the 201 course into an ML-Powered R + Shiny Web App!

<p class="text-center" style="font-size:30px;">Shiny Apps Course Coming in October 2018!!! Sign up for <a href = "https://university.business-science.io/">Business Science University Now!</a></p>

<p style="text-align:center"><a href="https://university.business-science.io/">
<img src="/img/hr_301_app.png" alt="DS4B 301-R Shiny Application: Employee Prediction" style="width:100%;">
</a></p>
<p class="text-center date">Building an R + Shiny Web App, DS4B 301-R</p>

<p class="text-center" style="font-size:30px;"><a href = "https://university.business-science.io/">Get Started Today!</a></p>