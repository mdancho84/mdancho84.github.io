---
layout: post
title: "TBS #001: The 3-Step Formula To Automate Any Business Process"
date: 2023-02-02T00:00:00.000-05:00
excerpt: "The 3-step formula I used that contributed to a $2,000,000 revenue stream for my company."
author: Matt Dancho
categories:
- tbs-newsletter
tags:
- R
image: "/assets/3_step_business_automation_framework_thumb.jpg"
image_preview: "/assets/3_step_business_automation_framework_thumb.jpg"
---

There's a dead-simple formula that I've used to make my company \$3,000,000+ in revenue through business process automation.

It's called the **DAA Formula**, and it stands for:

-   Define

-   Analyze

-   Automate

Here's how I used it to automate a business process that contributed to a \$3,000,000+ revenue stream for my business, Business Science.

And, I made this business automation in just 12 days.

![Active LeadScore Shiny App](/assets/active_leadscore_app.jpg)

<p class="date text-center">

Business Automation App that contributed to a \$3,000,000+ revenue stream

</p>

# The Problem

In early 2021, I made a Customer Segmentation and Lead Scoring Analysis to determine which customers I should nurture and which customers I should target for sales emails.

Back then the Business Science email list had 40,000 subscribers. It's since ballooned to 95,000+ in early 2023.

**I had a problem. The manual operation was costing me money every time I got it wrong.**

My business was earning \$35,000 per targeted sale (and I did 24 of these per year). But any mistakes would have crippling results:

1.  Sending emails to the **wrong customers** drove up unsubscribe rates and lost potential customers (about 5% of customers were converting so losing 300 subscribers = 15 buyers)
2.  Not sending emails to the **"ready-to-buy" customers** resulted in a cost of about \$2,000 per missed customer.

The question was, could I optimize this process to grow the business?

Here's how I solved this business problem using the DAA formula.

# Step 1: DEFINE the ideal Business Process

The first step was defining the *ideal* business process in terms of inputs, process steps, and outputs. This is what you *think* you need to solve the problem.

![Define the Process](/assets/define_the_process.jpg)

<p class="date text-center">

The Ideal Process You Think You Need

</p>

### Inputs (Data you *think* you need)

The inputs to the ideal process were CSV files that came from 2 databases, namely a MailChimp Email Database and a Teachable Transactions Database.

These datasets gave me both transaction history (labeled who was a buyer) and the email dataset gave me descriptive data on what the customer was doing (behavior, actions, email open rates, etc).

### Process Steps (What you *think* you have to do)

The minimal processing steps I planned for were to:

1.  **Combine the data** so I could see which students were buying and what actions they had taken (email open rates, webinar attendance, where they were located geographically, how long they had been with me, etc)
2.  **Prepare the features** (the secret sauce of my solution that was to make highly predictive features that were indicators of a sale)
3.  **Get the Purchase Probability:** Run a Classification Model to get the probability of purchase for the given offer.
4.  **Make Hot/Cold Segments** for email targeting.

### Outputs (What you *need* to improve the process)

The ideal outputs would be a simple CSV file that could be uploaded to the MailChimp Email Database for segmentation. All I needed were Hot/Cold segments that I could target for Sales Emails / Nurture Emails, respectively.

# Step 2: Make an ANALYSIS

Next, I made an analysis. This is where I verify that I could make something that works.

![Lead Scoring Code](/assets/lead_scoring_code.jpg)

<p class="date text-center">

Lead Scoring Analysis (analysis.R file)

</p>

I took what I knew from defining the business process and I began mocking up an analysis:

-   I used `R` and `tidymodels`, the machine learning framework, to make a single model that I could run quickly inside an application.

-   I used the `tidyverse` for most of the data combining and data processing.

-   I used `recipes` and `text.recipes` which helped me incorporate customer actions in a way that the machine learning algorithms could understand.

# Step 3: AUTOMATE using an application

![](/assets/active_lead_score_app.jpg)

This part is really powerful. I used a tool called `shiny` to make a web application that did all of the processing. It had 3 tabs that walked the user through the 3 steps in the process.

### Tab 1: Import Data

Tab 1 imported the data from CSV files the user had and prepared it for the machine learning model.

![Tab 1 Import Data](/assets/tab1_import.jpg)

<p class="date text-center">

Step 1: Import Data

</p>

### Tab 2: Run the Scoring Model

Tab 2 ran the lead scoring model, allowing the user to make adjustments to the key inputs.

![Tab 2 Lead Scoring Model](/assets/tab2_scoring_model.jpg)

<p class="date text-center">

Step 2: Run the Lead Scoring Model

</p>

### Tab 3: Download the Customer Segmentation

Tab 3 produced the lead score and had nobs and diagnostics to optimize the Customer Segmentation to determine where I was comfortable setting the threshold for "Hot" and "Cold".

![Tab 3 Download the Customer Segmentation](/assets/tab3_customer_segmentation.jpg)

<p class="date text-center">

Step 3: Download the Customer Segmentation

</p>

# The Payoff

I implemented this system in 2021. I spent about 12 days building and refining the analysis and making the proof of concept `shiny` web application.

I'd say it payed off. The unsubscription rate was cut in half, and the total sales stayed at about 95% initially (slight drop due to missing people).

But this was more than made up by the growing email list. In a given weekend now with a good offer, we are pulling in \$125,000+ with a targeted sale. A healthy 4X growth over 2 years.

That's it for today. I'll see you next week for the next edition of The Business Scientist Newsletter.

-Matt
