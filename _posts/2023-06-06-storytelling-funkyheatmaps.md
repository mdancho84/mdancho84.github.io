---
layout: post
title: "How to improve your storytelling with R"
date: 2023-06-05 15:00:00 -0500
excerpt: "Storytelling is critical to your success as a Data Scientist. Your career hinges on whether or not you can pursuade management, executives, and leadership to make decisions. But how do you do this effectively?" 
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- funkyheatmap
image: "/assets/062_funkyheatmap_thumb.jpg"
image_preview: "/assets/062_funkyheatmap_thumb.jpg"

---
Your success as a Data Scientist *isn't* because of your coding skills. *Your success is determined by how well you can persuade decision-makers to take action*. And that's a powerful skill that I'm going to help you with today: **It's called Storytelling.** 

### Table of Contents

Today you're going to become better a storytelling. Here's what you're learning today:

* What storytelling is (and why it's absolutely essential to your data science career)
* How to use a sneaky-good R package to make funky-looking heat maps (that *insantly* improve your storytelling) 
* **Bonus: Steal my brand NEW data visualization customization code (for the crazy cool heatmap we make today)**

![Storytelling with R](/assets/062_funkyheatmap_thumb.jpg)

---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> <li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li> <li><a href="https://youtu.be/9XbxL-Is22k">YouTube Tutorial</a></li> </ul>

# This Tutorial is Available in Video

I have a companion video tutorial that walks you through how to do the full analysis and storytelling plot. And, I’m finding that a lot of my students prefer the dialogue that goes along with video-based coding. So check out this video to see me running the `R` code in this tutorial. 👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/9XbxL-Is22k" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


# Storytelling: Your Data Science Career Depends On It

One of the biggest mistakes I made in my early years was misunderstanding the impact of persuasive story telling. 

I spent 95% of my time on my code and writing up my findings. 

But I stunk at putting a slide deck together that excited management. 

And my results? Well, they weren't that great in the beginning. 

## But I learned that simple tweaks, can make story telling better

One such mistake that I made initially was making things, well, confusing. 

Here's a case in point of something I would have done early on. And I caught a "big financial company" red handed... Let's take a look at this table and why it's confusing. 

![Fidelity Financial Table](/assets/fidelity_plot.png)

<p class="text-center date">A confusing financial table</p>

The table above contains a list of Sector ETFs that people like you and me can invest in. But there's a problem...

## The problem is that Fidelity's table is confusing

If I can't tell in 2 seconds what this table is telling me. Then it's not persuasive. It's just confusing. 

And that's a BIG problem. Here's why:

## Fact: Confused decision-makers don't make decisions

Ever been in a room full of executives and they are confused about something you've just presented. 

And every "complicated explaination" you give them further digs you into a hole that you can't get out of. 

Well, that's because they are confused. And the fact is, confused decision makers **DON'T MAKE DECISIONS.** 

Instead, they complain, some yell, and they think tell you to "redo your analysis". 

## Instead, we need to make the answer obvious

Obvious answers virtually jump out of the page. And here's an easy way to make something obvious... **Make it bigger.** 

Don't get it? Here's the table reconfigured so you can see the size of boxes and circles, and bigger is better. 

![Heat Map Financial Table](/assets/062_funkyheatmap_financial_table.jpg)

<p class="text-center date">An easier to understand financial table</p>

## Why does this weird version of the table work?

It's takes exactly 2 seconds to see which Sectors had the best returns. 

Imagine you had this on a slide deck. Everyone in the room can see that over 3 month, year to date, 1 year, 3 year, 5 year, and 10 year that Information Technology was where to put your money. 

## That's story telling 101...

Make it obvious. And to help I'm going to give you a short tutorial using a new R package I just stumbled on. 

It's called `funkyheatmap`. It's great for converting messy tables into story-telling allstars. 


# Free Gift: Cheat Sheet for my Top 100 R Packages (Special Data Analysis Topics Included)

Before we dive in...

**You're going to need R packages to complete the data analysis that helps your company.** So why not speed up the process? 

To help, I'm going to share my secret weapon...

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
* Shiny Web App Development

[So steal my cheat sheet.](https://www.business-science.io/r-cheatsheet.html) It will save you a ton of time.

# Tutorial: How to turn complex tables into persuasive plots with `funkyheatmap`

I'm going to share exactly how to make this plot that we saw was much faster to draw conclusions from.

![Heat Map Financial Table](/assets/062_funkyheatmap_financial_table.jpg)

<p class="text-center date">An easier to understand financial table</p>

## Step 1: Get the Libraries and Data

First, load in `tidyverse` the data analysis library and `funkyheatmap` the heat map library. 

![Libraries and Data](/assets/062_code_1_libraries.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Steal my code.</strong></a> </p>

The data is stored in a CSV file. We'll read it in. It looks like this:

![Sector Performance CSV File](/assets/062_code_2_data.jpg)


<p class="text-center date">Sector Performance CSV File</p>


## Step 2: Convert the Table to a Funky Heatmap

Any table like this can be converted to a `funkyheatmap`. It's super simple. Just run this code:

![Basic Funky Heatmap Code](/assets/062_code_3_funkyheatmap_basic.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Steal my code.</strong></a> </p>

And then watch as it makes a basic funky heatmap table. 

![Basic Funky Heatmap Table](/assets/062_code_4_funkyheatmap_basic.jpg)


<p class="text-center date">Basic Funky Heatmap Table</p>


It's that easy. And already you can see some insights. Information Technology was the best. 

# BONUS: Get My Custom Heat Map Code

Did you like the basic funky heat map table? And, would you like to take it to the next level?

Then you're in luck:

![Custom Funky Heatmap Code](/assets/062_code_5_funkyheatmap_custom.jpg)

I have a special bonus for you: [**You can steal my custom heat map code (It's OK)**](https://learn.business-science.io/r-tips-newsletter). The code is in the **062_funkyheatmaps folder**. 

# Question: Are you struggling with any of these tasks?

* **Writing R code**
* Doing business analysis
* **Building solutions that company's want**
* Making a project portfolio for yourself
* **Making solutions for your company**

Then I have a Free Workshop that you can attend LIVE with me (and ask me questions):


{% include webinar_chatgpt.md %}

See you there!

-Matt Dancho