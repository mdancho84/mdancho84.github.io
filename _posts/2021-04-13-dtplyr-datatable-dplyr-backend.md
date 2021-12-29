---
layout: post
title: "Not data.table vs dplyr... data.table + dplyr!"
date:   2021-04-13 06:30:00
excerpt: "Make insanely fast grouped summaries by leveraging data.table with dtplyr. Then quickly visualize your summaries with ggplot2."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, dtplyr, dplyr, tidyverse, datatable]
image: "/assets/2021-04-13-dtplyr-datatable-dplyr-backend/cover_image.JPG"
image_preview: "/assets/2021-04-13-dtplyr-datatable-dplyr-backend/cover_image.JPG"
---

This article is part of R-Tips Weekly, a <a href="https://mailchi.mp/business-science/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<br/>

<p>Here are the links to get set up. 👇</p>

<ul>
    <li><a href="https://mailchi.mp/business-science/r-tips-newsletter">Get the Code</a></li>
    <li><a href="https://youtu.be/r0ricexnF6A">YouTube Tutorial</a></li> 
</ul>

<br/>

<figure class="text-center">
    <a href="https://youtu.be/r0ricexnF6A">
    <img src="/assets/2021-04-13-dtplyr-datatable-dplyr-backend/video.png" border="0" /></a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>

# The data.table backend to dplyr

__There's a new R package in town.__ It's called `dtplyr`. It's the `data.table` backend to `dplyr`. And, what it get's you is truly amazing:

<ul>
    <li>Enjoy the 3X to 5X <code>data.table</code> speedup with grouped summarizations</li>
    <li><strong>All from the comfort of </strong><code>dplyr</code></li>
</ul>

<img src="/assets/2021-04-13-dtplyr-datatable-dplyr-backend/grouped_summary.jpg" max-width="100%">

<p><strong>Make insanely fast grouped summaries by
leveraging data.table with dtplyr then quickly visualize your summaries with ggplot2.</strong></p>

<h1>Before we get started, get the Cheat Sheet</h1>

<p>The most powerful tool in my arsenal is NOT my knowledge of the key R packages, but it's <strong>knowing where to find R packages and documentation.</strong></p>

<p>The <a href="https://www.business-science.io/r-cheatsheet.html">Ultimate R Cheat Sheet </a> consolidates the documentation on every package I use frequently (including dplyr, data.table, and dtplyr). </p>

<a href="https://www.business-science.io/r-cheatsheet.html"> <img src="/assets/2021-04-13-dtplyr-datatable-dplyr-backend/workflow.jpg" style="max-width: 100%;"> </a>

<p>If you tab through to page 3, you'll see a section called <a href="https://www.business-science.io/r-cheatsheet.html">"Speed and Scale"</a>. You can quickly see options to help including data.table, dtplyr, furrr, sparkly, and disk.frame. Enjoy.</p>

<img src="/assets/2021-04-13-dtplyr-datatable-dplyr-backend/data_table_dtplyr.jpg" max-width="100%">

<h1>Get started with dtplyr</h1>

<p>The first thing you'll want to do is <strong>set up a Lazy Data Table</strong> usng the <code>lazy_dt() </code>function. </p>

<img src="/assets/2021-04-13-dtplyr-datatable-dplyr-backend/code.jpg" max-width="100%">

<p><strong>So what happened?</strong> We now have a pointer to a <code>data.table</code>. This is a special connection that we can use to write <code>dplyr</code> code that gets converted to <code>data.table</code> code.</p>

<img src="/assets/2021-04-13-dtplyr-datatable-dplyr-backend/lazy_data_table.jpg" max-width="100%">

<h1>Translating dplyr to data.table</h1>

<p>This idea of a data.table backend to dplyr is insanely powerful. Here's an example of a dplyr grouped-summarization that gets translated to data.table for a speedup. </p>

<ul>
    <li>Start with lazy datatable connection object</li>
    <li><strong>Group by </strong>the manufacturer and cylinder columns</li>
    <li><strong>Summarize</strong> with the new <code>dplyr::across() </code>function</li>
    <li><strong>Ungroup</strong> the lazy data.table</li>
</ul>

<img src="/assets/2021-04-13-dtplyr-datatable-dplyr-backend/dplyer_code.jpg" max-width="100%">

<p>The dtplyr backend does the heavy-lifting, converting your dplyr code into data.table code. </p>

<img src="/assets/2021-04-13-dtplyr-datatable-dplyr-backend/data_table_translation.jpg" max-width="100%">

<h1>When your done wrangling...<br>
<small>Just collect and visualize</small></h1>

<p>Use the <code> collect()</code> function or <code>as_tibble()</code> function to apply the data.table translation to your lazy data table and extract the results. </p>

<img src="/assets/2021-04-13-dtplyr-datatable-dplyr-backend/collect_visualize.jpg" max-width="100%">

<p>The ggplot2 code produces this visualization. We can easily see:</p>

<ul>
    <li>Honda has the highest City Mileage in small engine cars (24.4 MPG)</li>
    <li>Audi has the highest City Mileage in large engine cars (16 MPG)</li>
</ul>

<img src="/assets/2021-04-13-dtplyr-datatable-dplyr-backend/grouped_summary2.jpg" max-width="100%">

<h1>Learning Data Wrangling with Dplyr</h1>

<p>It should be obvious now that <strong>learning dplyr is insanely powerful</strong>. Not only is it beginner-friendly, it unlocks data.table, the fastest in-memory data wrangling tool. Here are a few tips. </p>

<h2>Pro Tip 1 - Use the Cheat Sheet </h2>

<p>Dplyr is an 80/20 tool shown on the first page of my <a href="https://www.business-science.io/r-cheatsheet.html"> Ultimate R Cheat Sheet</a>. </p>

<p><strong>Click the "CS" next to dplyr to get the Data Wrangling with Dplyr Cheat Sheet. Woohoo!</strong></p>

<a href="https://www.business-science.io/r-cheatsheet.html"> <img src="/assets/2021-04-13-dtplyr-datatable-dplyr-backend/workflow2.jpg" style="max-width: 100%;"></a>

<p><strong>Clicking the "CS" </strong>opens the Data Transformation with Dplyr Cheat Sheet. Now you're ready to begin learning Dplyr. </p>

<img src="/assets/2021-04-13-dtplyr-datatable-dplyr-backend/cheat_sheet.jpg" max-width="100%">

<h2>PRO TIP 2 - Learn Dplyr in my Business Analysis with R Course</h2>

<p>It might be difficult to learn Dplyr on your own. I have a course that walks you through the entire process from analysis to reporting.</p>

<p>The <a href="https://university.business-science.io/p/ds4b-101-r-business-analysis-r"> R for Business Analysis 101 Course </a> is the first course in my <a href="https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series/"> R-Track program </a>. You'll do a ton of data transformations while you make a two reports:</p>

<ol>
    <li>Customer Segmentation Report</li>
    <li>Product Pricing Estimation and Gap Analysis</li>
</ol>

<p>Here's the <strong>Customer Segmentation Report</strong>.</p>

<img src="/assets/2021-04-13-dtplyr-datatable-dplyr-backend/segmentation_report.jpg" max-width="100%">

<h1>In Summary</h1>

<p>You just sliced and diced data with dtplyr - the data.table backend to dplyr. </p>

<p>You should be proud.</p>

<p>This article is part of <strong>R-Tips Weekly</strong>, a weekly video tutorial that shows you step-by-step how to do common R coding tasks. <a href="https://mailchi.mp/business-science/r-tips-newsletter">Join today.</a></p> 


<!-- 3. End your code -->




<!-- This is markdown code. It wont look formatted in your browser, 
    but will be fine when published. to the website -->

<br><br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}

