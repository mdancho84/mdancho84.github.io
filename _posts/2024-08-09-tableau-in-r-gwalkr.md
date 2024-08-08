---
layout: post
title: "Tableau in R for $0 (Introducing GWalkR)"
date: 2024-08-09 06:00:00 -0500
excerpt: "Hey guys, welcome back to my R-tips newsletter. In today's lesson, I'm sharing how to do data exploration in R for visualization tool called GWalkR that is like Tableau for $0. Let's go!" 
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- GWalkR
image: "/assets/083_tableau_in_r_gwalkr.jpg"
image_preview: "/assets/083_tableau_in_r_gwalkr.jpg"

---

Hey guys, welcome back to my [R-tips newsletter](https://learn.business-science.io/r-tips-newsletter?el=website). Today I'm introducing `GWalkR`: An R package for Exploratory Data Analysis in 1 line of code. Just like Tableau. **But Costs $0 (100% free).** Let's go!

### Table of Contents

Here's what you're learning today:

* **What is GWalkR?** You'll discover what `GWalkR` is and how it makes Exploratory Data Analysis in R easier
* **How I Replaced Tableau with GWalkR (A $0 Alternative):** How I use GWalkR to replace Tableau
* **How to use GWalkR inside of R to Make 4 Common Plots:** I have prepared a full R code tutorial ([get the code and data here](https://learn.business-science.io/r-tips-newsletter?el=website)).

![Tableau in R: GWalkR](/assets/083_tableau_in_r_gwalkr.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 083 Folder)</a></p>

---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> 
    <li><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Sign up for our R-Tips Newsletter and get the code.</a></li> 
     <li><a href="https://youtu.be/5cIq2lZDVB0">YouTube Tutorial</a></li>
</ul>

# This Tutorial is Available in Video (11-minutes)

I have an 11-minute video that walks you through setting up `GWalkR` in R and running your first exploratory data analysis with it.  👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/5cIq2lZDVB0" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


# What is GWalkR?

`GWalkR` is a Tableau alternative that is 100% freely available in R. It includes 95% of the drag-n-drop features for fast EDA that Tableau has. And you can use it right in R. Github: https://github.com/Kanaries/GWalkR

For Python users, the `pygwalker` library is the equivalent tool in Python. Github: https://github.com/Kanaries/pygwalker 

Both `GWalkR` and `pygwalker` made by [Kanaries](https://kanaries.net/), which offers a paid version that includes more features like cloud hosting, sharing, and AI.

![Kanaries](/assets/083_kanaries.jpg)


# How I Replaced Tableau with GWalkR (A $0 Alternative)

![Tableau Replacement](/assets/083_tableau_replacement.jpg)

I can replace roughly 95% of Tableau with the free version of `GWalkR`. 

## What Am I Using The Free Version For?

1. Quick Exploratory Analysis: This is what `GWalkR` is great for
2. Data Aggregations: See Aggregations below with Sum, Median, Means, Min/Max, etc
3. Data Distributions: See the Data Explorer in the R Tutorial Next
4. Time Series Analysis:
5. Doing Box Plots
6. Visualizing Common Transformations (Log)

## What Can't It Do For Free?

You'll need to use the paid version if you want to:

1. Saving Charts
2. Sharing Charts and Analysis
3. AI features like GPT Data Exploration and Chat Interface
4. Team Collaboration

## My Thoughts...

You'll want to weigh your analytics needs. If you're just doing analysis for yourself like I do 90% of the time. Then sharing isn't a big deal. I'll just make an RMarkdown with the final plots, analysis, and report when I need to share. 


# Tutorial: How to use GWalkR to Make 4 Common Data Visualizations

In this section, I'll share how to make 4 common data visualiations (plots):

1. Bar Plot
2. Scatter Plot
3. Box Plot
4. Time Series Plot

It takes about 10 seconds to get `GWalkR` set up so you can start doing drag-n-drop exploratory data analysis (just like Tableau) inside of R. All the tutorial code and data sets shown are available in the [R-Tips Newsletter folder for R-Tip 083](https://learn.business-science.io/r-tips-newsletter?el=website).

![Get the Code and Data Sets](/assets/083_get_the_code.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code and Datasets (In the R-Tip 083 Folder)</a></p>

## Step 1 - Install and Run GWalkR:

The first step is to set up `GWalkR`. Run this code to install `GWalkR`, load the key libraries, and read in the first data set (MPG Data) that will explore together. 

![Run This Code](/assets/083_run_this_code.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 083 Folder)</a></p>

This will produce the GWalkR in the Viewer Pane inside RStudio:

![GWalkR](/assets/083_gwalkr.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 083 Folder)</a></p>

Now you're ready to explore and analyze the first data set. 

## Step 2 - Analyze the MPG Data Set

Let's get our feet wet with some of the basic features of `GWalkR`. We'll explore the "mpg" data set [in the data folder of R-Tip 083](https://learn.business-science.io/r-tips-newsletter?el=website). 

### Plot 1: Make a Bar Plot

**A bar plot** is the most basic plot that is an aggregation (sum, average, etc) applied to 1 numeric feature. The bars are formed by segmenting by 1 categorical feature.

![Bar Plot](/assets/083_bar_plot.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code and Data Set (In the R-Tip 083 Folder)</a></p>

To make a bar plot, we need to:

1. Drag and drop "class" a categorical feature to the X-axis, and "hwy" a numeric feature to the Y-axis.
2. Make sure Aggregation Mode is On, and select aggregation type of "mean" on the hwy numeric variable
3. Select Container Mode to expand the chart
4. Sort the data ascending

### Plot 2: Make a Scatter Plot

**A scatter plot** is an un-aggregated plot that will help us detect trends between 2 numeric features. 

![Scatter Plot](/assets/083_scatter_plot.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code and Data Set (In the R-Tip 083 Folder)</a></p>

Now that you have a feel for how it works, creating a scatter plot is pretty easy:

1. Create a new chart (Chart 2)
2. Drag cty and hwy to X and Y-axis, respectively
3. Add some color by vehicle class
4. Add Details (hover tips) by dragging manufacturer and model to the Details section
5. Hover over the data to see which vehicle has better or worse city and highway fuel economy

### Plot 3: Make a Box Plot

**A box plot** applies Jon Tukey's method for displaying the distribution of data using median, 1st and 3rd quartiles, and outliers. It's great for detecting general trends and exposing outliers. 

![Box Plot](/assets/083_box_plot.jpg)

How to recreate this plot:

1. Create a new plot
2. Turn aggregation mode off
3. Select Plot Type --> Box Plot
4. Drag hwy and class to the X and Y axis, respectively
5. Drag class to Color
6. Rotate the Box Plot so the class is on the Y-axis


## Step 3 - Time Series Data

Now let's work with a time series dataset. Run this code:

![Run This Code](/assets/083_run_this_code_2.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code and Data Set (In the R-Tip 083 Folder)</a></p>


That will produce this GWalkR session in the Viewer pane:

![Time Series Data](/assets/083_time_series.jpg)

### Plot 4: Make a Time Series Plot 

**A time series plot** is a useful way to visualize trends in time series data (contains a date or time stamp).

![Time Series Plot](/assets/083_time_series_plot.jpg)

To recreate this plot:

1. Turn off aggregation mode 
2. Create a Log10 Transformed Version of Weekly Sales (click the dots next to weekly sales)
3. Drag Date to the X-Axis, and id and log10(Weekly_Sales) to the Y-axis
4. Filter the id by dragging id to Filters, then select 1_1, 1_3, and 1_8 only. 
5. In settings (gear icon), de-select the option to include zero in the plot. 

## Reminder: The code and data is available free inside R-tips

All of the code you saw today is available in [R-Tips Newsletter folder for R-Tip 083](https://learn.business-science.io/r-tips-newsletter?el=website)

![Get The Data Sets and Code](/assets/083_get_the_code.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 083 Folder)</a></p>



# Conclusions:

The `GWalkR` package makes it easy to explore data. In fact, I've used it to replace 95% of my Tableau work. But there's more to becoming a data scientist. 

If you would like to **grow your Business Data Science skills with R**, then please read on...

{% include cta_struggles_rtrack.md %}


