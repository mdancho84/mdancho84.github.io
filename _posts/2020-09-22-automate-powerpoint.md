---
layout: post
title: "How to Automate PowerPoint Slidedecks with R"
date:   2020-09-22 06:00:00
excerpt: "Here's a common situation, you have to make a Monday Morning Slide Deck. It's the same deck each week, just date ranges for your data change. Here's how to automate this process with R!"
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, R, R-Tips]
image: 2020-09-22-automate-powerpoint/automate-powerpoint-cover.jpeg
image_preview: 2020-09-22-automate-powerpoint/automate-powerpoint-preview.jpeg
---


This article is part of a R-Tips Weekly, a [weekly video tutorial](https://mailchi.mp/business-science/r-tips-newsletter) that shows you step-by-step how to do common R coding tasks.


Your boss lives on PowerPoint decks. Do you need to create a Slide Deck every week? 

Let's learn how to automate PowerPoint with R, using `officer` and `tidyverse`. 

- Get the Code: [GitHub Link](https://github.com/business-science/free_r_tips)
- Video Tutorial: [YouTube Tutorial](https://youtu.be/JJ5Ltw4PDn4)

<figure class="text-center">
  <a href="https://youtu.be/JJ5Ltw4PDn4"><img src="/assets/2020-09-22-automate-powerpoint/video_thumb.jpg" border="0" /></a>
  <figcaption>(Click image to play video)</figcaption>
</figure>

<br>

Here's a common situation, you have to make a **Monday Morning Slide Deck**. It's the same deck each week, just date ranges for your data change. Here's how to automate this process with R!

First, here's what you need to make - **A weekly Stock Report**. 


![Weekly Stock Report](/assets/2020-09-22-automate-powerpoint/weekly-stock-report.jpg)

<br>

Thinking like a programmer, you can **collect your stock data using date ranges**. 

![Stock Data Using Date Ranges](/assets/2020-09-22-automate-powerpoint/stock-data-using-date-ranges.jpg)

With a little bit of data wrangling with the `tidyverse`, you've got your table extracted & formatted! 

![Tidyverse Wrangling](/assets/2020-09-22-automate-powerpoint/tidyverse-wrangling-1.jpg)

![Tidyverse Wrangling](/assets/2020-09-22-automate-powerpoint/tidyverse-wrangling-2.jpg)

<br>

Then you use `timetk` to make a sweet plot. 

![Timetk package](/assets/2020-09-22-automate-powerpoint/timetk-1.jpg)

<br>

![Plotting stock data](/assets/2020-09-22-automate-powerpoint/plot.jpg)

<br>

Then you use `officer` to add the table and plot to powerpoint. 

![Officer R package](/assets/2020-09-22-automate-powerpoint/officer-powerpoint.jpg)



You've just **automated your Monday Morning PowerPoint in R**. BOOM! 💥💥💥

![Boom](/assets/2020-09-22-automate-powerpoint/boom.gif)


<br>

### SETUP R-TIPS WEEKLY PROJECT

1. Sign Up to Get the R-Tips Weekly (You'll get email notifications of NEW R-Tips as they are released): https://mailchi.mp/business-science/r-tips-newsletter

2. Set Up the GitHub Repo: https://github.com/business-science/free_r_tips

3. Check out the setup video (https://youtu.be/F7aYV0RPyD0). Or, Hit Pull in the Git Menu to get the R-Tips Code

Once you take these actions, you'll be set up to receive R-Tips with Code every week. =)

<br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}