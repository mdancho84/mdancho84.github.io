---
layout: post
title: "A Gentle Introduction to R Shiny"
date:   2021-03-16 09:00:00
excerpt: "What if you could turn your #datascience analysis into a web application? You can do exactly that with R Shiny. R Shiny is an amazing framework built to convert your data analysis into a web app - FAST! Create amazing applications your business can use in hours (not months!)."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, Shiny]
image: /assets/2021-03-16-Intro-R-Shiny/cover_image.jpg
image_preview: /assets/2021-03-16-Intro-R-Shiny/cover_preview.jpg
---




This article is part of a R-Tips Weekly, a <a href="https://mailchi.mp/business-science/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<br/>

What if you could turn your #datascience analysis into a web application? You can do EXACTLY that with `R Shiny`. 

R Shiny is an amazing framework built to convert your data analysis into a web app - FAST! Create amazing applications your business can use in hours (not months!).

<p>Here are the links to get set up. 👇</p>

<ul>
    <li><a href="https://mailchi.mp/business-science/r-tips-newsletter">Get the Code</a></li>
    <li><a href="https://youtu.be/jxsKUxkiaLI">YouTube Tutorial</a></li>
</ul>

<br/>

<figure class="text-center">
    <a href="https://youtu.be/jxsKUxkiaLI"><img src="/assets/2021-03-16-Intro-R-Shiny/Video.png" border="0" /></a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>


<h1>Shiny Explorer App</h1>

<p>In this R-Tip, you create an <strong>AWESOME Correlation Plot Heatmap that can be used for fast Exploratory Data Analysis (EDA)</strong>. This application uses:</p>

<ul>
    <li><strong>Shiny Inputs</strong> to change the connection to the dataset (3 Options Available: StackOverflow, Car Prices, Sacramento Housing).</li>
    <li><strong>DataExplorer</strong> to create a Correlation Heatmap & Plotly to make the heatmap interactive.</li>
    <li><strong>Shiny and BSLib</strong> to create awesome bootstrap 4 theme "Minty"</li>
</ul>

<img src="/assets/2021-03-16-Intro-R-Shiny/Heat_Map.gif" width="100%">

<p>The Shiny App with Correlation Heat Map</p>

<h1>Why use R Shiny?</h1>

<p>I get this question a ton: <strong>Why R Shiny vs Tableau or PowerBI or any other "dashboarding" tool?</strong></p>

<h3>R Shiny is much more than a dashboarding tool.</h3>

<p><strong>I love showing off this app.</strong> <a href="https://business-science.shinyapps.io/nostradamus/">Nostradamus</a> is an example of the high-end of what you can accomplish when you learn R Shiny and time series forecasting with Modeltime. 
    Nostradamus is an <strong>Auto-Forecasting App</strong> that makes 28 machine learning models on the fly and combines the best into an ensemble. The forecasting approach adjusts automatically. Internally the app uses:</p>

<ul>
    <li><code>Modeltime</code> for Time Series Forecasting and Ensembling.</li>
    <li><code>TimeTk</code> for Time Series Data Wrangling, Visualizations, and Feature Engineering.</li>
    <li><code>Shiny</code> for packaging the analysis in a User-Friendly Way</li>
</ul>

<a href="https://business-science.shinyapps.io/nostradamus/"><img src="/assets/2021-03-16-Intro-R-Shiny/auto_forecast.jpg" width="100%"></a>

<h2>Learning Shiny for Your Career</h2>

<p>The <a href="https://www.business-science.io/business/2020/03/09/shiny-vs-tableau.html">key differences between Shiny and Tableau</a> are important to understand as they relate to the concept of the 
    <a href="https://www.business-science.io/business/2019/12/09/data-science-technologies.html">Full-Stack Data Scientist</a> (a data scientist that can make and distribute web applications powered with data science). 
    The bottom line is that <strong>R Shiny allows businesses to truly scale decisions beyond a simple dashboard.</strong> </p>

<p>This is why <strong>I highly recommend learning R Shiny for your career.</strong> Businesses need apps that can forecast sales demand, predict customer churn, and distribute actionable insights real-time. Shiny does all of this.</p>

<p>But first thing first - <strong>Let's create your First Shiny App!</strong></p>

<h1>Creating Your First Shiny App</h1>

<p><strong>R Shiny can be intimidating.</strong> If this is your first time building an app, I strongly recommend watching the <a href="https://youtu.be/jxsKUxkiaLI">YouTube Video - Gentle Intro to R Shiny Apps</a> (11 min). It will help immensely. 

<h3>PRO TIP</h3>

<p>As you go through this tutorial, I've added the "Shinyverse" to <a href="https://www.business-science.io/r-cheatsheet">my Ultimate R Cheatsheet</a> (see page 2). The most important part is at the top, 
which includes links the the key R packages that make up an expanding ecosystem of shiny R packages. 👇</p>

 <a href="https://www.business-science.io/r-cheatsheet"><img src="/assets/2021-03-16-Intro-R-Shiny/shinyverse.jpg" width="100%"></a>

<h1>How does R Shiny work?</h1>

<p>At it's core, R Shiny is a web framework that combines a <strong>User Interface</strong> (controls app layout and appearance) with a <strong>Server</strong> (runs R, controls app functionality). </p>

<h1>The User Interface (UI)</h1>

<p>Think of the UI as the scaffolding and theming elements that position your app's output and make it look amazing!</p>

    <img src="/assets/2021-03-16-Intro-R-Shiny/user_interface.jpg" width="100%">

<h3>Shiny Inputs</h3>

<br>

<p>We can add shiny inputs to an app. These are the elements that your user interacts with. They tell your server (discussed next) when something is happening. </p>

    <img src="/assets/2021-03-16-Intro-R-Shiny/shiny_input.jpg" width="100%">

<p>When we run the app, the <code>shiny selectInput()</code> generates this dropdown in our UI. </p>

    <img src="/assets/2021-03-16-Intro-R-Shiny/stack_overflow.jpg" width="100%">

<h1>The Server (R Code is Run Here)</h1>

<p>Think of the Server as where your R Code runs when the user interacts with your app. </p>

    <img src="/assets/2021-03-16-Intro-R-Shiny/server.jpg" width="100%">

<h3>Reactivity & Observers</h3>

<p>Inside the server, <strong>R Shiny uses a concept called "Reactivity"</strong>. I teach this concept in-depth using many examples in my 
    <a href="https://university.business-science.io/p/ds4b-102-r-shiny-web-application-business-level-1">Shiny Dashboard Course</a> 
    and <a href="https://university.business-science.io/p/expert-shiny-developer-with-aws-course-ds4b-202a-r/">Shiny Developer with AWS Course</a>.</p>

<p><strong>What we are doing</strong>: We store reactive values and modify them inside of observers.</p>

<p><strong>What this means:</strong></p>

<ul>
    <li>We are creating a way to watch our users interactions with the apps.</li>
    <li>When the user changes the dropdown selection from "Stack Overflow" to "Car Prices", the data sets will change.</li>
</ul>

<img src="/assets/2021-03-16-Intro-R-Shiny/reactivity_observers.jpg" width="100%">

<br>

<p>Then, any functions downstream that use the <code>rv$data_set</code> will fire, updating the data accordingly. </p>

<img src="/assets/2021-03-16-Intro-R-Shiny/reactivity.jpg" width="100%">

<br>

<p>Finally, our app's UI then updates because we have an <code>outputPlotly()</code> in our UI that references the "corrplot" on our server. </p>

<img src="/assets/2021-03-16-Intro-R-Shiny/rendering_output.jpg" width="100%">

<br>

<p>Now, when we use the Shiny App dropdowns, our app fires and the datasets change on the fly!</p>

<img src="/assets/2021-03-16-Intro-R-Shiny/dataset_change.gif" width="100%">

<h1>In Summary<br>
    <small>You just built your first Shiny App! Congratulations.</small></h1>

<p>You should be proud.</p>
    
<p>But, what if you want to build more powerful applications?</p>
    
<p>This could be a challenge. You'll need to learn a ton, and this will take a long time. Plus, you might struggle and quit. </p>
    
<p>The number one reason that people quit: <strong>They get an error that they can't figure out.</strong> </p>
    
<p>Errors stop your progress... Grinding to a halt. </p>
    
<p>What if there was a program that took the guess-work out of learning data science and made it <strong>impossible to fail?</strong></p>



<br><br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}


