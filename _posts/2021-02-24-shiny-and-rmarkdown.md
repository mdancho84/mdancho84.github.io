---
layout: post
title: "Add Shiny to Rmarkdown"
date:   2021-02-24 08:00:00
excerpt: "An R web framework with a HUGE ECOSYSTEM of interactive widgets, themes, and customizable user interfaces called the Shinyverse. We use Shiny to make our R Markdown Report interactive."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, Shiny, Rmarkdown, Reports]
image: 2021-02-24-shiny-and-rmarkdown/cover.jpg
image_preview: 2021-02-24-shiny-and-rmarkdown/preview.jpg
---

This article is part of a R-Tips Weekly, a <a href="https://mailchi.mp/business-science/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<br/>


Here are the links to get set up. 👇

<ul>
    <li><a href="https://mailchi.mp/business-science/r-tips-newsletter">Get the Code</a></li>
    <li><a href="https://youtu.be/qGyHZG6ZqwA">YouTube Tutorial</a></li>
</ul>

<br/>

<figure class="text-center">
    <a href="https://youtu.be/qGyHZG6ZqwA"><img src="/assets/2021-02-24-shiny-and-rmarkdown/video.png" border="0" /></a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>


<h1>Powering Rmarkdown Reports with Shiny</h1>

In this weekly <a href="https://mailchi.mp/business-science/r-tips-newsletter"> R-Tip</a>, we're making a "<strong>Customer Churn Report</strong>" that uses both `Rmarkdown` (R Report Generator) and `Shiny` (Interactive Web Framework) to SPICE UP our business reports. 

<img src="/assets/2021-02-24-shiny-and-rmarkdown/shiny_markdown.gif" style='width:100%;'>

<h3>Rmarkdown</h3>

A great tool for business reporting. We can quickly convert our analysis to a business report by combining data, text, code, and visualizations. 

 <h3>Shiny</h3>

 An R web framework with a HUGE ECOSYSTEM of interactive widgets, themes, and customizable user interfaces called the "<strong>Shinyverse</strong>". We use Shiny to make our R Markdown Report interactive.

 <strong>PRO TIP:</strong> I've streamlined the "Shinyverse" ecosystem on Page 2 of my <a href="https://www.business-science.io/r-cheatsheet">Ultimate R Cheatsheet</a>.

<a href="https://www.business-science.io/r-cheatsheet"><img src="/assets/2021-02-24-shiny-and-rmarkdown/web_apps_shinyverse.jpg" style='width:100%;'></a>

As you follow along, you can use my <a href="https://www.business-science.io/r-cheatsheet">Ultimate R Cheatsheet</a>. It consolidates the most important R packages (ones I use every day) into 1 cheatsheet.

<h1>How Shiny in Rmarkdown Works<br><small>Combining Rmarkdown reports with Interactive Shiny Widgets</small></h1>

This is a <strong>shiny widget</strong> in an R-Markdown Report. Shiny uses a rendering engine (called shiny server) to power the widgets. This gives us advanced control over our analytics.

<img src="/assets/2021-02-24-shiny-and-rmarkdown/shiny_widget.gif" style='width:100%;'>


<h1>Adding Shiny to Rmarkdown<br><small>Make your reports buzz-worthy</small></h1>

<img src="/assets/2021-02-24-shiny-and-rmarkdown/shiny_markdown.gif" style='width:100%;'>

Shiny can be added to Rmarkdown's HTML report. We just simply need to add `runtime: shiny` to the Rmarkdown Header (YAML).

<img src="/assets/2021-02-24-shiny-and-rmarkdown/add_shiny.jpg" style='width:100%;'>

<a href="https://mailchi.mp/business-science/r-tips-newsletter"> Get the Full GitHubCode</a>

When we click "Run Document", <strong>a shiny server will run the document</strong> instead of a static HTML page is generated. This has a BIG ADVANTAGE - We can use Shiny in our Report. 


<h1>Using Shiny in Your Report<br><small>An interactive report that encourages engagement.</small></h1>

Using shiny requires a bit of reactive programming experience (I teach predictive shiny dashboards and expert shiny with AWS as part of my <a href="https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series/">5-Course R-Track Program</a>).

<img src="/assets/2021-02-24-shiny-and-rmarkdown/using_shiny.jpg" style='width:100%;'>
<br>

Here's a snapshot of the code that powers this section of the report. We can see it's a decorated version of ggplot code that <strong>connects the slider widget to the reactive plot.</strong> 

<img src="/assets/2021-02-24-shiny-and-rmarkdown/shiny_slider_widget.jpg" style='width:100%;'>

<a href="https://mailchi.mp/business-science/r-tips-newsletter"> Get the Full GitHub Code</a>


<br>

Wow, you're going to <strong>make an impression</strong> the next time you're tasked with presenting a report. 
<div class="text-center">
    <img src="/assets/2021-02-24-shiny-and-rmarkdown/impression_meme.gif" style='width:500px;'>
</div>

<h3>But if you really want to improve your data skills...</h3>
What happens after you learn R for Business from Matt
<div class="text-center">
    <img src="/assets/2021-02-24-shiny-and-rmarkdown/lazer_meme.gif" style='width:500px;'>
</div>

<br>
The look on your Boss' Face when they see your organization's gains with <a href="https://www.business-science.io/business/2020/08/05/build-data-science-app-3-months.html">production shiny apps.</a>
<div class="text-center">
    <img src="/assets/2021-02-24-shiny-and-rmarkdown/boss_meme.gif" style='width:500px;'>
</div>



<br><br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}
