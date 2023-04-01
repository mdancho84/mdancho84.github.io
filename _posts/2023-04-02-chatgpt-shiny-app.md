---
layout: post
title: "ChatGPT: Made this Shiny App in 10 Minutes"
date: 2023-04-02 11:00:00 -0500
excerpt: Want to learn how to build a shiny app in under 10 minutes. You can with chatgpt! 
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- shiny
- chatgpt
image: "/assets/rtip_060_r_shiny_chatgpt.jpg"
image_preview: "/assets/rtip_060_r_shiny_chatgpt.jpg"

---
What if you could <u>100X</u> your coding productivity? Well you can with __ChatGPT.__

One of the areas I'm most excited about is speeding up the development process of `R` `Shiny` web apps. And in this tutorial I'm going to show you how I built an app in **10 minutes with ChatGPT**. 

### Table of Contents

Today I'm going to show you how to build a `shiny` with ChatGPT Here's what you're learning today:

* Tutorial Part 1: How to use ChatGPT Prompts to progressively build a `shiny` web app
* **Bonus: Steal my app library for this R-Tip**

![ChatGPT Made This Shiny App](/assets/rtip_060_r_shiny_chatgpt.jpg)

---

# Special Announcement: ChatGPT for Data Scientists Workshop

![ChatGPT for Data Scientists](/assets/rtip_060_chatgpt.jpg)

**What:** ChatGPT for Data Scientists

**When:** Wednesday April 5th, 2pm EST

**How It Will Help You:** Whether you are new to data science or are an expert, ChatGPT is changing the game. There's a ton of hype. But how can ChatGPT actually help you become a better data scientist and help you stand out in your career? I'll show you inside [my free chatgpt for data scientists workshop](https://bit.ly/chatgpt4ds1). 

**Price:** Does **Free** sound good?

**How To Join:** [**Register Here**](https://bit.ly/chatgpt4ds1).



---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> <li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li> <li><a href="https://youtu.be/tZOC09KXdOw">YouTube Tutorial</a></li> </ul>

# This Tutorial is Available in Video

I have a companion video tutorial that gives you the bonus "progressively built" 4 `shiny` app versions in this video (plus walks you through how to use them). And, I’m finding that a lot of my students prefer the dialogue that goes along with coding. So check out this video to see me running the code in this tutorial. 👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/tZOC09KXdOw" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Why ChatGPT is a Must (No Hype Version)

![ChatGPT just Sped Me Up 100X](/assets/rtip_060_chatgpt_100X.jpg)

Listen, `chatgpt` is a game changer. No question about it. 

Is `chatgpt` perfect? **No.** 

Am I faster when using `chatgpt` for "AI assisted programming"? **Yes.** 

Will a beginner data scientist take my job? **Heck no.** 

### But you know who will take my job?

Someone that's faster at getting results than me. 

I'm talking other experts that are learning how to use `chatgpt` to their advantage. 

### Are you worried now?

Well let's start calming those nerves... Good ole' Matt Dancho is here to the rescue. 

Today, I'm going to introduce you to `chatgpt` by making a `shiny` app. 

Before we dive in...


# Free Gift: Cheat Sheet for my Top 100 R Packages (Special Advanced Analysis Topics Included)



**You're going to point chatgpt in the right direction.** And this little cheat sheet gives you the specific packages that you can ask ChatGPT to use.  

It complements `chatgpt` by giving you an edge over those that don't have it. In fact, it's my secret weapon...

**Even I forget which R packages to use from time to time.** And this cheat sheet saves me so much time. Instead of googling to filter through 20,000 R packages to find a needle in a haystack. I keep my cheat sheet handy so I know which to use and when to use them. Seriously. [This cheat sheet is my bible.](https://www.business-science.io/r-cheatsheet.html)

![Ultimate R Cheat Sheet](https://www.business-science.io/assets/free_cheatsheet.jpg)

Once you [download it](https://www.business-science.io/r-cheatsheet.html), head over to page 3 and you’ll see several R packages I use frequently just for Data Analysis.

![Cheat Sheet Page 3 Special Topics](/assets/cheatsheet_page_3_special_topics.jpg)

Which is important when you want to work in these fields:

* Machine Learning
* Time Series
* Financial Analysis
* Geospatial Analysis
* Text Analysis and NLP
* **Shiny Web App Development (see page 2)**

[So steal my cheat sheet.](https://www.business-science.io/r-cheatsheet.html) It will save you a ton of time.

# Tutorial: How to Make a `Shiny` App in 10 Minutes with `ChatGPT`

Time to build a `shiny` app with AI assistance from `chatgpt`. Let's have some fun!

## Step 1: Open Up Rstudio & Chatgpt

First, open up an Rstudio Session and `chatgpt` I have them stacked sideways here. (Don't worry if you don't have a shiny app yet. We'll create it in this tutorial)

![Rstudio and ChatGPT](/assets/rtip_060_rstudio_chatgpt.jpg)


<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the code.</strong></a> </p>

## Step 2: Get A Project Idea and Prompt ChatGPT to Build It

My project idea was a "monthly expense calculator".

I figured this would be easy to build because it requires no data (csv files), and I can test out `chatgpt` capabilities quickly. 

Here's my first prompt:

![Shiny ChatGPT 1](/assets/rtip_060_chatgpt_01.jpg)

Then head over to Rstudio and run the code. We get a very basic `shiny` app that calculates monthly expenses. 

![Shiny ChatGPT App 1](/assets/rtip_060_chatgpt_01_app.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the code.</strong></a> </p>

## Step 2: Begin stacking `chatgpt` prompts

This is an iterative process where I now request additions and changes to functionality. 

![Shiny ChatGPT 2](/assets/rtip_060_chatgpt_02.jpg)

First, I use the key words: **Update the app**.

And then I request what updates I want to have the app changed. 

Once the updated code is generated by `chatgpt`, I copy and test it out inside of Rstudio. 

![Shiny ChatGPT 2](/assets/rtip_060_chatgpt_02_app.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the code.</strong></a> </p>

## Step 3: Continue Stacking Prompts

Next, I progressively request updates and changes to the app as I see things I'd like changed. Each time I run the code in Rstudio to see what impact the changes have. 

First, I update the app to allow the user to add multiple months.

![Shiny ChatGPT 3](/assets/rtip_060_chatgpt_03.jpg)

Next, I request the visualization to be changed to a bar plot. 

![Shiny ChatGPT 4](/assets/rtip_060_chatgpt_04.jpg)

Then I ask for the columns to be stacked on top of each other. 

![Shiny ChatGPT 5](/assets/rtip_060_chatgpt_05.jpg)

And the final shiny app is produced:

![Shiny ChatGPT 5](/assets/rtip_060_chatgpt_05_app.jpg)

# Bonus: Steal my app library for this R-Tip

Want all the code I just showed you? [Steal my app library.](https://learn.business-science.io/r-tips-newsletter) 

The code for the 4 apps are inside of R-Tip `060_chatgpt_shiny`.

![Shiny ChatGPT 6](/assets/rtip_060_chatgpt_06_app_library_2.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Steal my shiny apps from this tutorial.</strong></a> </p>

# 💡 Conclusions

You learned how to use `chatgpt` to make a shiny app in 10 minutes. Great work! **But, there’s a lot more to becoming a data scientist.**

If you'd like to become a Business Data Scientist (and have an awesome career, improve your quality of life, enjoy your job, and all the fun that comes along), then I can help with that.

{% include cta_struggles_rtrack.md %}