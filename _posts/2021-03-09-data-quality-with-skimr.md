---
layout: post
title: "Assess Your DATA QUALITY in R with skimr"
date:   2021-03-09 07:00:00
excerpt: "Skimr is my go-to R package for fast data quality assessment, and Skimr is my first step in exploratory data analysis. Before I do anything else, I check data quality with skimr."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, skimr, EDA]
image: 2021-03-09_Skmr_for_Data_Quality/cover.jpg
image_preview: 2021-03-09_Skmr_for_Data_Quality/preview.jpg
---

This article is part of a R-Tips Weekly, a <a href="https://mailchi.mp/business-science/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<br/>

Skimr is my go-to R package for fast data quality assessment, and Skimr is my first step in exploratory data analysis. Before I do anything else, I check data quality with skimr.

<p>Here are the links to get set up. 👇</p>

<ul>
    <li><a href="https://mailchi.mp/business-science/r-tips-newsletter">Get the Code</a></li>
    <li><a href="https://youtu.be/x23Lrn8smHk">YouTube Tutorial</a></li>
</ul>

<br/>

<figure class="text-center">
    <a href="https://youtu.be/x23Lrn8smHk"><img src="/assets/2021-03-09_Skmr_for_Data_Quality/video.png" border="0" /></a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>

<h2>Use Skimr for Data Quality<br><small>Exploratory Data Analysis</small></h2>

<img src="/assets/2021-03-09_Skmr_for_Data_Quality/data_quality_report.jpg" width="100%" />
    
<p class="text-center">The Data Quality Report from skimr</p>

<h2>Rapid Data Quality Checks in R<br><small>Automatic Data Quality Reporting</small></h2>
    
<p><strong>Data Scientists spend 80% of their time</strong> understanding data, exploring it, wrangling and preparing for analysis.</p>
    
<p>This is way too long!</p>
    
<p><strong>We can speed this up.</strong> One tool I use in EVERY SINGLE DATA PROJECT is called skimr. It's my go-to.  </p>

<p>PRO TIP: I've added <strong>links to skimr and two more SUPER-IMPORTANT R PACKAGES FOR EDA</strong> on Page 3 of <a href="https://www.business-science.io/r-cheatsheet">my Ultimate R Cheatsheet</a>. 👇</p>

<br>
<a href="https://www.business-science.io/r-cheatsheet"><img src="/assets/2021-03-09_Skmr_for_Data_Quality/special_topics.jpg" width="100%" /></a>

<br>
<p>You can use <a href="https://www.business-science.io/r-cheatsheet">my Ultimate R Cheatsheet</a> to help you learn R. It consolidates the most important R packages (ones I use every day) into one cheatsheet. Here's where skimr is located. </p>

<img src="/assets/2021-03-09_Skmr_for_Data_Quality/skmr_location.jpg" width="100%" />

<h2>How Skimr Works<br><small>Automatic Data Quality Reporting</small></h2>

<p>One of the coolest features of Skimr is the ability to <strong>create a Data Quality Report in 1 line of code</strong>. This automates:</p>

<ul>
    <li>Date Profiling</li>
    <li>Works with Numeric, Categorical, Text, Date, Nested List Columns, and even Dplyr Groups</li>
</ul>

<p>Ultimately, this saves the Data Scientist SO MUCH TIME. ⌛</p>

<h2>Missing Data, Categorical & Numeric Reporting (Starwars)</h2>

<p>The "starwars" data set has a 87 starwars characters with various attributes. This is a messy data set containing a lot of missing values and nested list-columns.</p>

<img src="/assets/2021-03-09_Skmr_for_Data_Quality/starwars_dataset.jpg" width="100%" />

<p><strong>Overall Data Summary</strong><br>
Number of Rows/Columns, Data Types by Column, Group Variables.</p>

<img src="/assets/2021-03-09_Skmr_for_Data_Quality/data_summary.jpg" width="100%" />

<p><strong>Character Summaries</strong><br>
Missing / completion rate, number of unique observations, and text features.</p>

<img src="/assets/2021-03-09_Skmr_for_Data_Quality/character_summaries.jpg" width="100%" />

<p><strong>List Summaries (nested column)</strong><br>
Number of unique elements in each list.</p>

<img src="/assets/2021-03-09_Skmr_for_Data_Quality/list_summaries.jpg" width="100%" />

<p><strong>Numeric Summaries</strong><br>
Missing/completion rates and distributions.</p>

<img src="/assets/2021-03-09_Skmr_for_Data_Quality/numeric_summaries.jpg" width="100%" />


<h2>Time Series Reporting (Economics)</h2>

<p>The "economics" data set has a date feature called "Date" and several numeric features. We'll focus on the date feature.</p>
       
<img src="/assets/2021-03-09_Skmr_for_Data_Quality/date_feature.jpg" width="100%" />

<p><strong>Date Summaries</strong><br>
Missing/completion rates, min/max dates, and the number of unique dates.</p>
    
<img src="/assets/2021-03-09_Skmr_for_Data_Quality/date_summaries.jpg" width="100%" />


<h2>Grouped Time Series Reporting (Economics Long)</h2>

<p>The "economics_long" data set has been pivoted so each time series from "economics" is stacked on top of each other - perfect for a groupwise skim analysis. </p>

<img src="/assets/2021-03-09_Skmr_for_Data_Quality/economics_long.jpg" width="100%" />

<p><strong>Grouped Date Summaries</strong><br>
Each of these are provided by group: Missing/completion rates, min/max dates, and the number of unique dates.</p>
    
<img src="/assets/2021-03-09_Skmr_for_Data_Quality/grouped_date_summaries.jpg" width="100%" />


<br>

<h4 class="text-center"><em>Assessing data quality with skimr is like:</em></h4>

<img src="/assets/2021-03-09_Skmr_for_Data_Quality/swipe_meme.gif" />

<p class="text-center">Just skim your data.</p>



<br><br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}

