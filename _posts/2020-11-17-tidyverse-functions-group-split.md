---
layout: post
title: "Detect Relationships With Linear Regression (10 Must-Know Tidyverse Functions #4)"
date:   2020-11-17 07:00:00
excerpt: "Group Split and Map are SECRET TOOLS in my data science arsenal.  Combining them will help us scale up to 15 linear regression summaries to assess relationship strength and combine in a GT table."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, R, R-Tips, Tidyverse]
image: 2020-11-17-tidyverse-functions-group-split/group_split_cover.png
image_preview: 2020-11-17-tidyverse-functions-group-split/group_split_preview.jpg
---



This article is part of a R-Tips Weekly, a [weekly video tutorial](https://mailchi.mp/business-science/r-tips-newsletter) that shows you step-by-step how to do common R coding tasks.

<br/>

Group Split and Map are SECRET TOOLS in my data science arsenal.  Combining them will help us scale up to 15 linear regression summaries to assess relationship strength & combine in a GT table. Here are the links to get set up 👇

- [Get the Code](https://mailchi.mp/business-science/r-tips-newsletter)
- [YouTube Tutorial](https://youtu.be/wj_AAs4VC8M)

<br>

<figure class="text-center">
  <a href="https://youtu.be/wj_AAs4VC8M"><img src="/assets/2020-11-17-tidyverse-functions-group-split/video_thumb.jpg" border="0" /></a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>



<h1>My secret weapon <br><small>Group split is SERIOUSLY POWERFUL.</small></h1>

In fact, I use `group_split()` almost every day.  I use to convert data frames to iterable lists:

- Shiny Apps (making iterable cards)
- Modeling (Regression by Sub-Groups)
- Doing complex group-wise calculations - things you can't do with group_by()

Let's check `group_split()` out. With 3 lines of code, we turn an ordinary data frame into an iterable. 

<br>

<center>Before <br>Boring old data frame. </center>

![](/assets/2020-11-17-tidyverse-functions-group-split/before.jpg)


<center>After <br>Now we have a list of data frames (i.e. an iterable)</center>

![](/assets/2020-11-17-tidyverse-functions-group-split/after1.jpg)

![](/assets/2020-11-17-tidyverse-functions-group-split/after2.jpg)


<br>

<hr>

# Modeling with Broom

**So what can we do with this "iterable"?**

How about detect relationships with a Linear Regression Model using Broom's Glance Function!

![](/assets/2020-11-17-tidyverse-functions-group-split/broom1.jpg)

![](/assets/2020-11-17-tidyverse-functions-group-split/broom2.jpg)

And with a little extra work (thanks to _Thomas Mock_ @rstudio & the `gt` R package), we can create this INSANE TABLE! 💥💥💥

![](/assets/2020-11-17-tidyverse-functions-group-split/broom3.jpg)

![](/assets/2020-11-17-tidyverse-functions-group-split/broom4.jpg)



<br>

<center>That was ridiculously easy.</center>

![rockstar](/assets/2020-11-17-tidyverse-functions-group-split/guitar.gif)




<br>

### But you're NOT a Wizard yet! 

Here's how to master R programming & save the world Harry Potter Style.  👇
 
![Tidyverse wizard](/assets/2020-11-17-tidyverse-functions-group-split/harry.gif)


...And the look on your boss' face after seeing [your first Shiny App](https://www.business-science.io/business/2020/08/05/build-data-science-app-3-months.html). 👇

![Amazed](/assets/2020-11-17-tidyverse-functions-group-split/amazed.gif)


**This is career acceleration.**



<br>

### SETUP R-TIPS WEEKLY PROJECT

1. [Get the Code](https://mailchi.mp/business-science/r-tips-newsletter)

2. Check out the [R-Tips Setup Video](https://youtu.be/F7aYV0RPyD0).

Once you take these actions, you'll be set up to receive R-Tips with Code every week. =)

<br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}