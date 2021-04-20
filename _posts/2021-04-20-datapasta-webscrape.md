---
layout: post
title: "Webscraping Tables in R: Datapasta Copy-and-Paster"
date:   2021-04-20 06:30:00
excerpt: "Datapasta is an amazing package that allows us to copy-and-paste any HTML or Excel Tables into R."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Datapasta, Webscraping, Learn-R]
image: "/2021-04-20-datapasta-webscrape/cover_image.JPG"
image_preview: "/2021-04-20-datapasta-webscrape/cover_image.JPG"
---

This article is part of a R-Tips Weekly, a <a href="https://mailchi.mp/business-science/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<br/>

<p>Here are the links to get set up. 👇</p>

<ul>
    <li><a href="https://mailchi.mp/business-science/r-tips-newsletter">Get the Code</a></li>
    <li><a href="https://youtu.be/M3h11elq34E">YouTube Tutorial</a></li> 
</ul>

<br/>

<figure class="text-center">
    <a href="https://youtu.be/M3h11elq34E">
    <img src="/assets/2021-04-20-datapasta-webscrape/video.png" border="0" /></a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>

<h2> I wish I knew about Datapasta sooner <br>
<small>This R package saves so much time.</small></h2>

<p><code>Datapasta</code> is an amazing package that allows us to <strong>copy-and-paste any HTML or Excel Tables into R</strong>. I only wish I knew about it sooner. We'll use Datapasta to:</p>

<ol>
    <li><strong>Copy Stock Data from Yahoo! Finance</strong></li>
    <li><strong>Copy Revenue Data on the Largest Companies in the World from Wikipedia</strong></li>
</ol>

<figure class="text-center">
    <img src="/assets/2021-04-20-datapasta-webscrape/visualize_data.jpg" style="max-width:100%;">
  <figcaption>Visualize Revenue Data from the 10 Largest Companies in the World <br> Source: Wikipedia</figcaption>
</figure>

<h1>Before we get started, get the Cheat Sheet</h1>

<p><code>Datapasta</code> is great for importing raw data from HTML tables on the web. But, you'll still need to learn how to transform / wrangle the data and produce visualizations. For those topics, I'll use the <a href="https://www.business-science.io/r-cheatsheet.html"> Ultimate R Cheat Sheet</a> to refer to <code>dplyr</code> and <code>ggplot2</code> code in my workflow.</p>  

<p><strong>Quick example - Clicking the "CS" next to "dplyr"</strong> opens the Data Transformation with Dplyr Cheat Sheet.</p>

<a href="https://www.business-science.io/r-cheatsheet.html"> <img src="/assets/2021-04-20-datapasta-webscrape/workflow.jpg" style="max-width:100%;"> </a>
<br>
<p>Now you're ready to quickly reference <code>dplyr</code> functions.  Ok, onto the tutorial.</p> 

<img src="/assets/2021-04-20-datapasta-webscrape/cheat_sheet.jpg" style="max-width:100%;"> 

<h1>Datapasta RStudio Addin</h1>

<p>Datapasta contains an RStudio Add-In for Pasting web-tables stored in your "clipboard" (what happens when you "copy" something). </p>

<img src="/assets/2021-04-20-datapasta-webscrape/rstudio_addin.jpg" style="max-width:100%;">

<h1>Example 1: Copying Stock Data from Yahoo! Finance</h1>

<p>Let's go through a quick example. We can navigate to Yahoo! Finance and search for a ticker symbol like AAPL. </p>

<figure class="text-center">
    <img src="/assets/2021-04-20-datapasta-webscrape/yahoo_finance.jpg" style="max-width:100%;">
  <figcaption><a href="https://finance.yahoo.com/quote/AAPL/history">Source: Yahoo! Finance </a></figcaption>
</figure>
<br>
<p>Next, use the Datapasta Addin to <strong>"paste as tribble"</strong>. This pastes our data into our R script file.  </p>

<img src="/assets/2021-04-20-datapasta-webscrape/rscript_file.jpg" style="max-width:100%;">

<p>Next, use <code>dplyr</code> and <code>timetk</code> to wrangle and visualize the data. (Refer to the <a href="https://www.business-science.io/r-cheatsheet.html">ultimate R cheat sheet for documentation on dplyr and timetk</a>). We can see a spike in volume on last day of the month. </p>

<figure class="text-center">
    <img src="/assets/2021-04-20-datapasta-webscrape/visualize_data_2.jpg" style="max-width:100%;">
  <figcaption>Code available in our <a href="https://mailchi.mp/business-science/r-tips-newsletter">Free R-Tips Github Repository</a></figcaption>
</figure>


<h1>Example 2: Getting Revenue Data for World Largest Companies<br>
<small>From Wikipedia</small></h1>

<p>First, head over to Wikipedia and search for the "list of largest companies".</p>

<figure class="text-center">
    <img src="/assets/2021-04-20-datapasta-webscrape/wikipedia.jpg" style="max-width:100%;">
  <figcaption><a href="https://en.wikipedia.org/wiki/List_of_largest_companies_by_revenue"> Source: Wikipedia</a></figcaption>
</figure>

<br>

<p>Use <strong>datapasta</strong> to "paste as data.table". Then do some data wrangling with <strong>dplyr</strong>. Then visualize with <strong>ggplot2</strong>. And in a few lines of code you can create this chart showing that Walmart is dominating in Revenue. (Refer to the <a href="https://www.business-science.io/r-cheatsheet.html">ultimate R cheat sheet for documentation on dplyr and ggplot2</a>).

<figure class="text-center">
    <img src="/assets/2021-04-20-datapasta-webscrape/Revenue.jpg" style="max-width:100%;">
  <figcaption>Code available in our <a href="https://mailchi.mp/business-science/r-tips-newsletter">Free R-Tips Github Repository</a></figcaption>
</figure>

<br>

<h1>In Summary</h1>

<p>You just quickly scraped HTML tables using the copy-and-paster Rstudio Add-In known as <strong> datapasta </strong>. This is an amazing productivity boost!! This article is part of a R-Tips Weekly, a <a href="https://mailchi.mp/business-science/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Join today.</p> 

<!-- This is markdown code. It wont look formatted in your browser, 
    but will be fine when published. to the website -->

<br><br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}


