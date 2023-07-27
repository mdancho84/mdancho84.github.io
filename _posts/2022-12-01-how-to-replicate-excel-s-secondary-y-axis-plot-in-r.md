---
layout: post
title: How to make a plot with two different y-axis in R with ggplot2? (a secret ggplot2
  hack)
date: 2022-12-01 11:00:00 -0500
excerpt: Your company lives off them... Excel files.  Why not automate them & save
  some time? Here's an Excel File you're going to make in this tutorial from R.
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
image: "/assets/dual_axis_r.jpg"
image_preview: "/assets/dual_axis_r.jpg"

---
**I can't tell you how painful it is to be better at something in Excel than in R.** And one of the gripes I still have (10 years after making the switch from Excel to R) is that it's still tough to make dual-axis plots in R.

Guess what, today is the day. I'm going to show you how to make more professional dual-axis plots in R than what I could do in Excel in my prime. Here's what you're learning today:

* How to make a dual-axis plot in R (my secret dual-plotting hack)
* **Bonus: My 3 steps to dual-axis plot customizations (that will make your boss squeal with excitement)**

![](/assets/dual_axis_r.jpg)

<p class="text-center date">Dual Axis Plots</p>

---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> <li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li> <li><a href="https://youtu.be/AQ1h_EAUgZM">YouTube Tutorial</a></li> </ul>

# Video Tutorial

I have a companion video tutorial that shows even more cool automation stuff (plus mistakes to avoid). You can check it out here.

<iframe width="100%" height="450" src="https://www.youtube.com/embed/AQ1h_EAUgZM" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Real Life Example: Fidelity's Inflation Trends Chart

This example is one that Fidelity Investments has been promoting on LinkedIn. It's a classic example of what business and financial people love! The dual axis plot. **Learn how to make them, and increase your business value. It's as simple as that.** 

![Fidelity Investments Dual Axis Plot](/assets/dual_axis_plot_fidelity.jpg)

# When do you need a dual-axis plot?

You might not know when to use a dual-axis plot. I used these all the time for presentations to leadership. Here's when I use dual-axis plots most commonly:

* When I want to **compare two variables** (Like Sales measured in dollars $ and Profit Margin measured in percentage %)
* The two variables are on **different scales** (commonly one might be a percentage and the other is a dollar value or quantity in units)

# How to Make a dual-axis plot in R

Here's the dual-axis plot you're going to make in this tutorial from R. 👇

![Dual Axis Plot in R](/assets/dual_axis_raw.jpg)

<br>

## Before we get started, get the R Cheat Sheet

You'll need to learn `ggplot2` to take full advantage of this tutorial. For these topics, I'll use the [Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html) to refer to `ggplot2` code in my workflow.

### Step 1: [Download the Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html).

<a href="https://www.business-science.io/r-cheatsheet.html"> <img src="/assets/2021-07-27-ggforce-hull-plots/ultimate_r_cheatsheet_ggplot2.jpg" style='max-width:80%;display:block;margin:auto;'>

<br>

### Step 2: Click the "CS" hyperlink to "ggplot2".

![ggplot2 cheat sheet](/assets/2021-07-27-ggforce-hull-plots/ggplot2_cheatsheet.jpg)

Now you're ready to quickly reference the `ggplot2` cheat sheet. This shows you the core plotting functions available in the ggplot library.

Onto the tutorial.

# How to make a dual-axis plot in R? (full tutorial)

Here's how to make your first dual-axis plot in R.

## Get the data in the right format

First, load libraries `tidyverse` and `tidyquant`. Then get the `mpg` data set.

![](/assets/dualaxis_libraries_code.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the code.</strong></a> </p>

<br>

### Data Transformation

I want to compare the median highway fuel economy and the proportion of vehicles in this list. To do so I need to take my raw data, which is 234 vehicles, and apply the median, count, and get a proportion of counts to show the vehicle representation.

![](/assets/dualaxis_data.jpg)

Here's the code to do this transformation.

![](/assets/dualaxis_data_wrangle.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the code.</strong></a> </p>

Now that the data has been transformed, let's see how to make this plot in 3 steps.

# Problem: Different scales

I have a problem. If I try to plot the two variables (prop and hwy_median) on a ggplot, then my plot looks like crap.

![](/assets/dualaxis_plot_crap.jpg)

This happens because the two variables are on different scales.

![](/assets/dualaxis_problem.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the code.</strong></a> </p>

# Solution: Transformer function to rescale the 2nd axis

The solution is just to copy my transformer code and we can use this to make a secondary axis that is re-scaled to the first axis.

![](/assets/dualaxis_transformer.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the code.</strong></a> </p>

Next, apply the `transformer_dual_y_axis()` function to the data. Set the primary column as prop and the secondary column as hwy_median. The `include_y_zero = TRUE` makes sure both y-axis include zero.

![](/assets/dualaxis_transformer_applied.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the code.</strong></a> </p>

# 3-steps to dual-axis plots

Ok, now we are ready to rock and roll. Let's make the dual axis plot.

## Step 1: Set up the primary y-axis

Run this code to set up the primary y-axis. This creates the first plot (`g1`).

![](/assets/dualaxis_g1.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the code.</strong></a> </p>

This returns a salmon-colored plot with the proportions. (Don't worry, we'll fix the color in a minute)

![](/assets/dualaxis_g1_plot.jpg)

## Step 2: Apply the transformer

Next, I'm creating a 2nd plot (`g2`) that extends the first plot (`g1`). 

![](/assets/dualaxis_transformer_ggplot_code.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the code.</strong></a> </p>

We now have the dual y-axis set up. It still looks too salmon-ey. But we're onto something. 

![](/assets/dualaxis_g2_plot.jpg)

Now, let's make it look like a professional plot. 

## Step 3: Pro-customizations (that'll make your boss squeal)

Next, run this code to upgrade the appearance of the `g2` plot (returning `g3`, the plot you'll want to show your boss).

![](/assets/dualaxis_g3_code.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the code.</strong></a> </p>

![](/assets/dualaxis_g3_plot.jpg)

 

# 💡 Conclusions

You learned how to create a dual-axis plot that is about 100X better than anything I can create in Excel. Great work! **But, there's a lot more to becoming a Business Scientist (a highly saught-after data scientist that knows the secrets to generating business value).**

If you'd like to become a Business Scientist (and have an awesome career, improve your quality of life, enjoy your job, and all the fun that comes along), then I can help with that.

{% include cta_struggles_rtrack.md %}
