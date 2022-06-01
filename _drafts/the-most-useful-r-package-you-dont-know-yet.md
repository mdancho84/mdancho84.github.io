---
layout: post
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
title: The Most Useful R Package (That You've Never Heard Of)
date: 2022-06-02 06:00:00 -0400
excerpt: 'This is the most useful R package that I''ve ever made that can help you
  tremendously AND you probably don''t know it yet. '
image: "/assets/best_r_package_ever.jpg"
image_preview: "/assets/best_r_package_ever.jpg"

---
If you are looking to learn about the most useful R package that I've ever made that can help you tremendously THAT you probably don't know yet, you've come to the right place, my friend!

But, I'm going to have some fun today too (I'll tell you why in a second)! So buckle up and get ready for some fun along the way.

# What's _this_ fun that Matt speaks of?

I've been learning R for the better part of a decade and for 7 of those years I've been building R packages many of which are open source (free for everyone to use).

Here's a short list of many of my open source R packages, AND I want you to guess which one I'm covering today. I've sorted by GitHub stars (We'll use this as a proxy for popularity).

![](/assets/r_package_stars.jpg)

<p class="date text-center">My R Packages (Which one am I teaching you today?)</p>

# Here's what _it's_ not

**I _love_ guessing games.** You get to see why I picked what I picked (and I get to introduce you to my R packages at the same time).

As a bonus, every R package I cover here **IS** **super valuable**. But just not the one that IS both valuable AND few know if it. 

If you don't know if these R packages yet, then I highly suggest learning them. They are life-savers for tasks like financial analysis and time series analysis. 

## 1. It's _not_ tidyquant

Tidyquant is an incredibly useful R package for downloading and working with Financial Data (stocks, investments, and investment portfolios).

![](/assets/tidyquant.jpg)

<p class="date text-center">It's not tidyquant</p>

But, with 750 GitHub stars and almost 800,000 downloads, there's a good chance you've heard of it or possibly even used it.

### Getting started with Financial Analysis in R

**Want to get started with Financial Analysis in R?** 

Then I have a special R Cheat Sheet that links to all of the important documentation.  You can [download the R cheat sheet for free here](https://www.business-science.io/r-cheatsheet).

![](/assets/free_cheatsheet.jpg)

<p class="date text-center">Free R Cheat Sheet (<a href="https://www.business-science.io/r-cheatsheet">Download Here</a>)</p>

### Learning Financial Analysis

To get started with Financial Analysis in R, head to **Page 3 of the cheat sheet**, and you can check out the Financial Analysis Section. 

* You'll see Tidyquant and several other Financial R Packages. 
* The links will take you to the `tidyquant` & financial software documentation.

![](/assets/cheatsheet_financial.jpg)

<p class="date text-center">Financial Analysis in R</p>

But, I'm NOT covering `tidyquant` today. It's just _too_ popular. Check out the Cheat Sheet for the tidyquant doc's and tutorials in the R cheat sheet.

Onto the next R package...

## 2. It's _not_ timetk

Timetk is a fantastic R package that helps bring time series analysis to the tidyverse. If you love `dplyr` and `ggplot2`, imagine being able to wrangle and visualize time series data the SAME way. That's what `timetk` does.

![](/assets/timetk.jpg)

<p class="date text-center">It's not timetk</p>

But timetk is again _too_ popular. Timetk has been downloaded 1,400,000 times and his a staple of time series analysis in the tidyverse. 

### Learning Time Series Analysis

**Want to get started with Time Series Analysis?** (perfect if you have to solve time series projects for your company.) 

Check out the Time Series Analysis section on [Page 3 of my R Cheat Sheet](https://www.business-science.io/r-cheatsheet).

![](/assets/cheatsheet_timeseries-1.jpg)

<p class="date text-center">Time Series Analysis in R</p>

Alright, onto the next one...

# 3. It's _not_ modeltime

I have put 2+ years of blood, sweat, and tears into developing `modeltime`, an ecosystem of time series forecasting tools that leverages the amazing Tidymodels ecosystem. And, of course I'd love to talk about it. 

![](/assets/2021-04-08-modeltime-recursive/modeltime_workflow.jpg)

<p class="date text-center">It's not modeltime</p>

### Modeltime Forecasting Ecosystem

In fact, you'll see in the GitHub Star table that I created several Modeltime Ecosystem Extensions including:

* `modeltime.ensemble` for forecast ensembles
* `modeltime.h2o` for forecasting with H2O AutoML
* `modeltime.gluonts` for forecasting with Python GluonTS Deep Learning
* `modeltime.resample` for backtesting forecasts

![](/assets/2021-03-15-modeltime-h2o/modeltime_ecosystem.jpg)

<p class="date text-center">Modeltime Ecosystem Forecasting Extensions</p>

But, it's not it. 

### Want to learn Time Series Forecasting?

**Ready to get started forecasting in R?** I can't do a full time series forecast analysis in this post, so I'm going to do the next best thing! I'll point you to some free resources for time series forecasting inside my R Cheat Sheet. 

Head to [Page 3 of my R Cheat Sheet](https://www.business-science.io/r-cheatsheet). Under Forecasting you'll see links to all of the modeltime ecosystem documentation (I've put 100s of hours into so it's understandable and full-featured).

![](/assets/cheatsheet_forecasting.jpg)

<p class="date text-center">Forecasting in R</p>

Alright, so what IS it?

# Well it's not...

* `Sweep` - Sweep is great if you want to "tidy" the `forecast` R package, but Timetk and Modeltime are the new time series and forecasting tools that I use. 
* `Portfoliodown` - A great package of course! But, it's for a specific type of people that need to make interview portfolios. Not general data science or data analysis.  
* `Anomalize` - Another great choice, but actually `timetk` has most of the time series anomaly detection functionality ported over and anomalize depends on tibbletime, an older system for time series analysis that has been superceded. 

So what could IT be? 

(I can hear it now, _"C'mon Matt, tell us already!!!"_)

# Here IT is... The most useful R package (you don't know yet)!!

Here it is...

![](/assets/best_r_package_ever.jpg)

It's `correlationfunnel`!!!

## Why Correlation Funnel?

Imagine a world where you're given a dataset that you've never seen before (such as a data science interview), and the interviewer says something like this:

**_"You have 2 hours to give me some insights."_**

Well, this actually happened to my friend Danny Ma in one of his first data science job interviews. Here's his interview story...

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6937725065761337345" height="450" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

## What if Danny had `correlationfunnel`?