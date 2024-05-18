---
layout: post
title: "How to Get ChatGPT in R with chattr"
date: 2024-05-11 18:00:00 -0500
excerpt: "Hey guys, welcome back to my R-tips newsletter. In today's lesson, I'm sharing how to get ChatGPT in R with chattr. Let's go!" 
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- chattr
- chatgpt
image: "/assets/080_chatgpt_in_r_2.jpg"
image_preview: "/assets/080_chatgpt_in_r_2.jpg"

---

Hey guys, welcome back to my [R-tips newsletter](https://learn.business-science.io/r-tips-newsletter?el=website). ChatGPT is a massive productivity enhancer. Lately it's felt like VSCode, which integrates AI via GitHub Copilot, is moving faster than the RStudio IDE when it comes to integrating AI. Fortunately, I stumbled upon a new R package that **integrates ChatGPT in R via RStudio IDE**. It's called `chattr`, and I'm sharing how to get started in under 5 minutes. Let's go!

### Table of Contents

Here's what you're learning today:

* **What is chattr?** You'll discover what `chattr` is and how it brings LLMs to RStudio
* **Benefits of using Chattr** How `chattr` provides additional context to OpenAI ChatGPT and GitHub Copilot LLMs from inside RStudio
* **How to get ChatGPT inside of RStudio** You'll install `chattr` and set up ChatGPT inside of Rstudio
* **Make a quick Shiny App with chattr** I'll explain how to make your first shiny app to explore your dataset.

![Chattr](/assets/080_chatgpt_in_r_2.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 080 Folder)</a></p>

---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> 
    <li><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Sign up for our R-Tips Newsletter and get the code.</a></li> 
    <!-- <li><a href="https://youtu.be/fkwKQi7skAw">YouTube Tutorial</a></li>-->
</ul>


# What is chattr

`chattr` is an interface to LLMs (Large Language Models). It enables interaction with the model directly from the RStudio IDE. chattr allows you to submit a prompt to the LLM from your script, or by using the provided Shiny Gadget.

Chattr provides integration to many common models including OpenAI's GPT models, Llama, and GitHub Copilot:

![Chattr Models](/assets/080_chattr_models.jpg)

Once set up, you can use an LLM widget inside of RStudio IDE:

# Benefits of using Chattr: Knowledge of Your RStudio Environment

`chattr` enriches your request with additional instructions, name and structure of data frames currently in your environment, the path for the data files in your working directory. If supported by the model, chattr will include the current chat history.

![Chattr Diagram](/assets/080_chattr_diagram.jpg)

# Tutorial: How to get ChatGPT inside of RStudio

It takes about 1 minute to get chattr set up so you can start using ChatGPT inside of Rstudio. All the tutorial code shown is available in the [R-Tips Newsletter folder for R-Tip 080](https://learn.business-science.io/r-tips-newsletter?el=website).

![Get the Code](/assets/080_get_the_code.jpg)

## Here's how to set up Chattr:

![Chattr Setup](/assets/0880_chattr_setup.jpg)

### Follow these 5 steps:

1. **Install:** `chattr` is not on CRAN as of this article. But you can install from GitHub. 
2. **Load**: Load `chattr`
3. **API Key**: Set up your OpenAI API Key.
4. **Select a Model**: For this demo I'm using gpt-3.5-turbo, denoted "gpt35". But you can use gpt-4-turbo as well with "gpt4".
5. **Run Chattr**: This fires up a `chattr_app()` as a background job. 

### Success: A ChatBot Just Appeared inside Rstudio

Once successful you'll see a dialog open in the RStudio Viewer window. You can begin asking questions like how to read the data from the chattr folder. 

![Chattr Dialog](/assets/080_chattr_dialog.jpg)

### Chattr Background job

One thing I want to mention is why it makes sense to run Chattr as a background job. Running as a background job frees up your Console so you can continue to work. 

![Chattr Background Job](/assets/080_chattr_background_job.jpg)

# Make a quick Shiny App with chattr

![Chattr Shiny App](/assets/080_chattr_shiny_app.jpg)

One of the things I love LLM's for is building shiny apps. So I'll share a quick dialog I had with `chattr` to make one. The chattr shiny app is in the `test_shiny_app.R` file. 

One of the things I wanted to do was explore a Marketing Campaign dataset that I have inside the R-Tip 80 folder `marketing_campaign.csv`. 

**So I asked it howt to make a minimal shiny app to explore the data?**

And it made this for me (shiny app is in the R-Tip 80 Folder):


![Chattr Built This Shiny App](/assets/080_chattr_built_shiny_app.jpg)

# Conclusions:

This is exciting! `Chattr` is making it easier and more productive for me to use LLM's in my R workflow. I look forward to seeing how `chattr` progresses as LLM's become a bigger part of my data science process. 

There you have it. How to get ChatGPT into R. But, the next problem is that you'll need to solve business problems with data science and R. 

If you would like to **grow your Business Data Science skills**, then please read on...

{% include cta_struggles_rtrack.md %}


