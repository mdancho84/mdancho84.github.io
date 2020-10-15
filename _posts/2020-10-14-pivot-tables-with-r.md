---
layout: post
title: "How to Make Publication-Quality Excel Pivot Tables with R"
date:   2020-10-14 08:00:00
excerpt: "The biggest thing I missed when I transititioned from Excel to R was PIVOT TABLES! Seriously, Pivot Tables are so useful. You can summarize and reshape (aka Pivot) data so easily with them in Excel. "
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, R, R-Tips, Excel]
image: 2020-10-14-pivot-tables-with-r/pivot-tables-r-cover.png
image_preview: 2020-10-14-pivot-tables-with-r/pivot-tables-r-preview.jpg
---



This article is part of a R-Tips Weekly, a [weekly video tutorial](https://mailchi.mp/business-science/r-tips-newsletter) that shows you step-by-step how to do common R coding tasks.


Let's learn how to **make Excel pivot tables with R**. 

- Get the Code: [GitHub Link](https://github.com/business-science/free_r_tips)
- Video Tutorial: [YouTube Tutorial](https://youtu.be/K5qR-EREf_g)

<br>

<figure class="text-center">
  <a href="https://youtu.be/K5qR-EREf_g"><img src="/assets/2020-10-14-pivot-tables-with-r/video-thumb.jpg" border="0" /></a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>

<br>

# Excel Pivot Tables with R Tutorial

The biggest thing I missed when I transititioned from Excel to R was...
PIVOT TABLES! 

Seriously - Pivot Tables are so useful. You can summarize and reshape (aka Pivot) data so easily with them in Excel. Why not in R???

Here's the Publication-Quality Pivot Table that we are going to make today. 👇

![Pivot Table](/assets/2020-10-14-pivot-tables-with-r/publication-quality-pivot-table.jpg)


<br>

First, collect your data using `tidyquant`, an awesome package I created for importing & working with **Financial Data**. 

![Get Data](/assets/2020-10-14-pivot-tables-with-r/get-data.jpg)

![Stock Table](/assets/2020-10-14-pivot-tables-with-r/stock-table.jpg)


<br>

Next, make a `pivot_table()` from the stock data. The resulting data summarized using a **percentage change from 1st to last** in each pivot cell. 

![Percent Change by Year](/assets/2020-10-14-pivot-tables-with-r/percent-change-by-year.jpg)

![Pivot Table](/assets/2020-10-14-pivot-tables-with-r/pivot-table.jpg)



<br>

And with the GT Package, we can make the pivoted data into a **PUBLICATION-QUALITY Pivot Table with conditional formatting** applied to highlight years with positive stock returns. _(Table code partially shown. Get the GitHub code to reproduce the table.)_

![Pivot Charts](/assets/2020-10-14-pivot-tables-with-r/pivot-charts.jpg)


<br>

And, now you have a publication-quality stock performance report! 👇

![Stock Returns](/assets/2020-10-14-pivot-tables-with-r/stock-returns.jpg)



<br>

You've just made a publication-quality Pivot Table in R. 

Boom! 💥💥💥

![](/assets/2020-10-14-pivot-tables-with-r/boom.gif)



# Learn something?  Awesome!

But you need to learn a TON to become an R Samurai Master.

![](/assets/2020-10-14-pivot-tables-with-r/wizard.gif)



<br>

### SETUP R-TIPS WEEKLY PROJECT

1. Sign Up to Get the R-Tips Weekly (You'll get email notifications of NEW R-Tips as they are released): https://mailchi.mp/business-science/r-tips-newsletter

2. Set Up the GitHub Repo: https://github.com/business-science/free_r_tips

3. Check out the setup video (https://youtu.be/F7aYV0RPyD0). Or, Hit Pull in the Git Menu to get the R-Tips Code

Once you take these actions, you'll be set up to receive R-Tips with Code every week. =)

<br>

{% include cta_rtrack.html %}