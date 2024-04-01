---
layout: post
title: "How to Scrape PDF Documents and Search PDFs with OpenAI LLMs (in R)"
date: 2024-03-31 10:00:00 -0500
excerpt: "Hey guys, welcome back to my R-tips newsletter. In today's lesson, I'm sharing how to scrape a PDF financial statement. Then I'll show you how to summarize it with OpenAI LLMs in R. Let's go!" 
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- OpenAI
image: "/assets/078_pdf_scraping_openai_thumb_1.jpg"
image_preview: "/assets/078_pdf_scraping_openai_thumb_1.jpg"

---
Hey guys, welcome back to my [R-tips newsletter](https://learn.business-science.io/r-tips-newsletter). Businesses are sitting on a mountain of unstructured data. The biggest culprit is PDF Documents. Today, I'm going to share how to PDF Scrape text and use OpenAI's Large Language Models (LLMs) to summarize it in R. 

### Table of Contents

Here's what you're learning today:

* **How to scrape PDF Documents** I'll explain how to scrape the text from your business's PDF Documents using `pdftools`.
* **How I summarize PDF's using the OpenAI LLMs in R**. This will blow your mind.

![XGBoost R Code](/assets/078_pdf_scraping_openai_thumb_1.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 078 Folder)</a></p>

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

# Businesses are Sitting on $1,000,000 of Dollars of Unstructured Data (and they don't know how to use it)

Fact: 90% of businesses are not using their unstructured data. It's true. Many companies have no clue how to extract it. And once they extract it, they have no clue how to use it. 

We're going to solve both problems in this R-Tip. 

## The most common form is text located in PDF documents.

Businesses have 100,000s of PDF documents that contain valuable information.

![PDF Data](/assets/078_pdf_data.jpg)

## OpenAI Document Summarization

One of the best use cases of LLMs is document summarization. But how do we get PDF data to OpenAI?

One easy way is in R!

# R Tutorial: Scrape PDF Documents and Summarize with OpenAI

This is a simple 2 step process we'll cover today:

1. **Extract PDF Text:** We'll use `pdftools` to extract text
2. **Summarize Text with OpenAI's LLMs:** We'll use `httr` to connect to OpenAI's API and summarize our PDF document

## Business Objective:

I have set up a PDF document of Meta's 2024 10K Financial Statement. We'll use this document to analyze the risks that Meta reported in their filing (without even reading the document). 

**This is a massive speed up** - and I can ask even more questions too beyond just the risks to really understand Meta's business. 

**Good questions to ask for this financial case study:**

1. What are the top 3 risks to Meta's business
2. Where does Meta gain most of it's revenue?
3. In which business line is Meta's revenue growing the most?

![PDF Data](/assets/078_pdf_data.jpg)

## Get the PDF and Code

You can get the PDF and Code by joining the [R-Tips Newsletter here](https://learn.business-science.io/r-tips-newsletter?el=website).

![T-Tip 078 Folder](/assets/078_folder.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the PDF and Code (In the R-Tip 078 Folder)</a></p>

## Load the Libraries

Next, load the libraries. Here's what we're using today:

![Load Libraries](/assets/078_load_libraries.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the PDF and Code (In the R-Tip 078 Folder)</a></p>

## Step 1: Extract PDF Text

With our project set up and libraries loaded, next I'm extracting the PDF text. It's very easy to do in 1 line of code with `pdftools::pdf_text()`.

![Extract PDF Text](/assets/078_extract_pdf_text.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the PDF and Code (In the R-Tip 078 Folder)</a></p>

This returns a list of text for 147 pages in Meta's 10K Financial Statement. You can see the text on each page by cycling through `text[1]`, `text[2]` and so on. 

## Step 2: Summarize the PDF Document with OpenAI LLMs

**A common task:** I want to know what risks Meta has identified in their 10K Financial Statement. This is required by the SEC. But, I don't want to have to dig through the document. 

### The solution is to use OpenAI to summarize the document. 

We will just summarize the first 30,000 characters in the document. There are more advanced ways to create a vector storage, but I'll save that for a follow up post. 

### Run this code to set up OpenAI and our prompt:

Note that I have my OpenAI API key set up. I'm not going to dive into all of that. OpenAI has great documentation to set it up. 

![OpenAI Prompt Set Up](/assets/078_openai_prompt_setup.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the PDF and Code (In the R-Tip 078 Folder)</a></p>

### Run this code to send the text and get OpenAI's response

I'm using `httr` to send a POST request to OpenAI's API. Then OpenAI provides a response with the answer to my question in the context of the text I provided it. 

![Connect to OpenAI API](/assets/078_connect_to_openai_api.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the PDF and Code (In the R-Tip 078 Folder)</a></p>

## Run this Code to Parse the OpenAI Response

In just a couple seconds, I have a response from OpenAI's API. Run this code to parse the response. 

![Parse OpenAI API Resposne](/assets/078_parse_openai_response.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the PDF and Code (In the R-Tip 078 Folder)</a></p>

## Review the Response

Last, we can review the response from OpenAI's Chat API. We can see that the top 3 risks are:

1. Regulatory Compliance
2. User Privacy and Trust Issues
3. Competition and Innovation Risks

![OpenAI Chat API Response](/assets/078_openai_chat_response.jpg)

# Conclusions:

You've learned my secret 2 step process for PDF Scraping documents and using LLM's like OpenAI's Chat API to summarize text data in R. But there's a lot more to becoming an elite data scientist. 

If you are struggling to become a Data Scientist for Business, then please read on...

{% include cta_struggles_rtrack.md %}