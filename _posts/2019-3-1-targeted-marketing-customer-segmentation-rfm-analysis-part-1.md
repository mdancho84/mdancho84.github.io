---
layout: post
title: "Targeted Marketing with Customer Segmentation and RFM Analysis – Part 1"
excerpt: "Customer segmentation is the process of grouping customers by specific likeness. Creating customer segmentation enables a business to target specific groups of customers and personalize marketing for each group."
author: "David Curry"
date: 2019-3-1 10:00:00 -0400
categories: [Business]
tags: [R, Data Science, Business Understanding, Marketing, Learn-Marketing]
image: 2019-3-1-targeted-marketing-customer-segmentation-rfm-analysis-part-1/targeted-marketing-customer-segmentation-rfm-analysis-cover.jpg
image_preview: 2019-3-1-targeted-marketing-customer-segmentation-rfm-analysis-part-1/targeted-marketing-customer-segmentation-rfm-analysis-preview.jpg
canonical: https://sureoptimize.com/targeted-marketing-with-customer-segmentation-and-rfm-analysis-part-1
---


<h2>Introduction</h2>

<p>An eCommerce business wants to target customers that are likely to become inactive. &nbsp;In this article, I will use a grouping technique called <strong>customer segmentation,</strong> and group customers by their purchase activity.<br></p>

<p>Customer segmentation is the process of grouping customers by specific likeness (demographics, interests, behavior, etc). <strong>Creating customer segmentation enables a business to target specific groups of customers and personalize marketing for each group.</strong></p>

<p>There are many reasons a business may want to segment customers, such as:<br></p>

<ul><li>Create and communicate targeted marketing messages that will resonate with specific groups of customers.</li><li>Select the best communication channel for a segment (such as email or social media posts). </li><li>Identify ways to improve products or new product or service opportunities.</li><li>Establish better customer relationships.</li><li>Test pricing options.</li><li>Focus on the most profitable (high-value) customers.</li><li>Improve customer service.</li><li>Upsell and cross-sell other products and services.</li></ul>

<br>
<p>This topic will be a two-part series:<br></p>

- __Part 1__: This article will focus on customer segmentation using _Recency_ for the purpose of keeping customers active in purchasing.

- __Part 2__: The next article in the series will focus on customer segmentation _Frequency_ and _Monetary Value_ to personalize marketing by segment and value.


<h2>Business Objective </h2>

<p><strong>Business challenge and Goal: </strong>An eCommerce business wants to identify customers before they become inactive. Knowing which customers are moving from active to inactive will help the eCommerce business create <span class="highlight">targeted marketing to keep customers active with incentives</span>.<br></p>

<p><strong>Solution:</strong> In this article series, I will segment customers based on their Recency, Frequency, and Monetary Value (RFM) to identify how active or inactive they are. &nbsp;<a href="https://en.wikipedia.org/wiki/RFM_(customer_value)">RFM analysis</a> is a technique used to identify how recently a customer has purchased (recency), how often a customer purchases (frequency), and how much money a customer spends (monetary value). &nbsp;<br></p>

<br>

<p>Calculating RFM will provide two things:<br>(1) &nbsp;provide a foundation to segment customers based on their purchase activity and <br>(2) identify high-value customers.<br></p>


<h2>About the Data</h2>

The Data Set comes from the __UCI Machine Learning Repository "Online Retail" Data set__. You can download the [Excel File with transaction data here](https://archive.ics.uci.edu/ml/datasets/online+retail).

<p>Transaction data is needed in order to compute RFM and create the customer segmentations. The required fields are a unique <em>customer ID</em> for each transaction, the <em>total transaction amount,</em> and the <em>date of purchase</em>. &nbsp;<br></p>

<p>The data used in this article is from an eCommerce store with transactions spanning one year. <br></p>

## About the Analysis

This analysis includes a [Recency, Frequency, Monetary (RFM) analysis](https://en.wikipedia.org/wiki/RFM_(customer_value)), with the focus of this article (Part 1 in the series) on the Recency analysis. 

<hr>
### R Programming Language

The RFM analysis was performed using the `R` statistical programming language. We teach data analysis and machine learning with `R` at [Business Science University](https://university.business-science.io/). 

#### Business Analysis with R

We offer a beginner 7-week program that teaches you the __fundamentals of Data Science with 2 key business projects__:

1. __Customer Segmentation (Unsupervised Learning)__ - Use K-Means Clustering & UMAP to segment customers
2. __Product Price Algorithm (Machine Learning)__ - Use Linear Regression, GLM (Elastic Net), Decision Trees, Random Forest, XGBoost, and Support Vector Machines to develop a pricing model based on product characteristics

<div class="text-center">
    <a href="https://university.business-science.io/p/ds4b-101-r-business-analysis-r/?coupon=ds4b15" class="btn btn-lg btn-info">
        <span style="font-size:28px;"><strong>Learn About Our Business Analysis With R Course</strong></span>
    </a>
</div>

#### Data Science for Business with R

We offer an advanced 10-Week program that teaches __Automatic Machine Learning__ with `H2O` solving an __end-to-end Churn problem for an organization__. The student learns advanced data manipulation, preprocessing with `recipes`, classification, ROC/AUC, Precision vs Recall, Gain/Lift, local interpretable model explanation (`LIME`), and how to optimize a classification model for return-on-investment.

<div class="text-center">
    <a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?coupon_code=DS4B15" class="btn btn-lg btn-info">
        <span style="font-size:28px;"><strong>Learn About Our Data Science For Business Course</strong></span>
    </a>
</div>


<hr>

<h2>Data Analysis</h2>

<p>The raw data has close to 550,000 transactions with over 4,000 customers.<br></p>

<p>After inspecting the data, some transactions have been removed:</p>

<ul><li>A portion of transaction data are missing <em>customer ID</em>. Customer ID is required for this segmentation &#8211; these transactions will be removed from the data set.</li><li>2% of transactions are item returns. For this demonstration, transaction returns are removed, but the initial transaction will remain in the data set to maintain <em>Recency</em> and <em>Frequency </em>for all customers.</li></ul>

<p>After removing missing value and return transactions there are close to  400,000 transactions remaining.</p>


<h2>Customer Segmentation</h2>

<p>The segmentation goal is to group customers by how recent they made a purchase. The following segments will be used to group customers: <em>Active, Warm, Cold, Inactive.</em><br></p>

<p>A common starting point for this type of segmentation is to group customers for transactions for a given year. Segmenting by year will account for seasonal purchase spikes and drops.  </p>

<p>Defining a time range for each segment will depend on the <em>Recency</em> of customer transactions. For a large eCommerce business such as this, the <em>Active</em> and <em>Warm</em> segments should have short time ranges to correctly identify customers before they become <em>Cold</em> and <em>Inactive</em>.</p>


<h3>Assign Segment Time Range using Recency</h3>

<p><strong>Reminder:</strong> The business goal is to create targeted marketing and contact customers before they move to a lower segment. Therefore, the time range for <em>Active, Warm, Cold, </em>and <em>Inactive </em>segments should be selected to best capture customers’ purchase behavior. &nbsp;<br></p>

<p>This time range selection will be a starting point, but keep in mind that segmentation time ranges should change over time based on gathering more transaction data, marketing campaign performance, and business goal changes.</p>

<p>Below is a plot of the distribution of <em>Recency</em> for all customers:</p>

<br>
<p style="text-align:center"><strong>Recency of transactions</strong> in the past year<br></p>


<img src="/assets/2019-3-1-targeted-marketing-customer-segmentation-rfm-analysis-part-1/Customer-segmentation-recency-distribution.png" alt="Customer Segmentation Recency Distribution" />

<p>This plot visualizes the number of days since the last purchase for all transactions. <br></p>

<ul><li><span style="background-color:#f7c9a2;">The orange line</span> represents the average number of days since last purchase (153 Days). </li><li><span style="background-color:#a1c5e4;">The blue line</span> represents the density of transactions over time. Think of it as how <em>Recency</em> is “trending”.</li></ul>

<p>This is a starting point for selecting time ranges for each segment. &nbsp;Looking at the “trend” line, I’m going to start with the following segment time rages:<br><br></p>

<p style="text-align:center"><strong>Segmentation using Recency</strong></p>

<img src="/assets/2019-3-1-targeted-marketing-customer-segmentation-rfm-analysis-part-1/customer-segmentation-using-recency.png" alt="Customer Segmentation Using Recency" />

<br>

<p>This is the same plot as before, with the addition of an overlay of colors that represent each segment. The red dots are a demarcation of the number of days since the last purchase before a customer moves to the next segment. &nbsp;The demarcation points were selected with the  goal of capturing customers within a group before the density trends downward (blue line starts to go down). <br></p>

<p>Each segment is defined as the following:<br></p>

<ul><li><em>Active </em>= Recency (days since last purchase) is <span style="background-color:#d9e8d5;">equal to or less than 30 days</span></li><li>Warm = Recency (days since last purchase) is  <span style="background-color:#fff0d0;">between 31 and 100 days</span> </li><li>Cold = Recency (days since last purchase) is <span style="background-color:#fae5cf;">between 101 and 215 days</span> </li><li>Inactive = Recency (days since last purchase) is <span style="background-color:#f2cccc;">more than 215 days</span></li></ul>

<p>The <em>Recency</em> distribution plot segments all customers by how recent they made a purchase over a year, with defined time ranges for each segment.<br></p>

<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>


<hr />

<h4 style="text-align:center">Advanced Tip!<br></h4>

<p style="background-color:#fff1ce" class="has-background">If you have transaction data for two or more years, you can create customer segments for each year. With multi-year customer segmentation, create a transition matrix to <strong>compare how many customers are moving from one segment to another over years</strong>. <br><br>Use the transition matrix combined with prior marketing performance to adjust current targeted marketing campaigns.<br></p>

<hr />


<h2>Customer Segmentation Summary<br></h2>

<p>All transactions have been segmented using the time rages defined above. Here is the distribution of customers by segment:</p>

<img src="/assets/2019-3-1-targeted-marketing-customer-segmentation-rfm-analysis-part-1/customer-distribution-by-segment.png" alt="Customer Distribution by Segment" />

<p>With all customers identified by segment, the eCommerce business can now create an action plan to target customers who are close to moving to lower segments.</p>


<h2>Conclusion</h2>

<h3>Targeted Marketing Campaign</h3>

<p>In this article, I used transaction <em>Recency</em> to define and create customer segmentation. With the segmentation complete, the eCommerce business can now create <g class="gr_ gr_20 gr-alert gr_gramm gr_inline_cards gr_run_anim Grammar only-ins replaceWithoutSep" id="20" data-gr-id="20">targeted</g> marketing campaigns for customers who are close to falling in segments: from <em>Active to Warm</em>, and so on.</p>

<h3>Further Considerations:</h3>

<ol><li>Customer segmentation time ranges should be adjusted based on a balance of business goals, customer purchasing behavior, and marketing performance. The right balance can be found with more transaction data and monitoring and adjusting targeted marketing performance over time. <br><br></li><li>Segments can be split by customer value, such as <em>Active High Value</em> or <em>Warm Low Value</em>. Segmenting by value gives the business finer control of messages to customers, where they can offer promotions that are within customer spending habits. Knowing each customer value also helps the business create targeted marketing for high-value customers.  <br><em>(This will be presented in Part 2 of the article series)</em></li></ol>


<h2>Part 2 of the of the series:<br></h2>

<p>The next article in the series will focus on customer segmentation <em>Frequency</em> and <em>Monetary Value</em> to <strong>personalize marketing by customer segment and customer value.</strong></p>

<div style="height:10px" aria-hidden="true"></div>

<br/>
Author: David Curry<br/>
Founder, [Sure Optimize](https://sureoptimize.com) – SEO and Marketing Analytics


<br><br>