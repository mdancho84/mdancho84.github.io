---
layout: post
title:  "Customer Segmentation Part 2: PCA for Segment Visualization"
categories: [Business]
tags: [R-Project, R, Customer Segmentation, Community Detection, PCA, prcomp, bikes data set]
image: custSegments2.png
---






This post is the second part in the customer segmentation analysis. The [first post](http://www.mattdancho.com/business/2016/08/07/CustomerSegmentationPt1.html) focused on [_k_-means clustering](https://en.wikipedia.org/wiki/K-means_clustering) in `R` to segment customers into distinct groups based on purchasing habits. This post takes a different approach, using [Pricipal Component Analysis](https://en.wikipedia.org/wiki/Principal_component_analysis) (PCA) in `R` as a tool to view customer groups. Because PCA attacks the problem from a different angle than _k_-means, we can get different insights. We'll compare both the _k_-means results with the PCA visualization. Let's see what happens when we apply PCA.  


## Table of Contents

  * [Why PCA?](#pca)
  * [Where We Left Off](#left-off)
  * [Getting Ready for PCA](#getting-ready)
    * [Getting the Data](#get-data)
    * [Reading the Data](#read-data)
    * [Manipulating the Data](#manipulate-data)
    * [K-Means Clustering](#kmeans)
  * [Applying PCA](#applying-pca)
  * [Visualizing the Results](#visualizing-results)
    * [Plotting the PC's](#plotting)
    * [PCA Viz: K=4 K-Means Grouping](#pca-k4)
    * [PCA Viz: K=5 K-Means Grouping](#pca-k5)
    * [PCA Viz: Visual Inspection Grouping](#visual-inspection)
    * [Group 2 Inspection](#group2)
    * [Group 4 Inspection](#group4)
  * [Conclusions](#conclusions)
  * [Recap](#recap)
  * [Further Reading](#further-reading)

## Why PCA? <a class="anchor" id="pca"></a>

PCA is a dimensionality reduction algorithm: PCA takes your data and decomposes it using transformations into principal components (PC). Each PC is selected in the orthogonal direction that maximizes the linear variance of the data. In essence, PCA is nothing more than an algorithm that takes numeric data in x, y, z coordinates and changes the coordinates to x', y', and z' that maximize the linear variance. A great article on the background behind PCA is [Pricipal Component Analysis: Explained Visually](http://setosa.io/ev/principal-component-analysis/). As the title suggests, the article has great visuals to explain the algorithm. 

How does this help in customer segmentation / community detection? Unlike _k_-means, PCA is not a direct solution. What PCA helps with is visualizing the essence of a data set. Because PCA selects PC's based on the maximum linear variance, we can use the first few PC's to describe a vast majority of the data set without needing to compare and contrast every single feature. By using PC1 and PC2, we can then visualize in 2D and inspect for clusters. We can also combine the results with the _k_-means groups to see what _k_-means detected as compared to the clusters in the PCA visualization.

Before we jump into PCA, it's a good idea to review where we left off in the previous customer segmentation post.

## Where We Left Off <a class="anchor" id="left-off"></a>

In the [first post](http://www.mattdancho.com/business/2016/08/07/CustomerSegmentationPt1.html), we used _k_-means clustering to analyze the `bikes data set`, a collection of excel files that contains data for bike shops (customers), bikes (products), and sales orders for the bike manufacturer, [_Cannondale_](http://www.cannondale.com/). The bike shops and sales orders are fictional / simulated (see the [orderSimulatoR post](http://www.mattdancho.com/business/2016/07/12/orderSimulatoR.html) for more on this), but the bikes (products) are actual models from _Cannondale's_ website. 

A hypothesis was formed that bike shops purchase bikes based on bike features such as unit price (high end vs affordable), primary category (Mountain vs Road), frame (aluminum vs carbon), etc. The sales orders were combined with the customer and product information and grouped to form a matrix of sales by model and customer. The `kmeans()` function was run on a range of potential clusters, _k_, and the `silhouette()` function from the `cluster` package was used to determine the optimal number of clusters.

## Getting Ready for PCA <a class="anchor" id="getting-ready"></a>

Rather than run through the previous post, the sections below can be used to get everthing ready for PCA.

#### Getting the Data <a class="anchor" id="get-data"></a>

You can access the data [here](https://github.com/mdancho84/orderSimulatoR/tree/master/data) if you would like to follow along. You'll need to download the following files:

  * __orders.xlsx__: Contains the fictional sales orders for _Cannondale_. `customer.id` in the __orders.xlsx__ file relates to `bike shop.id` in the __bikeshops.xlsx__ file, and `product.id` in the __orders.xlsx__ file relates to `bike.id` in the __bikes.xlsx__ file.
  
  * __bikes.xlsx__:  Contains information on products (e.g. bike model, primary category, secondary category, unit price, etc). `bike.id` is the primary key.
  
  * __bikeshops.xlsx__: Contains information on customers (e.g. customer name and location). `bikeshop.id` is the primary key. 

The script to load and configure the data into a customer trends matrix is shown below. 

#### Reading the Data <a class="anchor" id="read-data"></a>

This script will read the data. Make sure you have the excel files in a folder named "data" in your current working directory prior to running the script below.


{% highlight r %}
# Read Cannondale orders data --------------------------------------------------
library(xlsx)   # Used to read bikes data set
customers <- read.xlsx2("./data/bikeshops.xlsx", sheetIndex = 1,
                       colClasses = c("numeric", "character", "character",
                                      "character", "character", "numeric"))
products <- read.xlsx2("./data/bikes.xlsx", sheetIndex = 1,
                        colClasses = c("numeric", "character", "character",
                                       "character", "character", "numeric"))
orders <- read.xlsx2("./data/orders.xlsx", sheetIndex = 1, colIndex = 2:7,
                     colClasses = c("numeric", "numeric", "Date", "numeric",
                                    "numeric", "numeric"))
{% endhighlight %}

#### Manipulating the Data <a class="anchor" id="manipulate-data"></a>

The script below combines the `orders`, `customers` and `products` data frames into `orders.extended`, which is a data frame that simulates output we would get from an SQL query of a sales orders database / ERP system. The data is then manipulated to form `customerTrends`, which has the data structured such that the rows contain products and the columns contain purchase quantity (as percentage of total) by customer. The output, `customerTrends`, is then used for _k_-means clustering.


{% highlight r %}
# Combine orders, customers, and products data frames --------------------------
library(dplyr)
orders.extended <- merge(orders, customers, by.x = "customer.id", by.y="bikeshop.id")
orders.extended <- merge(orders.extended, products, by.x = "product.id", by.y = "bike.id")
orders.extended <- orders.extended %>%
  mutate(price.extended = price * quantity) %>%
  select(order.date, order.id, order.line, bikeshop.name, model,
         quantity, price, price.extended, category1, category2, frame) %>%
  arrange(order.id, order.line)

# Group by model & model features, summarize by quantity purchased -------------
library(tidyr)  # For spread function
customerTrends <- orders.extended %>%
  group_by(bikeshop.name, model, category1, category2, frame, price) %>%
  summarise(total.qty = sum(quantity)) %>%
  spread(bikeshop.name, total.qty)
customerTrends[is.na(customerTrends)] <- 0  # Remove NA's

# Convert price to binary high/low category ------------------------------------
library(Hmisc)  # Needed for cut2 function
customerTrends$price <- cut2(customerTrends$price, g=2)

# Convert customer purchase quantity to percentage of total quantity -----------
customerTrends.mat <- as.matrix(customerTrends[,-(1:5)])  # Drop first five columns
customerTrends.mat <- prop.table(customerTrends.mat, margin = 2)  # column-wise pct
customerTrends <- cbind(customerTrends[,1:5], as.data.frame(customerTrends.mat))
{% endhighlight %}

Here's the first 6 rows of `customerTrends`:


{% highlight r %}
knitr::kable(head(customerTrends))
{% endhighlight %}



{% highlight text %}
## Error in kable_markdown(x = structure(c("Albuquerque Cycles", "Ann Arbor Speed", : the table must have a header (column names)
{% endhighlight %}
 
#### K-Means Clustering <a class="anchor" id="kmeans"></a>

We used the `kmeans()` function to perform _k_-means clustering. The [_k_-means post]((http://www.mattdancho.com/business/2016/08/07/CustomerSegmentationPt1.html)) goes into great detail on how to select the right number of clusters, which I skipped for brevity. We'll use the groups for $$k = 4$$ and $$k = 5$$ clusters with the PCA analysis. Five clusters was the theoretical best solution, and four clusters was the best solution upon inspection of the data.


{% highlight r %}
# K-Means Clustering (used later) ----------------------------------------------
set.seed(11) # For reproducibility
km4.out <- kmeans(t(customerTrends[,-(1:5)]), centers = 4, nstart = 50)
{% endhighlight %}



{% highlight text %}
## Error in kmeans(t(customerTrends[, -(1:5)]), centers = 4, nstart = 50): more cluster centers than distinct data points.
{% endhighlight %}



{% highlight r %}
set.seed(11) # For reproducibility
km5.out <- kmeans(t(customerTrends[,-(1:5)]), centers = 5, nstart = 50)
{% endhighlight %}



{% highlight text %}
## Error in kmeans(t(customerTrends[, -(1:5)]), centers = 5, nstart = 50): more cluster centers than distinct data points.
{% endhighlight %}

## Applying PCA <a class="anchor" id="applying-pca"></a>

Now, back to our main focus: PCA. Applying PCA is very simple once the data is formatted. We use the `prcomp()` function available in base `R`. It's strongly recommended to scale and center the data (for some reason this is not the default). Further reading on PCA in `R` can be found [here](https://tgmstat.wordpress.com/2013/11/28/computing-and-visualizing-pca-in-r/).


{% highlight r %}
# PCA using prcomp() -----------------------------------------------------------
pca <- prcomp(t(customerTrends[,-(1:5)]), scale. = T, center = T) # Perform PCA
{% endhighlight %}



{% highlight text %}
## Error in colMeans(x, na.rm = TRUE): 'x' must be numeric
{% endhighlight %}

Once PCA is performed, it's a good idea to take a look at the __variance explained__. As stated before, the goal of PCA is to reduce the dimensions of the data. PCA does this by transforming the data into dimensions that are orthogonal to the variation. The greater the variance explained, the more information that is summarized by the PC. The `prcomp()` function returns this variance by PC. You can use `summary(pca)` to get the variance explained. Let's take a look at the first nine PC's visually. 




















