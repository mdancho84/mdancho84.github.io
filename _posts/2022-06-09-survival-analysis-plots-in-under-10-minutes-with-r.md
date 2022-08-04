---
layout: post
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
title: Survival Analysis in R (in under 10-minutes)
date: 2022-06-09 12:50:00 -0400
excerpt: Learn how to do survival analysis in R in under 10-minutes. Plus get 3 bonuses
  to take your survival plots to the NEXT LEVEL. Let's go!
image: "/assets/survival_plots-2.jpg"
image_preview: "/assets/survival_plots-2.jpg"

---
**Making a survival analysis** can be a challenge even for experienced R users, but the good news is I'll help you make beautiful, publication-quality survival plots **in under 10-minutes.** Here's what WE are going to do:

1. Make your first `survival` model and plot your survival analysis with `survminer`
2. And I'll give you **3 SPECIAL BONUSES!** (that will take your survival plots _to the next level_).

You excited? I am! Let's go!!

# R-Tips Newsletter

This article is part of R-Tips Newsletter, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks.

<p>Here are the links to get set up. 👇</p>

<ul> <li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li> <li><a href="https://youtu.be/1npsnq5reaA">YouTube Tutorial</a></li> </ul>

# Video Tutorial

Learn how to use the `survminer` package in my 8-minute YouTube video tutorial.

<iframe width="100%" height="450" src="https://www.youtube.com/embed/1npsnq5reaA" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# What you make in this R-Tip

By the end of this tutorial, you'll make this survival analysis plot! AND, you'll see how to expose business insights from customers that a churn faster than others.

![](/assets/survival_plots-2.jpg)

# Thank You Developers.

Before we move on, please recognize that `survminer` was developed by [**Alboukadel KASSAMBARA**](https://github.com/kassambara) (follow on GitHub). Thank you for everything you do!

Also, the full documentation for `survminer` can be [accessed here](https://rpkgs.datanovia.com/survminer/).

# Survival Analysis Plot Tutorial

**Buckle up.** You and I are about to go on an 8-minute mind-blowing journey to make boring survival plots look insane. Let's go.

## Step 1: Load the libraries and data

First, run this code to:

1. **Load Libraries:** Load `tidyverse` , `janitor`,  `tidyquant`, `patchwork`, `survival`, and `survminer`
2. **Import Data:** We have a custom dataset that has churn data. [Sign up for R-Tips to get the dataset.](https://learn.business-science.io/r-tips-newsletter)

![](/assets/survival_01_libraries.jpg)

Here's what the formatted customer churn data looks like.

![](/assets/survival_02_customer_churn_data.jpg)

### Key concept about survival analysis!

For survival analysis, we want to understand how long it takes for an event to occur.

* **How long:** Tenure. This is how many months a customer has been subscribed.
* **Survival Event:** Churn = 1. This the event that connects the time to the death of a subscriber (they didn't really die, but just unsubscribed).

With this knowledge, we can make our first survival model and plot.

## Step 2: Make your 1st survival model and plot

Alright, we're going to take care of 2 things in this step. They go hand-in-hand.

1. **Survival Model:** We'll use the `survfit()` and `Surv()` functions to specify a survival model. We select the `Surv(tenure, churn)` to model the time and event. Then we use `~ contract` to model as a function of contract type.
2. **Survival Plot:** We use `ggsurvplot()` to create our first survival plot.

![](/assets/survival_03_model_and_plot.jpg)

This makes the plot shown below. It's a very powerful plot for business insights!

![](/assets/survival_04_survival_plot.jpg)

### How to explain the survival plot (business insights)

Newer data scientists can get tripped up interpreting and explaining the survival plot. So let me take a minute to explain in terms of the business insights.

![](/assets/survival_05_survival_plot_interpret.jpg)

The goal is to understand what's happening. We can quickly see that:

* **Month-to-Month Contracts are hurting the business.** After 40-months, only 50% have survived (meaning that 50% have churned).
* **Conversely, long-term contracts are really beneficial to the business.** At 40-months, 90% of 1-year contracts have survived. These customers are more loyal! And 2-year customers are the most loyal!!

# 3 MASSIVE BONUSES!!! To take your survival plots to the NEXT LEVEL.

Don't just willy-nilly slap the survival plot in your business report.

![](/assets/meme_default_ggplot_theme.jpg)

### Avoid THIS big mistake

Here's why you **MUST AVOID** just slapping the last plot in your business reports:

1. Remember, stakeholders are human and **they won't trust you** or your report if you don't dress it up!
2. You are measured by your ability to **provide actionable insights**. SO you need to be able to explore more. The techniques I will show you next will help you do just that!

So let's earn the trust of your business leadership with these **3 MASSIVE BONUSES!!**

## Bonus #1: Use the Tidyquant Theme

I'm the creator of `tidyquant`. So I may be biased for telling you to use it. But, I'm biased for a reason. It got me results (job promotions and recognition).

**Tidyquant includes special "business-ready" themes** that I used in my reports (yes, the ones that went to my CEO of a $500,000,000 per year business).

And, these are the same reports that helped get me 3 promotions in 2-years (effectively doubling my salary).

![](/assets/survival_06_tidyquant_code.jpg)

And we can immediately see a positive effect of the before and after. You gain:

1. **Gridlines** to help estimate survival probabilities.
2. Better **business-ready** color palettes
3. Legend at bottom (**more obvious legend location** for people that view the plot first then want to understand what the colors mean second)

![](/assets/survival_07_tidyquant_before_after.jpg)

## Bonus #2: Add the survival risk table

The survival risk table is a great way to include specific values of how many survived. The default returns a risk table with counts. But you can also specify `risk.table = "percentage"` to include percentages if that works better for your persuasive argument.

![](/assets/survival_08_risk_table_code.jpg)

Note that in order to make this look amazing, we will split, format with `tidyquant`, then recombine with `patchwork` to make a killer visualization that will earn your boss's respect.

![](/assets/survival_09_risk_table_plot.jpg)

Heck yeah!! Now we're talking. Alright, I have one more survival plot bonus hack for you.

## Bonus #3: Facetted survival plots

**This is an amazing hack** to showcase differences in groups between survival. There's a new function called `ggsurvplot_facet()` that exposes facetting options to make subplots. Let's check it out. We'll showcase any differences between the customer's gender (male vs female)

![](/assets/survival_10_survival_facet.jpg)

And here's the visualization that is returned.

![](/assets/survival_11_survival_facet_plot.jpg)

Now we can tell that both male and female seem to have the same rates. So we know that gender doesn't seem to have a big effect on churn rates.

# Recap

We learned how to use the `survminer` library to not only create awesome survival analysis plots that show off business insights and are publication-ready. Great work! **But, there's a lot more to becoming a data scientist.**

If you'd like to become a data scientist (and have an awesome career, improve your quality of life, enjoy your job, and all the fun that comes along), then I can help with that.

## Step 1: Watch my Free 40-Minute Webinar

Learning data science on your own is hard. I know because **IT TOOK ME 5-YEARS to feel confident.**

AND, I don't want it to take that long for you.

So, I put together a [**FREE 40-minute webinar (a masterclass)**](https://learn.business-science.io/free-rtrack-masterclass-signup) that provides a roadmap for what worked for me.

Literally 5-years of learning, consolidated into 40-minutes. It's jammed packed with value. I wish I saw this when I was starting... It would have made a huge difference.

## Step 2: Take action

For my action-takers, if you are ready to take your skills to the next level and DON'T want to wait 5-years to learn data science for business, AND you want a career you love that earns you $100,000+ salary (plus bonuses), and you'd like someone to help you do this in UNDER  6-MONTHS or less....

Then I can help with that too. There's a link in the [**FREE 40-minute webinar**](https://learn.business-science.io/free-rtrack-masterclass-signup) for a special price (because you are special!) and taking that action will kickstart your journey with me in your corner.

Get ready. The ride is wild. And the destination is AMAZING!

![](/assets/rtrack_what_they_are_doing.jpeg)

{% include top_rtips.html %}
