---
layout: post
title: Make Microsoft Word Reports with R + officedown
date: 2024-02-24 11:00:00 -0500
excerpt: What's the one thing that will impress your company? A professional business report. And Microsoft Word is the defacto standard (NOT Jupyter Notebooks, HTML web-reports). Even PDFs aren't ideal, especially if they need to review them. 
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
image: "/assets/officedown_blog_thumb.jpg"
image_preview: "/assets/officedown_blog_thumb.jpg"

---
What's the one thing that will impress your company (that you can make in under 60 minutes)? __A professional business report.__

And Microsoft Word is the defacto standard (NOT Jupyter Notebooks or HTML web-reports). Even PDFs aren't ideal, especially if they need to review and comment on them.

### Table of Contents

Today I'm going to show you how to make professional Microsoft Word Reports use `officedown`. Here's what you're learning today:

* Tutorial: How to use `officedown` to effortlessly produce a Microsoft Word Report (that your company will read)
* **Bonus: Get a Free Rmarkdown Template for making Word Reports**

![Microsoft Word Report Made with R](/assets/officedown_word_report.jpg)

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> <li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li> <li><a href="https://youtu.be/Sk_4CmouPwk">YouTube Tutorial</a></li> </ul>

# This Tutorial is Available in Video

I have a companion video tutorial that gives you the bonus Rmarkdown MS Word Template shown in this video (plus walks you through how to use it). And, I’m finding that a lot of my students prefer the dialogue that goes along with coding. So check out this video to see me running the code in this tutorial. 👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/Sk_4CmouPwk" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Why Making Microsoft Word Reports from R is a Must

Listen, there's one way to __immediately turn off an executive...__

And that's by giving them a Jupter Notebook (I mean look at this mess). 

![Don't Use Jupyter for Executives](/assets/officedown_dont_use_jupyter.png)

<p class="date text-center">Please don't send Executives reports that look like this.</p>

Nothing against those that use Jupyter Notebooks to make their analysis. 

But, if you sent one of those to me (and I'm an executive that's used to reading reports in Microsoft Office formats like Excel and Word)...

### ...Then I'm going to immediately hit my Email Trash Icon (and probably not tell you.)

How does that make you feel?

You just spent days on a report. And guess what, it's not getting read. 

### Well let's fix that by learning how to making Microsoft Word Reports today. 

# Thank You to the Developer (and Community).

Before we do our deep-dive into `officedown`, I want to take a brief moment to thank the developer, [David Gohel](https://www.linkedin.com/in/davidgohel/). David runs a consulting company [Ardata](https://www.ardata.fr/). Please connect and follow David. [His work is on GitHub here](https://github.com/davidgohel). 

Also I'd like to thank [Adrian Olszewski, Principal Biostatistician at 2KMM](https://www.linkedin.com/in/adrianolszewski/) for sharing the Office-verse R ecosystem with me. Without community and sharing knowledge, this R-tip wouldn't be possible. 

# Free Gift: Cheat Sheet for my Top 100 R Packages (Special Data Analysis Topics Included)

Before we dive in...

**You're going to need R packages to complete the analysis that goes in your MS Word reports.** So why not speed up the process? 

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

# Tutorial: Make Microsoft Word Reports with `officedown`

Here's how to use `officedown` to start make a professional Word Report. 

## Step 1: Make an Rmarkdown document 

Start by making a normal Rmarkdown document. Go to File > New File > R Markdown.

![Make RMD File](/assets/officedown_01_make_rmd.jpg)

## Step 2: Enable Officedown

Enable officedown as the Rmarkdown Output. 

![Enable Officedown](/assets/officedown_02_add_officedown.jpg)


<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

## Step 3: Setup the document's global `knitr` options

Use these `knitr` options to let `officedown` format the table and figure captions. 

![Global Knitr Options Officedown](/assets/officedown_03_global_knitr_opts.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

## Step 4: Add Table of Contents

The `block_toc()` function allows the Word Table of Contents to be generated. 

![Table of Contents Officedown](/assets/officedown_04_toc.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

Here's what the Table of Contents looks like. 

![Table of Contents Officedown Word](/assets/officedown_04_toc_word_doc.jpg)

## Step 5: Add Figures

This is where you start building the core of your report. Officedown integrates:

* Hyperlinked Figure Captioning using `\@ref(fig:fig_id)`
* Knitr Options like `fig.id` to connect the linked references to the figures
* Just add R Code inside of the Rmarkdown chunks like you would normally

![Add Figures Officedown](/assets/officedown_05_figures.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

Here's what it looks like in the report:

![Figures Word Doc Officedown](/assets/officedown_05_figures_word_doc.jpg)

## Step 5: Add Tables

The last step is adding tables in your document. 

![Tables Word Doc Officedown](/assets/officedown_06_tables.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

And here's what it looks like in the Word Report. 

![Tables Word Doc Officedown](/assets/officedown_06_tables_word_doc.jpg)

## Step 6: Knit the Report

The last step is to click the "knit" button. 

![Knit Word Doc Officedown](/assets/officedown_08_officedown_knit.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Get the code.</a> </p>

Viola! You get a professional report:

![Microsoft Word Report Made with R](/assets/officedown_word_report.jpg)

# Bonus: Steal My Officedown Template

Want to speed up the process? You can steal my Officedown Template. All you need to do is [subscribe to my R-Tips Newsletter](https://learn.business-science.io/r-tips-newsletter).

![Officedown Template](/assets/officedown_07_officedown_template.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'>Steal My Officedown MS Word Template.</a> </p>

Once you register, you'll get instructions to download all of the R-Tips. 

The Officedown Word Template is located in the folder `058_ms_word_reports`.

# 💡 Conclusions

You learned how to use the `officedown` library to create a professional-looking Microsoft Word Report. Great work! **But, there’s a lot more to becoming a data scientist.**

If you'd like to become a Business Data Scientist (and have an awesome career, improve your quality of life, enjoy your job, and all the fun that comes along), then I can help with that.

{% include cta_struggles_rtrack.md %}