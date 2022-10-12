---
layout: post
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
title: How I analyze 100+ ggplots at once
date: 2022-03-30T10:00:00.000-04:00
excerpt: Big data? Lot's of time series? Traditionally you'd use ggplot facets. But
  that only works for a few datasets. Enter trelliscopejs. It's a game changer!
image: "/assets/trelliscopejs_thumb.jpg"
image_preview: "/assets/trelliscopejs_thumb.jpg"

---
**Visualizing big data is next to impossible.** As soon as I have 12 plots, that's where my ability to use native ggplot suffers. That is until I found `trelliscopejs`.

`trelliscopejs` is like `ggplot2` faceting on steroids. This may seem crazy, but the benefit is that when you have 20, 30, or even 100+ plots you need to analyze, `trelliscopejs` is the solution!

And, I'm going to get you up and running with `trelliscopejs` in **under 5-minutes:**

1. I'll teach you how to make 20+ ggplot facets using trelliscopejs
2. **BONUS: I'll not only show you how to make static ggplots, _but_ I'll even show you how to use the plotly integration for interactivity**

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<p>Here are the links to get set up. 👇</p>

<ul> <li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li> <li><a href="https://youtu.be/x6GL9Y3t2Uo">YouTube Tutorial</a></li> </ul>

# Video Tutorial

Learn how to use the `trelliscopejs` package in my 5-minute YouTube video tutorial.

<iframe width="100%" height="450" src="https://www.youtube.com/embed/x6GL9Y3t2Uo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# What you make in this R-Tip

By the end of this tutorial, you'll make the **20+ ggplots** for exposing insights in your big data.

![](/assets/trelliscopejs_thumb.jpg)

<p class="text-center date">Analyzing 20+ ggplots (made with <code>trelliscopejs</code>)</p>

# Thank You Developers.

Before we move on, please recognize that `trelliscopejs` was developed by [Ryan Hafen](https://twitter.com/hafenstats) (follow Ryan on Twitter). Thank you for everything you do!

Also, the full documentation for trelliscopejs can be [accessed here](https://hafen.github.io/trelliscopejs/).

# `trelliscopejs` Tutorial

Let's dive into using `trelliscopejs` so we can **analyze 100+ ggplots**.

## Step 1: Load the Libraries and Data

First, run this code to:

1. **Load Libraries:** Load `tidyverse` , `plotly`, and `trelliscopejs`.
2. **Import Data:** We're using the `mpg` dataset that comes with `ggplot2`.

![](/assets/00_trelliscope_libraries.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

Our data looks like this. We want to understand how Highway Fuel Economy (`hwy`) varies with `displ` (engine size) but we want to see if there is any differences between `manufacturers`.

![](/assets/01_trelliscope_data.jpg)

<p class='text-center date'>The mpg dataset</p>

## Step 2: Make a ggplot

Next, let's make a basic ggplot of fuel economy vs engine displacement.

![](/assets/02_trelliscope_ggplot.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

This produces the following plot of `hwy` vs `displ`.

![](/assets/02_trelliscope_ggplot_2.jpg)

<p class='text-center date'>Our basic ggplot</p>

## Step 3: Apply the trelliscopejs magic!

Listen, I'm telling you this next part is straight-up magic!

Seriously, I now use this simple trick to analyze 100+ ggplots at once.

* Use the `facet_trelliscope()` function
* This replaces a `facet_wrap()` or `facetgrid()`
* And makes 100's of ggplots (as many as your heart desires)
* In this case, we facet by `manufacturer` and end up with 15 plots to analyze.

![](/assets/03_trelliscopejs_facets.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

The result is the trelliscope plot with 15 ggplots by manufacturer.

![](/assets/03_trelliscopejs_facets_2.jpg)

<p class='text-center date'>We've transformed our ggplot into a faceted trelliscope with 15 plots by manufacturer</p>

## Step 4: Customize the Trelliscopejs

This is really cool!! You can add additional labels like max/min displacement by plot.

![](/assets/04_trelliscope_labels-1.jpg)

<p class='text-center date'>Customize the trelliscope with labels & filters</p>

# BONUS: Make your trelliscope interactive!!!

If you thought you were done...

We're just gettin' started!

THIS is the magic of trelliscope!!

* Add interactivity with the Plotly integration inside of `facet_trelliscope()`.
* Simply add `as_plotly = TRUE`

![](/assets/05_trelliscope_bonus_code.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

Check out the interactivity from plotly!!

![](/assets/05_trelliscope_bonus.gif)

<p class='text-center date'>Interactivity with the plotly-trelliscopejs integration</p>

# Conclusions

You learned how to use the `trelliscopejs` library to not only create 100's of static ggplots _but_ create 100's of interactive plotly plots. Great work! **But, there's a lot more to becoming a data scientist.**

If you'd like to become a data scientist (and have an awesome career, improve your quality of life, enjoy your job, and all the fun that comes along), then I can help with that.

## My Struggles with Learning Data Science

It took me a long time to learn how to apply data science to business. And I made a lot of mistakes as I fumbled through learning R.

I specifically had a tough time navigating the ever-increasing landscape of tools and packages, trying to pick between R and Python, and getting lost along the way.

**If you feel like this, you're not alone.**

In fact, that's the driving reason that I created Business Science and Business Science University ([You can read about my personal journey here](https://www.business-science.io/business/2019/07/22/how-i-started-my-data-science-business.html)).

What I found out is that:

1. **Data Science does not have to be difficult, it just has to be taught from a business perspective**
2. **Anyone can learn data science fast provided they are motivated.**

# How I can help

If you are interested in learning R and the ecosystem of tools at a deeper level, then I have a streamlined program that will **get you past your struggles** and improve your career in the process.

It's my [5-Course R-Track System](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series/). It's an integrated system containing 5 courses that work together on a learning path. Through 8 projects, you learn everything you need to help your organization: from data science foundations, to advanced machine learning, to web applications and deployment.

The result is that **you break through previous struggles**, learning from my experience & our community of 2653 data scientists that are ready to help you succeed.

Ready to take the next step? Then [let's get started.](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series/)

![](/assets/rtrack_what_theyre_doing_2.jpg)

<p style="font-size: 36px;text-align: center;"><a href="https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series">Join My 5-Course R-Track Program<br>(Become A 6-Figure Data Scientist)</a></p>