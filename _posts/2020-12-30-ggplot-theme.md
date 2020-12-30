---
layout: post
title: "Plotting Time Series in R (New Cyberpunk Theme)"
date:   2020-12-30 07:00:00
excerpt: "One of the most common data science visualization is a Time Series plot. In this tutorial we'll learn how to plot time series using ggplot, plotly and timetk."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, R, R-Tips, ggplot, timeseries, timetk, plotly]
image: 2020-12-30-ggplot-theme/plotting_timeseries_cover.jpg
image_preview: 2020-12-30-ggplot-theme/plotting_timeseries_preview.jpg
---



This article is part of a R-Tips Weekly, a [weekly video tutorial](https://mailchi.mp/business-science/r-tips-newsletter) that shows you step-by-step how to do common R coding tasks.

<br/>

One of the most common data science visualization is a Time Series plot. In this tutorial we'll learn how to plot time series using `ggplot`, `plotly` and `timetk`. 

Here are the links to get set up. 👇

- [Get the Code](https://mailchi.mp/business-science/r-tips-newsletter)
- [YouTube Tutorial](https://youtu.be/Nf8FwFCJz2c)




## Making a Cyberpunk themed Time Series Plot

It's super-easy to make a basic time series plot with `timetk::plot_time_series()`. But did you know you can customize it!

Here's how to make a Cyberpunk 2077-themed ggplot. 

<figure class="text-center">
  <a href="https://youtu.be/Nf8FwFCJz2c"><img src="/assets/2020-12-30-ggplot-theme/video_thumb.jpg" border="0" /></a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>


### Step 1 

Make a basic plot with `timetk::plot_time_series()`. Set `.interactive = FALSE` to return a i object. 

<figure class="text-center">
  <img src="/assets/2020-12-30-ggplot-theme/plot_time_series.jpg" border="0" />
  <figcaption>Full code in the video Github Repository</figcaption>
</figure>

![](/assets/2020-12-30-ggplot-theme/ggplot-theme-1.jpg)


### Step 2

Create a Cyberpunk theme: Pick the colors and simply add to the `theme_cyberpunk()` ggplot2 theme function. 

<figure class="text-center">
  <img src="/assets/2020-12-30-ggplot-theme/theme_cyberpunk.jpg" border="0" />
  <figcaption>Full code in the video Github Repository</figcaption>
</figure>


### Step 3

Customize! Apply `ggplot` geom and scale functions along with the previously created `theme_cyberpunk()` to make a stunning time-series visualization!

<figure class="text-center">
  <img src="/assets/2020-12-30-ggplot-theme/ggplot-theme-2.jpg" border="0" />
  <figcaption>Full code in the video Github Repository</figcaption>
</figure>





<br><br>

<center><p>Your ggplot skills are amazing. Santa approves. 👇</p></center>

![](/assets/2020-12-30-ggplot-theme/santa.gif)



<br>

### But if you really want to improve your productivity... 

Here's how to **master R programming and become powered by R**.  👇
 
What happens after you learn R for Business. 

![](/assets/2020-12-30-ggplot-theme/tree.gif)


Your **Job Performance Review** after you've launched [your first Shiny App](https://www.business-science.io/business/2020/08/05/build-data-science-app-3-months.html). 👇

![](/assets/2020-12-30-ggplot-theme/amazed.gif)


**This is career acceleration.**



<br>

### SETUP R-TIPS WEEKLY PROJECT

1. Sign Up to Get the R-Tips Weekly (You'll get email notifications of NEW R-Tips as they are released): https://mailchi.mp/business-science/r-tips-newsletter

2. Set Up the GitHub Repo: https://github.com/business-science/free_r_tips

3. Check out the setup video (https://youtu.be/F7aYV0RPyD0). Or, Hit Pull in the Git Menu to get the R-Tips Code

Once you take these actions, you'll be set up to receive R-Tips with Code every week. =)

<br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}