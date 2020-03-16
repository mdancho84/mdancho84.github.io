---
layout: post
title: "Part 5 - 5 Reasons to Learn H2O for High-Performance Machine Learning"
date: 2020-01-13 10:30:01
excerpt: "H2O is the scalable, open-source ML library that features AutoML. Here's why it's an essential library for me (and you)."
author: "Matt Dancho"
categories: [Business]
tags: [R-Bloggers, Learn-R, Learn-Business, H2O]
image: 2020-01-13-h2o/h2o_machine_learning.jpg
image_preview: 2020-01-13-h2o/h2o_machine_learning.jpg
---

<p class="lead"><strong>H2O</strong> is the scalable, open-source Machine Learning library that features <code>AutoML</code>. Here are 5 Reasons why it's an essential library for creating production data science code.</p>


#### Articles in Series

<div class="pull-right hidden-xs" style="width:50%; margin-left:20px;">
  <img class="img-responsive" src="/assets/2020-01-13-h2o/h2o_machine_learning.jpg"> 
</div>

1. [__Part 1 - Five Full-Stack Data Science Technologies for 2020 (and Beyond)__](https://www.business-science.io/business/2019/12/09/data-science-technologies.html)
2. [__Part 2 - AWS Cloud__ ](https://www.business-science.io/business/2019/11/13/data-science-with-aws.html)
3. [__Part 3 - Docker__](https://www.business-science.io/business/2019/11/22/docker-for-data-science.html)
4. [__Part 4 - Git Version Control__](https://www.business-science.io/business/2019/12/09/git-for-apps.html)
5. [__Part 5 - H2O Automated Machine Learning (AutoML)__](https://www.business-science.io/business/2020/01/13/five-reasons-to-learn-h2o-machine-learning.html) __(You Are Here)__
6. [__Part 6 - R Shiny vs Tableau (3 Business Application Examples)__](https://www.business-science.io/business/2020/03/09/shiny-vs-tableau.html) 
7. [__\[NEW BOOK\] - The Shiny Production with AWS Book__](https://www.business-science.io/business/2020/01/02/shiny-production-with-aws-docker-git-book.html)


<h2>Machine Learning<br><small><strong>Up 440%</strong> vs 5-Years Ago</small></h2>

Before I jump into H2O, let's first understand the demand for ML. The 5-year trends in Technology Job Postings show a __440% increase in "Machine Learning" skills__ being requested, capturing a 7% share in all technology-related job postings. 

Not just "Data Scientist" Jobs... __ALL Technology Jobs.__

![Today's Top Tech Skills](/assets/2019-12-09-data-science-technologies/indeed_tech_trends.jpg)

<p class="date text-center">
Top 20 Tech Skills 2014-2019 <br>
<a href="https://www.hiringlab.org/2019/11/19/todays-top-tech-skills/" target="_blank">Source: Indeed Hiring Lab.</a>
</p>

## My point: Learning ML is essential

We can safely say that if you are in a technology job (or seeking one) then you need to learn how to apply AI and Machine Learning to solve business problems. 

__The problem:__ There are a dozen machine learning and deep learning frameworks - `TensorFlow`, `Scikit-Learn`, `H2O`, `MLR3`, `PyTorch`, ... These all take time and effort to learn. So, which framework should you learn for business?

__Why I use and recommend H2O:__ _H2O has singlehandedly produced results in hours that would have otherwise taken days or weeks._ I recommend learning `H2O` for applying Machine Learning to business data. I've been using H2O for several years now on both consulting projects and teaching it to clients. I have 5 reasons that explain how I have gotten this ___productivity enhancement___ using H2O on my business projects. 

## 5-Reasons why I use and teach H2O

My __Top 5-Reasons__ why I use and recommend learning `H2O`.

<h3>1. AutoML<br><small><strong>Massive Productivity Booster</strong></small></h3>

`H2O AutoML` automates the machine learning workflow, which includes ___automatic training and tuning of many models___. This allows you to spend your time on more important tasks like feature engineering and understanding the problem. 

<div class="" style="width:50%; margin:0 auto;">
  <img class="img-responsive" src="/assets/2020-01-13-h2o/h2o_automl_hex_sticker.jpg" alt ="H2O AutoML Hex Sticker"> 
</div>

<p class="date text-center">
<strong>Me holding my H2O AutoML Hex Sticker</strong><br>
H2O is my go-to for production ML
</p>


<h3>2. Scalable on Local Compute<br><small><strong>Distributed, In-Memory Processing speeds up computations</strong></small></h3>

In-memory processing with fast serialization between nodes and clusters to support massive datasets enables problems that traditionally need bigger tools to be solved in-memory on your local computer.


<h3>3. Spark Integration & GPU Support<br><small><strong>Big Data</strong></small></h3>

- <a href="https://spark.rstudio.com/guides/h2o/" target="_blank">H2O’s Spark integration (Sparkling Water)</a> enables distributed processing on Big Data. 
- <a href="https://www.h2o.ai/products/h2o4gpu/" target="_blank">H2O4GPU</a> enables running H2O's R and Python libraries using GPUs. 

The result is __100x faster training__ than traditional ML.

![Sparkling Water](/assets/2020-01-13-h2o/h2o_sparkling_water.jpg)

<p class="date text-center">
<a href="https://spark.rstudio.com/guides/h2o/" target="_blank">rsparkling - The Spark + H2O Big Data Solution</a>
</p>



<h3>4. Best Algorithms, Optimized and Ensembled<br><small><strong>Superior Performance</strong></small></h3>

H2O’s algorithms are developed from the ground up for distributed computing. The most popular algorithms are incorporated including: 

- XGBoost
- GBM
- GLM
- Random Forest
- and more. 

`AutoML` ___ensembles___ (combines) these models to provide __superior performance.__


<h3>5. Production Ready<br><small><strong>Docker Containers</strong></small></h3>

<div class="pull-right hidden-xs" style="width:30%; margin-left:20px;">
  <a href="https://www.business-science.io/business/2019/11/22/docker-for-data-science.html" target="_blank">
    <img class="img-responsive" src="/assets/2019-11-22-docker/docker.png">
    <p class="text-center">Learn More: What is Docker?</p>
  </a>
</div>

I love using [Docker (learn why)](https://www.business-science.io/business/2019/11/22/docker-for-data-science.html) + `H2O` to integrate `AutoML` models into `Shiny` Web Applications.  H2O is built on (and depends on) Java, which traditionally creates overhead. But, with H2O Docker Images, it makes deploying H2O Models super easy with all necessary software inside the pre-built Docker Image.

## H2O in Production

`H2O` can be integrated into `Shiny` Applications like this one - an _Employee Attrition Prediction & Prevention App_. 


![Employee Attrition App](/assets/2020-01-13-h2o/employee_attrition_app.jpg)

<p class="date text-center">
<strong>Employee Attrition Prevention App</strong> <br>
<em>(Course coming to BSU soon)</em>
</p>

## H2O is the underlying prediction technology

__You need to learn H2O AutoML__ to build the _Employee Attrition Shiny App_. `H2O AutoML` generates the _"Employee Attrition Machine Learning Model"_ that scores the employees based on features like tenure, over time, stock option level, etc. 

![Employee Attrition Machine Learing Model](/assets/2020-01-13-h2o/employee_attrition_ml_model.jpg)

<p class="date text-center">
<strong>H2O AutoML - Employee Attrition Machine Learning Model</strong> <br>
<a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover" target="_blank"><em>Built in DS4B 201-R Course</em></a>
</p>


## The H2O Course

If you are ready to learn `H2O AutoML` along with critical supporting technologies and data science workflow processes that follow an enterprise-grade system, then look no further: [__DS4B 201-R (Advanced Machine Learning & Business Consulting Course)__](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover). 

You follow a 10-week program for solving Business Problems with Data Science that teaches each of the tools needed to solve a __$15M/year employee attrition problem__ using Machine Learning (`H2O`), Explainable ML (`LIME`), and Optimization (`purrr`). 

![DS4B 201-R - 10-Week Program](/assets/2020-01-13-h2o/10_week_program.png)

<p class="date text-center">
<strong>10-Week System for Solving Business Problems with Machine Learning</strong> <br>
<a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover" target="_blank"><em>DS4B 201-R Course</em></a>
</p>

In weeks 5 & 6, you learn `H2O AutoML` in-depth as part of your learning journey. 

![Learn H2O AutoML](/assets/2020-01-13-h2o/h2o_automl.png)

<p class="date text-center">
<strong>Learn H2O AutoML - Weeks 5 and 6</strong> <br>
<a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover" target="_blank"><em>DS4B 201-R Course</em></a>
</p>


<h2> No Machine Learning Experience?<br><small><strong>Don't worry. You're covered.</strong></small></h2>

You are probably thinking, ___"How do I learn H2O if I have no Machine Learning background or coding experience?"___

That's why I created the [__4-Course R-Track Program__](https://university.business-science.io/p/4-course-bundle-machine-learning-and-web-applications-r-track-101-102-201-202a/).

#### Go from beginner to expert in 6-months or less with no prior experience required. 

You learn:

- Data Science Foundations
- __Advanced Machine Learning & Business Consulting__ - `H2O AutoML`
- Shiny Dashboards
- Shiny Developer with AWS __(NEW)__

<br>

{% include cta_rtrack.html %}

<br>

I look forward to providing you the best data science for business education. 

Matt Dancho

Founder, Business Science

Lead Data Science Instructor, Business Science University
