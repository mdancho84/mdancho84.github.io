---
layout: post
title: "How to R code faster with ChatGPT"
date: 2023-04-30 11:00:00 -0500
excerpt: "Writing code is a slow process especially when you are first learning data science. What if you could speed it up? You can and this is how." 
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- osmdata
- chatgpt
image: "/assets/061_osmdata_thumb_2.jpg"
image_preview: "/assets/061_osmdata_thumb_2.jpg"

---
Writing code is a **slow process** especially when you are first learning data science. *What if you could speed it up?* You can and this is how. In this free R-tip, I share a real case study where I made the working R code for my data analysis in **under 30 seconds with ChatGPT**. 

### Table of Contents

Today I share how to automate `R` coding with `ChatGPT`. Here's what you're learning today:

* *ChatGPT Prompts:* The mistake you'll make and how to get ChatGPT to write your code correctly.
* *2-Minute Case Study:* How I connecte to an API, Downloaded Data, and Visualized on a Map with `ChatGPT`. 
* **Bonus: Sneak Peek At My NEW Shiny App that extends this ChatGPT tutorial**

![ChatGPT Made This Shiny App](/assets/061_osmdata_thumb_2.jpg)

---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> <li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li> <li><a href="https://youtu.be/0u1y5RU_to4">YouTube Tutorial</a></li> </ul>

# This Tutorial is Available in Video

I have a companion video tutorial that walks you through how to use `chatGPT` for this analysis. And, I’m finding that a lot of my students prefer the dialogue that goes along with coding. So check out this video to see me running the code in this tutorial. 👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/0u1y5RU_to4" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


# ChatGPT: And the Importance of Your Prompts

In my last R-Tip, I showed you how ChatGPT I made a [full R Shiny App in under 10-minutes](/code-tools/2023/04/02/chatgpt-shiny-app.html). That was insane!

## But, after that R-tip, I felt a bit of a let down. 

I began to try more and more complex stuff. 

* I failed building high-end Shiny apps. 
* I failed doing machine learning and integrating it into apps.
* And I got so frustrated that I even made a [learning lab 82: ChatGPT for Data Scientists](https://university.business-science.io/p/learning-labs-pro), where I showed every mistake I made in building a Production Shiny App (including the prompts, the 11 things I needed to fix in a live workshop, plus my debugging process).

But, now I'm 12 weeks into `chatGPT` and I've realized 1 thing...

## How important `chatgpt` prompting is.  

Take a look at this prompt. It's just 2 sentences:

![ChatGPT Prompt](/assets/061_chatgpt_prompt.jpg)

Looks fairly straightforward, but I need to show you why this prompt works (and what mistakes I was making in the last 11 weeks of using ChatGPT).

# Chatgpt Prompt Guide (for R users)

The mistake I was making was **not being specific** enough in directing `chatgpt` what R code I want it to write for me. 

If you look at what I'm doing now...

![ChatGPT Prompt Guide for R Users](/assets/061_chatgpt_prompt_guide.jpg)

...I specify:

* **Which R Libraries** <-- always do this
* For this case study I want to know locations of all business types in a certain area:
    * Which Business Types
    * Which Geographic Location

And it generates the code for me:

![ChatGPT Code OSMdata Example](/assets/061_chatgpt_code_osmdata_example.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Steal my code (it's legal).</strong></a> </p>

# Does the code work?

A big problem that data scientists are facing is that `chatgpt` code isn't working out of the box. 

So let's test the code. I ran it....

![Does the ChatGPT code work?](/assets/061_chatgpt_does_it_work.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Steal my code (it's legal).</strong></a> </p>

... And, it runs!

But, here's the problem...

# Will your ChatGPT code work?

The answer depends on how well you know the R ecosystem and can specify exactly what you want. 

Question: Are you struggling with any of these tasks?

* **Writing R code**
* Doing business analysis
* **Building solutions that company's want**
* Making a project portfolio for yourself
* **Making solutions for your company**

Then I have a free bonus:


{% include webinar_chatgpt.md %}

See you there!

-Matt Dancho