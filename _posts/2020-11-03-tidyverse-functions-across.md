---
layout: post
title: "10 Must-Know Tidyverse Functions: #2 - across()"
date:   2020-11-03 07:00:00
excerpt: "The across() function was released in dplyr 1.0.0. It's a new tidyverse function that extends group_by and summarize for multiple column and function summaries."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, R, R-Tips, Tidyverse]
image: 2020-11-03-tidyverse-across/tidyverse_across_cover.png
image_preview: 2020-11-03-tidyverse-across/tidyverse_across_preview.jpg
---



This article is part of a R-Tips Weekly, a [weekly video tutorial](https://mailchi.mp/business-science/r-tips-newsletter) that shows you step-by-step how to do common R coding tasks.

<br/>

The `across()` function was just released in _dplyr 1.0.0_. It's a new tidyverse function that extends `group_by` and `summarize` for multiple column and function summaries. 

Learn how to use `across()` to summarize data like a data wizard:

- [Get the Code](https://mailchi.mp/business-science/r-tips-newsletter)
- [YouTube Tutorial](https://youtu.be/6fEowYTlNT8)

<br>

<figure class="text-center">
  <a href="https://youtu.be/6fEowYTlNT8"><img src="/assets/2020-11-03-tidyverse-across/video_thumb.jpg" border="0" /></a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>



# Why Across?

Across doesn't do anything you can't with normal `group_by()` and `summarize()`. So why `across()`? Simply put, `across()` **allows you to scale up your summarization to multiple columns and multiple functions**. 

Across makes it easy to apply a mean and standard deviation to one or more columns. We just slect the columns and functions that we want to apply. 

![Tidyverse accross() function 1](/assets/2020-11-03-tidyverse-across/across_1.jpg)

![Tidyverse accross() function 2](/assets/2020-11-03-tidyverse-across/across_2.jpg)


<br>

**That was ridiculously easy.** Keep it up & you'll become a `tidyverse` rockstar. 

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

{% include top_rtips.html %}