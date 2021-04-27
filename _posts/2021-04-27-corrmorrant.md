---
layout: post
title: "ggplot2 Extension: corrmorrant for Flexible Correlation Plots in R"
date:   2021-04-27 06:30:00
excerpt: "Productivity is essential in data science. Businesses need value quickly so they can make decisions. Corrmorrant gets this."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R]
image: "/2021-04-27-corrmorrant/cover_image.JPG"
image_preview: "/2021-04-27-corrmorrant/cover_image.JPG"
---

This article is part of R-Tips Weekly, a <a href="https://mailchi.mp/business-science/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<br/>

<p>Here are the links to get set up. 👇</p>

<ul>
    <li><a href="https://mailchi.mp/business-science/r-tips-newsletter">Get the Code</a></li>
    <li><a href="https://youtu.be/pKPhjxyo9hM">YouTube Tutorial</a></li> 
</ul>

<br/>

<h1>Correlation Matrix Plots with corrmorrant<br>
<small>A ggplot2 correlation plot extension</small></h1>

<figure class="text-center">
    <a href="https://youtu.be/pKPhjxyo9hM">
    <img src="/assets/2021-04-27-corrmorrant/video_image.png" border="0" /></a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>



<h1>corrmorrant<br>
<small>This R package makes Correlation Plots in no-time</small></h1>

<p>The <code>corrmorrant</code> ggplot2 extension makes it easy to make Correlation Plots in R, a critical skill for exploratory data analysis (EDA). We'll use <strong>corrmorrant</strong> to:</p>

<ol>
    <li><strong>Make quick correlation plots in 1 line of code</strong></li>
    <li><strong>Extend ggplot with the grammar for correlation plotting</strong></li>
</ol>

<img src="/assets/2021-04-27-corrmorrant/correlation_plots.jpg" max-width="100%">

<p>Make Correlation Plots in 1 Line of Code</p>

<h1>Before we get started, get the Cheat Sheet</h1>

<p><code>Corrmorrant</code> is great for making correlation plots fast. But, you'll still need to learn how to customize the plots and produce high-quality visualizations. For those topics, I'll use the <a href="https://www.business-science.io/r-cheatsheet.html"> Ultimate R Cheat Sheet</a> to refer to <code>ggplot2</code> code in my workflow.</p>

<p><strong>Quick example - Clicking the "CS" next to "ggplot2"</strong> opens the Data Transformation with Dplyr Cheat Sheet.</p>

<a href="https://www.business-science.io/r-cheatsheet.html"> <img src="/assets/2021-04-27-corrmorrant/workflow.jpg" max-width="100%">

<p>Now you're ready to quickly reference <code>ggplot2</code> functions.  Ok, onto the tutorial. </p>

<a href="https://www.business-science.io/r-cheatsheet.html"> <img src="/assets/2021-04-27-corrmorrant/cheatsheet.jpg" max-width="100%"></a>

<h1>Make correlation plots in 1 line of code</h1>

<p>Productivity is essential in data science. Businesses need value quickly so they can make decisions. So, naturally I'm a big fan of the 1-line of code to do something great. Corrmorrant gets this.</p>

<p>Using the <code>corrmorrant::corrmorrant()</code> function, we generate a correlation plot in 1 line of code. </p>

<img src="/assets/2021-04-27-corrmorrant/code.jpg" max-width="100%">

<p>The correlation plot includes:</p>

<ul>
    <li><strong>Lower Triangle</strong>: Scatter plot, <code>ggplot2::geom_scatter()</code></li>
    <li><strong>Upper Triangle</strong>: Correlation strength as text labels, <code>ggplot2::geom_text()</code></li>
    <li><strong>Diagonal</strong>: Density plot, <code>ggplot2::geom_density()</code></li>
</ul>

<img src="/assets/2021-04-27-corrmorrant/correlation_plot_2.jpg" max-width="100%">

<h1>Correlation Plot Customization</h1>

<p>It gets better - corrmorrant has a ggplot2 API that provides a grammar for correlation graphics. </p>

<ul>
    <li><code>ggcorrm()</code>- Creates a correlation ggplot.</li>
    <li><code>lotri()</code>- Applies a ggplot2 geometry to the lower triangle.</li>
    <li><code>utri()</code>- Applies a ggplot2 geometry to the lower triangle.</li>
    <li>And there are special <strong>Ggplot Helpers</strong> like <code>utri_heatmap(), dia_historgram()</code>, and <code>scale_fill_corr()</code> that apply quick geoms to parts of the plot.</li>
</ul>

<figure class="text-center">
    <img src="/assets/2021-04-27-corrmorrant/code2.jpg" max-width="100%">
  <figcaption><a href="https://github.com/business-science/free_r_tips"> Get the Code</a></figcaption>
</figure>

<br>

<p>The correlation plot has now been customized with a smoother in the lower triangle, histogram on the diagonal, and heatmap on the upper triangle. This is why it pays dividends to <strong>learn ggplot2</strong>. Using the <a href="https://www.business-science.io/r-cheatsheet.html"> ultimate R cheat sheet for documentation on ggplot2</a> helps bigtime. </p>


<figure class="text-center">
    <img src="/assets/2021-04-27-corrmorrant/correlation_plot_3.jpg" max-width="100%">
  <figcaption>Code available in our <a href="https://github.com/business-science/free_r_tips"> Free R-Tips Github Repository</a></figcaption>
</figure>

<h1>Challenge: Grouped Correlations and Dark Theme<br>
<small>This is really cool.</small></h1>

<p>Here's a test if you've been following along and want to test your ggplot2 skills. Make this plot that applies "cyl" column as groups to the geoms. Note that you'll need to do a trick to get the grouped correlations in the upper triangle. Solution is available in our <a href="https://github.com/business-science/free_r_tips"> Free R-Tips Github Repository</a>.  </p>

<figure class="text-center">
    <img src="/assets/2021-04-27-corrmorrant/correlation_plot_4.jpg" max-width="100%">
  <figcaption>Code available in our <a href="https://github.com/business-science/free_r_tips"> Free R-Tips Github Repository</a></figcaption>
</figure>

<h1>In Summary</h1>

<p>You just quickly made custom correlation plots using the ggplot2 extension, <strong>corrmorrant</strong>. This is an amazing productivity boost!! </p>

<p>You should be proud.</p>

<p>This article is part of <strong>R-Tips Weekly</strong>, a weekly video tutorial that shows you step-by-step how to do common R coding tasks. <a href="https://mailchi.mp/business-science/r-tips-newsletter">Join today.</a></p> 

<!-- This is markdown code. It wont look formatted in your browser, 
    but will be fine when published. to the website -->

<br><br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}


