---
layout: post
title: "3 Ways to Read Multiple CSV Files: For-Loop, Map, List Comprehension"
date:   2021-09-21 06:01:00
excerpt: "Reading many CSV files is a common task for a data scientist. In this free tutorial, we show you 3 ways to streamline reading CSV files in Python."
author: "Matt Dancho"
categories: [python]
tags: [Learn-Python, Python-Bloggers, For-Loop]
image: "/assets/2021-09-22-python-csv/006_read_csv_thumb.jpg"
image_preview: "/assets/2021-09-22-python-csv/006_read_csv_thumb.jpg"
---

Reading many CSV files is a common task for a data scientist. In this free tutorial, we show you 3 ways to streamline reading CSV files in Python. __You'll read and combine 15 CSV Files using the top 3 methods for iteration.__ 

## Python Tips Weekly

This article is part of Python-Tips Weekly, a <a href="https://learn.business-science.io/python-tips-newsletter" target="_blank">bi-weekly video tutorial</a> that shows you step-by-step how to do common Python coding tasks.

<p>Here are the links to get set up. 👇</p>

<ul>
    <li><a href="https://learn.business-science.io/python-tips-newsletter" target='_blank'>Get the Code</a></li>
    <li><a href="https://youtu.be/TN_Cvyq_rxE" target='_blank'>YouTube Tutorial</a></li> 
</ul>


# Video Tutorial<br><small>Follow along with our Full YouTube Video Tutorial.</small>

This 5-minute video covers reading multiple CSV in python.  

<figure class="text-center">
    <a href="https://youtu.be/TN_Cvyq_rxE" target="_blank">
    <img src="/assets/2021-09-22-python-csv/006_read_csv_thumb.jpg" style='max-width:100%;'> </a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>

# Read 15 CSV Files [Tutorial]

This FREE tutorial showcases the awesome power of `python` for reading CSV files. We'll read __15 CSV files__ in this tutorial. 

<img src="/assets/2021-09-22-python-csv/00-csv-files.jpg" style='max-width:100%;margin-bottom:5px;'>


## Before we get started, get the Python Cheat Sheet

The Python Ecosystem is LARGE. To help, I've curated many of the __80/20 Python Packages__, those I use most frequently to get results. Simply [Download the Ultimate Python Cheat Sheet](https://www.business-science.io/python-cheatsheet.html) to access the entire Python Ecosystem at your fingertips via hyperlinked documentation and cheat sheets. 

<figure class='text-center'>
<a href="https://www.business-science.io/python-cheatsheet.html" target="_blank"> 
  <img src="/assets/2021-07-06-sklearn/ultimate_python_cheatsheet.jpg" style='max-width:100%;'>
  <figcaption>(Click image to download)</figcaption>
</a>
</figure>

<br>


Onto the tutorial. 



## Project Setup



First, load the libraries. We'll import `pandas` and `glob`. 

- `Pandas`: The main data wrangling library in Python

- `glob`: A library for locating file paths using text searching (regular expressions)

Second, use `glob` to extract a list of the file paths for each of the 15 CSV files we need to read in.  


![Libraries](/assets/2021-09-22-python-csv/00-libraries.jpg)

<p class='text-center date'> 
  <a href='https://learn.business-science.io/python-tips-newsletter' target ='_blank'>Get the code.</a>
</p>




## Method 1: For-Loop

The most common way to repetitively read files is with a for-loop. It's a great way for beginners but it's not the most concise. We'll show this way first. 

![Python For-Loop for Reading CSV Files](/assets/2021-09-22-python-csv/01-csv-for-loop.jpg)

<p class='text-center date'> 
  <a href='https://learn.business-science.io/python-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

We can see that this involves 3-steps:

1. __Instantiating an Empty List:__ We do this to store our results as we make them in the for-loop. 

2. __For-Each filename, read and append:__ We read using `pd.read_csv()`, which returns a data frame for each path. Then we append each data frame to our list. 

3. __Combine each Data Frame:__ We use `pd.concat()` to combine the list of data frames into one big data frame. 

__PRO-TIP:__ Combining data frames in lists is a common strategy. Don't forget to use `axis=0` to specify row-wise combining.  





## Method 2: Using Map

The `map()` function is a more concise way to iterate. The advantage is that we don't have to instantiate a list. However, it can be more confusing to beginners. 

### How it works:

Map takes in two general arguments:

1. __func:__ A function to iteratively apply

2. __*iterables__: One or more iterables that are supplied to the function in order of the functions arguments. 

![How Map Works (Python)](/assets/2021-09-22-python-csv/02-how-map-works.jpg)

<p class='text-center date'> 
  <a href='https://learn.business-science.io/python-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

## Let's use it. 

Ok, so let's try `map()`. 

![Python Map for Reading CSV Files](/assets/2021-09-22-python-csv/02-using-map.jpg)

<p class='text-center date'> 
  <a href='https://learn.business-science.io/python-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

We use 3-steps:

1. __Make a Lambda Function:__ This is an anonymous function that we create on the fly with the first argument that will accept our iterable (each filename in our list of csv file paths). 

2. __Supply the iterable:__ In this case, we provide our list of csv files. The map function will then iteratively supply each element to the function in succession. 

3. __Convert to List:__ The `map()` function returns a map object. We can then convert this to a list using the `list()` function. 

__PRO-TIP:__ Beginners can be confused by the "map object" that is returned. Just simply use the `list()` function to extract the results of `map()` in a list structure.   

## Method 3: List Comprehension

Because we are returning a list, even easier than `map()`, we can use a __List Comprehension.__ A list comprehension is a streamlined way of making a for-loop that returns a list. Here's how it works. 

![Python List Comprehension for Reading CSV Files](/assets/2021-09-22-python-csv/03-list-comprehension.jpg)

<p class='text-center date'> 
  <a href='https://learn.business-science.io/python-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

1. __Do this__: Add the function that you want to iterate. The parameter must match your looping variable name (next).

2. __For each of these__: This is your looping variable name that you create inside of the list comprehension. Each of these are elements that will get passed to your function. 

3. __In this:__ This is your iterable. The list containing each of our file paths. 


# Summary

There you have it. You now know how to read CSV files using 3 methods:

1. For-Loops
2. Map
3. List Comprehension

But there's a lot more to learning data science. And if you're like me, you're interested in a fast track system that will advance you __without wasting time__ on information you don't need. 

The solution is my course, Data Science Automation with Python

# Data Science Automation with Python Course

Tired of struggling to learn data science? Getting stuck in a sea of neverending resources? __Eliminate the confusion and speed up your learning in the process.__ 

Businesses are transitioning manual processes to Python for automation. We teach you skills that organizations need right now. 

Learn how in our new course, [Python for Data Science Automation](https://university.business-science.io/p/python-for-data-science-automation-ds4b-101p). Perform an end-to-end business forecast automation using `pandas`, `sktime`, and `papermill`, and learn Python in the process. 

{% include cta_101P.html %}





<!-- This is markdown code. It wont look formatted in your browser, 
    but will be fine when published. to the website -->

<!-- {% include cta_rtrack.html %} -->

<!-- {% include top_rtips.html %} -->


