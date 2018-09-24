---
layout: post
title: "Data Science With R Course Series - Week 2"
author: "Matt Dancho"
date:   2018-09-24 6:04:01
categories: [University]
tags: [R-Project, R, Data Science, DS4B 201-R, Business Understanding]
image: 2018-09-24-data-science-with-R-2/system_week2.png
---




Data Science and Machine Learning in business begins with R. Why? R is the premier language that enables ___rapid exploration, modeling, and communication___ in a way that no other programming language can match: __SPEED!__ This is why you need to learn R. Time is money, and, in a world where you are measured on productivity and skill, R is your machine-learning powered productivity booster. 

In this __Data Science With R Course Series__, we’ll cover what life is like in our ground-breaking, enterprise-grade course called [Data Science For Business With R (DS4B 201-R)](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15). The objective is to experience the qualities that make R great for business by following a real-world data science project. We review the course that will take you to advanced in __10 weeks__.
 

In this article, we’ll cover [__Week 2: Business Understanding__](#week2), which is where we begin coding in R using exploratory techniques with the goal of sizing the business problem. 

But, first, a quick recap of our trajectory and the course overview.

## Data Science With R Course Series

You’re in the [__Week 2: Business Understanding__](#week2). Here’s our game-plan over the next 10 articles in this series. We’ll cover how to apply data science for business with R following our systematic process.

- [Week 1: Getting Started](https://www.business-science.io/university/2018/09/20/data-science-with-R-week-1.html)
- __Week 2: Business Understanding__ (You're Here)
- Week 3: Data Understanding
- Week 4: Data Preparation
- Week 5: Predictive Modeling With H2O
- Week 6: H2O Model Performance 
- Week 7: Machine Learning Interpretability With LIME
- Week 8: Link Data Science To Business With Expected Value
- Week 9: Expected Value Optimization And Sensitivity Analysis
- Week 10: Build A Recommendation Algorithm To Improve Decision Making


<p style="text-align:center">
<img src="/assets/2018-09-24-data-science-with-R-2/system_week2.png" style="width:100%;">
</p>
<p class="date text-center">Week 2: Business Understanding</p>

## Course and Problem Overview

[__Data Science For Business With R (DS4B 201-R)__](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15) is a one-of-a-kind course designed to teach you the essential aspects for applying data science to a business problem with R. 

<br>

We analyze a single problem: ___Employee Turnover___, which is a __$15M per year problem__ to an organization that loses 200 high performing employees per year. It’s designed to teach you techniques that can be applied to any binary classification (Yes/No) problem such as:

- __Predicting Employee Turnover__: Will the employee leave?

- __Predicting Customer Churn__: Will the customer leave?

- __Predicting Risk of Credit Default__: Will the loan applicant or company default?

<br>

Here’s why our students consistently give it a __9 of 10 for satisfaction rating__:

- It's based on __real-world experience__ 

- You apply our __systematic framework__ that cuts project times in half. [Refer to this testimonial from our student.](https://youtu.be/yw5CtGTzIw0) 

- We focus on __return on investment (ROI)__

- We cover __high performance R packages__: `H2O`, `LIME`, `tidyverse`, `recipes`, and more. 

- __You get results!__


<br>

<iframe width="100%" height="450" src="https://www.youtube.com/embed/lyWxrhaBJ38" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<p class="date text-center">DS4B 201-R, Course Overview</p>

Next, let's experience what life is like in __Week 2: Business Understanding__.

## Week 2: Business Understanding {#week2}

Week 2 is where we begin our deep-dive into data science for business. In ___Business Understanding___, we learn how to:

- [Understand the problem using `R Code` and BSPF](#part1)

- [Streamline repetitive employee attrition code using `Tidy Eval`](#part2)

- [Visualize employee turnover with `ggplot2`](#part3)

- [Make our first custom plotting function, `plot_attrition()`](#part4)

- [Introduce Challenge #1](#part5)

The first thing you’ll do is log into [Business Science University](https://university.business-science.io/), and move to the __Week 2 Module__, which looks like this.

![DS4B 201-R Week 2 Module](/assets/2018-09-24-data-science-with-R-2/app_week_2.png)

<p class="date text-center">Week 2: Business Understanding Module, DS4B 201-R Course</p>


We’ll begin by analyzing the problem in R in the section titled, Problem Understanding with the BSPF.

### Understand the problem using `R Code` and BSPF  {#part1}

Sizing the business opportunity or cost is OVERLOOKED by most data scientists. If the cost / benefit to the organization is not large, it’s not worth your time. We need to be efficient, which is our second focus. ROI is first, efficiency is second. 

> __If the cost / benefit to the organization is not large, it’s not worth your time.__

To size the problem, we lean on a tool we learned about in [Week 1](https://www.business-science.io/university/2018/09/20/data-science-with-R-week-1.html): ___The Business Science Problem Framework (BSPF)___. Specifically, you’ll learn to:

- View the business as a machine
- Understand the drivers
- Measure the drivers   

![Business Science Problem Framework (BSPF)](/assets/2018-09-24-data-science-with-R-2/app_bspf.png)

<p class="date text-center">Walking Through The Business Science Problem Framework (BSPF)</p>


As we walk through the ___BSPF___, we focus our efforts on identifying (1) if the organization has a problem and (2) how large that problem is. We investigate:

- How many high performance employees are turning over

- What the true cost of their turnover is, converting the Excel calculation to a scalable R calculation

- Key Performance Indicators (KPIs) for turnover

- Potential drivers including common cohorts: Job Department and Job Role 



Here’s a sample lecture showing what the code experience is like: [“View the Business as a Machine”](https://youtu.be/TSvWM4c5tdQ).  

<br>
<iframe width="100%" height="450" src="https://www.youtube.com/embed/TSvWM4c5tdQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<p class="date text-center">View the Business As A Machine Lecture</p>
<br>

As we go through the process of understanding and sizing the business problem, we realize that we are performing the same calculations repetitively. Any time __repetitious code happens__, we should create a function. Next, we’ll learn about a powerful new set of tools for building ___tidy-functions___ that reduces and simplifies repetitive code: `Tidy Eval`.


### Streamline repetitive employee attrition code using `Tidy Eval` {#part2}

To this point you’ve sized the problem and even determined that the problem is larger within certain cohorts within the organization. Through this exploratory process, you’ve ___repeated the same code multiple times___. Now it’s time to ___streamline this code workflow___ with a powerful set of tools called `Tidy Eval`. 

![Tidy Eval](/assets/2018-09-24-data-science-with-R-2/tidy_eval.png)

<p class="date text-center">Learning <code>Tidy Eval</code> To Simplify Code Steps Repeated Frequently</p>

You will use or create several functions that implement `Tidy Eval` and `rlang` including:

- `count`: Summarizes the counts of grouped columns. Implemented in `dplyr`
- `count_to_pct`: Converts counts to percentages (proportions). You create.
- `assess_attrition()`: Filters, arranges, and compares attrition rates to KPIs. You create. 

Armed with this streamlined code workflow, it’s now time to visualize the problem using the `ggplot2` library.

### Visualize employee turnover with `ggplot2` {#part3}

The best way to grab an executive decision maker’s attention is to show him or her a __business-themed plot that conveys the problem__. In this section, we cover exactly how to do so using the `ggplot2` package.


![ggplot2](/assets/2018-09-24-data-science-with-R-2/ggplot.png)

<p class="date text-center">Using <code>ggplot2</code> to create an impactful visualization of the problem</p>

Next, you learn how to create a plotting function that can flexibly handle various grouped data within your code workflow.

### Make our first custom plotting function, `plot_attrition()` {#part4}

Once again, we’re repetitively reusing code to plot different variations of the same information. In this section, we teach you how to create a custom plotting function called `plot_attrition()` that flexibly handles grouped features including the employee’s Department and Job Role. 

![ggplot2](/assets/2018-09-24-data-science-with-R-2/plot_attrition.png)

<p class="date text-center">Create a flexible plotting function, <code>plot_attrition()</code></p>



By now, you have a serious set of `dplyr` and `ggplot2` investigative skills. Next, we put them to use with your first challenge!

### Challenge #1 {#part5}

Your first challenge is something that happens in the real world - your Subject Matter Experts (SMEs) - in this case the Accounting and Human Resources department provided you new data at a more granular level, which will make your analysis more accurate. Your job is to integrate the new information into you analysis. Are you up to the challenge?

![DS4B 201-R: Challenge #1](/assets/2018-09-24-data-science-with-R-2/challenge1.png)

<p class="date text-center">Now It's You're Turn To Apply Your Knowledge!</p>

At the end of the module, the challenge solution is provided for the learners along with the full code used in the course. 


## New Course Coming Soon: Build A Shiny Web App!

You’re experiencing the magic of creating a high performance employee turnover risk prediction algorithm in DS4B 201-R. Why not put it to good use in an ___Interactive Web Dashboard___?

In our new course, ___Build A Shiny Web App (DS4B 301-R)___, you’ll learn how to integrate the H2O model, LIME results, and recommendation algorithm building in the 201 course into an ML-Powered R + Shiny Web App!

<p class="text-center" style="font-size:30px;">Shiny Apps Course Coming in October 2018!!! Sign up for <a href = "https://university.business-science.io/">Business Science University Now!</a></p>

<p style="text-align:center"><a href="https://university.business-science.io/">
<img src="/img/hr_301_app.png" alt="DS4B 301-R Shiny Application: Employee Prediction" style="width:100%;">
</a></p>
<p class="text-center date">Building an R + Shiny Web App, DS4B 301-R</p>

<p class="text-center" style="font-size:30px;"><a href = "https://university.business-science.io/">Get Started Today!</a></p>
