---
layout: post
title: "Introducing gt_summarytools: Analyze Your Data Faster With R"
date: 2024-09-22 06:00:00 -0500
excerpt: "In today's fast-paced data science environment, speeding up exploratory data analysis (EDA) is more critical than ever. This is where gt_summarytools() comes in. A new function I’ve developed, gt_summarytools(), combines the best features of gt and summarytools, allowing you to create detailed, interactive data summaries faster and with more flexibility than ever."
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- summarytools
- gt
- gt_summarytools
image: "/assets/085_introducing_gt_summarytools.jpg"
image_preview: "/assets/085_introducing_gt_summarytools.jpg"
---

Hey guys, welcome back to my [R-tips newsletter](https://learn.business-science.io/r-tips-newsletter?el=website). In today's fast-paced data science environment, speeding up exploratory data analysis (EDA) is more critical than ever. This is where `gt_summarytools()` comes in. A new function I’ve developed, `gt_summarytools()`, combines the best features of `gt` and `summarytools`, allowing you to create detailed, interactive data summaries faster and with more flexibility than ever. Let's go!

### Table of Contents

Here's what you're learning today:

- **Why Quick Data Analysis Matters**
  
- **Introducing `gt_summarytools()`**:
  - Combining the Best of `gt` and `summarytools`
  - Creating Summaries with `gt_summarytools()`


- **Get the Code**: **[Join the R-Tips Newsletter](https://learn.business-science.io/r-tips-newsletter?el=website)** to get the code and stay updated.

![Analyze Your Data Faster with gt_summarytools()](/assets/085_introducing_gt_summarytools.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 085 Folder)</a></p>

---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> 
    <li><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Sign up for our R-Tips Newsletter and get the code.</a></li> 
     <li><a href="https://youtu.be/vQ6rU-SJonY">YouTube Tutorial</a></li>
</ul>


# This Tutorial is Available in Video (9-minutes)

I have a 9-minute video that walks you through setting up `gt_summarytools()` in R and running your first exploratory data analysis with it.  👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/vQ6rU-SJonY" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Why Quick Data Analysis Matters

Exploratory Data Analysis is crucial for understanding your data, spotting trends, and detecting issues before diving into more advanced modeling techniques. But EDA can often be a time-consuming task if you're not using the right tools.

That’s why I developed `gt_summarytools()` — to provide a faster, more efficient way to analyze your data using the power of `gt` and `summarytools`.

# Introducing gt_summarytools()

If you’ve used `summarytools` for generating quick summaries and gt for creating visually appealing tables, you’ll love this new function. `gt_summarytools()` combines the two, allowing you to get the best of both worlds: concise, visually-rich summaries that are easy to generate and interpret.

Here's one of the summaries we will create today with `gt_summarytools()`:

![GT summarytools](/assets/085_customer_churn_summary.jpg)

## Combining the Best of gt and summarytools

Here’s how it works:

* `gt`: A package for creating publication-quality tables.

* `summarytools`: Known for its powerful `dfSummary()` function that provides a detailed overview of your data frame.

* `gt_summarytools()`: The perfect combination of the two, giving you a beautiful summary table with just a few lines of code.
  
Let’s dive into a demo!

# Code Demo: `gt_summarytools()` in Action

I’ve developed this function to help you summarize your data faster and with more visual appeal. Let’s take a look at the new code demo, exclusively for [R-tips newsletter](https://learn.business-science.io/r-tips-newsletter?el=website) subscribers.

![Get the Code](/assets/085_get_the_gt_summarytools_code.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 085 Folder)</a></p>

## Step 1: Load Libraries and Data

Run this code to load the libraries and data:

![Libraries and Data](/assets/085_libraries_data.jpg)

## Step 2: Load the source code for `gt_summarytools()`

Next, source the code for the `gt_summarytools()` function ([it's in the R-Tip 085 Folder](https://learn.business-science.io/r-tips-newsletter?el=website)). 

Run this code:

![Source the gt_summarytools_code](/assets/085_source_code.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 085 Folder)</a></p>

## Step 3: Run `gt_summarytools()` on the datasets provided

We can generate quick summaries using `gt_summarytools()`. Run this code:

![Running gt_summarytools](/assets/085_running_gt_summarytools.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 085 Folder)</a></p>

Here, we’re using the `gt_summarytools()` function to generate a beautiful table summarizing the churn data and stock data. These tables are not only functional but visually appealing, thanks to the `gt_theme_538()` theme, which adds a clean, professional style.

Let's examine the output:

### Customer Churn Summary:

![Customer Churn Summary](/assets/085_customer_churn_summary.jpg)


### Stock Data Summary: 

![Stock Data Summary](/assets/085_stock_data_summary.jpg)

# Want the Full Code?

To get access to the full source code for `gt_summarytools()`, subscribe to the [R-Tips Newsletter](https://learn.business-science.io/r-tips-newsletter?el=website). This code is available exclusively to subscribers!

![Source Code](/assets/085_get_the_gt_summarytools_code.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 085 Folder)</a></p>


# Conclusion: Save Time and Analyze Faster

By leveraging `gt_summarytools()`, you can significantly speed up your data analysis workflow, all while generating better-looking tables. This function simplifies the process of data exploration, making it easier to gain insights and focus on decision-making and modeling.

**But there's more to becoming a data scientist.** 

If you would like to **grow your Business Data Science skills with R**, then please read on...

{% include cta_struggles_rtrack.md %}


