---
layout: post
title: "Introducing anomalize for timetk in R (For Time Series Anomaly Detection)"
date: 2023-10-29 11:00:00 -0500
excerpt: "Hey guys, welcome back to my R-tips newsletter. In today's video, I'm sharing the cheat code to detecting anomalizes. We'll cover a full financial analysis. Let's go!" 
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- timetk
- anomalize
image: "/assets/071_anomalize_timetk_in_r.jpg"
image_preview: "/assets/071_anomalize_timetk_in_r.jpg"

---
Hey guys, welcome back to my [R-tips newsletter](https://learn.business-science.io/r-tips-newsletter). In today's R-Tip, I'm sharing **BRAND NEW time series anomaly detection functionality** I just added to `timetk` in R. It's a native integration of my `anomalize` R package (and it includes some new bells and whistles for time series anomaly detection). Plus, I'm sharing exactly how to do anomaly detections with a student-driven finance example (stock data). AND how you can analyze anomalies for ANY time series data set. Let's go!

### Table of Contents

Today I share how to **automatically detect anomalies** with `anomalize()`, a new function just added to `timetk`. Here's what you're learning today:

* *How to use `anomalize()` to automate anomaly detection:* This 1 function automatically breaks down, detects, and cleans anomalies in `R`.
* *Full Code Demo:* Exactly how to anomalize ANY time series in under 25 lines of code.  
* *Financial Example:* How to use `anomalize()` to detect anomalies in stock data.

![Introducing Anomalize for Timetk in R](/assets/071_anomalize_stocks.jpg)

<p class="date text-center">What You Make Today!</p>

### Disclaimer

We are doing a stock analysis example. This is for educational purposes only. I am not a financial advisor. I am not recommending any stocks. I am not responsible for any financial losses. Please consult a financial advisor before making any financial decisions.

---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> 
    <li><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code</a></li> 
    <!-- <li><a href="https://youtu.be/fkwKQi7skAw">YouTube Tutorial</a></li>-->
</ul>

<!--
# This Tutorial is Available in Video

I have a companion video tutorial that walks you through how to use `ChatGPT` + `R` + `Shiny` for this Excel Spreadsheet Analyzer automation. 👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/fkwKQi7skAw" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

-->


# The new `anomalize()` function in `timetk` (R)

Anomalize: In 1 line of code it does 3 things:

1. **Time Series Decomposition:**  Breaks down a time series into trend, seasonal, and remainder components.
2. **Anomaly Detection:**  Reconstructs the original time series without anomalies.
3. **Anomaly Adjustment:**  Replaces anomalies with interpolated values.

![Anomalize Documentation](/assets/071_anomalize_docs.jpg)

<p class="text-center date"><a href="https://business-science.github.io/timetk/reference/anomalize.html" target="_blank">Anomalize for TimeTK in R</a></p>

Here's how it works using a Stock Analysis example that's inspired by one of my students.

# Student Example: Anomaly Detection in Stock Analysis and Algorithmic Trading

This example is inspired by my student, [Kunal Vinayak Satpute](https://www.linkedin.com/in/kunalsatpute/), who is a student in my [High Performance Time Series Course](https://university.business-science.io/p/ds4b-203-r-high-performance-time-series-forecasting?el=website). He's working on a project to detect anomalies in stock data to help him improve his personal investing strategies. He's using `timetk` and `anomalize()` to do it.

## The Problem: When to Buy and Sell Stocks?

A big challenge when deciding to invest in a stock is whether the timing is right for an entry or exit point. The stock market is volatile and it's hard to know when to buy or sell. And without a systematic strategy, it's easy to lose money.

Kunal faced this issue. He says, *"I was really struggling when it comes to managing my personal finances.While investing in stocks or mutual funds, as soon as I buy the stock's price drops."*

![Student Slack Screenshot](/assets/071_student_slack_screenshot.jpg)

## The Solution: Anomaly Detection with `timetk` and `anomalize()`

Using time series analysis and more specifically Anomaly Detection, Kunal is able to detect anomalies in stock data. This helps him make better decisions on when to buy and sell stocks. He then put this into an R Shiny App that he can use to analyze any stock or mutual fund in a systematic and scalable automation.

![Student Shiny App](/assets/071_student_shiny_app.png)

So let's get into the code and see how it works, shall we?

# Tutorial: How to Detect Anomalies in Financial Time Series Data with `anomalize()` in `timetk`

Today, you're going to learn how to use `anomalize()` to detect anomalies in financial time series data. We'll use the stock data similar to the student example.

![Anomalizing Stocks](/assets/071_anomalize_stocks.jpg)

For the code and data used in this example, you can get it here:

1. Join the [R-Tips Newsletter Right Now!](https://learn.business-science.io/r-tips-newsletter?el=website) (Code and Data are sent via email)

2. The data and R script files are located in the `/071_anomalize_timetk_intro` folder


## Step 1: Load the Libraries

The `anomalize()` function is BRAND NEW. In fact, it's so new that it's not even on CRAN yet. You can get it from GitHub using `remotes::install_github("business-science/timetk")`. 

![Load Libraries and Data](/assets/071_01_libraries.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Financial Data and Code Now</a></p>

The dataset is a financial time series using OHLCV Data (Open, High, Low, Close, Volume) for the 2 Stocks: AAPL and NVDA. 

![Financial Data](/assets/071_02_stock_dataset.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Financial Data and Code Now</a></p>

## Step 2: Anomalize!

Next, let's use `anomalize()` to detect anomalies in the stock data.

![Anomalize](/assets/071_03_anomalize.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Financial Data and Code Now</a></p>

The data has now been anomalized. Let's take a look at the results.

![Anomalized Data](/assets/071_04_anomalized_data.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Financial Data and Code Now</a></p>

We can see new columns are returned:

1. **Time Series Decomposition:** Trend, Seasonal, Seasonal Adjustment, and Remainder

2. **Anomalies:** The anomaly (Yes/No), anomaly direction (-1, 0, 1), anomaly_score, recomposed_l1 and l2 bands that distinguish anomalies.

3. **Cleaned:** The `observed_cleaned`` time series without anomalies.

## Step 3: Visualize the Anomalies

Next, let's visualize the anomalies using `plot_anomalies()`.

![Plot Anomalies](/assets/071_05_plot_anomalies.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Financial Data and Code Now</a></p>

This returns the following plot:

![Stock Anomalized Plot](/assets/071_06_anomalized_plot.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Financial Data and Code Now</a></p>

# Step 4: Analyze the Anomalies

Let's inspect the anomalies and see if we can detect some buy/sell signals. 

![Anomaly Analysis](/assets/071_07_anomaly_analysis.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Financial Data and Code Now</a></p>

# Conclusions:

With the new `anomalize()` function in `timetk`, we can now automatically detect anomalies in time series data. This is a powerful tool that can be used to detect anomalies in any time series data set.

**However, there is A LOT more to learning Time Series, Data Science, and Production Web Applications.**

If you are struggling to become a Data Scientist with R, then please read on...

{% include cta_struggles_rtrack.md %}