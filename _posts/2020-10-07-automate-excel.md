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

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> <li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li> <li><a href="https://youtu.be/EMSkZOF-ZG8">YouTube Tutorial</a></li> </ul>

# Video Tutorial

I have a companion video tutorial that shows even more cool automation stuff (plus mistakes to avoid).

<iframe width="100%" height="450" src="https://www.youtube.com/embed/EMSkZOF-ZG8" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Automate Excel with R Tutorial

Using R to automate Excel is an awesome skill for automating your work (and life). Your company lives off Excel files.  Why not automate them & save some time?

Here's an Excel File you're going to make in this tutorial from R. 👇

![Excel Spreadsheet](/assets/2020-10-07-automate-excel/spreadsheet.jpg)

<br>

First, collect your data using `tidyquant`, an awesome package for importing & working with **Financial Data**.

![Import Data](/assets/2020-10-07-automate-excel/import-data.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

<br>

The previous code makes this **Pivot Table** (stock returns by year and symbol).

![Import Data](/assets/2020-10-07-automate-excel/pivot-table.jpg)

<br>

...And this stock chart over time.

![Plot Data](/assets/2020-10-07-automate-excel/plot.jpg)

<br>

Now for the magic - Let's add the Pivot Table & Stock Plot to Excel! 🔥

1. Initialize a workbook
2. Create a worksheet
3. Add the stock plot
4. Add the Pivot Table
5. Save the workbook
6. Open the workbook (programmatically)

![Create Excel Workbook with R](/assets/2020-10-07-automate-excel/create-workbook.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

<br>

![Excel Workbook](/assets/2020-10-07-automate-excel/workbook-display.jpg)

<br>

You've just **automated creation of an Excel Workbook with R**.

It's magic! 💥 💥 💥

![Excel Workbook](/assets/2020-10-07-automate-excel/magic.gif)

<br>

# 💡 Conclusions

You learned how to use the `openxlsx` library to create automated reports using R and Excel together. Great work! **But, there's a lot more to becoming a Business Scientist.**

If you'd like to become a Business Scientist (and have an awesome career, improve your quality of life, enjoy your job, and all the fun that comes along), then I can help with that.

## Step 1: Watch my Free 40-Minute Webinar

Learning data science on your own is hard. I know because **IT TOOK ME 5-YEARS to feel confident.**

AND, I don't want it to take that long for you.

So, I put together a [**FREE 40-minute webinar (a masterclass)**](https://learn.business-science.io/free-rtrack-masterclass-signup) that provides a roadmap for what worked for me.

Literally 5-years of learning, consolidated into 40-minutes. It's jammed packed with value. I wish I saw this when I was starting... It would have made a huge difference.

## Step 2: Take action

For my action-takers, if you are ready to become a Business Scientist, then read on.

If you need take your skills to the next level and DON'T want to wait 5-years to learn data science for business, AND you want a career you love that earns you $100,000+ salary (plus bonuses), AND you'd like someone to help you do this in UNDER  6-MONTHS or less....

**Then I can help with that too.**

## Surprise!

There's a link in the [**FREE 40-minute webinar**](https://learn.business-science.io/free-rtrack-masterclass-signup) for a **special price (because you are special!)** and taking that action will kickstart your journey with me in your corner.

Get ready. The ride is wild. And the destination is AMAZING!

![](/assets/rtrack_what_they_are_doing.jpeg)

{% include top_rtips.html %}
