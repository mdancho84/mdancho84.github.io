---
layout: post
title:  "orderSimulatoR: Simulate Orders for Business Analytics"
categories: [R, Simulation, Data Mining]
tags: [orderSimulatoR, bikes data set]
image: cannondale_bike.jpg
---

In this post, we will be discussing a new project I've been working on which enables customer order data sets to be created in `R`. The basic premise is to simulate data that you'd get from a SQL query of an ERP system, which can be used to simulate busin

. The scripts and the data sets can be accessed at my [`orderSimulatoR` GitHub repository](https://github.com/mdancho84/orderSimulatoR). I'll go through the basic steps to create an order data set that combines customers and products. In future posts, I'll go through some data mining and visualizations to show how you can use order data to expose trends in `R`.



## Getting Started

Prior to starting, you'll need three `data frames`:

1. Customers
2. Products
3. Customer-Product Interactions

I'll briefly go through each using the bikes data set. The code below loads the three `data frames`. If you're following along, you can access the [excel files here]().




{% highlight r %}
library(xlsx)   # Used to read bikes data set
customers <- read.xlsx("./data/bikeshops.xlsx", sheetIndex = 1)
products <- read.xlsx("./data/bikes.xlsx", sheetIndex = 1) 
customerProductProbs <- read.xlsx("./data/customer_product_interactions.xlsx", 
                                  sheetIndex = 1, 
                                  startRow = 15)
customerProductProbs <- customerProductProbs[,-(2:12)]  # Remove unnecessary columns
{% endhighlight %}

### Customers

The customers for the example case are bikeshops scattered throughout the country. I've included `id`, `name`, `city` and `state`. The id is important and must be in the first column for the `orderSimulatoR` scripts to work. The other features are up to you. Feel free to get creative when designing your customers by adding features such as region, size, type, etc that would normally be found in a CRM / ERP system. While features beyond the `id` are not required for the scripts, it's a good idea to add them now for your data mining later. The first six rows are shown below.


{% highlight r %}
library(knitr)
kable(head(customers))
{% endhighlight %}



| bikeshop.id|bikeshop.name                |bikeshop.city |bikeshop.state |
|-----------:|:----------------------------|:-------------|:--------------|
|           1|Pittsburgh Mountain Machines |Pittsburgh    |PA             |
|           2|Ithaca Mountain Climbers     |Ithaca        |NY             |
|           3|Columbus Race Equipment      |Columbus      |OH             |
|           4|Detroit Cycles               |Detroit       |MI             |
|           5|Cincinnati Speed             |Cincinnati    |OH             |
|           6|Louisville Race Equipment    |Louisville    |KY             |

### Products

The products for the example case are bicycles made by [Cannondale](http://www.cannondale.com/en/USA), a premier cycle manufacturer. I've included the `id` and several other features I found on the website including `model`, `category1` (Road, Mountain), `category2` (Elite Road, Endurance Road, etc), `frame` (Carbon, Aluminum), and price. Again, `id` is the most important and must be in the first column for the scripts to work. As with customers, get creative with the features. We'll use these when developing the product-customer interactions, which creates the trends that we'll data mine. The first six products are shown below.


{% highlight r %}
kable(head(products))
{% endhighlight %}



| bike.id|model                          |category1 |category2  |frame  | price|
|-------:|:------------------------------|:---------|:----------|:------|-----:|
|       1|Supersix Evo Black Inc.        |Road      |Elite Road |Carbon | 12790|
|       2|Supersix Evo Hi-Mod Team       |Road      |Elite Road |Carbon | 10660|
|       3|Supersix Evo Hi-Mod Dura Ace 1 |Road      |Elite Road |Carbon |  7990|
|       4|Supersix Evo Hi-Mod Dura Ace 2 |Road      |Elite Road |Carbon |  5330|
|       5|Supersix Evo Hi-Mod Utegra     |Road      |Elite Road |Carbon |  4260|
|       6|Supersix Evo Red               |Road      |Elite Road |Carbon |  3940|

### Customer-Product Interactions

The customer-products interactions is a matrix that links the probability of a customer purchasing a product. The scripts use this matrix to assign products to orders. Development of the probabilities are critical as these will be what create the customer trends in the data. It's a good idea to check out the excel spreadsheet, `customer_product_interactions.xlsx`, which goes into detail on how to add trends into the customer-product interaction probabilities. For the bikes data set, the customers each had a preference for bike style (Road, Mountain, or Any) and a price range (high, medium, and low). The excel functions assign various probabilities based on how the customer preferences match the product features. A few important points: 

1. Product id must be the first column
2. All subsequent columns should be the customers in order of customer id from 1 to the last customer id.
3. Each customer column should sum to 1.0, as this is the product probability density for each customer.

The customer product interactions are shown for the first five customers and products.


{% highlight r %}
kable(head(round(customerProductProbs[,1:6], 3), 5))
{% endhighlight %}



| bike.id| customer.id.1| customer.id.2| customer.id.3| customer.id.4| customer.id.5|
|-------:|-------------:|-------------:|-------------:|-------------:|-------------:|
|       1|         0.004|          0.01|         0.017|         0.013|         0.017|
|       2|         0.004|          0.01|         0.017|         0.013|         0.017|
|       3|         0.004|          0.01|         0.017|         0.013|         0.017|
|       4|         0.010|          0.01|         0.017|         0.013|         0.017|
|       5|         0.010|          0.01|         0.017|         0.013|         0.017|

## Creating Customer Orders

Once the customer, product and customer-product interaction data frames are finished, you are ready to create orders. The first thing you'll need is to load the scripts. 



{% highlight r %}
source("./scripts/createOrdersAndLines.R")
source("./scripts/createDatesFromOrders.R")
source("./scripts/assignCustomersToOrders.R")
source("./scripts/assignProductsToCustomerOrders.R")
source("./scripts/createProductQuantities.R")
{% endhighlight %}

### Step 1: Create Orders and Lines

First, we'll create the orders and lines using the `createOrdersAndLines` function. The parameters are number of orders `n`, max number of lines `maxLines`, and `rate`, which affects the distribution of lines on an order (see the README.md on github for a further discussion on the `rate` parameter). The output is a 2000 order data frame with 15,644 total rows for each product purchase. Some orders have more lines (more product purchases) and others have less (as dictated by the `rate` parameter). One note worth mentioning is that the `maxLines` cannot exceed the number of products (otherwise an order would have more lines than products available which does not make sense).


{% highlight r %}
orders <- orders <- createOrdersAndLines(n = 2000, maxLines = 30, rate = 1)

# Various order attributes 
length(unique(orders$order.id)) # Number of orders
{% endhighlight %}



{% highlight text %}
## [1] 2000
{% endhighlight %}



{% highlight r %}
length(orders$order.line)       # Total number of lines
{% endhighlight %}



{% highlight text %}
## [1] 15644
{% endhighlight %}



{% highlight r %}
kable(orders[orders$order.id %in% c(1,2,3),])    # First 3 orders
{% endhighlight %}



| order.id| order.line|
|--------:|----------:|
|        1|          1|
|        1|          2|
|        2|          1|
|        2|          2|
|        3|          1|
|        3|          2|
|        3|          3|
|        3|          4|
|        3|          5|

### Step 2: Add Dates to the Orders

Orders typically have a date recorded so the orders can be tracked by time period. As such, we'll add dates according the distribution of orders in a given year using the `createDatesFromOrders` function. We'll have some growth over the years given by the `yearlyOrderDist` distibution. Note in year 4 there is a slight decrease in orders. However, the trend continues in year 5. The `startYear` tells the script to create orders spanning from 2011 to 2015 (i.e. the length of the `yearlyOrderDist`). As shown below, we now have dates added according to our distribution.


{% highlight r %}
orders <- createDatesFromOrders(orders, 
                                startYear = 2011, 
                                yearlyOrderDist = c(.16, .18, .22, .20, .24))
kable(head(orders))
{% endhighlight %}



| order.id| order.line|order.date |
|--------:|----------:|:----------|
|        1|          1|2011-01-07 |
|        1|          2|2011-01-07 |
|        2|          1|2011-01-10 |
|        2|          2|2011-01-10 |
|        3|          1|2011-01-10 |
|        3|          2|2011-01-10 |



{% highlight r %}
kable(tail(orders))
{% endhighlight %}



|      | order.id| order.line|order.date |
|:-----|--------:|----------:|:----------|
|15639 |     2000|          3|2015-12-25 |
|15640 |     2000|          4|2015-12-25 |
|15641 |     2000|          5|2015-12-25 |
|15642 |     2000|          6|2015-12-25 |
|15643 |     2000|          7|2015-12-25 |
|15644 |     2000|          8|2015-12-25 |

### Step 3: Assign Customers to Orders

Next, we'll assign customers to orders using the `assignCustomersToOrders` function. The parameters needed are the `orders` and `customers` data frames, and the `rate`, which is a parameter that controlls the distribution of orders to customers. The below orders now have dates.  


{% highlight r %}
orders <- assignCustomersToOrders(orders, customers, rate = 0.8)
kable(head(orders))
{% endhighlight %}



| order.id| order.line|order.date | customer.id|
|--------:|----------:|:----------|-----------:|
|        1|          1|2011-01-07 |           2|
|        1|          2|2011-01-07 |           2|
|        2|          1|2011-01-10 |          10|
|        2|          2|2011-01-10 |          10|
|        3|          1|2011-01-10 |           6|
|        3|          2|2011-01-10 |           6|

### Step 4: Assign Products to Orders Lines

In step 4, we'll add the products to the orders using the customer-product interaction table. Keep in mind that this is the critical step where a well-thought-out customer-product interaction table will allow us to uncover deep trends and insights into customer behavior.


{% highlight r %}
orders <- assignProductsToCustomerOrders(orders, customerProductProbs)
kable(head(orders))
{% endhighlight %}



| order.id| order.line|order.date | customer.id| product.id|
|--------:|----------:|:----------|-----------:|----------:|
|        1|          1|2011-01-07 |           2|         63|
|        1|          2|2011-01-07 |           2|         55|
|        2|          1|2011-01-10 |          10|         71|
|        2|          2|2011-01-10 |          10|          7|
|        3|          1|2011-01-10 |           6|          6|
|        3|          2|2011-01-10 |           6|         82|

### Step 5: Assign Quantities to Order Lines

In the last step, we assign quantities to the order lines. The `maxQty` parameter limits the number of products on a order line. The `rate` parameter controls the probability for line quantites. A value of 3 places an 83.5% probability on a line quantity of 1, whereas a line quantity of 10 has a 0.08% probability. 


{% highlight r %}
orders <- createProductQuantities(orders, maxQty = 10, rate = 3)
kable(head(orders))
{% endhighlight %}



| order.id| order.line|order.date | customer.id| product.id| quantity|
|--------:|----------:|:----------|-----------:|----------:|--------:|
|        1|          1|2011-01-07 |           2|         63|        1|
|        1|          2|2011-01-07 |           2|         55|        1|
|        2|          1|2011-01-10 |          10|         71|        1|
|        2|          2|2011-01-10 |          10|          7|        1|
|        3|          1|2011-01-10 |           6|          6|        1|
|        3|          2|2011-01-10 |           6|         82|        1|

## Joining Orders with Customers and Products

The orders table alone does not give us much information. For instance, we don't know the names of the customers, the products purchased, or the sales values. Let's combine some of the tables.


{% highlight r %}
orders.extended <- merge(orders, customers, by.x = "customer.id", by.y="bikeshop.id")
orders.extended <- merge(orders.extended, products, by.x = "product.id", by.y = "bike.id")

library(dplyr)
orders.extended <- orders.extended %>%
        mutate(price.extended = price * quantity) %>%
        select(order.date, order.id, order.line, bikeshop.name, model, 
               quantity, price, price.extended, category1, category2, frame) %>%
        arrange(order.id, order.line)

kable(head(orders.extended))
{% endhighlight %}



|order.date | order.id| order.line|bikeshop.name             |model                  | quantity| price| price.extended|category1 |category2          |frame    |
|:----------|--------:|----------:|:-------------------------|:----------------------|--------:|-----:|--------------:|:---------|:------------------|:--------|
|2011-01-07 |        1|          1|Ithaca Mountain Climbers  |Scalpel 29 Carbon 2    |        1|  5330|           5330|Mountain  |Cross Country Race |Carbon   |
|2011-01-07 |        1|          2|Ithaca Mountain Climbers  |Scalpel-Si Black Inc.  |        1| 12790|          12790|Mountain  |Cross Country Race |Carbon   |
|2011-01-10 |        2|          1|Kansas City 29ers         |F-Si 1                 |        1|  2340|           2340|Mountain  |Cross Country Race |Aluminum |
|2011-01-10 |        2|          2|Kansas City 29ers         |Supersix Evo Ultegra 3 |        1|  3200|           3200|Road      |Elite Road         |Carbon   |
|2011-01-10 |        3|          1|Louisville Race Equipment |Supersix Evo Red       |        1|  3940|           3940|Road      |Elite Road         |Carbon   |
|2011-01-10 |        3|          2|Louisville Race Equipment |Habit Carbon 1         |        1|  7460|           7460|Mountain  |Trail              |Carbon   |

Great. Now this finally looks like orders data that could be retrieved from an ERP system. We are ready to start visualizing and data mining. The last part of this post will go into some brief visualizations for data exploration.

## Exploring the Orders

If you've followed along to this point, we have just created the orders from the `bikes data set`. Now, we can have some fun! Let's examine the data set.


{% highlight r %}
library(plotly)
library(lubridate)
salesByYear <- orders.extended %>%
  group_by(year = year(order.date)) %>%
  summarize(total.sales = sum(price.extended))

g <- ggplot(salesByYear, aes(x=year, y=total.sales)) +
  geom_bar(stat="identity")
g
{% endhighlight %}

![plot of chunk unnamed-chunk-15](figure/source/2016-7-12-orderSimulatoR/unnamed-chunk-15-1.png)

{% highlight r %}
# set.seed(100)
# d <- diamonds[sample(nrow(diamonds), 1000), ]
# plot_ly(d, x = carat, y = price, text = paste("Clarity: ", clarity),
#         mode = "markers", color = carat, size = carat)
{% endhighlight %}


## Recap
