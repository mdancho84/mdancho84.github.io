---
layout: post
title: How To Geocode In R For FREE
date: 2023-03-19 11:00:00 -0500
excerpt: Want to impact your business? Learn how to use geospatial data... And the first step is Geocoding addresses and latitude/longitude. 
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- tidygeocoder
image: "/assets/tidygeocoder_thumb_3.jpg"
image_preview: "/assets/tidygeocoder_thumb_3.jpg"

---
What's the one thing that help you add value to your company's raw geospatial data? __GEOCODING.__

Geocoding is the process of converting raw physical addresses to latitude and longitude geospatial points that can be viewed on a map and used for geospatial calculations. **Heck - Geocoding has been known to increase my machine learning model perfomance by up to 10%!**

### Table of Contents

Today I'm going to show you how to do Geocoding in R for FREE using `tidygeocoder`. Here's what you're learning today:

* Tutorial Part 1: How to use `tidygeocoder` to effortlessly *geocode addresses* (convert your company addresses to Lat/Long)
* Tutorial Part 2: And I'm going to show you how to do *Reverse Geocoding* (go from Lat/Long to Physical Addresses)
* **Bonus: I'm going to show you how to Map lat/long data using Simple Features + Mapview!**

![Microsoft Word Report Made with R](/assets/tidygeocoder_thumb_3.jpg)

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> <li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li> <li><a href="https://youtu.be/7nFZ5BwkAXc">YouTube Tutorial</a></li> </ul>

# This Tutorial is Available in Video

I have a companion video tutorial that gives you the bonus Mapview Shortcuts shown in this video (plus walks you through how to use it). And, I’m finding that a lot of my students prefer the dialogue that goes along with coding. So check out this video to see me running the code in this tutorial. 👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/7nFZ5BwkAXc" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Why Geocoding is a Must

Look, I've been working with customer data for a long time...

And one of the RICHEST sources of data is raw company addresses!

**Think about it.** If you know where a company is located, do you think that might be important to their purchasing behavior?

Well it was for me. In fact I found out that just simply adding the Latitude and Longitude information to my customer churn prediction models...

### Gave my models a 10% increase in performance!

![Company Address Value](/assets/tidygeocoder_address_value_1.jpg)

<p class="date text-center">Lot's of Value to Machine Learning in Raw Customer Addresses</p>

The Latitude and Longitude was key!

And that's just one of the benefits of working with geospatial data (and geocoding).

### But you're probably thinking geospatial data is really tough.

Listen, I get it. Geospatial data is a little weird. 

But, you have good ole Matt Dancho to help you out. 

And my promise is today, I'm going to get you on the right track. 

### So let's fix that geospatial problem, and make one small step today. And it starts with geocoding. 

# Thank You to the Developer (and Community).

Before we do our deep-dive into `tidygeocoder`, I want to take a brief moment to thank the developers working on theTidygeocoder project, [Jesse Cambon](https://jessecambon.github.io/), [Diego Hernangómez](https://github.com/dieghernan), [Christopher Belanger](https://github.com/chris31415926535) and [Daniel Possenriede](https://github.com/dpprdan). Without their hard work, this tutorial (and easy Geocoding) wouldn't be possible. Thank you!


# Free Gift: Cheat Sheet for my Top 100 R Packages (Special Geospatial Analysis Topics Included)

Before we dive in...

**You're going to need R packages to complete the geospatial analysis that helps your company.** So why not speed up the process? 

To help, I'm going to share my secret weapon...

**Even I forget which R packages to use from time to time.** And this cheat sheet saves me so much time. Instead of googling to filter through 20,000 R packages to find a needle in a haystack. I keep my cheat sheet handy so I know which to use and when to use them. Seriously. [This cheat sheet is my bible.](https://www.business-science.io/r-cheatsheet.html)

![Ultimate R Cheat Sheet](https://www.business-science.io/assets/free_cheatsheet.jpg)

Once you [download it](https://www.business-science.io/r-cheatsheet.html), head over to page 3 and you’ll see several R packages I use frequently just for Data Analysis.

![Cheat Sheet Page 3 Special Topics](/assets/cheatsheet_page_3_special_topics.jpg)

Which is important when you want to work in these fields:

* Machine Learning
* Time Series
* Financial Analysis
* Geospatial Analysis
* Text Analysis and NLP
* Shiny Web App Development

[So steal my cheat sheet.](https://www.business-science.io/r-cheatsheet.html) It will save you a ton of time.

# Tutorial: How to Geocode in R for Free with `tidygeocoder`

Time for geocoding with `tidygeocoder`. Let's have some fun!

## Step 1: Load the Libraries

Load the following libraries. 

* `tidyverse` and `tidygeocoder` are the main libraries. 
* **But my bonus lat/long map hack uses `sf` and `mapview`.**

![Tidygeocoder Libraries](/assets/tidygeocoder_01_libraries.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the code.</strong></a> </p>

## Step 2: Get My Pittsburgh Pharmacies Dataset

Next, you can [steal my Pittsburgh Pharmacies dataset](https://learn.business-science.io/r-tips-newsletter). This dataset is a great way to test your skills with Geocoding. 

![Pittsburgh Pharmacies Data Set](/assets/tidygeocoder_02_pittsburgh_pharmacies_dataset.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Steal The Pittsburgh Pharmacies Data Set</strong></a> </p>

We'll the Pittsburgh Pharmacies dataset (171 geocoded pharmacies) throughout the rest of this tutorial. 

[Get it here.](https://learn.business-science.io/r-tips-newsletter) It's in the `059_geocoding` folder. 

Next, read the data set into R. 

![Read Pittsburgh Pharmacies Data Set](/assets/tidygeocoder_02_pittsburgh_pharmacies.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the code.</strong></a> </p>

## Step 3: Geocode the Address Column to get Latitude and Longitude

Next, use the `geocode()` function to convert a company's physical address to a Latitude / Longitude. 

![Geocode Code](/assets/tidygeocoder_03_geocode.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the code.</strong></a> </p>

Here's what happens...

![Geocode Output](/assets/tidygeocoder_03_geocode_output.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the code.</strong></a> </p>

**A quick point on the API being used.** The default is `method = "osm"`, which connects to the FREE Open Street Maps Nomenatim API. This is great, but may be too slow for your needs. [Other free and paid API's exist. (and yes google's maps API is an option).](https://jessecambon.github.io/tidygeocoder/reference/geo.html) 

![Tidygeocoder method argument](/assets/tidygeocoder_method_arg.jpg)

## Step 4: Reverse Geocode to go from Lat/Long to Physical Address

Sometimes you have a latitude and longitude and want a physical address. For example, if your salesperson needs to know what addresses to visit **(you wouldn't send them a Lat/Long... or else they'd think your nuts!)**

Did you know that you can **reverse geocode?**

You can! Here's how to go from Latitude / Longitude to a Physical Address. (And save your inter-office reputation)


![Reverse Geocode Script](/assets/tidygeocoder_04_reverse_geocode.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the code.</strong></a> </p>

And you can see that reverse geocoding creates an address from Lat/Long coordinates. 

![Reverse Geocode Output](/assets/tidygeocoder_04_reverse_geocode_output.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the code.</strong></a> </p>

# Bonus: Steal My Map Hack to Visualize Lat/Long Data

Want to visualize the geocoded data?

[Steal my bonus script here.](https://learn.business-science.io/r-tips-newsletter) (It's in the `059_geocode.R` file)

## Here's what *it* does in 2 lines of code:

![Mapview](/assets/tidygeocoder_05_bonus_mapview.jpg)

Now you can visualize all 171 Pittsburgh Pharmacies in an interactive map!

# 💡 Conclusions

You learned how to use the `tidygeocoder` library to geocode and reverse geocode. Great work! **But, there’s a lot more to becoming a data scientist.**

If you'd like to become a Business Data Scientist (and have an awesome career, improve your quality of life, enjoy your job, and all the fun that comes along), then I can help with that.

{% include cta_struggles_rtrack.md %}