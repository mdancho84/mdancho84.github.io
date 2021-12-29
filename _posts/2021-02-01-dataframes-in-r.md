---
layout: post
title: "4 Ways to make Data Frames in R!"
date:   2021-02-02 07:00:00
excerpt: "Data frames (like Excel tables) are the main way for storing, organizing, and analyzing data in R. Here are 4 ways using the tidyverse."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, R, R-Tips, tidyverse, dataframe]
image: /assets/2021-02-01-dataframes-in-r/dataframe_cover.png
image_preview: /assets/2021-02-01-dataframes-in-r/dataframe_preview.png
---



This article is part of a R-Tips Weekly, a [weekly video tutorial](https://mailchi.mp/business-science/r-tips-newsletter) that shows you step-by-step how to do common R coding tasks.

<br/>


Data frames (like Excel tables) are the main way for storing, organizing, and analyzing data in R. Here are 4 ways using the tidyverse: `tibble`, `as_tibble()`, `read_excel()`, and `enframe()`/`deframe()`.

<br>

Here are the links to get set up. 👇

- [Get the Code](https://mailchi.mp/business-science/r-tips-newsletter)
- [YouTube Tutorial](https://youtu.be/qdcRy-Yp7co)


<figure class="text-center">
    <a href="https://youtu.be/qdcRy-Yp7co"><img src="/assets/2021-02-01-dataframes-in-r/video_thumb.png" border="0" /></a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>

<br>


## Making Data Frames in R

Data frames are the most important data structure in R. They are just like Excel Tables. They keep your data organized.

We're going to shed light on 4 SUPER POWERFUL ways to create data frames (from beginner to intermediate):

- `tibble()` - For making simple data frames from scratch
- `read_excel()` - For importing data from Excel worksheets as data frames.
- `as_tibble()` - For converting lists and matrix objects to data frames 
- `enframe()` - A **SUPER-POWER**. Convert ANYTHING to a data frame 🤯

As you go along, you can [use my Ultimate R Cheatsheet for getting R importing & data wrangling down](https://business-science.us17.list-manage.com/track/click?u=cc36813ecec32f8e7b5088961&id=cb418d7180&e=56afb996e2). It consolidates the most important R packages I use every day into one cheatsheet.



<h2>Method 1: Using tibble()<br><small>Make simple data frames from scratch.</small></h2>
 
The `tidyverse` uses a structure called a "tibble", which is simply a Data Frame (like an excel table) but with more informative printing than the default data frame. 

We use the `tibble()` function to create a "tibble" from scratch. Here's a simple tibble I created and compared to a basic R dataframe. **The tibble printing is much more informative**. 

![](/assets/2021-02-01-dataframes-in-r/method1_tibble.jpg)



<h2>Method 2: Using read_excel()<br><small>Use read_excel() to read excel worksheets.</small></h2>
 
Data importing is how we get data into R. There are a ton of ways to import data ([check out my Ultimate R Cheatsheet for getting R importing down](https://business-science.us17.list-manage.com/track/click?u=cc36813ecec32f8e7b5088961&id=1a2fef147d&e=56afb996e2)).

If we are working in Excel, we can import the data as a tibble using the `readxl` package's `read_excel()` function. 

![](/assets/2021-02-01-dataframes-in-r/method2_read_excel.jpg)



<h2>Method 3: Using as_tibble()<br><small>For converting from other data structures</small></h2>
 
The next function, `as_tibble()`, helps convert from list or matrix data structures to tibbles. Here we have a pretty complex (nested) list. 

![](/assets/2021-02-01-dataframes-in-r/method3_as_tibble_1.jpg)


Using `as_tibble()`, we just made it an organized data frame that's ready for analysis! 

![](/assets/2021-02-01-dataframes-in-r/method3_as_tibble_2.jpg)



<h2>Method 4: Using enframe()<br><small>For converting ANYTHING to a data frame. </small></h2>
 
The last function, `enframe()`, is a **MORE POWERFUL / FLEXIBLE** version of `as_tibble()`.

**Why do we need enframe()?**  

When `as_tibble()` fails, `enframe()` is your Plan B. 

![](/assets/2021-02-01-dataframes-in-r/method4_enframe.jpg)



<br>

## You're becoming a data ninja one R-tip at a time

<div class="text-center">
    <img src="/assets/2021-02-01-dataframes-in-r/ninja.gif">
</div>

<br>


### But if you really want to improve your productivity... 

<p class="text-center">
    Here's how to master R.  👇
    What happens after you learn R for Business. 
</p>

<img src="/assets/2021-02-01-dataframes-in-r/harry.gif">


When your CEO gets word of your [Shiny Apps](https://www.business-science.io/business/2020/08/05/build-data-science-app-3-months.html) saving the company tons of $$$ (cha-ching!). 👇

<img src="/assets/2021-02-01-dataframes-in-r/wizard.gif">


<p class="text-center"><strong>This is career acceleration.</strong></p>



<br>

### SETUP R-TIPS WEEKLY PROJECT

1. [Get the Code](https://mailchi.mp/business-science/r-tips-newsletter)

2. Check out the [R-Tips Setup Video](https://youtu.be/F7aYV0RPyD0).

Once you take these actions, you'll be set up to receive R-Tips with Code every week. =)

<br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}
