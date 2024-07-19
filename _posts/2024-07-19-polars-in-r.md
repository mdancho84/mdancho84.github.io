---
layout: post
title: "Shockingly-fast data manipulation in R with polars"
date: 2024-07-19 11:00:00 -0500
excerpt: "Hey guys, welcome back to my R-tips newsletter. In today's lesson, I'm sharing how to use Polars in R for shockingly-fast data manipulation. Let's go!" 
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- polars
image: "/assets/082_polars_in_r_thumb.jpg"
image_preview: "/assets/082_polars_in_r_thumb.jpg"

---

Hey guys, welcome back to my [R-tips newsletter](https://learn.business-science.io/r-tips-newsletter?el=website). `Polars` is NOW available in R! Yes-- The shockinlgy-fast data manipulation library built on top of Rust is now in R. Today, I'm excited to show off some of Polar's capabilities for fast financial and time series analysis. Let's go!

### Table of Contents

Here's what you're learning today:

* **What is polars?** You'll discover what `polars` is and how it accomplishes shockingly-fast data manipulation
* **Benefits of using Polars** Which types of data analysis can benefit from `polars` the most. 
* **How to use Polars inside of R** I have prepared a full R code tutorial ([get the code here](https://learn.business-science.io/r-tips-newsletter?el=website)). 

![Polars in R](/assets/082_polars_in_r_thumb.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 082 Folder)</a></p>

---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> 
    <li><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Sign up for our R-Tips Newsletter and get the code.</a></li> 
     <li><a href="https://youtu.be/WiFiUdVTW2g">YouTube Tutorial</a></li>
</ul>

# This Tutorial is Available in Video (9-minutes)

I have a 9-minute video that walks you through setting up `polars` in R and running your first financial time series data analysis.  👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/WiFiUdVTW2g" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


# What is Polars?

According to [the `polars` documentation](https://pola-rs.github.io/r-polars/):

> The polars package for R gives users access to a **lightning fast Data Frame library written in Rust**. Polars’ **embarrassingly parallel execution**, cache efficient algorithms and expressive API makes it perfect for efficient data wrangling, data pipelines, snappy APIs, and much more besides. Polars also supports **“streaming mode” for out-of-memory operations**. This allows users to analyze datasets many times larger than RAM.

### Lightning-Fast Data Frame Library Written in Rust

The key here is that, under the hood, both the R and Python implementations of `polars` use the hyper-scalable and blazingly fast `Rust` library. Key aspects of Rust include:

1. **Memory Safety:** Rust ensures memory safety without needing a garbage collector. This is achieved through its ownership system, which enforces strict rules on how memory is managed.

2. **Concurrency:** Rust is designed to make it easy to write concurrent programs. The language's ownership system helps prevent data races, which are a common problem in concurrent programming.

3. **Zero-cost Abstractions:** Rust aims to provide high-level abstractions without the cost typically associated with them in terms of performance. This allows developers to write efficient code without sacrificing readability.

4. **Performance:** Rust's performance is comparable to C and C++ due to its focus on low-level control over system resources.

5. **Tooling:** Rust comes with a powerful set of tools, including cargo (the package manager and build system), rustc (the Rust compiler), and rustfmt (a code formatting tool).

## Rust in a Nutshell

Rust is fast. It's design is focused on parallel processing. And because of that `polars` is fast, parallel, lazy (in a good way), and really good for most data operations. 

# Which Data Manipulations is Polars Good For?

I've been testing out `polars` for quite a while in both Python and R. 

For background, as of a year ago I began work on `pytimetk`, which replicates many of the R `timetk` packages time series analysis features in Python. And for that project, our team has internally used a `polars` engine for many time series operations that are known to be resource intense. 

## Polars vs Pandas: Speed Comparison and Performance Test Results:

We've published [our performance results here.](https://business-science.github.io/pytimetk/performance/01_speed_comparisons.html)

![Polars Beats Pandas](/assets/082_polars_beats_pandas.jpg)

1. **Rolling Operations:** Polars can be 10X to 3500X faster than Pandas

2. **Expanding Operations:** 3X to 500X Faster

3. **Aggregations (Summarizations):** 13X Faster

**The bottomline is that Polars is fast vs Pandas.** It's especially good for grouped time series operations including rolling, expanding, and aggregating operations. 

I expect Polars in R to be faster than `dplyr`. However, I have not run similar tests (yet).

# Tutorial: How to use Polars inside of R

It takes about 30 seconds to get `polars` set up so you can start using shockingly-fast data manipulation inside of R. All the tutorial code shown is available in the [R-Tips Newsletter folder for R-Tip 082](https://learn.business-science.io/r-tips-newsletter?el=website).

![Get the Code](/assets/082_get_the_code.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 082 Folder)</a></p>

## Step 1 - Install polars:

The first step is to set up `polars`. Polars is not on CRAN as of the writing of this article. But it's simple to install from the r-multiverse.org team.

Run this line of code:

``` r
install.packages("polars", repos = "https://community.r-multiverse.org")
```

## Step 2 - Load the Libraries and Data

Once `polars` is installed, load the libraries and data witht his code. 

![Libraries and Data](/assets/082_libraries_data.jpg)

Here's the `stock_data.csv` once it's read with `pl$read_csv()`. A few key points about the Polars Data Frame Structure:

- Shape of the data is shown at the top. 
- Some columns and rows will not be shown when printed to the screen(identifed with ...)
- The "Date" column is a `str` data type
- The stocks (25 total) are `f64` data type (float 64)

![Stock Data](/assets/082_stock_data.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 082 Folder)</a></p>

## Step 3 - Pivot to Long Format for Grouped Data Analysis

The next step is to get the data into a format so we can begin to do grouped analysis. Use the `unpivot()` function to go from wide-to-long format: 

![Wide to Long](/assets/082_wide_to_long.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 082 Folder)</a></p>

**The transformation was done shockingly-fast.** This is what the long format looks like:

![Long Format Stock Data](/assets/082_long_stock_data.jpg)

To visualize the data, run this code:

![Visualize Stock Data](/assets/082_visualize_stock_data.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 082 Folder)</a></p>

## Step 4 - Moving Averages with Polars' Rolling Mean

The last step we'll cover is how to perform moving averages using `polars` rolling mean functionality. This is one of the biggest benefits to using Polars. 

Run this code to perform a 10-day and 50-day moving average over each of the 25 stocks:

![Rolling Mean](/assets/082_rolling_mean.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 082 Folder)</a></p>

Again, the performance is undeniable. In milliseconds, the rolling calculations are complete. 

Run this code to visualize the result:

![Visualize Moving Averages](/assets/082_visualize_moving_averages.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 082 Folder)</a></p>

**We can quickly see which stocks have momentum** from the 10-day and 50-day moving averages (those with Red lines above the Green Lines).


## Reminder: The code is available free inside R-tips

All of the code you saw today is available in [R-Tips Newsletter folder for R-Tip 082](https://learn.business-science.io/r-tips-newsletter?el=website)

![Get The Code](/assets/082_get_the_code.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 082 Folder)</a></p>



# Conclusions:

Polars is one of those libraries that is quickly becoming a standard in the Python ecosystem. I'm glad to see that R is getting the same treatment. It's simply the fastest data manipulation library I've come across. And I've tried them all. 

If you would like to **grow your Business Data Science skills**, then please read on...

{% include cta_struggles_rtrack.md %}


