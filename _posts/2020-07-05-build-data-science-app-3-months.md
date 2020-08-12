---
layout: post
title: "From No-Shiny Experience to Deploying My First Shiny App in 3-Months"
date:   2020-08-05 6:00:00
excerpt: "Data science doesnt have to take years to learn. Here's an inspiring use-case from one of our students & how data science education helped add value to his company by creating a decision-making application."
author: "Matt Dancho"
categories: [Business]
tags: [Learn-R]
image: 2020-08-05-build-data-science-app/build-r-shiny-app.png
image_preview: 2020-08-05-build-data-science-app/build-r-shiny-app-preview.jpg
---



<p class="lead">
Creating decision-making applications is a value-driver of data science teams in large organizations. Here's an inspiring use-case from one of our students & how data science education helped.
</p>

<br>


<img src="/assets/2020-08-05-build-data-science-app/herb-data-scientist.jpeg" class="img-responsive img-circle pull-left" style="margin-right:10px; max-width: 180px;" />
_"Hello Matt, I just wanted to let you know that I have just completed the DS4B 102-R Course and the final challenge of building my first App. It is a Forecasting App that runs on top of its own database consisting of 24M records and utilizing two xgBoost models."_

-Herbert McCalla, Business Analyst with Florida Power & Light

<small>([Follow Herb on LinkedIn](https://www.linkedin.com/posts/activity-6681085824601329664-nu7W))</small>

<br><br>


**Herb McCalla has developed a business decision-making application** that helps his company, Florida Power & Light, understand battery demand and predict battery failures for their fleet of over 7800+ batteries deployed across Southern Florida.  

Here's a snapshot of the application he built as his work project while completing the [DS4B 102-R Shiny Dashboards Course](https://university.business-science.io/p/ds4b-102-r-shiny-web-application-business-level-1). 

<img src="/assets/2020-08-05-build-data-science-app/Battery-Demand-Forecasting-Application.jpg" border = "0" />

<div class="text-center"><small>Battery Demand Forecasting Application used to predict Florida Power & Light Battery Usage & Failure</small></div>


## Herb used data science to provide actionable information

A key component of adding value to an organization is by providing actionable information. The application forecasts battery demand/usage and highlights batteries with charge so Florida Power & Light can optimally deploy their resources. 

<img src="/assets/2020-08-05-build-data-science-app/Predicting-Bad-Batteries.jpg" border = "0" />
<div class="text-center"><small>Predicting Bad Batteries (State of Charge of 60% or less)</small></div>

<br>

Herb developed a Shiny Application that contains 2 XGBoost Machine Learning Models:

- One model is used to forecast Advanced Metering Infrastructure (AMI) battery usage demand
- The second model predicts each battery's State of Charge (SOC) in our fleet of over 7,800+ batteries deployed in the FPL service territories around southern Florida

The application is no small feet:

- The app runs on top of a Florida Power & Light database of 24M records
- The machine learning model takes about 20-hours to run, making a prediction for each of the 7800+ batteries in the fleet


## What Did Herb Learn Through Business Science?

Herb is enrolled in the [4-Course R-Track](https://university.business-science.io/p/4-course-bundle-machine-learning-and-web-applications-r-track-101-102-201-202a/). He has completed both the 101 (R for Business) and 102 (Shiny Predictive Dashboards) courses.

In 101, Herb **learned the foundations of data science** including data wrangling, visualization, and machine learning. These skills directly translate to the data analysis needed for his Florida Power & Light Battery Demand Forecasting project. 

In 102, Herb learned how to create a **predictive Shiny Dashboard**, which was used to make the Battery Demand Forecasting application. 

Herb has successfully applied his data science learnings to his Florida Power & Light Battery Prediction Project. Congratulations Herb!!!


## What does Herb have to say about his data science education?

_"Call Matt Dancho with Business Science. This was fun and incredibly challenging."_

-Herbert McCalla

<img src="/assets/2020-08-05-build-data-science-app/herb-quote.jpg" border = "0" />


## Learn to Apply Data Science to Business

The secret to landing a job in data science - **SHOW THAT YOU CAN PROVIDE BUSINESS VALUE**!!! 

This is what I teach - **Business-First (Problem Solving)** using Data Science.

If you are committed to learning data science for business, then Business Science University will give you the tools, strategies, and processes to **unlock financial value for your organization**.

The 4-Course R-Track System will help you, just like it helped Herb McCalla develop a decision-making application for Florida Power & Light.

Complete your transformation in 6-months or less with our [4-Course R-Track System](https://university.business-science.io/p/4-course-bundle-machine-learning-and-web-applications-r-track-101-102-201-202a/).


{% include success_stories.md %}

<br>

{% include cta_rtrack.html %}


Thank you for reading this Business Science Success Stories. I love to share how our students are applying their learning. 

Matt Dancho<br>
Founder, Business Science<br>
Lead Data Science Instructor, Business Science University
