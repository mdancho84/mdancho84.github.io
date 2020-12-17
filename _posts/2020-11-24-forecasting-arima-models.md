---
layout: post
title: "Forecasting Time Series ARIMA Models (10 Must-Know Tidyverse Functions #5)"
date:   2020-11-24 07:00:00
excerpt: "Making multiple ARIMA Time Series models in R used to be difficult. But, with the purrr nest() function and modeltime, forecasting has never been easier. Learn how to make many ARIMA models in this tutorial."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, R, R-Tips, Tidyverse, TimeSeries, ARIMA]
image: 2020-11-24-forecasting-arima-models/forecast-arima-models-cover.png
image_preview: 2020-11-24-forecasting-arima-models/forecast-arima-models-preview.jpg
---



This article is part of a R-Tips Weekly, a [weekly video tutorial](https://mailchi.mp/business-science/r-tips-newsletter) that shows you step-by-step how to do common R coding tasks.

<br/>

Making multiple ARIMA Time Series models in R used to be difficult. But, with the `purrr` `nest()` function and `modeltime`, forecasting has never been easier. Learn how to make many ARIMA models in this tutorial. Here are the links to get set up. 👇

- [Get the Code](https://mailchi.mp/business-science/r-tips-newsletter)
- [YouTube Tutorial](https://youtu.be/3znQUrREUC8)

<br>

<figure class="text-center">
  <a href="https://youtu.be/3znQUrREUC8"><img src="/assets/2020-11-24-forecasting-arima-models/video_thumb.jpg" border="0" /></a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>


# What is Nest?

**Nesting is a data frame reshaping tool that produces a "nested" structure.**

The nested structure is super powerful for modeling groups of data. We'll see how.
Let's check `nest()` out. With 3 lines of code, we **turn an ordinary data frame into a nested data frame**. 

<br>

<center><p>Before <br>Unnested time series data with many groups of time series.</p></center>

![tidyverse nest](/assets/2020-11-24-forecasting-arima-models/before_nesting.jpg)

<br>

<center><p>After <br>Nested Time Series Data that we can model!</p></center>

![tidyverse nest](/assets/2020-11-24-forecasting-arima-models/after_nesting.jpg)



# ARIMA Modeling with Modeltime

So what can we do with a "Nested" Data Frame?  How about making 7 ARIMA Forecasts!

![Make ARIMA Models](/assets/2020-11-24-forecasting-arima-models/making_arima_models.jpg)

![ARIMA Model DataFrame](/assets/2020-11-24-forecasting-arima-models/arima_model_dataframe.jpg)


And with a little extra work (thanks to my `Modeltime` R Package), we can create this **INTERACTIVE ARIMA FORECAST**! 💥💥💥

![Tidyverse Unnest ARIMA Models](/assets/2020-11-24-forecasting-arima-models/unnest_arima_models.jpg)


![Timeseies ARIMA Models](/assets/2020-11-24-forecasting-arima-models/timeseries_arima_models.jpg)





<br>

<center><p>The look on your coworker's face speaks volumes. 👇</p></center>

![shocked gif](/assets/2020-11-24-forecasting-arima-models/shocked.gif)




<br>

### But you don't have the force yet! 

Here's how to master R programming and become powered by R.  👇
 
![Ive got the power](/assets/2020-11-24-forecasting-arima-models/got_the_power.gif)


...Your executive management review after you've launched your [your first Shiny App](https://www.business-science.io/business/2020/08/05/build-data-science-app-3-months.html). 👇

![Crowd Applause](/assets/2020-11-24-forecasting-arima-models/applause.gif)


**This is career acceleration.**



<br>

### SETUP R-TIPS WEEKLY PROJECT

1. Sign Up to Get the R-Tips Weekly (You'll get email notifications of NEW R-Tips as they are released): https://mailchi.mp/business-science/r-tips-newsletter

2. Set Up the GitHub Repo: https://github.com/business-science/free_r_tips

3. Check out the setup video (https://youtu.be/F7aYV0RPyD0). Or, Hit Pull in the Git Menu to get the R-Tips Code

Once you take these actions, you'll be set up to receive R-Tips with Code every week. =)

<br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}