---
layout: post
title: "DataEditR: The GUI for Interactive Dataframe Editing in R"
date:   2021-05-18 08:30:00
excerpt: "Now you can edit data in R using a GUI that is reminiscent of Excel."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R]
image: "/assets/2021-05-18-dataeditr/dataeditr_thumb.jpg"
image_preview: "/assets/2021-05-18-dataeditr/dataeditr_thumb.jpg"
---

This article is part of R-Tips Weekly, a <a href="https://mailchi.mp/business-science/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<br/>

<p>Here are the links to get set up. 👇</p>

<ul>
    <li><a href="https://mailchi.mp/business-science/r-tips-newsletter?rfsn=4810182.eff115&subid=koivs2aicj015e9h0ntyp">Get the Code</a></li>
    <li><a href="https://youtu.be/_lEwfZbyu48">YouTube Tutorial</a></li> 
</ul>


# DataEditR Video Tutorial<br><small>For those that prefer Full YouTube Video Tutorials.</small>

Learn how to use `DataEditR` in our free YouTube video. 

<iframe width="100%" height="450" src="https://www.youtube.com/embed/63SI0v0ssaY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p class='text-center date'>
  <a href='https://youtu.be/63SI0v0ssaY' target='_blank'> Watch our full YouTube Tutorial</a>
</p>

# GUI for Editing Dataframes in R <br><small>Edit dataframes as if they were Excel tables.</small>

<figure class="text-center">
    <img src="/assets/2021-05-18-dataeditr/dataeditr.jpg" class='pull-right' style='max-width:50%;margin-left:15px;'>
</figure>

`DataEditR` is a great addition to the R package ecosystem. I see it being immediately __useful for beginners coming from Excel__ where they are used to being able to edit data interactively in an Excel Worksheet. 

Find out how easy it is to edit data with the __DataEditR GUI (Graphical User Interface).__

## BONUS: 

I have an extra `ggplot2` code showing boxplots of the Fuel Economy at the end of the tutorial (a vision of where you can go once you learn R beyond the GUI). 

![ggplot fuel economy](/assets/2021-05-18-dataeditr/ggplot_fuel_economy.jpg)

<br>




# Beginners Struggle with R <br><small>Simple tools like DataEditR can make your transition much easier.</small>

__One of my biggest challenges__ when I moved from `Excel` to `R` was the transition from an interactive worksheet where I could edit data using point-click-edit to a data frame that requires code to edit. This was a serious hurdle. I _wish_ I had a tool like `DataEditR` when I was first starting out. 

Fast-forward to 2021, and here we are: `DataEditR`, the GUI I never had. Today, you'll learn how to use this <span style='color:blue;'>Excel-style dataframe editing tool.</span>

![DataEditR](/assets/2021-05-18-dataeditr/DataEditR-README.gif)
<p class='text-center date'>Image Source: <br><a href="https://github.com/DillonHammill/DataEditR" target='_blank'>DataEditR GitHub</a></p>


# Before we get started, get the R Cheat Sheet

`DataEditR` is great for making simple edits. But, you'll still need to learn how to wrangle data with `dplyr` and visualize data with `ggplot2`. For those topics, I'll use the [Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html) to refer to `dplyr` and `ggplot2` code in my workflow.

### Quick Example:

[Download the Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html) __Then Click the "CS" next to "ggplot2"__ opens the Data Visualization with GGplot2 Cheat Sheet.

<a href="https://www.business-science.io/r-cheatsheet.html"> <img src="/assets/2021-05-11-patchwork/workflow.jpg" style='max-width:100%;'>

Now you're ready to quickly reference `ggplot2` functions.

Onto the tutorial. 

![ggplot2 cheat sheet](/assets/2021-05-11-patchwork/cheat_sheet.jpg)


# How DataEditR works

It's super-simple. Just run this code to:

1. __Load Libraries:__ Load `DataEditR` , `tidyverse` and `tidyquant`. 
2. __Import Data:__ We're using the `mpg` dataset that comes with `ggplot2`. 
3. __Start Data Editing:__ Use the `data_edit()` function.

<img src="/assets/2021-05-18-dataeditr/data_editing_process.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'> 
  <a href='https://mailchi.mp/business-science/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

This launches the __Data Editor.__

<img src="/assets/2021-05-18-dataeditr/dataeditr.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>The Data Editor</p>

## Try Editing Cells

Click on a cell and make any edits. 

<img src="/assets/2021-05-18-dataeditr/dataeditr_edit_cells.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>Editing Cells</p>

## Try Selecting Columns

Click the target icon. Then select columns you are interested in. 

<img src="/assets/2021-05-18-dataeditr/dataeditr_select.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>Selecting Columns</p>


## When you're done, save a CSV

After you've made your edits, you can optionally save a CSV File. Alternatively, you can return a data frame in your active R Session. 

<img src="/assets/2021-05-18-dataeditr/dataeditr_save_csv.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'>Save as CSV File</p>


## Going Further <br><small>with `dplyr` and `ggplot2`</small>

`DataEditR` is great for making simple edits. But, eventually you're going to need to go further by using code to wrangle data and prepare visualizations. For this, I'll circle back to `dplyr` and `ggplot2`, and my [Ultimate R Cheat Sheet](https://www.business-science.io/r-cheatsheet.html).

### Fuel Economy by Vehicle Model

Say that you wanted to make a visualization that shows the differences in vehicle models and their fuel economy measured as miles per gallon (MPG). We can do this with `dplyr` and `ggplot2`.

<img src="/assets/2021-05-18-dataeditr/code_dplyr_ggplot2.jpg" style='max-width:100%;margin-bottom:5px;'>
<p class='text-center date'> 
  <a href='https://mailchi.mp/business-science/r-tips-newsletter' target ='_blank'>Get the code.</a>
</p>

## Visualization and Insights

The code makes a stunning `ggplot2` visualization that highlights the differences in fuel economy by vehicle model and class. We can see:

- __SUV's__ clearly have the lowest fuel economy although the Subaru Forester AWD seems to be an outlier. 
- __Toyota Corolla__ is leading the pack with Highway MPG in the mid-30s. 

![ggplot fuel economy](/assets/2021-05-18-dataeditr/ggplot_fuel_economy.jpg)



# In Summary

You've seen how `DataEditR` can be used for making simple edits inside of R. You've also seen that learning `dplyr` and `ggplot2` can generate insights through visualizations. 

What if you want to go further? Read on. 

# My Struggles with Learning Data Science

At the beginning of the article, I talked briefly about __my struggles learning R.__ It took me a long time. And I made a lot of mistakes as I fumbled through learning R.  I specifically had a tough time navigating the ever increasing landscape of tools and packages, trying to pick between R and Python, and getting lost along the way.

If you feel like this, you're not alone.

In fact, that's the driving reason that I created Business Science and Business Science University ([You can read about my personal journey here](https://www.business-science.io/business/2019/07/22/how-i-started-my-data-science-business.html)).

What I found out is that:

1. Data Science does not have to be difficult, it just has to be taught smartly

2. Anyone can learn data science fast provided they are motivated. 

# How I can help

If you are interested in learning R and the ecosystem of tools at a deeper level, then I have a streamlined program that will __get you past your struggles__ and improve your career in the process. 

It's called the [5-Course R-Track System](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series/). It's an integrated system containing 5 courses that work together on a learning path. Through 5+ projects, you learn everything you need to help your organization: from data science foundations, to advanced machine learning, to web applications and deployment. 

The result is that __you break through previous struggles__, learning from my experience & our community of 2000+ data scientists that are ready to help you succeed. 

Ready to take the next step? Then [let's get started.](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series/)



<!-- This is markdown code. It wont look formatted in your browser, 
    but will be fine when published. to the website -->

<br><br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}


