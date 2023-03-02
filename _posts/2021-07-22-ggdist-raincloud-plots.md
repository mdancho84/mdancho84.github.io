---
layout: post
title: 'ggdist: Make a Raincloud Plot to Visualize Distribution in ggplot2'
date: 2021-07-22T08:12:00.000+00:00
excerpt: The ggdist package is a ggplot2 extension that is made for visualizing distributions
  and uncertainty. We'll show see how ggdist can be used to make a raincloud plot.
author: Matt Dancho
categories:
- R
tags:
- R-Bloggers
- Learn-R
- ggplot
- ggplot2
- ggdist
image: "/assets/2021-07-22-ggdist-raincloud-plots/ggdist_raincloud_thumb.jpg"
image_preview: "/assets/2021-07-22-ggdist-raincloud-plots/ggdist_raincloud_thumb.jpg"

---
One of the most important things a data scientist can do that will uncover business insights is to **Visualize distributions.**

And, this is something I had a hard time with. But I recently found an easy solution.

I discovered the `ggdist` package that made visualizing distributions a breeze. It's a `ggplot2` extension that is made for visualizing distributions and uncertainty. Here's what you'll discover in the next 5 minutes:

1. Discover how `ggdist` can be used to make a **raincloud plot.**
2. **BONUS: Get 5 plotting tips that even beginners can implement to make professional raincloud plots**

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<p>Here are the links to get set up. 👇</p>

<ul>
<li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li>
<li><a href="https://youtu.be/nz2gHnaqX2w">YouTube Tutorial</a></li>
</ul>

# This Tutorial Is Available In Video

I have a companion video tutorial that shows even more secrets (plus mistakes to avoid).  And, I'm finding that a lot of my students prefer the dialogue that goes along with coding. So check out this video to see me running the code in this tutorial. 👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/nz2gHnaqX2w" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# What is a Raincloud Plot?

**The Raincloud Plot** is a visualization that produces a half-density to a distribution plot. It gets the name because the density plot is in the shape of a "raincloud". The raincloud plot enhances the traditional box plot by highlighting multiple modalities (an indicator that groups may exist). The boxplot does not show where densities are clustered, but the raincloud plot does!

<img src="/assets/2021-07-22-ggdist-raincloud-plots/raincloud_plot.jpg" style='max-width:80%'>

<p class="date text-center">Raincloud Plot (We'll make in this tutorial)</p>

We'll go through a short tutorial to get you up and running with `ggdist` to make a raincloud plot.

# Raincloud Plots with `ggdist` \[Tutorial\]

This tutorial showcases the awesome power of `ggdist` for visualizing distributions.

## Tutorial Credits

This tutorial wouldn't be possible without another tutorial, [Visualizing Distributions with Raincloud Plots](https://www.cedricscherer.com/2021/06/06/visualizing-distributions-with-raincloud-plots-with-ggplot2/) by Cédric Scherer. Cédric truly a ggplot2 master. Follow [Cédric Scherer](https://twitter.com/CedScherer) on Twitter to learn more about his excellent visualization work.

## Ever forget which R package to use?

Ever forget which R package to use? Or which `tidyverse` function to apply? **Me too.** 

That's why I made my [ultimate R cheat sheet](https://www.business-science.io/r-cheatsheet.html). Here's how to use it for `ggplot2` visualizations and plotting. 

**Step 1:** [Download the Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html). 

**Step 2:** Then **Click the "CS" hyperlink** to "ggplot2".

<a href="https://www.business-science.io/r-cheatsheet.html"> <img src="/assets/2021-07-22-ggdist-raincloud-plots/ultimate_r_cheatsheet_ggplot2.jpg" style='max-width:80%;display:block;margin:auto;'>

<br>

**Step 3:** Reference the `ggplot2` cheat sheet. This shows you the core plotting functions available in the ggplot library. Now you can use these any time you need to make a visualization with `ggplot2`.

![ggplot2 cheat sheet](/assets/2021-07-22-ggdist-raincloud-plots/ggplot2_cheatsheet.jpg)

Pretty handy. Now let's get going...

## Load the Libraries and Data

First, run this code to:

1. **Load Libraries:** Load `ggdist`, `tidyquant`, and `tidyverse`.
2. **Import Data:** We're using the `mpg` dataset that comes with `ggplot2`.

<img src="/assets/2021-07-22-ggdist-raincloud-plots/00_libraries.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>
<a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

# Raincloud Plot: Using ggplot2 + ggdist

Next, we'll make a Raincloud plot that highlights the distribution of Vehicle Fuel Economy (MPG) by Engine Size (Number of Cylinders). We'll combine `ggplot2` and `ggdist` through 5 plotting tips that even beginners can implement. 

## Tip 1: Make the ggplot2 canvas

The first step is to make the `ggplot2` canvas. We:

1. **Prep the Data:** Using `filter()` to isolate the most common (frequent) vehicle engine sizes
2. **Map the columns:** Using `ggplot()`, we map the cyl and hwy column. We also make a transformation to convert a numeric cyl column to a discrete cyl column with `factor()`.

<img src="/assets/2021-07-22-ggdist-raincloud-plots/01_ggplot_canvas.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>
<a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

This produces a blank plot, which is the first layer. You can see that the x-axis is labeled "factor(cyl)" and the y-axis is "hwy" indicating the data has been mapped to the visualization.

<img src="/assets/2021-07-22-ggdist-raincloud-plots/01_plot_output.jpg" style='max-width:100%;margin-bottom:5px;'>

## Tip 2: Add the Rainclouds with `stat_halfeye())`

Next, we add our first geometry layer using `ggdist::stat_halfeye()`. This produces a Half Eye visualization, which is contains a half-density and a slab-interval. We remove the slab interval by setting `.width = 0` and `point_colour = NA`. The half-density remains.

<img src="/assets/2021-07-22-ggdist-raincloud-plots/02_stat_halfeye.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>
<a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

And here's the output. We can see the half-denisty distributions for fuel economy (hwy) by engine size (cyl).

![Stat Halfeye](/assets/2021-07-22-ggdist-raincloud-plots/02_plot_output.jpg)

## Tip 3: Add the Boxplot with `geom_boxplot()`

Next, add the second geometry layer using `ggplot2::geom_boxplot()`. This produces a narrow boxplot. We reduce the `width` and adjust the opacity.

<img src="/assets/2021-07-22-ggdist-raincloud-plots/03_boxplot.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>
<a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

And here's the output. We now have a boxplot and half-density. We can see how the distributions vary compared to the median and inner-quartile range.

![Boxplot](/assets/2021-07-22-ggdist-raincloud-plots/03_plot_output.jpg)

## Tip 4: Add the Dot Plots with `stat_dots()`

Next, add the third geometry layer using `ggdist::stat_dots()`. This produces a half-dotplot, which is similar to a histogram that indicates the number of samples (number of dots) in each bin. We select `side = "left"` to indicate we want it on the left-hand side.

<img src="/assets/2021-07-22-ggdist-raincloud-plots/04_dotplot.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>
<a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

And here's the output. We now have the three main geometries completed.

![Boxplot](/assets/2021-07-22-ggdist-raincloud-plots/04_plot_output.jpg)

## Tip 5: Making the plot look professional

We can clean up our plot with a professional-looking theme using `tidyquant::theme_tq()`. We'll also rotate it with `coord_flip()` to give it the raincloud appearance.

<img src="/assets/2021-07-22-ggdist-raincloud-plots/05_adjust_theme.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>
<a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

We've just finalized our plot. We can see clearly that the distribution of the 6-cylinder is bi-modal, something you can't tell with an ordinary boxplot. We should investigate why there are so many dots in 6-cylinder with low highway-fuel economy. We'll save that for another [R-Tip](https://learn.business-science.io/r-tips-newsletter).

![Boxplot](/assets/2021-07-22-ggdist-raincloud-plots/05_plot_output.jpg)

# Conclusions

You just learned how to make Raincloud Plots with `ggdist`. **But, there's a lot more to visualization.**

It's critical to **learn how to visualize** with `ggplot2`, which is the premier framework for data visualization in R.

If you'd like to learn `ggplot2`, data visualizations, and data science for business with R, then read on. 👇

{% include cta_struggles_rtrack.md %}
