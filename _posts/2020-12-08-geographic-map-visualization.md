---
layout: post
title: How To Make Geographic Map Visualizations In R
date: 2020-12-08T06:00:00.000+00:00
excerpt: If you are explaining data related to geography or just want to visualize
  by latitude / longitude location, you need to know ggplot2 and the tidyverse for
  making maps.
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- Tidyverse
- Geo Mapping
image: "/assets/ggplot_map_thumb_2.jpg"
image_preview: "/assets/ggplot_map_thumb_2.jpg"

---
This article is part of a R-Tips Weekly, a [weekly video tutorial](https://learn.business-science.io/r-tips-newsletter) that shows you step-by-step how to do common R coding tasks.

<br/>

If you are explaining data related to geography or just want to visualize by latitude / longitude location, you need to know `ggplot2` & the `tidyverse` for making maps.

This tutorial will show you how to make a publication-quality visualization! Here are the links to get set up. 👇

* [Get the Code](https://learn.business-science.io/r-tips-newsletter)
* [YouTube Tutorial](https://youtu.be/D5OBWBM5kwk)

<br>


# Video Tutorial

Learn how to make geospatial maps using the `ggplot2`  package in my 10-minute YouTube video tutorial.

<iframe width="100%" height="450" src="https://www.youtube.com/embed/D5OBWBM5kwk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Working with Map Data

The first thing we need when creating a map is data that represents the latitude and longitude. We need to use a function called `map_data()` to collect the data in the right structure for a `ggplot2` map.

<br>

**Map Data**

Using the `map_data()` function to collect lat/long data for the entire World.

![Collect lat long data for the entire World](/assets/2020-12-08-geographic-map-visualization/map_data.jpg)

<br>

**Plotting the Map Data with ggplot2**

We can use the `geom_map()` & `coord_map()` functions to plot the world.

![Plot world](/assets/2020-12-08-geographic-map-visualization/geom_map.jpg)

![Plot world](/assets/2020-12-08-geographic-map-visualization/world_image.jpg)

# Visualizing Republican Voting

So what can we do with Map Data + `ggplot2`? How about visualizing how the US voted in 1976?!

![Plot world code](/assets/2020-12-08-geographic-map-visualization/full_code.jpg)

![Voting  Map](/assets/2020-12-08-geographic-map-visualization/voting_map.jpg)

# Conclusions

We learned how to make geospatial maps with `ggplot2`. Great work! **But, there's a lot more to becoming a data scientist.**

If you'd like to become a data scientist (and have an awesome career, improve your quality of life, enjoy your job, and all the fun that comes along), then I can help with that.

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