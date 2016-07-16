---
layout: post
title:  "orderSimulatoR: Simulate Orders for Business Analytics"
categories: [Business]
tags: [R, Simulation, Data Mining, orderSimulatoR, bikes data set]
image: cannondale_bike.jpg
---

In this post, we will be discussing `orderSimulatoR`, a new project that I've been working on, which enables __fast and easy `R` order simulation for customer and product learning__. The basic premise is to simulate data that you'd retrieve from a `SQL` query of an ERP system. The data can then be merged with products and customers tables to data mine. I'll go through the basic steps to create an order data set that combines customers and products. In future posts, I'll go through some data mining and visualizations to show how you can use order data to expose trends in `R`.


> __About the Photo:__
> No, this is not my bike (I wish!) I own a Cannonadale, but mine is in a much lower price range. The `orderSimulatoR` scripts were used to create the `bikes data set`. The orders (output) are simulated orders for the bicycle manufacturer, Cannondale. The bicycle in the photo is one of Cannondale's top-of-the-line cross-country mountain bikes, the Scalpel. 



## Table of Contents

  * [Why orderSimulatoR?](#why)
  * [Getting Started](#getting-started)
    * [Customers](#customers)
    * [Products](#products)
    * [Customer-Product Interactions](#customer-product-interactions)
  * [Creating Customer Orders](#creating-customer-orders)
    * [Step 1: Create Orders and Lines](#step1)
    * [Step 2: Add Dates to the Orders](#step2)
    * [Step 3: Assign Customers to Orders](#step3)
    * [Step 4: Assign Products to Order Lines](#step4)
    * [Step 5: Assign Quantities to Order Lines](#step5)
  * [Joining Orders with Customers and Products](#joining-orders)
  * [Exploring the Orders](#exploring-orders)
  * [Recap](#recap)

## Why orderSimulatoR? <a class="anchor" id="why"></a>

It's very difficult to create custom order data for data mining, visualization, trending, etc. I've searched for good data sets, and I came to the conclusion that I'm better off creating my own orders data for messing around with on my blog. In the process, I made an algorithm to simulate the orders. The algorithm is publicly available so others can use to simulate orders for customers and products in any industry/market. The scripts and the data sets can be accessed at the [`orderSimulatoR` GitHub repository](https://github.com/mdancho84/orderSimulatoR).

## Getting Started <a class="anchor" id="getting-started"></a>

Prior to starting, you'll need three `data frames`:

1. Customers
2. Products
3. Customer-Product Interactions

I'll briefly go through each using the `bikes data set`. The code below loads the three `data frames`. If you're following along, you can access the [excel files here](https://github.com/mdancho84/orderSimulatoR/tree/master/data). Alternatively, you can generate your own data frames of customers, products and customer-production interactions. Note that the `orders.xlsx` file is what we will be generating in data frame form.




{% highlight r %}
library(xlsx)   # Used to read bikes data set
customers <- read.xlsx("./data/bikeshops.xlsx", sheetIndex = 1)
products <- read.xlsx("./data/bikes.xlsx", sheetIndex = 1) 
customerProductProbs <- read.xlsx("./data/customer_product_interactions.xlsx", 
                                  sheetIndex = 1, 
                                  startRow = 15)
customerProductProbs <- customerProductProbs[,-(2:12)]  # Remove unnecessary columns
{% endhighlight %}

### Customers <a class="anchor" id="customers"></a>

The customers for the example case are bike shops scattered throughout the United States. I've included `id`, `name`, `city` and `state`. The `id` is important and must be in the first column for the `orderSimulatoR` scripts to work. The other features are up to you. Feel free to get creative when designing your customers by adding features such as region, size, type, etc that would normally be found in a CRM / ERP system. While features beyond the `id` are not required for the scripts, it's a good idea to add them now for data mining later. The first six customer records are shown below.


{% highlight r %}
library(knitr)
kable(head(customers))
{% endhighlight %}



| bikeshop.id|bikeshop.name                |bikeshop.city |bikeshop.state | latitude| longitude|
|-----------:|:----------------------------|:-------------|:--------------|--------:|---------:|
|           1|Pittsburgh Mountain Machines |Pittsburgh    |PA             | 40.44062| -79.99589|
|           2|Ithaca Mountain Climbers     |Ithaca        |NY             | 42.44396| -76.50188|
|           3|Columbus Race Equipment      |Columbus      |OH             | 39.96118| -82.99879|
|           4|Detroit Cycles               |Detroit       |MI             | 42.33143| -83.04575|
|           5|Cincinnati Speed             |Cincinnati    |OH             | 39.10312| -84.51202|
|           6|Louisville Race Equipment    |Louisville    |KY             | 38.25267| -85.75846|

### Products <a class="anchor" id="products"></a>

The products for the example case are road and mountain bikes made by [Cannondale](http://www.cannondale.com/en/USA), a premier bicycle manufacturer. I've included the `id` and several other features I found on the website including `model`, `category1` (Road, Mountain), `category2` (Elite Road, Endurance Road, etc), `frame` (Carbon, Aluminum), and price. Again, `id` is the most important feature and must be in the first column for the scripts to work. As with customers, get creative with the features. We'll use these when developing the product-customer interactions, which creates the trends that we'll data mine. The first six products are shown below.


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

### Customer-Product Interactions <a class="anchor" id="customer-product-interactions"></a>

The customer-products interactions is a matrix that links the probability of a customer purchasing each product. The scripts use this matrix to assign products to orders. The probabilities are critical as these will be what create the customer trends in the data. It's a good idea to check out the excel spreadsheet, `customer_product_interactions.xlsx`, which has detailed notes on how to add trends into the customer-product interactions. For the bikes data set, the customers each had a preference for bike style (Road, Mountain, or Any) and a price range (high, medium, and low). The excel functions assign various probabilities based on how the customer preferences match the product features. A few important points: 

1. Product id must be the first column
2. All subsequent columns should be the customers in order of customer id from 1 to the last customer id.
3. Each customer column should sum to 1.0, as this is the product probability density for each customer.

The customer product interactions are shown for the first six customers and products.


{% highlight r %}
kable(round(customerProductProbs[1:6, 1:6], 3))
{% endhighlight %}



| bike.id| customer.id.1| customer.id.2| customer.id.3| customer.id.4| customer.id.5|
|-------:|-------------:|-------------:|-------------:|-------------:|-------------:|
|       1|         0.004|          0.01|         0.017|         0.013|         0.017|
|       2|         0.004|          0.01|         0.017|         0.013|         0.017|
|       3|         0.004|          0.01|         0.017|         0.013|         0.017|
|       4|         0.010|          0.01|         0.017|         0.013|         0.017|
|       5|         0.010|          0.01|         0.017|         0.013|         0.017|
|       6|         0.010|          0.01|         0.017|         0.013|         0.017|


## Creating Customer Orders <a class="anchor" id="creating-customer-orders"></a>

Once the customer, product and customer-product interaction data frames are finished, you are ready to create orders. The first thing you'll need is to load the scripts. The scripts can be found [here](https://github.com/mdancho84/orderSimulatoR/tree/master/scripts).



{% highlight r %}
source("./scripts/createOrdersAndLines.R")
source("./scripts/createDatesFromOrders.R")
source("./scripts/assignCustomersToOrders.R")
source("./scripts/assignProductsToCustomerOrders.R")
source("./scripts/createProductQuantities.R")
{% endhighlight %}

### Step 1: Create Orders and Lines <a class="anchor" id="step1"></a>

First, we'll create the orders and lines using the `createOrdersAndLines` function. For those unfamiliar with lines, each order typically has several products purchased which are denoted "lines". The function parameters are number of orders `n`, max number of lines `maxLines`, and `rate`, which affects the distribution of lines on an order (see the README.md on GitHub for a further discussion on the `rate` parameter). The output is a data frame with __2000 orders with 15,644 total rows for each product purchase__. Some orders have more lines (more product purchases) and others have less (as dictated by the `rate` parameter). One note worth mentioning is that the `maxLines` cannot exceed the number of products (otherwise an order would have more lines than products available which does not make sense).


{% highlight r %}
orders <- orders <- createOrdersAndLines(n = 2000, maxLines = 30, rate = 1)
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

### Step 2: Add Dates to the Orders <a class="anchor" id="step2"></a>

Orders typically have a date recorded so the orders can be tracked by time period. As such, we'll add dates according the distribution of orders in a given year using the `createDatesFromOrders` function. We'll have some growth over the years given by the `yearlyOrderDist` distribution. Note in year 4 there is a slight decrease in orders. However, the trend continues in year 5. The `startYear` tells the script to create orders spanning from 2011 to 2015 (i.e. the length of the `yearlyOrderDist`). As shown below, we now have dates added according to our distribution.


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

### Step 3: Assign Customers to Orders <a class="anchor" id="step3"></a>

Next, we'll assign customers to orders using the `assignCustomersToOrders` function. The parameters needed are the `orders` and `customers` data frames, and the `rate`, which is a parameter that controls the distribution of orders assigned to customers. A larger rate increases the number of orders assigned to the largest customers. The below orders now have customers.  


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

We can see the distribution of order rows by customer using the `table` function. Using a `rate` of 0.8 still assigns a large range of customer lines. Customer 10 has the largest number of lines at 2731, while Customer 21 has the smallest number of lines at 108.


{% highlight r %}
table(orders$customer.id)
{% endhighlight %}



{% highlight text %}
## 
##    1    2    3    4    5    6    7    8    9   10   11   12   13   14 
##  278  975  296  373  298  326  285 1801  504 2731  328  182  882  207 
##   15   16   17   18   19   20   21   22   23   24   25   26   27   28 
##  192 1086  470  247  295  495  108  461  191  434  721  567  145  383 
##   29   30 
##  231  152
{% endhighlight %}

### Step 4: Assign Products to Orders Lines <a class="anchor" id="step4"></a>

In step 4, we'll add the products to the orders using the customer-product interaction table. Keep in mind that this is the critical step where a well-thought-out customer-product interaction matrix will allow us to uncover deep trends and insights into customer behavior. The `assignProductsToCustomerOrders` function takes two arguments: the `orders` data frame from Step 3 and the `customerProductProbs` which contains the matrix linking product.id to customer.id.


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

### Step 5: Assign Quantities to Order Lines <a class="anchor" id="step5"></a>

In the last step, we assign quantities to the order lines. The `maxQty` parameter limits the number of products on a order line. The `rate` parameter controls the probability for line quantities. A value of 3 places an 83.5% probability on a line quantity of 1, whereas a line quantity of 10 has a 0.08% probability. 


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

## Joining Orders with Customers and Products <a class="anchor" id="joining-orders"></a>

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

Great. Now this finally looks like orders data that could be retrieved from an ERP system. We are ready to start visualizing and data mining. The last part of this post will go into some high level visualizations for data exploration. Future blog posts will dig much deeper.

## Exploring the Orders <a class="anchor" id="exploring-orders"></a>

If you've followed along to this point, we have just created the orders from the `bikes data set`. Now, we can have some fun! Let's examine the data set. We'll first take a look at sales over time using the `ggplot2` package.


{% highlight r %}
library(ggplot2)
library(lubridate)

# Create sales by year data frame
salesByYear <- orders.extended %>%
  group_by(year = year(order.date)) %>%
  summarize(total.sales = sum(price.extended))

# Use ggplot to plot sales by year
ggplot(salesByYear, aes(x=year, y=total.sales)) +
  geom_bar(stat = "identity") + 
  geom_smooth(method = "lm", se = FALSE) +
  labs(title="Sales Over Time", x="Year", y="Sales") +
  scale_y_continuous(labels = scales::dollar) +
  geom_text(aes(ymax=total.sales, label=scales::dollar(total.sales)), 
                        vjust=1.5, 
                        color="white",
                        size=4)
{% endhighlight %}

![Sales Over Time](/figure/source/2016-7-12-orderSimulatoR/salesOverTime-1.png)

Nice. Cannondale has a general growth trend. It looks like 2013 was Cannondale's best year with $17,529,430 in total sales, and 2015 almost matched it! Next, let's explore some products to get an idea of top sellers.


{% highlight r %}
# Create top 10 products data frame
productSales <- orders.extended %>%
  group_by(bike.model = model) %>%
  summarize(total.sales = sum(price.extended),
            qty.total = sum(quantity)) %>%
  mutate(pct.total = total.sales / sum(total.sales)) %>%
  arrange(desc(total.sales))
top_10 <- head(productSales, 10)
top_10_ordered <- top_10 
top_10_ordered$bike.model <- factor(top_10_ordered$bike.model, levels = arrange(top_10_ordered, total.sales)$bike.model)

# Use ggplot to plot the top products
ggplot(top_10_ordered, aes(x=bike.model, y=total.sales)) +
  geom_bar(stat="identity") + 
  geom_text(aes(ymax=pct.total, label=scales::percent(pct.total)), 
      hjust= -0.25,
      vjust= 0.5,
      color="black",
      size=4) +
  geom_text(aes(ymax=qty.total, label=paste("Qty:", qty.total)), 
      hjust= 1.25,
      vjust= 0.5,
      color="white",
      size=4) +
  coord_flip() +
  labs(title="Top 10 Bike Models", 
       x="", 
       y="Sales")+
  scale_y_continuous(labels = scales::dollar, limits = c(0,2500000))
{% endhighlight %}

![Top 10 Products](/figure/source/2016-7-12-orderSimulatoR/top10Products-1.png)

Finally, we'll take a look at a map of our customer-base using maps created with the `leaflet` package. The map below charts the customer locations and exposes the sales trends using the circle radius. Larger circles relate to higher sales, and smaller circles relate to lower sales. You can click on the markers to see the bike shop name and sales.


{% highlight r %}
salesByLocation <- orders.extended %>%
  group_by(bikeshop.name) %>%
  summarise(total.sales = sum(price.extended)) %>%
  left_join(y=customers, by="bikeshop.name") %>%
  mutate(popup = paste0(bikeshop.name, ": ", scales::dollar(total.sales)))

library(leaflet)
leaflet(salesByLocation) %>% 
  addProviderTiles("CartoDB.Positron") %>%
  addMarkers(lng = ~longitude, 
             lat = ~latitude,
             popup = ~popup) %>%
  addCircles(lng = ~longitude, 
             lat = ~latitude, 
             weight = 2,
             radius = ~(total.sales)^0.775)
{% endhighlight %}

<iframe src="http://rpubs.com/mdancho84/196291"
style="border: none; width: 750px; height: 600px"></iframe>


## Recap <a class="anchor" id="recap"></a>

Ok, you've made it through a long post, but hopefully a good one that you can use to show off your analytic talents. We discussed how to simulate orders using the `orderSimulatoR` scripts, which can be used for any situation that has customers, products and a well-thought-out matrix of probabilities that create the customer-product interaction trends. The simulated orders can then be used for data mining and visualizations. We went through a few high level data visualizations on the `bikes data set`. We used `ggplot` and `leaflet` libraries to help understand the overall sales trends, best products, and best customers. However, we just scratched the surface of the data mining and visualization process. In future posts, we'll take a look at more advanced techniques for uncover trends. Until then, onward and upward.

