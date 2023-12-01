---
layout: post
title: "Data Engineering in R: How to Build Your First Data Pipeline with R, Mage, and Google Cloud Platform (in under 30 Minutes)"
date: 2023-12-02 11:00:00 -0500
excerpt: "Hey guys, welcome back to my R-tips newsletter. In today's lesson, we're sharing how to use R in production, with Mage.ai and Google Cloud. Let's go!" 
author: Arben Kqiku (Intro by Matt Dancho)
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- production
- Google Cloud
- Mage
image: "/assets/r_mage_gcp_thumb.jpg"
image_preview: "/assets/r_mage_gcp_thumb.jpg"

---
Hey guys, welcome back to my [R-tips newsletter](https://learn.business-science.io/r-tips-newsletter). In today's R-Tip, [Arben Kqiku](https://www.linkedin.com/in/arben-kqiku-301457117/) is sharing his **exact 8-step framework** for taking R into production for Digital Analytics projects. You'll learn how to use R, Mage.ai, and Google Cloud Platform (GCP) to build your first data engineering pipeline **in under 30 minutes.**  

### About the Author

[Arben](https://www.linkedin.com/in/arben-kqiku-301457117/) is a digital analytics and Google Cloud Platform (GCP) expert. He's also a Business Science University student. In this post, Arben shares how to use R in production, with Mage.ai and Google Cloud. 

This article was originally published on [Simo Ahava's Google Analytics website](https://www.simoahava.com/analytics/join-ga4-google-ads-data-in-google-bigquery/). We've republished it here with permission.

Let's dive in!

### Table of Contents

Here's what you're learning today:

* ***The Problem:*** We'll cover a case study from a recent problem Arben had in Multi-Touch Campaign Attribution. 
  
* ***The Solution: Arben's 8-Step Process:*** Arben's sharing his exact process for how he sets up production R data engineering pipelines on GCP with R and Mage.ai (perfect if it's your first time).

* ***Full Code Demo:* EXACTLY HOW TO BUILD YOUR FIRST DATA SCIENCE PIPELINE (IN UNDER 30 MINUTES).** 

### What You Make Today:

Below you can see an architectural overview of what we’ll build today.

![Data Engineering Workflow](/assets/r_mage_gcp_workflow.jpg)

<p class="date text-center">What You Make Today!</p>


---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">weekly tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> 
    <li><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code</a></li> 
    <!-- <li><a href="https://youtu.be/fkwKQi7skAw">YouTube Tutorial</a></li>-->
</ul>

# The Problem: Multi-Touch Campaign Attribution in Digital Analytics

As a digital analyst, I often need to combine data from different sources and display it in a dashboard. This is especially true when I'm working with Google Analytics 4 (GA4) and Google Ads for Campaign Attribution.

## Case Study: Digital Analytics and Multi-Touch Campaign Attribution

For instance, clients run campaigns on platforms like Google Ads and Meta Ads, and **they want to understand the impact of each channel or even individual campaigns.**

To address this, we usually:

1. Use **conversion data** from a third-party source, like Google Analytics, and 
2. Combine it with other data such as impressions, clicks, and cost from the advertising channels. 
 
This helps us **calculate the cost per conversion** for each channel more accurately.


## Building the Multi-Touch Attribution Data Engineering Pipeline

To build a data engineering pipeline, we need to factor in:

1. **Accessibility:** Make sure we can easily get data from different sources, such as Google Ads, Meta Ads, and GA4.

2. **Data integration:** Combine data from different sources accurately.

3. **Storage:** Create a data warehouse in Google BigQuery for the joined data and make it accessible to data visualization tools.

4. **Maintenance:** Find a way to automate these steps without needing manual intervention. That way stakeholders will have access to almost real-time data.

## Our Tech Stack: R, Mage.ai, Google Cloud Platform, and VSCode IDE

![How the Tools Integrate](/assets/r_mage_gcp_tool_integration.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Register for R-Tips Newsletter Here</a></p>

To build this pipeline, we'll use:

1. R: To retrieve data from the APIs and combine it.
2. Mage.ai: To automate the Extract Transform Load (ETL) process.
3. Google Cloud Platform (GCP): To store the data and make it accessible to data visualization tools.
4. VSCode IDE: To access the virtual machine remotely.

### 1. R: To retrieve data from the APIs and combine it

![Rstudio](/assets/069_r_logo_board.png)

- Install R here: [https://www.r-project.org/](https://www.r-project.org/)
- Access to 20,000+ of open source R packages here: [https://cran.r-project.org/](https://cran.r-project.org/)

Packages we'll use today:

- `tidyverse`: To work with data and make the data pipeline.
- `googleAnalyticsR`: To retrieve data from the GA4 API.
- `rgoogleads`: To retrieve data from the Google Ads API.
- `bigrquery`: To export data to Google BigQuery.
- `gargle`: For Google authentication.

### 2. Mage.ai: To automate the Extract Transform Load (ETL) process

I love R and I am so thankful that [Tommy Dang](https://www.linkedin.com/in/dangtommy/) and his team included it in Mage.

![Mage AI](/assets/r_mage_gcp_mage_ai.jpg)
   
- Mage.ai is a tool that helps you automate the ETL process. It's a great tool for data scientists who want to automate their data engineering pipelines.
- Mage.ai: [https://mage.ai/](https://mage.ai/)

The screenshot below comes from Mage. Mage is a data engineering tool that allows you to build your ETL (extract, transform, and load) pipelines. What I love about Mage is that it is easy to use, you can visualize your data pipelines and it supports multiple programming languages: SQL, Python.. and R!

![Mage.ai](/assets/r_mage_gcp_mage-ai-example.jpg)

In addition to building our pipeline, we’ll use Mage to **schedule your pipelines**, as you can see in the example below.

![Mage Schedule](/assets/r_mage_gcp_mage-schedule.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Register for R-Tips Newsletter Here</a></p>

### 3. Google Cloud Platform (GCP): To store the data and make it accessible to data visualization tools.

You can run Mage on your local machine or in the cloud.

Obviously, if you run it locally, your computer needs to be on all the time, which is not ideal. Therefore, we’ll create a virtual machine (VM) on the Google Cloud Platform and run Mage from there.

A virtual machine (VM) on GCP is like a computer in the cloud. It’s not a physical machine you can touch; instead, it’s a powerful, remote computer that you can use to run your software and store your data.

![Google Cloud Platform](/assets/r_mage_gcp_google_cloud_platform.jpg)

- Google Cloud Platform (GCP) is a cloud computing platform that allows you to store data and make it accessible to data visualization tools.
- You'll need to create a Google Cloud account to use GCP.
- Google Cloud Platform: [https://cloud.google.com/](https://cloud.google.com/)

### 4. VSCode IDE: To access the virtual machine remotely

To access the virtual machine from our computer, we’ll use Visual Studio Code, which is a lovely, free code editor that supports many programming languages.

![VSCode](/assets/r_mage_gcp_vscode_ide.jpg)


# The Solution: Arben's 8-Step Process

Now for my 8-step process for building a data engineering pipeline in R with Mage.ai and GCP. These are the steps I follow when I'm building a data engineering pipeline for a client.

1. **How to create a Google Cloud project.**
2. How to set up a virtual machine.
3. **How to access your virtual machine remotely.**
4. How to install Mage.ai on the virtual machine to handle the automation.
5. **How to retrieve data from the GA4 API in a production environment.**
6. How to retrieve data from the Google Ads API in a production environment.
7. **How to export data to Google BigQuery in a production environment.**
8. How to schedule a data pipeline that automatically updates every 5 minutes.


## Step 1: How to create a Google Cloud project



## Step 2: How to set up a virtual machine

## Step 3: How to access your virtual machine remotely

## Step 4: How to install Mage.ai on the virtual machine to handle the automation

## Step 5: How to retrieve data from the GA4 API in a production environment

## Step 6: How to retrieve data from the Google Ads API in a production environment

## Step 7: How to export data to Google BigQuery in a production environment

## Step 8: How to schedule a data pipeline that automatically updates every 5 minutes

# Conclusion:

Creating a data science portfolio is a great way to market yourself as a data scientist. It's a great way to get hired, get promoted, and get more business. **But you'll also want to make sure you are ready to win the interview, get the job or client, and excel on the job as a data scientist. Question: Do you:**

1. Need data science skills: Data Visualization, Time Series, Machine Learning, Production, Web Apps, and Cloud?
2. Data science projects to fill your portfolio?
3. Know how to communicate your results to non-technical audiences?
4. Know how to build production web applications?
5. Know how to work with a team?

**If you need to learn these skills, then I can help. Read on.**

{% include cta_struggles_rtrack.md %}