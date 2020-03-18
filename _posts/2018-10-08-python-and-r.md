---
layout: post
title: "R and Python: How to Integrate the Best of Both into Your Data Science Workflow"
excerpt: "R and Python - learn how to integrate both R and Python into your data science workflow. Use the strengths of the two dominant data science languages."
author: "Matt Dancho"
date:   2018-10-08 5:44:01
categories: [Business]
tags: [R-Project, R-Bloggers, R, Python, Tidyverse, RMarkdown, Shiny, Scikit-Learn, TensorFlow, reticulate, radix, Learn-R, Learn-Python]
image: 2018-10-08-python-and-r/python_r_strengths.png
image_preview: 2018-10-08-python-and-r/python_r_strengths_preview.png
canonical: https://www.business-science.io/business/2018/10/08/python-and-r.html
---

## R and Python for Data Science

From Executive Business Leadership to Data Scientists, we all agree on one thing: ___A data-driven transformation is happening___. Artificial Intelligence (AI) and more specifically, Data Science, are redefining how organizations extract insights from their core business(es). We're experiencing a fundamental shift in organizations in which ["approximately 90% of large global organizations with have a Chief Data Officer by 2019"](http://www.visualcapitalist.com/the-rise-of-the-chief-data-officer-cdo/). Why? Because, when the ingredients of a ___"high performance data science team"___ are present ([refer to this Case Study](https://www.business-science.io/business/2018/09/18/data-science-team.html)), organizations are able to generate massive return on investment (ROI). However, data science teams tend to get hung up on a _"battle"_ waged between the two leading programming languages for data science: ___R vs Python___.

<a href="https://www.business-science.io/business/2018/09/18/data-science-team.html"><img src="/assets/2018-09-18-data-science-team/amadeus_team.png" class="img-rounded pull-right" alt="Key Strengths, R and Python" style="width:50%;margin-left:20px"/></a>


In our recent article, ["Case Study: How To Build A High Performance Data Science Team"](https://www.business-science.io/business/2018/09/18/data-science-team.html), we exposed how a real company ([Amadeus Investment Partners](http://amadeusip.com/)) is utilizing a structured workflow that combines talented business experts, data science education, and a communication between subject matter experts and data scientists to achieve best-in-class results in the one of the most competitive industries: investing. 

One of the key points from this article was the use of data science languages as tools in a toolkit. R, Python... Use them both. Leverage their strengths. ___Don't build an "R Shop" or a "Python Shop". Build a High Performance Data Science Team that capitalizes on the unique strengths of both languages.___  

> _Don't build an "R Shop" or a "Python Shop". Build a __High Performance Data Science Team__ that capitalizes on the unique strengths of both languages._

This idea of using multiple languages may seem crazy. In the short term, it requires more education. But, in the long term it pays dividends in:

1. __Increased efficiency__ - How quickly can your data science team iterate through its workflow?

2. __Increased productivity__ - How much can your data science team produce that adds value and generates ROI?

3. __Increased capability__ - How limited (or unlimited) is your data science team's output?

{% include cta_learning_labs.html %}

## Summary

This article is split into two parts:

- [__Part 1: R + Python, Examination of Key Strengths__](#part1) - In this part we discuss the origins of the languages, key differences, and strengths that can be leveraged within a data science workflow

- [__Part 2: R + Python, Integrated Machine Learning Tutorial__](#part2) (_Alert: Technical Details Ahead_) - In this part we transition from planning to implementing the data science workflow using both R and Python.

The strengths assessment concludes that both R and Python have amazing features that can interplay together. The visualization below summarizes the strengths.

![Python and R Strengths](/assets/2018-10-08-python-and-r/python_r_strengths.png) 

<p class="date text-center"><strong>Strengths Assessment, R and Python</strong></p>

The ML Tutorial is particularly powerful showcasing the interplay between Python and R. You'll end with a nice segment on model quality showing how to detect weaknesses in your model with `ggplot2`.

![Residual Analysis](/assets/2018-10-08-python-and-r/residuals.png)

<p class="date text-center"><strong>Model Evaluation</strong></p>


In this article, we'll show a __quick machine learning (ML) tutorial that integrates both R and Python, showcasing the strengths of the two dominant programming languages__. But, before we get into the ML tutorial, let's examine the strengths of each language.


## Part 1: R + Python, Examination of Key Strengths {#part1} 

Both data science languages are great for business analysis. Both R and Python can be used in similar capacities when viewed from a pure machine learning perspective. Both have packages or libraries that are dedicated to wrangling, preprocessing, and applying machine learning to data. Both are excellent choices for [reproducibile research](https://en.wikipedia.org/wiki/Reproducibility), a requirement for many industries to validate research methodologies and experiments. Where things get interesting is their differences, which is the source of beauty and power of combining languages to work together in harmony. 

<a class="anchor" id="strengths"></a>

![Python and R Strengths](/assets/2018-10-08-python-and-r/python_r_strengths.png) 

<p class="date text-center"><strong>Strengths Assessment, R and Python</strong></p>

### R Strengths

Let's start with `R`. Well, actually, let's start with `S`. The `S` language was a precursor to `R` developed by [John Chambers (statistician)](https://en.wikipedia.org/wiki/John_Chambers_(statistician)) at Bell Labs in 1976 as a programming language designed to implement statistics. The [R statistical programming language](https://en.wikipedia.org/wiki/R_(programming_language)) was developed by professors at the University of Auckland, New Zealand, to extend `S` beyond its initial implementation. The key point is that `S` and `R` developers were not software engineers or computer scientists. Rather, they were __researchers and scientists that developed tools to more effectively design and perform experiments and communicate results__. 

In it's essence, R is a language with roots in statistics, data analysis, data exploration, and data visualization. R has excellent utilities for reporting and communication including `RMarkdown` (a method for integrating code, graphical output, and text into a journal-quality report) and `Shiny` (a tool for building prototype web applications, think minimum viable products, MVP).

R is growing quickly with the emergence of the `tidyverse` ([tidyverse.org](https://www.tidyverse.org/)), a set of tools with a common programming-interface that use functional verbs (functions like `mutate()` and `summarize()`) to perform intuitive operations connected by the pipe (`%>%`), which mimics how people read. __The `tidyverse` is a big advantage because it makes exploring data highly efficient. Iterating through your exploratory analysis is as easy as writing a paragraph describing what you want to do to the data.__ Here's a `tidyverse` flow chart from [storybench.org](http://www.storybench.org/getting-started-with-tidyverse-in-r/).

![Tidyverse Workflow](/assets/2018-10-08-python-and-r/tidyverse.jpg)

<p class="date text-center"><a href="http://www.storybench.org/getting-started-with-tidyverse-in-r/">Getting Started with tidyverse in R, storybench.org</a></p>


<!-- We can see where R is having success in the wild. One way is by reviewing ___Kaggle Competitions___ (a competitive environment for data scientists to compete, learn, and share knowledge). We can review the ___Kernels___ (user-provided resources for the public learning benefit) to determine which language that top-rated (most votes) Kernels use. Many of the Kernels that focus on [Exploratory Data Analysis (EDA)](https://en.wikipedia.org/wiki/Exploratory_data_analysis) are completed using `R` or `Rmd` formats. These EDA Kernals focus more on understanding and visualizing data rather than building high-performance models.    -->

The strengths of `R` relate very well to business wherein organizations need to test theories, explain cause-and-effect relationships, iterate quickly, and make decisions. Further, communication utilities including business reporting, presentation slide decks, and web applications can be built using a reproducible workflow all within `R`. 

{% include cta_learning_labs.html %}


### Python Strengths

The `Python` language is a general-purpose programming language that was created by [Guido van Rossum (Computer Scientist)](https://en.wikipedia.org/wiki/Guido_van_Rossum) in 1991. The language was developed to be easy to read and cover multiple programming paradigms. One of it's greatest strengths is `Python`'s versatility which includes web frameworks, data base connectivity, networking, web scraping, scientific computing, text and image processing, many of which features lend themselves to various tasks in machine learning including image recognition, natural language processing, and machine learning. 

__In essence, `Python`'s roots are in computer science and mathematics.__ The language was designed for programmers that require versatility into many different fields. With over 100,000 open source libraries, `Python` has the largest ecosystem of any programming language, making it uniquely positioned as a choice for those that want versatility.  

`Python` has excellent data science libraries including `Scikit Learn`, the most popular machine learning library, and `TensorFlow`, a library developed by software engineers at Google to perform deep learning, commonly used for image recognition and natural language processing tasks. The `Scikit Learn` machine learning flow chart is shown below, which illustrates its reach for many types of machine learning problems.

![Scikit Learn ML Flow Chart](/assets/2018-10-08-python-and-r/sklearn_ml_flowchart.png)

<p class="date text-center"><a href="http://scikit-learn.org/stable/tutorial/machine_learning_map/index.html">Scikit Learn Machine Learning Flow Chart, scikit-learn.org</a></p>

  
<!-- We'll lean on Kaggle again to see see where `Python` is having success in the wild. The vast majority of top-rated Kernels (most votes) are using `Python`. Virtually all of the the    -->

In a business context, the key strength of `Python` rests in the powerful machine learning libraries including `Scikit Learn` and `TensorFlow` (and the `Keras` implementation, which is designed for efficiently building neural networks). The `Scikit Learn` library is easy to pick up, includes support for pipelines to simplify the machine learning workflow, and has almost all of the algorithms one needs in one place.




### Designing A Data Science Workflow

__When you learn multiple languages, you gain the ability to select the best tool for the job.__ The result is a language harmony that increases the data science team's efficiency, capability, and productivity.

> _When you learn multiple languages, you gain the ability to select the best tool for the job._

The general idea is to be as flexible as possible so we can leverage the best of both languages within our full-stack data science workflow, which includes:

- Efficiently exploring data

- Modeling, Cross Validating, and Evaluating Model Quality

- Communicating data science to make better decisions via traditional reports (Word, PowerPoint, Excel, PDF), web-based reports (HTML), and interactive web-applications (Shiny, Django)

We can make a slight modification to the [_R and Python Strengths_](#strengths) visualization to organize it in a logical sequence that leverages the strengths:

- R is __selected for exploration__ because of the `tidyverse` readability and efficiency

- Python is __selected for machine learning__ because of `Scikit Learn` machine learning pipeline capability

- R is __selected for communication__ because of the advanced reporting utilities including `RMarkdown` and `Shiny` (interactive web apps) and the wonderful `ggplot2` visualization package


![Python and R Workflow](/assets/2018-10-08-python-and-r/python_r_workflow.png)

<p class="date text-center"><strong>Data Science Workflow Integrating R + Python</strong></p>

Now that we have identified the tools we want to use, let's go through a short tutorial that brings this idea of __language harmony__ together.




## Part 2: R + Python, Integrated Machine Learning Tutorial {#part2}

The project we are performing comes from the ["Wine Snob Machine Learning Tutorial" by Elite Data Science](https://elitedatascience.com/python-machine-learning-tutorial-scikit-learn). We'll perform the following:

1. (Python) Replicate the Machine Learning tutorial using `Scikit Learn` 

2. (R) Use `ggplot2` to visualize the results for model performance

3. (R) Build the report using `RMarkdown` and the new `radix` framework for scientific reporting

These are the same steps that were used to create the "R + Python with `reticulate`" report contained in this Machine Learning Tutorial on YouTube:

<iframe width="100%" height="450" src="https://www.youtube.com/embed/YfqxICYVNtU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<p class="date text-center">R + Python with Reticulate, YouTube Video</p>


The report built in the video looks like this:

![radix for web-based reports](/assets/2018-10-08-python-and-r/report.png)

<p class="date text-center">Report with R and Python via <code>reticulate</code> and <code>radix</code></p>

We'll go through the basic steps used to build this "R + Python with reticulate" report in an `RMarkdown` document using both Python and R. 

### Step 1: Setup R + Python Environments

We're going to do everything from the [RStudio IDE: Preview Version](https://www.rstudio.com/products/rstudio/download/preview/), which includes Python integration and interoperability.  

![RStudio IDE](/assets/2018-10-08-python-and-r/rstudio_ide.png)

<p class="date text-center"><a href="https://www.rstudio.com/products/rstudio/download/preview/">RStudio IDE Preview Version (Required for Python Interoperability)</a></p>

We'll be using both R and Python Environments, which we'll setup next.

#### R Environment

<a href="https://rstudio.github.io/reticulate/index.html"><img src="/assets/2018-10-08-python-and-r/reticulate.png" class="img-rounded pull-right" alt="reticulate for connecting Python and R" style="width:50%;margin-left:20px"/></a>

You'll want to have the following libraries installed:

- `reticulate`: Used to connect R and Python. See the [reticulate documentation](https://rstudio.github.io/reticulate/index.html) which is an invaluable resource. 

- `radix`: A new R package for making clean web-based reports. The [radix documentation](https://rstudio.github.io/radix/) was built using `radix`. 

- `tidyverse`: The fundamental set of R packages that makes data exploration and visualization easy. It includes `dplyr`, `ggplot2`, `tidyr` and more. 

- `plotly`: Used to make a quick interactive plot with the `ggplotly()` function.

- `tidyquant`: Used for the `theme_tq()` ggplot theme for business-ready visualizations.



#### Python Environment

You will need to have `Python` installed with the following libraries:

- `numpy`: A numerical computing library that supports `sklearn`

- `pandas`: Data analysis library enabling wrangling of data

- `sklearn`: Workhorse library with a suite of machine learning algorithms

The easiest way to get set up is to download the [Anaconda distribution](https://www.anaconda.com/download) of `python`, which comes with many of the data science packages already set up. If you install the Python 3 version of Anaconda, you should end up with a "conda environment" named `anaconda3`. We'll use this in the next step. 

![Anaconda](/assets/2018-10-08-python-and-r/anaconda.png)

<p class="date text-center"><a href="https://www.anaconda.com/download">Install Anaconda Distribution</a></p>


### Step 2: Setup RMarkdown Document

Open an RMarkdown document in the RStudio IDE. 

![Open A New RMarkdown Document](/assets/2018-10-08-python-and-r/new_rmarkdown.png)

<p class="date text-center">Open a new RMarkdown document</p>

Clear the contents, and add the following YAML header information including the `---` at the top and bottom. This sets up the `radix` document, which is a special format of `RMarkdown`. You can visit the [radix documentation](https://rstudio.github.io/radix/) to learn more about it's excellent features for web-based reports. 

```
---
title: "R + Python via reticulate"
description: |
  Taking the `radix` R package for a test spin with `Scikit Learn`!
author:
  - name: Matt Dancho 
    url: www.business-science.io
    affiliation: Business Science
    affiliation_url: www.business-science.io
date: "2018-10-08"
output: radix::radix_article
---
```

Next, add an R-code chunk. 

![R Code Chunk](/assets/2018-10-08-python-and-r/r_chunk.png)

<p class="date text-center">Adding an R-Code Chunk to an RMarkdown document</p>

This will setup the defaults to output code chunks and toggle off messages and warnings. 


```
{r setup, include=FALSE}
knitr::opts_chunk$set(
    echo = TRUE,      # Output code chunks
    message = FALSE,  # Toggle off message output 
    warning = FALSE)  # Toggle off warning output
```

Next, if you hit the "Knit" button, the Radix report will generate. It should look something like this.

![Open A New RMarkdown Document](/assets/2018-10-08-python-and-r/step_02.png)

<p class="date text-center">Step 2, Radix Report</p>

### Step 3: Setup Reticulate

Reticulate connects R and Python Environments so both languages can be used in the RMarkdown document. For the purposes of keeping the languages straight, each code chunk (code that runs inline in an RMarkdown document) will have the language as a comment. 

The code chunks _won't_ be shown in full but the contents will. When going through the tutorial use the `#R` and `#Python` comments to indicate which type of code chunk  to use (i.e. `{r}` for R and `{python}` for Python).

Create an R-code chunk to load `reticulate` using the `library()` function. 


{% highlight r %}
# R
library(reticulate)
{% endhighlight %}

Use the `conda_list()` function to list each of the environments on your machine. There are four present for my setup. I'll be using the `anaconda3` environment. 


{% highlight r %}
# R
conda_list()
{% endhighlight %}



{% highlight text %}
##           name                                  python
## 1    anaconda3                   /anaconda3/bin/python
## 2       pandas       /anaconda3/envs/pandas/bin/python
## 3 r-tensorflow /anaconda3/envs/r-tensorflow/bin/python
## 4    untitled1    /anaconda3/envs/untitled1/bin/python
{% endhighlight %}

Tell `reticulate` to use the "anaconda3" environment using the `use_condaenv()` function. 


{% highlight r %}
# R 
use_condaenv("anaconda3")
{% endhighlight %}


![Open A New RMarkdown Document](/assets/2018-10-08-python-and-r/step_03
.png)

<p class="date text-center">Step 3, Radix Report</p>

### Step 4: Machine Learning With Scikit Learn

This step comes straight from the ["Wine Snob Machine Learning Tutorial" by Elite Data Science](https://elitedatascience.com/python-machine-learning-tutorial-scikit-learn). We'll implement `Scikit Learn` to build a random forest model on that predicts the Wine Quality of the dataset. 

First, create a Python code chunk and add the libraries.


{% highlight python %}
# Python
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn import preprocessing
from sklearn.ensemble import RandomForestRegressor
from sklearn.pipeline import make_pipeline
from sklearn.model_selection import GridSearchCV
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.externals import joblib
{% endhighlight %}

Next, import the data using `read_csv()` from `pandas`. Note that the separator is a semicolon (not a comma which is what most data sets are stored as in CSV format). The data is stored as a Python object named `data`. 


{% highlight python %}
# Python
dataset_url = 'http://mlr.cs.umass.edu/ml/machine-learning-databases/wine-quality/winequality-red.csv'
data = pd.read_csv(dataset_url, sep = ";")
{% endhighlight %}

We can use the `print()` function to output Python objects. 


{% highlight python %}
# Python
print(data.head())
{% endhighlight %}



{% highlight text %}
##    fixed acidity  volatile acidity   ...     alcohol  quality
## 0            7.4              0.70   ...         9.4        5
## 1            7.8              0.88   ...         9.8        5
## 2            7.8              0.76   ...         9.8        5
## 3           11.2              0.28   ...         9.8        6
## 4            7.4              0.70   ...         9.4        5
## 
## [5 rows x 12 columns]
{% endhighlight %}


Note that it's a little tough to see what's going on with the data. It's a perfect opportunity to leverage R and specifically the `glimpse()` function. We can retrieve the `data` object, which is stored in our R environment in a list named `py`. We'll access `data` in R using `py$data`.

Load the `tidyverse` library. Then access the `data` object using `py$data`. The data is stored as a data frame, so we'll convert to the `tibble` (tidy data frame) and then `glimpse()` the data. 


{% highlight r %}
# R
library(tidyverse)

py$data %>% 
    as.tibble() %>%
    glimpse()
{% endhighlight %}



{% highlight text %}
## Observations: 1,599
## Variables: 12
## $ `fixed acidity`        <dbl> 7.4, 7.8, 7.8, 11.2, 7.4, 7.4, 7.9...
## $ `volatile acidity`     <dbl> 0.700, 0.880, 0.760, 0.280, 0.700,...
## $ `citric acid`          <dbl> 0.00, 0.00, 0.04, 0.56, 0.00, 0.00...
## $ `residual sugar`       <dbl> 1.9, 2.6, 2.3, 1.9, 1.9, 1.8, 1.6,...
## $ chlorides              <dbl> 0.076, 0.098, 0.092, 0.075, 0.076,...
## $ `free sulfur dioxide`  <dbl> 11, 25, 15, 17, 11, 13, 15, 15, 9,...
## $ `total sulfur dioxide` <dbl> 34, 67, 54, 60, 34, 40, 59, 21, 18...
## $ density                <dbl> 0.9978, 0.9968, 0.9970, 0.9980, 0....
## $ pH                     <dbl> 3.51, 3.20, 3.26, 3.16, 3.51, 3.51...
## $ sulphates              <dbl> 0.56, 0.68, 0.65, 0.58, 0.56, 0.56...
## $ alcohol                <dbl> 9.4, 9.8, 9.8, 9.8, 9.4, 9.4, 9.4,...
## $ quality                <dbl> 5, 5, 5, 6, 5, 5, 5, 7, 7, 5, 5, 5...
{% endhighlight %}

Much better. We can see the contents of every column in the data. A few key points:

- All features are numeric (`dbl`)
- The target (what we are trying to predict) is "quality"
- The predictors are features such as "fixed acidity", "chlorides", "pH", etc that can all be measured in a laboratory

Setup data into `X` (features) and `y` (target) variables. 


{% highlight python %}
# Python
y = data.quality
X = data.drop("quality", axis=1)
{% endhighlight %}

Split features into training and testing sets. 


{% highlight python %}
# Python
X_train, X_test, y_train, y_test = train_test_split(
  X, y,
  test_size    = 0.2,
  random_state = 123,
  stratify     = y
)
{% endhighlight %}

Preprocess by calculating the scale from `X_train` with `StandardScalar()`.


{% highlight python %}
# Python
scaler = preprocessing.StandardScaler().fit(X_train)   
{% endhighlight %}

Apply transformation to `X_test` with the `transform()` method.


{% highlight python %}
# Python
X_test_scaled = scaler.transform(X_test)
{% endhighlight %}

Setup an ML pipeline using `make_pipeline()`. The pipeline consists of two steps. First, numeric values are scaled, then a random forest regression model is created.


{% highlight python %}
# Python
pipeline = make_pipeline(
    preprocessing.StandardScaler(),
    RandomForestRegressor(n_estimators = 100)
)
{% endhighlight %}

We'll perform Grid Search to get the optimal combination of parameters. First, set up a `hyperparameters` object that has the combination of attributes we want to change. 


{% highlight python %}
# Python
hyperparameters = {
    "randomforestregressor__max_features" : ["auto", "sqrt", "log2"],
    "randomforestregressor__max_depth"    : [None, 5, 3, 1]
}
{% endhighlight %}

Apply grid search with cross validation using `GridSearchCV()`. 


{% highlight python %}
# Python
clf = GridSearchCV(pipeline, hyperparameters, cv = 10)
clf.fit(X_train, y_train)
{% endhighlight %}

Print the best parameters. 


{% highlight python %}
# Python
print(clf.best_params_)
{% endhighlight %}



{% highlight text %}
## {'randomforestregressor__max_depth': None, 'randomforestregressor__max_features': 'log2'}
{% endhighlight %}

### Step 5: Make Wine Predictions and Get Error Metrics

We're not finished yet. We need to make predictions and compare them to the test set. Since we treated this as a regression problem, the standard method is to compute r-squared and mean absolute error.


{% highlight python %}
# Python
y_pred = clf.predict(X_test)
{% endhighlight %}


{% highlight python %}
# Python
print(r2_score(y_test, y_pred))
{% endhighlight %}



{% highlight text %}
## 0.4829226950783947
{% endhighlight %}


{% highlight python %}
# Python
print(mean_squared_error(y_test, y_pred))
{% endhighlight %}



{% highlight text %}
## 0.33365625
{% endhighlight %}

__But is this model good???__

This is another good opportunity to leverage the visualization capabilities of R.

### Step 6: Visualizing Model Quality With R

R has excellent visualization capabilities (as does python). One of the best packages for data visualization is `ggplot2`, which enables flexibility that is difficult for other packages to match. 

First, we can examine the predictions versus the actual values. The trick here is to format the data in tidy fashion (long form) using `arrange()` to the sort values by the quality level and then the `gather()` function to shift from wide to long. When done, we plot the manipulated data using `ggplot()`. 


{% highlight r %}
#R 
library(tidyverse)
library(tidyquant) # for theme_tq()

# Manipulate data for ggplot
results_tbl <- tibble(
    y_test = py$y_test,
    y_pred = py$y_pred
) %>%
    rowid_to_column() %>%
    arrange(y_test) %>%
    mutate(rowid = as_factor(as.character(rowid))) %>%
    rowid_to_column("sorted_rowid") %>%
    gather(key = "key", value = "value", -c(rowid, sorted_rowid)) 

# Make ggplot
results_tbl %>%
    ggplot(aes(sorted_rowid, value, color = key)) +
    geom_point(alpha = 0.5) +
    geom_smooth() + 
    theme_tq() +
    scale_color_tq() +
    labs(
        title = "Prediction Versus Actual",
        subtitle = "Wine Quality Level",
        x = "Sorted RowID", y = "Quality Level"
    )
{% endhighlight %}

![plot of chunk unnamed-chunk-19](/figure/source/2018-10-08-python-and-r/unnamed-chunk-19-1.png)


<p class="date text-center">Prediction Versus Actual, Model Quality</p>

The actual and predicted trend lines (created with `geom_smooth()`) have a similar trend, but we can see that there is clearly an issue with the extreme quality levels based on a widening gap at the ends of the data. 

We can verify our model quality assessment by evaluating the residuals. We can use a combination of data wrangling and `ggplot()` for visualization. The residuals clearly show that the model is predicting low quality levels higher than they should be and high quality levels lower than they should be. Through visual analysis we can see that other modeling approaches should be tried to improve the predictions at the extremes.


{% highlight r %}
results_tbl %>%
  # Manipulation
  spread(key, value) %>%
  mutate(resid = y_pred - y_test) %>%
  # Plot
  ggplot(aes(sorted_rowid, resid, color = as.character(y_test))) +
    geom_point(alpha = 0.5) +
    theme_tq() +
    scale_color_tq() +
    labs(
        title = "Residual Analysis (Prediction - Actual)",
        subtitle = "Wine Quality Level",
        x = "Sorted Row ID", y = "Residual",
        color = "Quality Level"
    )
{% endhighlight %}

![plot of chunk unnamed-chunk-20](/figure/source/2018-10-08-python-and-r/unnamed-chunk-20-1.png)

<p class="date text-center">Residual Analysis, Model Quality</p>

### Step 7: Generate the Final Report

Once you are satisfied with your analysis, you can make a nice report just by clicking the "Knit" button. Our final report had an interactive plot in it using `ggplotly()` from the `plotly` library. This not only adds interactivity but it enables zooming in and getting information by clicking on specific points. 

![ggplotly](/assets/2018-10-08-python-and-r/ggplotly.png)

<p class="date text-center">Adding Interactivity with Plotly</p>

When you "Knit" the final report, it will build a web-based HTML report that can include interactive components, business-ready visualizations, in a format that is easy to consume. Here's what the first few lines of our final report looks like. 

![radix for web-based reports](/assets/2018-10-08-python-and-r/report.png)

<p class="date text-center">Report with R and Python via <code>reticulate</code> and <code>radix</code></p>


## Conclusion

<img src="/assets/2018-10-08-python-and-r/python_r_strengths.png" class="img-rounded pull-right" alt="Key Strengths, R and Python" style="width:50%;margin-left:20px"/>

Both __R and Python__ are powerful languages. Much of the talk about R vs Python pits these languages as competitors when actually they are allies. We've discussed and put to use this idea of __leveraging the strengths of each language in a harmony__.


When data science teams go beyond being "R Shops" and "Python Shops", and start thinking in terms of being __"High Performance Data Science Teams"__, they begin a transition that improves efficiency, productivity, and capability. The challenge is learning multiple languages. But here's the secret - __it's not that difficult with _Business Science University_.__ 

> The challenge is learning multiple languages. But here's the secret - __it's not difficult with Business Science University.__

