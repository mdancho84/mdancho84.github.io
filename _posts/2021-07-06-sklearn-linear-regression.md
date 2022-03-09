---
layout: post
title: "sklearn: Make your first linear regression model in Python [Video]"
date:   2021-07-06 09:58:00
excerpt: "Scikit Learn is a powerful package for making machine learning models. In this Python Tip, we cover how to make your first Linear Regression Model that adds a trendline to a plot."
author: "Matt Dancho"
categories: [python]
tags: [Learn-Python, sklearn, scikit-learn]
image: "/assets/2021-07-06-sklearn/000_sklearn_thumb.jpg"
image_preview: "/assets/2021-07-06-sklearn/000_sklearn_thumb.jpg"
---

> `Scikit Learn` is a powerful package for making machine learning models. In this Python Tip, we cover how to make your first <span style='color:blue;'>__Linear Regression Model__</span> that adds a trendline to a plot.

In this short tutorial, you'll make a Linear Regression Trendline Plot with Sklearn. 

![Linear Regression Trendline](/assets/2021-07-06-sklearn/regression_trendline_plot.jpg)

This article is part of Python-Tips Weekly, a <a href="https://learn.business-science.io/python-tips-newsletter" target="_blank">bi-weekly video tutorial</a> that shows you step-by-step how to do common Python coding tasks.


## Get the code

<p>Here are the links to get set up. 👇</p>

<ul>
    <li><a href="https://learn.business-science.io/python-tips-newsletter" target='_blank'>Get the Code</a></li>
    <li><a href="https://youtu.be/A2zlm3NkeDk" target='_blank'>YouTube Tutorial</a></li> 
</ul>




# Sklearn Linear Regression Modeling Video Tutorial<br><small>For those that prefer Full YouTube Video Tutorials.</small>

Learn how to use `sklearn` to make a __linear regression model__ and plot with a trendline. 

<figure class="text-center">
  <iframe width="100%" height="500" src="https://www.youtube.com/embed/A2zlm3NkeDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>



# Before we get started, get the Python Cheat Sheet

I'll use the [Ultimate Python Cheat Sheet](https://www.business-science.io/python-cheatsheet.html) to access `scikit learn` documentation in this tutorial.

### Ultimate Python Cheat Sheet:

First, [Download the Ultimate Python Cheat Sheet](https://www.business-science.io/python-cheatsheet.html). This gives you access to the entire Python Ecosystem at your fingertips via hyperlinked documenation and cheat sheets. 

<figure class='text-center'>
<a href="https://www.business-science.io/python-cheatsheet.html"> 
  <img src="/assets/2021-07-06-sklearn/ultimate_python_cheatsheet.jpg" style='max-width:100%;'>
  <figcaption>(Click image to download)</figcaption>
</a>
</figure>

<br>


## Click On Scikit-Learn

Navigate to the modeling section, and click on "Scikit Learn".

![Scikit Learn Cheat Sheet](/assets/2021-07-06-sklearn/cheatsheet_sklearn.jpg)

### Explore Scikit Learn

Now, you have access to the __Scikit Learn Documentation__ at your fingertips.

![Scikit Learn Documentation](/assets/2021-07-06-sklearn/sklearn_website.jpg)

Onto the tutorial. 



# Project: Making a Regression Trendline Plot

Let's check out how to make a professional __regression trendline plot__ with `Scikit Learn`. 

![Scikit Learn Correlation Plot](/assets/2021-07-06-sklearn/regression_trendline_plot.jpg)

<p class='text-center date'> 
  <a href='https://learn.business-science.io/python-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

## Step 1: Load Libraries and Data

First, let's load the libraries and data. From the libraries, we'll import `numpy` and `pandas` along with `LinearRegression` and `r2_score` from `sklearn` to start out.  

![Libraries](/assets/2021-07-06-sklearn/00_libraries.jpg)

<p class='text-center date'> 
  <a href='https://learn.business-science.io/python-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

We'll also load the `mpg_df` data set. 

![MPG Data](/assets/2021-07-06-sklearn/mpg_data.jpg)

<p class='text-center date'> 
  <a href='https://learn.business-science.io/python-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

## Step 2: Fit the Linear Regression Model

> Goal: Understand the relationship between Fuel Economy (MPG) and Vehicle Weight. 

Next, we can assess the relationship between vehicle fuel economy and vehicle weight using a Linear Regression Model. We fit the model first.  

### Code

We'll use the `LinearRegression()` method from `sklearn.linear_model` to train a Linear Regression Model. This is the same process as in the _Sklearn Documentation_ for OLS Regression. 

![Linear Regression Fit Model](/assets/2021-07-06-sklearn/01_sklearn_linear_regression.jpg)

<p class='text-center date'> 
  <a href='https://learn.business-science.io/python-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

## Step 3: Making Predictions

We can use the trained (fitted) Linear Regression Model to make predictions. Simply call the `predict()` method on a Pandas Data Frame containing vehicle weights. A Numpy Array is returned with predictions for the vehicle fuel economy (MPG). 

![Making Predictions](/assets/2021-07-06-sklearn/02_predictions.jpg)

<p class='text-center date'> 
  <a href='https://learn.business-science.io/python-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

## Step 4: Visualize with Plotnine

The last step is to visualize the relationship between fuel economy and vehicle weight. We can use `plotnine`. 

![Making Predictions](/assets/2021-07-06-sklearn/03_plotnine_code.jpg)

<p class='text-center date'> 
  <a href='https://learn.business-science.io/python-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

The visualization that is return clearly shows an inverse trend between vehicle fuel economy and weight. 

![Making Predictions](/assets/2021-07-06-sklearn/04_plotnine_plot.jpg)


# Summary

This was a short introduction to `Scikit Learn`, which is a foundational machine learning and modeling library in Python. We saw how we can use `sklearn` to make a linear regression model, and visualize the model prediction as a relationship with `plotnine`.  


But, this was a simple problem and you're eventually going to want to solve real-world problems that are much more complex:

- Most data science projects require much more data wrangling, visualization and reporting.

- Most data science teams use Pandas and Scikit Learn

- Many organizations are transitioning to automations (producing reports and data insights on-demand)


So, it makes sense to eventually learn Pandas and Scikit Learn to help with communication and working on R/Python teams. 

If you'd like to learn data science for business with `Pandas`, `Sktime`, `Plotnine`, and more Python packages then read on. 👇





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

<!-- {% include cta_rtrack.html %} -->

<!-- {% include top_rtips.html %} -->


