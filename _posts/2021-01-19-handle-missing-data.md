---
layout: post
title: "How to Handle Missing Data in R with simputation"
date:   2021-01-19 07:00:00
excerpt: "In 10-minutes, learn how to visualize and impute in R using ggplot dplyr and 3 more packages to simple imputation. Here are the links to get set up."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, R, R-Tips]
image: /assets/2021-01-19-handle-missing-data/missing_data_cover.jpg
image_preview: /assets/2021-01-19-handle-missing-data/missing_data_preview.jpg
---



This article is part of a R-Tips Weekly, a [weekly video tutorial](https://learn.business-science.io/r-tips-newsletter) that shows you step-by-step how to do common R coding tasks.

<br/>

Missing values used to drive me nuts... until I learned how to impute them! In 10-minutes, learn how to visualize and impute in R using ggplot dplyr and 3 more packages to simple imputation. 

Here are the links to get set up. 👇

- [Get the Code](https://learn.business-science.io/r-tips-newsletter)
- [YouTube Tutorial](https://youtu.be/gY12FJryF7k)


<a href="https://youtu.be/gY12FJryF7k"><img src="/assets/2021-01-19-handle-missing-data/video_thumb.png" border="0" /></a>

<br>


## Handling missing values

We're going to kick the tires on 3 key packages:

- `visdat` - For quickly visualizing data
- `naniar` - For working with NA's (missing data)
- `simputation` - For simple imputation (converting missing data to values)

![](/assets/2021-01-19-handle-missing-data/before_after.png)

So let's get started!



<h2>Visualizing Missing Data<br><small>Using vis_miss(), gg_miss_upset() and geom_miss_point()</small></h2>
 

#### Quickly Skim Missing Data 

It doesn't get any easier than this. Simply use `visdat::vis_miss()` to visualize the missing data. We can see Ozone and Solar.R are the offenders. 

![](/assets/2021-01-19-handle-missing-data/vis_miss.jpg)

![](/assets/2021-01-19-handle-missing-data/vis_miss_observations.jpg)

<br>

#### Identify Interactions in Column Missingness

**Use Case**: It often makes sense to **evaluate the interactions between columns containing missing data**. We can use an "upset" plot for this. 

<br>

**Start with a good question:**

_"Is it often that we have both Ozone and Solar.R missing at the same time?"_

We can answer this with `gg_miss_upset()`. We can see that 2 of 5 Solar.R (40%) happen at the same observation that Ozone is missing. Might want to check for IOT sensor issues!

![](/assets/2021-01-19-handle-missing-data/gg_miss_upset.jpg)

![](/assets/2021-01-19-handle-missing-data/gg_miss_upset_barchart.jpg)

<br>

#### Visualize Missing Observations in a Scatter Plot

**Use Case:** This is a great before/after visual. 

For our final exploratory plot, let's plot the missing data using `geom_miss_point()`. It works just like geom_point(), but **plots where the missing data are located in addition to the non-missing data**. 

![](/assets/2021-01-19-handle-missing-data/geom_miss_point.jpg)

![](/assets/2021-01-19-handle-missing-data/geom_miss_point_scatterplot.jpg)

<center><small>Before Imputation. Using geom_miss_point()</small></center>



<h2>Imputation<br><small>impute_rf()</small></h2>
   
The simputation library comes with a host of _impute_*()_ functions. We'll focus on `impute_rf()`, which implements a **random forest to do the imputation**. 

![](/assets/2021-01-19-handle-missing-data/impute_rf.jpg)

**This imputes the NA's, replacing the missing Ozone and Solar.R data**. We can see the missing data follows the distribution of the non-missing data in the updated scatter plot.

![](/assets/2021-01-19-handle-missing-data/impute_rf_scatterplot.jpg)

<center><small>
    After Imputation. Using impute_rf() and geom_point()
</small></center>

<br>

Reminders:
1. Full code in the Github Repository.
2. Watch the YouTube Video for detailed instructions.

<br><br>


<center><p>Time for an air-guitar celebration with your co-worker. 👇</p></center>

![](/assets/2021-01-19-handle-missing-data/football_celebrate.gif)


### But if you really want to improve your productivity... 

<center>
<p>
Here's how to <strong>master R programming and become powered by R</strong>.  👇
<br><br>
What happens after you learn R for Business. 
</p>
</center>

![](/assets/2021-01-19-handle-missing-data/harry_potter.gif)

<br>
<center><p>When your CEO gets word of your Shiny Apps saving the company $$$. 👇</p></center>

![](/assets/2021-01-19-handle-missing-data/wizard.gif)


<center><strong><p>This is career acceleration.</p></strong></center>



<br>

### SETUP R-TIPS WEEKLY PROJECT

1. [Get the Code](https://learn.business-science.io/r-tips-newsletter)

2. Check out the [R-Tips Setup Video](https://youtu.be/F7aYV0RPyD0).

Once you take these actions, you'll be set up to receive R-Tips with Code every week. =)

<br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}
