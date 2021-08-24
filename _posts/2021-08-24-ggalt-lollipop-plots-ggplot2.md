---
layout: post
title: "ggalt: Make a Lollipop Plot to Compare Categories in ggplot2"
date:   2021-08-24 08:12:00
excerpt: "ggalt is a ggplot2 extension that adds many new ggplot geometries. In this tutorial, we'll learn how to make lollipop plots for comparing categories within our data using geom_lollipop()."
author: "Matt Dancho"
categories: [R]
tags: [R-Bloggers, Learn-R, ggplot, ggplot2, ggalt]
image: "/2021-08-24-lollipop/lollipop_plot.jpg"
image_preview: "/2021-08-24-lollipop/lollipop_plot.jpg"
---

__A Lollipop Plot__ shows the relationship between categories using a dot and a line that connects to a baseline (similar to a Bar Plot). In this short tutorial, we use `ggalt` to create a Lollipop Plot with the `geom_lollipop()` function.  

## R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://mailchi.mp/business-science/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<p>Here are the links to get set up. 👇</p>

<ul>
    <li><a href="https://mailchi.mp/business-science/r-tips-newsletter" target='_blank'>Get the Code</a></li>
    <li><a href="https://youtu.be/OhTEJuWyNyk" target='_blank'>YouTube Tutorial</a></li> 
</ul>


# Video Tutorial<br><small>Follow along with our Full YouTube Video Tutorial.</small>

Learn how to use `ggalt` in our 6-minute YouTube video tutorial. 

<figure class="text-center">
    <a href="https://youtu.be/OhTEJuWyNyk" target="_blank">
    <img src="/assets/2021-08-24-lollipop/000_lollipop_thumb.jpg" style='max-width:100%;'> </a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>



# What is a Lollipop Plot?

__The Lollipop Plot__ is a visualization that shows the comparsion between numberic data and categories in our data. It gets the name because of the [Lollipop shape](https://en.wikipedia.org/wiki/Lollipop). It's a great way to show grouped summaries using the classic `dplyr` combo of `group_by()` and `summarize()`.

<img src="/assets/2021-08-24-lollipop/lollipop_plot.jpg" alt = "Lollipop Plot">

<p class="date text-center">Lollipop Plot (We'll make in this tutorial)</p>

We'll go through a short tutorial to get you up and running with `ggalt` to make a lollipop plot. 

# Lollipop plots [`ggalt` Tutorial]

This tutorial showcases the awesome power of `ggalt` for visualizing lollipop plots. 

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

Here's the `mpg` dataset. We'll focus on "hwy" (fuel economy in Miles Per Gallon) and "class" (the standardized vehicle category the vehicle model falls into).

![MPG Dataset](/assets/2021-08-12-ggalt-dumbbell-plots/00_data.jpg)

## lollipop plot: Using ggplot

Next, we'll make a lollipop plot that highlights the difference in average highway fuel economy (MPG) by class of vehicle. It helps if you have `dplyr` (data wrangling) and `ggplot2` (data visualization) experience. 

__Pro-Tip 1:__ [Use the R cheat sheet](https://www.business-science.io/r-cheatsheet.html) to refer to `ggplot` and `dplyr` functions. 

__Pro-Tip 2__: If you need to master R, then I'll talk about my [5-Course R-Track](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series) at the end of the tutorial. It's a way to up-skill yourself with the data science skills that organizations demand.

### Step 1: Prepare the Data

To make a Lollipop Plot with `geom_lollipop()`, we need to first get the data into the correct format for the visualization. We'll use the combination of:

- `group_by()`: To group our dataset by vehicle class

- `summarize()`: To calculate the average highway fuel economy by vehicle class

<img src="/assets/2021-08-24-lollipop/01_data_wrangling_dplyr.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'> 
  <a href='https://mailchi.mp/business-science/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>


The resulting data is now formatted correctly for the lollipop Plot. 

![Data Wranlging - Pivoted for lollipop Plot](/assets/2021-08-24-lollipop/01_output.jpg)

Data wrangling can be a bit tricky. If you need to learn data wrangling with `dplyr` (a critical skill), I teach `dplyr` in our R for Business Analysis Course. It's the first course in the [5-Course R-Track](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series). 

Now we can make the lollipop plot. 

### Step 2: Make the Base lollipop Plot with `geom_lollipop()`


We start by making a basic lollipop plot with `geom_lollipop()`. The trick is to use `horizontal = TRUE` to format horizontally and to adjust the `point.colour` and `point.size` to our liking. 

<img src="/assets/2021-08-24-lollipop/02_ggplot_lollipop.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'> 
  <a href='https://mailchi.mp/business-science/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

This produces our base plot, which is a lollipop plot of highway fuel economy for each vehicle class.

![Lollipo Plot - Basic](/assets/2021-08-24-lollipop/02_output.jpg)

Data Visualization is a key skill that beginners often struggle with. If you need to learn `ggplot2` in-depth, check out our [R for Business Analysis Course (DS4B 101-R)](https://university.business-science.io/p/ds4b-101-r-business-analysis-r) that contains over 30-hours of video lessons on learning R for data analysis. It's the first course in the [5-Course R-Track](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series). 

Now, we can make the plot awesome with by adding labels and customizing the theme. 

### Step 3: Customize the `ggplot` with labels and theme

It's a good idea to customize our `ggplot`, especially if we are going to present to business stakeholders in a presentation or report (you'll likely want to match your organization's colors). We'll leverage:

- `geom_label()`: I like to add labels to Lollipop Plots that describe key information. This is my personal preference, but I find that it helps business people focus on the important details. 

- __Theme Customization:__ I use my `tidyquant` package for theme customization to match Business Science colors. You may need to adjust for your organization's theme. Doing this takes your plots from looking amateur to professional.  

Refer to the [Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html) and my courses for advanced customization beyond this tutorial.

<img src="/assets/2021-08-24-lollipop/03_adjust_theme.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'> 
  <a href='https://mailchi.mp/business-science/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

And here's the final Lollipop Plot that tells the story of how highway fuel economy varies with the vehicle class. Compact, Subcompact, and Midsize are the most fuel efficient while SUV and Pickup are the least. 

![Lollipop Plot - Final](/assets/2021-08-24-lollipop/03_plot_output.jpg)

Awesome work! The lollipop plot looks amazing. 

# Summary

We learned how to make lollipop plots with `ggalt`. But, there's a lot more to visualization. __And, if you are just starting out, then this tutorial was probably difficult. That's OK because I have a solution.__ 

If you'd like to learn `ggplot2`, data visualizations, data wrangling, and data science for business with R, then read on. 👇



# My Struggles with Learning Data Science

It took me a long time to learn data science. And I made a lot of mistakes as I fumbled through learning R.  I specifically had a tough time navigating the ever increasing landscape of tools and packages, trying to pick between R and Python, and getting lost along the way.

__If you feel like this, you're not alone.__

The good news is that after years of learning, I was able to become a highly-rated business consultant working with Fortune 500 clients, I even helped others in the community by developing open source software that has been downloaded over 1,000,000 times, and I found a real passion for coding. 

In fact, that's the driving reason that I created Business Science to help people like you and me that are struggling to learn data science for business ([You can read about my personal journey here](https://www.business-science.io/business/2019/07/22/how-i-started-my-data-science-business.html)).

What I found out is that:

1. __Data Science does not have to be difficult, it just has to be taught smartly__

2. __Anyone can learn data science fast provided they are motivated.__

# How I can help

If you are interested in learning R and the ecosystem of tools at a deeper level, then I have a streamlined program that will __get you past your struggles__ and improve your career in the process. 

It's called the [5-Course R-Track System](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series/). It's an integrated system containing 5 courses that work together on a learning path. Through 5+ projects, you learn everything you need to help your organization: from data science foundations, to advanced machine learning, to web applications and deployment. 

The result is that __you break through previous struggles__, learning from my experience & our community of 2000+ data scientists that are ready to help you succeed. 

__Ready to take the next step?__ Then [let's get started.](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series/)



<!-- This is markdown code. It wont look formatted in your browser, 
    but will be fine when published. to the website -->

<br><br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}


