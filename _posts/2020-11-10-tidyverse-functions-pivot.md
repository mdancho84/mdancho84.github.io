---
layout: post
title: "10 Must-Know Tidyverse Functions: #3 - Pivot Wider and Longer"
date:   2020-11-10 07:00:00
excerpt: "Pivoting wider is essential for making summary tables that go into reports and help humans understand key information."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, R, R-Tips, Tidyverse]
image: 2020-11-10-tidyverse-pivot/tidyverse_pivot_cover.png
image_preview: 2020-11-10-tidyverse-pivot/tidyverse_pivot_preview.jpg
---



This article is part of a R-Tips Weekly, a [weekly video tutorial](https://mailchi.mp/business-science/r-tips-newsletter) that shows you step-by-step how to do common R coding tasks.

<br/>

Learn how to use `pivot_wider()` and `pivot_longer()` to format data like a data wizard:

- Get the Code: [GitHub Link](https://github.com/business-science/free_r_tips)
- Video Tutorial: [YouTube Tutorial](https://youtu.be/YWByrQIx-uQ)

<br>

<figure class="text-center">
  <a href="https://youtu.be/YWByrQIx-uQ"><img src="/assets/2020-11-10-tidyverse-pivot/video_thumb.jpg" border="0" /></a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>


# Why Pivot Wider?

Pivoting wider is essential for **making summary tables** that go into reports &amp; help humans (like you and me) understand key information. 

![](/assets/2020-11-10-tidyverse-pivot/pivot_wider_intro.jpg)

Let's say we have some automobile manufacturer data that we want to format into a table that people can read. 

We can **summarize and pivot** the data by manufacturer and class to understand the number of vehicle classes that each manufacturer produces.

The result is a table that I can glean for insights. 


![](/assets/2020-11-10-tidyverse-pivot/pivot_wider_1.jpg)

![](/assets/2020-11-10-tidyverse-pivot/pivot_wider_2.jpg)




# Why Pivot Longer?

Pivot longer lengthens data, increasing the number of rows and decreasing the number of columns.

![](/assets/2020-11-10-tidyverse-pivot/pivot_longer_1.jpg)

We can convert from wide to long with Pivot Longer, which gets it into the correct format to visualize with GGPLOT HEATMAP. 💥💥💥

![](/assets/2020-11-10-tidyverse-pivot/pivot_longer_2.jpg)

![](/assets/2020-11-10-tidyverse-pivot/pivot_longer_3.jpg)



<br>

**That was ridiculously easy.** Keep it up &amp; you'll become a `tidyverse` rockstar. 

![rockstar](/assets/2020-11-03-tidyverse-across/rockstar.gif)




<br>

### You Learned Something New! 

Great! But, you need to learn a lot to become an R programming wizard.

What happens after you learn R for Business from Matt 👇
 
![Tidyverse wizard](/assets/2020-11-03-tidyverse-across/magic.gif)


...And the look on your boss' face after seeing [your first Shiny App](https://www.business-science.io/business/2020/08/05/build-data-science-app-3-months.html). 👇

![Amazed](/assets/2020-11-03-tidyverse-across/amazed.gif)


**This is career acceleration.**



<br>

### SETUP R-TIPS WEEKLY PROJECT

1. Sign Up to Get the R-Tips Weekly (You'll get email notifications of NEW R-Tips as they are released): https://mailchi.mp/business-science/r-tips-newsletter

2. Set Up the GitHub Repo: https://github.com/business-science/free_r_tips

3. Check out the setup video (https://youtu.be/F7aYV0RPyD0). Or, Hit Pull in the Git Menu to get the R-Tips Code

Once you take these actions, you'll be set up to receive R-Tips with Code every week. =)

<br>

{% include cta_rtrack.html %}