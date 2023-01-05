---
layout: post
title: Cut your EDA time into 5 minutes with Exploratory DataXray Analysis (EDXA)
date: 2023-01-05 07:00:00 -0500
excerpt: Do you know how long EDA (exploratory data analysis) used to take me? Not
  hours, not days... A full week! Today I'm going to show you how to use dataxray.
  With this new R package I'm about to show you, you'll cut your EDA time into 5 minutes.
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
image: "/assets/dataxray_thumb_2.jpg"
image_preview: "/assets/dataxray_thumb_2.jpg"

---
Do you know how long EDA (exploratory data analysis) used to take me? Not hours, not days... A full week! Listen, you don't know how good you have it. With this new R package I'm about to show you (plus one BONUS hack), you'll cut your EDA time into 5 minutes. Here's how.

### Table of Contents

Today I'm going to show you how to use `dataxray`. Here's what you're learning today:

* Tutorial: How to use `dataxray` to effortlessly produce and evaluate statistical summaries on your new datasets
* **Bonus: The _next step_ in my EDA process (that uncovers hidden insights that I use to give quick wins to business leadership)**

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> <li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li> <li><a href="https://youtu.be/SsmtCNZVLv0">YouTube Tutorial</a></li> </ul>

# This Tutorial is Available in Video

I have a companion video tutorial that shows even more secrets (plus mistakes to avoid). And, I’m finding that a lot of my students prefer the dialogue that goes along with coding. So check out this video to see me running the code in this tutorial. 👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/SsmtCNZVLv0" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# What Is Exploratory Data Analysis?

**Exploratory Data Analysis (EDA)** is how data scientists and data analysts find meaningful information in the form of relationships in the data. EDA is absolutely critical as a first step before machine learning and to **explain business insights** to non-technical stakeholders like executives and business leadership.

![](/assets/dataxray_thumb_2.jpg)

# What do I make in this R-Tip?

I'm so excited right now. If you follow me, you probably know one of my favorite R packages is the `skimr` library for [**quick exploratory statistical summaries**](https://www.business-science.io/code-tools/2021/03/09/data-quality-with-skimr.html) (the first thing I run when I get a new dataset). Well, I just stumbled upon _the interactive version_ of skimr. And it's insane!

I'm referring to `dataxray`, a new R package that provides quick statistical summaries in an interactive table inside of the Rstudio Viewer Pane. Here's the interactive `dataxray` table you're going to make in this tutorial from R. 👇

![](/assets/dataxray_table.jpg)

<p class="text-center date">Dataxray Interactive Exploratory Summaries</p>

# Thank You to the Developer.

Before we do our deep-dive into `dataxray`, I want to take a brief moment to thank the developer, [Agustin Calatroni](https://www.linkedin.com/in/agustin-calatroni-41280b132/), Senior Director of Biostatistics at Rho, Inc. Please connect and follow Augustin. [His work is on GitHub here](https://github.com/agstn/dataxray). 

![](/assets/dataxray_developer.jpg)

# My 3-Step Exploratory Data Analysis Process

**It can be confusing to know which EDA R packages to use.** To help, I've recently covered [my top R packages for exploratory data analysis here](https://www.business-science.io/code-tools/2022/09/23/explore-simplified-exploratory-data-analysis-eda-in-r.html). In short, here's my process:

1. **DataExplorer (and Skimr):** For collecting a report on the dataset that I'm unfamiliar with. I focus on which feature I'm interested in (called a "target") and the surrounding data to identify any data issues. [I cover my DataExplorer process here](https://www.business-science.io/code-tools/2021/03/02/use-dataexplorer-for-EDA.html). And, [I show off how I use skimr here](https://www.business-science.io/code-tools/2021/03/09/data-quality-with-skimr.html).
2. **Correlation Funnel:** I then use this to get a quick understanding (yes - I am the creator of this package, but make no mistake it's probably the most powerful package for getting quick insights in your arsenal). [I cover how I use Correlation Funnel here.](https://www.business-science.io/code-tools/2019/08/07/correlationfunnel.html)
3. **Explore:** If I want to further understand complex relationships, I'll use the explore package's shiny app to expose bivariate relationships and drill in. I explain [how to use explore here](https://www.business-science.io/code-tools/2022/09/23/explore-simplified-exploratory-data-analysis-eda-in-r.html).

# With all these great EDA packages, why use `dataxray`?

What I like about `dataxray` is its emphasis on an **interactive exploration** of the exploratory summaries.

![](/assets/dataxray-1.gif)

I'm going to give you a free gift right now top help with (and after you are done with) this tutorial...

## Gift: Free Cheat Sheet for my Top 100 R Packages (EDA included)

**Even I forget which R packages to use from time to time.** And this cheat sheet saves me so much time. Instead of googling to filter through 20,000 R packages to find a needle in a haystack. I keep my cheat sheet handy so I know which to use and when to use them. Seriously. [This cheat sheet is my bible.](https://www.business-science.io/r-cheatsheet.html)

![](https://www.business-science.io/assets/free_cheatsheet.jpg)

Once you [download it](https://www.business-science.io/r-cheatsheet.html), head over to page 3 and you’ll see several R packages I use frequently just for Exploratory Data Analysis.

![](https://www.business-science.io/assets/cheatsheet_exploratory.jpg)

And you get the same guidance which is important when you want to work in these fields:

* Machine Learning
* Time Series
* Financial Analysis
* Geospatial Analysis
* Text Analysis and NLP
* Shiny Web App Development

[So steal my cheat sheet.](https://www.business-science.io/r-cheatsheet.html) It will save you a ton of time.

# Tutorial: Interactive exploratory summaries with `dataxray`

Here's how to use `dataxray` to start your exploratory data analysis on the right foot. 

## Step 1: Load the libraries and data

First, load libraries `tidyverse` , `dataxray`, and (optionally) `correlationfunnel` for the bonus code. 

![](/assets/dataxray_01_libraries.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

We’ll use the `mpg` dataset, which has data on 234 vehicle models.

![](/assets/explore_02_mpg.jpg)

<br>

### Data Transformation

I want to compare the median highway fuel economy and the proportion of vehicles in this list. To do so I need to take my raw data, which is 234 vehicles, and apply the median, count, and get a proportion of counts to show the vehicle representation.

![](/assets/dualaxis_data.jpg)

Here's the code to do this transformation.

![](/assets/dualaxis_data_wrangle.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

Now that the data has been transformed, let's see how to make this plot in 3 steps.

# Problem: Different scales

I have a problem. If I try to plot the two variables (prop and hwy_median) on a ggplot, then my plot looks like crap.

![](/assets/dualaxis_plot_crap.jpg)

This happens because the two variables are on different scales.

![](/assets/dualaxis_problem.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

# Solution: Transformer function to rescale the 2nd axis

The solution is just to copy my transformer code and we can use this to make a secondary axis that is re-scaled to the first axis.

![](/assets/dualaxis_transformer.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

Next, apply the `transformer_dual_y_axis()` function to the data. Set the primary column as prop and the secondary column as hwy_median. The `include_y_zero = TRUE` makes sure both y-axis include zero.

![](/assets/dualaxis_transformer_applied.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

# 3-steps to dual-axis plots

Ok, now we are ready to rock and roll. Let's make the dual axis plot.

## Step 1: Set up the primary y-axis

Run this code to set up the primary y-axis. This creates the first plot (`g1`).

![](/assets/dualaxis_g1.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

This returns a salmon-colored plot with the proportions. (Don't worry, we'll fix the color in a minute)

![](/assets/dualaxis_g1_plot.jpg)

## Step 2: Apply the transformer

Next, I'm creating a 2nd plot (`g2`) that extends the first plot (`g1`).

![](/assets/dualaxis_transformer_ggplot_code.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

We now have the dual y-axis set up. It still looks too salmon-ey. But we're onto something.

![](/assets/dualaxis_g2_plot.jpg)

Now, let's make it look like a professional plot.

## Step 3: Pro-customizations (that'll make your boss squeal)

Next, run this code to upgrade the appearance of the `g2` plot (returning `g3`, the plot you'll want to show your boss).

![](/assets/dualaxis_g3_code.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

![](/assets/dualaxis_g3_plot.jpg)

# 💡 Conclusions

You learned how to create a dual-axis plot that is about 100X better than anything I can create in Excel. Great work! **But, there's a lot more to becoming a Business Scientist (a highly saught-after data scientist that knows the secrets to generating business value).**

If you'd like to become a Business Scientist (and have an awesome career, improve your quality of life, enjoy your job, and all the fun that comes along), then I can help with that.

# My Struggles with Learning Data Science

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