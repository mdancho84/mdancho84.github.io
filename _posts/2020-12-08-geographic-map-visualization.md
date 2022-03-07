---
layout: post
title: "How To Make Geographic Map Visualizations (10 Must-Know Tidyverse Functions #6)"
date:   2020-12-08 06:00:00
excerpt: "If you are explaining data related to geography or just want to visualize by latitude / longitude location, you need to know ggplot2 and the tidyverse for making maps."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, R, R-Tips, Tidyverse, Geo Mapping]
image: /assets/2020-12-08-geographic-map-visualization/geo_maps_cover.jpg
image_preview: /assets/2020-12-08-geographic-map-visualization/geo_maps_preview.jpg
---



This article is part of a R-Tips Weekly, a [weekly video tutorial](https://learn.business-science.io/r-tips-newsletter) that shows you step-by-step how to do common R coding tasks.

<br/>

If you are explaining data related to geography or just want to visualize by latitude / longitude location, you need to know `ggplot2` & the `tidyverse` for making maps. 

This tutorial will show you how to make a publication-quality visualization! Here are the links to get set up. 👇

- [Get the Code](https://learn.business-science.io/r-tips-newsletter)
- [YouTube Tutorial](https://youtu.be/D5OBWBM5kwk)

<br>

<figure class="text-center">
  <a href="https://youtu.be/D5OBWBM5kwk"><img src="/assets/2020-12-08-geographic-map-visualization/video_thumb.jpg" border="0" /></a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>


# Working with Map Data

The first thing we need when creating a map is data that represents the latitude and longitude. We need to use a function called `map_data()` to collect the data in the right structure for a `ggplot2` map. 

<br>

**Map Data**

Using the `map_data()` function to collect lat/long data for the entire World. 

![Collect lat long data for the entire World](/assets/2020-12-08-geographic-map-visualization/map_data.jpg)

<br>

**Plotting the Map Data with ggplot2**

We can use the `geom_map()` &amp; `coord_map()` functions to plot the world. 

![Plot world](/assets/2020-12-08-geographic-map-visualization/geom_map.jpg)

![Plot world](/assets/2020-12-08-geographic-map-visualization/world_image.jpg)


# Visualizing Republican Voting 

So what can we do with Map Data + `ggplot2`? How about visualizing how the US voted in 1976?!

![Plot world code](/assets/2020-12-08-geographic-map-visualization/full_code.jpg)

![Voting  Map](/assets/2020-12-08-geographic-map-visualization/voting_map.jpg)






<br>

<center><p>The look on your coworker's face speaks volumes. 👇</p></center>

![shocked gif](/assets/2020-12-08-geographic-map-visualization/shocked.gif)




<br>

### But you don't have the force yet! 

Here's how to master R programming and become powered by R.  👇
 
![Ive got the power](/assets/2020-12-08-geographic-map-visualization/got_the_power.gif)


...Your executive management review after you've launched your [your first Shiny App](https://www.business-science.io/business/2020/08/05/build-data-science-app-3-months.html). 👇

![Crowd Applause](/assets/2020-12-08-geographic-map-visualization/applause.gif)


**This is career acceleration.**



<br>

### SETUP R-TIPS WEEKLY PROJECT

1. [Get the Code](https://learn.business-science.io/r-tips-newsletter)

2. Check out the [R-Tips Setup Video](https://youtu.be/F7aYV0RPyD0).

Once you take these actions, you'll be set up to receive R-Tips with Code every week. =)

<br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}
