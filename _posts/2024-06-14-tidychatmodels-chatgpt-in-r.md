---
layout: post
title: "Large Language Models (LLMs) in R with tidychatmodels"
date: 2024-06-14 06:00:00 -0500
excerpt: "Hey guys, welcome back to my R-tips newsletter. In today's lesson, I'm sharing how to use Large Language Models (LLMs) in R with tidychatmodels. Let's go!" 
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- tidychatmodels
- chatgpt
- llm
image: "/assets/081_tidychatmodels_in_r.jpg"
image_preview: "/assets/081_tidychatmodels_in_r.jpg"

---

Hey guys, welcome back to my [R-tips newsletter](https://learn.business-science.io/r-tips-newsletter?el=website). Lately it's felt like Python, which has dozens of tools for Large Language Models (LLMs), is moving faster into LLMs than the R community. Thankfully, I stumbled upon a new R package that integrates Large Language Models (LLMs) from OpenAI, Mistral AI, and more all inside of R. It's called `tidychatmodels`, and I'm sharing how to get started in under 5 minutes. Let's go!

### Table of Contents

Here's what you're learning today:

* **What is tidychatmodels?** You'll discover what `tidychatmodels` is and how it brings LLMs to RStudio
* **Benefits of using Tidy Chat Models** How `tidychatmodels` uses the familiar tidyverse-style syntax for working with LLMs
* **How to use LLMs inside of R** I have prepared a full tutorial for making an R Code Chatbot. 
* **Make a quick Shiny App with tidychatmodels** I'll explain how to make your first shiny app to upload and explore a dataset stored as a CSV file.

![Tidychatmodels](/assets/081_tidychatmodels_in_r.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 081 Folder)</a></p>

---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> 
    <li><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Sign up for our R-Tips Newsletter and get the code.</a></li> 
     <li><a href="https://youtu.be/nvTJyQFsgCc">YouTube Tutorial</a></li>
</ul>

# This Tutorial is Available in Video (6-minutes)

I have a 6-minute video that walks you through setting up `tidychatmodels` in R and running your first LLM.  👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/nvTJyQFsgCc" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


# What is tidychatmodels?

`tidychatmodels` is a tidyverse-style interface to LLMs (Large Language Models) developed by [Albert Rapp](https://www.linkedin.com/in/dr-albert-rapp-9a5b9b28b/). According to [it's documentation](https://tidychatmodels.albert-rapp.de/):

> [`tidychatmodels`] provides a simple interface to chat with your favorite AI chatbot from R. It is inspired by the modular nature of {`tidymodels`} where you can easily swap out any ML model for another one but keep the other parts of the workflow the same.

## Supported LLM Model Vendors

Currently model vendors are supported:

- [OpenAI](https://openai.com/) (maker of the super-popular ChatGPT)
- [Mistral AI](https://mistral.ai/) Open source AI


## Benefits of using Tidychatmodels

One of the main benefits is the unified interface. This makes it easy to swap in and out different LLMs by simply changing the API key and LLM provider. 

![Swap out LLMs](/assets/081_swap_out_llms.jpg)

It's literally that easy to swap out an LLM provider for another LLM model. 

# Tutorial: How to use LLMs inside of R with tidychatmodels

It takes about 1 minute to get `tidychatmodels` set up so you can start using LLMs inside of R. All the tutorial code shown is available in the [R-Tips Newsletter folder for R-Tip 081](https://learn.business-science.io/r-tips-newsletter?el=website).

![Get the Code](/assets/081_get_the_code.jpg)

## Step 1 - Set Up Tidy Chat Models:

The first step is to set up `tidychatmodels`. You'll need to install the software and set up your LLM provider's API key. Follow these 4 steps:

1. **Install:** `tidychatmodels` is not on CRAN as of this article. But you can install from GitHub. 
2. **Load**: Load `tidyverse` and `tidychatmodels`
3. **API Key**: Set up your OpenAI API Key in your R environment.
4. **Get Your API Key**: Use `Sys.getenv()`.

![Chattr Setup](/assets/081_tidychatmodels_setup.jpg)


## Step 2 - Create a Chat Model

Once you have Tidy Chat Models set up, you're ready to **make your first chat model**. Let's create a chat model that is specifically designed to write R code. This is how:

- Use OpenAI **model vendor**
- Select "gpt-4o" for the **LLM specification**
- Add **parameters** like temperature and max tokens
- Set the role for the chatbot via **prompt engineering**

![Chat Model](/assets/081_chat_model_specification.jpg)

## Step 3 - Run the LLM

The next step is to get a user request, and to process the request using the OpenAI gpt-4o model. 

- **The user request:** Our user is requesting to create a shiny app that uploads a dataset provided as a CSV and makes a visualization with the interactive plotly library.
- The LLM is then run using the `perform_chat()` function

![Run the LLM](/assets/081_run_llm.jpg)

## Step 4 - Extract the results

The last step is to extract the results. 

- To **extract the results**, use `extract_chat(silent = TRUE)`, which returns a data frame (tibble)
- To print the code in human readable text, use `pluck()` and `cat()`.
- This **returns the Shiny App code** from our AI R Coder Copilot. (We'll see if it runs next)

![Extract the Results](/assets/081_extract_results.jpg)

# Does the Shiny App work from our R Coder AI Copilot

![Shiny App](/assets/081_shiny_app.jpg)

The shiny app works! I uploaded the CSV file stored in the 081 Folder, and I can quickly view a scatter plot of numeric columns. 

## Reminder: The code is available free inside R-tips

All of the code you saw today is available in [R-Tips Newsletter folder for R-Tip 081](https://learn.business-science.io/r-tips-newsletter?el=website)

![Get The Code](/assets/081_get_the_code_2.jpg)

# Conclusions:

This is exciting! `tidychatmodels` is making it easier and more productive for me to use LLM's in my R workflow. I look forward to seeing how `tidychatmodels` progresses as LLM's become a bigger part of my data science process. 

There you have it. How to get LLMs in R. But, the next problem is that you'll need to solve business problems with data science and R. 

If you would like to **grow your Business Data Science skills**, then please read on...

{% include cta_struggles_rtrack.md %}


