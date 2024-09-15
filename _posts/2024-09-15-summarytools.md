---
layout: post
title: "How to Analyze Your Data Faster With R Using summarytools"
date: 2024-09-15 06:00:00 -0500
excerpt: "Getting quick insights into your data is absolutely critical to data understanding, predictive modeling, and production. Learn how to use the summarytools package in R to analyze your data faster."
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- summarytools
image: "/assets/084_analyze_your_data_faster_with_r.jpg"
image_preview: "/assets/084_analyze_your_data_faster_with_r.jpg"
---

Hey guys, welcome back to my [R-tips newsletter](https://learn.business-science.io/r-tips-newsletter?el=website). Getting quick insights into your data is absolutely critical to data understanding, predictive modeling, and production. But it can be challenging if you're just getting started. Today, I'm going to show you how to **analyze your data faster using the `summarytools` package in R**. Let's go!

### Table of Contents

Here's what you're learning today:

- **Why Quick Data Analysis is Important**
- **How to Use `summarytools` to Summarize Your Data**
  - Data Frame Summaries with `dfSummary()`
  - Descriptive Statistics with `descr()`
  - Frequency Tables with `freq()`
- **Next Steps:** **[Join the R-Tips Newsletter](https://learn.business-science.io/r-tips-newsletter?el=website)** to get the code and stay updated.

![Analyze Your Data Faster with R](/assets/084_analyze_your_data_faster_with_r.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 084 Folder)</a></p>

---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> 
    <li><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Sign up for our R-Tips Newsletter and get the code.</a></li> 
     <li><a href="https://youtu.be/GDDzwpFBROg">YouTube Tutorial</a></li>
</ul>


# This Tutorial is Available in Video (6-minutes)

I have a 6-minute video that walks you through setting up `summarytools` in R and running your first exploratory data analysis with it.  👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/GDDzwpFBROg" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# How to Analyze Your Data Faster with R Using `summarytools`

## Why Quick Data Analysis is Important

In the fast-paced world of data science, getting quick insights into your data is crucial. It allows you to understand your data better, make informed decisions, and expedite the modeling process. However, performing exploratory data analysis (EDA) can be time-consuming if you're not using the right tools.

## Enter `summarytools`

The `summarytools` package in R simplifies the process of data exploration by providing functions that generate comprehensive summaries of your data with minimal code. 

![Summary Tools in R](/assets/084_summarytools_github.jpg)

Let's dive into how you can use `summarytools` to speed up your data analysis.

# Getting Started with `summarytools`

I'll show off some of the most important functionality in `summarytools`. I'll use a customer churn dataset. [You can get all of the data and code here (it's in the R-Tip 084 Folder)](https://learn.business-science.io/r-tips-newsletter?el=website).

## Step 1: Load Libraries and Data

First, make sure you have the `summarytools` and `tidyverse` packages installed. Then load the libraries and data needed to complete this tutorial. 

![Libraries and Data](/assets/084_libraries_data.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Data and Code (In the R-Tip 084 Folder)</a></p>

## Step 2: Data Frame Summaries with `dfSummary()`

The `dfSummary()` function provides a detailed summary of your data frame, including:

* Data types
* Missing values
* Unique values
* Basic statistics
* Graphical representations

**This code will open an interactive HTML report that summarizes your entire data frame**, making it easy to spot anomalies or areas that need attention. Run this code: 

![dfSummary for Quick Data Summaries](/assets/084_dfSummary.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 084 Folder)</a></p>

## Step 3: Descriptive Statistics with `descr()`

**To get descriptive statistics for your numeric variables**, use the `descr()` function. This function provides detailed statistics such as:

* Mean
* Median
* Standard deviation
* Inner quartile range (IQR)
* Min
* Max 
* Skewness
* Kurtosis

Run this code:

![descr for Quick Numeric Statistics](/assets/084_descr.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 084 Folder)</a></p>

## Step 4: Frequency Tables with `freq()`

**For categorical variables, the `freq()` function generates frequency tables that show the distribution of categories.** This helps you understand the distribution and prevalence of each category within your data.

Run this code:

![freq for Frequency Statistics](/assets/084_freq.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 084 Folder)</a></p>


# Conclusions:

By leveraging the `summarytools` package, you can perform a comprehensive exploratory data analysis with just a few lines of code. This not only saves you time but also enhances your understanding of the data, allowing you to make better-informed decisions. This leads to better predictive modeling, exploratory data analysis, and production deployment. 

**But there's more to becoming a data scientist.** 

If you would like to **grow your Business Data Science skills with R**, then please read on...

{% include cta_struggles_rtrack.md %}


