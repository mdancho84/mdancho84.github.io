---
layout: post
title: "Make Awesome Statistical Plots in R"
date:   2021-02-09 06:00:00
excerpt: "I never thought I'd be able to make publication-ready statistical plots so easily. Seriously. Thanks to ggstatsplot."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, ggstatsplot, ggplot, visualization]
image: 2021-02-09-stat-plots-in-R/stats_plots_cover.jpg
image_preview: 2021-02-09-stat-plots-in-R/stats_plots_preview.jpg
---

This article is part of a R-Tips Weekly, a [weekly video tutorial](https://mailchi.mp/business-science/r-tips-newsletter) that shows you step-by-step how to do common R coding tasks.

<br/>


Here are the links to get set up. 👇

- [Get the Code](https://mailchi.mp/business-science/r-tips-newsletter)
- [YouTube Tutorial](https://youtu.be/8Em1bCFBMWg)


<figure class="text-center">
    <a href="https://youtu.be/8Em1bCFBMWg"><img src="/assets/2021-02-09-stat-plots-in-R/video_thumb.png" border="0" /></a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>

<br>



<h2>Making Statistical Plots Is Easy With ggstatsplot</h2>

I never thought I'd be able to make publication-ready statistical plots so easily. Seriously - thank you <a href="https://indrajeetpatil.github.io/ggstatsplot/index.html">ggstatsplot</a>.

We're going to kick the tires on 2 of the many awesome ggstatsplot functions:

<ul>
    <li><code>ggcorrmat()</code> - For making correlation matrix that exposes relationships between multiple numeric variables.</li>
    <li><code>ggbetweenstats()</code> - For comparing similarities / differences between groups.</li>
</ul>

As you follow along, you can use <a href="https://www.business-science.io/r-cheatsheet">my Ultimate R Cheatsheet</a>. It consolidates the most important R packages (ones I use every day) into 1 cheatsheet.

<br>
<div class="text-center"> <img src="/assets/2021-02-09-stat-plots-in-R/Plot_Example.jpg"> </div>
    


<h2>Plot 1: Correlation Matrix Plot<br>
<small>Make beautiful correlation plot that's great for reports</small></h2>

Correlation plots are must-know plots. <strong>Everyone understands correlations (even non-technical people)</strong>. Correlation plots great for explaining insights in simple terms:

<ul>
    <li><strong>Magnitude (between zero in one)</strong>: two features have a higher degree of relationship the closer the magnitude gets to one.</li>
    <li><strong>Sign (Positive/Negative)</strong>: A positive sign indicates a positive relationship (both go up). A negative sign indicates an inverse relationship (as one goes up, the other goes down).</li>
</ul>

<p>Here's how easy it is to make an AWESOME Correlation Plot with 1 line of code.</p>

<div class="text-center"> <img src="/assets/2021-02-09-stat-plots-in-R/Code.jpg"> </div>

<div class="text-center"> <img src="/assets/2021-02-09-stat-plots-in-R/Correlation_Plot.jpg"> </div>

<h2>Plot 2: Between Stats Plot<br>
<small>Between stats are used to compare categories to show differences between groups</small></h2>

Comparing groups helps tell the story by showing differences in means, distributions, and by highlighting outliers.  There's no faster way than to use <code>ggbetweenstats()</code>.
    
We need to do a little bit of data wrangling first to isolate the top 5 cities in the data. (<a href="https://www.business-science.io/r-cheatsheet">Check out my Ultimate R Cheatsheet for getting data wrangling down</a>).
        
Once we isolate the top 5 cities, we can make an awesome visualization (again in 1 line of code)!


<div class="text-center"> <img src="/assets/2021-02-09-stat-plots-in-R/Code_2.jpg"> </div>

<br>
The <code>ggbetweenstats()</code> function makes it super easy to compare groups and identify outliers.

<div class="text-center"> <img src="/assets/2021-02-09-stat-plots-in-R/Plot_Example_2.jpg"></div>



<br>

<h4>Give yourself a high-five. You just made 2 advanced plots in a few lines of code.</h4>
<img src="/assets/2021-02-09-stat-plots-in-R/High_5.gif">


<br>

<h4>But if you really want to improve your productivity...</h4>

<p class="text-center">
    Here's how to master R.  👇
    What happens after you learn R for Business. 
</p>

<img src="/assets/2021-02-09-stat-plots-in-R/run_master.gif">

<p class="text-center"><strong>This is career acceleration.</strong></p>



<br>

### SETUP R-TIPS WEEKLY PROJECT

1. [Get the Code](https://mailchi.mp/business-science/r-tips-newsletter)

2. Check out the [R-Tips Setup Video](https://youtu.be/F7aYV0RPyD0).

Once you take these actions, you'll be set up to receive R-Tips with Code every week. =)

<br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}
