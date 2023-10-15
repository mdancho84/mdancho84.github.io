---
layout: post
title: "ChatGPT: How to use ChatGPT to make a Shiny App (an Excel Analyzer)"
date: 2023-10-15 11:00:00 -0500
excerpt: "Hey guys, welcome back to my R-tips newsletter. In today's video, I'm sharing the cheat code to making an R shiny web app that automatically analyzes your Excel Files. Plus, I'm sharing exactly how I made it in under 15 minutes. AND how you can do it for ANY company. Let's go!" 
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- chatgpt
- excel
- shiny
image: "/assets/070_chatgpt_shiny_app_thumb.png"
image_preview: "/assets/070_chatgpt_shiny_app_thumb.png"

---
Hey guys, welcome back to my [R-tips newsletter](https://learn.business-science.io/r-tips-newsletter). In today's R-Tip, I'm sharing the cheat code to making an **R shiny web app that automatically analyzes your Excel Files**. Plus, I'm sharing exactly how I made it in under 15 minutes. AND how you can do it for ANY company. Let's go!

### Table of Contents

Today I share how to **automate Google Sheets** with `ChatGPT` + `R`. Here's what you're learning today:

* *How to use ChatGPT to make a Shiny App:* How to iteratively prompt and improve your app with `ChatGPT` + `R`.
* *15-Minute Case Study:* Exactly how I made this app in under 15 minutes.  

![Auto Excel Analyzer Shiny App](/assets/070_excel_analyzer_shiny_app.png)

<p class="date text-center">The R Shiny App you create in this tutorial</p>

---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> 
    <li><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code</a></li> 
    <li><a href="https://youtu.be/fkwKQi7skAw">YouTube Tutorial</a></li>
</ul>


# This Tutorial is Available in Video

I have a companion video tutorial that walks you through how to use `ChatGPT` + `R` + `Shiny` for this Excel Spreadsheet Analyzer automation. 👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/fkwKQi7skAw" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>




# How to use ChatGPT to make a Shiny App: 


The Excel Analyzer in R Shiny App is a powerful tool that enables users to create an Excel spreadsheet analyzer in **just 10-15 minutes**. By the end of this guide, readers will have a comprehensive understanding of the tool and can access a [free ChatGPT workshop tailored for data scientists](https://learn.business-science.io/registration-chatgpt-2?el=website).


![Auto Excel Analyzer Shiny App](/assets/070_excel_analyzer_shiny_app.png)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Excel Spreadsheet Analyzer Shiny App Here</a></p>


## Basic App Overview:

The foundational version of this app facilitates the uploading of Excel data for visualization purposes. 

- The Excel spreadsheet and R Shiny App can be accessed [R-Tips Newsletter](https://learn.business-science.io/r-tips-newsletter?el=website)
- The files are located in the `/070_chatgpt_excel` folder



### Users can upload Excel files:

![Upload Excel](/assets/070_01_upload_excel.png)

Pick any excel file with a date column, value column, and optional facet column. Here's what the sample data looks like:

![Excel Spreadsheets](/assets/070_02_excel_spreadsheet.png)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Excel Spreadsheet Here</a></p>

### Users can get a data preview:

Users can preview the data before visualizing it. This feature is especially useful so people know exactly how the incoming data looks.

![Data Preview](/assets/070_04_data_preview.png)

### Users can visualize the data:

Users can effortlessly select columns, such as "date" and "sales", to instantly view the corresponding plots. The app's primary purpose is to empower users to swiftly visualize sales data and other vital metrics.

![Visualize Data](/assets/070_05_visualize_data.png)

# 15-Minute Case Study: Exactly how I made this app in under 15 minutes.

For those new to ChatGPT, it is an advanced tool that can be employed to produce code seamlessly. For instance, a command can be given to ChatGPT to craft an R Shiny app embedded with a Plotly visualization. Upon generation, this code can be executed to display a fully-functional app.

And then you can iterate on the app to make it better. That's how I made this app in under 15 minutes... **Iteration.**

![Auto Excel Analyzer Shiny App](/assets/070_excel_analyzer_shiny_app.png)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Excel Spreadsheet Analyzer Shiny App Here</a></p>

## Adopting an Iterative Process with ChatGPT:

Instead of requesting ChatGPT to produce an exhaustive solution at once, it's often more efficient to adopt an iterative methodology. By issuing smaller, more precise prompts to ChatGPT, users can methodically construct their desired solution, building on each previous step.

### See My Process in Action [YouTube Video]:

The best spot to go is [this video](https://youtu.be/fkwKQi7skAw) to see me build the Shiny app with ChatGPT live:

<iframe width="100%" height="450" src="https://www.youtube.com/embed/fkwKQi7skAw" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### My Exact ChatGPT Prompts:

Here's are the ChatGPT prompts that I used to build the Shiny App:

- **Prompt 1 (Excel Uploader)**: Create a foundational shiny app that facilitates the uploading of user Excel files.
  
- **Prompt 2 (Add Visualization)**: Enhance the app to permit users to visualize data by selecting a specific date column in juxtaposition with a value column.
  
- **Prompt 3 (Include Sample Data in App)**: Integrate sample data into the app. This feature enables users to acquaint themselves with the app's capabilities even without a personal Excel dataset.

- **Prompt 4 (Preview Sample Data)**: Introduce a preview option so that users can glimpse the data before initiating the visualization process.

- **Prompt 5 (Select Date Column)**: This is an essential feature that provides users with the autonomy to choose which column they aspire to visualize.

- **Prompt 6 (Incorporate an Optional Facet Column)**: Refine the app further by granting users the option to pinpoint a facet column for their visualization.

**Error Handling with ChatGPT**:
Errors are an integral part of the development process. When an error surfaces in visualization, ChatGPT can be a valuable asset for debugging. By inputting the error message, users can obtain potential resolutions, like the suggestion to deploy the GGplot2 library.

# Get the Shiny App (and Dissect it)

You can get a copy of everything you need to make the Shiny App here:

![Get the Shiny App](/assets/070_06_get_shiny_app.png)


<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank" style="font-size:26px;">Get the Excel Spreadsheet Analyzer Shiny App + Code Here</a></p>

# Conclusions:

By leveraging ChatGPT, users can not only expedite the R Shiny app development process but can also troubleshoot effectively, making it an invaluable asset for both novice and seasoned developers.

**However, ChatGPT is not a replacement for R. It is a tool that can be used to augment the development process. It is not a substitute for learning R.**

If you are struggling to become a Data Scientist with R, then please read on...

{% include cta_struggles_rtrack.md %}