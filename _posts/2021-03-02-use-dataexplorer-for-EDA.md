---
layout: post
title: Exploratory Data Analysis in R with DataExplorer
date: 2021-03-02T02:00:00.000-05:00
excerpt: Did you know most Data Scientists spend 80% of their time just trying to
  understand and prepare data for analysis? R has an Insane Exploratory Data Analysis
  productivity-enhancer. It's called DataExplorer.
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- DataExplorer
image: "/assets/dataexplorer_thumbnail_2.jpg"
image_preview: "/assets/dataexplorer_thumbnail_2.jpg"

---
Did you know that **80% of data science** is spent _cleaning & preparing_ data for analysis? Yep, that's right! _NOT_ modeling (the fun stuff). This process is called Exploratory Data Analysis (EDA). 

R has an excellent Exploratory Data Analysis solution: It's called `DataExplorer​`. And I'm going to get you up and running with `DataExplorer` in under 5-minutes. Here's what you learn in this R-Tip:

1. **How to make an Automatic EDA Report in seconds with `DataExplorer`**
2. **BONUS: How to use the 7 most important EDA Plots to get exploratory insights.**

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<p>Here are the links to get set up. 👇</p>

<ul> <li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li> <li><a href="https://youtu.be/ssVEoj54rx4">YouTube Tutorial</a></li> </ul>

# This Tutorial Is Available In Video

I have a companion video tutorial that shows even more secrets (plus mistakes to avoid).  And, I'm finding that a lot of my students prefer the dialogue that goes along with coding. So check out this video to see me running the code in this tutorial. 👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/ssVEoj54rx4" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# What Is Exploratory Data Analysis?

**Exploratory Data Analysis (EDA)** is how data scientists and data analysts find meaningful information in the form of relationships in the data. EDA is absolutely critical as a first step before machine learning and to **explain business insights** to non-technical stakeholders like executives and business leadership. 

![](/assets/dataexplorer_plot_logo.jpg)

<p class='text-center date'>Make exploratory data analysis visuals with DataExplorer</p>

# What Do I Make In This R-Tip?

By the end of this R-Tip, you'll make this **exploratory data analysis report with 7 exploratory plots.** Perfect for impressing your boss and coworkers! (Nice EDA skills)

![](/assets/data_explorer_gif.gif)

<p class='text-center date'> <strong><a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Don't forget to get the code.</a> </strong></p>

# Thank You Developers.

Before we dive into `DataExplorer`, I want to take a moment to thank the developer, [Boxuan Cui](https://www.linkedin.com/in/boxuancui/). He's currently working as a Senior Data Science Manager at Tripadvisor. In his spare time, Boxuan has built and maintains one of the most useful R packages on the planet: `DataExplorer`. Thank you!

# Exploratory Data Analysis with `DataExplorer`

One of the coolest features of DataExplorer is the ability to **create an EDA Report in 1 line of code**. This automates:

* **Basic Statistics**
* **Data Structure**
* **Missing Data Profiling**
* **Continuous and Categorical Distribution Profiling (Histograms, Bar Charts)**
* **Relationships (Correlation)**

Ultimately, this saves the analyst/data scientist SO MUCH TIME.

## Step 1: Load the libraries and data

To get set up, all we need to do is load the following libraries and data.

![](/assets/00-dataexplorer-libraries.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

We'll use the `gss_cat` dataset, which has income levels for people by various factors including marital status, age, race, religion, ....

![](/assets/00-dataexplorer-data.jpg)

With data in hand, we are ready to create the automatic EDA report. Let's go!

## Step 2: Create the EDA Report

Next, use `create_report()` to make our EDA report. Be sure to specify the output file, output directory, target variable (y), and give it a report title.

![](/assets/01-eda-report-code.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

This produces an automatic EDA report that covers all of the important aspects that we need to analyze in our data! It's that simple folks.

![](/assets/data_explorer_gif.gif)

The report is great, but the next thing you're probably wondering is how the heck am I going to use this report. 

**That's why I want to show you...**

# BONUS: How to use the 7 Most Important DataExplorer Plots

As an extra special bonus, I figured I'd teach you not only how to make the report BUT how to use the report too. Here's how to get the most out of your automatic EDA report. If you'd like to **get the code to produce the individual plots**, just [sign up for my FREE R-tips codebase](https://learn.business-science.io/r-tips-newsletter). You'll get all the code sent to your email plus more R-Tips every week. 

## 1. Basic Statistics

![](/assets/02-dataexplorer-basic-stats-2.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

The basic statistics is where we first start understanding our data. We can see information about our columns including:

* **Discrete columns:** Columns with categorical data
* **Continuous columns:** Columns with numeric data
* **All missing columns:** Columns that have 100% missing data
* **Complete rows:** Percentage of rows that are complete (no missing data)
* **Missing observations:** Of all of the data, this is the percentage of missing

## 2. Data Structure

![](/assets/03-dataexplorer-data-structure-1.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

Next, we can examine each of the columns specifically learning about what data types are contained inside each of the columns.

* This is really important when we need to **know a bit more detail** about our data.
* We can **begin to hypothesize** what we should do to get it into the correct structure for analysis.

## 3. Missing Data Profile

![](/assets/04-dataexplorer-missing-data.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

The missing data profile report helps us understand which columns have missing data.

* We can start to think about **missing data treatment** - imputation strategies or if we will need to remove columns
* We can see if columns have **hardly any or no missing data** - which will be easier to use
* We can see if columns have **a lot of missing data** - which may need to be removed or heavily treated

## 4. Univariate Distributions

We have a bunch of options here, which can be used to dive into the columns. I'll focus on the 2 most important:

* **Continuous Features: Histogram**
* **Categorical Features: Bar Plot**

### 4A. Continuous Features (Histogram)

We can check out the distribution within the numeric data to quickly see what we are dealing with.

![](/assets/04-dataexplorer-continuous-features.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

We can get a sense of the **distribution** of the numeric data.

* **Skewed data:** TV Hours is very skewed with a few outliers (e.g. watching 24-hours of TV per day)
* **Non-normal data:** Age tends to be more 25-50 year old respondents than over 50
* **Data Range:** We can see the survey results go from year 200 to 2014. It looks like every 2-years.

### 4.B Categorical Features (Bar Plots)

![](/assets/04-dataexplorer-categorical-features.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

The categorical feature distributions are frequency counts by category shown as a box plot. This helps us:

* **Understand categorical distribution:** Categories tend to have some levels that are highly present and others that are much more rare.
* **Start thinking about categorical treatment:** We may need to lump some categories together before modeling.

## 5. Correlation Analysis

![](/assets/05-dataexplorer-correlation.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

* Correlation helps us tell whether **we should move onto modeling**.
* **Warning! The correlation can be a bit misleading.** Many correlations of numeric variables are non-linear. For example, middle-aged people may be more likely to watch less TV. But young and older people may be more likely to watch more TV. The correlation could be low because of the nonlinear relationship.

## 6. Principal Components

Plotting principal components can help you determine if the data can be compressed. I'll explain what I mean by this.

![](/assets/06-dataexplorer-pca.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

Data that is very wide (many columns) can be computationally expensive to model.

* By applying PCA (Principal Component Analysis), we can **determine if compressing** using an algorithm like PCA or UMAP is appropriate.
* Here I can see about 37% of the **variance explained** is contained in the first 20 principal components.

## 7. Bivariate Distributions

Now we are going to focus on how each feature varies with the target (rincome - how much each person/household makes in annual income).

* **Box Plot:** For analyzing numeric vs categorical
* **Scatter Plot:** For analyzing numeric vs numeric (not shown)

### Box Plot: Numeric vs Categorical

![](/assets/07-dataexplorer-boxplot.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

With the box plot, we can:

* Begin to **visualize relationships**.
* See how each numeric feature (age, tv hours, year) has a relationship with rincome
* $250,000 (high income earners) tend to be in their early 40's while low income earners are in their late 20's

# Conclusion

You learned how to use the `DataExplorer` library to automatically create an exploratory data analysis report. Great work! **But, there's a lot more to becoming a data scientist.**

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

![](/assets/rtrack_what_they_are_doing.jpeg)

<p style="font-size: 36px;text-align: center;"><a href="https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series">Join My 5-Course R-Track Program<br>(Become A 6-Figure Data Scientist)</a></p>