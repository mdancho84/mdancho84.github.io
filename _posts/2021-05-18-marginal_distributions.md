---
layout: post
title: 'ggside: A new R package for plotting distributions in side-plots'
date: 2021-05-18T06:30:00.000+00:00
excerpt: Marginal distributions can now be made in R using ggside, a new ggplot2 extension.
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
image: "/assets/ggside_img.jpg"
image_preview: "/assets/ggside_img.jpg"

---
I fell in love with a new ggplot2 extension. It made my life much simpler to help me uncover relationships in my complex business data. `ggside` is a new R package uses "marginal distribution plots", which are the density side-plot panels to the top and right of scatter (made popular by the Python Seaborn package). Let's get you up and running with `ggside` in under 5-minutes with this quick R-Tip.


---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly Newsletter

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks one R-tip at a time.

<p>Here are the links to get set up. 👇</p>

<ul>
<li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li>
<li><a href="https://youtu.be/uojdfPZZBUE">YouTube Tutorial</a></li>
</ul>

# This Tutorial Is Available In Video

I have a companion video tutorial that shows even more secrets (plus mistakes to avoid).  And, I'm finding that a lot of my students prefer the dialogue that goes along with coding. So check out this video to see me running the code in this tutorial. 👇

<iframe class = "shadow" width="100%" height="450" src="https://www.youtube.com/embed/uojdfPZZBUE" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p class="text-center date">Watch my 5-minute tutorial on YouTube</p>

# What are Marginal Distributions?

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

# Side-Plot Tutorial with `ggside`

<p><strong>Marginal distributions can now be made in R using <code>ggside</code>, a new ggplot2 extension</strong>. You can make linear regression with marginal distributions using histograms, densities, box plots, and more. Bonus - The side panels are super customizable for uncovering complex relationships. </p>

<p>Here are <strong>two examples</strong> of what you will do in this tutorial! 👇</p>

<h3>Plot 1: Linear Regression with Marginal Distribution (Density) Side-Plots (Top and Left)</h3>

The first plot you'll make...

<img src="/assets/2021-05-18-marginal_distributions/fuel_vehicle.jpg" style='max-width:100%;'>

<h3>Plot 2: Facet-Plot with Marginal Box Plots (Top)</h3>

The second plot you'll make...

<img src="/assets/2021-05-18-marginal_distributions/fuel_engine.jpg" style='max-width:100%;'>

# Thank You Developers

I want to thank [jtlandis](https://github.com/jtlandis) for his amazing software contribution. JT is a data scientist at the University of North Carolina at Chapel Hill and and R Developer who created `ggside`. Thank you for all you do!

# Before we get started, get the Cheat Sheet

<p><code>ggside</code> is great for making marginal distribution side plots. But, you'll still need to learn how to visualize data with ggplot2. For those topics, I'll use the <a href="https://www.business-science.io/r-cheatsheet.html"> Ultimate R Cheat Sheet</a> to refer to <code>ggplot2</code> code in my workflow.</p>

<h3>Quick Example:</h3>

<p>Download the Ultimate R Cheat Sheet. <strong>Then Click the "CS" next to "ggplot2"</strong> which opens the Data Visualization with Dplyr Cheat Sheet.</p>

<a href="https://www.business-science.io/r-cheatsheet.html"> <img src="/assets/2021-05-18-marginal_distributions/workflow.jpg" style='max-width:100%;'>

<p>Now you're ready to quickly reference <code>ggplot2</code> functions.</p>

<a href="https://www.business-science.io/r-cheatsheet.html"> <img src="/assets/2021-05-18-marginal_distributions/cheat_sheet.jpg" style='max-width:100%;'></a>

# Start By Loading The Libraries & Data

<p>The libraries we'll need today are patchwork, ggridges, ggrepel, maps, tidyverse, and lubridate. All packages are available on CRAN and can be installed with <code>install.packages()</code>. Note - I'm using the development version of <code>ggside</code>, which is what I recommend in the <a href="https://youtu.be/uojdfPZZBUE">YouTube Video </a>. </p>

<img src="/assets/2021-05-18-marginal_distributions/libraries.jpg" style='max-width:100%;'>

<p class="date text-center"> <a href="https://learn.business-science.io/r-tips-newsletter"> Get the Code </a></p>

<p>The dataset is the mpg data that comes with ggplot2.</p>

<img src="/assets/2021-05-18-marginal_distributions/mpg.jpg" style='max-width:100%;'>

# Plot 1: Linear Regression with Marginal Distribution Plot

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
<figcaption> <a href="https://learn.business-science.io/r-tips-newsletter"> Get the Code </a></figcaption>
</figure>

<h3>Loess Regression w/ Marginal Density</h3>

<p>We generate the regression plot with marginal distributions (density) to highlight key differences between the automobile classes. We can see:</p>

<ul>
<li>Pickup, SUV - Have the <strong>lowest</strong> Highway Fuel Economy (MPG)</li>
<li>2seater, Compact, Midsize, Subcompact - Have the <strong>highest</strong> Highway Fuel Economy</li>
</ul>

<img src="/assets/2021-05-18-marginal_distributions/fuel_vehicle_2.jpg" style='max-width:100%;'>

# Plot 2. Faceted Side-Panels

<p>Next, let's try out some advanced functionality. I want to see how ggside handles faceted plots, which are subplots that vary based on a categorical feature. We'll use the "cyl" column to facet, which is for engine size (number of cylinders). </p>

<figure class="text-center">
<img src="/assets/2021-05-18-marginal_distributions/code2.jpg" style='max-width:100%;'>
<figcaption><a href="https://learn.business-science.io/r-tips-newsletter"> Get the Code</a></figcaption>
</figure>

<h3>Faceted Side Panels? No problem.</h3>

<p>Awesome! I have included facets by "cyl", which creates four plots based on the engine size. ggside picked up on the facets and has made 4 side-panel plots. </p>

<img src="/assets/2021-05-18-marginal_distributions/fuel_engine_2.jpg" style='max-width:100%;'>

# 💡 Conclusions

You learned how to use `ggside`. Great work! **But, there's a lot more to becoming a Business Scientist (my term for an incredibly valuable data scientist that has _business problem-solving skills_).**

If you'd like to become a **Business Scientist**...

With an awesome 6-figure data science career, improved quality of life, a fulfilling job that helps your business, and all the fun that comes along with a career that gives you the freedom to be creative and a problem solver in industry, **then I would love to help you.**

{% include cta_struggles_rtrack.md %}
