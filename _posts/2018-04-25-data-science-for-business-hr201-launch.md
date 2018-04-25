---
layout: post
title: "Data Science For Business: Course Launch In 5 Days!!!"
author: "Matt Dancho"
categories: [University]
tags: [R-Project, R, People Analytics, HR Analytics, h2o, lime, GGally, skimr, recipes]
image: BSU-hr201-launch/Business Science Problem Framework.png
---



Last November, our data science team embarked on a journey to build the __ultimate Data Science For Business (DS4B) learning platform__. We saw a problem: __A gap exists in organizations between the data science team and the business__. To bridge this gap, we've created [Business Science University](https://university.business-science.io/), an online learning platform that teaches DS4B, using __high-end machine learning algorithms__, and organized in the fashion of an on-premise workshop but at a fraction of the price. I'm pleased to announce that, in 5 days, we will launch our first course, HR 201, as part of a 4-course Virtual Workshop. We crafted the __Virtual Workshop__ after the data science program that we wished we had when we began data science (after we got through the basics of course!). __Now, our data science process is being opened up to you. We guide you through our process for solving high impact business problems with data science!__

## Highlights

 - A major benefit to the Virtual Workshop is that: We teach our internally developed systematic process, the __Business Science Problem Framework (BSPF)__. We use this process to __solve high impact problems__, tying data science to __financial benefit__. Below is the BSPF, which is one of the tools that has been instrumental to our success. In Data Science For Business (HR 201), we follow the BSPF throughout the course, showing you how to apply the framework to a data science project.

![Business Science Problem Framework](/assets/BSU-hr201-launch/Business Science Problem Framework.png)

- Another benefit is that you get to see our process for dissecting and analyzing difficult problems. We show you how to __tie financial impact to the problem__, which is critical in gaining organizational acceptance of a data science project.

- Yet another benefit is you will learn how to code within the `tidyverse`, and specifically using [Tidy Eval](https://dplyr.tidyverse.org/articles/programming.html) for programming with `dplyr` and other `tidyverse` packages. 

- And finally, one more benefit is you will spend a sizable chunk of time using: `tidyverse`, `h2o`, `lime`, `recipes`, `GGally`, `skimr`, and more!

The [Course Overview](#course-overview) touches on the content. Take a look and let us know what you think!

<!-- ## Highlights -->

<!-- Here's some highlights. See the [Course Overview](#course-overview) for more details. -->

## Course Overview <a class="anchor" id="course-overview"></a>

> We show you how we use data science to __solve high impact problems__ using proven methodologies and tying data science to __financial benefit__ to the organization.

__Data Science For Business (HR 201)__ is the first course in a 4-part Virtual Workshop that focuses on a __$15M/year problem[^1]__ that’s hidden from the organization: __Employee Turnover__. We use a real-world problem to show you how tools like the __Business Science Problem Framework__ and __advanced Machine learning algorithms like H2O and LIME__ can solve this problem, saving the organization millions in the process. __Just think, a 10% reduction could save $1.5M/year.__ That's the power of data science!

<p style="text-align:center;"><a href="https://university.business-science.io"><img src="/assets/BSU-hr201-launch/logo_hr201.png"/></a></p>

<p class="text-center date"><a href="https://university.business-science.io"> Data Science For Business, HR 201</a></p>

[^1]: An organization that loses 200+ high performers per year can lose an estimated $15M/year in hidden costs primarily associated with productivity. We show you how to calculate this cost in [Chapter 1: Business Understanding](#ch1). 

#### Chapter 0: Getting Started

* Data Science Project Setup
* The True Cost of Employee Attrition
* What Tools Are in Our Toolbox? 
* Frameworks

In this chapter, we introduce you to our systematic process using the __Business Science Problem Framework (BSPF)__, which augments [CRISP-DM](https://en.wikipedia.org/wiki/Cross-industry_standard_process_for_data_mining). The BSPF focuses on problem understanding and business outcomes on a _detailed level_ whereas CRISP-DM contains the tools necessary for _high-level_ data science project management. Combined, they create one of the tools that has been instrumental to our success. 

<!-- <img src="/assets/BSU-hr201-launch/Business Science Problem Framework.png"/> -->
![Business Science Problem Framework](/assets/BSU-hr201-launch/Business Science Problem Framework.png)

<p class="text-center date">Business Science Problem Framework</p>

#### Chapter 1: Business Understanding <a class="anchor" id="ch1"></a>

* Problem Understanding With BSPF
* Streamlining The Attrition Code Workflow
* Visualizing Attrition with `ggplot2`
* Making A Custom Plotting Function: `plot_attrition()`
* Challenge 1: Cost Of Attrition

This chapter kicks off CRISP-DM Stage 1 along with BSPF Stages 1-4. You will understand the business problem __assigning a financial cost to employee turnover__. We develop custom functions to enable visualizing attrition cost by department and job role. These functions are later developed into an R package, `tidyattrition`, as part of HR 303. We cap it off by developing a custom plotting function, `plot_attrition()`, that generates an impactful visualization for executives to see the value of your data science project.

![Business Science Problem Framework](/assets/BSU-hr201-launch/cost_of_attrition.png)

<p class="text-center date">Visualizing Attrition Cost</p>

#### Chapter 2: Data Understanding

* EDA Part 1: Exploring Data By Data Type With `skimr`
* EDA Part 2: Visualizing Feature-Target Interactions with `GGally`
* Challenge 2: Assessing Feature Pairs

In this chapter, we focus on two methods of exploratory data analysis (EDA) to gain a thorough understanding of the features. First, we tackle our problem by data type with `skimr`, separating categorical data from numeric. Second, we visualize interactions using `GGally`. 

#### Chapter 3: Data Preparation

* Data Preparation For People (Humans)
* Data Preparation For Machines With `recipes`

Next, we process the data for both people and machines. We make extensive use of the `recipes` package to properly transform data for a pre-modeling __Correlation Analysis__.

#### Chapter 4: Automated Machine Learning With H2O

* Building A Classifier With `h2o` Automated Machine Learning
* Inspecting the H2O Leaderboard
* Building A Custom Leaderboard Plotting Function: `plot_h2o_leaderboard()`
* Extracting Models
* Making Predictions

Building a high accuracy model is the goal with this stage. We show how to run `h2o` automated machine learning. We also detail how to build a custom plotting function, `plot_h2o_leaderboard()` to visualize the best models and select them for work on a hold out (testing) set. 

![Business Science Problem Framework](/assets/BSU-hr201-launch/h2o_leaderboard_visualization.png)

<p class="text-center date">Custom H2O Leaderboard Visualization</p>

#### Chapter 5: Assessing H2O Performance

* Classifier Summary Metrics
* Precision & Recall: Adjusting The Classifier Threshold
* Classifier Gain and Lift: Charts For Exec's
* Visualizing Performance
* Making A Custom H2O Performance Plot: `plot_h2o_performance()`

In this chapter, we show you how to assess performance and visualize model quality in a way that executives and other business decision makers understand.

#### Chapter 6: Explaining Black-Box Models With LIME

* Using `lime` For Local Model Explanations
* Making An Explainer
* Explaining Multiple Cases

We use `lime` to explain the black-box classification model showing which features drive whether the employee stays or leaves.

![Business Science Problem Framework](/assets/BSU-hr201-launch/lime_plot_explanations.PNG)

<p class="text-center date">LIME Feature Explanation Visualization</p>

#### Chapter 7: Recommendation Algorithm

Finally, we put our data science investigative skills to use developing a __recommendation algorithm__ that helps managers and executives make better decisions to prevent employee turnover. This recommendation algorithm is used in __HR 301__ to build a Machine-Learning powered `shiny` Web Application that can be deployed to executives and managers.


![HR 301 App - Management Strategies](/assets/BSU-hr201-launch/hr_301_app_management_strategies.png)

<p class="text-center date">HR 301 Shiny App: Management Strategies</p>

![HR 301 App - LIME Feature Importance](/assets/BSU-hr201-launch/hr_301_app_attrition_risk.png)

<p class="text-center date">HR 301 Shiny App: Attrition Risk</p>

## Timing

The HR 201 course will be opened on Monday (4/30). A special offer will be provided to those that [enroll in BSU early](https://university.business-science.io/). The course will not be visible until Monday when it's released. 

## What You Need

All you need is a basic proficiency in R programming. A basic (novice) knowledge of R, `dplyr`, and `ggplot2` is our expectation. We'll take care of the rest. If you are unsure, there is a proficiency quiz to check your baseline. Also, there's a 30-day money-back guarantee if the course is too difficult or if you are not completely satisfied.


## Education Assistance

Many employers offer education assistance to cover the cost of courses. __Begin discussions with your employer immediately if this is available to you and you are interested in this course__. They will benefit __BIG TIME__ from you taking this course. The special offer we send out is available for a __limited time__ only!

## Enroll Now

Enrollment in BSU is open already. [Enroll now](https://university.business-science.io/) to take advantage of a __special offer__. The course will open on Monday, and I will send an announcement to those that are enrolled in BSU along with the special offer. __Time is limited__. 

## About Business Science <a class="anchor" id="contact"></a>

[Business Science](http://www.business-science.io/) specializes in __"ROI-driven data science"__. We offer training, education, coding expertise, and data science consulting related to business and finance. Our latest creation is [__Business Science University__](#bsu), a Virtual Workshop that is self-paced and teaches you our data science process! In addition, we deliver about 80% of our effort into the open source data science community in the form of software and our Business Science blog. Visit [Business Science](http://www.business-science.io/) on the web or [contact us](http://www.business-science.io/contact.html) to learn more!

## Don't Miss A Beat

* Sign up for the [Business Science blog](http://www.business-science.io/blog/index.html) to stay updated!
* Enroll in [Business Science University](https://university.business-science.io/) to learn how to solve real-world data science problems from Business Science!
* Check out our [Open Source Software](http://www.business-science.io/r-packages.html)!


## Connect With Business Science <a class="anchor" id="social"></a>

If you like our software (`anomalize`, `tidyquant`, `tibbletime`, `timetk`, and `sweep`), our courses, and our company, you can connect with us:

* [__business-science__ on GitHub](https://github.com/business-science)!
* [__Business Science, LLC__ on LinkedIn](https://www.linkedin.com/company/business.science)!
* [__bizScienc__ on twitter](https://twitter.com/bizScienc)!
* [__Business Science, LLC__ on Facebook](https://www.facebook.com/Business-Science-LLC-754699134699054/)!

## Footnotes
