---
layout: post
title: "ggalt: Make a Dumbbell Plot to Visualize Change in ggplot2"
date:   2021-08-12 06:12:00
excerpt: "ggalt is a ggplot2 extension that adds many new ggplot geometries. In this tutorial, we'll learn how to make dumbbell plots for visualizing change within our data using geom_dumbbell()."
author: "Matt Dancho"
categories: [R]
tags: [R-Bloggers, Learn-R, ggplot, ggplot2, ggalt]
image: "/2021-08-12-ggalt-dumbbell-plots/000-ggalt-dumbbell-thumb.jpg"
image_preview: "/2021-08-12-ggalt-dumbbell-plots/000-ggalt-dumbbell-thumb.jpg"
---

`ggalt` is a `ggplot2` extension that adds many new ggplot geometries. In this tutorial, we'll learn how to make __dumbbell plots for visualizing change__ within our data using `geom_dumbbell()`. 

## R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://mailchi.mp/business-science/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<p>Here are the links to get set up. 👇</p>

<ul>
    <li><a href="https://mailchi.mp/business-science/r-tips-newsletter" target='_blank'>Get the Code</a></li>
    <li><a href="https://youtu.be/USNOB-5ou8k" target='_blank'>YouTube Tutorial</a></li> 
</ul>


# Video Tutorial<br><small>Follow along with our Full YouTube Video Tutorial.</small>

Learn how to use `ggalt` in our 6-minute YouTube video tutorial. 

<figure class="text-center">
    <a href="https://youtu.be/USNOB-5ou8k" target="_blank">
    <img src="/assets/2021-08-12-ggalt-dumbbell-plots/000-ggalt-dumbbell-thumb.jpg" style='max-width:100%;'> </a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>



# What is a Dumbbell Plot?

__The Dumbbell Plot__ is a visualization that shows change between two points in our data. It gets the name because of the [Dumbbell shape](https://en.wikipedia.org/wiki/Dumbbell). It's a great way to show changing data between two points (think start and finish). Here we can see the improvement in vehicle fuel economy over time (between 1999 and 2008). The Dumbbell shows the starting point (MPG in 1999) and the ending point (MPG in 2008).

<img src="/assets/2021-08-12-ggalt-dumbbell-plots/dumbbell_plot.jpg" alt = "Dumbbell Plot">

<p class="date text-center">Dumbbell Plot (We'll make in this tutorial)</p>

We'll go through a short tutorial to get you up and running with `ggalt` to make a dumbbell plot. 

# Dumbbell plots [`ggalt` Tutorial]

This tutorial showcases the awesome power of `ggalt` for visualizing dumbbell plots. 

## R Package Author Credits

This tutorial wouldn't be possible without the excellent work of [Bob Rudis](https://twitter.com/hrbrmstr), creator of `ggalt`. Check out the [ggalt package here](https://yonicd.github.io/ggalt/index.html).

## Before we get started, get the R Cheat Sheet

`ggalt` is great for extending ggplot2 with advanced features. But, you'll need to learn `ggplot2` to take full advantage. For these topics, I'll use the [Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html) to refer to `ggplot2` code in my workflow.

### Quick Example:

[Download the Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html). Then __Click the "CS" hyperlink__ to "ggplot2".

<a href="https://www.business-science.io/r-cheatsheet.html"> <img src="/assets/2021-08-12-ggalt-dumbbell-plots/ultimate_r_cheatsheet_ggplot2.jpg" style='max-width:80%;display:block;margin:auto;'>

<br>

Now you're ready to quickly reference the `ggplot2` cheat sheet. This shows you the core plotting functions available in the ggplot library. 

![ggplot2 cheat sheet](/assets/2021-08-12-ggalt-dumbbell-plots/ggplot2_cheatsheet.jpg)


Onto the tutorial. 

## Load the Libraries and Data

First, run this code to:

1. __Load Libraries:__ Load `ggalt`, `tidyquant`, and `tidyverse`. 
2. __Import Data:__ We're using the `mpg` dataset that comes with `ggplot2`. 

<img src="/assets/2021-08-12-ggalt-dumbbell-plots/00_libraries.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'> 
  <a href='https://mailchi.mp/business-science/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

Here's the `mpg` dataset. We'll focus on "hwy" (fuel economy in Miles Per Gallon), "year" (the vehicle model year), and "model" (the manufacturer's vehicle description).

![MPG Dataset](/assets/2021-08-12-ggalt-dumbbell-plots/00_data.jpg)

## Dumbbell plot: Using ggplot

Next, we'll make a Dumbbell plot that highlights the change in Vehicle Fuel Economy (MPG) for each Model from 1999 to 2008. It helps if you have `dplyr` (data wrangling) and `ggplot2` (data visualization) experience. 

__Pro-Tip 1:__ Definitely [use the cheat sheet](https://www.business-science.io/r-cheatsheet.html) to refer to `ggplot` and `dplyr` functions. 

__Pro-Tip 2__: I have a course that can help. It's called [R for Business Analysis Course](https://university.business-science.io/p/ds4b-101-r-business-analysis-r). Check it out if you want to master `dplyr` and `ggplot2`. 

### Step 1: Prepare the Data

To make a Dumbbell Plot with `geom_dumbbell()`, we need to first get the data into the correct format for the visualization. The trick is to use `pivot_wider()` to pivot the data using an aggregation (`mean()`) to get the vehicle fuel economy (`hwy`) into two columns separated by year (1999 vs 2008).   

<img src="/assets/2021-08-12-ggalt-dumbbell-plots/01_data_wrangling_dplyr.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'> 
  <a href='https://mailchi.mp/business-science/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>


The resulting data is now formatted correctly for the Dumbbell Plot. 

![Data Wranlging - Pivoted for Dumbbell Plot](/assets/2021-08-12-ggalt-dumbbell-plots/01_output.jpg)

Data wrangling can be a bit tricky. If you'd like to learn data wrangling with `dplyr` (a critical skill), I teach `dplyr` in my [R for Business Analysis Course](https://university.business-science.io/p/ds4b-101-r-business-analysis-r).

Now we can make the dumbbell plot. 

### Step 2: Make the Base Dumbbell Plot with `geom_dumbbell()`


We start by making a basic dumbbell plot with `geom_dumbbell()`. The trick is to use `x` and `xend` to specify the start and end points of the dumbbell plot. 

<img src="/assets/2021-08-12-ggalt-dumbbell-plots/02_ggplot_dumbell.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'> 
  <a href='https://mailchi.mp/business-science/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

This produces our base plot, which is a dumbbell plot of highway fuel economy for each vehicle model.

![Dumbell Plot - Basic](/assets/2021-08-12-ggalt-dumbbell-plots/02_output.jpg)

Data Visualization is a key skill that beginners often struggle with. If you are interested in learning `ggplot2` in-depth, check out our [R for Business Analysis Course (DS4B 101-R)](https://university.business-science.io/p/ds4b-101-r-business-analysis-r) that contains over 30-hours of video lessons on learning R for data analysis.

Now, we can make the plot awesome with themes and `tidyquant`. 

### Step 3: Customize the `ggplot` theme

It's a good idea to adjust our plot `theme()`, especially if we are going to present to business stakeholders in a presentation or report (you'll likely want to match your organization's colors). We'll leverage `tidyquant` and `ggplot` for theme customization to match Business Science colors. Refer to the [Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html) and `ggplot2` documentation for more customization.

<img src="/assets/2021-08-12-ggalt-dumbbell-plots/03_adjust_theme.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'> 
  <a href='https://mailchi.mp/business-science/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

And here's the output. We have our final plot that tells the story of how highway fuel economy varies with the vehicle's number of cylinders and engine displacement volume. 

![Dumbell Plot - Final](/assets/2021-08-12-ggalt-dumbbell-plots/03_plot_output.jpg)



# Summary

We learned how to make dumbbell plots with `ggalt`. __But, there's a lot more to visualization.__ 

It's critical to __learn how to visualize__ with `ggplot2`, which is the premier framework for data visualization in R. 

If you'd like to learn `ggplot2`, data visualizations, data wrangling, and data science for business with R, then read on. 👇



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


