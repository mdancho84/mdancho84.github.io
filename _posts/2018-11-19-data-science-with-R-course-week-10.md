---
layout: post
title: "Data Science With R Course Series - Week 10"
excerpt: "Create strategies for management to reduce employee attrition. This week is designed to integrate critical thinking and strategy development with data-driven decision making."
author: "David Curry"
date: 2018-11-19 4:00:00 -0500
categories: [University]
tags: [R-Project, R, Data Science, DS4B 201-R, Business Understanding]
image: /assets/2018-11-19-data-science-with-R-10/system_week10.jpg
image_preview: /assets/2018-11-19-data-science-with-R-10/system_week10_preview.jpg
---


Week 10 is designed to integrate critical thinking and strategy development with data-driven decision making. As an added bonus, you'll see a sneak preview of the Shiny Web App built in DS4B 301-R. The Recommendation Algorithm developed here plays a major role in that course.

You will implement a 3-Step Process for creating a recommendation algorithm:

1. __Creating a "Correlation Funnel"__ - This is a discretized correlation plot that enables us to visualize cohort relationships to the target variable, attrition.

2. __Using A Recommendation Algorithm Worksheet To Develop Strategies__ - This is key to having a structured approach to developing data-driven recommendations. It's also a communication tool for executives & process stakeholders to showcase the logic you used and to incorporate their input into the strategies.

3. __Implementing Strategies Into R Code__ - You'll develop a function called recommend_strategies() that outputs strategies by employee. This function is integral to DS4B 301-R, Building A Shiny Web App.


<br/>
<p>Here is a recap of our trajectory and the course overview:</p>

## Recap: Data Science With R Course Series
You’re in the [Week 10: Build A Recommendation Algorithm To Improve Decision Making](#week10). Here’s our game-plan over the 10 articles in this series. We’ll cover how to apply __data science for business with R__ following our systematic process.


- [Week 1: Getting Started](https://www.business-science.io/university/2018/09/20/data-science-with-R-week-1.html)
- [Week 2: Business Understanding](https://www.business-science.io/university/2018/09/24/data-science-with-R-course-week-2.html)
- [Week 3: Data Understanding](https://www.business-science.io/university/2018/10/01/data-science-with-R-course-week-3.html) 
- [Week 4: Data Preparation](https://www.business-science.io/university/2018/10/10/data-science-with-R-course-week-4.html)
- [Week 5: Predictive Modeling With H2O](https://www.business-science.io/university/2018/10/15/data-science-with-R-course-week-5.html)
- [Week 6: H2O Model Performance](https://www.business-science.io/university/2018/10/22/data-science-with-R-course-week-6.html)
- [Week 7: Machine Learning Interpretability With LIME](https://www.business-science.io/university/2018/10/29/data-science-with-R-course-week-7.html)
- [Week 8: Link Data Science To Business With Expected Value](https://www.business-science.io/university/2018/11/05/data-science-with-R-course-week-8.html)
- [Week 9: Expected Value Optimization And Sensitivity Analysis](https://www.business-science.io/university/2018/11/12/data-science-with-R-course-week-9.html)
- __Week 10: Build A Recommendation Algorithm To Improve Decision Making__ (You’re here)


<p style="text-align:center">
<img src="/assets/2018-11-19-data-science-with-R-10/system_week10.jpg" style="width:100%;">
</p>
<p class="date text-center">Week 10: Build A Recommendation Algorithm To Improve Decision Making</p>

<br/>
<p style="text-align:center">
<img src="/assets/2018-11-05-data-science-with-R-8/course_testimonial.png" style="width:100%;">
</p>
<p class="date text-center">Student Feedback</p>

<hr/>


## Week 10: Build A Recommendation Algorithm To Improve Decision Making {#week10}

### Overview and Setup

The <i>Overview and Setup</i> is an introduction to this week’s learning modules where you __create logic to help managers implement data-driven strategies to reduce turnover__. 

Go through a three step process for building a recommendation algorithm from scratch.

<p style="text-align:center">
<img src="/assets/2018-11-19-data-science-with-R-10/recommendation_algorithm_process.jpg" style="width:100%;">
</p>

<br/>


### Recipes for Feature Discretization

Learn to format data to create a visualization that will compare cohorts within the data. Continue to use the `recipes` package to discretize features for correlation analysis.

<p style="text-align:center">
<img src="/assets/2018-11-19-data-science-with-R-10/recipes-feature-discretization.jpg" style="width:100%;">
</p>

<br/>


### Discretized Correlation Visualization

Create a visualization that shows the features that both support and contradict attrition. You will create the visualization below by first manipulating the data, then creating the visualization with the formatted data.

<p style="text-align:center">
<img src="/assets/2018-11-19-data-science-with-R-10/discrete-visualization-correlation.jpg" style="width:100%;">
</p>

<br/>


### Challenge #7: Custom Descritized Correlation Plotting Function

Using your code from the Discretized Correlation Visualization module, your challenge is to create a reusable discretized correlation plot function. The process of converting existing code to a custom function has been done a few times throughout the course. By now you will be comfortable refactoring code for reusability.

Compare your results with the instructor solution videos after your solution is complete.

<br/>


### Recommendation Strategy Worksheet

Create a recommendation strategy development worksheet that will be used by managers to reduce employee attrition using an automated recommendation system.

The strategy worksheet is an excel based tool for creating strategy logic to help reduce employee attrition problem. 


<br/>
<iframe width="100%" height="450" src="https://www.youtube.com/embed/Ke6xefVR4vM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<br/>


### Personal Development Recommendations

Get ready to create a recommendation algorithm. Use your existing attrition strategy worksheet to create the recommendation algorithm with the following 3 steps:

1. __Focus on one strategy group__ to identify features that are interrelated to a specific strategy
2. __Develop strategies__ such as (bad, good, better, best)
3. __Implement__ the recommendation algorithm to code

The personal development recommendation strategies will help managers target employees for individual development, such as mentorship or training. 


<p style="text-align:center">
<img src="/assets/2018-11-19-data-science-with-R-10/personal-recommendation.jpg" style="width:100%;">
</p>

<br/>


### Professional Development Recommendations

In the previous section you learned the process to take the recommendation algorithm from the worksheet to code implementation. In this module, you will work through a similar process for employee professional development. 

The professional development recommendations will help managers identify employees for career development, such as a promotion or specialized role.


<p style="text-align:center">
<img src="/assets/2018-11-19-data-science-with-R-10/professional-development.jpg" style="width:100%;">
</p>

<br/>


### Challenge #8: Work Environment Recommendations

In this challenge you will create a work environment strategy. Identify work-life balance features, then follow the same process used to develop the personal and professional development strategies to create the work environment strategy

Once complete, compare your results with the instructor solution videos.


<p style="text-align:center">
<img src="/assets/2018-11-19-data-science-with-R-10/work-environment.jpg" style="width:100%;">
</p>

<br/>


### Deployable Recommendation Function

In the last course module, you will convert the recommendation algorithm to a function. The purpose of creating a deployable function is so that the recommendation logic can be reused in different business applications.

The deployable recommendation function is the same function that will be used to create a `shiny` app for the course, __Build A Shiny Web App (DS4B 301-R)__.


<p style="text-align:center">
<img src="/assets/2018-11-19-data-science-with-R-10/deployable-function.jpg" style="width:100%;">
</p>

<br/>


## Now is the Time to Level-Up Your Data Science Skills!

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
