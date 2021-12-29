---
layout: post
title: "Predictive Power Score vs CorrelationFunnel"
date:   2021-02-16 08:00:00
excerpt: "Exploratory Data Analysis is what every data scientist does to understand actionable insights from the data. This process used to take forever. Not anymore..."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, correlation, visualization]
image: /assets/2021-02-16-power-score-vs-correlation-funnel/power_score_cover.png
image_preview: /assets/2021-02-16-power-score-vs-correlation-funnel/power_score_preview.png
---

This article is part of a R-Tips Weekly, a [weekly video tutorial](https://mailchi.mp/business-science/r-tips-newsletter) that shows you step-by-step how to do common R coding tasks.

<br/>


Here are the links to get set up. 👇

- [Get the Code](https://mailchi.mp/business-science/r-tips-newsletter)
- [YouTube Tutorial](https://youtu.be/D5cGYBop8zw)


<figure class="text-center">
    <a href="https://youtu.be/D5cGYBop8zw"><img src="/assets/2021-02-16-power-score-vs-correlation-funnel/Video_Tutorial.png" border="0" /></a>
  <figcaption>(Click image to play tutorial)</figcaption>
</figure>

<br>


<h2>Battle of the EDA Packages</h2>

<p>
<strong>Exploratory Data Analysis (EDA)</strong> is what every data scientist does to understand actionable insights from the data. 
This process used to take forever. Not anymore. We're kicking the tires on 2 EDA packages in a Battle Royale to 
determine which one reigns supreme. 
</p>

<ul>
    <li><code>ppsr</code> - An implementation of the Predictive Power Score.</li>
    <li><code>correlationfunnel</code> - My R package that leverages a "binning trick" for inference using correlation. </li>
</ul>

<p>As you follow along, you can use <a href="https://www.business-science.io/r-cheatsheet">my Ultimate R Cheatsheet</a>. It consolidates the most important R packages 
    (ones I use every day) into 1 cheatsheet. We'll also be using the <code>tidyverse</code> and <code>tidymodels</code> / <code>xgboost</code> from the cheatsheet as the tie-breaker. </p>

<p>So let's get started. You're making these data visualizations today:</p>

<img src="/assets/2021-02-16-power-score-vs-correlation-funnel/visualizations.png" />



<h2>The Drawbacks of Correlation<br><small>Did you know that you miss important insights with correlation?</small></h2>

<p>Correlation plots are must-know plots. <strong>Everyone understands correlations (even non-technical people).</strong> Correlation are great for explaining insights in simple terms:</p>

<ul>
    <li><strong>Magnitude (between zero in one):</strong> two features have a higher degree of relationship the closer the magnitude gets to one.</li>
    <li><strong>Sign (Positive/Negative):</strong> A positive sign indicates a positive relationship (both go up). A negative sign indicates an inverse relationship (as one goes up, the other goes down).</li>
</ul>

<p><strong>But Correlation has serious drawbacks.</strong></p>

<ul>
    <li>Doesn't work well with <strong>Non-Linear Relationships</strong></li>
    <li>Doesn't work on <strong>Categorical Data</strong></li>
</ul>

<p>Enter the <strong>Predictive Power Score</strong>, a new technique for finding relationships.</p>



<h2>The Contender: Predictive Power Score<br><small>An enhanced version of the traditional correlation that scores feature importance</small></h2>

<img src="/assets/2021-02-16-power-score-vs-correlation-funnel/Predictive_Power_Score_2.jpg" width="100%"/>

<p>Predictive Power Score fixes the issues. It works with:</p>

<ul>
    <li>Non-Linear Relationships</li>
    <li>Categorical Data</li>
</ul>

<p>Here's the implementation in the ppsr package.</p>

<img src="/assets/2021-02-16-power-score-vs-correlation-funnel/ppsr_Package.jpg" width="100%"/>

<p>This outputs a nice <strong>"PPScore Heatmap"</strong>, which looks very similar to a Correlation Matrix Heatmap. We can see that Tenure and TotalCharges are the top features identified with relationship to Churn. </p>

<img src="/assets/2021-02-16-power-score-vs-correlation-funnel/PPScore_Heatmap.jpg" width="100%"/>

<p>Awesome. In a few lines of code, we got some insights telling us to look closer at TotalCharges and Tenure.</p>

<p><strong>But did the PPScore miss anything?</strong></p>

<p>Let's try another method: My Correlation Funnel R Package.</p>



<h2>The Defender: Correlation Funnel<br><small>Uses the "binning trick" to fix the issues of traditional correlation</small></h2>

<img src="/assets/2021-02-16-power-score-vs-correlation-funnel/Correlation_Funnel_2.jpg" width="100%"/>

<p><strong>Correlation Funnel fixes the issues with traditional correlation</strong> using a clever binning strategy (i.e. the "binning trick") that allows categorical data to be one-hot encoded and numeric features to be binned into binary groups. </p>

<ul>
    <li>First <code>binarize()</code> the data - Note this changes the columns in your data using the "binning trick"</li>
    <li>Then <code>correlate()</code>- Make sure to use the binarized target variable name (Churn__Yes)</li>
    <li>Then visualize with <code>plot_correlation_funnel()</code></li>
</ul>

<img src="/assets/2021-02-16-power-score-vs-correlation-funnel/Correlation_Funnel_code.jpg" width="100%"/>

<img src="/assets/2021-02-16-power-score-vs-correlation-funnel/Correlation_Funnel_3.jpg" width="100%"/>

<p>This creates an easy to infer plot that shows not only magnitude of relationship, but also which parts of the feature correlate most with the segment of interest (e.g. Contract= Month-to-Month correlates with Churn=Yes).</p>

<p>We see new features that PPScore didn't have:</p>

<ul>
    <li>Contract</li>
    <li>Online Security</li>
    <li>Tech Support</li>
</ul>

<h4>Which is right? We need a tie-breaker.</h4>



<h2>Tie-Breaker: XGBoost + VIP<br><small>Use feature importance from a model designed for non-linear relationships</small></h2>

<p>To help us decide which to believe, we can use a 3rd model - XGBOOST:
    
    <ul>
        <li>Xgboost works well with non-linear data (tree-based, very accurate)</li>
        <li>We can get variable importance from Xgboost</li>
    </ul>
    
<p>Watch the <a href="https://youtu.be/D5cGYBop8zw">YouTube Video</a> for this one.</p>

<img src="/assets/2021-02-16-power-score-vs-correlation-funnel/Xgboost.jpg" width="100%"/>

<br><br>
<p>And the results are in, the top features for each method are:</p>

<img src="/assets/2021-02-16-power-score-vs-correlation-funnel/Results_Table.jpg" width="500px"/>

<h3>Interpretation of Results</h3>

<ul>
    <li>Each EDA method produced different results.</li>
    <li><strong>My interpretation - Experiment!</strong> Use multiple types of EDA techniques.</li>
    <li>You learned 3 EDA Techniques in this tutorial.</li>
</ul>


<h2>Your boss</h2>

<p>After he sees your new EDA skills...</p>

<img src="/assets/2021-02-16-power-score-vs-correlation-funnel/Boss_Meme.gif" width="100%"/>

<h2>But if you really want to improve your data skills... </h2>

<h3>Here's how to master R.</h3>

<p>What happens after you learn R for Business from Matt.</p>

<img src="/assets/2021-02-16-power-score-vs-correlation-funnel/Learn_R_Meme.gif" width="100%"/>

<p>This is career acceleration.</p>




<br>

<h3>SETUP R-TIPS WEEKLY PROJECT</h3>

<ol>
    <li><a href="https://mailchi.mp/business-science/r-tips-newsletter">Get the Code</a></li>
    <li>Check out the <a href="https://youtu.be/F7aYV0RPyD0">R-Tips Setup Video</a></li>
</ol>

<p>Once you take these actions, you'll be set up to receive R-Tips with Code every week. =)</p>

<br><br>

{% include cta_rtrack.html %}

{% include top_rtips.html %}
