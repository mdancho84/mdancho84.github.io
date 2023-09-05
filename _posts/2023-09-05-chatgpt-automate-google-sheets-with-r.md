---
layout: post
title: "ChatGPT: How to automate Google Sheets in under 2 minutes (with R)"
date: 2023-09-05 11:00:00 -0500
excerpt: "In this article, I share the cheat code to automating Google Sheets. Plus, I'm sharing exactly how I made it in under 2 minutes. AND how you can do it for ANY company (using ChatGPT and R). Let's go!" 
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- chatgpt
- googlesheets
image: "/assets/068_automate_google_sheets_thumb_2.png"
image_preview: "/assets/068_automate_google_sheets_thumb_2.png"

---
Hey guys, welcome back to my [R-tips newsletter](https://learn.business-science.io/r-tips-newsletter). In today's R-tip, I'm sharing a super common data science task (one that saved me 20 hours per week)... You're getting the **cheat code to automating Google Sheets**. Plus, I'm sharing exactly how I made this automation in under 2 minutes. AND how you can do it for ANY company (using ChatGPT and R). Let's go! 

### Table of Contents

Today I share how to **automate Google Sheets** with `ChatGPT` + `R`. Here's what you're learning today:

* *3 Tips for Better ChatGPT Prompts:* The mistake you'll make and how to get ChatGPT to write your code correctly.
* *2-Minute Case Study:* How I connect to Google Sheets, Upload Data, and Create Spreadsheets with `ChatGPT` + `R`. 

![Automate Google Sheets in R with ChatGPT](/assets/068_google_sheet.png)

<p class="date text-center">The Google Sheet you create in this tutorial</p>

---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter?el=website">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> 
    <li><a href="https://learn.business-science.io/r-tips-newsletter?el=website">Get the Code</a></li> 
    <li><a href="https://youtu.be/dLsqSf3C_qM">YouTube Tutorial</a></li>
</ul>


# This Tutorial is Available in Video

I have a companion video tutorial that walks you through how to use `ChatGPT` + `R` + `googlesheets4` for this data automation. 👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/dLsqSf3C_qM" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# How to get ChatGPT to write your code correctly

I'll be honest. **ChatGPT is like an intern.** 

* Like an intern, ChatGPT does what you ask it to do. (Sometimes)
* Sometimes the work is good. 
* Other times it "hallucinates".
* But if you don't really know what your asking. It's just going to get you 💩 results fast.
* And if you don't check your intern's work, well, good luck. 

To help I've put together a few tips on ChatGPT Prompting as I was creating this R tip on automating Google Sheets with ChatGPT and R. My hope is this helps you speed through the learning curve with ChatGPT. If you'd like more help, I have a [free LIVE workshop: ChatGPT for Data Scientists](https://learn.business-science.io/registration-chatgpt-2?el=website) (Limit 500 seats). 

## Tip 1: Specify your goal and which tools to use

This might seem obvious, but 9 out of 10 times when I find myself wasting time on debugging, it's self inflicted. 

Why? Because I wasn't specific enough with my ChatGPT prompt.

![ChatGPT Prompt Tips for Data Scientists 1](/assets/068_prompt_tip_1.png)


Being specific does not mean complicated. If you look at this prompt above, it's very simple. And the result gave me insights on how to create a Google Sheet with R. 

* The goal: Make a google sheet
* The tool: R

ChatGPT's response was pretty good. It correctly picked out the `googlesheets4` package. And gave me code to create a new sheet. 

![ChatGPT Response](/assets/068_prompt_1_response.png)

## Tip 2: Ask it to format your script for you

One issue that you can run into is that ChatGPT is designed to explain it's steps. That's great when you're learning. But usually you just want to test the code out. **So ask it to prepare your code. Here's how.**

![ChatGPT Tip 2](/assets/068_prompt_tip_2.png)

This format is a lot easier to test. And like I said, the intern's much faster than I am at writing code. 

But how good is it?

## Tip 3: Check Your Intern's Work

One of the big problems with ChatGPT's coding is it's far from error free. In fact, I often find myself spending a lot of time debugging. 

![ChatGPT Hallucinations](/assets/068_chatgpt_hallucinations.png)

Unfortunately, I don't have a simple solution for debugging. ChatGPT can help some time, but often it's just trial and error and searching for the solution.

This time all I needed to do was investigate the `googlesheets4` package, and I found a function `range_write()` that solved the issue. 

Ok. With an understanding of how to prompt with ChatGPT, let's check out how to automate Google Sheets with R. 


# Tutorial: How to Automate Google Sheets in R

This tutorial is awesome. You'll learn how I made the Google Sheets Automation in under 2 minutes with R + ChatGPT.

![Google Sheet Automation](/assets/068_google_sheet.png)

## Step 1: Setup a Sheet and Write Data

![Prompt 1 Code](/assets/068_code_1.png)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the Code.</strong></a> </p>

The first step is to setup a blank google sheet, and to write data to the sheet To do so:

1. Load the `googlesheets4` library
2. Authenticate to your Google account with `gs4_auth()`
3. Create a new sheet with `gs4_create()`
4. Then create a data frame and use `write_sheet()` to add a new sheet or overwrite an existing sheet

## Step 2: Use an Existing Sheets ID (or URL) and Write Data

![Prompt 2 Code](/assets/068_code_2.png)

The next thing you might want to automate are updates to your Google Sheet. You can do so by:

1. Finding the URL of the sheet from your web browser
2. Extracting the ID from the sheet URL
3. Getting the sheet with `gs4_get()`
4. Writing the data to a new or existing sheet with `write_sheet()`

There you have it, you've just automated the creation and update of your first Google Sheet. 

## Get the Code

![Get the Code](/assets/068_get_the_code.png)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter?el=website' target ='_blank'><strong>Get the Code.</strong></a> </p>

If you want all of the code you saw here, just [subscribe to the R-Tips Newsletter](https://learn.business-science.io/r-tips-newsletter?el=website). The code shown is in the folder: `068_chatgpt_googlesheets`.

## Want to Learn ChatGPT for Data Science from me LIVE?

I have good news...

{% include webinar_chatgpt.md %}

{% include cta_struggles_rtrack.md %}