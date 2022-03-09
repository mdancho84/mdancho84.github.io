---
layout: post
title: "Pandas Profiling: Make Exploratory Data Analysis Reports"
date:   2021-06-01 10:15:00
excerpt: "Pandas Profiling is an awesome python package for Exploratory Data Analysis (EDA). It extends pandas for statistical summaries including correlations, missing values, distributions, and descriptive statistics. It's great for understanding Data Quality too!"
author: "Matt Dancho"
categories: [python]
tags: [Learn-Python, pandas, pandas profiling, plotnine]
image: "/assets/2021-06-01-pandas-profiling/000_pandas_profiling_thumb_2.jpg"
image_preview: "/assets/2021-06-01-pandas-profiling/000_pandas_profiling_thumb_2.jpg"
---

This article is part of Python-Tips Weekly, a <a href="https://learn.business-science.io/python-tips-newsletter" target="_blank">bi-weekly video tutorial</a> that shows you step-by-step how to do common Python coding tasks.

<br/>

<p>Here are the links to get set up. 👇</p>

<ul>
    <li><a href="https://learn.business-science.io/python-tips-newsletter" target='_blank'>Get the Code</a></li>
    <li><a href="https://youtu.be/-Cdv9C9hLeE" target='_blank'>YouTube Tutorial</a></li> 
</ul>



# Pandas Profiling Video Tutorial<br><small>For those that prefer Full YouTube Video Tutorials.</small>

Learn how to use `Pandas Profiling` in our free 8-minute YouTube video. 

<figure class="text-center">
    <a href="https://youtu.be/-Cdv9C9hLeE" target = '_blank'>
    <img src="/assets/2021-06-01-pandas-profiling/000_pandas_profiling_thumb_3.jpg" style='max-width:100%;'> </a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>

<p class='text-center date'>
  <a href='https://youtu.be/-Cdv9C9hLeE' target='_blank'> Watch our full YouTube Tutorial</a>
</p>

# What is Pandas Profiling?

`Pandas Profiling` is an awesome python package for __Exploratory Data Analysis (EDA)__. It extends pandas for statistical summaries including correlations, missing values, distributions, and descriptive statistics. It's great for understanding Data Quality too!

<img src="/assets/2021-06-01-pandas-profiling/pandas_profiling.gif" style='max-width:100%'>




# Before we get started, get the Python Cheat Sheet

`Pandas Profiling` is great for exploring data. But, you'll still need to learn how to wrangle data with `pandas` and visualize data with `plotnine`. For those topics, I'll use the [Ultimate Python Cheat Sheet](https://www.business-science.io/python-cheatsheet.html) to refer to `pandas` and `plotnine` code in my workflow.

### Quick Example:

[Download the Ultimate R Cheat Sheet](https://www.business-science.io/python-cheatsheet.html) __Then Click the "Pandas Profiling" on Page 2__, which opens the Pandas Profiling Documentation.

<a href="https://www.business-science.io/python-cheatsheet.html"> <img src="/assets/2021-06-01-pandas-profiling/cheatsheet_pandas_profiling.jpg" style='max-width:100%;'>

<br>

Now you're ready to quickly reference `Pandas Profiling` functions.

![Pandas Profiling Documentation](/assets/2021-06-01-pandas-profiling/pandas_profiling_docs.jpg)

Onto the tutorial. 

# How Pandas Profiling Works


Pandas profiling is super simple to run. Simply:

1. Import Packages
2. Read data
3. Run the `ProfileReport()`

![Pandas Profiling Code](/assets/2021-06-01-pandas-profiling/pandas_profiling_code.jpg)
<p class='text-center date'> 
  <a href='https://learn.business-science.io/python-tips-newsletter' target ='_blank'>Get the code.</a>
</p>


This generates the Pandas Profiling Report. 

![Pandas Profiling Report](/assets/2021-06-01-pandas-profiling/pandas_profiling_report.jpg)


# Getting Insights from the Pandas Profiling Report

Let's quickly pan to the "Correlation" Report Section. We can see that there is a negative correlation between Fuel Economy (mpg) and Engine Horsepower. __But how to we explore this negative relationship further?__

![Pandas Profiling Report](/assets/2021-06-01-pandas-profiling/correlation_insights.jpg)
<p class='text-center date'> 
  <a href='https://learn.business-science.io/python-tips-newsletter' target ='_blank'>Get the code.</a>
</p>


# Plotnine to the Rescue <br><small>ggplot2 for Python Users</small>

We can use `plotnine` to quickly make a visualization using `geom_point()` and `geom_smooth()`. This highlights the relationship and showcases that its nonlinear. It drops fast initially but beyond 150 HP the horsepower stabilizes.

![Horsepower vs Fuel Economy](/assets/2021-06-01-pandas-profiling/plotnine_plot.jpg)
<p class='text-center date'> 
  <a href='https://learn.business-science.io/python-tips-newsletter' target ='_blank'>Get the code.</a>
</p>


# Why Learning plotnine is essential

I wouldn't be nearly as effective as a data scientist without knowing `plotnine`. In fact, data visualization has been one of two skills that have been critical to my career (with the other one being data transformation).



## Career Tip: <span style='color:#18bc9c;'>Learn plotnine</span>

If I had one piece of advice, it would be to start learning `plotnine`. Let me explain.

![Plotnine Logos](/assets/2021-06-01-pandas-profiling/plotnine_logos.jpg)

Learning `plotnine` in Python (and `ggplot2` in R) helped me to:

- __Explain complex topics__ to non-technical people
- __Develop good reports__ that showcased important points visually
- __Make persuasive arguments__ that got the attention of Senior Management and even my CEO

So, yes, learning `plotnine` / `ggplot2` was absolutely essential to my career. I received many promotions and got the attention of my CEO using `plotnine` effectively.

If you'd like to learn `plotnine` and data science for business, then read on. 👇



# My Struggles with Learning Data Science

It took me a long time to learn data science. And I made a lot of mistakes.  I specifically had a tough time navigating the ever increasing landscape of tools and packages, trying to pick between R and Python, and getting lost along the way.

__If you feel like this, you're not alone.__

In fact, that's the driving reason that I created Business Science and Business Science University ([You can read about my personal journey here](https://www.business-science.io/business/2019/07/22/how-i-started-my-data-science-business.html)).

What I found out is that:

1. __Data Science does not have to be difficult, it just has to be taught smartly__

2. __Anyone can learn data science fast provided they are motivated.__

# How I can help

If you are interested in learning Python and the ecosystem of tools at a deeper level, then I have a streamlined program that will __get you past your struggles__ and improve your career in the process. 

It's called the [Python for Data Science Automation](https://university.business-science.io/p/python-for-data-science-automation-ds4b-101p). It's an integrated course that teaches you Python by integrating tools and solving real business problems.

![Tool Integration](https://www.filepicker.io/api/file/kcmYQ8jnTO6OF7fHg0QP)

The result is that __you break through previous struggles__, learning from my experience & our community of 2000+ data scientists that are ready to help you succeed. You'll learn a ton going through our Business Process Automation project. 

![Business Process Automation](https://www.filepicker.io/api/file/RLc1EZC0TEmVp1LVWlz9)



# Ready to take the next step? 

Then [let's get started.](https://university.business-science.io/p/python-for-data-science-automation-ds4b-101p)


<figure class="text-center">
    <a href="https://university.business-science.io/p/python-for-data-science-automation-ds4b-101p" target = '_blank'>
    <img src="/assets/2021-06-01-pandas-profiling/python_for_data_science_automation_course.jpg" style='max-width:100%;'> </a>
  <figcaption>(Click image to go to course)</figcaption>
</figure>

<!-- This is markdown code. It wont look formatted in your browser, 
    but will be fine when published. to the website -->

<br><br>

<!-- {% include cta_rtrack.html %} -->

<!-- {% include top_rtips.html %} -->


