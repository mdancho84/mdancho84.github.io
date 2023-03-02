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

{% include cta_struggles_rtrack.md %}
