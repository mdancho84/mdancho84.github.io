---
layout: post
title: "New Course Content: DS4B 201 Chapter 7, The Expected Value Framework For Modeling Churn With H2O"
author: "Matt Dancho"
date:   2018-07-16 15:45:01
categories: [University]
tags: [R-Project, R, Expected Value, Employee Turnover, Human Resources, Churn, People Analytics, HR Analytics]
image: 2018-07-16-ch7-ds4b-201/ev_churn.png
---



I'm pleased to announce that we released __brand new content__ for our flagship course, [Data Science For Business (DS4B 201)](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15). Over the course of 10 weeks, the DS4B 201 course teaches students and end-to-end data science project solving Employee Churn with R, H2O, & LIME. The latest content is focused on transitioning from modeling Employee Churn with H2O and LIME to __evaluating our binary classification model using Return-On-Investment (ROI), thus delivering business value__. We do this through application of a special tool called the __Expected Value Framework__. Let's learn about the new course content available now in DS4B 201, Chapter 7, which covers the Expected Value Framework for modeling churn with H2O!



## Related Articles On Applying Data Science To Business

If you're interested in learning data science for business and topics discussed in the article (the expected value framework and the Business Science Problem Framework (BSPF)), check out some of these articles.

* [3 Reasons You Need To Learn The Expected Value Framework](http://www.business-science.io/business/2018/07/11/expected-value-framework-data-science.html)

* [How To Successfully Manage A Data Science Project For Business: The Business Science Problem Framework](http://www.business-science.io/business/2018/06/19/business-science-problem-framework.html)

* [6 Reasons To Learn R For Business](http://www.business-science.io/business/2017/12/27/six-reasons-to-use-R-for-business.html)



## Learning Trajectory

We'll touch on the following topics in this article: 

* [Where We Came From (DS4B 201 Chapters 1-6)](#start): A 1000-foot view of the DS4B 201 course up to this point. 

* [New Content: Calculating The Expected ROI (Savings) Of A Policy Change (DS4B 201 Chapter 7)](#chapter7): This chapter implements the Expected Value Framework, which is fundamental for tying a machine learning classification model to ROI

* [Where We Are Going: Optimization and Sensitivity Analysis (DS4B 201 Chapter 8)](#chapter8): This chapter focuses on iteration for testing thresholds to maximizing ROI (threshold optimization) and then iteration to test the effect of assumptions on our model (sensitivity analysis)


Alright, let's get started!


<hr>

<h2 class="text-center">Get The Best Resources In Data Science. Every Friday!</h2>

<p class="text-center">
Sign up for our free <strong>"5 Topic Friday" Newsletter</strong>. Every week, I'll send you the five coolest topics in data science for business that I've found that week. These could be new R packages, free books, or just some fun to end the week on. 
</p>

<p class="text-center" style="font-size:30px;">
<a href="https://mailchi.mp/business-science.io/five-topic-friday"><strong>Sign Up For Five-Topic-Friday!</strong></a> 
</p>

<hr>

## Where We Came From (DS4B 201 Chapters 1-6) <a class="anchor" id="start"></a>

__[Data Science For Business (DS4B 201)](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15) is the ultimate machine learning course for business__. Over the course of 10 weeks, the student learns from and end-to-end data science project involving a major issue impacting organizations: __Employee Churn__. The student:

* Learns tools to size the Business Problem, to communicate with Executives and C-Suite, and to integrate data science results financially, which is how the organization benefits. 

* Follows our __BSPF systematic data science for business framework__ (the Business Science Problem Framework, [get it here](http://www.business-science.io/bspf.html), [learn about it here](http://www.business-science.io/business/2018/06/19/business-science-problem-framework.html))

* Uses advanced tools including __H2O Automated Machine Learning and LIME Feature Explanation__ ([learn about them here](http://www.business-science.io/business/2017/09/18/hr_employee_attrition.html))

* Applies cutting-edge data science using the `tidyverse`, builds custom functions with Tidy Eval, and implements a host of other packages including `fs`, `recipes`, `skimr`, `GGally`, `cowplot`, and more in as you complete an __integrated data science project__.

#### Chapter-By-Chapter Breakdown:

>_"The ultimate machine learning course for business!"_

* __Chapter 0, Getting Started__: The student learns how to __calculate the true cost of employee attrition__, which is a hidden cost (indirect) because lost productivity doesn't hit the financial statements. The student then learns about the tools in our toolbox including the integrated BSPF + CRISP-DM data science project framework for applying data science to business. 

* __Chapter 1, Business Understanding: BSPF And Code Workflows__: From here-on-out, lectures are 95% R code. The student begins his/her transition into __sizing the problem financially using R code__. The student creates his/her first custom function using `Tidy Eval` and develops custom plotting functions with `ggplot2` to financially explain turnover by department and job role.

![Chapter 1: Business Understanding](/assets/2018-07-16-ch7-ds4b-201/chapter_01_business_understanding.png)

<p class="text-center date">Chapter 1: Code Workflow and Custom Functions for Understanding the Size of the Problem</p>

* __Chapter 2, Data Understanding: By Data Type And Feature-Target Interactions__: The student learns two methods for Exploratory Data Analysis (EDA). The first is exploration by data type using the `skimr` package. The second is visualizing the Feature-Target Interactions using `GGally`. 

* __Chapter 3, Data Preparation: Getting Data Ready For People And Machines__: The student first learns about wrangling and merging data using `map()` and `reduce()` to create a preprocessing pipeline for the human-readable data format. Next the student uses the `recipes` package to prepare the data for a __pre-modeling Correlation Analysis__. The pre-modeling Correlation Analysis is performed to tell us if we're ready to move into Modeling. 

* __Chapter 4, Modeling Churn: Using Automated Machine Learning With `H2O`__: This is the first of two chapters on H2O. The student learns how to use `h2o.automl()` to generate an H2O Leaderboard containing multiple models including deep learning, stacked ensembles, gradient boosted machine, and more!

* __Chapter 5, Modeling Churn: Assessing `H2O` Performance__: The student works with the `h2o.performance()` function output using various H2O performance functions. The student then learns how to measure performance for different audiences. The ROC Plot and Precision Vs Recall Plots are developed for data scientist evaluation. The Cumulative Gain and Lift Plots are built for executive / C-suite evaluation. The student ends this chapter building the __"Ultimate Model Performance Comparison Dashboard"__ for evaluating multiple H2O models. 


![Chapter 5: Modeling Churn, Ultimate Performance Dashboard](/assets/2018-07-16-ch7-ds4b-201/chapter_05_ultimate_performance_dashboard.png)

<p class="text-center date">Chapter 5: Ultimate Performance Dashboard for Comparing H2O Models</p>

* __Chapter 6, Modeling Churn: Explaining Black-Box Models With `LIME`__: Prediction is important, but it's even more important in business to understand why employees are leaving. In this chapter, students learn `LIME`, a useful package for explaining deep learning and stacked ensembles, which often have the best performance. 

OK, now that we understand where we've been, let's take a sneak peek at the new content!




## New Content (Chapter 7): Calculating The Expected ROI (Savings) Of A Policy Change <a class="anchor" id="chapter7"></a>

This is where the rubber meets the road with ___ROI-Driven Data Science___! You'll learn how to use the Expected Value Framework to calculate savings for two policy changes: 

* ___Policy #1: "No Overtime"___: __Savings of 13% ($2.6M savings for 200 high-risk employees)!!!__


* ___Policy #2: "Targeted Overtime"___: __Savings of 16% ($3.2M savings for 200 high-risk employees)!!!!!__

Here's the YouTube Video of the Expected Value Framework for Delivering ROI. 

<br>

<iframe width="100%" height="500" src="https://www.youtube.com/embed/amGLWN4hmY0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<br>


Students implement two overtime reduction policies. The first is a "No Overtime Policy", which results in a 13% savings versus the baseline (do nothing). The second is a "Targeted Overtime Reduction Policy", which increased the savings to 16% versus the baseline (do nothing). The targeted policy is performed using the F1 score showing the performance boost over a "Do Nothing Policy" and the "No Overtime Policy". 

The targeted policy requires working with the expected rates. It's an un-optimized strategy that treats the true positives and true negatives equally (uses the [F1 score](https://en.wikipedia.org/wiki/F1_score), which does not account for business costs of false negatives). This occurs at a threshold of 28%, which can be seen in the Expected Rates graph below.

![Chapter 7: Working With Expected Rates](/assets/2018-07-16-ch7-ds4b-201/chapter_07_expected_rates.png)

<p class="text-center date">Chapter 7: Working With Expected Rates</p>

Calculating the Expected Value at the threshold that balances false negatives and false positives yields a 16% savings over a "Do Nothing Policy". This targeted policy applies an overtime reduction policy to anyone with greater than a 28% class probability of quitting. 

![Chapter 7: Calculating Expected Savings](/assets/2018-07-16-ch7-ds4b-201/chapter_07_savings.PNG)

<p class="text-center date">Chapter 7: Calculating Expected Savings Vs Baseline (Do Nothing)</p>


We end Chapter 7 with a brief discussion on False Positives and False Negatives. The problem with using the threshold that maximizes F1 is that False Negatives are typically 3X to 5X more costly than False Positives. With a little extra work, __we can do even better than a 16% savings__, and that's where Chapter 8 comes in.




## Where We're Going (Chapter 8): Threshold Optimization and Sensitivity Analysis <a class="anchor" id="chapter8"></a>

Chapter 8 picks up where Chapter 7 left off by focusing on using the `purrr` library to iteratively calculate savings. Two analyses are performed:

1. __Threshold Optimization__ Using Cost/Benefit and Expected Value Framework - Maximizes profit (savings)

2. __Sensitivity Analysis__ to adjust parameters that are "assumptions" to grid search best/worst case scenarios and to see there effect on expected savings. 


The threshold optimization is the first step, which can be performed by iteratively calculating the expected savings at various thresholds using the `purrr` package.

![Chapter 8: Threshold Optimization With purrr](/assets/2018-07-16-ch7-ds4b-201/chapter_08_threshold_optimization.png)

<p class="text-center date">Chapter 8: Threshold Optimization With `purrr`</p>

Next, the student visualizes the threshold optimization results using `ggplot2`.

![Chapter 8: Threshold Optimization With ggplot2](/assets/2018-07-16-ch7-ds4b-201/chapter_08_threshold_optimization_2.png)

<p class="text-center date">Chapter 8: Visualizing Optimization Results With `ggplot2`</p>


Sensitivity analysis is the final step. The student goes through a similar process but this time use `purrr` `partial()`, `cross_df()`, and `pmap_dbl()` to calculate a range of potential values for inputs that are not completely known. For example, the percentage overtime worked in the future is unlikely to be the same as the current year. How does that affect the model? How does the future overtime interact with other assumptions like the future net revenue per employee? Find out how to handle this by taking the course. :)

## Next Steps: Take The DS4B 201 Course!

If interested in learning more, definitely check out [__Data Science For Business (DS4B 201)__](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15). In 10 weeks, the course covers all of the steps to solve the employee turnover problem with H2O in an integrated end-to-end data science project. 

The students love it. Here's a comment we just received last Sunday morning from one of our students, [Siddhartha Choudhury, Data Architect at Accenture](https://www.linkedin.com/in/siddhartha-choudhury-715524100/). 

![Testimonial](/assets/2018-07-11-expected-value/testimonial.png)


> _"To be honest, this course is the best example of an end to end project I have seen from business understanding to communication."_
>
> Siddhartha Choudhury, Data Architect at Accenture

See for yourself why our students have rated [Data Science For Business (DS4B 201)](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15) a 9.0 of 10.0 for Course Satisfaction!

<p class="text-center" style="font-size:30px;"><a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15">
Get Started Today!
</a></p>

## Learning More

Check out our other articles on Data Science For Business!

* [How To Successfully Manage A Data Science Project For Business: The Business Science Problem Framework](http://www.business-science.io/business/2018/06/19/business-science-problem-framework.html)

* [HR Analytics: Using Machine Learning To Predict Employee Turnover](http://www.business-science.io/business/2017/09/18/hr_employee_attrition.html)

* [Data Science For Business Tutorial: Using Machine Learning With LIME To Understand Employee Churn](http://www.business-science.io/business/2018/06/25/lime-local-feature-interpretation.html)

* [Customer Analytics: Using Deep Learning With Keras To Predict Customer Churn](http://www.business-science.io/business/2017/11/28/customer_churn_analysis_keras.html)

* [Sales Analytics: How To Use Machine Learning To Predict And Optimize Product Backorders](http://www.business-science.io/business/2017/10/16/sales_backorder_prediction.html)



## Business Science University  <a class="anchor" id="bsu"></a>

[Business Science University](https://university.business-science.io/) is a revolutionary new online platform that __get's you results fast__. 

<iframe width="100%" height="400" src="https://www.youtube.com/embed/dl6V3122IkI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<br>

Why learn from [Business Science University](https://university.business-science.io/)? __You could spend years trying to learn all of the skills required to confidently apply Data Science For Business (DS4B)__. Or you can take the first course in our integrated Virtual Workshop, [__Data Science For Business (DS4B 201)__](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15). In 10 weeks, you'll learn:

- A 100% ROI-driven Methodology - Everything we teach is to maximize ROI.

- A clear, systematic plan that we've successfully used with clients

- Critical thinking skills necessary to solve problems

- Advanced technology: `H2O` Automated Machine Learning

- How to do 95% of the skills you will need to use when wrangling data, investigating data, building high-performance models, explaining the models, evaluating the models, and building tools with the models

 
You can spend years learning this information or in 10 weeks (one chapter per week pace). Get started today!

<p class="text-center" style="font-size:30px;"><a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15">
Sign Up Now!
</a></p>

### DS4B Virtual Workshop: Predicting Employee Attrition <a class="anchor" id="vw"></a>

Did you know that __an organization that loses 200 high performing employees per year is essentially losing $15M/year in lost productivity__? Many organizations don't realize this because it's an indirect cost. It goes unnoticed. What if you could use data science to predict and explain turnover in a way that managers could make better decisions and executives would see results? You will learn the tools to do so in our Virtual Workshop. Here's an example of a Shiny app you will create.

<p class="text-center" style="font-size:30px;"><a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15">
Get Started Today!
</a></p>


![HR 301 Shiny Application: Employee Prediction](/img/hr_301_app.png) 
<p class="text-center date">Shiny App That Predicts Attrition and Recommends Management Strategies, Taught in HR 301</p> 

<span data-sumome-listbuilder-embed-id="1e13d987ad901ab4571b6d92bb2ab8a2230c397b886c1fd49eba5392ed5c88cb"></span>

Our first __Data Science For Business Virtual Workshop__ teaches you how to solve this employee attrition problem in four courses that are fully integrated:

* [DS4B 201: Predicting Employee Attrition with `h2o` and `lime`](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15)
* DS4B 301 (Coming Soon): Building A `Shiny` Web Application
* DS4B 302 (Coming Soon): Data Communication With `RMarkdown` Reports and Presentations
* DS4B 303 (Coming Soon): Building An R Package For Your Organization, `tidyattrition`

The Virtual Workshop is __code intensive (like these articles)__ but also teaches you fundamentals of data science consulting including CRISP-DM and the Business Science Problem Framework and many data science tools in an integrated fashion. __The content bridges the gap between data science and the business, making you even more effective and improving your organization in the process.__

Here's what one of our students, [Jason Aizkalns](https://www.linkedin.com/in/jasonaizkalns/), Data Science Lead at Saint-Gobain had to say:

> _"In an increasingly crowded data science education space, Matt and the Business Science University team have found a way to differentiate their product offering in a compelling way. BSU offers a unique perspective and supplies you with the materials, knowledge, and frameworks to close the gap between just “doing data science” and providing/creating value for the business. Students will learn how to formulate their insights with a value-creation / ROI-first mindset which is critical to the success of any data science project/initiative in the “real world”. Not only do students work a business problem end-to-end, but the icing on the cake is “peer programming” with Matt, albeit virtually, who codes clean, leverages best practices + a good mix of packages, and talks you through the why behind his coding decisions – all of which lead to a solid foundation and better habit formation for the student."_
>
> Jason Aizkalns, Data Science Lead at Saint-Gobain

<p class="text-center" style="font-size:30px;"><a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15">
Get Started Today!
</a></p>

## Don't Miss A Beat

<span data-sumome-listbuilder-embed-id="8944080265e0a41a6249cd11ea3299d46ee953ea5bc9a1cd5635069be5bf0987"></span>

* Sign up for the [Business Science blog](http://www.business-science.io/blog/index.html) to stay updated
* Get started with [Business Science University](https://university.business-science.io/) to learn how to solve real-world data science problems from Business Science
* Check out our [Open Source Software](http://www.business-science.io/r-packages.html)


## Connect With Business Science <a class="anchor" id="social"></a>

If you like our software (`anomalize`, `tidyquant`, `tibbletime`, `timetk`, and `sweep`), our courses, and our company, you can connect with us:

* [__business-science__ on GitHub](https://github.com/business-science)
* [__Business Science, LLC__ on LinkedIn](https://www.linkedin.com/company/business.science)
* [__bizScienc__ on twitter](https://twitter.com/bizScienc)
* [__Business Science, LLC__ on Facebook](https://www.facebook.com/Business-Science-LLC-754699134699054/)
