---
layout: post
title:  "Customer Segmentation Part 2: PCA for Segment Visualization"
categories: [Business]
tags: [R-Project, R, Customer Segmentation, PCA, bikes data set]
image: custSegments.jpg
---





This post is the second part in the customer segmentation analysis. The [first post](http://www.mattdancho.com/business/2016/08/07/CustomerSegmentationPt1.html) focused on [_k_-means clustering](https://en.wikipedia.org/wiki/K-means_clustering) in `R` to segment customers into distinct groups based on purchasing habits. This post will utilize [Pricipal Component Analysis](https://en.wikipedia.org/wiki/Principal_component_analysis) (PCA) in `R` as a tool to view customer groups. Because PCA attacks the problem from a different angle than _k_-means, we can get different insights. Let's see what happens when we apply PCA.  


## Table of Contents


  * [What's PCA & How Can It Be Used For Customer Segmentation?](#pca)
  * [Where We Left Off](#left-off)
  * [Applying PCA](#applying-pca)
  * [Visualizing the Results](#visualizing-results)
  * [Conclusions](#conclusions)
  * [Recap](#recap)
  * [Further Reading](#further-reading)

## What's PCA & How Can It Be Used For Customer Segmentation? <a class="anchor" id="pca"></a>

Talk about pca...
[Pricipal Component Analysis: Explained Visually](http://setosa.io/ev/principal-component-analysis/)

[Customer Segmentation in R (Riffing off of @YhatHQ’s Python Post) #rstats](https://rpubs.com/hrbrmstr/customer-segmentation-r)

## Where We Left Off <a class="anchor" id="left-off"></a>

In the [first post](http://www.mattdancho.com/business/2016/08/07/CustomerSegmentationPt1.html), we used _k_-means clustering to analyze the `bikes data set`, a collection of excel files that contains data for bike shops (customers), bikes (products), and sales orders for the bike manufacturer, [_Cannondale_](http://www.cannondale.com/). The bike shops and sales orders are fictional / simulated (see the [orderSimulatoR post](http://www.mattdancho.com/business/2016/07/12/orderSimulatoR.html) for more on this), but the bikes (products) are actual models from _Cannondale's_ website. 

A hypothesis was formed that bike shops purchase bikes based on bike features such as unit price (high end vs affordable), primary category (Mountain vs Road), frame (aluminum vs carbon), etc. The sales orders were combined with the customer and product information and grouped to form a matrix of sales by model and customer. The `kmeans()` function was run on a range of potential clusters, _k_, and the `silhouette()` function from the `cluster` package was used to determine the optimal number of clusters.

#### Follow Along

You can access the data [here](https://github.com/mdancho84/orderSimulatoR/tree/master/data) if you would like to follow along. You'll need to download the following files:

  * `orders.xlsx`: Contains the fictional sales orders for _Cannondale_. Customer.id relates to bike shop.id in the `bikeshops.xlsx` file, and product.id relates to bike.id in the `bikes.xlsx` file.
  * `bikes.xlsx`:  Contains information on products (e.g. bike model, primary category, secondary category, unit price, etc).
  * `bikeshops.xlsx`: Contains information on customers (e.g. customer name and location).

The script to load and configure the data into a customer trends matrix is shown below. 

#### Read the Data

Make sure you have the excel files in a folder named "data" in your current working directory prior to running the script below.


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

#### Manipulate the Data Frames

The output, `customerTrends`, is then used for kmeans clustering.


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
 
#### K-Means Clustering

We used the `kmeans()` function to perform _k_-means clustering. The [_k_-means post]((http://www.mattdancho.com/business/2016/08/07/CustomerSegmentationPt1.html)) goes into great detail on how to select the right number of clusters, which I skipped for brevity. We'll use the groups for $$k = 4$$ and $$k = 5$$ clusters with the PCA analysis. Five clusters was the theoretical best solution, and four clusters was the best solution upon inspection of the bike features for each cluster.


{% highlight r %}
# K-Means Clustering (used later) ----------------------------------------------
set.seed(11) # For reproducibility
km4.out <- kmeans(t(customerTrends[,-(1:5)]), centers = 4, nstart = 50)

set.seed(11) # For reproducibility
km5.out <- kmeans(t(customerTrends[,-(1:5)]), centers = 5, nstart = 50)
{% endhighlight %}

## Applying PCA <a class="anchor" id="applying-pca"></a>

Now, back to our main focus: PCA. Applying PCA is very simple once the data is formatted. We use the `prcomp()` function available in base `R`. It's strongly recommended to scale and center the data (for some reason this is not the default).


{% highlight r %}
# PCA using prcomp() -----------------------------------------------------------
pca <- prcomp(t(customerTrends[,-(1:5)]), scale. = T, center = T) # Perform PCA
{% endhighlight %}

Once PCA is performed, it's a good idea to take a look at the variance explained. The goal of PCA is to reduce the dimensions of the data. PCA does this by transforming the data into dimensions that are orthogonal to the variation. The greater the variance explained, the better the predictive power of the principal component. The `prcomp()` function returns this variance by PC. You can use the `summary()` on `pca` to get the variance explained. Let's take a look at the first nine PC's. 




<iframe src="/figure/source/2016-9-11-CustomerSegmentationPt2/plotly1.html" style="border: none; width: 100%; height: 400px"></iframe>

PC1 and PC2 combined explain 44% of the variance of the model. This is good because the predictive qualities will be good for clustering. Also, notice the steep drop-off between PC2 and PC3. This means the the first two PC's are much more predictive. Adding more PCs beyond PC2 will tend to dilute the cluster detection. Note that it won't always happen that there is a significant drop-off after PC2, and if more PC's explain variance we would need to evaluate them as well. For our community detection problem, we'll use PC1 and PC2 to visualize the clusters.

## Visualizing the Results <a class="anchor" id="visualizing-results"></a>

We'll plot PC1 against PC2 and color the clusters initially using the k-means groups previously created. To do this, we'll first need to get the `pca` data into a data frame that combines the customers with the PC's. Luckily, the `ggfortify` package has a function called `fortify()` that does just that. Once our data is fortified, we create two data frames with the k-means groups added to the end. We'll use these to color the PCA results so we can compare to _k_-means and gain insights. 


{% highlight r %}
# Manipulate data for PCA Analyis ----------------------------------------------
library(ggfortify) # For fortify()
pca.fortify <- fortify(pca) # fortify() gets pca into usable format

# Add col (short for color) column using k=4 and k=5 groups
pca4.dat <- cbind(pca.fortify, col=km4.out$cluster)
pca5.dat <- cbind(pca.fortify, col=km5.out$cluster)
{% endhighlight %}

#### Plotting the PCA Clusters

The code below provides sample `ggplot` scripts to create a general plot, and uses my favorite interactive plotting library, `plotly`, to turn into interactive plots. The scripts used for the next section follow the same general procedure, so I won't show the code for brevity.


{% highlight r %}
# Plotting PC1 and PC2 using ggplot and plotly ---------------------------------
library(ggplot2)
library(plotly)
# Script for plotting k=4
gg2 <- ggplot(pca4.dat) +
  geom_point(aes(x=PC1, y=PC2, col=factor(col), text=rownames(pca4.dat)), size=2) +
  labs(title = "Visualizing K-Means Clusters Against First Two Principal Components") +
  scale_color_brewer(name="", palette = "Set1")
# Use plotly for inteactivity
plotly2 <- ggplotly(gg2, tooltip = c("text", "x", "y")) %>%
  layout(legend = list(x=.9, y=.99))
{% endhighlight %}

#### PCA with K=4 K-Means Cluster Results Grouped by Color

The PCA segmentation shows some interesting results. It appears that there are five clusters as opposed to four. The $$k = 4$$ _k_-means results would not pick this up, because we told it to create segments using four clusters. Maybe your thinking the silhouette analysis from the previous post told us to pick $$k = 5$$. Let's see what happened with the five cluster _k_-means.



<iframe src="/figure/source/2016-9-11-CustomerSegmentationPt2/plotly2.html" style="border: none; width: 100%; height: 550px"></iframe>

#### PCA with K=5 K-Means Cluster Results Grouped by Color

Well, that's not what we thought was going to happen! It looks like Group 2 was incorrectly classified. From the _k_-means post, this actually makes sense: We inspected clusters, and Group 2 and 4 were very similar in their preferences for bikes in the low-end price range. We decided to combine these clusters by switching to $$k = 4$$ clusters.



<iframe src="/figure/source/2016-9-11-CustomerSegmentationPt2/plotly3.html" style="border: none; width: 100%; height: 550px"></iframe>


#### PCA with Groups Adjusted Based on Visual Inspection

What we can do is switch Group 2 (San Antonio Bike Shop & Philladelphia Bike Shop) with the incorrectly classifed Group 4 shops (Denver Bike Shop & Kansas City 29ers). 


{% highlight r %}
# Switch Group 2 Bike Shops with misclassified Bike Shops in Group 4 -----------
pca.final.dat <- pca5.dat
pca.final.dat[rownames(pca.final.dat) %in% 
                c("San Antonio Bike Shop", "Philadelphia Bike Shop"), 128] <- 4
pca.final.dat[rownames(pca.final.dat) %in% 
                c("Denver Bike Shop", "Kansas City 29ers"), 128] <- 2
{% endhighlight %}

And, let's visualize the results. 



<iframe src="/figure/source/2016-9-11-CustomerSegmentationPt2/plotly4.html" style="border: none; width: 100%; height: 550px"></iframe>

Everything looks good, but we need to inspect the new Group 2 preferences to make sure they should truly be a standalone segment. 

#### Group 2 Inspection

It looks like Group 2 prefers low-end mountain bikes.


{% highlight r %}
# Inspect Group 2 Preferences --------------------------------------------------
# Select only groups in group num and perform row-wise average of bike prefs
library(dplyr)
group.num <- 2 # Set group number
group.names <- rownames(pca.final.dat[pca.final.dat$col == group.num, ])
groupTrends <- customerTrends %>%
  select(model:price, match(group.names, names(.))) # Use match() to select column names
group.avg <- apply(groupTrends[6:ncol(groupTrends)], 1, mean) 
groupTrends <- cbind(groupTrends, group.avg) %>%
  arrange(-group.avg) 

knitr::kable(head(groupTrends, 10)) # Top ten products by average group member purchase freq
{% endhighlight %}



|model               |category1 |category2          |frame    |price        | Denver Bike Shop| Kansas City 29ers| group.avg|
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

#### Group 4 Inspection

Let's compare to Group 4. Rerun the previous script changing `group.num` from 2 to 4. We can see that Group 4's preference is similar to Group 2 in that both groups prefer low-end/affordable bikes. However, Group 4's top purchases contain a mixture of Mountain and Road, while Group 2's top purchases are all Mountain.


|model                   |category1 |category2          |frame    |price        | Albuquerque Cycles| Dallas Cycles| Detroit Cycles| Los Angeles Cycles| Minneapolis Bike Shop| New York Cycles| Philadelphia Bike Shop| Phoenix Bi-peds| Portland Bi-peds| Providence Bi-peds| San Antonio Bike Shop| group.avg|
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



## Conclusions <a class="anchor" id="conclusions"></a>

## Recap <a class="anchor" id="recap"></a>

## Further Reading <a class="anchor" id="further-reading"></a>

1. [Pricipal Component Analysis: Explained Visually](http://setosa.io/ev/principal-component-analysis/)



