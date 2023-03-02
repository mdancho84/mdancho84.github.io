---
layout: post
title: Tidy Parallel Processing in R with furrr
date: 2021-09-14T06:12:00.000+00:00
excerpt: furrr is a critical package to speed up iterative calculations using tidyverse
  purrr syntax.
author: Matt Dancho
categories:
- R
tags:
- R-Bloggers
- Learn-R
- ggplot
- ggplot2
- ggalt
image: /assets/2021-09-14-furrr/046_furrr_thumb.jpg
image_preview: /assets/2021-09-14-furrr/046_furrr_thumb.jpg

---
I'm super excited to introduce `furrr`, an R package that makes it **painless** to speed up your R-code. I’ll show a **short demo** of furrr in this article.

* Parallel processing in the `tidyverse` couldn't be easier with the `furrr` package. 
* If you are familiar with the `purrr::map()` function, then you'll love `furrr::future_map()`.
* We'll use in this FREE R-Tip training to get a **2.6X speed-up in our code.**

## R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<p>Here are the links to get set up. 👇</p>

<ul>
<li><a href="https://learn.business-science.io/r-tips-newsletter" target='_blank'>Get the Code</a></li>
<li><a href="https://youtu.be/yoX1-xzsGUc" target='_blank'>YouTube Tutorial</a></li>
</ul>

# Video Tutorial<br><small>Follow along with our Full YouTube Video Tutorial.</small>

Learn how to use `furrr` in our 5-minute YouTube video tutorial.

<figure class="text-center">
<a href="https://youtu.be/yoX1-xzsGUc" target="_blank">
<img src="/assets/2021-09-14-furrr/046_furrr_thumb.jpg" style='max-width:100%;'> </a>
<figcaption>(Click image to play tutorial)</figcaption>
</figure>

# Parallel Processing \[`furrr` Tutorial\]

This tutorial showcases the awesome power of `furrr` for parallel processing. We'll get a **2.6X speed boost.**

<img src="/assets/2021-09-14-furrr/02_furrr_nested_models.jpg" style='max-width:100%;margin-bottom:5px;'>

## R Package Author Credits

This tutorial wouldn't be possible without the excellent work of [Davis Vaughan](https://twitter.com/dvaughan32), creator of `furrr`. For more information beyond the tutorial, check out the [furrr package here](https://furrr.futureverse.org/).

<img src="/assets/2021-09-14-furrr/logo-furrr.png" style='max-width:50%;margin-bottom:5px;display:block;margin-left:auto;margin-right:auto' alt='Furrr Logo'>

## Before we get started, get the R Cheat Sheet

`furrr` is great for parallel processing. But, you'll need to learn `purrr` to take full advantage. For these topics, I'll use the [Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html) to refer to `purrr` code in my workflow.

### Quick Example:

**Step 1.** Download the [**Ultimate R Cheat Sheet**](https://www.business-science.io/r-cheatsheet.html).

**Step 2.** Then **Click the "CS" hyperlink** to "purrr".

<a href="https://www.business-science.io/r-cheatsheet.html"> <img src="/assets/2021-09-14-furrr/ultimate_r_cheatsheet.jpg" style='max-width:80%;display:block;margin:auto;'>

<br>

**Step 3.** Reference the `purrr` cheat sheet.

<a href="https://www.business-science.io/r-cheatsheet.html"> <img src="/assets/2021-09-14-furrr/purrr_cheat_sheet.jpg" style='max-width:80%;display:block;margin:auto;'>

Onto the tutorial.

## Load the Libraries

<img src="/assets/2021-09-14-furrr/00_libraries.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>
<a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

## Get the Data

We'll use the `walmart_sales_weekly` dataset from `timetk`. We will do a bit of data manipulation using `dplyr`.

* **`select()`:** Used to select columns
* **`set_names()`:** Used to update the column names

<img src="/assets/2021-09-14-furrr/00_data_code.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>
<a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

The output is a "tidy" dataset in long format where there are:

* **7 ID's:** Each ID represents a walmart store department
* **Date and Value:** The date and value combination represents the sales in a given week

<img src="/assets/2021-09-14-furrr/00_data_output.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>
<a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

## Purrr: Nest + Mutate + Map

Next, we'll use a common sequence of operations to iteratively apply an "expensive" modeling function to each ID (Store Deparment) that models the sales data as a function of it's trend and month of the year.

**Pro-Tip 1:** [Use the R cheat sheet](https://www.business-science.io/r-cheatsheet.html) to refer to `purrr` functions.

**Pro-Tip 2**: If you need to master R, then I'll talk about my [5-Course R-Track](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series) at the end of the tutorial. It's a way to up-skill yourself with the data science skills that organizations demand. I teach `purrr` iteration and nested structures in the R-Track.

### Purrr Model Nested Data

<img src="/assets/2021-09-14-furrr/01_purrr_nest_map.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>
<a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

We'll first perform our "expensive modeling" with `purrr`, which runs each operation sequentially:

1. **`nest()`:** To convert the data to a "Nested" structure, where columns contain our data as a list structure. This generates a column called "data", with our nested data.
2. **`mutate()` and `map()`:** We use the combination of `mutate()` to first add a column called "model" and `purrr::map()` to iteratively apply an expensive function.
3. **"Expensive Function":** The function that we apply is a linear regression using the `lm()` function. We use `Sys.sleep(1)` to simulate an expensive calculation that takes 1-second during each iteration.

### Purrr Nested Models and Timing

The output is our nested data now with a column called "model" that contains the 7 Linear Regression Models we just made.

<img src="/assets/2021-09-14-furrr/01_purrr_nested_models.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>
<a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

Purrr operations can be expensive. In our case the operation **took 7.14 seconds**, mainly because we told the "Expensive Function" to sleep for 1-second before making the model.

## Furrr: Nest + Mutate + Future Map

Now, we'll redo the calculation, this time changing `purrr::map()` out for `furrr::future_map()`, which will let us run each calculation in parallel for a speed boost.

### Furrr Set Plan and Model Nested Data

The `furrr` code is the same as before using `purrr` with two important changes:

1. **Add a `plan()`:** This allows you to set the number of CPU cores to use when parallel processing. I have 6-cores available on my computer, so I'll use all 6.
2. **`future_map()`:** We swap `purrr::map()` out for `furrr::future_map()`, which let's the iterative process run in parallel.

<img src="/assets/2021-09-14-furrr/02_furrr_future_map.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>
<a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

### Furrr Nested Models and Timing

The output is the same nested data structure as previously. But we got a 2.6X Speed up (2.57-seconds with furrr vs 7.14-seconds with purrr)

<img src="/assets/2021-09-14-furrr/02_furrr_nested_models.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>
<a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

# Summary

We learned how to parallel process with `furrr`. But, there's a lot more to modeling and data science. **And, if you are just starting out, then this tutorial was probably difficult. That's OK because I have a solution.**

If you'd like to learn data visualizations, data wrangling, `shiny` apps, and data science for business with R, then read on. 👇

{% include cta_struggles_rtrack.md %}
