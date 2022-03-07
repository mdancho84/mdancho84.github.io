---
layout: post
title: "ggdist: Make a Raincloud Plot to Visualize Distribution in ggplot2"
date:   2021-07-22 08:12:00
excerpt: "The ggdist package is a ggplot2 extension that is made for visualizing distributions and uncertainty. We'll show see how ggdist can be used to make a raincloud plot."
author: "Matt Dancho"
categories: [R]
tags: [R-Bloggers, Learn-R, ggplot, ggplot2, ggdist ]
image: "/assets/2021-07-22-ggdist-raincloud-plots/ggdist_raincloud_thumb.jpg"
image_preview: "/assets/2021-07-22-ggdist-raincloud-plots/ggdist_raincloud_thumb.jpg"
---

The `ggdist` package is a `ggplot2` extension that is made for visualizing distributions and uncertainty. We'll show see how `ggdist` can be used to make a __raincloud plot.__ 

## R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<p>Here are the links to get set up. 👇</p>

<ul>
    <li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li>
    <li><a href="https://youtu.be/nz2gHnaqX2w">YouTube Tutorial</a></li> 
</ul>


# Video Tutorial<br><small>For those that prefer Full YouTube Video Tutorials.</small>

Learn how to use `ggdist` in our 7-minute YouTube video tutorial. 

<figure class="text-center">
    <a href="https://youtu.be/nz2gHnaqX2w" target="_blank">
    <img src="/assets/2021-07-22-ggdist-raincloud-plots/ggdist_raincloud_thumb.jpg" style='max-width:100%;'> </a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>



# What is a Raincloud Plot?

__The Raincloud Plot__ is a visualization that produces a half-density to a distribution plot. It gets the name because the density plot is in the shape of a "raincloud". The raincloud (half-density) plot enhances the traditional box-plot by highlighting multiple modalities (an indicator that groups may exist). The boxplot does not show where densities are clustered, but the raincloud plot does!

<img src="/assets/2021-07-22-ggdist-raincloud-plots/raincloud_plot.jpg" style='max-width:80%'>

<p class="date text-center">Raincloud Plot (We'll make in this tutorial)</p>

We'll go through a short tutorial to get you up and running with `ggdist` to make a raincloud plot. 

# Raincloud Plots with `ggdist` [Tutorial]

This tutorial showcases the awesome power of `ggdist` for visualizing distributions. 

## Tutorial Credits

This tutorial wouldn't be possible without another tutorial, [Visualizing Distributions with Raincloud Plots](https://www.cedricscherer.com/2021/06/06/visualizing-distributions-with-raincloud-plots-with-ggplot2/) by Cédric Scherer. Cédric truly a ggplot2 master. Follow [Cédric Scherer](https://twitter.com/CedScherer) on Twitter to learn more about his excellent visualization work. 

## Before we get started, get the R Cheat Sheet

`ggdist` is great for extending ggplot2 with distributions. But, you'll need to learn `ggplot2` to take full advantage. For these topics, I'll use the [Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html) to refer to `ggplot2` code in my workflow.

### Quick Example:

[Download the Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html). Then __Click the "CS" hyperlink__ to "ggplot2".

<a href="https://www.business-science.io/r-cheatsheet.html"> <img src="/assets/2021-07-22-ggdist-raincloud-plots/ultimate_r_cheatsheet_ggplot2.jpg" style='max-width:80%;display:block;margin:auto;'>

<br>

Now you're ready to quickly reference the `ggplot2` cheat sheet. This shows you the core plotting functions available in the ggplot library. 

![ggplot2 cheat sheet](/assets/2021-07-22-ggdist-raincloud-plots/ggplot2_cheatsheet.jpg)


Onto the tutorial. 

## Load the Libraries and Data

First, run this code to:

1. __Load Libraries:__ Load `ggdist`, `tidyquant`, and `tidyverse`. 
2. __Import Data:__ We're using the `mpg` dataset that comes with `ggplot2`. 

<img src="/assets/2021-07-22-ggdist-raincloud-plots/00_libraries.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'> 
  <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>



## Raincloud Plot: Using ggplot

Next, we'll make a Raincloud plot that highlights the distribution of Vehicle Fuel Economy (MPG) by Engine Size (Number of Cylinders). It helps if you have `ggplot2` visualization experience. If you are interested in learning `ggplot2` in-depth, check out our [R for Business Analysis Course (DS4B 101-R)](https://university.business-science.io/p/ds4b-101-r-business-analysis-r) that contains over 30-hours of video lessons on learning R for data analysis. 

### Make the ggplot2 canvas

The first step is to make the `ggplot2` canvas. We:

1. __Prep the Data:__ Using `filter()` to isolate the most common (frequent) vehicle engine sizes

2. __Map the columns:__ Using `ggplot()`, we map the cyl and hwy column. We also make a transformation to convert a numeric cyl column to a discrete cyl column with `factor()`.


<img src="/assets/2021-07-22-ggdist-raincloud-plots/01_ggplot_canvas.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'> 
  <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

This produces a blank plot, which is the first layer. You can see that the x-axis is labeled "factor(cyl)" and the y-axis is "hwy" indicating the data has been mapped to the visualization.

<img src="/assets/2021-07-22-ggdist-raincloud-plots/01_plot_output.jpg" style='max-width:100%;margin-bottom:5px;'>

### Add the Rainclouds with `stat_halfeye())`

Next, we add our first geometry layer using `ggdist::stat_halfeye()`. This produces a Half Eye visualization, which is contains a half-density and a slab-interval. We remove the slab interval by setting `.width = 0` and `point_colour = NA`. The half-density remains.  

<img src="/assets/2021-07-22-ggdist-raincloud-plots/02_stat_halfeye.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'> 
  <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

And here's the output. We can see the half-denisty distributions for fuel economy (hwy) by engine size (cyl).

![Stat Halfeye](/assets/2021-07-22-ggdist-raincloud-plots/02_plot_output.jpg)

### Add the Boxplot with `geom_boxplot()`

Next, add the second geometry layer using `ggplot2::geom_boxplot()`. This produces a narrow boxplot. We reduce the `width` and adjust the opacity.

<img src="/assets/2021-07-22-ggdist-raincloud-plots/03_boxplot.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'> 
  <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

And here's the output. We now have a boxplot and half-density. We can see how the distributions vary compared to the median and inner-quartile range. 

![Boxplot](/assets/2021-07-22-ggdist-raincloud-plots/03_plot_output.jpg)

### Add the Dot Plots with `stat_dots()`

Next, add the third geometry layer using `ggdist::stat_dots()`. This produces a half-dotplot, which is similar to a histogram that indicates the number of samples (number of dots) in each bin. We select `side = "left"` to indicate we want it on the left-hand side. 

<img src="/assets/2021-07-22-ggdist-raincloud-plots/04_dotplot.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'> 
  <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

And here's the output. We now have the three main geometries completed.  

![Boxplot](/assets/2021-07-22-ggdist-raincloud-plots/04_plot_output.jpg)



### Making the plot look professional

We can clean up our plot with a professional-looking theme using `tidyquant::theme_tq()`. We'll also rotate it with `coord_flip()` to give it the raincloud appearance. 


<img src="/assets/2021-07-22-ggdist-raincloud-plots/05_adjust_theme.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'> 
  <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

We've just finalized our plot. We can see clearly that the distribution of the 6-cylinder is bi-modal, something you can't tell with an ordinary boxplot. We should investigate why there are so many dots in 6-cylinder with low highway-fuel economy. We'll save that for another [R-Tip](https://learn.business-science.io/r-tips-newsletter).   

![Boxplot](/assets/2021-07-22-ggdist-raincloud-plots/05_plot_output.jpg)

# Summary

We learned how to make Raincloud Plots with `ggdist`. __But, there's a lot more to visualiztion.__ 

It's critical to __learn how to visualize__ with `ggplot2`, which is the premier framework for data visualization in R. 

If you'd like to learn `ggplot2`, data visualizations, and data science for business with R, then read on. 👇



# My Struggles with Learning Data Science

It took me a long time to learn data science. And I made a lot of mistakes as I fumbled through learning R.  I specifically had a tough time navigating the ever increasing landscape of tools and packages, trying to pick between R and Python, and getting lost along the way.

__If you feel like this, you're not alone.__

In fact, that's the driving reason that I created Business Science and Business Science University ([You can read about my personal journey here](https://www.business-science.io/business/2019/07/22/how-i-started-my-data-science-business.html)).

What I found out is that:

1. __Data Science does not have to be difficult, it just has to be taught smartly__

2. __Anyone can learn data science fast provided they are motivated.__

# How I can help

If you are interested in learning R and the ecosystem of tools at a deeper level, then I have a streamlined program that will __get you past your struggles__ and improve your career in the process. 

It's called the [5-Course R-Track System](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series/). It's an integrated system containing 5 courses that work together on a learning path. Through 5+ projects, you learn everything you need to help your organization: from data science foundations, to advanced machine learning, to web applications and deployment. 

The result is that __you break through previous struggles__, learning from my experience & our community of 2000+ data scientists that are ready to help you succeed. 

Ready to take the next step? Then [let's get started.](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series/)



<!-- This is markdown code. It wont look formatted in your browser, 
    but will be fine when published. to the website -->

<br><br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}


