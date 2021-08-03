---
layout: post
title: "SweetViz: Automated Exploratory Data Analysis (EDA) in Python"
date:   2021-08-03 08:01:00
excerpt: "SweetViz is a Python library that makes exploratory data analysis (EDA) fast and effective. Learn how to investigate feature relationships using correlation and associations in the automated SweetViz report."
author: "Matt Dancho"
categories: [python]
tags: [Learn-Python, Python-Bloggers, SweetViz]
image: "/2021-08-03-sweetviz/005_sweetviz_thumb.jpg"
image_preview: "/2021-08-03-sweetviz/005_sweetviz_thumb.jpg"
---

`SweetViz` is a Python library that makes exploratory data analysis (EDA) fast and effective. Learn how to investigate feature relationships using correlation and associations in the __automated SweetViz report.__

## Python Tips Weekly

This article is part of Python-Tips Weekly, a <a href="https://mailchi.mp/business-science/python_tips_newsletter" target="_blank">bi-weekly video tutorial</a> that shows you step-by-step how to do common Python coding tasks.

<p>Here are the links to get set up. 👇</p>

<ul>
    <li><a href="https://mailchi.mp/business-science/python_tips_newsletter" target='_blank'>Get the Code</a></li>
    <li><a href="https://youtu.be/CCy0JAB_fbo" target='_blank'>YouTube Tutorial</a></li> 
</ul>


# Video Tutorial<br><small>Follow along with our Full YouTube Video Tutorial.</small>

Learn how to use `SweetViz` to make and investigate an automated EDA Report. 

<figure class="text-center">
    <a href="https://youtu.be/CCy0JAB_fbo" target="_blank">
    <img src="/assets/2021-08-03-sweetviz/005_sweetviz_thumb.jpg" style='max-width:100%;'> </a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>


# Before we get started, get the Python Cheat Sheet

The Python Ecosystem is LARGE. To help, I've curated many of the __80/20 Python Packages__, those I use most frequently to get results. Simply [Download the Ultimate Python Cheat Sheet](https://www.business-science.io/python-cheatsheet.html) to access the entire Python Ecosystem at your fingertips via hyperlinked documentation and cheat sheets. 

<figure class='text-center'>
<a href="https://www.business-science.io/python-cheatsheet.html" target="_blank"> 
  <img src="/assets/2021-07-06-sklearn/ultimate_python_cheatsheet.jpg" style='max-width:100%;'>
  <figcaption>(Click image to download)</figcaption>
</a>
</figure>

<br>


Onto the tutorial. 



# SweetViz: Automating EDA

Let's check out how to __automate__ an exploratory data analysis report with `SweetViz`. 

![SweetViz EDA Report](/assets/2021-08-03-sweetviz/sweetviz_report.jpg)

<p class='text-center date'> 
  <a href='https://mailchi.mp/business-science/python_tips_newsletter' target ='_blank'>Get the code.</a>
</p>

## Step 1: Load Libraries and Data

First, let's load the libraries and data. From the libraries, we'll import `pandas`, `sweetviz` and my favorite plotting library, `plotnine`.   

![Libraries](/assets/2021-08-03-sweetviz/00_libraries.jpg)

<p class='text-center date'> 
  <a href='https://mailchi.mp/business-science/python_tips_newsletter' target ='_blank'>Get the code.</a>
</p>

The `mpg_df` data set contains information on fuel efficiency (mpg) along with important vehicle attributes for 398 vehicles. 

![MPG Data](/assets/2021-08-03-sweetviz/00_data.jpg)

<p class='text-center date'> 
  <a href='https://mailchi.mp/business-science/python_tips_newsletter' target ='_blank'>Get the code.</a>
</p>

## Step 2: Make the SweetViz EDA Report in 2 Lines of Code

> Goal: Understand the relationship between Fuel Economy (MPG) and features in this dataset 

We can assess the relationship between vehicle fuel economy and the explanatory features using the sweetviz report. SweetViz __automates__ the process of creating the EDA report in two lines of code. 

![SweetViz Report Code](/assets/2021-08-03-sweetviz/01_sweetviz_report_code.jpg)

<p class='text-center date'> 
  <a href='https://mailchi.mp/business-science/python_tips_newsletter' target ='_blank'>Get the code.</a>
</p>

This creates the SweetViz EDA Report. 


![SweetViz EDA Report](/assets/2021-08-03-sweetviz/sweetviz_report.jpg)


## Step 3: Investigate the Feature Correlation (Associations)

We can investigate the feature associations / correlations and see that number of cylinders (engine size), displacement (engine volume), horsepower, weight have a relationship to vehicle fuel efficiency. 

### 3A: High-Level Correlations (Associations)

We start with an overall view of the high-level relationships.



![SweetViz Correlation](/assets/2021-08-03-sweetviz/03_correlation.jpg)

- __The squares are categorical features.__ Their relationships range from 0 to 1 indicating associative strength only. We need to need to inspect tabs for categories like cylinder, which has a high associative strength to determine its effect on MPG.

- __The circles are numeric features.__ Their relationships range from -1 to 1 following a Pearson Correlation. We can see positive and negative relationships indicated by the sign (+/-) and strength of relationship (closer to +/-1 is strong, closer to zero is weak).


### 3B: Distribution Analysis: Individual Features

We can take a step further and investigate individual features to see how each relate to the target by __comparing their distributions__. 


#### Feature Tabs

For example, we can investigate "cylinders" to see how the distributions co-vary. Just click on the "cylinders" tab. 


![SweetViz Tabs - Cylinders](/assets/2021-08-03-sweetviz/03_cylinders_tab.jpg)

<br>

#### Exploratory Panels

This opens up an exploratory panel with useful information that __compares the distribution of vehicles by cylinder to their average MPG.__ 


![SweetViz Distribution - Cylinders](/assets/2021-08-03-sweetviz/03_cylinders_distribution.jpg)

We can see that:

- 4 Cylinder Engines: Have the highest average MPG
- 8 Cylinder Engines: Have the lowest average MPG

It's that easy to explore your dataset!

# Summary

Exploratory data analysis can be automated with the python SweetViz reporting package. SweetViz makes it fast and easy to explore features and determine relationships to a target. In our case, we saw that 4 cylinder engines have the highest average MPG while 8 cylinder engines have the lowest average MPG.

# Learn More

Businesses are transitioning manual processes to Python for automation. Learn how in our new course, [Python for Data Science Automation](https://university.business-science.io/p/python-for-data-science-automation-ds4b-101p). Perform and end-to-end business forecast automation using `pandas`, `sktime`, and `papermill`, and learn Python in the process. 

{% include cta_101P.html %}





<!-- This is markdown code. It wont look formatted in your browser, 
    but will be fine when published. to the website -->

<!-- {% include cta_rtrack.html %} -->

<!-- {% include top_rtips.html %} -->


