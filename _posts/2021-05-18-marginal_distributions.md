---
layout: post
title: "ggside: Plot Linear Regression using Marginal Distributions (ggplot2 extension)"
date:   2021-05-18 06:30:00
excerpt: "Marginal distributions can now be made in R using ggside, a new ggplot2 extension."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R]
image: "/assets/2021-05-18-marginal_distributions/cover_image.JPG"
image_preview: "/assets/2021-05-18-marginal_distributions/cover_image.JPG"
---

This article is part of R-Tips Weekly, a <a href="https://mailchi.mp/business-science/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<br/>

<p>Here are the links to get set up. 👇</p>

<ul>
    <li><a href="https://mailchi.mp/business-science/r-tips-newsletter?rfsn=4810182.eff115&subid=koivs2aicj015e9h0ntyp">Get the Code</a></li>
    <li><a href="https://youtu.be/uojdfPZZBUE">YouTube Tutorial</a></li> 
</ul>

<br/>

<h1>What are Marginal Distributions?<br>
<small>And how can I use them to uncover complex relationships?</small></h1>

<figure class="text-center">
    <a href="https://youtu.be/uojdfPZZBUE">
    <img src="/assets/2021-05-18-marginal_distributions/video.png" style='max-width:100%;'> </a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>



<h1>What are Marginal Distributions?</h1>

<p><strong>Marginal Distribution (Density) plots</strong> are a way to extend your numeric data with side plots that highlight the density (histogram or boxplots work too).</p>

<figure class="text-center">
    <img src="/assets/2021-05-18-marginal_distributions/density_plot.jpg" style='max-width:100%;'>
  <figcaption>Linear Regression Marginal Distribution Side Plots.<br>
  One of two plots we're making today.</figcaption>
</figure>
<br>

<p>Marginal Distribution Plots were made popular with the <a href="http://seaborn.pydata.org/examples/regression_marginals.html"> seaborn jointplot() </a> side-panels in Python. These add side plots that highlight distributions. </p>

<figure class="text-center">
  <img src="/assets/2021-05-18-marginal_distributions/linear_regression.jpg" style='max-width:100%;'> 
<figcaption>Seaborn's jointplot() makes a Linear Regression with Marginal Distributions.</figcaption>
</figure>

<h1>How do we make them in ggplot2?</h1>

<p><strong>Marginal distributions can now be made in R using <code>ggside</code>, a new ggplot2 extension</strong>. You can make linear regression with marginal distributions using histograms, densities, box plots, and more. Bonus - The side panels are super customizable for uncovering complex relationships. </p>

<p>Here are <strong>two examples</strong> of what you can (and will) do in this tutorial! 👇</p>

<h3>Example 1:</h3>

<p>Linear Regression with Marginal Distribution (Density) Side-Plots (Top and Left)</p>

<img src="/assets/2021-05-18-marginal_distributions/fuel_vehicle.jpg" style='max-width:100%;'>

<h3>Example 2:</h3>

<p>Facet-Plot with Marginal Box Plots (Top)</p>

<img src="/assets/2021-05-18-marginal_distributions/fuel_engine.jpg" style='max-width:100%;'>

<h1>Before we get started, get the Cheat Sheet</h1>

<p><code>ggside</code> is great for making marginal distribution side plots. But, you'll still need to learn how to visualize data with ggplot2. For those topics, I'll use the <a href="https://www.business-science.io/r-cheatsheet.html"> Ultimate R Cheat Sheet</a> to refer to <code>ggplot2</code> code in my workflow.</p>

<h3>Quick Example:</h3>

<p>Download the Ultimate R Cheat Sheet. <strong>Then Click the "CS" next to "ggplot2"</strong> which opens the Data Visualization with Dplyr Cheat Sheet.</p>

<a href="https://www.business-science.io/r-cheatsheet.html"> <img src="/assets/2021-05-18-marginal_distributions/workflow.jpg" style='max-width:100%;'>

<p>Now you're ready to quickly reference <code>ggplot2</code> functions.</p>  

<a href="https://www.business-science.io/r-cheatsheet.html"> <img src="/assets/2021-05-18-marginal_distributions/cheat_sheet.jpg" style='max-width:100%;'></a>

<h1>Load Libraries & Data</h1>

<p>The libraries we'll need today are patchwork, ggridges, ggrepel, maps, tidyverse, and lubridate. All packages are available on CRAN and can be installed with <code>install.packages()</code>. Note - I'm using the development version of <code>ggside</code>, which is what I recommend in the <a href="https://youtu.be/uojdfPZZBUE">YouTube Video </a>. </p>

<img src="/assets/2021-05-18-marginal_distributions/libraries.jpg" style='max-width:100%;'>

<p>The dataset is the mpg data that comes with ggplot2.</p> 

<img src="/assets/2021-05-18-marginal_distributions/mpg.jpg" style='max-width:100%;'>

<h1>SLinear Regression with Marginal Distribution Plot<br>
<small>Replicating Seaborn's jointdist() plot</small></h1>

<p>We'll start by replicating what you can do in <strong>Python's Seaborn jointdist() Plot</strong>. We'll accomplish this with <code>ggside::geom_xsidedensity()</code> </p>

<h3>We set up the plot just like a normal ggplot.</h3>

<p>Refer to the <a href="https://www.business-science.io/r-cheatsheet.html">Ultimate R Cheat Sheet </a> for:</p>

<ul>
    <li><code>ggplot()</code></li>
    <li><code>geom_point()</code></li>
    <li><code>geom_smooth()</code></li>
</ul>

<h3>Next we add from ggside:</h3>

<ul>
    <li><code>geom_xsidedensity()</code> - Adds a side density panel (top panel).</li>
    <li><code>geom_ysidedensity()</code> - Adds a side density panel (right panel).</li>
</ul>

<p>The trick is using the <code>after_stat(density)</code>, which makes an awesome looking marginal density side panel plot. I increased the size of the marginal density panels with the <code>theme(ggside.panel.scale.x)</code>. </p>

<figure class="text-center">
    <img src="/assets/2021-05-18-marginal_distributions/code.jpg" style='max-width:100%;'>
  <figcaption> <a href="https://mailchi.mp/business-science/r-tips-newsletter"> Get the Code </a></figcaption>
</figure>

<h3>Loess Regression w/ Marginal Density</h3>

<p>We generate the regression plot with marginal distributions (density) to highlight key differences between the automobile classes. We can see:</p>

<ul>
    <li>Pickup, SUV - Have the <strong>lowest</strong> Highway Fuel Economy (MPG)</li>
    <li>2seater, Compact, Midsize, Subcompact - Have the <strong>highest</strong> Highway Fuel Economy</li>
</ul>

<img src="/assets/2021-05-18-marginal_distributions/fuel_vehicle_2.jpg" style='max-width:100%;'>

<h1>Need help learning ggplot2?</h1>

<p>In the <a href="https://university.business-science.io/p/ds4b-101-r-business-analysis-r"> R for Business Analysis (DS4B 101-R) Course </a>, I teach 5-hours just on ggplot2. Learn: </p>

<ul>
    <li>Geometries</li>
    <li>Scales</li>
    <li>Themes</li>
    <li>And advanced customizations: Labeled Heat Maps and Lollipop Charts</li>
</ul>


<figure class="text-center">
    <a href="https://university.business-science.io/p/ds4b-101-r-business-analysis-r"> <img src="/assets/2021-05-18-marginal_distributions/data_visualization.png" style='max-width:100%;'></a>
  <figcaption> <a href="https://university.business-science.io/p/ds4b-101-r-business-analysis-r"> Get started today</a></figcaption></figure>

<h1>Plot 2. Faceted Side-Panels</h1>

<p>Next, let's try out some advanced functionality. I want to see how ggside handles faceted plots, which are subplots that vary based on a categorical feature. We'll use the "cyl" column to facet, which is for engine size (number of cylinders). </p>

<figure class="text-center">
    <img src="/assets/2021-05-18-marginal_distributions/code2.jpg" style='max-width:100%;'>
  <figcaption><a href="https://mailchi.mp/business-science/r-tips-newsletter"> Get the Code</a></figcaption>
</figure>

<h3>Faceted Side Panels? No problem.</h3>

<p>Awesome! I have included facets by "cyl", which creates four plots based on the engine size. ggside picked up on the facets and has made 4 side-panel plots. </p>

<img src="/assets/2021-05-18-marginal_distributions/fuel_engine_2.jpg" style='max-width:100%;'>

<h1>Amazing. ggside just works.</h1>

<p><strong>Congrats. You just quickly made two report-quality plots with ggplot2 and ggside. Excellent work.</strong> </p>

<img src="/assets/2021-05-18-marginal_distributions/meme.gif" style='max-width:100%;'>

<h1> But it gets better<br>
<small>You've just scratched the surface.</small></h1>

<p>What is the best way to become proficient in data science?</p>

<p>You're probably thinking:</p>

<ul>
  <li>There's so much to learn.</li>
  <li>My time is precious.</li>
 </ul>

<p>I have good news that will put those doubts behind you.</p>

<p>You can learn data science with my state-of-the-art <a href="https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series"> Full 5 Course R-Track System </a>. 

<h1>Become the data science expert in your organization.</h1>

<p>Get Five of our Premium R Courses that Build Expert-Level Machine Learning Skills, Web Application Skills, & Time Series Skills.</p>

<p>👉 <a href="https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series">Full 5 Course R-Track System</a></p>
<br>
<img src="/assets/2021-05-18-marginal_distributions/promo_business.gif" style='max-width:100%;'>
<br>
<p>Taking these courses is equivalent to:</p>

<ul>
  <li>9-Months of Methodical Code-Based Learning.</li>
  <li>250+ tool-based MOOC courses.</li>
  <li>Education Comparable to 9-months of University Courses.</li>
  <li>5 end-to-end projects.</li>
  <li>5 frameworks.</li>
</ul>

<h2><a href="https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series">Unlock the Full 5 Course R-Track System</a></h2>
