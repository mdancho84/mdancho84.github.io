---
layout: post
title: "How to Automate PDF Reporting with R"
date:   2020-10-21 07:00:00
excerpt: "Why create PDF's manually when you can automate PDFs with R? That's exactly what I show you how to do in this video showcasing parameterized Rmarkdown."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, R, R-Tips, PDF, Rmarkdown]
image: 2020-10-21-automate-pdf-with-r/automate-pdf-cover.png
image_preview: 2020-10-21-automate-pdf-with-r/automate-pdf-preview.png
---



This article is part of a R-Tips Weekly, a [weekly video tutorial](https://mailchi.mp/business-science/r-tips-newsletter) that shows you step-by-step how to do common R coding tasks.


Let's learn how to **automate PDFs with R**. 

- Get the Code: [GitHub Link](https://github.com/business-science/free_r_tips)
- Video Tutorial: [YouTube Tutorial](https://www.youtube.com/watch?v=N8qaLAundeI)

<br>

<figure class="text-center">
  <a href="https://www.youtube.com/watch?v=N8qaLAundeI"><img src="/assets/2020-10-21-automate-pdf-with-r/video-thumb.jpg" border="0" /></a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>

<br>

# Automate PDF Reporting with R Tutorial

Why create PDF's manually when you can automate PDFs with R?

That's exactly what I show you how to do in this tutorial. Here is the final report you will automate today.

![PDF Report](/assets/2020-10-21-automate-pdf-with-r/pdf-report.jpg)


<br>

First, make a **"Parameterized" Rmarkdown** file by modifying the YAML with a `params` section.

![Rmarkdown Parameters](/assets/2020-10-21-automate-pdf-with-r/rmarkdown-parameters.jpg)


<br>

Next, **insert the parameters** in your Rmarkdown Template file so each of the key inputs depend on the parameters. 

![Insert Rmarkdown Parameters](/assets/2020-10-21-automate-pdf-with-r/insert-parameters.jpg)


<br>

Finally, in a separate R Script, use `rmarkdown::render()` to **auto-magically create PDF reports** by selecting the Rmd Template file and changing the parameters using the params list. 

![Create PDF Report](/assets/2020-10-21-automate-pdf-with-r/auto-create-report.jpg)


<br>

Like that, you've automated your PDF Reports! 👇

![PDF Report](/assets/2020-10-21-automate-pdf-with-r/pdf-report.jpg)


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

1. Sign Up to Get the R-Tips Weekly (You'll get email notifications of NEW R-Tips as they are released): https://mailchi.mp/business-science/r-tips-newsletter

2. Set Up the GitHub Repo: https://github.com/business-science/free_r_tips

3. Check out the setup video (https://youtu.be/F7aYV0RPyD0). Or, Hit Pull in the Git Menu to get the R-Tips Code

Once you take these actions, you'll be set up to receive R-Tips with Code every week. =)

<br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}