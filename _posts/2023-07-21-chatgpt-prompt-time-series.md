---
layout: post
title: "How to use ChatGPT for Time Series in R"
date: 2023-07-20 11:00:00 -0500
excerpt: "Writing code is a slow process especially when you are first learning time series. What if you could speed it up? You can and this is how." 
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- modeltime
- chatgpt
image: "/assets/064_chatgpt_timeseries_thumb.jpg"
image_preview: "/assets/064_chatgpt_timeseries_thumb.jpg"

---
Writing R code is a **slow process** especially when you are first learning Time Series Analysis. *What if you could speed it up?* You can and this is how. In this free R-tip, I share a real case study where I made the working R code for my time series analysis and **saved over 3 hours of work using ChatGPT**. 

### Table of Contents

Today I share how to automate 80% of your Time Series Analysis code with `ChatGPT`. Here's what you're learning today:

* *ChatGPT Prompts:* The mistakes you'll make and how to get ChatGPT to write your time series analysis code correctly.
* *2-Minute Case Study:* How I made a time series analysis with `ChatGPT`. 
* **Bonus: Sneak Peek At My NEW Shiny App that extends this ChatGPT tutorial** 👇

![ChatGPT Made This Shiny App](/assets/064_bonus_shiny_app.jpg)

<p class="text-center date">Bonus: A shiny app that extends this tutorial</p>

---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> 
    <li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li> 
    <!--<li><a href="https://youtu.be/0u1y5RU_to4">YouTube Tutorial</a></li> -->
</ul>

<!--
# This Tutorial is Available in Video

I have a companion video tutorial that walks you through how to use `chatGPT` for this analysis. And, I’m finding that a lot of my students prefer the dialogue that goes along with coding. So check out this video to see me running the code in this tutorial. 👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/0u1y5RU_to4" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

-->

# My Previous ChatGPT R Tutorials

So listen, time series is a tough problem to solve. And there's a learning curve with ChatGPT. To help I've done 2 R-Tips on ChatGPT. These are good to start with if you've never used ChatGPT before (or want starter tutorials that are great for beginners):

1. I showed you how ChatGPT I made a [full R Shiny App in under 10-minutes](/code-tools/2023/04/02/chatgpt-shiny-app.html). That was insane!

2. I demonstrated how important ChatGPT prompts are giving you [a full ChatGPT prompt guide and walkthrough](/code-tools/2023/04/30/chatgpt-prompt-osmdata.html)

But now I want to take it a step up and demonstrate using ChatGPT for a more difficult problem...

# Using ChatGPT for Time Series in R

I'm going to be fully transparent here. **ChatGPT is NOT 100% with Time Series yet.** It got me 80% of the way there. BUT the last mile, I actually had to know time series. 

I also tried Bard. Bard was even worse than ChatGPT's GPT-4 model. 

To help, I want to give you some pointers. 


# ChatGPT Prompt Guide for Time Series

The mistake I made when I first started using ChatGPT was **not being specific** enough in directing `chatgpt` what R code I want it to write for me. [I've since learned from this.](/code-tools/2023/04/30/chatgpt-prompt-osmdata.html) 

Here's a good starter chatgpt prompt for my time series problem:

![ChatGPT Prompt for time series](/assets/064_chatgpt_timeseries_prompt.jpg)

Looks pretty straightforward, but it's actually quite complex. Let's break it down.

![ChatGPT Prompt Guide for Time Series](/assets/064_chatgpt_timeseries_thumb.jpg)

The key is specifying:

1. **Which R Libraries to Use**: I specified to forecast using the `modeltime` library. Full Disclosure: I'm the creator. But, it _IS_ awesome for time series. 
2. **What Time Series Goal**: For my time series project it's to forecast. Other time series problems might involve exploratory plotting, anomaly detection, or decomposition. 
3. **What Inputs to the Time Series Problem**: For this time series project, I want to forecast initially the next 30 days (the forecast horizon) and it's a daily time series data set with 2 columns: date and value. 


And ChatGPT generates the code for me:

![ChatGPT Code OSMdata Example](/assets/064_chatgpt_initial_response.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Steal my code (it's legal).</strong></a> </p>

# Does the code work?

A big problem that data scientists are facing is that `chatgpt` code isn't working out of the box. 

So let's test the code. I ran it, and it turns out...

# ChatGPT has Hallucinations

![Does the ChatGPT code work?](/assets/064_chatgpt_hallucinations.jpg)

It didn't run. What happened is so common people have termed it "ChatGPT Hallucinations".

Yep, chatgpt makes stuff up. And this is why it's important to know how to code. Case in point: `modeltime.arima` is not an R package. I have no clue where it got this.

# The reality: You need to know how to code and do time series

Fortunately, I've been doing this a while. And I just had to debug the code. So here's what my process looks like: 

1. ChatGPT wrote the code **(15 Seconds)**
2. I debugged the code **(10 minutes)**

The net time was a little over 10 minutes for me to get this code working. 

![ChatGPT Corrected Code](/assets/064_corrected_chatgpt_code.jpg)


<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get My Working Code Here (It's in the 064_chatgpt_time_series folder).</strong></a> </p>

And the modified ChatGPT code now produces a test forecast using an ARIMA model. Now, let's set aside that the forecast isn't actually that good (I'll improve this with a different model). But I have something usable. 

![Test Forecast from an ARIMA Model](/assets/064_arima_forecast_part_1.jpg)

**Total Time Savings: 30 minutes.**

# I don't have the completed solution yet

I just have a test forecast at this point. I had to go back and request chatpgt to **refit the ARIMA model** on the full dataset and forecast the next 30 days. 

![Refit and Forecast Next 30 Days](/assets/064_chatgpt_refit_full_dataset.jpg)

What it gave me again had some hallucinations that I had to fix. No big deal. This took maybe 5 minutes. 

![ChatGPT Corrections](/assets/064_chatgpt_corrections_2.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Steal my code (it's legal).</strong></a> </p>

And, the modified chatgpt code now produces a 30-day forecast into the future, which is pretty cool. 

![The second time series forecast](/assets/064_arima_forecast_part_2.jpg)


So at this point I've spent 15 minutes making this forecast. Something that would have taken about an hour to write 100 lines of code. 

**Total Time Savings: 45 minutes.**

But here's where the time saving stacks up. 

# BONUS: I asked ChatGPT to make a Shiny App to Forecast with Modeltime

![Bonus Shiny App](/assets/064_bonus_shiny_app.jpg)

I asked ChatGPT to make a Shiny App using my corrected code. *Making a shiny app is a task that would have taken me 3+ hours.* 

![Asking ChatGPT to Make a Shiny App](/assets/064_asking_chatgpt__to_make_a_shiny_app.jpg)

I spent 15 minutes correcting the code. And I was able to produce this shiny app that uses a better XGBoost Model to forecast this time series. 


**Total Time Savings: 3 hours 30 minutes**

# Want my Bonus Shiny Time Series App?


Want all the code I just showed you PLUS my bonus Shiny Time Series App? It's my **free gift** to you: [You can have my shiny app library.](https://learn.business-science.io/r-tips-newsletter) 

![Bonus Shiny App](/assets/064_get_shiny_app_code.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Steal my shiny app from this tutorial.</strong></a> </p>


The code for the bonus shiny time series app is inside of R-Tip `064_chatgpt_time_series`. Enjoy.

Oh, I forgot to mention something. There's a...

# Big Problem: You still need to learn how to do Time Series

If you learn one thing from this tutorial, it better be that ChatGPT isn't the full solution. It's a productivity enhancement. As you just saw, I completed 4 hours of work in under 30 minutes. 

**But, what's going to happen when you try this on your own?**

Don't know? Allow me to answer: If you can't do data science, time series, OR code... Well, then you *aren't* going to get very far. 

**Would you like help?** Here's how I can help you become a data scientist and land a 6-figure job you love. 

{% include cta_struggles_rtrack.md %}
