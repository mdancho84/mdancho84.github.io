---
layout: post
title: 'ggforce: Make a Hull Plot to Visualize Clusters in ggplot2'
date: 2021-07-27T08:12:00.000+00:00
excerpt: ggforce is a ggplot2 extension that adds many exploratory data analysis features.
  In this tutorial, we'll learn how to make hull plots for visualizing clusters or
  groups within our data.
author: Matt Dancho
categories:
- R
tags:
- R-Bloggers
- Learn-R
- ggplot
- ggplot2
- ggforce
image: "/assets/2021-07-27-ggforce-hull-plots/043_ggforce_hull_plots.jpg"
image_preview: "/assets/2021-07-27-ggforce-hull-plots/043_ggforce_hull_plots.jpg"

---
The `ggforce` package is a `ggplot2` extension that adds many exploratory data analysis features. In this tutorial, we'll learn how to make **hull plots for visualizing clusters** or groups within our data.


---

{% include webinar_chatgpt.md %}

---

## R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<p>Here are the links to get set up. 👇</p>

<ul>
<li><a href="https://learn.business-science.io/r-tips-newsletter" target='_blank'>Get the Code</a></li>
<li><a href="https://youtu.be/LbJIcLWvJcc" target='_blank'>YouTube Tutorial</a></li>
</ul>

# Video Tutorial<br><small>Follow along with our Full YouTube Video Tutorial.</small>

Learn how to use `ggforce` in our 7-minute YouTube video tutorial.

<figure class="text-center">
<a href="https://youtu.be/LbJIcLWvJcc" target="_blank">
<img src="/assets/2021-07-27-ggforce-hull-plots/043_ggforce_hull_plots.jpg" style='max-width:100%;'> </a>
<figcaption>(Click image to play tutorial)</figcaption>
</figure>

# What is a Hull Plot?

**The Hull Plot** is a visualization that produces a shaded areas around clusters (groups) within our data. It gets the name because of the [Convex Hull shape](https://en.wikipedia.org/wiki/Convex_hull). It's a great way to show customer segments, group membership, and clusters on a **Scatter Plot**.

<img src="/assets/2021-07-27-ggforce-hull-plots/hull_plot.jpg" alt = "Hull Plot">

<p class="date text-center">Hull Plot (We'll make in this tutorial)</p>

We'll go through a short tutorial to get you up and running with `ggforce` to make a hull plot.

# Hull plots with `ggforce` \[Tutorial\]

This tutorial showcases the awesome power of `ggforce` for visualizing distributions.

## Tutorial Credits

This tutorial wouldn't be possible without the excellent work of Thomas Lin Pedersen, creator of `ggforce`. Check out the [ggforce package here](https://ggforce.data-imaginist.com/index.html).

## Before we get started, get the R Cheat Sheet

`ggforce` is great for extending ggplot2 with advanced features. But, you'll need to learn `ggplot2` to take full advantage. For these topics, I'll use the [Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html) to refer to `ggplot2` code in my workflow.

### Quick Example:

[Download the Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html). Then **Click the "CS" hyperlink** to "ggplot2".

<a href="https://www.business-science.io/r-cheatsheet.html"> <img src="/assets/2021-07-27-ggforce-hull-plots/ultimate_r_cheatsheet_ggplot2.jpg" style='max-width:80%;display:block;margin:auto;'>

<br>

Now you're ready to quickly reference the `ggplot2` cheat sheet. This shows you the core plotting functions available in the ggplot library.

![ggplot2 cheat sheet](/assets/2021-07-27-ggforce-hull-plots/ggplot2_cheatsheet.jpg)

Onto the tutorial.

## Load the Libraries and Data

First, run this code to:

1. **Load Libraries:** Load `ggforce`, `tidyquant`, and `tidyverse`.
2. **Import Data:** We're using the `mpg` dataset that comes with `ggplot2`.

<img src="/assets/2021-07-27-ggforce-hull-plots/00_libraries.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>
<a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

Here's the `mpg` dataset. We'll focus on "hwy" (fuel economy in Miles Per Gallon), "displ" (engine displacement volume in liters), and "cyl" (number of engine cylinders).

![MPG Dataset](/assets/2021-07-27-ggforce-hull-plots/00_data.jpg)

## hull plot: Using ggplot

Next, we'll make a hull plot that highlights the Vehicle Fuel Economy (MPG) for Engine Size (Number of Cylinders and Engine Displacement). It helps if you have `ggplot2` visualization experience. If you are interested in learning `ggplot2` in-depth, check out our [R for Business Analysis Course (DS4B 101-R)](https://university.business-science.io/p/ds4b-101-r-business-analysis-r) that contains over 30-hours of video lessons on learning R for data analysis.

### Step 1: Make the Base Scatter Plot

The first step is to make the scatter plot using `ggplot2`. We:

1. **Prep the Data:** Using `mutate()` to add a descriptive Engine Size column that will display the Number of Cylinders.
2. **Map the columns:** Using `ggplot()`, we map the displ and hwy column.
3. **Make the scatter points**: Using `geom_point()`, we add scatter plot points to our base plot. Refer to the [Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html) and ggplot2 "CS" for more geoms.

<img src="/assets/2021-07-27-ggforce-hull-plots/01_scatterplot.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>
<a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

This produces our base plot, which is a scatter plot of displacement vs highway fuel economy.

<img src="/assets/2021-07-27-ggforce-hull-plots/01_plot_output.jpg" style='max-width:100%;margin-bottom:5px;'>

### Step 2: Add the Hull Plot with `geom_mark_hull()`

Next, we add our hull plot geometry layer using `ggforce::geom_mark_hull()`. This produces the hull plot shaded regions indicating the groups. We map the descriptive engine size column to the `fill` and `label` aesthetics. We adjust the `concavity` to smooth out the concavity.

<img src="/assets/2021-07-27-ggforce-hull-plots/02_hull_plot_code.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>
<a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

And here's the output. We can see that the hull plot shows the cylinder class membership for the vehicles scatter points.

![Basic Hull Plot](/assets/2021-07-27-ggforce-hull-plots/02_plot_output.jpg)

### Step 3: Make the plot look professional

It's a good idea to spruce up our plot, especially if we are going to present to business stakeholders in a presentation or report. We'll leverage `tidyquant` and `ggplot` for theme customization. Refer to the [Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html) and `ggplot2` documentation for more customizations.

<img src="/assets/2021-07-27-ggforce-hull-plots/03_ggplot_theme_customization.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>
<a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

And here's the output. We have our final plot that tells the story of how highway fuel economy varies with the vehicle's number of cylinders and engine displacement volume.

![Hull Plot](/assets/2021-07-27-ggforce-hull-plots/hull_plot.jpg)

# Conclusions

You learned how to make hull plots with `ggforce`. **But, there's a lot more to becoming a data scientist.**

If you'd like to have an exciting career making 6-figures as a data scientist (or over $150,000+ as a senior data scientist), then read on.👇

{% include cta_struggles_rtrack.md %}
