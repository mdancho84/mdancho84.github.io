---
layout: post
title:  "Customer Segmentation Part 2: PCA for Segment Visualization"
categories: [Business]
tags: [R-Project, R, R-Bloggers, Customer Segmentation, Community Detection, PCA, prcomp, bikes data set, Learn-Marketing, Learn-Machine-Learning]
image: custSegments2.png
---






This post is the second part in the customer segmentation analysis. The [first post](http://www.mattdancho.com/business/2016/08/07/CustomerSegmentationPt1.html) focused on [_k_-means clustering](https://en.wikipedia.org/wiki/K-means_clustering) in `R` to segment customers into distinct groups based on purchasing habits. This post takes a different approach, using [Pricipal Component Analysis](https://en.wikipedia.org/wiki/Principal_component_analysis) (PCA) in `R` as a tool to view customer groups. Because PCA attacks the problem from a different angle than _k_-means, we can get different insights. We'll compare both the _k_-means results with the PCA visualization. Let's see what happens when we apply PCA.  


## 3 Part Series

* [CUSTOMER SEGMENTATION PART 1: K-MEANS CLUSTERING](http://www.business-science.io/business/2016/08/07/CustomerSegmentationPt1.html)
* [CUSTOMER SEGMENTATION PART 2: PCA FOR SEGMENT VISUALIZATION](http://www.business-science.io/business/2016/09/04/CustomerSegmentationPt2.html)
* [CUSTOMER SEGMENTATION PART 3: NETWORK VISUALIZATION](http://www.business-science.io/business/2016/10/01/CustomerSegmentationPt3.html)

## Customer Segmentation Cheat Sheet

We have a cheat sheet that walks the user through the workflow for segmenting customers. You can download it here.

<p class="text-center" style="font-size:30px;">
<a href="/segmentation-cheatsheet.html">Download the Segmentation and Clustering Cheat Sheet</a></p>

<iframe width="100%" height="450px" src="https://www.youtube.com/embed/m20ZKz57c_8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p class="text-center date">10-Minute Overview of Segmentation and Clustering taught in our <a href="https://university.business-science.io/p/ds4b-101-r-business-analysis-r">Business Analysis with R (DS4B 101-R) Course</a></p>


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
customerTrends <- bind_cols(customerTrends[,1:5], as.data.frame(customerTrends.mat))
{% endhighlight %}

Here's the first 6 rows of `customerTrends`:


{% highlight r %}
knitr::kable(head(customerTrends))
{% endhighlight %}



|model               |category1 |category2  |frame    |price        | Albuquerque Cycles| Ann Arbor Speed| Austin Cruisers| Cincinnati Speed| Columbus Race Equipment| Dallas Cycles| Denver Bike Shop| Detroit Cycles| Indianapolis Velocipedes| Ithaca Mountain Climbers| Kansas City 29ers| Las Vegas Cycles| Los Angeles Cycles| Louisville Race Equipment| Miami Race Equipment| Minneapolis Bike Shop| Nashville Cruisers| New Orleans Velocipedes| New York Cycles| Oklahoma City Race Equipment| Philadelphia Bike Shop| Phoenix Bi-peds| Pittsburgh Mountain Machines| Portland Bi-peds| Providence Bi-peds| San Antonio Bike Shop| San Francisco Cruisers| Seattle Race Equipment| Tampa 29ers| Wichita Speed|
|:-------------------|:---------|:----------|:--------|:------------|------------------:|---------------:|---------------:|----------------:|-----------------------:|-------------:|----------------:|--------------:|------------------------:|------------------------:|-----------------:|----------------:|------------------:|-------------------------:|--------------------:|---------------------:|------------------:|-----------------------:|---------------:|----------------------------:|----------------------:|---------------:|----------------------------:|----------------:|------------------:|---------------------:|----------------------:|----------------------:|-----------:|-------------:|
|Bad Habit 1         |Mountain  |Trail      |Aluminum |[ 415, 3500) |          0.0174825|       0.0066445|       0.0081301|        0.0051151|               0.0101523|     0.0128205|        0.0117340|      0.0099206|                0.0062696|                0.0181962|         0.0181504|        0.0016026|          0.0062893|                 0.0075949|            0.0042135|             0.0182648|          0.0086705|               0.0184783|       0.0074074|                    0.0129870|              0.0244898|       0.0112755|                    0.0159151|        0.0108696|          0.0092251|             0.0215054|              0.0026738|              0.0156250|   0.0194175|     0.0059172|
|Bad Habit 2         |Mountain  |Trail      |Aluminum |[ 415, 3500) |          0.0069930|       0.0099668|       0.0040650|        0.0000000|               0.0000000|     0.0170940|        0.0139070|      0.0158730|                0.0031348|                0.0110759|         0.0158456|        0.0000000|          0.0094340|                 0.0000000|            0.0112360|             0.0167428|          0.0173410|               0.0021739|       0.0074074|                    0.0095238|              0.0040816|       0.0190275|                    0.0026525|        0.0108696|          0.0239852|             0.0000000|              0.0026738|              0.0078125|   0.0000000|     0.0000000|
|Beast of the East 1 |Mountain  |Trail      |Aluminum |[ 415, 3500) |          0.0104895|       0.0149502|       0.0081301|        0.0000000|               0.0000000|     0.0042735|        0.0182529|      0.0119048|                0.0094044|                0.0213608|         0.0181504|        0.0016026|          0.0251572|                 0.0000000|            0.0140449|             0.0167428|          0.0086705|               0.0086957|       0.0172840|                    0.0242424|              0.0000000|       0.0126850|                    0.0053050|        0.0108696|          0.0092251|             0.0053763|              0.0000000|              0.0156250|   0.0097087|     0.0000000|
|Beast of the East 2 |Mountain  |Trail      |Aluminum |[ 415, 3500) |          0.0104895|       0.0099668|       0.0081301|        0.0000000|               0.0050761|     0.0042735|        0.0152108|      0.0059524|                0.0094044|                0.0181962|         0.0138289|        0.0000000|          0.0220126|                 0.0050633|            0.0084270|             0.0076104|          0.0086705|               0.0097826|       0.0172840|                    0.0086580|              0.0000000|       0.0232558|                    0.0106101|        0.0155280|          0.0147601|             0.0107527|              0.0026738|              0.0234375|   0.0291262|     0.0019724|
|Beast of the East 3 |Mountain  |Trail      |Aluminum |[ 415, 3500) |          0.0034965|       0.0033223|       0.0000000|        0.0000000|               0.0025381|     0.0042735|        0.0169492|      0.0119048|                0.0000000|                0.0102848|         0.0181504|        0.0032051|          0.0000000|                 0.0050633|            0.0042135|             0.0152207|          0.0202312|               0.0043478|       0.0049383|                    0.0051948|              0.0204082|       0.0162086|                    0.0026525|        0.0201863|          0.0073801|             0.0322581|              0.0000000|              0.0078125|   0.0097087|     0.0000000|
|CAAD Disc Ultegra   |Road      |Elite Road |Aluminum |[ 415, 3500) |          0.0139860|       0.0265781|       0.0203252|        0.0153453|               0.0101523|     0.0000000|        0.0108648|      0.0079365|                0.0094044|                0.0000000|         0.0106598|        0.0112179|          0.0157233|                 0.0278481|            0.0210674|             0.0182648|          0.0375723|               0.0152174|       0.0172840|                    0.0103896|              0.0163265|       0.0126850|                    0.0026525|        0.0139752|          0.0073801|             0.0053763|              0.0026738|              0.0078125|   0.0000000|     0.0098619|
 
#### K-Means Clustering <a class="anchor" id="kmeans"></a>

We used the `kmeans()` function to perform _k_-means clustering. The [_k_-means post]((http://www.mattdancho.com/business/2016/08/07/CustomerSegmentationPt1.html)) goes into great detail on how to select the right number of clusters, which I skipped for brevity. We'll use the groups for $$k = 4$$ and $$k = 5$$ clusters with the PCA analysis. Five clusters was the theoretical best solution, and four clusters was the best solution upon inspection of the data.


{% highlight r %}
# K-Means Clustering (used later) ----------------------------------------------
set.seed(11) # For reproducibility
km4.out <- kmeans(t(customerTrends[,-(1:5)]), centers = 4, nstart = 50)

set.seed(11) # For reproducibility
km5.out <- kmeans(t(customerTrends[,-(1:5)]), centers = 5, nstart = 50)
{% endhighlight %}

## Applying PCA <a class="anchor" id="applying-pca"></a>

Now, back to our main focus: PCA. Applying PCA is very simple once the data is formatted. We use the `prcomp()` function available in base `R`. It's strongly recommended to scale and center the data (for some reason this is not the default). Further reading on PCA in `R` can be found [here](https://tgmstat.wordpress.com/2013/11/28/computing-and-visualizing-pca-in-r/).


{% highlight r %}
# PCA using prcomp() -----------------------------------------------------------
pca <- prcomp(t(customerTrends[,-(1:5)]), scale. = T, center = T) # Perform PCA
{% endhighlight %}

Once PCA is performed, it's a good idea to take a look at the __variance explained__. As stated before, the goal of PCA is to reduce the dimensions of the data. PCA does this by transforming the data into dimensions that are orthogonal to the variation. The greater the variance explained, the more information that is summarized by the PC. The `prcomp()` function returns this variance by PC. You can use `summary(pca)` to get the variance explained. Let's take a look at the first nine PC's visually. 





<iframe src="/figure/source/2016-9-4-CustomerSegmentationPt2/plotly1.html" style="border: none; width: 100%; height: 400px"></iframe>

PC1 and PC2 combined explain 44% of the variance of the data, and there's a steep drop-off between PC2 and PC3. This means that plotting PC's 1 and 2 will give us a reasonably good understanding of the data, and adding more PC's beyond PC2 will result in minimal improvement. Note that it won't always happen that there is a significant drop-off after PC2, and if more PC's explain variance we would need to evaluate them as well. 

## Visualizing the Results <a class="anchor" id="visualizing-results"></a>

We'll plot PC1 and PC2, and we'll color the clusters initially using the k-means groups previously created. To do this, we first need to get the `pca` data into a data frame that combines the customers with the PC's. Luckily, the `ggfortify` package has a function called `fortify()` to do just that. Once our data is fortified, we create two data frames with the k-means groups added to the end so we can group on them. We'll use the _k_-means group to color the PCA results so we can compare to _k_-means and gain insights. 


{% highlight r %}
# Manipulate data for PCA Analyis ----------------------------------------------
library(ggfortify) # For fortify()
pca.fortify <- fortify(pca) # fortify() gets pca into usable format

# Add group (short for color) column using k=4 and k=5 groups
pca4.dat <- cbind(pca.fortify, group=km4.out$cluster)
pca5.dat <- cbind(pca.fortify, group=km5.out$cluster)
{% endhighlight %}

#### Plotting the PC's <a class="anchor" id="plotting"></a>

The script below provides sample `ggplot` scripts to create a general plot for PC1 and PC2. The script uses my favorite interactive plotting library, `plotly`, to turn the `ggplot` results into interactive plots. The scripts used for the next section follow the same general procedure, so I won't show the code for brevity.


{% highlight r %}
# Plotting PC1 and PC2 using ggplot and plotly ---------------------------------
library(ggplot2)
library(plotly)
# Script for plotting k=4
gg2 <- ggplot(pca4.dat) +
  geom_point(aes(x=PC1, y=PC2, col=factor(group), text=rownames(pca4.dat)), size=2) +
  labs(title = "Visualizing K-Means Clusters Against First Two Principal Components") +
  scale_color_brewer(name="", palette = "Set1")
# Use plotly for inteactivity
plotly2 <- ggplotly(gg2, tooltip = c("text", "x", "y")) %>%
  layout(legend = list(x=.9, y=.99))
{% endhighlight %}

#### PCA Viz: K=4 K-Means Grouping <a class="anchor" id="pca-k4"></a>

The PCA segmentation shows some interesting results. It appears that there are five clusters as opposed to four. The $$k = 4$$ _k_-means results would not pick this up, because we selected four clusters. Maybe your thinking that the silhouette analysis from the previous post indicated that we should pick $$k = 5$$, so this is where we went wrong. Let's see what happens with the five cluster _k_-means.



<iframe src="/figure/source/2016-9-4-CustomerSegmentationPt2/plotly2.html" style="border: none; width: 100%; height: 550px"></iframe>

#### PCA Viz: K=5 K-Means Grouping <a class="anchor" id="pca-k5"></a>

Well, that's not what we thought was going to happen! It looks like Group 2 was incorrectly classified. From the _k_-means post, this actually makes sense: We inspected the clusters, and Group 2 and 4 were very similar in their preferences for bikes in the low-end price range. We decided to combine these clusters by switching to $$k = 4$$ clusters. Next, we'll look at clustering based on inspection of the PCA plot.



<iframe src="/figure/source/2016-9-4-CustomerSegmentationPt2/plotly3.html" style="border: none; width: 100%; height: 550px"></iframe>


#### PCA Viz: Visual Inspection Grouping <a class="anchor" id="visual-inspection"></a>

From the PCA visualization, we can see there are two bike shops that do not belong to Group 4. Based on our visual inspection, we can modify the groups (column 128) by switching Group 2 (San Antonio Bike Shop & Philadelphia Bike Shop) with the incorrectly classified Group 4 shops (Denver Bike Shop & Kansas City 29ers). 


{% highlight r %}
# Switch Group 2 Bike Shops with misclassified Bike Shops in Group 4 -----------
pca.final.dat <- pca5.dat
pca.final.dat[rownames(pca.final.dat) %in% 
                c("San Antonio Bike Shop", "Philadelphia Bike Shop"), 128] <- 4
pca.final.dat[rownames(pca.final.dat) %in% 
                c("Denver Bike Shop", "Kansas City 29ers"), 128] <- 2
{% endhighlight %}

And, let's visualize the results. 



<iframe src="/figure/source/2016-9-4-CustomerSegmentationPt2/plotly4.html" style="border: none; width: 100%; height: 550px"></iframe>

Everything looks good, but we need to inspect the newly created Group 2's preferences to make sure they should truly be a standalone customer segment. 


#### Group 2 Inspection <a class="anchor" id="group2"></a>

The script below modifies the `customerTrends` data frame to select only customer columns that are in the group we want to inspect. The script then takes the average of the customer's percent of quantity purchased vs total quantity purchased (the values in the customer columns). The data frame is sorted by most frequently purchased so we can see the group's central tendency. For Group 2, the central tendency is a preference for low-end mountain bikes.


{% highlight r %}
# Inspect Group 2 Preferences --------------------------------------------------
# Select only groups in group num and perform row-wise average of bike prefs
library(dplyr)
group.num <- 2 # Set group number
group.names <- rownames(pca.final.dat[pca.final.dat$group == group.num, ])
groupTrends <- customerTrends %>%
  select(model:price, match(group.names, names(.))) # Use match() to select column names
group.avg <- apply(groupTrends[6:ncol(groupTrends)], 1, mean) # Take average of values
groupTrends <- bind_cols(groupTrends, as_data_frame(group.avg)) %>%
  arrange(-group.avg) 

knitr::kable(head(groupTrends, 10)) # Top ten products by group avg. pct. purchased
{% endhighlight %}



|model               |category1 |category2          |frame    |price        | Denver Bike Shop| Kansas City 29ers|     value|
|:-------------------|:---------|:------------------|:--------|:------------|----------------:|-----------------:|---------:|
|Catalyst 2          |Mountain  |Sport              |Aluminum |[ 415, 3500) |        0.0256410|         0.0187266| 0.0221838|
|Trail 5             |Mountain  |Sport              |Aluminum |[ 415, 3500) |        0.0204259|         0.0216076| 0.0210168|
|F-Si Carbon 4       |Mountain  |Cross Country Race |Carbon   |[ 415, 3500) |        0.0165146|         0.0247767| 0.0206456|
|Scalpel 29 4        |Mountain  |Cross Country Race |Aluminum |[ 415, 3500) |        0.0186875|         0.0210314| 0.0198595|
|Catalyst 4          |Mountain  |Sport              |Aluminum |[ 415, 3500) |        0.0199913|         0.0184385| 0.0192149|
|F-Si 1              |Mountain  |Cross Country Race |Aluminum |[ 415, 3500) |        0.0204259|         0.0175742| 0.0190000|
|Trail 4             |Mountain  |Sport              |Aluminum |[ 415, 3500) |        0.0152108|         0.0218957| 0.0185532|
|Trail 1             |Mountain  |Sport              |Aluminum |[ 415, 3500) |        0.0204259|         0.0164218| 0.0184238|
|Trail 2             |Mountain  |Sport              |Aluminum |[ 415, 3500) |        0.0208605|         0.0158456| 0.0183530|
|Beast of the East 1 |Mountain  |Trail              |Aluminum |[ 415, 3500) |        0.0182529|         0.0181504| 0.0182017|

#### Group 4 Inspection <a class="anchor" id="group4"></a>

Let's compare to Group 4. Rerun the previous script changing `group.num` from 2 to 4. We can see that Group 4's preference is similar to Group 2 in that both groups prefer low-end/affordable bikes. However, Group 4's top purchases contain a mixture of Mountain and Road, while Group 2's top purchases are exclusively Mountain. It appears there is a difference!


|model                   |category1 |category2          |frame    |price        | Albuquerque Cycles| Dallas Cycles| Detroit Cycles| Los Angeles Cycles| Minneapolis Bike Shop| New York Cycles| Philadelphia Bike Shop| Phoenix Bi-peds| Portland Bi-peds| Providence Bi-peds| San Antonio Bike Shop|     value|
|:-----------------------|:---------|:------------------|:--------|:------------|------------------:|-------------:|--------------:|------------------:|---------------------:|---------------:|----------------------:|---------------:|----------------:|------------------:|---------------------:|---------:|
|F-Si 2                  |Mountain  |Cross Country Race |Aluminum |[ 415, 3500) |          0.0174825|     0.0256410|      0.0119048|          0.0471698|             0.0258752|       0.0246914|              0.0040816|       0.0183228|        0.0186335|          0.0129151|             0.0215054| 0.0207476|
|Slice Ultegra           |Road      |Triathalon         |Carbon   |[ 415, 3500) |          0.0104895|     0.0085470|      0.0099206|          0.0251572|             0.0076104|       0.0049383|              0.0571429|       0.0133897|        0.0248447|          0.0092251|             0.0537634| 0.0204572|
|CAAD12 Disc 105         |Road      |Elite Road         |Aluminum |[ 415, 3500) |          0.0139860|     0.0085470|      0.0297619|          0.0157233|             0.0136986|       0.0222222|              0.0204082|       0.0176180|        0.0310559|          0.0092251|             0.0215054| 0.0185229|
|Catalyst 3              |Mountain  |Sport              |Aluminum |[ 415, 3500) |          0.0314685|     0.0427350|      0.0178571|          0.0188679|             0.0152207|       0.0024691|              0.0040816|       0.0140944|        0.0186335|          0.0202952|             0.0161290| 0.0183502|
|F-Si Carbon 4           |Mountain  |Cross Country Race |Carbon   |[ 415, 3500) |          0.0104895|     0.0128205|      0.0238095|          0.0188679|             0.0152207|       0.0271605|              0.0448980|       0.0183228|        0.0139752|          0.0129151|             0.0000000| 0.0180436|
|Synapse Carbon Disc 105 |Road      |Endurance Road     |Carbon   |[ 415, 3500) |          0.0139860|     0.0170940|      0.0099206|          0.0125786|             0.0304414|       0.0271605|              0.0285714|       0.0091614|        0.0170807|          0.0166052|             0.0107527| 0.0175775|
|CAAD8 Sora              |Road      |Elite Road         |Aluminum |[ 415, 3500) |          0.0069930|     0.0213675|      0.0099206|          0.0188679|             0.0273973|       0.0098765|              0.0040816|       0.0204369|        0.0217391|          0.0202952|             0.0215054| 0.0165892|
|Synapse Disc 105        |Road      |Endurance Road     |Aluminum |[ 415, 3500) |          0.0279720|     0.0213675|      0.0019841|          0.0094340|             0.0121766|       0.0271605|              0.0204082|       0.0155039|        0.0093168|          0.0129151|             0.0215054| 0.0163404|
|CAAD12 105              |Road      |Elite Road         |Aluminum |[ 415, 3500) |          0.0069930|     0.0299145|      0.0277778|          0.0188679|             0.0106545|       0.0098765|              0.0326531|       0.0084567|        0.0093168|          0.0018450|             0.0215054| 0.0161692|
|Trigger Carbon 4        |Mountain  |Over Mountain      |Carbon   |[ 415, 3500) |          0.0069930|     0.0085470|      0.0099206|          0.0125786|             0.0060883|       0.0197531|              0.0285714|       0.0119803|        0.0124224|          0.0239852|             0.0322581| 0.0157362|


## Conclusion <a class="anchor" id="conclusions"></a>

PCA can be a valuable cross-check to _k_-means for customer segmentation. While _k_-means got us close to the true customer segments, visually evaluating the groups using PCA helped identify a different customer segment, one that the $$k = 5$$ _k_-means solution did not pick up.  

## Recap <a class="anchor" id="recap"></a>

This post expanded on our customer segmentation methodology by using __PCA to visually examine the clusters__. We manipulated our sales order data to obtain a format that relates products to customer purchases. We used the `prcomp()` function to perform PCA on our formatted data frame. We fortified the PCA output using the `fortify()` function from the `ggfortify` package, which enabled us to plot the PC's by customer. We added the _k_-means cluster groups to the fortified data frame for visual inspection of the _k_-means clusters. We saw that differences can arise because _k_-means programatically determines the clusters while PCA allows us to visually inspect the clusters. The end result was an improvement to the customer segmentation by attacking the community detection problem from two different angles and combining the results! 

## Further Reading <a class="anchor" id="further-reading"></a>

1. [Pricipal Component Analysis: Explained Visually](http://setosa.io/ev/principal-component-analysis/): This article is an excellent place to start for those that are new to PCA or those that would like to understand the details.

2. [Computing and Visualizing PCA in R](https://tgmstat.wordpress.com/2013/11/28/computing-and-visualizing-pca-in-r/): This is a great article that takes PCA to the next level in `R` with biplots, predictions, and the caret package.  


## Business Science University  <a class="anchor" id="bsu"></a>

Enjoy data science for business? We do too. This is why we created [Business Science University](https://university.business-science.io/) where we teach you how to do __Data Science For Busines (#DS4B)__ just like us!

Our first [DS4B course (HR 201)](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover) is now available! 

#### Who is this course for?

Anyone that is interested in applying data science in a business context (we call this DS4B). All you need is basic `R`, `dplyr`, and `ggplot2` experience. If you understood this article, you are qualified. 

#### What do you get it out of it?


You learn everything you need to know about how to apply data science in a business context:

- __Using ROI-driven data science taught from consulting experience!__

- __Solve high-impact problems__ (e.g. $15M Employee Attrition Problem)

- __Use advanced, bleeding-edge machine learning algorithms__ (e.g. H2O, LIME)

- __Apply systematic data science frameworks__ (e.g. [Business Science Problem Framework](https://university.business-science.io/courses/246843/lectures/5029853))

>__"If you've been looking for a program like this, I'm happy to say it's finally here! This is what I needed when I first began data science years ago. It's why I created Business Science University."__
>
>__Matt Dancho, Founder of Business Science__


### DS4B Virtual Workshop: Predicting Employee Attrition <a class="anchor" id="vw"></a>

Did you know that __an organization that loses 200 high performing employees per year is essentially losing $15M/year in lost productivity__? Many organizations don't realize this because it's an indirect cost. It goes unnoticed. What if you could use data science to predict and explain turnover in a way that managers could make better decisions and executives would see results? You will learn the tools to do so in our Virtual Workshop. Here's an example of a Shiny app you will create.

![HR 301 Shiny Application: Employee Prediction](/img/hr_301_app.png) 
<p class="text-center date">Shiny App That Predicts Attrition and Recommends Management Strategies, Taught in HR 301</p> 


Our first [__Data Science For Business (HR 201) Virtual Workshop__](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover) teaches you how to solve this employee attrition problem in four courses that are fully integrated:

* HR 201: Predicting Employee Attrition with `h2o` and `lime`
* HR 301: Building A `Shiny` Web Application
* HR 302: Data Story Telling With `RMarkdown` Reports and Presentations
* HR 303: Building An R Package For Your Organization, `tidyattrition`

The Virtual Workshop is intended for __intermediate and advanced R users__. It's __code intensive (like these articles)__, but also teaches you fundamentals of data science consulting including CRISP-DM and the Business Science Problem Framework. __The content bridges the gap between data science and the business, making you even more effective and improving your organization in the process.__

Interested? [__Enroll in Business Science University today!__](https://university.business-science.io/)
