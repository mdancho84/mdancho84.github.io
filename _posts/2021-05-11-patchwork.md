---
layout: post
title: "patchwork: ggplot2 plot combiner"
date:   2021-05-11 06:30:00
excerpt: "Now you can make publication-ready storyboards. Patchwork makes it simple to combine separate ggplots into the same graphic."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R]
image: "/assets/2021-05-11-patchwork/cover_image.JPG"
image_preview: "/assets/2021-05-11-patchwork/cover_image.JPG"
---

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<br/>

<p>Here are the links to get set up. 👇</p>

<ul>
    <li><a href="https://learn.business-science.io/r-tips-newsletter?rfsn=4810182.eff115&subid=koivs2aicj015e9h0ntyp">Get the Code</a></li>
    <li><a href="https://youtu.be/_lEwfZbyu48">YouTube Tutorial</a></li> 
</ul>

<br/>

<h1>patchwork<br>
<small>The ggplot2 composer that makes it ridiculously simple to combine multiple ggplots</small></h1>

<figure class="text-center">
    <a href="https://youtu.be/_lEwfZbyu48">
    <img src="/assets/2021-05-11-patchwork/video.png" style='max-width:100%;'> </a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>



<h1>patchwork<br>
<small>Combine multiple ggplots into one.</small></h1>


<figure class="text-center">
    <img src="/assets/2021-05-11-patchwork/storyboard.jpg" style='max-width:100%;'>
  <figcaption>A Texas Real Estate Storyboard</figcaption>
</figure>
<br>
<p>What we're making today combines 3 plots into 1 illustrative storyboard.</p>


<ol>
    <li>Map Plot</li>
    <li>Time Series Plot</li>
    <li>Ridgeline Plot</li>
</ol>    
<br>
<p>The <strong>ggplot2 package</strong> is great for single plots, but what about creating a storyboard for illustrating ideas, making persuasive arguments, and storytelling?</p>

<p>Now you can <strong>make publication-ready storyboards using patchwork</strong>, the composer of ggplot2. Patchwork makes it ridiculously simple to combine separate ggplots into the same graphic, arranging plots into a grid and adding figures, labels, and annotations.</p>

<p>The <code>patchwork</code> package aims to make it easy to combine ggplots by:</p>

<ul>
    <li>Using a ggplot2 syntax for using a grammar of plot-layout operations.</li>
    <li>Extends the amazing ggplot2 package.</li>
</ul>

<h1>How patchwork works</h1>

<p>Here's the simplified patchwork syntax. That's all we need to create a two-column layout with the right-column containing two rows is in the simple syntax. Let's break it down. </p>

<img src="/assets/2021-05-11-patchwork/code.jpg" style='max-width:100%;'>

<p><strong>Patchwork has a very simple syntax</strong> where we can create layouts super easily. Here's the general syntax that combines:</p>

<ol>
    <li>Two-Column Layout using the <strong>Plus Sign `+`</strong></li>
    <li><strong>Parenthesis `()`</strong> to create a subplot group.</li>
    <li>Two-Row Layout using the <strong>Division Sign `\`</strong></li>
</ol>

<p>This is the basic layout for the Texas Real-Estate Storyboard shown in the chart above. 📊☝️</p>

<p>The most important component to patchwork is that <strong>you need to be good at developing <code>ggplot2</code> plots</strong> if you want to make your storyboard look great. For that, I'll defer to our <a href="https://www.business-science.io/r-cheatsheet.html">Ultimate R Cheat Sheet</a> to help you get up to speed. </p>

<h1>Before we get started, get the Cheat Sheet</h1>

<p><code>patchwork</code> is great for combining plots. But, you'll still need to learn how to wrangle data with dplyr and visualize data with ggplot2. For those topics, I'll use the <a href="https://www.business-science.io/r-cheatsheet.html"> Ultimate R Cheat Sheet</a> to refer to <code>dplyr</code> and <code>ggplot2</code> code in my workflow.</p>

<h3>Quick Example:</h3>

<p>Download the Ultimate R Cheat Sheet. <strong>Then Click the "CS" next to "ggplot2"</strong> opens the Data Visualization with Dplyr Cheat Sheet.</p>

<a href="https://www.business-science.io/r-cheatsheet.html"> <img src="/assets/2021-05-11-patchwork/workflow.jpg" style='max-width:100%;'>

<p>Now you're ready to quickly reference <code>ggplot2</code> functions.</p>  

<p>Onto the tutorial. </p>

<a href="https://www.business-science.io/r-cheatsheet.html"> <img src="/assets/2021-05-11-patchwork/cheat_sheet.jpg" style='max-width:100%;'></a>

<h1>Step 1: Load Libraries & Data</h1>

<p>The libraries we'll need today are patchwork, ggridges, ggrepel, maps, tidyverse, and lubridate. All packages are available on CRAN and can be installed with <code>install.packages()</code>. </p>

<img src="/assets/2021-05-11-patchwork/libraries.jpg" style='max-width:100%;'>

<p>The dataset is the txhousing data that comes with ggplot2.</p> 

<img src="/assets/2021-05-11-patchwork/txhousing.jpg" style='max-width:100%;'>

<h1>Step 2: Make our Sub-Plots</h1>

<p>We'll start by making individual plots that are components of our final patchwork storyboard. </p>

<h3>Plot 1. Time Series Plot</h3>

<p>First, we make a time series plot that shows the smoothed trend in median home prices of all the Texas cities along with their individual trends in median price. </p>

<figure class="text-center">
    <img src="/assets/2021-05-11-patchwork/time_series.jpg" style='max-width:100%;'>
  <figcaption> <a href="https://learn.business-science.io/r-tips-newsletter"> Get the Code </a></figcaption>
</figure>

<img src="/assets/2021-05-11-patchwork/median.jpg" style='max-width:100%;'>

<h3>Plot 2. Ridgeline Plot</h3>

<p>Next is creating a ridgeline plot, a special plot that shows distribution of median home prices by top-10 cities in an aesthetically pleasing visual. PS. I teach data visualization with ggplot2 in-depth in the <a href="https://university.business-science.io/p/ds4b-101-r-business-analysis-r">R for Business Analysis course</a>. </p>

<figure class="text-center">
    <img src="/assets/2021-05-11-patchwork/gg_tx_ridge.jpg" style='max-width:100%;'>
  <figcaption><a href="https://learn.business-science.io/r-tips-newsletter"> Get the Code</a></figcaption>
</figure>

<img src="/assets/2021-05-11-patchwork/top_10.jpg" style='max-width:100%;'>

<h3>Plot 3. The Map Plot</h3>

<p>The final plot is a geographic map that showcases the summary of which cities have the highest median home prices in Texas. </p>

<figure class="text-center">
    <img src="/assets/2021-05-11-patchwork/txhousing2.jpg" style='max-width:100%;'>
  <figcaption><a href="https://learn.business-science.io/r-tips-newsletter"> Get the Code</a></figcaption>
</figure>

<img src="/assets/2021-05-11-patchwork/city_price.jpg" style='max-width:100%;'>

<h1>Step 3: Compose with patchwork</h1>

<p>The <a href="https://youtu.be/_lEwfZbyu48">YouTube tutorial</a> does this code justice. Check it out.</p>

<figure class="text-center">
    <img src="/assets/2021-05-11-patchwork/gg_tx_map.jpg" style='max-width:100%;'>
  <figcaption><a href="https://learn.business-science.io/r-tips-newsletter"> Get the Code</a></figcaption>
</figure>

<img src="/assets/2021-05-11-patchwork/stats.jpg" style='max-width:100%;'>

<h1>In Summary</h1>

<p><strong>You just quickly made a professional storyboard using the ggplot2 and patchwork</strong>. Fantastic! </p>

<p>You should be proud.</p>
<br>
<br>
<br>
<p>This article is part of <strong>R-Tips Weekly</strong>, a weekly video tutorial that shows you step-by-step how to do common R coding tasks. <a href="https://learn.business-science.io/r-tips-newsletter">Join today.</a></p> 

<!-- This is markdown code. It wont look formatted in your browser, 
    but will be fine when published. to the website -->

<br><br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}


