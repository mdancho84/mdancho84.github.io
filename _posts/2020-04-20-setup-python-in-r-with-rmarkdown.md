---
layout: post
title: "How to Run Python's Scikit-Learn in R in 5 minutes"
date:   2020-04-20 08:24:01
excerpt: "Python can be run from R to leverage the strengths of both R and Python Data Science langauges. Learn how to set up Python's Scikit-Learn Library in 5 minutes."
author: "Matt Dancho"
categories: [Learn-R]
tags: [R-Bloggers, Learn-R, Learn-Machine-Learning, Python, Scikit-Learn, reticulate]
image: 2020-04-20-python/python_in_r_in_5_min.jpg
image_preview: 2020-04-20-python/python_in_r_in_5_min.jpg
---



The 2 most popular data science languages - ___Python and R___ - are often pitted as rivals. This couldn't be further from the truth. Data scientists that learn to use the strengths of both languages are valuable because they __have NO LIMITS.__ 

- __<span style="color:blue;">Machine Learning:</span>__ They can switch to Python to leverage `scikit learn` and `tensorflow`. 
- __<span style="color:blue;">Data Wrangling, Visualization, Apps & Reporting:</span>__ They can quickly change to R to use `tidyverse`, `shiny` and `rmarkdown`.

The bottom line is that knowing both `R` and `Python` makes you ___SUPER PRODUCTIVE.___ [This article has been updated. View the updated article at Business Science.](#) 

# Have 5 minutes? <br><small>Then let's set up Python Scikit Learn</small>

<div class="pull-right hidden-xs" style="width:50%; margin-left:20px;">
  <a href="#" target="_blank">
  <img class="img-responsive" src="/assets/2020-04-20-python/python_in_r_in_5_min.jpg"> 
  </a>
  <p class="date text-center">Use feature engineering with timetk to forecast</p>
</div>

We're going to go through the essential setup tips of the PRO's - those that use Python from R via `reticulate`. 

- Install the Anaconda Distribution 

- Get Python Scikit Learn Setup in R

- Do a Cluster Analysis with Affinity Propagation Algorithm to make sure Scikit Learn is running. 



# Using Python Scikit Learn &amp; R <br><small>How do I use them together for Business Projects???</small>

Setting up `Python` in `R` is an insane productivity booster, but you still need to _learn_ how to use Python and R together for ___real business projects.___ And, it's _impossible_ to teach you all the in's and out's in 1 short article. But, I have great news! 

I just launched a [__NEW LEARNING LAB PYTHON + R SERIES (Register Here)__](https://mailchi.mp/business-science/webinars) that will show you how to use `Python` and `R` together on __Real Business Projects__  - Human Resources Employee Clustering, Sales and Marketing, Finance, Energy, Social Media, and more! __And it's FREE to attend live.__ 

[Register here to attend Python + R Learning Labs live for free.](https://mailchi.mp/business-science/webinars) I'll notify you in advance of the accelerated 1-hour courses that you can attend via webinar.

<div>
  <a href="https://mailchi.mp/business-science/webinars" target="_blank">
  <img class="img-responsive" src="/assets/2020-04-20-python/lab_series_python_r.jpg"> 
  </a>
  <p class="date text-center">
    <a href="https://mailchi.mp/business-science/webinars">Python + R, Register for the NEW Learning Lab Series</a>
  </p>
</div>

# 2 Steps to Python

Yeah, you heard me right. With only 2 steps, we are able to use Python in R!

## Step 1 - Reticulate Setup

Fire up an R Markdown document and load `tidyverse` and `reticulate`:

1. `tidyverse` - Loads the core data wrangling and visualization packages needed to work in R. 
2. `reticulate` - The key link between R and Python. 


{% highlight r %}
library(tidyverse)
library(reticulate)
{% endhighlight %}

Your R Markdown should have something that looks like this (possibly without the outline, but that's where we are headed). 

![Reticulate Setup](/assets/2020-04-20-python/step1_python_setup_rmarkdown.jpg)

<p class="date text-center">
    R Markdown (Rmd) File with <code>reticulate</code>
</p>

## Step 2 - Conda Installation

Next, we need to make sure we have the Python Environment setup that we want to use. For Python Environments, we will use Anaconda (Conda), a `python` environment management tool specifically developed for data scientists.  

__Download Conda__

- Anaconda Distribution - [Installation Instructions](https://docs.anaconda.com/anaconda/install/)

__Create a New Python Environment__

- Run the following code __in your terminal__:


{% highlight bash %}
conda create -n py3.8 python=3.8 scikit-learn pandas numpy matplotlib
{% endhighlight %}

![Conda Environment Setup](/assets/2020-04-20-python/step2_conda_env_setup.jpg)

This code does the following:

1. Creates a new Python environment called "py3.8"
2. Installs `python` version 3.8
3. Installs the latest versions of `scikit-learn`, `pandas`, `numpy`, and `matplotlib`.

In the future you can always add more `python` packages (more on this in [Pro Tips](#pro-tips)). 

### List your Conda Environments (in the Terminal)

- Use `conda list env` to list your _Conda Environments_ in the Terminal. 
- If you see `py3.8`, you are good to go. 

![Conda List Terminal](/assets/2020-04-20-python/step2_conda_list_terminal.jpg)

### List your Conda Enviromnents (in R Markdown)

Back in R Markdown, we can do the same thing using `retculate::conda_list()`.


{% highlight r %}
conda_list()
{% endhighlight %}



{% highlight text %}
##        name                                             python
## 1 anaconda3            /Users/mdancho/opt/anaconda3/bin/python
## 2     py3.8 /Users/mdancho/opt/anaconda3/envs/py3.8/bin/python
{% endhighlight %}

### Set Your Conda Environment (in R Markdown)

Make sure your R Markdown document activates the "py3.8" environment using `use_condaenv()`.


{% highlight r %}
use_condaenv("py3.8", required = TRUE)
{% endhighlight %}

Double check that `reticulate` is actually using your new conda env. 


{% highlight r %}
py_config()
{% endhighlight %}



{% highlight text %}
## python:         /Users/mdancho/opt/anaconda3/envs/py3.8/bin/python
## libpython:      /Users/mdancho/opt/anaconda3/envs/py3.8/lib/libpython3.8.dylib
## pythonhome:     /Users/mdancho/opt/anaconda3/envs/py3.8:/Users/mdancho/opt/anaconda3/envs/py3.8
## version:        3.8.2 (default, Mar 26 2020, 10:43:30)  [Clang 4.0.1 (tags/RELEASE_401/final)]
## numpy:          /Users/mdancho/opt/anaconda3/envs/py3.8/lib/python3.8/site-packages/numpy
## numpy_version:  1.18.1
## 
## NOTE: Python version was forced by use_python function
{% endhighlight %}

You should see something like this where the python path is:

- `python: /Users/mdancho/opt/anaconda3/envs/py3.8/bin/python`. 

It may not be exact, but you should see "py3.8" in the file path. 

![Conda List Rmarkdown](/assets/2020-04-20-python/step2_conda_list_rmarkdown.jpg)

# Python Tests

All of the code in this section uses `python code chunks`. This means you need to use `{python}` instead of `{r}` code chunks. 

- __<span style="color:blue;">Errors in this section:</span>__ Are likely because you have a code chunk with `{r}` (it's super easy to make this mistake)
- __<span style="color:blue;">Solution:</span>__ Replace `{r}` with `{python}`.

![Python Chunks](/assets/2020-04-20-python/tests_python_1.jpg)

Spoiler alert - I have a [PRO-TIP](#pro-tips) coming that helps big time. 

## Test 1 - Is Python working???

- Let's add 1 + 1
- You should see 2


{% highlight python %}
# Is python working???
1 + 1
{% endhighlight %}



{% highlight text %}
## 2
{% endhighlight %}


## Test 2 - Numpy & Pandas

- Import `numpy` and `pandas` using the import shorthand `np` and `pd` respectively. 
  - `numpy` - Math Calculations
  - `pandas` - Data Wrangling


{% highlight python %}
import numpy as np
import pandas as pd
{% endhighlight %}

### Numpy

Test `numpy` using the `np.arange()` function to create a sequence of numbers in an array. 


{% highlight python %}
np.arange(1, 10)
{% endhighlight %}



{% highlight text %}
## array([1, 2, 3, 4, 5, 6, 7, 8, 9])
{% endhighlight %}

### Pandas

Next, test `pandas` by creating a data frame `df` using `pd.DataFrame()`.


{% highlight python %}
# Make a sequence in a data frame using dict format
df = pd.DataFrame(data = {"sequence":np.arange(1,20,.01)})

# Use assign (mutate) equivalent to calculate the np.sin() of the series
df = df.assign(value=np.sin(df["sequence"]))

df
{% endhighlight %}



{% highlight text %}
##       sequence     value
## 0         1.00  0.841471
## 1         1.01  0.846832
## 2         1.02  0.852108
## 3         1.03  0.857299
## 4         1.04  0.862404
## ...        ...       ...
## 1895     19.95  0.891409
## 1896     19.96  0.895896
## 1897     19.97  0.900294
## 1898     19.98  0.904602
## 1899     19.99  0.908819
## 
## [1900 rows x 2 columns]
{% endhighlight %}

## Test 3 - Matplotlib

Run the following `pandas` plotting code. If the visualization appears, `matplotlib` is installed. 


{% highlight python %}
import matplotlib as plt

df.plot(x="sequence", y = "value", title = "Matplotlib")
{% endhighlight %}

![plot of chunk unnamed-chunk-10](/figure/source/2020-04-20-setup-python-in-r-with-rmarkdown/unnamed-chunk-10-1.png)

## Test 4 - Scikit Learn

Run a test Random Forest using `RandomForestClassifier` from the `sklearn.ensemble` module of Scikit Learn. 


{% highlight python %}
from sklearn.ensemble import RandomForestClassifier

clf = RandomForestClassifier(random_state=0)

X = [[ 1,  2,  3],  # 2 samples, 3 features
     [11, 12, 13]]

y = [0, 1]  # classes of each sample

clf.fit(X, y)
{% endhighlight %}



{% highlight text %}
## RandomForestClassifier(bootstrap=True, ccp_alpha=0.0, class_weight=None,
##                        criterion='gini', max_depth=None, max_features='auto',
##                        max_leaf_nodes=None, max_samples=None,
##                        min_impurity_decrease=0.0, min_impurity_split=None,
##                        min_samples_leaf=1, min_samples_split=2,
##                        min_weight_fraction_leaf=0.0, n_estimators=100,
##                        n_jobs=None, oob_score=False, random_state=0, verbose=0,
##                        warm_start=False)
{% endhighlight %}


Use the `predict()` method to make a prediction on the training data set. 


{% highlight python %}
clf.predict(X)  # predict classes of the training data
{% endhighlight %}



{% highlight text %}
## array([0, 1])
{% endhighlight %}



# Can you Run Affinity Progagation???

If you are planning to attend [Learning Lab 33 - HR Analytics Employee Clustering with Python Scikit Learn (__Register Here__)](https://bit.ly/lab-33-python-hr-clustering), you will need to be able to perform the following algorithms to comple an Employee Clustering and Termination Analysis Project:

- __<span style="color:blue;">Affinity Propagation and DBSCAN Clustering Algorithms</span>__
- __<span style="color:blue;">TSNE Manifold Embedding</span>__

A simple test is to run the `AffinityPropagation` test from [Scikit Learn's website](https://scikit-learn.org/stable/auto_examples/cluster/plot_affinity_propagation.html#sphx-glr-auto-examples-cluster-plot-affinity-propagation-py). 



{% highlight python %}
from sklearn.cluster import AffinityPropagation
from sklearn.datasets import make_blobs

# #############################################################################
# Generate sample data
centers = [[1, 1], [-1, -1], [1, -1]]
X, labels_true = make_blobs(n_samples=300, centers=centers, cluster_std=0.5,
                            random_state=0)

# Compute Affinity Propagation
af = AffinityPropagation(preference=-50).fit(X)
cluster_centers_indices = af.cluster_centers_indices_
labels = af.labels_

n_clusters_ = len(cluster_centers_indices)

# #############################################################################
# Plot result
import matplotlib.pyplot as plt
from itertools import cycle

plt.close('all')
plt.figure(1)
plt.clf()

colors = cycle('bgrcmykbgrcmykbgrcmykbgrcmyk')
for k, col in zip(range(n_clusters_), colors):
    class_members = labels == k
    cluster_center = X[cluster_centers_indices[k]]
    plt.plot(X[class_members, 0], X[class_members, 1], col + '.')
    plt.plot(cluster_center[0], cluster_center[1], 'o', markerfacecolor=col,
             markeredgecolor='k', markersize=14)
    for x in X[class_members]:
        plt.plot([cluster_center[0], x[0]], [cluster_center[1], x[1]], col)

plt.title('Estimated number of clusters: %d' % n_clusters_)
plt.show()
{% endhighlight %}

![plot of chunk unnamed-chunk-13](/figure/source/2020-04-20-setup-python-in-r-with-rmarkdown/unnamed-chunk-13-1.png)





# Become Great at Shiny

Up until now we haven't talked about `Shiny`! It's web application framework that is used to take your `python` and `R` machine learning models into ___Production.___

<a href="https://apps.business-science.io/" target="_blank">
  <img class="img-responsive" src="/assets/2020-03-09-shiny-vs-tableau/app-library.jpg"> 
</a>

<p class="text-center date">
<a href="https://apps.business-science.io/" target="_blank">Business Science Application Library</a>
<br><small>A Meta-Application that houses Shiny Apps</small>
</p>

__R Shiny needs to be in your toolbox if you want to productionize Data Science.__ You simply cannot put machine learning applications into production with other "BI" Tools like Tableau, PowerBI, and QlikView. 

__<span style="color:blue;">CRITICAL POINT: You can USE SHINY to productionize `python` `Scikit Learn` and `Tensorflow Models`</span>__

__If you need to learn R Shiny as fast as possible__, I have the perfect program for you. It will accelerate your career. [The 4-Course R-Track Bundle](https://university.business-science.io/p/4-course-bundle-machine-learning-and-web-applications-r-track-101-102-201-202a/) through Business Science. 

{% include cta_rtrack.html %}


# Pro Tips (Python in R) {#pro-tips}

Now that you have `python` running in `R`, use these pro-tips to make your experience way more enjoyable. 

### Pro-Tip #1 - Python Chunk Keyboard Shortcut

I can't stress this one enough - __Set up a Keyboard shortcut for Python Code Chunks.__ This is a massive productivity booster for Rmarkdown documents. 

- My preference: `Ctrl + Alt + P`

When you hit `Ctrl + Alt + P`, a `{python}` code chunk will appear in your R Markdown document. 

![Make the Python Keyboard Shortcut](/assets/2020-04-20-python/protip-python_chunk_keyboard_shortcut.jpg)

### Pro-Tip #2 - Use Python Interactively

For debugging Python Code Chunks in R Markdown, it can help to use the `repl_python()` to convert your Console to a Python Code Console. To do so:

- In R Console, you can run python interactively using `repl_python()`. You will see `>>>` indicating you are in Python Mode.
- Make sure the correct Python / Conda Environment is selected. 
- To escape Python in the console, just hit `escape`. 

![Python Interactively](/assets/2020-04-20-python/protip-repl_python.jpg)

### Pro-Tip #3 - 4 Conda Terminal Commands

At some point you will need to create, modify, add more packages to your Conda Environment(s). Here are 4 useful commands:

1. Run `conda env list` to list the available conda environments
2. Run `conda activate <env_name>` to activate a conda environment
3. Run `conda update --all` to update all `python` packages in a conda environment. 
4. Run `conda install <package_name>` to install a new package


# Have questions on using Python + R?

Make a comment in the chat below. 👇

And, if you plan on using `Python` + `R` at work, it's a no-brainer - [attend my Learning Labs](https://mailchi.mp/business-science/webinars) (they are FREE to attend live). 
