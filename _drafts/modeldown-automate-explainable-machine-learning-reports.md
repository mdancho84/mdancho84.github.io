---
layout: post
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
title: 'modelDown: Automate Explainable AI (Machine Learning) in R'
date: 2022-03-30T10:00:00.000-04:00
excerpt: 'Machine learning is great... until you have to explain it. Stakeholders
  are normally non-technical, C-suites that ultimately want to know what the model
  does for the business. And how it helps increase revenue or decrease costs. A new
  R package, modelDown can help. '
image: "/assets/modeldown_report_1.jpg"
image_preview: "/assets/modeldown_report_1.jpg"

---
**Machine learning is great... until you have to explain it.** Stakeholders are normally non-technical, C-suites that ultimately want to know what the model does for the business. And how it helps increase revenue or decrease costs. A new R package, `modelDown` can help.

In this R-tip, I'm going to show you how to unlock MASSIVE BUSINESS VALUE with `modelDown` in **under 5-minutes:**

1. Learn how to **make machine learning models** with `tidymodels`
2. **Unlock the cheat-code** to making ANY machine learning model explainable 
3. **BONUS:** Learn how to read the Automated Explainable AI Report that you create **(so you can explain the ML model to ANYONE!)**

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<p>Here are the links to get set up. 👇</p>

<ul> <li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li> <li><a href="https://youtu.be/x6GL9Y3t2Uo">YouTube Tutorial</a></li> </ul>

# Video Tutorial

I have a companion video tutorial that shows even more secrets (plus mistakes to avoid). 

<iframe width="100%" height="450" src="https://www.youtube.com/embed/pZ3vqzaE7lk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# What you make in this R-Tip

By the end of this tutorial, you'll make a full explainable AI report that helps you explain business insights to executives, managers, non-technical business people, and even your parents (_"Hey Dad, this is why customers are churning!"_). OK, maybe not your parents, but definitely C-suite executives. 

![](/assets/modeldown_report_2.jpg)

<p class="text-center date">Uncover business insights by automating explainable AI</p>

# Thank You Developers.

Before we move on, please recognize that `modelDown` was developed by Przemyslaw Biecek, Magda Tatarynowicz, Kamil Romaszko, and Mateusz Urbanski. Thank you for everything you do!

Also, the full documentation for `modelDown` can be [accessed here](https://modeloriented.github.io/modelDown/).

# `modelDown` Tutorial

Let's dive into using `modelDown` so we can **automate explainable AI**. All of the code shown can be accessed through our [**R-Tips Project**](https://learn.business-science.io/r-tips-newsletter). 

**Warning:** This is an advanced tutorial that will depend on knowledge of `tidymodels`. And, it may be uncomfortable if you are a complete beginner. BUT, I'll explain how you can learn R, tidymodels, and data science from scratch at the end of this tutorial. 

Plus I have a **surprise** at the end!

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

# Recap

We learned how to use the `trelliscopejs` library to not only create 100's of static ggplots _but_ create 100's of interactive plotly plots. Great work! **But, there's a lot more to becoming a data scientist.**

If you'd like to become a data scientist (and have an awesome career, improve your quality of life, enjoy your job, and all the fun that comes along), then I can help with that.

## Step 1: Watch my Free 40-Minute Webinar

Learning data science on your own is hard. I know because **IT TOOK ME 5-YEARS to feel confident.**

AND, I don't want it to take that long for you.

So, I put together a [**FREE 40-minute webinar (a masterclass)**](https://mailchi.mp/business-science/rtrack-master-class-signup-3) that provides a roadmap for what worked for me.

Literally 5-years of learning, consolidated into 40-minutes. It's jammed packed with value. I wish I saw this when I was starting... It would have made a huge difference.

## Step 2: Take action

For my action-takers, if you are ready to take your skills to the next level and DON'T want to wait 5-years to learn data science for business, AND you want a career you love that earns you $100,000+ salary (plus bonuses), and you'd like someone to help you do this in UNDER  6-MONTHS or less....

Then I can help with that too. There's a link in the [**FREE 40-minute webinar**](https://mailchi.mp/business-science/rtrack-master-class-signup-3) for a special price (because you are special!) and taking that action will kickstart your journey with me in your corner.

Get ready. The ride is wild. And the destination is AMAZING!

![](/assets/rtrack_what_they_are_doing.jpeg)

{% include top_rtips.html %}