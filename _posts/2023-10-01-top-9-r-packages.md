---
layout: post
title: "Top 9 R packages (that every Data Scientist must know)"
date: 2023-10-01 06:00:00 -0500
excerpt: "In this article, I share 9 R packages that have helped me the most. Let's go!" 
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- tidyverse
image: "/assets/069_top_r_packages_thumb.png"
image_preview: "/assets/069_top_r_packages_thumb.png"

---
Hey guys, welcome back to my [R-tips newsletter](https://learn.business-science.io/r-tips-newsletter). In today's R-tip, I'm sharing the top 9 R packages that I use almost every day... You're getting the **cheat code to learning these R packages**. Plus, I'm sharing a 200 lines of `R` code that shows how you can use my **9 R code templates** for ANY company. Let's go! 

### Table of Contents

Today I share how to use my **Top 9 R Packages** . Here's what you're learning today:

* ***Top 9 R Packages:*** We'll go through each of the top 9 R packages that I use almost every day.
* ***9 Code Templates:*** How I use each of these `R` packages to complete business analysis and data science tasks. 
* **Shiny App Bonus: I'm sharing my Shiny App: Interactive Store Locator.**

![Top R Packages](/assets/069_r_logo_board.png)

<p class="date text-center">Matt's Top R Packages</p>

This is the **Bonus Shiny App** you're getting today!

![Shiny App: Interactive Store Locator](/assets/069_shiny_app_store_locator.png)

<p class="date text-center">Bonus Shiny App!</p>

---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter?el=website">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> 
    <li><a href="https://learn.business-science.io/r-tips-newsletter?el=website">Get the Code</a></li> 
    <li><a href="https://youtu.be/NQfIUFR0LQU">YouTube Tutorial</a></li>
</ul>


# This Tutorial is Available in Video

I have a companion video that walks you through all of the code templates for my Top 9 `R` packages that every Data Scientist must know.  👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/NQfIUFR0LQU" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# I used to struggle at Data Science

Let's be honest. I used to suck at Data Science.

In 2014, I was learning R. I was a beginner. I was struggling. I was frustrated. And I was stuck.

So if you're in the same shoes now, I get it. I've been there. But here's what changed for me. 

I found out about an early version of the **tidyverse**. And it changed everything. 

Over the course of the next two years, I went from a struggling Mechanical Engineer to a Director of Sales, Engineering, and Forecasting. And I had a dirty little secret. 

# R was behind everything. 

In fact, I was using `R` to automate my job. I was using `R` to automate my team's jobs. I was using `R` to automate my boss's job.

And this led to a promotion. And then another promotion. And then another promotion.

My point is that **`R` is a superpower**. And I want to share with you the **9 R packages** that I use almost every day.

# Tutorial: Top 9 R Packages (With 9 Code Templates)


This tutorial is excellent. You'll learn how to use my **Top 9 R Packages** with short code templates that you can use for almost ANY company:

1. **`tidyverse` -  Meta R package for data analysis**
2. **`dplyr` - Data wrangling and manipulation**
3. **`ggplot2` - Data visualization**
4. **`tidyr` - Data wrangling and manipulation**
5. **`timetk` - Time series analysis**
6. **`readr` - Data import**
7. **`tidymodels` - Machine learning**
8. **`leaflet` - Interactive maps and geospatial analysis**
9. **`shiny` - Interactive web apps**


## 1: Tidyverse

The `tidyverse` is the **meta package** that loads all of the other packages that I use.

#### Code Template #1: Load the tidyverse

![Prompt 1 Code](/assets/069_01_tidyverse.png)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the Code.</strong></a> </p>

Here's what happens when you run the code:

![Loading Tidyverse 2.0.0](/assets/069_01_loading_tidyverse.png)

It attaches (or loads): 

* `dplyr` - Data wrangling and manipulation
* `ggplot2` - Data visualization
* `tidyr` - Data wrangling and manipulation
* `readr` - Data import
* `purrr` - Functional programming and iteration
* `tibble` - Tidy data structure
* `stringr` - String manipulation
* `forcats` - Factor manipulation
* `lubridate` - Date manipulation

In 1 line of code, now we have most of the R packages that we need to do our day-to-day work. Let's get started with an example analysis. For that we'll use the `dplyr` package.

## 2: dplyr

The `dplyr` package is the **workhorse** of the tidyverse. It's the package that I use to manipulate data.

- **Purpose:** Data manipulation.
- **Features**: Enables filtering, grouping, summarizing data, and more.
- **Usefulness:** Offers a more readable and concise syntax for data manipulation.

#### Code Template #2: Group by and summarize

![Prompt 2 Code](/assets/069_02_dplyr_code_template.png)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the Code.</strong></a> </p>

First, we make a sample sales data with products and their respective sales numbers. 

![Dplyr Input Data](/assets/069_02_dplyr_data.png)

Then we use `group_by()` and `summarize()` to get the Total Sales by Product.

![Dplyr output data](/assets/069_02_dplyr_output_data.png)

## 3: ggplot2

The `ggplot2` package is a **data visualization** package. It's the package that I use to visualize data for static plots that go into Executive reports.

- **Purpose:** Data visualization.
- **Features:** Creates complex multi-plot layouts and produces elegant graphics.
- **Usefulness:** It has a consistent syntax and is good for creating high-quality visualizations.

#### Code Template #3: Create a ggplot2 plot

![Prompt 3 Code](/assets/069_03_ggplot_code_template.png)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the Code.</strong></a> </p>

First, we make a sample monthly revenue data. And produce a `ggplot2` data visualization with revenue by month.

![ggplot data visualization](/assets/069_03_ggplot_data_visualization.png)

## 4: tidyr

The `tidyr` package is a **data wrangling** package. It's the package that I use to reshape data (also called pivoting).

- **Purpose:** Pivoting data (also nesting).
- **Features:** Enables data reshaping and tidying.
- **Usefulness:** Helps in organizing messy data for easier analysis.

#### Code Template #4: Pivot data from wide to long format

![Prompt 4 Code](/assets/069_04_tidyr_code_template.png)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the Code.</strong></a> </p>

First, we make a sample data with sales data for 2 products by month. This is in "wide format". 

![Tidyr Wide Format](/assets/069_tidyr_wide_format.png)

Then we use `pivot_longer()` to convert the data to "long format". Long format is needed for most "tidy" data analysis including making plots with `ggplot2` and summarizing data with `dplyr`.

![Tidyr Long Format](/assets/069_04_tidyr_long_format.png)

## 5: timetk

The `timetk` package is a **time series** package. I am the creator of this R package. And it's the package that I use to analyze time series data analysis problems.

- **Purpose:** Time series analysis.
- **Features:** Enables *time series* data wrangling and manipulation.
- **Usefulness:** Helps in exploring and manipulating time series data for easier analysis.

#### Code Template #5: Create a time series trelliscope visualization for multiple time series

![Prompt 5 Code](/assets/069_05_timetk_code_template.png)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the Code.</strong></a> </p>

We'll use the `FANG` stock data to create a **trelliscope visualization** which is great for visualizing 10+ time series.

![Trelliscope Visualization](/assets/069_05_timetk_trelliscope_visualization.png)

## 6: readr

The `readr` package is a **data input/output** package. It's the package that I use to read and write data.

- **Purpose:** Data input/output.
- **Features:** Provides functions to read and write data.
- **Usefulness:** Efficiently handles large datasets and supports various data formats.

#### Code Template #6: Read data from a CSV file

![Prompt 6 Code](/assets/069_06_readr_code_template.png)

We'll use the `read_csv()` function to read data from a CSV file. This produces the following output:

![Readr Output](/assets/069_06_readr_output.png)

## 7: tidymodels

The `tidymodels` package is a **machine learning** package. It's the package that I use to build machine learning models.

- **Purpose:** Machine learning.
- **Features:** Provides a consistent interface for modeling and machine learning.
- **Usefulness:** Helps in building and evaluating machine learning models fast.

#### Code Template #7: Fit and predict sales with a linear regression model

![Prompt 7 Code](/assets/069_07_tidymodels_code_template.png)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the Code.</strong></a> </p>

We'll use the `linear_reg()` function to fit a linear regression model to predict sales. Then we use the `predict()` function to predict sales for a Marketing_Spend of $4,000. The prediction is $8,000.

![Tidymodels Output](/assets/069_07_tidymodels_predict_output.png)

## 8: leaflet

The `leaflet` package is a **geospatial** package. It's the package that I use to create interactive maps for Shiny web apps and Exploratory Data Analysis.

- **Purpose:** Interactive maps and geospatial analysis.
- **Features:** Provides functions to create interactive maps.
- **Usefulness:** Helps in visualizing geospatial data.

#### Code Template #8: Create an interactive map

![Prompt 8 Code](/assets/069_08_leaflet_code_template.png)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the Code.</strong></a> </p>

We'll use the `leaflet()` function to create an interactive map for 2 Store Locations. This produces the following output:

![Leaflet Output](/assets/069_08_leaflet_output.png)

## 9: shiny (BIG BONUS)

The `shiny` package is a **web application** package. It's the package that I use to create interactive web apps for use in production.

- **Purpose:** Interactive web apps.
- **Features:** Allows the creation of interactive web applications directly from R.
- **Usefulness:** Good for sharing analyses and visualizations in a user-friendly way. **This is called "Production".**

#### Code Template #9: Create a Shiny App

This is a bonus and the code template is too. You'll need to [join the R-Tips newsletter to get the code.](https://learn.business-science.io/r-tips-newsletter?el=website)

![Shiny Code Template](/assets/069_09_shiny_code_template.png)

<p class='text-center date' style="font-size:26px;"> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Click here to get the Bonus Shiny App.</strong></a> </p>

It produces this Shiny App:

![Shiny App: Interactive Store Locator](/assets/069_shiny_app_store_locator.png)

<p class='text-center date' style="font-size:26px;"> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Click here to get the Bonus Shiny App.</strong></a> </p>

# Conclusion

In this article, I shared 9 R packages that have helped me the most. 

- You now have 9 code templates that you can use to perform data analysis and data science tasks for almost any company. 
- This should give you a leg up in your Data Science career.

With that said, if you are struggling to learn data science or need help becoming a Data Scientist, I want to help you. **Here's how I can help you become a 6-Figure Data Scientist.**

{% include cta_struggles_rtrack.md %}