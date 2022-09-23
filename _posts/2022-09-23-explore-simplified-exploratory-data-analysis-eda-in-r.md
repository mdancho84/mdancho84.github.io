---
layout: post
title: 'explore: simplified exploratory data analysis (EDA) in R'
date: 2022-09-23 06:00:00 -0400
excerpt: Did you know most Data Scientists spend 80% of their time just trying to
  understand and prepare data for analysis? R has an Insane Exploratory Data Analysis
  productivity-enhancer. It's called Explore.
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- explore
image: "/assets/explore_thumbnail_2.jpg"
image_preview: "/assets/explore_thumbnail_2.jpg"

---
When I began applying data science to my business in 2015, exploratory data analysis (the critical process for performing initial investigations to find important relationships in my data, cleaning my data, spotting anomalies, and checking my assumptions through data visualization) would take me any where from 8 hours to 1 week. 

It was an important step. But, I wanted to get to modeling (and machine learning) as efficiently as possible because that's where I could get the deep insights that drove my business. **In my mind, EDA was a time consuming process with few tools to help other than basic plotting utilities and a lot of grit. And EDA took a lot of code.**

So fast-forward to today. I'm happy to say that I've stumbled across a new R package that transforms what used to take me 8+ hours of work **into 5-minutes of enjoyable insight-gathering.** 

**What R package is it?** It's called `explore`. And I want to share it with you so you can do EDA in under 5-minutes. Here's what you learn in this R-Tip:

1. **How to make an EDA Shiny App in seconds with `explore`**
2. **BONUS: How to use the 7 most important EDA Plots to get exploratory insights.**

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<p>Here are the links to get set up. 👇</p>

<ul> <li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li> <li><a href="https://youtu.be/j1pkPsjYw5s">YouTube Tutorial</a></li> </ul>

# This Tutorial Is Available In Video

I have a companion video tutorial that shows even more secrets (plus mistakes to avoid).  And, I'm finding that a lot of my students prefer the dialogue that goes along with coding. So check out this video to see me running the code in this tutorial. 👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/j1pkPsjYw5s" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# What Is Exploratory Data Analysis?

**Exploratory Data Analysis (EDA)** is how data scientists and data analysts find meaningful information in the form of relationships in the data. EDA is absolutely critical as a first step before machine learning and to **explain business insights** to non-technical stakeholders like executives and business leadership.

![](/assets/explore_thumbnail_2.jpg)

<p class='text-center date'>Make exploratory data analysis visuals with <code>explore</code></p>

# What Do I Make In This R-Tip?

By the end of this R-Tip, you'll make this **exploratory data analysis report with 7 exploratory plots.** Perfect for impressing your boss and coworkers! (Nice EDA skills)

![](/assets/explore_shiny_app.jpg)

<p class='text-center date'> <strong><a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Don't forget to get the code.</a> </strong></p>

# Thank You Developers.

Before we dive into `explore`, I want to take a moment to thank the data scientist and developer of explore, [Roland Krasser](https://github.com/rolkra).  Thank you for making this great R package!

# What's the Difference Between `explore`, `DataExplorer`, and `correlationfunnel`? 

**It can be confusing on which EDA R packages to use.** So I'll fill you in on what I actually use in my process. And I'll share where I see `explore` fitting into my process in bivariate analysis. But I also use 2 other R packges for EDA, namely `DataExplorer` and `correlationfunnel`

## 1. DataExplorer

If you follow my R-Tips, you might have seen me talk about `DataExplorer`, one of my favorite all-time packages for Exploratory Data Analysis. [I expose you to DataExplorer here.](https://www.business-science.io/code-tools/2021/03/02/use-dataexplorer-for-EDA.html)

Full disclosure, I still use DataExplorer in many of my EDA scripts. **The automated data exploration report is just so comprehensive.**

![](/assets/data_explorer_gif.gif)

## 2. Explore

But I'm also loving the `explore` package's **interactive approach to bivariate analysis** with a Shiny App. This allows me to compare multiple features quickly without spending a lot of time.

![](/assets/explore_shiny_app.jpg)

## 3. correlationfunnel

And, I'm using one other R package for EDA. It's my own `correlationfunnel` R package. **The correlationfunnel package tells me which features to look at so I don't waste time on bad comparisons.** [**I introduce my correlationfunnel here.**](https://www.business-science.io/code-tools/2019/08/07/correlationfunnel.html)

![](/assets/2019-08-07-correlationfunnel/plot_correlationfunnel.png)

Now that you have my EDA process, I want to give you...

# My Cheat Sheet For My Top 100 R Packages

The next thing you're going to need is to have access to all of the R packages that I use regularly in my data analysis projects.

Why?

**Even I forget which R packages to use from time to time.** And this cheat sheet saves me so much time. Instead of googling to filter through 20,000 R packages to find a needle in a haystack. I keep my cheat sheet handy so I know which to use and when to use them. Seriously. [This cheat sheet is my bible.](https://www.business-science.io/r-cheatsheet.html)

![](/assets/free_cheatsheet.jpg)

Once you download it, head over to page 3 and you'll see several R packages I use frequently just for Exploratory Data Analysis.

![](/assets/cheatsheet_exploratory.jpg)

And you get the same guidance which is important when you want to work in these fields:

* Machine Learning
* Time Series
* Financial Analysis
* Geospatial Analysis
* Text Analysis and NLP
* Shiny Web App Development

[So steal my cheat sheet.](https://www.business-science.io/r-cheatsheet.html) It will save you a ton of time.

# What is Bivariate Analysis?

**A key reason I like `explore` is the concept of bivariate analysis.** Or the ability to quickly compare two variables - an Predictor and a Response.

![](/assets/explore_bivariate.jpg)

## The Predictor 

**The predictor** is the thing that we believe affects the response or outcome. In this case I believe the Class of the vehicle (whether its a Chevy S10 Pickup vs Audi A4 Compact) will have an effect on the fuel economy (how many miles per gallon).

## The Response (Our Target)

In most business cases, **the response is our target.** It's the thing we are after. In this scenario, I want to know what is going to happen to Fuel Economy (Highway MPG) when I change things like class of the vehicle (compact vs pickup), size of the engine (displacement), and so on.

## How can we speed up bi-variate analysis?

Bivariate analysis is time consuming. It's probably 30% of data exploration. Speeding it up will follow my process:

* **Step 1: Use DataExplorer** to get a sense of our data. ([DataExplorer is covered here](https://www.business-science.io/code-tools/2021/03/02/use-dataexplorer-for-EDA.html))
* **Step 2: Use correlationfunnel** to find the most important features vs a target ([Correlation funnel is covered here](https://www.business-science.io/code-tools/2019/08/07/correlationfunnel.html))
* **Step 3: Use explore** to explore the relationships (Discussed today)

OK, so now that we have a process, let's focus on the `explore` package from Step 3. And check out the other tutorials for Steps 1 and 2 in my process. 

# Tutorial: Exploratory Data Analysis with `explore`

One of the coolest features of `explore` is the ability to **create an Shiny Exploratory App in 1 line of code**. This automates:

* **Variable and Interaction Analysis**
* **Explanations (with Decision Tree Plot)**

Ultimately, this saves the analyst/data scientist SO MUCH TIME. I'm constantly doing bi-variate analysis.

## Step 1: Load the libraries and data

To get set up, all we need to do is load the following libraries and data.

![](/assets/explore_01_libraries.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

We'll use the `mpg` dataset, which has data on 234 vehicle models.

![](/assets/explore_02_mpg.jpg)

With data in hand, we are ready to create the automatic EDA report. Let's explore!

## Step 2: Shiny EDA App

Next, use `explore()` to make our EDA shiny app.

![](/assets/explore_03_shiny_app.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

This produces an automatic Shiny EDA App that covers all of the important aspects that we need to analyze in our data! It's that simple folks.

![](/assets/explore_shiny_app.jpg)

The shiny app is great, but the next thing you're probably wondering is how the heck am I going to use this report.

**That's why I want to show you...**

# BONUS: How To Do Bivariate Analysis with the Shiny EDA App

As an extra special bonus, I figured I'd teach you not only how to make the Shiny EDA App BUT how to use the app too. Here's how to get the most out of your automatic EDA analysis tool. If you'd like to **get the code to produce the individual plots**, just [sign up for my FREE R-tips codebase](https://learn.business-science.io/r-tips-newsletter). You'll get all the code sent to your email plus more R-Tips every week.

## 1. Box Plot (Numeric Target + Categorical Predictor)

![](/assets/explore_boxplot.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

**The first plot we get is a box plot,** which is when we compare a numeric target and a categorical predictor. The box plot helps us see which categories pull fuel economy up and down.

**Business Insights:**

* Pickups and SUVs tend to pull highway fuel economy down
* Compact and midsize have the highest fuel economy

## 2. Frequency Plot (Categorical vs Categorical)

![](/assets/explore_frequency_plot.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

**The 2nd plot we get is a frequency plot,** which is when we compare two categories and determine the overlap in terms of the frequency of observations that fall into combinations of categories. This plot won't help us with figuring out effect on fuel economy (highway mpg), but can be important in data discover.

**Business Insights:**

* Chevrolet dominates the 2seater category, and Dodge dominates the minivan category
* The most competitive categories are Midsize and SUV

## 3. Scatter Plot (Numeric vs Numeric)

![](/assets/explore_scatterplot.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

**The 3rd plot we get is a scatter plot,** which is when we compare two numeric variables and determine the trend between the two variables. This plot helps us see an immediate trend between highway fuel economy and engine size (displacement).

**Business Insights:**

* As engine size (displacement) goes up, highway fuel economy goes down. This is an inverse relationship. 

# Conclusion

You learned how to use the `explore` library to automatically create an exploratory data analysis shiny app AND perform bivariate analysis the fast way. Great work! **But, there's a lot more to becoming a data scientist.**

If you'd like to become a data scientist (and have an awesome career, improve your quality of life, enjoy your job, and all the fun that comes along), then I can help with that.

## Step 1: Watch My Free 40-Minute Webinar

Learning data science on your own is hard. I know because **IT TOOK ME 5-YEARS to feel confident.**

AND, I don't want it to take that long for you.

So, I put together a [**FREE 40-minute webinar (a masterclass)**](https://learn.business-science.io/free-rtrack-masterclass-signup) that provides a roadmap for what worked for me.

![](/assets/free_rtrack_masterclass.jpg)

<p style="font-size: 36px;text-align: center;"><a href="https://learn.business-science.io/free-rtrack-masterclass-signup">Join My FREE 40-Minute R Webinar <br>(The Roadmap to a 6-Figure Data Scientist Career)</a></p>

Literally 5-years of learning, consolidated into 40-minutes. It's jammed packed with value. I wish I saw this when I was starting... It would have made a huge difference.

# Step 2: Take Control Of Your Career

For my action-takers, if you are ready to become a Business Scientist, then read on.

If you need take your skills to the next level and DON'T want to wait 5-years to learn data science for business, AND you want a career you love that earns you $100,000+ salary (plus bonuses), AND you'd like someone to help guide you how to do this in UNDER  6-MONTHS or less....

## **Then I can help with that too.**

I have a program that has helped over 3,000 students become data scientists in business with the R programming language. [Don't believe me? Read these testimonials.](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series)

My students have gotten:

* 6-Figure Data Science Jobs ($100,000+)
* Senior VP of Analytics ($200,000+)
* Lead Data Scientist Jobs ($175,000+)
* Raises and Career Promotions of 25% to 50%

All by learning data science for business with R. Get ready. The ride is wild. And the destination is AMAZING!

![](/assets/rtrack_what_theyre_doing_2.jpg)

<p style="font-size: 36px;text-align: center;"><a href="https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series">Join My 5-Course R-Track Program<br>(Become A 6-Figure Data Scientist)</a></p>

**P.S. Many of my students are getting their work to pay for education and skill advancement because it benefits your company.** [**Find out how to get your company to reimburse you for my courses. **](https://www.business-science.io/business/2020/09/07/course-benefits-manager-negotiation.html)