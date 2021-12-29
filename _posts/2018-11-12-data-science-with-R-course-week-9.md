---
layout: post
title: "Data Science With R Course Series - Week 9"
excerpt: "This week will extend what you learned from the Expected Value by performing an optimization and sensitivity analysis."
author: "David Curry"
date: 2018-11-12 4:45:00 -0500
categories: [University]
tags: [R-Project, R, Data Science, DS4B 201-R, Business Understanding]
image: /assets/2018-11-12-data-science-with-R-9/system_week9.png
image_preview: /assets/2018-11-12-data-science-with-R-9/system_week9_preview.png
---


There are only two more weeks in the course! This week will extend what you learned from the Expected Value by performing an optimization and sensitivity analysis. 

The __optimization and sensitivity analysis__ will teach you how to identify the maximum business savings for the overtime problem and see how additional factors change the amount of savings:

- Threshold Optimization - A method used to maximize expected saving via iteratively calculating savings at various thresholds

- Sensitivity Analysis - A method used to investigate how sensitive the expected savings is to various parameter values that were created based on assumptions

Get ready, this week is packed full of learning!


<br/>
<p>Here is a recap of our trajectory and the course overview:</p>

## Recap: Data Science With R Course Series
You’re in the [Week 9: Expected Value Optimization And Sensitivity Analysis](#week9). Here’s our game-plan over the 10 articles in this series. We’ll cover how to apply __data science for business with R__ following our systematic process.


- [Week 1: Getting Started](https://www.business-science.io/university/2018/09/20/data-science-with-R-week-1.html)
- [Week 2: Business Understanding](https://www.business-science.io/university/2018/09/24/data-science-with-R-course-week-2.html)
- [Week 3: Data Understanding](https://www.business-science.io/university/2018/10/01/data-science-with-R-course-week-3.html) 
- [Week 4: Data Preparation](https://www.business-science.io/university/2018/10/10/data-science-with-R-course-week-4.html)
- [Week 5: Predictive Modeling With H2O](https://www.business-science.io/university/2018/10/15/data-science-with-R-course-week-5.html)
- [Week 6: H2O Model Performance](https://www.business-science.io/university/2018/10/22/data-science-with-R-course-week-6.html)
- [Week 7: Machine Learning Interpretability With LIME](https://www.business-science.io/university/2018/10/29/data-science-with-R-course-week-7.html)
- [Week 8: Link Data Science To Business With Expected Value](https://www.business-science.io/university/2018/11/05/data-science-with-R-course-week-8.html)
- __Week 9: Expected Value Optimization And Sensitivity Analysis__ (You’re here)
- [Week 10: Build A Recommendation Algorithm To Improve Decision Making](https://www.business-science.io/university/2018/11/19/data-science-with-R-course-week-10.html)


<p style="text-align:center">
<img src="/assets/2018-11-12-data-science-with-R-9/system_week9.png" style="width:100%;">
</p>
<p class="date text-center">Week 9: Expected Value Optimization And Sensitivity Analysis</p>

<br/>
<p style="text-align:center">
<img src="/assets/2018-11-05-data-science-with-R-8/course_testimonial.png" style="width:100%;">
</p>
<p class="date text-center">Student Feedback</p>

<hr/>


## Week 9: Expected Value Optimization And Sensitivity Analysis {#week9}

### Threshold Optimization: Maximizing Expected ROI

Last week you learned how to increase business savings by targeting employee overtime. In this module, you will use the R package `purrr` to determine the maximum savings for the overtime policy.

<p style="text-align:center">
<img src="/assets/2018-11-12-data-science-with-R-9/threshold_optimization.png" style="width:100%;">
</p>

<br/>


### Threshold Optimization: Visualizing The Expected Savings At Various Threshold

Create a plot using the threshold optimization to visualize the optimization results (business savings). This is a useful way to compare the optimization analysis to the employee churn business case and see how the threshold optimization produces business savings.

<br/>
<iframe width="100%" height="450" src="https://www.youtube.com/embed/M9WBfOGiVKE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<br/>


### Sensitivity Analysis: Adjusting Parameters To Test Assumptions

From the previous module, you determined that employees with a certain percentage of overtime (threshold) should be targeted to help reduce employee churn. However, this is based on a static employee salary. 

Now you will learn how business savings can change based on different employee salaries (sensitivity).

<p style="text-align:center">
<img src="/assets/2018-11-12-data-science-with-R-9/sensitivity_analysis_1.png" style="width:100%;">
</p>

<br/>


### Sensitivity Analysis: Visualizing The Effect Of Scenarios & Breakeven

In this module, you will analyze the threshold analysis with the addition of another variable, employee salary. Create a profitability heatmap to visualize how business savings changes based on employee revenue amounts.

<p style="text-align:center">
<img src="/assets/2018-11-12-data-science-with-R-9/sensitivity_analysis_2.png" style="width:100%;">
</p>

<br/>

### Challenge #5: Threshold Optimization For Stock Options

Your overtime analysis is complete, but now you see that people with no stock options are leaving at a faster rate than people with stock options. 

In this two-part challenge, you implement the same threshold optimization and sensitivity analysis, but this time for employee stock option.

<p style="text-align:center">
<img src="/assets/2018-11-12-data-science-with-R-9/challenge5.png" style="width:100%;">
</p>

<br/>

### Challenge #6: Sensitivity Analysis For Stock Options

Continuing the challenge, perform a sensitivity analysis for the stock option threshold, and adjust by stock option price. 

Once you complete your solution, compare it with the instructor's solution in the challenge solution videos.

<p style="text-align:center">
<img src="/assets/2018-11-12-data-science-with-R-9/challenge6.png" style="width:100%;">
</p>

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

The next article in the ___Data Science With R Series___ covers __Build A Recommendation Algorithm To Improve Decision Making__.


In the final week, you will implement a 3-Step Process for creating a recommendation algorithm. The learning modules are designed to integrate critical thinking and strategy development with data-driven decision making. 

As an added bonus, you'll see a sneak preview of the Shiny Web App built in DS4B 301-R. The Recommendation Algorithm developed here plays a major role in that course.
 sensitive the expected savings is to various parameter values that were created based on assumptions


<p style="text-align:center">
<img src="/assets/2018-11-12-data-science-with-R-9/system_week10.png" style="width:100%;">
</p>
<p class="date text-center">Week 10: Build A Recommendation Algorithm To Improve Decision Making</p>

<br/>
<hr/>


## Our Revolutionary System For Learning R For Business

<a href="https://university.business-science.io/"><img src="/img/course_logo_full_DS4B_101_R.png" class="img-rounded pull-right" alt="R Cheatsheet" style="width:25%;margin-left:20px"/></a>

__Are you interested in learning R For Business? Then look no further.__

- [Business Science University](https://university.business-science.io/) has the most advanced, technology intensive, and streamlined data science educational system for business on the planet. 

- We are developing a __NEW INTRODUCTORY COURSE (DS4B 101-R)__ that delivers an amazing educational experience for learners that want to apply R to business analysis.

- The __beginner DS4B 101-R__ is the prequel to the [__intermediate/advanced DS4B 201-R course__](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?coupon_code=DS4B15)

### Course Launch Date

__Launch is expected at end of November 2018 / Beginning of December 2018. Sign up at [Business Science University](https://university.business-science.io/) to get updates.__ 

### Course Details

<a href="https://university.business-science.io/"><img src="/img/course_logo_full_DS4B_101_R.png" class="img-rounded pull-right" alt="R Cheatsheet" style="width:25%;margin-left:20px"/></a>

Our __NEW BUSINESS ANALYSIS WITH R COURSE (DS4B 101-R)__ combines:

- Teaching the [Data Science with R Workflow](/r-cheatsheet.html) in a __100% business context__: data import, data manipulation (business aggregations, time-based calculations, text manipulation, categorical manipulation, and missing data), data visualization, business reporting with `RMarkdown`, and advanced analysis including scaling analysis and building functions. 

- Two state-of-the-art business projects.

![DS4B 101-R Course - Project 1](/assets/2018-11-04-data-science-with-R-cheatsheet/DS4B_101_R_project1.png)

<p class="date text-center">Project 1 - Exploratory Analysis of Digital Media Merchant</p>

<br>
- __Business Project 1__: Complete a full exploratory analysis on a simulated digital media merchant:

  - Connect to a `sqlite` database to retrieve transactional data, 
  - Join data from 11 database tables including customers, products, and time-based transactional history
  - Cleaning data using `dplyr` and `tidyr`
  - Business Analysis: Product Level Analysis, Customer Level Analysis, Time-Based Analysis, and Business Filtering to Isolate Key Populations
  
  
- __Business Project 2__: Apply the advanced skills through a ___Customer Segmentation project___

  - Use K-Means Clustering to anlayze customer purchasing habits and group into segments
  - Apply data visualization techniques investigate the key buying habits
  - Bonus Material and More!
