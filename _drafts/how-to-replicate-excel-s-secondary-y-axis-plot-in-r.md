---
layout: post
title: Dual-axis plots in R (a secret ggplot2 hack)
date: 2022-12-02 06:00:00 -0500
excerpt: Your company lives off them... Excel files.  Why not automate them & save
  some time? Here's an Excel File you're going to make in this tutorial from R.
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
image: "/assets/dual_axis_plotting.jpg"
image_preview: "/assets/dual_axis_plotting.jpg"

---
I can't tell you how painful it is to be better at something in Excel than in R. And one of the gripes I still have (10 years after making the switch from Excel to R) is that it's still tough to make dual-axis plots in R. 

Guess what, today is the day. I'm going to show you how to make more professional dual-axis plots in R than what I could do in Excel in my prime. Here's what you're learning today:

* How to make a dual-axis plot in R (my secret dual-plotting hack)
* **Bonus: My 3 pro tips to plot customizations (that will make your boss squeal with excitement)**

![](/assets/dual_axis_plotting_2.jpg)

<p class="text-center date">Dual Axis Plots</p>

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> <li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li> <li><a href="https://youtu.be/AQ1h_EAUgZM">YouTube Tutorial</a></li> </ul>

# Video Tutorial

I have a companion video tutorial that shows even more cool automation stuff (plus mistakes to avoid). You can check it out here.

<iframe width="100%" height="450" src="https://www.youtube.com/embed/AQ1h_EAUgZM" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Automate Excel with R Tutorial

Here's an Excel File you're going to make in this tutorial from R. 👇

![Excel Spreadsheet](/assets/2020-10-07-automate-excel/spreadsheet.jpg)

<br>

## Step 1: Collect, Prepare Data & Plots

First, collect your data using `tidyquant`, an awesome package for importing & working with **Financial Data**.

![Import Data](/assets/2020-10-07-automate-excel/import-data.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

<br>

### Pivot Table Data

The previous code makes this **Pivot Table** (stock returns by year and symbol).

![Import Data](/assets/2020-10-07-automate-excel/pivot-table.jpg)

### Time Series Stock Performance Plots

Here's the stock performance plot from the previous code.

![Plot Data](/assets/2020-10-07-automate-excel/plot.jpg)

<br>

## Step 2: Automate R to Excel

Now for the magic - Let's add the Pivot Table & Stock Plot to Excel! 🔥

1. Initialize a workbook
2. Create a worksheet
3. Add the stock plot
4. Add the Pivot Table
5. Save the workbook
6. Open the workbook (programmatically)

![Create Excel Workbook with R](/assets/2020-10-07-automate-excel/create-workbook.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

### Excel Output (.xlsx)

You've just **automated creation of an Excel Workbook with R**.

![Excel Workbook](/assets/2020-10-07-automate-excel/workbook-display.jpg)

# 💡 Conclusions

You learned how to use the `openxlsx` library to create automated reports using R and Excel together. Great work! **But, there's a lot more to becoming a Business Scientist.**

If you'd like to become a Business Scientist (and have an awesome career, improve your quality of life, enjoy your job, and all the fun that comes along), then I can help with that.

# My Struggles with Learning Data Science

It took me a long time to learn how to apply data science to business. And I made a lot of mistakes as I fumbled through learning R.

I specifically had a tough time navigating the ever-increasing landscape of tools and packages, trying to pick between R and Python, and getting lost along the way.

**If you feel like this, you're not alone.**

In fact, that's the driving reason that I created Business Science and Business Science University ([You can read about my personal journey here](https://www.business-science.io/business/2019/07/22/how-i-started-my-data-science-business.html)).

What I found out is that:

1. **Data Science does not have to be difficult, it just has to be taught from a business perspective**
2. **Anyone can learn data science fast provided they are motivated.**

# How I can help

If you are interested in learning R and the ecosystem of tools at a deeper level, then I have a streamlined program that will **get you past your struggles** and improve your career in the process.

It's my [5-Course R-Track System](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series/). It's an integrated system containing 5 courses that work together on a learning path. Through 8 projects, you learn everything you need to help your organization: from data science foundations, to advanced machine learning, to web applications and deployment.

The result is that **you break through previous struggles**, learning from my experience & our community of 2653 data scientists that are ready to help you succeed.

Ready to take the next step? Then [let's get started.](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series/)

![](/assets/rtrack_what_theyre_doing_2.jpg)

<p style="font-size: 36px;text-align: center;"><a href="https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series">Join My 5-Course R-Track Program<br>(Become A 6-Figure Data Scientist)</a></p>