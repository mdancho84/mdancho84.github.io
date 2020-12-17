---
layout: post
title: "How to Scrape Word Documents with R"
date:   2020-09-16 06:00:00
excerpt: "Your company has tons of them - Microsoft Word Documents! Scraping word documents is a powerful technique for extracting data. Let's learn how with R, officer, & tidyverse."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, R, R-Tips]
image: 2020-09-17-scrape-word-docs/scrape_word_docs_cover.jpeg
image_preview: 2020-09-17-scrape-word-docs/scrape_word_docs_cover_preview.jpg
---


This article is part of a R-Tips Weekly, a [weekly video tutorial](https://mailchi.mp/business-science/r-tips-newsletter) that shows you step-by-step how to do common R coding tasks.

Today we discuss an awesome skill for automating data collection from word documents:

- [Get the Code](https://mailchi.mp/business-science/r-tips-newsletter)
- [YouTube Tutorial](https://youtu.be/JXHVJCg10_c)

<figure class="text-center">
  <a href="https://www.youtube.com/embed/JXHVJCg10_c"><img src="/assets/2020-09-17-scrape-word-docs/video_thumb.jpg" border="0" /></a>
  <figcaption>(Click image to play video)</figcaption>
</figure>

<br>

Here's a common situation, you're company has **LOTS OF WORD FILES**.

They contain tables of information that look like this:
 
 ![Word Tables](/assets/2020-09-17-scrape-word-docs/scrape_word_doc_1.jpg)

<br>
Thinking like a programmer, you can extract this data using officer: 

![](/assets/2020-09-17-scrape-word-docs/scrape_word_doc_2.jpg)

<br>
With a little bit of data wrangling with the tidyverse, you've got your table extracted & formatted:

![](/assets/2020-09-17-scrape-word-docs/format_data_1.jpg)
![](/assets/2020-09-17-scrape-word-docs/format_data_2.jpg)

<br>
Then you use ggplot2 to make a sweet plot: 

![](/assets/2020-09-17-scrape-word-docs/plot_code.jpg)

<br>
Whoa - Look at 201! Getting a high "Activity Ratio" - Ratio of Lessons completed to Number of Students Enrolled: 

![](/assets/2020-09-17-scrape-word-docs/plot.jpg)

<br>
You've just automated extracting word tables in R. BOOM! 💥💥💥

![](/assets/2020-09-17-scrape-word-docs/boom.gif)


<br>

### SETUP R-TIPS WEEKLY PROJECT

1. Sign Up to Get the R-Tips Weekly (You'll get email notifications of NEW R-Tips as they are released): https://mailchi.mp/business-science/r-tips-newsletter

2. Set Up the GitHub Repo: https://github.com/business-science/free_r_tips

3. Check out the setup video (https://youtu.be/F7aYV0RPyD0). Or, Hit Pull in the Git Menu to get the R-Tips Code

Once you take these actions, you'll be set up to receive R-Tips with Code every week. =)

<br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}