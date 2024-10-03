---
layout: post
title: "Top 10 R Packages for Exploratory Data Analysis (EDA) (Bookmark this!)"
date: 2024-10-03 11:33:00 -0500
excerpt: "Enhance your data analysis workflow with these top 10 R packages for exploratory data analysis (EDA). Discover how to gain deeper insights into your data using tools like skimr, psych, corrplot, and more."
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- EDA
image: "/assets/086_top_10_r_packages_eda.jpg"
image_preview: "/assets/086_top_10_r_packages_eda.jpg"
---

Hey guys, welcome back to my [R-tips newsletter](https://learn.business-science.io/r-tips-newsletter?el=website). Today, I'm excited to share with you the **Top 10 R Packages for Exploratory Data Analysis (EDA)**. These packages will help you streamline your data analysis workflow and gain deeper insights into your datasets. Let's dive in!

### Table of Contents

Here's what you're learning today:

- **Importance of Exploratory Data Analysis**

- **Top 10 R Packages for EDA:**
    - `skimr`
    - `psych`
    - `corrplot`
    - `PerformanceAnalytics`
    - `GGally`
    - `DataExplorer`
    - `summarytools`
    - `SmartEDA`
    - `janitor`
    - `inspectdf`
  
- **BONUS: 5 More Underrated EDA Libraries in R**

- **Get the Code**: **[Join the R-Tips Newsletter](https://learn.business-science.io/r-tips-newsletter?el=website)** to get the code and stay updated.

![Analyze Your Data Faster with gt_summarytools()](/assets/086_top_10_r_packages_eda.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 086 Folder)</a></p>

---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> 
    <li><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Sign up for our R-Tips Newsletter and get the code.</a></li> 
     <li><a href="https://youtu.be/57sLWdW3rWE">YouTube Tutorial</a></li>
</ul>


# This Tutorial is Available in Video (12-minutes)

I have a 12-minute video that walks you through these top 10 R packages for EDA and how to use them in R. (These are the ones I use most commonly)  👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/57sLWdW3rWE" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Importance of Exploratory Data Analysis

**Exploratory Data Analysis (EDA)** is a crucial step in any data science project. It helps you understand the underlying structure of your data, identify patterns, detect anomalies, and test hypotheses. EDA enables you to make informed decisions about data cleaning, feature selection, and model selection.

# Top 10 R Packages for EDA

To make your EDA process more efficient and insightful, here are the top 10 R packages you should know. [Get the R code and dataset so you can follow along here.](https://learn.business-science.io/r-tips-newsletter?el=website) 

## Setup the EDA Packages and Dataset in R:

First, make sure you install all of the R packages I'll be demo-ing today. Then load the data set I'll be using so you can reproduce the results. Run this code:

![Libraries and Data](/assets/086_libraries_data.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 086 Folder)</a></p>

## 1. skimr: Summary of the Dataset

`skimr` provides a convenient and elegant summary of your data. Run this code:

- I made a deeper writeup on `skimr`: [Get the deep-dive here.](https://www.business-science.io/code-tools/2021/03/09/data-quality-with-skimr.html)

![skimr summary of dataset](/assets/086_skimr.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 086 Folder)</a></p>


## 2. psych: Descriptive Statistics

The `psych` package offers functions for psychological, psychometric, and personality research, including descriptive statistics. Run this code:

- We'll use the `describe()` function. 
- I personally like to output tables, so optionally you can use `gt::gt()` to convert to a GT HTML table. ([I made a deep dive on the GT R package here.](https://www.business-science.io/code-tools/2023/08/06/tables-in-r-from-excel.html))

![Get Descriptive Statistics with Psych](/assets/086_psyche_describe.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 086 Folder)</a></p>

## 3. corrplot: Correlation Matrix Visualization

`corrplot` visualizes correlation matrices using various correlation methods. There's a ton of customizations you can do. Run this code:

![Correlation Matrix Visualization with Corrplot](/assets/086_corrplot.jpg)


<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 086 Folder)</a></p>


## 4. PerformanceAnalytics: Correlation Matrix with Scatterplots and Histograms

`PerformanceAnalytics` provides advanced charts and statistical functions for financial analysis (I actually use PerformanceAnalytics inside my `tidyquant` package for easier financial analysis). But, most people have no idea it has an amazing `chart.Correlation()` function that is fast and awesome. Run this code:

![PeformanceAnalytics Chart Correlation](/assets/086_chart_correlation.jpg)


<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 086 Folder)</a></p>


## 5. GGally: Scatterplot Matrix with Pairwise Relationships

`GGally` extends ggplot2 by adding several functions to reduce the complexity of combining geometric objects. The `ggpairs()` function is one of my favorite functions for assessing Pairwise Relationships. So powerful. Run this code:

![GGally Pairwise Relationships](/assets/086_ggally.jpg)


<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 086 Folder)</a></p>



## 6. DataExplorer: Generate a Full EDA Report

`DataExplorer` automates the EDA process and generates comprehensive reports. Run this code:

- I did a Deeper Dive on Data Explorer ([Get my deep-dive here.](https://www.business-science.io/code-tools/2021/03/02/use-dataexplorer-for-EDA.html))

![DataExplorer](/assets/086_dataexplorer.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 086 Folder)</a></p>


## 7. summarytools: Summary Table for the Dataset

`summarytools` provides tools to neatly and quickly summarize data. Run this code:

- I did a deep dive on `summarytools` ([Get the deep dive here.](https://www.business-science.io/code-tools/2024/09/15/summarytools.html))
- I'm a big fan of `gt` tables, so I converted `summarytools` to gt ([get that article here.](https://www.business-science.io/code-tools/2024/09/22/gt-summarytools.html))

![Summarytools](/assets/086_summarytools.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 086 Folder)</a></p>



## 8. SmartEDA: Generate a Detailed EDA Report in HTML

`SmartEDA` creates automated EDA reports with detailed analyses. This is a newer package, but already I love it. Run this code:

![SmartEDA](/assets/086_smarteda.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 086 Folder)</a></p>



## 9. janitor: Frequency Table for a Categorical Variable

`janitor` helps with data cleaning tasks, including frequency tables. We'll use `tabyl()` to create a frequency table and the `adorn_*` functions to modify the table. Run this code:

![Janitor Tabyl](/assets/086_janitor_tabyl.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 086 Folder)</a></p>


## 10. inspectdf: Visualize Missing Values in the Dataset

`inspectdf` provides tools to visualize data frames, including missing values and correlations. Run this code:

![InspectDF](/assets/086_inspectdf.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 086 Folder)</a></p>



# Bonus: Five (5) Underrated EDA Libraries in R:

I had to call it quits at 10. But here are 4 more up and coming EDA libraries that are underrated:

1. **Radiant:** A shiny app for creating reproducible business and data analytics reports. [Get my radiant deep dive here.](https://www.business-science.io/code-tools/2022/02/01/business-analytics-radiant.html)

2. **Correlationfunnel:** I use this R package all the time for quick correlation anlaysis and detecting critical relationships. Full Disclosure: I authored this R package. ([Get the introduction here.](https://www.business-science.io/code-tools/2019/08/07/correlationfunnel.html))
  
3. **GWalkr:** Like Tableau in R for $0. [Get my GWalkR deep-dive here.](https://www.business-science.io/code-tools/2024/08/09/tableau-in-r-gwalkr.html)

4. **Esquisse:** Also like Tableau in R for $0. [Get my Esquisse deep-dive here.](https://www.business-science.io/code-tools/2021/03/23/ggplot-code-with-tableau-esquisse.html) 
  
5. **Explore:** A simple shiny app for quickly exploring data. [Get my explore deep-dive here.](https://www.business-science.io/code-tools/2022/09/23/explore-simplified-exploratory-data-analysis-eda-in-r.html)


# Want the Full R Code?

To get access to the full source code for this tutorial, subscribe to the [R-Tips Newsletter](https://learn.business-science.io/r-tips-newsletter?el=website). This code is available exclusively to subscribers!

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 086 Folder)</a></p>


# Conclusion: Enhance Your Data Analysis Workflow

By using these top 10 R packages for EDA, you can significantly enhance your exploratory data analysis workflow, gain deeper insights, and make data-driven decisions more effectively.

**But there's more to becoming a data scientist.** 

If you would like to **grow your Business Data Science skills with R**, then please read on...

{% include cta_struggles_rtrack.md %}


