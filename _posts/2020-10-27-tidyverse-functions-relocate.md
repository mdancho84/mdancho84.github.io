---
layout: post
title: "10 Must-Know Tidyverse Functions: #1 - relocate()"
date:   2020-10-27 07:00:00
excerpt: "relocate() is like arrange() for columns. It keeps all of the columns, but provides much more flexibility for reordering. Notice how all of the columns are returned. "
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, R, R-Tips, Tidyverse]
image: 2020-10-27-tidyverse-functions-relocate/relocate_cover.jpg
image_preview: 2020-10-27-tidyverse-functions-relocate/relocate_preview.jpg
---



This article is part of a R-Tips Weekly, a [weekly video tutorial](https://mailchi.mp/business-science/r-tips-newsletter) that shows you step-by-step how to do common R coding tasks.


Let's learn how `relocate`, **a new function that speeds up column arrangements**. 

- [Get the Code](https://mailchi.mp/business-science/r-tips-newsletter)
- [YouTube Tutorial](https://youtu.be/swm3smjU0RU)

<br>

<figure class="text-center">
  <a href="https://youtu.be/swm3smjU0RU"><img src="/assets/2020-10-27-tidyverse-functions-relocate/video_thumb.jpg" border="0" /></a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>

<br>

# Tidyverse relocate() Tutorial

Today we are covering a new R function available in dplyr 1.0.0

![Change Column Order](/assets/2020-10-27-tidyverse-functions-relocate/change_column_order.jpg)


# Select vs Relocate

First, let's compare the 2 column reordering functions: `select()` and `relocate()`

![select vs relocate 1](/assets/2020-10-27-tidyverse-functions-relocate/select_vs_relocate_1.jpg)

<br>

**Select is like `filter()` but for columns**. We just get the columns that we specify. 

![select vs relocate 2](/assets/2020-10-27-tidyverse-functions-relocate/select_vs_relocate_2.jpg)

<br>

**Relocate is like `arrange()` for columns**. It keeps all of the columns, but provides much more flexibility for reordering. Notice how all of the columns are returned. 


![select vs relocate 3](/assets/2020-10-27-tidyverse-functions-relocate/select_vs_relocate_3.jpg)

<br>

With `relocate()`, we can take advantage of special tidy-selectors including `last_col()` with an offset to provide very specific relocation patterns.  

![select vs relocate 4](/assets/2020-10-27-tidyverse-functions-relocate/select_vs_relocate_4.jpg)

<br>

**Congrats - You've just zapped that data.**

![zapped](/assets/2020-10-27-tidyverse-functions-relocate/zapped.gif)




<br>

### You Learned Something New! 
Great! But, you need to learn a TON to master the Blue Steel pose.

What happens after you learn R for Business from Matt 👇
 
![](/assets/2020-10-21-automate-pdf-with-r/learn-r.gif)


...And the look on your boss' face after seeing [your first Shiny App](https://www.business-science.io/business/2020/08/05/build-data-science-app-3-months.html). 👇

![](/assets/2020-10-21-automate-pdf-with-r/reaction.gif)


**I call this, "career acceleration".**



<br>

### SETUP R-TIPS WEEKLY PROJECT

1. [Get the Code](https://mailchi.mp/business-science/r-tips-newsletter)

2. Check out the [R-Tips Setup Video](https://youtu.be/F7aYV0RPyD0).

Once you take these actions, you'll be set up to receive R-Tips with Code every week. =)

<br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}