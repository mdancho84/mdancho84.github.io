---
layout: post
title: "How to Automate Excel with R"
date:   2020-10-07 06:00:00
excerpt: "Your company lives off them... Excel files.  Why not automate them & save some time? Here's an Excel File you're going to make in this tutorial from R."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, R, R-Tips]
image: 2020-10-07-automate-excel/automate-excel-cover.png
image_preview: 2020-10-07-automate-excel/automate-excel-preview.png
---


This article is part of a R-Tips Weekly, a [weekly video tutorial](https://mailchi.mp/business-science/r-tips-newsletter) that shows you step-by-step how to do common R coding tasks.


Let's learn how to **automate Excel with R**, using `openxlsx` and `tidyquant`. 

- Get the Code: [GitHub Link](https://github.com/business-science/free_r_tips)
- Video Tutorial: [YouTube Tutorial](https://youtu.be/EMSkZOF-ZG8)

<br>

<figure class="text-center">
  <a href="https://youtu.be/EMSkZOF-ZG8"><img src="/assets/2020-10-07-automate-excel/video-thumb.jpg" border="0" /></a>
  <figcaption>(Click image to play video)</figcaption>
</figure>

<br>

# Automate Excel with R Tutorial

Using R to automate Excel is an awesome skill for automating your work (and life). Your company lives off Excel files.  Why not automate them &amp; save some time?

Here's an Excel File you're going to make in this tutorial from R. &#128071;

![Excel Spreadsheet](/assets/2020-10-07-automate-excel/spreadsheet.jpg)

<br>

First, collect your data using `tidyquant`, an awesome package for importing & working with **Financial Data**. 

![Import Data](/assets/2020-10-07-automate-excel/import-data.jpg)

<br>

The previous code makes this **Pivot Table** (stock returns by year and symbol). 

![Import Data](/assets/2020-10-07-automate-excel/pivot-table.jpg)

<br>

...And this stock chart over time. 

![Plot Data](/assets/2020-10-07-automate-excel/plot.jpg)


<br>

Now for the magic - Let's add the Pivot Table & Stock Plot to Excel! &#128293;
1. Initialize a workbook
2. Create a worksheet
3. Add the stock plot
4. Add the Pivot Table
5. Save the workbook
6. Open the workbook (programmatically)

![Create Excel Workbook with R](/assets/2020-10-07-automate-excel/create-workbook.jpg)

<br>

![Excel Workbook](/assets/2020-10-07-automate-excel/workbook-display.jpg)


<br>

You've just **automated creation of an Excel Workbook with R**.

It's magic! &#128165; &#128165; &#128165;

![Excel Workbook](/assets/2020-10-07-automate-excel/magic.gif)


<br>

### SETUP R-TIPS WEEKLY PROJECT

1. Sign Up to Get the R-Tips Weekly (You'll get email notifications of NEW R-Tips as they are released): https://mailchi.mp/business-science/r-tips-newsletter

2. Set Up the GitHub Repo: https://github.com/business-science/free_r_tips

3. Check out the setup video (https://youtu.be/F7aYV0RPyD0). Or, Hit Pull in the Git Menu to get the R-Tips Code

Once you take these actions, you'll be set up to receive R-Tips with Code every week. =)

<br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}