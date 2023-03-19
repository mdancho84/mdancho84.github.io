---
layout: post
title: "How to Make a Heatmap in R"
date:   2021-10-12 08:40:00
excerpt: "The ggplot2 package is an essential tool in every data scientists toolkit. Today we show you how to use ggplot2 to make a professional heatmap that organizes customers by their sales purchasing habits."
author: "Matt Dancho"
categories: [R]
tags: [R-Bloggers, Learn-R, ggplot, ggplot2]
image: "/assets/2021-10-12-customer-heatmap/047-customer-heatmap-thumb.jpg"
image_preview: "/assets/2021-10-12-customer-heatmap/047-customer-heatmap-thumb.jpg"
---

The `ggplot2` package is an essential tool in every data scientists toolkit. Today we show you how to use `ggplot2` to make a professional heatmap.   

### Table of Contents:

We'll tackle one of my first business problems:

1. Making a Heatmap of Customer Buying Habits. 
2. **BONUS (Pro-Tip): How to explain your heatmap to business executives.**




## R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<p>Here are the links to get set up. 👇</p>

<ul>
    <li><a href="https://learn.business-science.io/r-tips-newsletter" target='_blank'>Get the Code</a></li>
    <li><a href="https://youtu.be/TP8vjWiIpgI" target='_blank'>YouTube Tutorial</a></li> 
</ul>


# Video Tutorial

Watch this video to learn how to make a Customer Heatmap in `ggplot2`. Click the image to play the tutorial.  

<figure class="text-center">
    <a href="https://youtu.be/TP8vjWiIpgI" target="_blank">
    <img src="/assets/2021-10-12-customer-heatmap/047-customer-heatmap-thumb.jpg" style='max-width:100%;'> </a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>

# What You Make in this R-Tip

By the end of this tutorial, you will have created this Customer Heatmap showing purchasing preferences. 




## R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<p>Here are the links to get set up. 👇</p>

<ul>
    <li><a href="https://learn.business-science.io/r-tips-newsletter" target='_blank'>Get the Code</a></li>
    <li><a href="https://youtu.be/TP8vjWiIpgI" target='_blank'>YouTube Tutorial</a></li> 
</ul>


# Video Tutorial

Watch this video to learn how to make a Customer Heatmap in `ggplot2`. Click the image to play the tutorial.  

<figure class="text-center">
    <a href="https://youtu.be/TP8vjWiIpgI" target="_blank">
    <img src="/assets/2021-10-12-customer-heatmap/047-customer-heatmap-thumb.jpg" style='max-width:100%;'> </a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>

# Why Visualizing Heatmaps is important

Executives hate anything they don't understand. So if you can't explain it, they are going to say,* "Yeah, uh huh."...* And never use what you are pitching them. 

Heatmaps are a great way to story tell (so you can persuade those tricky-to-understand exec's to use your business solution).

So when you put a heatmap visualization in front of them, and you can say that Indianapolis Velocipedes are buying the majority of Elite Road Bicycles. They get that. And they can see why it logically makes sense to group them into a bucket of customers (i.e. a segment) that gets special offers on Road Bicycles. 

![Customer Heatmap](/assets/heatmap_customers.jpg)

# Free Gift: Cheat Sheet for my Top 100 R Packages (Special Data Analysis Topics Included)

Before we dive in...

**You're going to need R packages to complete the analysis that goes in your MS Word reports.** So why not speed up the process? 

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

# Tutorial: How to Make A Heatmap (Customer Segmentation Example)

Here's how to make a customer heat map (using a database of customers and their purchasing history).

## Step 1: Load the libraries and data

First, load the following libraries and data. 

![Heat Map Libraries](/assets/heatmap_libraries.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the code.</strong></a> </p>

The dataset looks like this:

![Heat Map Dataset](/assets/heatmap_2_sales_customer.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the data.</a> </p>

## Step 2: Format the Data in 

Next, we need to get the data into the right format for a comparison. To do this, we'll convert to a proportion of sales by bikeshop. Then we sort by the top product, which in this case is Elite Road (this hack is needed for the heatmap to have the customers that purchase similar products grouped together). 

![Heat Map Data Wrangle](/assets/heatmap_3_prop_by_category.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the code.</strong></a> </p>

Here's what the data now looks like. We now have a proportion of sales that each bikeshop is spending in each category. And it's sorted by the top category (this is )

![Heat Map Data Prop Sales by Bikeshop](/assets/heatmap_3_data.jpg)

## Step 3: Make the Heat Map

The last step is to take the formatted data from Step 2 and visualize it with `ggplot2`. We'll leverage `geom_tile()` for the heat map and use `geom_text()` to add the proportions formatted as text to the heat map tiles. 

![Heat Map ggplot2 code](/assets/heatmap_4_ggplot2_code.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the code.</strong></a> </p>

...And here's the final visualization.

![Heatmap Visualization - Customers](/assets/heatmap_4_visualization.jpg)

# BONUS: Explaining to Executives

Having a heatmap is great, but it doesn't guarantee success with your business. To get the desired result, you need to learn how to pitch your data viz. 

## Here's how (Quick Pro-Tip for Pitching Executives). 

My goto is to talk in specifics. This means talk about what this chart means by focusing on 1 specific customer and 1 specific product-line. 

## Here's an example: Indianpolis Velocipedes

![Indanapolis Velocipedes](/assets/heatmap_5_bonus.jpg)

I'd say something like:

> "Let's take a look at our customer, Indianpolis Velocipedes. 38% of the products they are purchasing are Elite Road Bicycles. And there's other customers like Austin Cruisers, Ann Arbor Speed, and Louisville Race Equipment that are doing the exact same thing... With this information in hand, we can target them for offers. What do you think would happen if we gave them a flash sale on Elite Road bikes? Do you want to try it out?"

More often than not, they are going to agree and try the simple test. 

And if it shows positive results (brings in some additional sales), then you've just impacted the business through improved decision making. 

Do this a few times and you'll get a promotion. And if you make your company a lot of money with these techniques...

...Your career will take off like mine did. **I went from making $75,000 to $150,000+ in about 2 years doing this stuff.**

# Summary

You just created a Customer Heatmap using `ggplot2`. This is great, but there's a lot more to learning data science. 

If you'd like to learn data visualizations, data wrangling, `shiny` apps, and data science for business with R, then read on. 👇



{% include cta_struggles_rtrack.md %}
