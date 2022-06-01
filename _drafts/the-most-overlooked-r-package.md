---
layout: post
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
title: The Overlooked R Package (That Can Get You Through A Job Interview)
date: 2022-06-02 06:00:00 -0400
excerpt: 'This is the most useful R package that I''ve ever made that can help you
  tremendously AND you probably don''t know it yet. '
image: "/assets/most_overlooked_r_package.jpg"
image_preview: "/assets/most_overlooked_r_package.jpg"

---
If you are looking to learn about **the most useful R package that can help you get through a job interview AND you don't know yet**, you've come to the right place, my friend!

And, if you want a job in data science, I'm going to show you **how _THIS_ R package can help you get through an interview with 5 lines of code.** 

But, I'm going to have some fun today too (I'll tell you why in a second)! So buckle up and get ready for some fun along the way.

# What's _this_ fun that Matt speaks of?

I've been learning R for the better part of a decade and for 7 of those years I've been building R packages many of which are open source (free for everyone to use).

Here's a short list of my open source R packages, AND I want you to guess which one I'm covering today. I've sorted by GitHub stars (We'll use this as a proxy for popularity).

![](/assets/r_package_stars.jpg)

<p class="date text-center">My R Packages (Which one am I teaching you today?)</p>

I have a question... 

# Guess which R package I'm going to cover

**Simple Question:** Which R package do you think I'm about to cover?

![](/assets/most_overlooked_r_package-1.jpg)

# Here's a hint

**It can help you get _through_ a Job Interview (and it's not super popular)!**

What do you think it is?

OK, need some help? Well...

# Here's what _it's_ not

If you don't know if these R packages yet, then **I highly suggest learning these first.** They will help you get the skills to get data science jobs and develop your skills in important domains like finance and time series.  

So let's first show you what it's not... 

## 1. It's _not_ tidyquant

Tidyquant is an incredibly useful R package for downloading and working with Financial Data (stocks, investments, and investment portfolios).

![](/assets/tidyquant.jpg)

<p class="date text-center">It's not tidyquant</p>

But, with 750 GitHub stars and almost 800,000 downloads, there's a good chance you've heard of it or possibly even used it.

### Getting started with Financial Analysis in R

**Want to get started with Financial Analysis in R?** 

Then I have a special R Cheat Sheet that links to all of the important documentation.  You can [download the R cheat sheet for free here](https://www.business-science.io/r-cheatsheet). It consolidates 20,000 R packages into the 100 best. So when you want to work in domains like finance, it has all of the R packages you need to get started. 

![](/assets/free_cheatsheet.jpg)

<p class="date text-center">Free R Cheat Sheet (<a href="https://www.business-science.io/r-cheatsheet">Download Here</a>)</p>

### Learning Financial Analysis in R

To get started with Financial Analysis in R, head to **Page 3 of the cheat sheet**, and you can check out the Financial Analysis Section. 

* You'll see Tidyquant and several other Financial R Packages. 
* The links will take you to the `tidyquant` & financial software documentation.

![](/assets/cheatsheet_financial.jpg)

<p class="date text-center">Financial Analysis in R</p>

But, I'm NOT covering `tidyquant` today. It's just _too_ popular. Check out the Cheat Sheet for the tidyquant doc's and tutorials in the R cheat sheet.

Onto the next R package...

## 2. It's _not_ timetk

Timetk is a fantastic R package that helps bring time series analysis to the tidyverse. If you love `dplyr` and `ggplot2`, imagine being able to wrangle and visualize time series data the SAME way. That's what `timetk` does.

![](/assets/timetk.jpg)

<p class="date text-center">It's not timetk</p>

But timetk is again _too_ popular. Timetk has been downloaded 1,400,000 times and his a staple of time series analysis in the tidyverse. 

### Learning Time Series Analysis

**Want to get started with Time Series Analysis?** (perfect if you have to solve time series projects for your company.) 

Check out the Time Series Analysis section on [Page 3 of my R Cheat Sheet](https://www.business-science.io/r-cheatsheet).

![](/assets/cheatsheet_timeseries-1.jpg)

<p class="date text-center">Time Series Analysis in R</p>

Alright, onto the next one...

# 3. It's _not_ modeltime

I have put 2+ years of blood, sweat, and tears into developing `modeltime`, an ecosystem of time series forecasting tools that leverages the amazing Tidymodels ecosystem. And, of course I'd love to talk about it. 

![](/assets/2021-04-08-modeltime-recursive/modeltime_workflow.jpg)

<p class="date text-center">It's not modeltime</p>

### Modeltime Forecasting Ecosystem

In fact, you'll see in the GitHub Star table that I created several Modeltime Ecosystem Extensions including:

* `modeltime.ensemble` for forecast ensembles
* `modeltime.h2o` for forecasting with H2O AutoML
* `modeltime.gluonts` for forecasting with Python GluonTS Deep Learning
* `modeltime.resample` for backtesting forecasts

![](/assets/2021-03-15-modeltime-h2o/modeltime_ecosystem.jpg)

<p class="date text-center">Modeltime Ecosystem Forecasting Extensions</p>

But, it's not it. 

### Want to learn Time Series Forecasting?

**Ready to get started forecasting in R?** I can't do a full time series forecast analysis in this post, so I'm going to do the next best thing! I'll point you to some free resources for time series forecasting inside my R Cheat Sheet. 

Head to [Page 3 of my R Cheat Sheet](https://www.business-science.io/r-cheatsheet). Under Forecasting you'll see links to all of the modeltime ecosystem documentation (I've put 100s of hours into so it's understandable and full-featured).

![](/assets/cheatsheet_forecasting.jpg)

<p class="date text-center">Forecasting in R</p>

Alright, so what IS it?

# Well it's not...

* `Sweep` - Sweep is great if you want to "tidy" the `forecast` R package, but Timetk and Modeltime are the new time series and forecasting tools that I use. 
* `Portfoliodown` - A great package of course! But, it's for a specific type of people that need to make interview portfolios. Not general data science or data analysis.  
* `Anomalize` - Another great choice, but actually `timetk` has most of the time series anomaly detection functionality ported over and anomalize depends on tibbletime, an older system for time series analysis that has been superceded. 

So what could IT be? 

(I can hear it now, _"C'mon Matt, tell us already!!!"_)

# Here IT is... The overlooked R package (that can get you through a job interview)!!

![](/assets/most_overlooked_r_package.jpg)

# It's `correlationfunnel`!!!

It's correlation funnel! 

![](/assets/correlationfunnel.jpg)

<p class="date text-center">It's Correlation Funnel!</p>

## Why Correlation Funnel?

Imagine a world where you're given a dataset that you've never seen before (such as a data science interview), and the interviewer says something like this:

**_"You have 2 hours to give me some insights."_**

Well, this actually happened to my friend Danny Ma in one of his first data science job interviews. Here's his interview story...

![](/assets/interview_story_danny.jpg)

<p class="date text-center">The big interview mistake most data scientists make</p>

## What happened is super common (in fact I've done it too).

Danny was overthinking the problem in a time-constrained interview. And the result was ZERO insights (in 2-hours).

Danny felt so embarrassed. BUT, I've been there too (and I'm sure a ton of other people have as well). 

* Overthinking the problem. 
* Using the wrong tools (Excel and VBA). 
* Pressured for time

It happens. But it didn't need to. 

## What if Danny had `correlationfunnel`?

I developed `correlationfunnel` to help people like Danny (and myself) find insights super fast!

It's called **automated exploratory data analysis**, and `correlationfunnel` makes it simple to pick out insights from data automatically. 

Here's how. 

## How to automate exploratory data analysis

So let's say you're given a new data set like this Customer Churn dataset that comes with `correlationfunnel`. 

![](/assets/churn_data.jpg)

<p class="date text-center">The interview dataset</p>

We're trying to identify relationships between:

* Customer Churn (Yes or No)
* Important Customer Features (e.g. what product they are enrolled in, how much they have purchased over their lifetime, their tenure, gender, etc) 

## Quickly go from raw data to insights!

The beauty is how fast you can go from raw data to insights. First, the code. 

I'm not gonna spend a lot of time on this other than just comments on the picture. I'll show you where to find the documentation which explains much more than I can in this post. 

![](/assets/correlationfunnel_code.jpg)

<p class="date text-center">Using Correlation Funnel (R Code)</p>

## Visualizing the Business Insights

But the beauty is in the plot. Here's how quickly I can make generate business insights in the data. 

![](/assets/correlationfunnel_plot.jpg)

<p class="date text-center">Business Insights (Correlation Funnel Plot)</p>

With one visualization, I can quickly diagnose potential causes of Customer Churn AND I can come up with potential solutions like:

* Month-to-Month Contracts have high churn: **Offer upgrades to long-term contracts**
* Customers that opt-out of Online Internet Security have high churn. **Inform customers without online security of the dangers of getting hacked and how our solutions provides a superior defense. Offer one-time upgrades.**
* Customers with <6 month tenure have high churn. **Incentivize 6-month bill. _"Stay for 6-months and the 7th month is on us!" _**

## How to learn exploratory data analysis (EDA)

You guessed it. I have a full section in my R Cheat Sheet.

Head to [Page 3 of my R Cheat Sheet](https://www.business-science.io/r-cheatsheet).

![](/assets/cheatsheet_exploratory.jpg)

# Recap

We learned how to use the `correlationfunnel` library to automatically create an exploratory data analysis that is useful in job interviews and when you don't know much about your data. Great work! **But, there's a lot more to becoming a data scientist.**

If you'd like to become a data scientist (and have an awesome career, improve your quality of life, enjoy your job, and all the fun that comes along), then I can help with that.

## Step 1: Watch my Free 40-Minute Webinar

Learning data science on your own is hard. I know because **IT TOOK ME 5-YEARS to feel confident.**

AND, I don't want it to take that long for you.

So, I put together a [**FREE 40-minute webinar (a masterclass)**](https://mailchi.mp/business-science/rtrack-master-class-signup-3) that provides a roadmap for what worked for me.

Literally 5-years of learning, consolidated into 40-minutes. It's jammed packed with value. I wish I saw this when I was starting... It would have made a huge difference.

## Step 2: Take action

For my action-takers, if you are ready to take your skills to the next level and DON'T want to wait 5-years to learn data science for business, AND you want a career you love that earns you $100,000+ salary (plus bonuses), and you'd like someone to help you do this in UNDER  6-MONTHS or less....

Then I can help with that too. There's a link in the [**FREE 40-minute webinar**](https://mailchi.mp/business-science/rtrack-master-class-signup-3) for a special price (because you are special!) and taking that action will kickstart your journey with me in your corner.

Get ready. The ride is wild. And the destination is AMAZING!

![](/assets/rtrack_what_they_are_doing.jpeg)

{% include top_rtips.html %}