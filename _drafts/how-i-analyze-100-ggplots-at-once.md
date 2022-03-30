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
date: 2022-03-30 10:00:00 -0400
excerpt: Big data? Lot's of time series? Traditionally you'd use ggplot facets. But
  that only works for a few datasets. Enter
image: "/assets/trelliscopejs_thumb.jpg"
image_preview: "/assets/trelliscopejs_thumb.jpg"

---
**Visualizing big data is next to impossible.** As soon as I have 12 plots, that's where my ability to use native ggplot suffers. That is until I found `trelliscopejs`. 

`trelliscopejs` is like `ggplot2` faceting on steroids. This may seem crazy, but the benefit is that when you have 20, 30, or even 100+ plots you need to analyze, `trelliscopejs` is the solution! 

And, I'm going to get you up and running with `trelliscopejs` in **under 5-minutes:**

1. I'll teach you how to make 20+ ggplot facets using trelliscopejs
2. **BONUS: I'll not only show you how to make static ggplots, _but_ I'll even show you how to use the plotly integration for interactivity**

## R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<p>Here are the links to get set up. 👇</p>

<ul> <li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li> <li><a href="https://youtu.be/x6GL9Y3t2Uo">YouTube Tutorial</a></li> </ul>

# Video Tutorial

Learn how to use the `trelliscopejs` package in my 5-minute YouTube video tutorial.

<iframe width="100%" height="450" src="https://www.youtube.com/embedx6GL9Y3t2Uo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>