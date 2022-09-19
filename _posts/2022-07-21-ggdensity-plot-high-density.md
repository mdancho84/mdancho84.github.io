---
layout: post
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
title: 'ggdensity: A new R package for plotting high-density regions'
date: 2022-07-21T06:00:00.000-04:00
excerpt: 'As data scientists, it can be downright impossible to drill into messy data.
  Fortunately, there''s a new R package that helps us focus on a "high-density region".
  It''s called ggdensity. '
image: "/assets/ggdensity_thumb_2.jpg"
image_preview: "/assets/ggdensity_thumb_2.jpg"

---
**As data scientists, it can be downright impossible to drill into messy data.** Fortunately, there's a new R package that helps us focus on a _"high-density region"_, which is simply an area in a scatter plot defined by a high percentage of the data points. It's called `ggdensity`.

![](/assets/ggdensity_thumb_3.jpg)

<p class="text-center date">High Density Regions on a Scatter Plot</p>

In this R-tip, I'm going to show you how to hone in on high-density regions **under 5-minutes:**

1. Learn how to **make high-density scatter plots** with `ggdensity`
2. **BONUS:** Make faceted density plots to drill into over-plotted high-density region data

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> <li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li> <li><a href="https://youtu.be/jniFFhY41Mk">YouTube Tutorial</a></li> </ul>

# Video Tutorial

I have a companion video tutorial that shows even more secrets (plus mistakes to avoid).

<iframe width="100%" height="450" src="https://www.youtube.com/embed/jniFFhY41Mk" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# What you make in this R-Tip

By the end of this tutorial, you'll use of high density regions to make insights from groups within your data. For example, here we can see where each  Class of Vehicle compares in terms of engine displacement (displ) and highway fuel economy (hwy), answering questions like:

* Is vehicle class a good way to describe vehicle clusters?
* Which vehicle classes have the greatest variation in highway fuel economy versus displacement?
* Which vehicle classes have the highest / lowest highway fuel economy?

Do you see how powerful `ggdensity` is?

![](/assets/ggdensity_facet_hdr_2.jpg)

<p class="text-center date">Uncover insights with ggdensity</p>

# Thank You Developers.

Before we move on, please recognize that `ggdensity` was developed by [James Otto](https://github.com/jamesotto852), Doctoral Candidate at the Department of Statistical Science, Baylor University. Thank you for everything you do! Also, the full documentation for `ggdensity` can be [accessed here](https://jamesotto852.github.io/ggdensity/).

## Before we get started, get the R Cheat Sheet

`ggdensity` is great for extending ggplot2 with advanced features. But, you'll need to learn `ggplot2` to take full advantage. For these topics, I'll use the [Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html) to refer to `ggplot2` code in my workflow.

### Quick Example:

[Download the Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html). Then **Click the "CS" hyperlink** to "ggplot2".

<a href="https://www.business-science.io/r-cheatsheet.html"> <img src="/assets/2021-08-12-ggalt-dumbbell-plots/ultimate_r_cheatsheet_ggplot2.jpg" style='max-width:80%;display:block;margin:auto;'>

<br>

Now you're ready to quickly reference the `ggplot2` cheat sheet. This shows you the core plotting functions available in the ggplot library.

![ggplot2 cheat sheet](/assets/2021-08-12-ggalt-dumbbell-plots/ggplot2_cheatsheet.jpg)

Onto the tutorial.

# `ggdensity` Tutorial

Let's dive into using `ggdensity` so we can **show you how to make high-density regions on your scatter plots**.

**Important:** All of the data and code shown can be accessed through our Business Science [**R-Tips Project**](https://learn.business-science.io/r-tips-newsletter).

Plus I have a **surprise** at the end (for everyone)!

## 💡 Step 1: Load the Libraries and Data

### First, run this code to **load the R libraries:**

Load `tidyverse` , `tidyquant`, and `ggdensity`.

![](/assets/ggdensity_01_libraries_2.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

### Next, run this code to **pull in the data**.

We'll read in the `mpg` data set that was comes with ggplot2.

![](/assets/ggdensity_02_data.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the Data.</a> </p>

We want to understand how highway fuel economy relates to engine size (displacement) and to see if there are clusters by vehicle class.

## 💡 Step 2: Make a basic ggplot

Next, make a basic `ggplot` using the following code. This creates a scatter plot with the colors that change by vehicle class. I won't go into all of the mechanics, but you can [download my R cheat sheet](https://www.business-science.io/r-cheatsheet.html) to learn more about ggplot and the grammar of graphics.

![](/assets/ggdensity_03_ggplot_basic.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

Here's what the plot looks like. **Do you see how it's really tough to pull out the clusters in there?** Each of the points overlap which makes understanding the group structure in the data very tough.

![](/assets/ggdensity_03_ggplot_basic_scatter.jpg)

## Step 3: Add High Density Regions

Ok, now that we have a basic scatter plot, we can make a quick alteration by adding high density regions that capture 90% and 50% of the data. We use `geom_hdr(probs = c(0.9, 0.5, alpha = 0.35)` to accomplish the next plot.

![](/assets/ggdensity_04_ggplot_hdr.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

Let's see what we have here.

![](/assets/ggdensity_04_ggplot_hdr_2_scatter.jpg)

We can now see where the clusters have the highest density. But there's still a problem called **"overplotting"**, which is when too many graphics get plot on top of each other.

# 💡 BONUS: Overplotting solved!

**Here's the problem we're facing: overplotting.** We simply have too many groups that are too close together. Let's see how to fix this.

The fix is pretty simple. Just use facetting from ggplot2.

![](/assets/ggdensity_05_ggplot_facet.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

And, voila! We can easily inspect the clusters by vehicle class.

![](/assets/ggdensity_05_ggplot_facet_plot.jpg)

# 💡 Conclusions

You learned how to use the `ggdensity` library to create high-density regions that help us understand the clusters within our data. Great work! **But, there's a lot more to becoming a Business Scientist.**

If you'd like to become a Business Scientist (and have an awesome career, improve your quality of life, enjoy your job, and all the fun that comes along), then I can help with that.

## Step 1: Watch My Free 40-Minute Webinar

Learning data science on your own is hard. I know because **IT TOOK ME 5-YEARS to feel confident.**

AND, I don't want it to take that long for you.

So, I put together a [**FREE 40-minute webinar (a masterclass)**](https://learn.business-science.io/free-rtrack-masterclass-signup) that provides a roadmap for what worked for me.

![](/assets/free_rtrack_masterclass.jpg)

<p style="font-size: 36px;text-align: center;"><a href="https://learn.business-science.io/free-rtrack-masterclass-signup">Join My FREE 40-Minute R Webinar <br>(The Roadmap to a 6-Figure Data Scientist Career)</a></p>

Literally 5-years of learning, consolidated into 40-minutes. It's jammed packed with value. I wish I saw this when I was starting... It would have made a huge difference.

# Step 2: Take Control Of Your Career

For my action-takers, if you are ready to become a Business Scientist, then read on.

If you need take your skills to the next level and DON'T want to wait 5-years to learn data science for business, AND you want a career you love that earns you $100,000+ salary (plus bonuses), AND you'd like someone to help guide you how to do this in UNDER  6-MONTHS or less....

## **Then I can help with that too.**

I have a program that has helped over 3,000 students become data scientists in business with the R programming language. [Don't believe me? Read these testimonials.](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series)

My students have gotten:

* 6-Figure Data Science Jobs ($100,000+)
* Senior VP of Analytics ($200,000+)
* Lead Data Scientist Jobs ($175,000+)
* Raises and Career Promotions of 25% to 50%

All by learning data science for business with R. Get ready. The ride is wild. And the destination is AMAZING!

![](/assets/rtrack_what_theyre_doing_3.jpg)

<p style="font-size: 36px;text-align: center;"><a href="https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series">Join My 5-Course R-Track Program<br>(Become A 6-Figure Data Scientist)</a></p>

**P.S. 40% of my students are getting their work to pay for education.** [**See how to get your company to reimburse your for courses here. **](https://www.business-science.io/business/2020/09/07/course-benefits-manager-negotiation.html)