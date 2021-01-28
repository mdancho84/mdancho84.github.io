---
layout: post
title: "Should you learn Python or R in 2021?"
date:   2021-01-28 07:00:00
excerpt: "or years Python and R have been pitted as mortal enemies in the world of data science, enticing its practitioners to choose a side and never look back - not anymore. It's time for these two titans to join forces through reticulate which allows us to use Python and R together!"
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, Learn-Python, Teams]
image: 2021-01-28-python-or-r/data_science_workflow_cover.png
image_preview: 2021-01-28-python-or-r/data_science_workflow_preview.png
---

👉 Each month, we release tons of great content on R for Business. [__Register to get fresh R Tips straight to your inbox.__](https://mailchi.mp/business-science/blog-registration)


<br/>

For years Python and R have been pitted as mortal enemies in the world of data science, enticing its practitioners to choose a side and never look back - not anymore. It's 2021 and it’s time for these two titans to join forces through `reticulate` which allows us to use Python and R together!

![](/assets/2021-01-28-python-or-r/r_python_1.png)

![](/assets/2021-01-28-python-or-r/r_python_2.png)


## Both R and Python have their benefits

Let’s start with considering the benefits that both R and Python bring to the table. If you don’t have a background in coding, R is often easier to learn and implement - especially for those with business backgrounds. If this describes you, this article would be a great follow up read [6 Reasons to Learn R for Business](https://www.business-science.io/business/2020/12/17/six-reasons-to-use-R-for-business-2021.html). R is designed for statistical modeling, thus when working with these models it often takes less code than in Python. Python is often easier to learn for people with some background in coding, due to its consistent and simple syntax. 

Python has the advantage in general purpose programming, as well as customizing features due to its inherent coding nature. R has the advantage of being designed specifically with data analysis and visualization in mind. Both have extensively robust communities and development, as well as shareability and collaborative features built in for teams. Thus, while both can be used independently and accomplish the same goals, the optimized approach is to combine their strengths and thus eliminate their own inherent weaknesses for data science. 

![](/assets/2021-01-28-python-or-r/using_python_and_r_together.png)


## Use reticulate to work with both Python and R

For those familiar with Python, one of its best known importable libraries is Scikit Learn, the industry standard for machine learning. This is one example of where reticulate can be a game changer, since it allows for translation between R and Python objects. Hence, you can handle machine learning in Python to make predictive models, while using R to analyze with the immense libraries of data wrangling and visualizations. [Reticulate](https://rstudio.github.io/reticulate/) is a package in R that allows us to use Python and it's very easy to install, simply use:

{% highlight r %}
install.packages(“reticulate”)
library(reticulate)
{% endhighlight %}

<br>

As you continue to grow your skills with Python, R and Reticulate, you’ll be able to optimize your data science workflow. For some great examples and guidance on using Reticulate, check out [R and Python: How to Integrate the Best of Both into Your Data Science Workflow](https://www.business-science.io/business/2018/10/08/python-and-r.html). 

![](/assets/2021-01-28-python-or-r/data_science_workflow.png)


For example, let's think of a full stack approach to a data science project. The data is going to start segmented into different sources, and pretty messy. R and the tidyverse is great for merging those segmented data sets and putting together an initial data frame leveraging dplyr and piping (using these guys: `%>%`). We can use R for the initial exploration where we can utilize Tidyverse to understand the underlying structures. Next, Reticulate can bring the data into Python for its strengths in machine learning, utilizing Scikit Learn. Finally, for the communication and presentation stage, we leverage R for its utilities such as Shiny and RMarkdown.


## Learn how to use R and Python Together in our upcoming course

Imagine that above scenario playing out, in real time, in a collaborative team environment. By leveraging team members with expertise in Python or R, Reticulate allows you to maximize their skills and merge them into one streamlined process. Want to learn about using R & Python in collaborative teams? We have the R/Python Teams Course coming, and you can join the waitlist: https://mailchi.mp/business-science/r-python-teams. 


#### This waitlist is for:

✅ People that want to learn the benefits of collaborative R/Python Teams<br>
✅ R users that want to learn Python<br>
✅ Python users that want to learn about tools that help R users work with them<br>

<br>

<div class="well bg-default text-center" style="background-color: #fff1ce; padding-top:10px;">
  <h3>Join the R/Python Teams Course Waitlist</h3>
  
  <a href="https://mailchi.mp/business-science/r-python-teams" class="btn btn-md btn-success"><h4>Yes, I'm interested in hearing more!</h4></a>
</div>
