---
layout: post
title: How to Automate Excel with R
date: 2020-10-07T06:00:00.000+00:00
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
image: "/assets/excel_in_r.jpg"
image_preview: "/assets/excel_in_r.jpg"

---
Your company lives off them... Excel files.  Why not automate them & save some time? Here's an Excel File you're going to make in this tutorial from R. Let me show you how to **automate Excel with R in under 5-minutes**, using `openxlsx` and `tidyquant`.

![Excel Spreadsheet](/assets/2020-10-07-automate-excel/spreadsheet.jpg)

<p class="text-center date">Automating Excel from R</p>


---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> <li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li> <li><a href="https://youtu.be/EMSkZOF-ZG8">YouTube Tutorial</a></li> </ul>

# Video Tutorial

I have a companion video tutorial that shows even more cool automation stuff (plus mistakes to avoid).

<iframe width="100%" height="450" src="https://www.youtube.com/embed/EMSkZOF-ZG8" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Automate Excel with R Tutorial

Here's an Excel File you're going to make in this tutorial from R. 👇

![Excel Spreadsheet](/assets/2020-10-07-automate-excel/spreadsheet.jpg)

<br>

## Step 1: Collect, Prepare Data & Plots

First, collect your data using `tidyquant`, an awesome package for importing & working with **Financial Data**.

![Import Data](/assets/2020-10-07-automate-excel/import-data.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the code.</strong></a> </p>

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

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the code.</strong></a> </p>

### Excel Output (.xlsx)

You've just **automated creation of an Excel Workbook with R**.

![Excel Workbook](/assets/2020-10-07-automate-excel/workbook-display.jpg)

# 💡 Conclusions

You learned how to use the `openxlsx` library to create automated reports using R and Excel together. Great work! **But, there's a lot more to becoming a Business Scientist.**

If you'd like to become a Business Scientist (and have an awesome career, improve your quality of life, enjoy your job, and all the fun that comes along), then I can help with that.

{% include cta_struggles_rtrack.md %}
