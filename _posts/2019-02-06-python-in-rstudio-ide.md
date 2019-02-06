---
layout: post
title: "Product Review - Python Integration in RStudio IDE"
date:   2019-02-06 06:37:01
excerpt: "With the latest integration of Python into the RStudio IDE, RStudio is making the case for a powerful multi-language Data Science IDE."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Python, RStudio, IDE, pandas, numpy, matplotlib, seaborn]
image: 2019-02-05-python-rstudio-ide/python_in_rstudio_ide.jpg
image_preview: 2019-02-05-python-rstudio-ide/python_in_rstudio_ide.jpg
---



__The two major data science languages, <code>Python</code> and <code>R</code>, have historically taken two separate paths when it comes to where data scientists are doing the coding.__ The `R` language has the ___RStudio IDE___, which is a great IDE for data science because of its feature rich setup for efficiently developing analyses. The `Python` language has the ___Jupyter Notebook___ (and more recently ___Jupyter Lab___) that provides a web-based notebook. Most data scientists write their code in separate places - `Python` is written in Jupyter Notebooks, and `R` is written in the RStudio IDE. __Until now - RStudio is making the case for a powerful mult-language IDE designed for Data Science.__


<a href="https://www.rstudio.com/products/rstudio/download/preview/">
<img src="/assets/2019-02-05-python-rstudio-ide/python_in_rstudio_ide.jpg" class="img-rounded pull-right" alt="Key Strengths, R and Python" style="width:50%;margin-left:20px"/></a>
<p class="date pull-right text-center" style="width:50%;margin-left:20px"><a href="https://www.rstudio.com/products/rstudio/download/preview/">RStudio Preview Version 1.2</a></p>


The [RStudio Version 1.2 Preview Edition](https://www.rstudio.com/products/rstudio/download/preview/) comes with support for `Python` and several other data science languages including `SQL` and `Stan`. With this release, RStudio is making a case for a powerful, all-in-one `R` + `Python` Data Science IDE.

Let's take a look at how the `Python` integration works. 

<br>

> RStudio is making the case for a powerful mult-language IDE designed for Data Science.

## Summary of RStudio Python Review

With the rollout of the `Python` Integration - a major new feature in RStudio - We did a ___product review___ of the ___RStudio IDE___ from the perspective of data scientist using `Python`. We created a script file (`.py` file) and worked interactively with the RStudio IDE's console, help documentation, and plotting panel performing basic operations that a data scientist will be doing quite frequently.

Here's what we liked about the new RStudio IDE `Python` Integration:

1. __Sending code to Console is fast.__ Scripting can now be done efficiently with `CTRL + Enter` sending code to the Console.

2. __Tabbed autocompletion works well.__ Directory paths, function completion, even function arguments are supported.

3. __Help documentation shows up in the Help Window.__ This is super useful so I don't have to scroll away from my code to see the help documenation and function examples.

4. __Plots show up in the plot window.__ This is actually a `seaborn` plot in the RStudio IDE lower right quadrant! 

![RStudio Python Integration](/assets/2019-02-05-python-rstudio-ide/python_in_rstudio_ide.jpg)

<p class="date text-center">Summary of RStudio IDE Python Integration</p>

<!-- CTA Small -->
<br>
<hr>

<h2 class="text-center">Learn Data Science For Business</h2>

[Business Science University](https://university.business-science.io/) is an educational platform that teaches how to apply data science to business. Our current offering includes of a fully integrated, project-based, 3-course `R-Track` designed to take you from ___data science foundations___ to ___machine learning-powered production web apps___. [See our Curriculum below](#curriculum).

<p class="text-center" style="font-size:30px;">
<a href="https://university.business-science.io/"><strong>Join Business Science University Today</strong></a>
</p>

<hr>
<br>

<!-- End CTA -->

## Contents & 

- [Get the Data](#data) - We used the MovieLens 1M Data Set from Wes McKinney's [Python for Data Analysis Book](https://www.amazon.com/Python-Data-Analysis-Wrangling-IPython/dp/1449319793) 

- [YouTube Video Walkthrough](#youtube) - 6 Minute Python Tutorial in the RStudio IDE

- [Python Integration Review - MovieLens 1M Data Set](#tutorial) - In-depth walkthrough using `pandas`, `numpy`, `matplotlib`, and `seaborn`

- [Conclusion](#conclusion)

- [Additional Information](#additional)

- [Announcements](#announcements)

- [Stay Connected, Get Updates](#social)

## Similar Articles 


## Get the Data {#data}

The data that we'll be using to test out the `Python` functionality comes from Wes McKinney's (creator of `pandas`) ["Python for Data Analysis" book](https://www.amazon.com/Python-Data-Analysis-Wrangling-IPython/dp/1449319793). Here's the GitHub Repo where you can download the pydata-book materials. 

<p class="text-center" style="font-size:30px;"><a href="https://github.com/wesm/pydata-book"><strong>Get the Data Here</strong></a></p>


## Video Python + RStudio IDE Review {#youtube}

Here's a quick video review using Python in the RStudio IDE.

<iframe width="100%" height="450" src="https://www.youtube.com/embed/YI_hEtbpz-s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Python Integration Review - MovieLens 1M Data Set {#tutorial}


With the new [Preview Version 1.2 of RStudio IDE](https://www.rstudio.com/products/rstudio/download/preview/), we can work with `Python` seamlessly. We'll take a test spin using the MovieLens 1M Data Set. Let's go. 


### Importing Libraries

For this walkthrough, we'll import 4 libraries:

- `pandas` - Data manipulation library for `Python`
- `numpy` - High-performance numerical computing library
- `matplotlib` - Visualization library
- `seaborn` - Augments `matplotlib` 







{% highlight python %}
# Python Libraries
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
sns.set(style="darkgrid")
{% endhighlight %}

#### Bonus No. 1

This brings us to our first bonus - The Python script enables code completion that works with "TAB" command, just like with an R script.  

![Tab Completion](/assets/2019-02-05-python-rstudio-ide/tab_completion.jpg)
<p class="date text-center">Tabbed Code Completion of Available Libraries</p>

### Importing Data

Next, we can read the "MovieLens" data set, which consists of 3 tables: 

- `movies.dat`: Movie information
- `ratings.dat`: Ratings information for each combination of movie and user
- `users.dat`: User information such as gender, age, occupation, and zipcode

The `users.dat` file is read using the `pd.read_table()` function. 


{% highlight python %}
users = pd.read_table("datasets/movielens/users.dat", sep="::", header=None, 
                      names=["user_id", "gender", "age", "occupation", "zip"])
print(users[:5])
{% endhighlight %}



{% highlight text %}
##    user_id gender  age  occupation    zip
## 0        1      F    1          10  48067
## 1        2      M   56          16  70072
## 2        3      M   25          15  55117
## 3        4      M   45           7  02460
## 4        5      M   25          20  55455
{% endhighlight %}

We can import the remaining data with the following code.


{% highlight python %}
ratings = pd.read_table("datasets/movielens/ratings.dat", sep="::", header=None, 
                        names = ["user_id", "movie_id", "rating", "timestamp"])
movies = pd.read_table("datasets/movielens/movies.dat", sep="::", header=None, 
                       names = ["movie_id", "title", "genres"])
{% endhighlight %}

#### Bonus No. 2

This brings us to our second bonus - The Python script enables code completion for all functions and arguments. Again, just like good ole RStudio!

![Tab Completion with Functions](/assets/2019-02-05-python-rstudio-ide/tab_completion_function.jpg)
<p class="date text-center">Tabbed Code Completion of Available Functions and Arguments</p>




### Merging Data

Next, we'll merge the data using `pd.merge()`. We'll inspect the first 5 lines and the shape of the data. 


{% highlight python %}
data = pd.merge(pd.merge(ratings, users), movies)
print(data[:5])
{% endhighlight %}



{% highlight text %}
##    user_id  movie_id  ...                                   title  genres
## 0        1      1193  ...  One Flew Over the Cuckoo's Nest (1975)   Drama
## 1        2      1193  ...  One Flew Over the Cuckoo's Nest (1975)   Drama
## 2       12      1193  ...  One Flew Over the Cuckoo's Nest (1975)   Drama
## 3       15      1193  ...  One Flew Over the Cuckoo's Nest (1975)   Drama
## 4       17      1193  ...  One Flew Over the Cuckoo's Nest (1975)   Drama
## 
## [5 rows x 10 columns]
{% endhighlight %}



{% highlight python %}
print(data.shape)
{% endhighlight %}



{% highlight text %}
## (1000209, 10)
{% endhighlight %}

### Pivot Table

With the data merged, we can begin to do some analysis. We'll check out the `pd.pivot_table()` function. 


{% highlight python %}
mean_ratings = data.pivot_table(values="rating", index="title", columns="gender", aggfunc="mean")
print(mean_ratings[:5])
{% endhighlight %}



{% highlight text %}
## gender                                F         M
## title                                            
## $1,000,000 Duck (1971)         3.375000  2.761905
## 'Night Mother (1986)           3.388889  3.352941
## 'Til There Was You (1997)      2.675676  2.733333
## 'burbs, The (1989)             2.793478  2.962085
## ...And Justice for All (1979)  3.828571  3.689024
{% endhighlight %}

#### Bonus No. 3

Our third bonus is the help documentation, which shows up right where it should - in the Help Window. 

![Help Documentation](/assets/2019-02-05-python-rstudio-ide/help_documentation.jpg)

<p class="date text-center">Help Documentation in the Help Panel</p>

### Measuring Rating Disagreement

We can do a bit of data manipulation to measure ratings disagreement for the most active titles. First, we need to assess which titles are the most active. We can group by "title" and use the `size()` function to count how many appearances each title makes in the `data`. 


{% highlight python %}
ratings_by_title = data.groupby("title").size()
print(ratings_by_title[:5])
{% endhighlight %}



{% highlight text %}
## title
## $1,000,000 Duck (1971)            37
## 'Night Mother (1986)              70
## 'Til There Was You (1997)         52
## 'burbs, The (1989)               303
## ...And Justice for All (1979)    199
## dtype: int64
{% endhighlight %}


The next bit of code returns the index for the all titles that have more than 250 ratings. 


{% highlight python %}
active_titles = ratings_by_title.index[ratings_by_title >= 250]
print(active_titles)
{% endhighlight %}



{% highlight text %}
## Index([''burbs, The (1989)', '10 Things I Hate About You (1999)',
##        '101 Dalmatians (1961)', '101 Dalmatians (1996)', '12 Angry Men (1957)',
##        '13th Warrior, The (1999)', '2 Days in the Valley (1996)',
##        '20,000 Leagues Under the Sea (1954)', '2001: A Space Odyssey (1968)',
##        '2010 (1984)',
##        ...
##        'X-Men (2000)', 'Year of Living Dangerously (1982)',
##        'Yellow Submarine (1968)', 'You've Got Mail (1998)',
##        'Young Frankenstein (1974)', 'Young Guns (1988)',
##        'Young Guns II (1990)', 'Young Sherlock Holmes (1985)',
##        'Zero Effect (1998)', 'eXistenZ (1999)'],
##       dtype='object', name='title', length=1216)
{% endhighlight %}

We can filter out to just the titles with more than 250 ratings using the index.


{% highlight python %}
mean_ratings_active = mean_ratings.ix[active_titles]
print(mean_ratings_active[:5])
{% endhighlight %}



{% highlight text %}
## gender                                    F         M
## title                                                
## 'burbs, The (1989)                 2.793478  2.962085
## 10 Things I Hate About You (1999)  3.646552  3.311966
## 101 Dalmatians (1961)              3.791444  3.500000
## 101 Dalmatians (1996)              3.240000  2.911215
## 12 Angry Men (1957)                4.184397  4.328421
{% endhighlight %}



{% highlight python %}
print(mean_ratings_active.shape)
{% endhighlight %}



{% highlight text %}
## (1216, 2)
{% endhighlight %}

We can get the difference between the genders and assess the greatest differences. We'll also add the absolute difference using `np.abs()`.


{% highlight python %}
mean_ratings_active["diff"] = mean_ratings_active["M"] - mean_ratings_active["F"]
mean_ratings_active.sort_index(by="diff", inplace=True)
mean_ratings_active["diff_abs"] = np.abs(mean_ratings_active["diff"])
print(mean_ratings_active[:10])
{% endhighlight %}



{% highlight text %}
## gender                                        F         M      diff  diff_abs
## title                                                                        
## Dirty Dancing (1987)                   3.790378  2.959596 -0.830782  0.830782
## Jumpin' Jack Flash (1986)              3.254717  2.578358 -0.676359  0.676359
## Grease (1978)                          3.975265  3.367041 -0.608224  0.608224
## Little Women (1994)                    3.870588  3.321739 -0.548849  0.548849
## Steel Magnolias (1989)                 3.901734  3.365957 -0.535777  0.535777
## Anastasia (1997)                       3.800000  3.281609 -0.518391  0.518391
## Rocky Horror Picture Show, The (1975)  3.673016  3.160131 -0.512885  0.512885
## Color Purple, The (1985)               4.158192  3.659341 -0.498851  0.498851
## Age of Innocence, The (1993)           3.827068  3.339506 -0.487561  0.487561
## Free Willy (1993)                      2.921348  2.438776 -0.482573  0.482573
{% endhighlight %}


### Visualizing Rating Disagreement

We can plot a scatter plot emphasizing the magnitude of the disagreement. 


{% highlight python %}
sns.relplot(x = "F", y = "M", hue = "diff_abs", size = "diff_abs", data=mean_ratings_active)
plt.title("Movie Rating Disagreement By Gender", fontdict = {"fontsize": 18})
plt.show()
{% endhighlight %}

![Scatter Plot: Movie Ratings By Gender](/assets/2019-02-05-python-rstudio-ide/seaborn_scatter1.jpeg)

And finally, we can inspect the top and bottom movies to see which have the highest disagreement. 


{% highlight python %}
top_and_bottom_5 = pd.concat([mean_ratings_active[:5], mean_ratings_active[-5:]], axis=0)
print(top_and_bottom_5)
{% endhighlight %}



{% highlight text %}
## gender                                         F         M      diff  diff_abs
## title                                                                         
## Dirty Dancing (1987)                    3.790378  2.959596 -0.830782  0.830782
## Jumpin' Jack Flash (1986)               3.254717  2.578358 -0.676359  0.676359
## Grease (1978)                           3.975265  3.367041 -0.608224  0.608224
## Little Women (1994)                     3.870588  3.321739 -0.548849  0.548849
## Steel Magnolias (1989)                  3.901734  3.365957 -0.535777  0.535777
## Cable Guy, The (1996)                   2.250000  2.863787  0.613787  0.613787
## Longest Day, The (1962)                 3.411765  4.031447  0.619682  0.619682
## Dumb & Dumber (1994)                    2.697987  3.336595  0.638608  0.638608
## Kentucky Fried Movie, The (1977)        2.878788  3.555147  0.676359  0.676359
## Good, The Bad and The Ugly, The (1966)  3.494949  4.221300  0.726351  0.726351
{% endhighlight %}

#### Bonus 4

Our final bonus is that the `seaborn` plot shows up exactly where it should: in the Plots Panel.

![Plots Panel](/assets/2019-02-05-python-rstudio-ide/plot_window.jpg)

<p class="date text-center">Plots show up in the Plots Panel</p>

## Conclusion {#conclusion}

We are stoked about the prospect of the RStudio IDE supporting `Python`. In its current state, RStudio has an amazing level of integrated support for `Python`. Knowing RStudio, the features will only continue to improve. We are looking forward to seeing the RStudio IDE develop into a premier data science IDE supporting all relevant languages in the data science ecosystem.

## Additional Information {#additional}

We ran Python version 3.6 for this code tutorial. Note that the YouTube Video uses Python version 2.7.


{% highlight r %}
# R Code - Returns python environment info
p <- reticulate::py_config()
p$version
{% endhighlight %}



{% highlight text %}
## [1] "3.6"
{% endhighlight %}



## Announcements {#announcements}

### 1. BRAND NEW - Learning Lab Webinar - LIVE CODING

Topic: __Marketing Analytics: Excel to R & The Correlation Funnel - LIVE CODING__

<p class="text-center" style="font-size:30px;">
<a href="https://zoom.us/webinar/register/WN_zDjku3aNREa4zMflJZzRuA"><strong>Sign Up For Learning Lab: Marketing Analytics</strong></a>
</p>

We are giving a [LIVE CODING Learning Lab (Webinar)](https://zoom.us/webinar/register/WN_zDjku3aNREa4zMflJZzRuA) on Wednesday February 13th, 2019. This is an ambitious project where we are showcasing:

- Marketing Analytics
- `Excel` to `R` Business Process Conversion
- Packages including `tidyverse` and `recipes`
- Correlation Analysis and the Correlation Funnel
- Strategy Development

![Learning Lab: Correlation Funnel](/assets/2019-02-05-python-rstudio-ide/correlation_funnel.jpg) 
<p class="date text-center">Correlation Funnel - Taught in our next Learning Lab</p>





### 2. NEWSLETTER - Data Science Fundamentals

We just launched a new initiative to help you take your data science skills to the next level. Every Tuesday we send you new resources, tips, and advice to accelerate your learning. 

![Data Science Fundamentals](/assets/2019-02-05-python-rstudio-ide/DSF.jpg)

<!-- CTA Large-->
<br>
<hr>

<a class="anchor" id="curriculum"></a>

<h2 class="text-center">Data Science for Business Curriculum</h2>

[Business Science University](https://university.business-science.io/) is an educational platform that teaches how to apply data science to business. Our current offering includes of a fully integrated, project-based `R-Track` consisting of:

___[Business Analysis with R (Beginner)](https://university.business-science.io/p/ds4b-101-r-business-analysis-r)___ - Data Science Foundations | 7-Week course | 12 `tidyverse` Packages | 2 business projects

___[Data Science For Business with R (Intermediate/Advanced)](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover)___ - Machine Learning + Business Consulting | 10-Week course | `H2O`, `LIME`, `recipes`, and 10 more packages | 1 end-to-end business project

___Web Apps for Business with Shiny (Advanced)___ - Web Frameworks (Bootstrap, HTML/CSS) and Shiny | 6-Week course | `Shiny`, `shinytest`, `shinyloadtest`, `profvis`, and more! | Take machine learning model into production

<p class="text-center" style="font-size:30px;">
<a href="https://university.business-science.io/"><strong>Join Business Science University Today</strong></a>
</p>

<hr>
<br>
<!-- End CTA -->

## Stay Connected, Get Updates, Learn Data Science <a class="anchor" id="social"></a>

- Join our [Data Science Foundations Newsletter](https://mailchi.mp/business-science/data-science-fundamentals-newsletter) - Every Tuesday, we send you tools, tips, advice, and resources.
- Join our [Learning Lab (YouTube Webinar) Series](https://mailchi.mp/business-science/webinars) - We host live learning events where you learn from experts.


If you like our software (`anomalize`, `tidyquant`, `tibbletime`, `timetk`, and `sweep`), our courses, and our company, you can connect with us:

* [__Business Science__ on LinkedIn](https://www.linkedin.com/company/business.science)
* [__bizScienc__ on twitter](https://twitter.com/bizScienc)
* [__Business Science__ on Facebook](https://www.facebook.com/Business-Science-LLC-754699134699054/)
* [__@business-science__ on GitHub](https://github.com/business-science)
