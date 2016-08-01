---
layout: post
title:  "Customer Segmentation Part 1: K-Means Clustering"
categories: [Business]
tags: [R-Project, R, Simulation, Data Mining, orderSimulatoR, bikes data set]
image: cannondale_bike.jpg
---



Customer segmentation intro... K-Means is a useful tool for clustering. Unsupervised learning, which means we don't need to have a predictor. Great for exploratory analysis. Can be used to pool customers into marketing groups based on customer preferences.

> __About the Photo:__
> Talk about photo...

## Retrieving Customer Orders

If you'd like to follow along, we will be using the `bikes data set`, which can be retrieved [here](https://github.com/mdancho84/orderSimulatoR/tree/master/data). We'll load the data first using the  `xlsx` package for reading MS Excel files.




{% highlight r %}
library(xlsx)   # Used to read bikes data set
customers <- read.xlsx("./data/bikeshops.xlsx", sheetIndex = 1)
products <- read.xlsx("./data/bikes.xlsx", sheetIndex = 1) 
orders <- read.xlsx("./data/orders.xlsx", sheetIndex = 1) 
{% endhighlight %}

Next, we'll get the data into a usable format, typical of an `SQL` query from an [ERP database](https://en.wikipedia.org/wiki/Enterprise_resource_planning). The following code merges the customers, products and orders data frames using the `dplyr` package.


{% highlight r %}
# Merge into usable order information ------------------------------------------
library(dplyr)
orders.extended <- merge(orders, customers, by.x = "customer.id", by.y="bikeshop.id")
orders.extended <- merge(orders.extended, products, by.x = "product.id", by.y = "bike.id")
orders.extended <- orders.extended %>%
  mutate(price.extended = price * quantity) %>%
  select(order.date, order.id, order.line, bikeshop.name, model,
         quantity, price, price.extended, category1, category2, frame) %>%
  arrange(order.id, order.line)

knitr::kable(head(orders.extended)) # Preview the data
{% endhighlight %}



|order.date | order.id| order.line|bikeshop.name             |model                    | quantity| price| price.extended|category1 |category2     |frame    |
|:----------|--------:|----------:|:-------------------------|:------------------------|--------:|-----:|--------------:|:---------|:-------------|:--------|
|2011-01-07 |        1|          1|Ithaca Mountain Climbers  |Jekyll Carbon 2          |        1|  6070|           6070|Mountain  |Over Mountain |Carbon   |
|2011-01-07 |        1|          2|Ithaca Mountain Climbers  |Trigger Carbon 2         |        1|  5970|           5970|Mountain  |Over Mountain |Carbon   |
|2011-01-10 |        2|          1|Kansas City 29ers         |Beast of the East 1      |        1|  2770|           2770|Mountain  |Trail         |Aluminum |
|2011-01-10 |        2|          2|Kansas City 29ers         |Trigger Carbon 2         |        1|  5970|           5970|Mountain  |Over Mountain |Carbon   |
|2011-01-10 |        3|          1|Louisville Race Equipment |Supersix Evo Hi-Mod Team |        1| 10660|          10660|Road      |Elite Road    |Carbon   |
|2011-01-10 |        3|          2|Louisville Race Equipment |Jekyll Carbon 4          |        1|  3200|           3200|Mountain  |Over Mountain |Carbon   |

## Hypothesis for Customer Trends

A key to customer segmentation is to formulate a hypothesis for what you are looking to cluster. Our hypothesis is that bikeshops purchase bike models based on the bicycle features such as Mountain or Road Bikes, more specific categories (e.g. Elite Road, Endurance Road, Over Mountain, Cross Country Race, etc), frame material (Aluminum or Carbon), and price tier (high/premium or low/affordable). Although we will use bike model as our clustering target, the features will be used for assessing the clusters (more on this later). 

We'll need a unit of measure to cluster on. Logically we can decide to measure quantity purchased or total value of purchases. We'll select quantity purchased because total value can be skewed by the bike unit price. For example, a premium bike can be sold for 10X more than an affordable bike, which can mask buying habits.  

## Manipulating the Data Frame

From our hypothesis, we can formulate a data manipulation plan of attack. We have orders that relate bikeshops to bike models purchased via quantity purchased, but first we'll need to get the data frame into a format conducive to clustering. We have the bike features, but second we'll need to manipulate price into a categorical variables representing high/premium and low/affordable. Last, we'll need to scale the bike model quantities purchased by customer because some customers are much larger than others, which will throw off the clustering algorithm. 

We'll tackle formatting the data frame for clustering first. We need to spread the customers by quantity of bike models purchased. 


{% highlight r %}
# Group by model and various model features, summarize by bike shops by 
# quantity of models purchased
library(tidyr)  # Needed for spread function
customerTrends <- orders.extended %>%
        group_by(bikeshop.name, model, category1, category2, frame, price) %>%
        summarise(total.qty = sum(quantity)) %>%
        spread(bikeshop.name, total.qty)
customerTrends[is.na(customerTrends)] <- 0  # Remove NA's
{% endhighlight %}

Next, we need to convert the unit price to categorical high/low variables. One way to do this is with the `cut2()` function from the `Hmisc` package. We'll segment the price into high/low by median price.


{% highlight r %}
# Convert price to binary high/low category
library(Hmisc)  # Needed for cut2 function
customerTrends$price <- cut2(customerTrends$price, g=2)   
{% endhighlight %}

Some customers are larger than others meaning they purchase higher volumes. This presents a problem with clustering as the measurements need to be on the same scale. Fortunately, we can resolve this issue by converting the customer order quantities to proportion of the total bikes purchased by a customer. The `prop.table()` matrix function provides a convenient way to do this.


{% highlight r %}
# Convert customer purchase quantity to percentage of total quantity
customerTrends.mat <- as.matrix(customerTrends[,-(1:5)])  # Drop first five columns
customerTrends.mat <- prop.table(customerTrends.mat, margin = 2)  # column-wise pct
customerTrends <- cbind(customerTrends[,1:5], as.data.frame(customerTrends.mat))
{% endhighlight %}

The final data frame (first five rows shown below) is now ready for clustering. 


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

## K-Means Clustering

Now we are finally ready to do some k-means clustering to segment our customer-base. Think of clusters as groups in the customer-base. Because this is unsupervised, prior to starting we will need to choose the number of customer groups that are to be detected. The best way to do this is to think about the customer-base and our hypothesis. We believe that there are most likely to be at least four customer groups because of mountain bike vs road bike and premium vs affordable preferences. We also believe there could be more as some customers may not care about price but may still prefer a specific bike category. With this in mind, we will begin clustering.

The code below does the following:

1. __Loads the `cluster` library, which contains the `silhouette()` function.__ [Silhouette](https://en.wikipedia.org/wiki/Silhouette_(clustering)) is a technique in clustering that helps with validating the best cluster groups. The `silhouette()` function allows us to get the average width of silhouettes, which will be used to determine the optimal cluster size.

2. __Converts the `customerTrends` data frame into `kmeansDat.t`.__ The model and features are dropped so the customer columns are all that are left. The data frame is transposed to have the customers as rows and models as columns. The `kmeans()` function requires this format.

3. __Performs `kmeans()` and `silhouette()` on expected clusters.__ From our hypothesis, we expect there to be at least four and at most six groups of customers. This is because customer prefence is expected to vary by price (high/low) and category1 (mountain vs bike). There may be other groupings as well. We set `minClust` = 4 and `maxClust` = 8. Beyond eight segments may be difficult to manage.


{% highlight r %}
library(cluster) # Needed for silhouette function

kmeansDat <- customerTrends[,-(1:5)]  # Extract only quantity columns
kmeansDat.t <- t(kmeansDat)  #Transpose to evaluate products as features in kmeans

# Compute k-means for 4 to 6 cluster centers. 
# Silhouette used to evaluate best k-means selection.
km.out <- list()
sil.out <- list()
x <- vector()
y <- vector()
minClust <- 4      # Select based on minimum number of groups/clusters
maxClust <- 8        # Select based on maximum number of groups/clusters
# Loop to compute kmeans clustering over various clusters, k
set.seed(11)
for (centr in minClust:maxClust) {
        i <- centr-(minClust-1) # relevels start as 1, and increases with centr
        km.out[i] <- list(kmeans(kmeansDat.t, centers = centr, nstart = 50))
        sil.out[i] <- list(silhouette(km.out[[i]][[1]], dist(kmeansDat.t)))
        # Used for plotting silhouette average widths
        x[i] = centr  # Number of centers used for plotting
        y[i] = summary(sil.out[[i]])[[4]]  # Silhouette average width used for plotting
}
{% endhighlight %}

Next, we plot the silhouette average widths for the choice of clusters. The best cluster is the one with the largest silhouette average width, which turns out to be cluster number 5.


{% highlight r %}
# Plot silhouette results to find best number of clusters, closer to 1 is better
library(ggplot2)
ggplot(data = data.frame(x, y), aes(x, y)) + 
  geom_point(size=3) + 
  geom_line() +
  xlab("Number of Cluster Centers") +
  ylab("Silhouette Average Width") +
  ggtitle("Silhouette Average Width as Cluster Center Varies")
{% endhighlight %}

![plot of chunk silhouettePlot](/figure/source/2016-8-7-CustomerSegmentationPt1/silhouettePlot-1.png)

Now that we have the customers segmented using the `kmeans()` function and the optimal number of customer segments using the `silhouette()` function, we can inspect the groups to see if there are any ways to categorize the segments. The code below attaches the kmeans centroids to the bike models and categories for trend inspection. 


{% highlight r %}
# Attach clusters to bike models for trend inspection---------------------------
y.best <- which.max(y)          # Row number of max silhouette value
km.out.best <- km.out[[y.best]] # Get kmeans output of best cluster
custSegmentCntrs <- t(km.out.best$centers)  # Get centroids for groups
colnames(custSegmentCntrs) <- make.names(colnames(custSegmentCntrs))
customerTrends.clustered <- cbind(customerTrends[,1:5], custSegmentCntrs)

# Collect customers from customerTrends data frame-------------------------------
x.best <- x[y.best]             # Number of clusters
custSegments <- list()
custSegmentAvgs <- data.frame()
for (i in 1:x.best) {
  custSegments[i] <- list(customerTrends[, which(names(customerTrends) %in% 
                         names(km.out.best$cluster[km.out.best$cluster == i]))])
}
attach(customerTrends.clustered)  # Allows ordering by column name
{% endhighlight %}

We'll see which customers are in cluster 1 and order by cluster 1's top ten bike models in descending order. We can quickly see that the top 10 models purchased are all in the affordable/low price segment. 


{% highlight r %}
colnames(custSegments[[1]])  # Get Customers in cluster 1
{% endhighlight %}



{% highlight text %}
## [1] "Philadelphia Bike Shop" "San Antonio Bike Shop"
{% endhighlight %}



{% highlight r %}
# Arrange top 10 bike models by cluster in descending order
knitr::kable(head(customerTrends.clustered[order(-X1), ], 10))
{% endhighlight %}



|   |model               |category1 |category2          |frame    |price        |        X1|        X2|        X3|        X4|        X5|
|:--|:-------------------|:---------|:------------------|:--------|:------------|---------:|---------:|---------:|---------:|---------:|
|57 |Slice Ultegra       |Road      |Triathalon         |Carbon   |[ 415, 3500) | 0.0554531| 0.0133703| 0.0000000| 0.0121606| 0.0220771|
|97 |Trigger Carbon 4    |Mountain  |Over Mountain      |Carbon   |[ 415, 3500) | 0.0304147| 0.0158241| 0.0232606| 0.0122949| 0.0102302|
|7  |CAAD12 105          |Road      |Elite Road         |Aluminum |[ 415, 3500) | 0.0270792| 0.0131916| 0.0005274| 0.0127848| 0.0146150|
|5  |Beast of the East 3 |Mountain  |Trail              |Aluminum |[ 415, 3500) | 0.0263331| 0.0018011| 0.0075487| 0.0107917| 0.0056403|
|89 |Trail 1             |Mountain  |Sport              |Aluminum |[ 415, 3500) | 0.0249397| 0.0006901| 0.0055534| 0.0136427| 0.0130605|
|1  |Bad Habit 1         |Mountain  |Trail              |Aluminum |[ 415, 3500) | 0.0229976| 0.0055093| 0.0178429| 0.0121309| 0.0101273|
|26 |F-Si Carbon 4       |Mountain  |Cross Country Race |Carbon   |[ 415, 3500) | 0.0224490| 0.0004230| 0.0087324| 0.0177157| 0.0100258|
|9  |CAAD12 Disc 105     |Road      |Elite Road         |Aluminum |[ 415, 3500) | 0.0209568| 0.0140126| 0.0002637| 0.0159866| 0.0157947|
|81 |Synapse Disc 105    |Road      |Endurance Road     |Aluminum |[ 415, 3500) | 0.0209568| 0.0096063| 0.0007911| 0.0138045| 0.0211219|
|90 |Trail 2             |Mountain  |Sport              |Aluminum |[ 415, 3500) | 0.0203094| 0.0011780| 0.0132727| 0.0114390| 0.0108728|

Next, we'll inspect cluster 2. We can see that the top models are all road bikes primarily in the high-end price range.


{% highlight r %}
colnames(custSegments[[2]])  # Get Customers in cluster 2
{% endhighlight %}



{% highlight text %}
## [1] "Cincinnati Speed"          "Columbus Race Equipment"  
## [3] "Las Vegas Cycles"          "Louisville Race Equipment"
## [5] "San Francisco Cruisers"    "Wichita Speed"
{% endhighlight %}



{% highlight r %}
# Arrange top 10 bike models by cluster in descending order
knitr::kable(head(customerTrends.clustered[order(-X2), ], 10))
{% endhighlight %}



|   |model                          |category1 |category2      |frame    |price        |        X1|        X2|        X3|        X4|        X5|
|:--|:------------------------------|:---------|:--------------|:--------|:------------|---------:|---------:|---------:|---------:|---------:|
|85 |Synapse Hi-Mod Disc Red        |Road      |Endurance Road |Carbon   |[3500,12790] | 0.0074172| 0.0246747| 0.0074352| 0.0068986| 0.0110240|
|55 |Slice Hi-Mod Black Inc.        |Road      |Triathalon     |Carbon   |[3500,12790] | 0.0026882| 0.0234936| 0.0164058| 0.0040345| 0.0135432|
|61 |Supersix Evo Hi-Mod Dura Ace 1 |Road      |Elite Road     |Carbon   |[3500,12790] | 0.0127935| 0.0230529| 0.0056669| 0.0022304| 0.0067977|
|56 |Slice Hi-Mod Dura Ace D12      |Road      |Triathalon     |Carbon   |[3500,12790] | 0.0040816| 0.0229613| 0.0076417| 0.0054133| 0.0102803|
|87 |Synapse Hi-Mod Dura Ace        |Road      |Endurance Road |Carbon   |[3500,12790] | 0.0000000| 0.0216716| 0.0134742| 0.0049662| 0.0089909|
|11 |CAAD12 Red                     |Road      |Elite Road     |Aluminum |[ 415, 3500) | 0.0074172| 0.0211963| 0.0112561| 0.0130376| 0.0228887|
|76 |Synapse Carbon Disc Ultegra    |Road      |Endurance Road |Carbon   |[3500,12790] | 0.0127935| 0.0202393| 0.0079626| 0.0047473| 0.0082738|
|67 |Supersix Evo Ultegra 3         |Road      |Elite Road     |Carbon   |[ 415, 3500) | 0.0108514| 0.0201873| 0.0087333| 0.0132747| 0.0218575|
|64 |Supersix Evo Hi-Mod Utegra     |Road      |Elite Road     |Carbon   |[3500,12790] | 0.0094580| 0.0198191| 0.0087692| 0.0043886| 0.0122587|
|84 |Synapse Hi-Mod Disc Black Inc. |Road      |Endurance Road |Carbon   |[3500,12790] | 0.0053763| 0.0197553| 0.0091677| 0.0031620| 0.0071965|

Inspecting clusters 3, 4 and 5 produce similar results. For brevity, we won't go into the tables. Cluster 3 tends to prefer mountain bikes that are high end. Cluster 4 is very similar to cluster 1 with the majority of bikes in the low-end price range. Cluster 5 is low end road bikes.  

## Recap


