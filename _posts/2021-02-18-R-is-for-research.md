---
layout: post
title: "R is for Research, Python is for Production"
date: 2021-02-18 08:00:00
excerpt: "Both R and Python are great. We’ll showcase some of the strengths of each language in this article by showcasing where the major development efforts are within each ecosystem."
author: "Matt Dancho and Jarrell Chalmers"
categories: [Business]
tags: [R-Bloggers, Learn-R, Learn-Python, Teams]
image: /assets/2021-02-18-R-is-for-research/Join_Forces_meme.png
image_preview: /assets/2021-02-18-R-is-for-research/Join_Forces_meme_preview.png
---


<div style="background-color:whitesmoke; padding:14px;" class="text-center">
  <h4>&#128073; <a href="https://mailchi.mp/business-science/blog-registration">Sign Up For More Blog Articles</a> &#128072;</h4>
</div>


<br>
_**Updated July 2021**_

Both R and Python are great. We’ll showcase some of the strengths of each language in this article by showcasing where the major development efforts are within each ecosystem.

<h2>R is for Research</h2>

<img src="/assets/2021-02-18-R-is-for-research/Tidyverse_meme.png" />
<br>

If I had to describe R in one word, it would be: `tidyverse`. It has made research tasks - wrangling data, visualizing outcomes, iterating from idea to code - painless. In fact, it’s a joy. I’ll explain <strong>why R is for Research</strong> using the <a href="https://www.business-science.io/r-cheatsheet">Ultimate R Cheat Sheet</a>, a one-stop shop for the R-ecosystem.

<p class="text-center">
  <a href="https://www.business-science.io/r-cheatsheet"><img src="/assets/2021-02-18-R-is-for-research/R_Workflow.png"  style="max-width:100%;"/></a>
</p>
<br>

When starting with R, Tidyverse is an ideal place to begin your journey. This is the formalized set of packages and tools that have a consistently structured programming interface, as opposed to the base version of R that was notably more complex and less user friendly.

<p class="text-center">
<a href="https://www.business-science.io/r-cheatsheet"><img src="/assets/2021-02-18-R-is-for-research/R_Workflow_Detail.png"  style="max-width:100%;"/></a>
</p>

We see many smaller packages that tackle specific problems. The following are the most important packages:

<h3>Dplyr &amp; ggplot2</h3>

Two great packages in R that you’ll make daily decisions from are dplyr and ggplot2, which amongst other things, are great for <strong>data manipulation and visualization</strong>. These are the two most important skills a data scientist or data analyst can have.

<h3>Rmarkdown</h3>

One of the most exceptional aspects of R is without a doubt Rmarkdown, which is a framework for creating <strong>reproducible reports</strong>, presentations, blogs, journals and more! Imagine having a report that runs itself, and creates an easily shareable HTML page or PDF to share with your team. Definitely a more streamlined approach than hundreds of clicks in Excel every Monday morning.

<h3>Shiny</h3>

Shiny is a framework within R that is used to create <strong>interactive web applications</strong>. One of the best features of Shiny is providing the non data focused members of your team with the data science tools they need for decision making through an easy to use GUI (graphical user interface). Imagine your team getting together for a Monday afternoon planning session, having already reviewed the previous week’s report created in Rmarkdown, and running simulations using your collaborative Shiny web application to determine where the data is guiding you next.

<h3>Where is R Growing?</h3>

Next, if we scroll through to the “Special Topics Page”, we can see the R ecosystem is growing. This is a key feature that distinguishes the R Ecosystem from the Python Ecosystem.

<img src="/assets/2021-02-18-R-is-for-research/Special_Topics.png">

We can see that R has expanded into:

- Time Series and Forecasting: `Modeltime` and `Timetk`
- Financial Analysis (and other domains): `Tidyquant`, `Quantmod`
- Network Analysis and Visualization: `Tidygraph` and `ggraph`
- Text Analysis: `Tidytext` and `Text Recipes`
- Geospatial Analysis and Visualization: Thematic Maps
- Machine Learning: `H2O`, `Tidymodels`, and `MLR3`

<h3>What is R missing?</h3>

There is noticeably a gap in the Production. R has `Shiny` (Apps) and `Plumber` (APIs, not shown), but Automation Tools like Airflow and Cloud Software Development Kits (SDKs) are primarily available in Python.

<h3>R Overall</h3>

R is really something special when doing research because of the tidyverse, which streamlines data wrangling and visualization. Honestly, you’ll be 3-5X more productive doing data wrangling in R once you become proficient with the tidyverse.



<h2>Why is Python Great?</h2>

Python is amazing too, but for different reasons. Let’s take a Python Package like `OpenCV` - for Computer Vision.

<img src="/assets/2021-02-18-R-is-for-research/OpenCV_Meme.png"/>

This is a real strength for the Python language because we can do crazy cool things like Object Detection with OpenCV.

<img src="/assets/2021-02-18-R-is-for-research/Object_Detection.png"/>
<br>

But, how much does this apply to my daily life? Around zero. Why? Because I’m a business analyst and data scientist that works with SQL databases. I’m more interested in how Python will help me better mine for information and productionalize the results.

<p class="text-center">
<a href="https://www.business-science.io/python-cheatsheet"><img src="/assets/2021-02-18-R-is-for-research/Python_Workflow.png" style="max-width:100%;"/></a>
</p>
<br>

Let’s check out the Python Ecosystem using the <a href="https://www.business-science.io/python-cheatsheet">Ultimate Python Cheat Sheet</a> (note that this is different from the <a href="https://www.business-science.io/r-cheatsheet">R cheat sheet</a> shown earlier).

<p class="text-center">
<a href="https://www.business-science.io/python-cheatsheet"><img src="/assets/2021-02-18-R-is-for-research/Python_Workflow_Detail.png"  style="max-width:100%;"/></a>
</p>
<br>

We see that there’s Pandas for essentially everything related to import, tidying and data wrangling. So what is Pandas? Pandas is an <strong>object-oriented tool</strong> for data wrangling in Python.

<h3>Pandas vs Tidyverse</h3>

While programmers love pandas, business analysts may initially struggle with the object-oriented (<em>pythonic</em>) way of having Data Frames with methods.

{% highlight python %}
customer_counts_df = df.groupby('customer_id').value_counts()
{% endhighlight %}


Everything in Python is an object, and we call these methods (e.g. `df.groupby()`, and `df.value_counts()`) on the object. This call doesn’t seem too bad. But we are normally trying to do many more wrangling operations. It gets very challenging, less readable, and more complex.

Conversely, in R using the tidyverse we use a different syntax with a pipe (`%>%`). This is very similar to SQL and the flow of data wrangling how a user thinks.

{% highlight r %}
customer_counts_tbl <- df %>%
    group_by(customer_id) %>%
    summarize(count = n())
{% endhighlight %}



This tidyverse data wrangling workflow makes it often much easier for analysts to expand the set of operations into 10 or more data wrangling commands. Remember, the challenge isn’t typing code, it’s turning your thoughts into code. This is where the tidyverse is really powerful.

<h3>Key Strengths of Python lie in Production ML</h3>

OK, so why is Python great for business? It turns out that it’s strengths lie in Machine Learning and Production!

<img src="/assets/2021-02-18-R-is-for-research/Special_Topics_2.png"/>

We can see that Python has well-developed Production ML-oriented tools:

- Automation - `Airflow`, `Luigi`
- Cloud - AWS, Google Cloud, and Azure software development kits
- Machine Learning - `ScikitLearn`
- Deep Learning and Computer Vision - `PyTorch`, `TensorFlow`, `MXNet`, `OpenCV`
- NLP - `spaCy`, `NLTK`

These production-oriented tools make it easier to work with others that interact with cloud and operations as part of a larger IT team because they are already in Python. No need to include R and any extra dependencies into a production system.

<h3>Python Overall</h3>

If you can get over the Pandas learning curve, then Python becomes a great tool. Most IT teams know Python, so your code will fit right into their workflow. Just realize that you may be 3X to 5X less productive at Research than your R counterparts due to the tidyverse boost.



<h2>Which Language Should You Learn?</h2>

The decision can be challenging because they <strong>both Python and R have clear strengths</strong>.

<ul>
    <li><strong>R is exceptional for Research:</strong> Making visualizations, telling the story, producing reports, and making MVP apps with Shiny. From concept (idea) to execution (code), R users tend to be able to accomplish these tasks 3X to 5X faster than Python users, making them very productive for research. </li>
    <li><strong>Python is exceptional for Production ML:</strong> Integrating machine learning models into production systems where your IT infrastructure relies on automation tools like Airflow or Luigi.</li>
</ul>


## Why Not Learn Both R and Python?

<img src="/assets/2021-02-18-R-is-for-research/Work_Together_meme.png"/>

Both R and Python are amazing with different strengths. If you know both, you become more valuable to a team. And, with the development of __two key technologies__, it now possible to use both languages together. What technologies am I talking about? `reticulate` and `rpy2`.

__What is `reticulate`?__ Reticulate is an R package that makes it easy to connect to Python libraries. For example, the Google Adwords API is written in Python, but your research is in R. Now you can use reticulate to connect to adwords using the Python API right from R. 

__What is `rpy2`?__ Rpy2 is a Python package that makes it easy to connect to R libraries. For example, if you need the `modeltime` forecasting library in R, you can connect up to it allowing you to run Panel Data forecasts from inside of your Python workflow. 

__Learning to leverage both R and Python means you are <span style='color:blue'>immediately valuable to a data science team.</span>__

So how should you go about learning to integrate R and Python? Well, it starts by learning both R and python. 

## Learning Both R and Python

To leverage both R and Python together, you need to know both R and Python. That's why over the past 3-years, we have been developing a full system of courses. The __Course Development Roadmap__ looks like this. Both the Python and R-Tracks follow parallel paths that lead to using both together with `reticulate` and `py2`. 

![R Python Tracks](/assets/2021-02-18-R-is-for-research/r_python_tracks.jpg)


Course Status:

- 6 of the courses are completed, with more coming soon.
- [5 R-Track Courses are completed](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series)
- [1 Python-Track Course is completed](https://university.business-science.io/p/python-for-data-science-automation-ds4b-101p)
- __Next Course: Machine Learning for Business with Python (Coming Q3 2021)__
- __R/Python Teams: Expected in Q1 2022__

### Join the Waitlist: Machine Learning for Business with Python (201-P) 

The next course in our system teaches Python with `scikit learn` and a host of powerful tools for __Production Machine Learning.__ [Join the Machine Learning for Business with Python Course Waitlist](https://mailchi.mp/business-science/machine-learning-python-waitlist). 

<strong>This waitlist is for:</strong>

<ul>
    <li>People that want to learn Machine Learning with the Python Ecosystem</li>
    <li>R users that want to learn Python</li>
    <li>Python users that want to learn data science for business</li>
</ul>

The course pre-requisite is:

- [Python for Data Science Automation (DS4B 101-P)](https://university.business-science.io/p/python-for-data-science-automation-ds4b-101p).

<span style='font-size:36px;text-align:center;'>
<a href='https://mailchi.mp/business-science/machine-learning-python-waitlist' target='_blank'>
Join the Machine Learning for Business with Python Course Waitlist
</a>
</span>

<!--
One thing I haven’t mentioned is that <strong>I’m building a course</strong> that teaches Python from an R-users perspective. The core idea is that Python can be a tremendous asset, and being able to use tools like R’s reticulate to communicate between R and Python can make you a real asset to a data science team.
<a href="https://mailchi.mp/business-science/r-python-teams">Join the R/Python Teams course waitlist</a>.

<strong>This waitlist is for:</strong>

<ul>
    <li>People that want to learn the benefits of collaborative R/Python Teams</li>
    <li>R users that want to learn Python</li>
    <li>Python users that want to learn about tools that help R users work with them</li>
</ul>

<br>
<p class='text-center'>
<a href="https://mailchi.mp/business-science/r-python-teams" class="btn btn-lg btn-success">Join the R/Python Teams Course Waitlist</a>
</p>


### Course Development Roadmap

The __Course Development Roadmap__ looks like this:

![R Python Tracks](/assets/2021-02-18-R-is-for-research/r_python_tracks.jpg)

This system contains two tracks: __R-Track and a Python Track.__ Each track develops core skills that leverage the strengths:

- R for Research
- Python for Automation and Production

### Development Progress.

- The Python track is currently under development ([The 1st Python Course is available now](https://university.business-science.io/p/python-for-data-science-automation-ds4b-101p)). 
- [The 5-Course R-Track is completely available now.](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series/) 

### What's Coming Next?

The upcoming course is the [Join the Machine Learning for Business with Python](https://mailchi.mp/business-science/machine-learning-python-waitlist)


<strong>This waitlist is for:</strong>

<ul>
    <li>People that want to learn the machine learning ecosystem in Python</li>
    <li>R users that want to learn Python</li>
    <li>Python users that want to learn advanced tools</li>
</ul>

The course pre-requisite is the [Python for Data Science Automation Course](). 

## What If I specifically want to learn R?

I have you covered too. Just

{% include cta_rtrack.html %}

-->





