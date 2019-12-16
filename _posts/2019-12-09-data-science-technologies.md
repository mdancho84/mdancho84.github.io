---
layout: post
title: "5 Data Science Technologies for 2020 (and Beyond)"
date: 2019-12-09 11:30:01
excerpt: "Moving into 2020, three things are clear - Organizations want Data Science, Cloud, and Apps. Here are the essential skills for Data Scientists that need to build and deploy applications in 2020 and beyond."
author: "Matt Dancho"
categories: [Business]
tags: [R-Bloggers, Learn-R, Learn-Business, Shiny, H2O, AWS, Docker, Git]
image: 2019-12-09-data-science-technologies/data_science_technologies.jpg
image_preview: 2019-12-09-data-science-technologies/data_science_technologies.jpg
---

<p class="lead">Moving into 2020, three things are clear - Organizations want Data Science, Cloud, and Apps. <strong>Here are the Top 5 essential skills for Data Scientists that need to build and deploy applications in 2020 and beyond.</strong></p>

<div class="pull-right hidden-xs" style="width:50%; margin-left:20px;">
  <img class="img-responsive" src="/assets/2019-12-09-data-science-technologies/data_science_technologies.jpg"> 
</div>

This is part of a series of articles on Data Science key skills for 2020:

- [__5 Data Science Technologies for 2020 (and Beyond)__](https://www.business-science.io/business/2019/12/09/data-science-technologies.html)
- [__AWS Cloud__ - 14% Share, 400% Growth](https://www.business-science.io/business/2019/11/13/data-science-with-aws.html)
- [__Docker__ - 4000% Growth](https://www.business-science.io/business/2019/11/22/docker-for-data-science.html)
- __Git Version Control__  (Coming Soon)
- __Shiny Web Applications__ (Coming Soon)
- __H2O Automated Machine Learning (AutoML)__ (Coming Soon)

## Top 20 Tech Skills 2014-2019

Indeed, the popular employment-related search engine, released an article [showing changing trends from 2015 to 2019 in "Technology-Related Job Postings"](https://www.hiringlab.org/2019/11/19/todays-top-tech-skills/) examining the __5-Year Change of the most requested technology skills.__

![Today's Top Tech Skills](/assets/2019-12-09-data-science-technologies/indeed_tech_trends.jpg)

<p class="date text-center">
Top 20 Tech Skills 2014-2019 <br>
<a href="https://www.hiringlab.org/2019/11/19/todays-top-tech-skills/" target="_blank">Source: Indeed Hiring Lab.</a>
</p>

I'm generally not a big fan of these reports because the technology landscape changes so quickly. But, I was pleasantly surprised at the length of time from the analysis - Indeed looked at ___changes over a 5-year period, which gives a much better sense of the long term trends.___ 

## Why No R, Shiny, Tableau PowerBI, Alteryx?

The skills reported are not "Data Science"-specific (which is why you don't see R, Tableau, PowerBI, Alteryx, on the list). 

However, we can glean insights based on the technologies present...

## Cloud, Machine Learning, Apps Driving Growth

From the technology growth, it's clear that __Businesses need Cloud + ML + Apps.__

![Key Technologies Driving Tech Skill Growth](/assets/2019-12-09-data-science-technologies/key_technologies.jpg)

<p class="date text-center">
Technologies Driving Tech Skill Growth
</p>

## My Takeaway

This assessment has led me to my key technologies for Data Scientists heading into 2020. I focus on key technologies related to __Cloud + ML + Apps.__

## Top 5 Data Science Technologies for Cloud + ML + Apps

That Data Scientists should learn for 2020 and beyond - these are geared towards the __Business Demands: Cloud + ML + Apps.__ In other words, businesses need data-science and machine learning-powered web applications deployed into production via the Cloud. 

<mark><strong>Here's what you need to learn to build ML-Powered Web Applications and deploy in the Cloud.</strong></mark> 

_*Note that __R and Python__ are skills that you should be learning before you jump into these._ 

![5 Key Data Science Technologies for Cloud + Machine Learning + Applications](/assets/2019-12-09-data-science-technologies/data_science_technologies.jpg)

<p class="date text-center">
5 Key Data Science Technologies for Cloud + Machine Learning + Applications
</p>

### 1. AWS Cloud Services

The most popular cloud service provider. EC2 is a staple for apps, running jupyter/rstudio in the cloud, and leveraging cloud resources rather than investing in expensive computers & servers. 

__AWS Resource:__ [AWS for Data Science Apps - 14% Share, 400% Growth](https://www.business-science.io/business/2019/11/13/data-science-with-aws.html)

### 2. Shiny Web Apps

A comprehensive web framework designed for data scientists with a rich ecosystem of extension libraries (dubbed the "shinyverse").

__Shiny Resource (Coming Soon):__ Shiny Data Science Web Applications 


### 3. H2O Machine Learning

Automated machine learning library available in Python and R. Works well on structured data (format for 95% of business problems). Automation drastically increases productivity in machine learning. 

__H2O Resource (Coming Soon):__ H2O Automated Machine Learning (AutoML) 

### 4. Docker for Web Apps 

Creating docker environments drastically reduces the risk of software incompatibility in production. DockerHub makes it easy to share your environment with other Data Scientists or DevOps. Further, Docker and DockerHub make it easy to deploy applications into production. 

__Docker Resource:__ [Docker for Data Science Apps - 4000% Growth](https://www.business-science.io/business/2019/11/22/docker-for-data-science.html)


### 5. Git Version Control

Git and GitHub are staples for reproducible research and web application development. Git tracks past versions and enables software upgrades to be performed on branches. GitHub makes it easy to share your research and/or web applications with other Data Scientists, DevOps, or Data Engineering. Further, Git and GitHub make it easy to deploy changes to apps in production. 

__Git Resource (Coming Soon):__ Git Version Control for Data Science Apps



## Other Technologies Worth Mentioning

6. __dbplyr for SQL__ - For data scientists that need to create complex SQL queries, but don't have time to deal with messy SQL. dbplyr is a massive productivity booster. It converts R (dplyr) to SQL. Can use it for 95% of SQL queries. 

7. __Bootstrap__ - For data scientists that build apps, Bootstrap is a Front-End web framework that Shiny is built on top of and it powers much of the web (e.g. Twitter's app). Bootstrap makes it easy to control the User Interface (UI) of your application. 

8. __MongoDB__ - For data scientists that build apps, MongoDB is a NoSQL database that is useful for storing complex user information of your application in one table. Much easier than creating a multi-table SQL database. 



## Real Shiny App + AWS + Docker Case Example

In my [Shiny Developer with AWS Course (NEW)](https://university.business-science.io/p/expert-shiny-developer-with-aws-course-ds4b-202a-r/), you use the following application architecture that uses `AWS EC2` to create an `Ubuntu Linux Server` that hosts a `Shiny` App in the cloud called the _Stock Analyzer_.  

<img src="/assets/2019-12-09-data-science-technologies/shiny_application_architecture.jpg" class="img-responsive">
<p class="text-center date">Data Science Web Application Architecture
<br><a href="https://university.business-science.io/p/expert-shiny-developer-with-aws-course-ds4b-202a-r/"><small>From Shiny Developer with AWS Course</small></a></p>


You use `AWS EC2` to build a server to run your _Stock Analyzer_ application along with several other web apps. 

<img src="/assets/2019-12-09-data-science-technologies/aws_ec2_container.jpg" class="img-responsive">
<p class="text-center date">AWS EC2 Instance used for Cloud Deployment
<br><a href="https://university.business-science.io/p/expert-shiny-developer-with-aws-course-ds4b-202a-r/"><small>From Shiny Developer with AWS Course</small></a></p>

Next, you use a `DockerFile` to containerize the application's software environment.


<img src="/assets/2019-12-09-data-science-technologies/dockerfile.jpg" class="img-responsive">
<p class="text-center date">DockerFile for Stock Analyzer App
<br><a href="https://university.business-science.io/p/expert-shiny-developer-with-aws-course-ds4b-202a-r/"><small>From Shiny Developer with AWS Course</small></a></p>

You then deploy your "Stock Analyzer" application so it's accessible anywhere via the `AWS Cloud`. 

<img src="/assets/2019-12-09-data-science-technologies/stock_analyzer_app.jpg" class="img-responsive">
<p class="text-center date">DockerFile for Stock Analyzer App
<br><a href="https://university.business-science.io/p/expert-shiny-developer-with-aws-course-ds4b-202a-r/"><small>From Shiny Developer with AWS Course</small></a></p>



If you are ready to learn how to build and deploy `Shiny` Applications in the cloud using `AWS`, then I recommend my [__NEW 4-Course R-Track System__](https://university.business-science.io/p/4-course-bundle-machine-learning-and-web-applications-r-track-101-102-201-202a/?coupon_code=DS4B15).

<br>

{% include cta_rtrack.html %}

<br>

I look forward to providing you the best data science for business education. 

Matt Dancho

Founder, Business Science

Lead Data Science Instructor, Business Science University