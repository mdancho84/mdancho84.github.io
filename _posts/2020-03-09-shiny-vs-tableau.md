---
layout: post
title: "Part 6 - R Shiny vs Tableau (3 Business Application Examples)"
date:   2020-03-09 12:04:01
excerpt: "Shiny is much more than just a dashboarding tool. Here we illustrate 3 powerful use cases for R Shiny Apps in business."
author: "Matt Dancho"
categories: [Business]
tags: [R-Bloggers, Learn-R, Learn-Business, Learn-Shiny, shiny, tidyverse]
image: 2020-03-09-shiny-vs-tableau/shiny-vs-tableau.jpg
image_preview: 2020-03-09-shiny-vs-tableau/shiny-vs-tableau.jpg
---



__`Shiny`, a web framework that is written in `R`, often gets lumped into the conversation with Tableau and PowerBI__ - two popular Business Intelligence (BI Tools) used for "Dashboarding". The critical point is that `Shiny` is much more than just a dashboarding tool: `R` and `Shiny` combine both machine learning and decision-making, packaging your data science analysis into a web application that businesses can use. Here we illustrate __3 powerful use cases for `R Shiny` Apps in business.__ [View the updated article at Business Science.](#)

#### Articles in Series

1. [__Part 1 - Five Full-Stack Data Science Technologies for 2020 (and Beyond)__](https://www.business-science.io/business/2019/12/09/data-science-technologies.html)
2. [__Part 2 - AWS Cloud__ ](https://www.business-science.io/business/2019/11/13/data-science-with-aws.html)
3. [__Part 3 - Docker__](https://www.business-science.io/business/2019/11/22/docker-for-data-science.html)
4. [__Part 4 - Git Version Control__](https://www.business-science.io/business/2019/12/09/git-for-apps.html)
5. [__Part 5 - H2O Automated Machine Learning (AutoML)__](https://www.business-science.io/business/2020/01/13/five-reasons-to-learn-h2o-machine-learning.html)
6. [__Part 6 - R Shiny vs Tableau (3 Business Application Examples)__](https://www.business-science.io/business/2020/03/09/shiny-vs-tableau.html) __(You Are Here)__
7. [__\[NEW BOOK\] - The Shiny Production with AWS Book__](https://www.business-science.io/business/2020/01/02/shiny-production-with-aws-docker-git-book.html)

# Why Shiny?

<div class="pull-right hidden-xs" style="width:50%; margin-left:20px;">
  <a href="#" target="_blank">
  <img class="img-responsive" src="/assets/2020-03-09-shiny-vs-tableau/shiny-vs-tableau.jpg"> 
  </a>
</div>

__R Shiny is often thought of as a "Dashboarding tool"__, which places it in a category occupied by products like Tableau, PowerBI, QlikView, Data Studio, and other "Business Intelligence Tools".

__Thinking of Shiny as a "Dashboarding tool" limits your perspective of what `Shiny` can do.__

Shiny is much more than just a dashboarding tool. Shiny can be used for Data Science Applications including:

1. [__✅ Meta-Applications__](#app1)

2. [__✅ Full-Stack Web Development__](#app2)

3. [__✅ Real-Time Prediction Applications__](#app3)

# R Shiny Business Capability Rating: 10 of 10

It's easy to get distracted by Tableau and PowerBI's visuals, but __when it comes to making business decisions, your organization needs to be able to <span class="text-info">take actions</span>. This is where R Shiny is lightyears ahead of the other tools - [R Shiny is a powerful ecosystem for business + data science + apps.](#shiny-ecosystem)__


![Business Application Tools](/assets/2020-03-09-shiny-vs-tableau/dashboard-ecosystem.png)

<p class="text-center date"><strong>R Shiny has the highest business capability rating</strong></p>

Let's just skip straight to the benefit: <span class="text-info">__What can `Shiny` do that the others can't?__</span>

# Shiny's Capability in 3 Examples<br><small>Business Applications made possible with R Shiny</small> 

I'm going to show you Shiny's capability with 3 R Shiny Business examples. After seeing these, __the decision to learn `R Shiny` is a no-brainer.__

## Example 1: The Application Library <br><small>A Meta-Application</small> {#app1}

<a href="https://apps.business-science.io/" target="_blank">
  <img class="img-responsive" src="/assets/2020-03-09-shiny-vs-tableau/app-library.jpg"> 
</a>

<p class="text-center date">
<a href="https://apps.business-science.io/" target="_blank">Business Science Application Library</a>
<br><small>A Meta-Application that houses Shiny Apps</small>
</p>

__A meta-application__ is an app that provides an interface to many other applications in a library.

__Think of a meta-app like the _Apple App Store_.__ Each application in the library serves a specific function and the Meta-App provides searching and filtering capability so users can get to the apps that they need. 

The [new Business Science App Gallery](https://apps.business-science.io/){:target="_blank"} is an example of a meta-app. The Business Science App Gallery hosts various Shiny Apps that our students build in our courses. The hosted shiny apps range from predictive dashboards to multi-user web applications with security and authentication.

__The Business Science App Gallery enables filtering using Full-Text Search and Domain/Industry Categories.__  Try searching "tidyquant" and see which apps pop up.

<a href="https://apps.business-science.io/" target="_blank">
  <img class="img-responsive" src="/assets/2020-03-09-shiny-vs-tableau/app-library-full-text-search.jpg"> 
</a>

<p class="text-center date">
<a href="https://apps.business-science.io/" target="_blank">Full-Text Search</a>
<br><small>Try typing "tidyquant", and see which apps pop up</small>
</p>

<hr>
### <span class="text-info">Interested in making an "Application Library" Meta-Application?</span>

You build and deploy an App Library on `AWS` in [__Shiny Developer with AWS (DS4B 202A-R) Course__](https://university.business-science.io/p/expert-shiny-developer-with-aws-course-ds4b-202a-r/).
<hr>

## Example 2: The Stock Analyzer <br><small>A Full-Stack Web Application</small> {#app2}

<a href="https://apps.business-science.io/stock_analyzer_mongo_atlas" target="_blank">
  <img class="img-responsive" src="/assets/2020-03-09-shiny-vs-tableau/stock-analyzer-app.jpg"> 
</a>

<p class="text-center date">
<a href="https://apps.business-science.io/stock_analyzer_mongo_atlas" target="_blank">Stock Analyzer</a>
<br><small>A Full-Stack Web Application</small>
</p>

__A Full-Stack Web Application__ is an application that provides user login (authentication), security, and stores this information in a backend database, typically a NoSQL database (i.e. MongoDB).

The full-stack web app is a new concept to many data scientists, but __it's absolutely critical for organizations that need security around their business applications.__ 

__The architecture of a full-stack web application__ includes a backend database that stores user data so that multiple users can authenticate and have a customized experience.  


<img class="img-responsive" src="/assets/2020-03-09-shiny-vs-tableau/application-architecture.jpg"> 

<p class="text-center date">
Application Architecture
</p>

__Users are required to Log In (called authentication)__ with a Full-Stack Data Science App. The first screen requires authentication before the private content is rendered. Only authenticated users can pass through. 

<img class="img-responsive" src="/assets/2020-03-09-shiny-vs-tableau/user-login.jpg"> 

<p class="text-center date">
User Authentication (Security Layer)
</p>

Once the user logs in (authenticates), the app remembers the user's favorite stocks and app settings from the previous session. __This is called persistent data storage.__

<img class="img-responsive" src="/assets/2020-03-09-shiny-vs-tableau/user-favorites.jpg"> 

<p class="text-center date">
User Favorites (Persistent Data Storage)
</p>

<hr>
### <span class="text-info">Interested in making a "Stock Analyzer" Full-Stack Web Application?</span>

You build and deploy an Stock Analyzer on `AWS` in [__Shiny Developer with AWS (DS4B 202A-R) Course__](https://university.business-science.io/p/expert-shiny-developer-with-aws-course-ds4b-202a-r/).
<hr>

## Example 3: Real-Time Forecasting in a Sales Dashboard <br><small>Train and Predict in Real-Time</small> {#app3}

<a href="https://business-science.shinyapps.io/sales_dashboard_demand_forecast/" target="_blank">
  <img class="img-responsive" src="/assets/2020-03-09-shiny-vs-tableau/sales-dashboard.jpg"> 
</a>

<p class="text-center date">
<a href="https://business-science.shinyapps.io/sales_dashboard_demand_forecast/" target="_blank">Sales Dashboard with Real-Time Prediction</a>
</p>

__Applications like a Sales Demand Forecast App need to make predictions (forecasts) in _real-time_.__ This is because the inputs to the forecast (which customers, products, time aggregation unit) are not known in advance. 

__Real-time prediction applications__ use ___machine learning___ to make predictions on the fly. 

Using R Shiny, we can integrate machine learning that __quickly trains a custom model and makes predictions on-demand.__

<img class="img-responsive" src="/assets/2020-03-09-shiny-vs-tableau/real-time-prediction.jpg"> 

<p class="text-center date">
Which time unit will the user select?
<br><small>The forecast model trains and predicts in real-time</small>
</p>

<hr>
### <span class="text-info">Interested in making a "Sales Demand Forecast App with Real-Time Training and Prediction"?</span>

You build the Sales Demand Forecast App in [__Shiny Predictive Dashboards (DS4B 102-R) Course__](https://university.business-science.io/p/ds4b-102-r-shiny-web-application-business-level-1/).
<hr>

# The R Shiny Ecosystem <br><small>Why I love R + Shiny for Business</small> {#shiny-ecosystem}

So many __FREE TOOLS EXIST__ inside the R + Shiny Ecosystem that can be used for Business Applications. Here are the ones I use in business applications most frequently. 


### Shiny Web Framework Ecosystem

- `shiny` (R to HTML/CSS/JavaScript/Server Processing)
- `flexdashboard` (Rmarkdown-based apps)
- `shinyWidgets` (more widgets!)
- `esquisse` (Tableau in R)
- `shinyjs` (JavaScript in R)
- `shinythemes` (Bootswatch Themes in R)
- and much more 

### R Machine Learning Suite

- `Tidymodels` (tidyverse compliant modeling, tuning, and preprocessing suite)
- `H2O` (Java-based Machine Learning suite)
- `MLR3` (Data.table Machine Learning suite)
- `keras` (R interface to Keras Deep Learning library)
- and more

### Time Series Suite

- `Tidyverts` (tidyverse compliant forecasting and time series tools)
- `Prophet` (Facebook's forecasting algorithm)
- `forecast` (original forecasting library)
- and more

### ETL (Data Wrangling) Suite

- `Tidyverse`  (super-popular data manipulation and visualization ecosystem)
- `data.table` and `dtplyr` (Fast in-memory data wrangling)
- `sparklyr` (Spark in R)


### Database Suite 

- `dbplyr` (R-to-SQL Conversion)
- `DBI` (Connect to SQL Databases)
- `mongolite` (Connect to NoSQL)

### Visualization and Reporting Suite

- `plotly` and `dygraphs` (interactive charting)
- `ggplot2` (static visualizations)
- `rmarkdown` (business reporting)

# Shiny Unlocks Business Value

`R Shiny` has so many tools that will unlock business value for your organization and __accelerate your career. You need to learn `Shiny`. Here's how. 👇__ 

# Become Great at Shiny

__R Shiny needs to be in your toolbox if you want to productionize Data Science.__ You simply cannot put machine learning applications into production with other "BI" Tools like Tableau, PowerBI, and QlikView. 

__If you need to learn R Shiny as fast as possible__, I have the perfect program for you. It will accelerate your career. [The 4-Course R-Track Bundle](https://university.business-science.io/p/4-course-bundle-machine-learning-and-web-applications-r-track-101-102-201-202a/) through Business Science. 

{% include cta_rtrack.html %}



# BONUS: Code for the Capability Visual


{% highlight r %}
library(tidyquant)
library(tidyverse)
library(ggrepel)

data_apps <- tribble(
  ~application,  ~business_capability, ~ease_of_learning, ~trend, ~cost,   
  "R Shiny",     10,                   5,                 10,     "Free",
  "Python Dash", 8,                    4,                 10,     "Free",
  "Excel",       4,                    10,                7,      "Low",
  "Tableau",     6,                    7,                 6,      "Low",
  "PowerBI",     5,                    8,                 6,      "Low",
  "Matlab",      6,                    2,                 1,      "High",
  "SAS",         7,                    4,                 3,      "High"
)


data_apps %>%
  ggplot(aes(x = business_capability, y = ease_of_learning, 
             color = cost, size = trend)) +
  geom_point() +
  geom_label_repel(aes(label = application, fill = application), 
                   size = 3.5,
                   fontface = 'bold', color = 'white',
                   box.padding = 0.1, point.padding = 0.5,
                   segment.color = 'grey50', segment.size = 1) +
  geom_smooth(color = palette_dark()[[1]], method = "lm", se = FALSE, show.legend = F) +
  expand_limits(x = c(0, 10), y = c(0, 10)) +
  theme_tq() +
  theme(
      legend.direction = "vertical", 
      legend.position  = "right", 
      legend.title = element_text(size = 8),
      legend.text  = element_text(size = 8)
  ) +
  scale_fill_tq() +
  scale_color_tq() +
  scale_y_continuous(breaks = seq(0, 10, 2)) +
  scale_x_continuous(breaks = 0:10) +
  scale_size_continuous(range = c(2, 14)) + 
  labs(title = "Dashboard and Business Application Tools",
       subtitle = "R has a longer learning curve but has a massive business capability rating",
       x     = "Business Capability Rating (10 = Powerful)",
       y     = "Learning Curve (10 = Easy to Learn)",
       color = "Cost",
       size  = "Trend",
       fill  = "Tool") 
{% endhighlight %}

![plot of chunk unnamed-chunk-1](/figure/source/2020-03-09-shiny-vs-tableau/unnamed-chunk-1-1.png)
