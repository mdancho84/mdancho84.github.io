---
layout: post
title: "Super-FAST EDA in R with DataExplorer"
date:   2021-03-02 07:00:00
excerpt: "Did you know most Data Scientists spend 80% of their time just trying to understand and prepare data for analysis? R has an Insane Exploratory Data Analysis productivity-enhancer. It's called DataExplorer."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, DataExplorer]
image: /assets/2021-03-02_Use_DataExplorer_for_EDA/dataexplorer_cover.jpg
image_preview: /assets/2021-03-02_Use_DataExplorer_for_EDA/dataexplorer_preview.jpg
---



This article is part of a R-Tips Weekly, a <a href="https://mailchi.mp/business-science/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<br/>


Did you know most **Data Scientists spend 80% of their time just trying to understand and prepare data for analysis?!** This process is called Exploratory Data Analysis (EDA). R has an Insane EDA​ productivity-enhancer. It's called `DataExplorer​`.

<p>Here are the links to get set up. 👇</p>

<ul>
    <li><a href="https://mailchi.mp/business-science/r-tips-newsletter">Get the Code</a></li>
    <li><a href="https://youtu.be/ssVEoj54rx4">YouTube Tutorial</a></li>
</ul>

<br/>

<figure class="text-center">
    <a href="https://youtu.be/ssVEoj54rx4"><img src="/assets/2021-03-02_Use_DataExplorer_for_EDA/video.png" border="0" width="100%" /></a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>


<h1>Use DataExplorer for EDA <br/> <small>Exploratory Data Analysis</small></h1>

<img src="/assets/2021-03-02_Use_DataExplorer_for_EDA/chart_scroll.gif" width="100%">

<p>You're making this DataExplorer EDA Report!</p>

<h1>Super-FAST Exploratory Data Analysis (EDA) in R</h1>

<p>In this weekly <a href="https://mailchi.mp/business-science/r-tips-newsletter">R-Tip</a>, we're making an <strong>"EDA Report", created with the DataExplorer R package</strong>. The DataExplorer Package is an excellent package for <strong>Exploratory Data Analysis</strong>. In fact, it's one of my top 3 EDA Packages.</p>

<p><strong>PRO TIP</strong>: I've added EDA on Page 3 of <a href="https://www.business-science.io/r-cheatsheet">my Ultimate R Cheatsheet</a>. 👇</p>

<a href="https://www.business-science.io/r-cheatsheet"><img src="/assets/2021-03-02_Use_DataExplorer_for_EDA/special_topics.jpg" width="100%"></a>

<p>As you follow along, you can use <a href="https://www.business-science.io/r-cheatsheet">my Ultimate R Cheatsheet</a>. It consolidates the most important R packages (ones I use every day) into one cheatsheet. </p>

<h1>EDA Report with Data Explorer <br> <small>Automatic Exploratory Reporting</small></h1>

<p>One of the coolest features of DataExplorer is the ability to <strong>create an EDA Report in 1 line of code</strong>. This automates:</p>

<ul>
    <li>Basic Statistics</li>
    <li>Data Structure</li>
    <li>Missing Data Profiling</li>
    <li>Continuous and Categorical Distribution Profiling (Histograms, Bar Charts)</li>
    <li>Relationships (Correlation)</li>
</ul>

<p>Ultimately, this saves the analyst/data scientist SO MUCH TIME. 🚀</p>

<img src="/assets/2021-03-02_Use_DataExplorer_for_EDA/code.jpg" width="100%">

<img src="/assets/2021-03-02_Use_DataExplorer_for_EDA/chart_scroll_2.gif" width="100%">

<h1>DataExplorer EDA Plots<br><small>Add the important DataExplorer report plots to your R-Code</small></h1>

<p>DataExplorer just makes EVERYTHING SO EASY. Here's an example of the output of <code>plot_correlations()</code>. In one line of code, we get a <strong>correlation heatmap</strong> correlation heatmap with categorical data dummied. </p>

<img src="/assets/2021-03-02_Use_DataExplorer_for_EDA/correlation_heatmap.jpg" width="100%">

<p>It gets better. Everything is one line of code:</p>

<ul>
    <li><code>plot_intro()</code>: Plots the introduction to the dataset</li>
    <li><code>plot_missing()</code>: Plots the missing data</li>
    <li><code>plot_density()</code> and <code>plot_histogram()</code>: Plots the continuous feature distributions.</li>
    <li><code>plot_bar()</code>: Plots bar charts for categorical distributions</li>
    <li><code>plot_correlation()</code>: Plots relationships</li>
</ul>

<img src="/assets/2021-03-02_Use_DataExplorer_for_EDA/code_2.jpg" width="60%">

<p>Here's the output of <code>plot_bar()</code>. Wow - DataExplorer makes it that easy to make TIME-SAVING EDA VISUALIZATIONS. </p>

<img src="/assets/2021-03-02_Use_DataExplorer_for_EDA/plot_bar.jpg" width="100%">

<p>You don't need to be Bruce Almighty to do EDA fast anymore.<br>
<strong>Just.Use.DataExplorer.</strong></p>

<img src="/assets/2021-03-02_Use_DataExplorer_for_EDA/EDA_fast_meme.gif">





<br><br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}

