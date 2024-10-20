---
layout: post
title: "Supply Chain Analysis with R Using the planr Package"
date: 2024-10-20 06:00:00 -0500
excerpt: "Effectively managing inventory is critical to a well-functioning supply chain. Learn how to project inventories using the planr package in R to optimize your supply chain operations."
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- planr
image: "/assets/087_supply_chain_analytics_planr.jpg"
image_preview: "/assets/087_supply_chain_analytics_planr.jpg"
---

Hey guys, welcome back to my [R-tips newsletter](https://learn.business-science.io/r-tips-newsletter?el=website). Supply chain management is essential in making sure that your company's business runs smoothly. One of the key elements is **managing inventory efficiently**. Today, I’m going to show you how to estimate inventory and forecast inventory levels using the `planr` package in R. Let’s dive in!

### Table of Contents

Here’s what you’ll learn in this article:

- **Why Inventory Projections Are Crucial to Supply Chain Management**
- **How to Use the `planr` Package to Project Inventories**
    - Loading Supply Chain Data
    - Projecting Inventory Levels
    - Visualizing Demand Over Time
    - Creating Interactive Tables for Projected Inventories
- **Before You Go Any Further:** **[Join the R-Tips Newsletter to get the Data and Code so you can follow along](https://learn.business-science.io/r-tips-newsletter?el=website)** 

![Supply Chain Analysis with R Using the planr Package](/assets/087_supply_chain_analytics_planr.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 084 Folder)</a></p>

---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here is the link to get set up. 👇</p>

<ul> 
    <li><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Sign up for our R-Tips Newsletter and get the code.</a></li> 
</ul>

![Get the code](/assets/087_get_the_code.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 087 Folder)</a></p>


# How to Project Inventories with the `planr` Package


## Why Inventory Projections Are Crucial to Supply Chain Management


Supply chain management is all about balancing **supply and demand** to ensure that inventory levels are optimized. Overestimating demand leads to excess stock, while underestimating it causes shortages. **Accurate inventory projections** allow businesses to plan ahead, make data-driven decisions, and avoid costly errors like over-buying inventory or getting into a stock-outage and having no inventory to meet demand.

## Enter the `planr` Package

The `planr` package [simplifies inventory management](https://github.com/nguyennico/planr) by projecting future inventory levels based on supply, demand, and current stock levels. 

![Planr Github](/assets/087_planr_github.jpg)

# Supply Chain Analysis with `planr`

Let’s take a look at how to use `planr` to optimize your supply chain. We'll go through a quick tutorial to get you started using `planr` to project and manage inventories.

## Step 1: Load Libraries and Data

First, you need to install the required packages and load the libraries. Run this code:

![Libraries](/assets/087_libraries_data.jpg)

![Data](/assets/087_data.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 087 Folder)</a></p>

This data contains **supply and demand information** for various demand fulfillment units (DFUs) over a period of time.

- **Demand Fullfillment Unit (DFU):** A product identifier, here labeled as "Item 000001" (there are 10 items total).
- **Period:** Monthly periods corresponding to supply and demand.
- **Demand:** Customers purchase and reduce on-hand inventory.
- **Opening:** An initial inventory of 6570 units in the first period for Item 000001.
- **Supply:** New supplies arriving in subsequent months.

## Step 2: Visualizing Demand Over Time

The first step in understanding supply chain performance is visualizing demand trends. We can use `timetk::plot_time_series()` to get a clear view of the demand fluctuations. Run this code:

![timetk::plot_time_series() code](/assets/087_plot_code.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 087 Folder)</a></p>

This code will produce a set of **time series plots** that show how demand changes over time for each DFU. By visualizing these trends, you can identify patterns and outliers that may impact your projections.

![timetk plot time series plot](/assets/087_demand_time_plot.jpg)

## Step 3: Projecting Inventory Levels

Once you have a good understanding of demand, the next step is to project your future inventory levels. The `planr::light_proj_inv()` function helps you do this. Run this code:

![Light Inventory Projection](/assets/087_light_proj_inv.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 087 Folder)</a></p>

This function takes in the DFU, Period, Demand, Opening stock, and Supply as inputs to **project inventory levels over time by item**. The output is a data frame that contains the projected inventories for each period and DFU.

## Step 4: Creating an Interactive Table for Projected Inventories

To make your projections more interactive and accessible, you can create an interactive table using `reactable` and `reactablefmtr`. I've made a function to automate the process for you based on the `planr`'s awesome documentation. Run this code:

![Interactive Table Code](/assets/087_interactive_table_code.jpg)

![Projected Inventory Table](/assets/087_projected_inventory_table.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 087 Folder)</a></p>

This generates a **beautiful interactive table** where you can filter and sort the projected inventories. Interactive tables make it easier to analyze your data and share insights with your team.

# Conclusion

By using the `planr` package, you can **project inventory levels** with ease, helping you manage your supply chain more effectively. This leads to better decision-making, reduced stockouts, and lower carrying costs.

**But there’s more to mastering supply chain analysis in R.** 

If you would like to **grow your Business Data Science skills with R**, then please read on...

{% include cta_struggles_rtrack.md %}


