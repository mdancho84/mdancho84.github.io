---
layout: post
author: Matt Dancho
categories:
- Code-Tools
tags:
- 'radiant '
- R-Bloggers
- Learn-R
- R
title: A new R package for Business Analytics... radiant
date: 2022-02-01T11:00:00.000-05:00
excerpt: 'I''m super impressed by the radiant R package. With no prior exposure to
  radiant, I was able to complete a short business analytics report in under 10-minutes. '
image: "/assets/048-radiant.jpg"
image_preview: "/assets/048-radiant.jpg"

---
I'm super impressed by the `radiant` R package. With no prior experience with radiant, I was able to complete a short business analytics report **in under 10-minutes.**


---

{% include webinar_chatgpt.md %}

---

## R-Tips Weekly

This article is part of R-Tips Weekly, a [weekly video tutorial](https://learn.business-science.io/r-tips-newsletter) that shows you step-by-step how to do common R coding tasks.

Here are the links to get set up. 👇

* [Get the Code](https://learn.business-science.io/r-tips-newsletter)
* [Watch the YouTube Tutorial](https://youtu.be/n27qWulZl1c)

## Video Tutorial

See how in 10-minutes I made a quick business analytics report with `radiant`.

<iframe width="100%" height="450" src="https://www.youtube.com/embed/n27qWulZl1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What you make in this R-Tip

By the end of this tutorial, you'll use Radiant to create a reproducible Business Analytics Report and save it as HTML.

![](/assets/sample_report_radiant.jpg)

<p class='text-center date'>Reproducible Business Analytics Report (made with <code>radiant</code>)</p>

## Thank You Developers

Before we go any further, I want to say thanks to the open source developers of Radiant. The programmer that graciously developed `radiant` and has given it to us free of charge is [Vincent Nijs](https://rady.ucsd.edu/people/faculty/nijs/).

## Radiant Setup

Follow these instructions to set up the `radiant` package and tutorial.

* Install Radiant
* Load the libraries and data
* Run `radiant()` (there's also an Add-In if you use Rstudio)

![](/assets/radiant_setup.jpg)

## Radiant's Shiny UI

This opens up the **Radiant Shiny User Interface**, a Shiny App that runs locally in a new Google Chrome Window.

![](/assets/radiant_shiny_app.jpg)

## Step 1 - Working with Data

Next, lets **load our data.** I added data into the Rstudio Global Environment previously when I ran `data(walmart_sales`_`_`_`weekly)`.

One of the options is to load data from the Global Environment, so let's do this.

![](/assets/radiant_load_data.jpg)

## Step 2 - Visualize

We can make a quick plot to investigate the sales data over time by Sales ID (store - department identifier). This **highlights the differing sales trends** by Store-Department.

1. Head over the **Visualize Section** within the Data Tab
2. **Select Line Plot**, and Y-Axis will be Weekly Sales, X-Axis is Date, and Facet Row is ID
3. **Click Create Plot** to make the visualization

![](/assets/radiant_data_visualization.jpg)

## Step 3 - Starting the Report

At this point we can begin **building our report.**

1. On the Visualize Section, scroll down and **click the little report icon**
2. This send you to the Report Tab where you can **Knit report**

Bada-Bing... Bada Boom! We have the beginnings of a Business Analytics Report.

![](/assets/radiant_report_1.jpg)

## Step 4 - Modeling (Creating a Price Model)

The next step in our workflow is to **model the weekly sales data.** My goal is to create a Pricing Model that looks for dependencies between the weekly sales volume by department and factors like markups, fuel price, temperature (weather), etc. We can easily do this in `radiant`.

Head over to the Model Tab and **select Linear Regression (OLS)**.

1. First select Weekly Sales as the **response variable** and select the **explanatory variables** shown.
2. Then click **Estimate Model** to make a linear regression model
3. Review the OLS Linear regression **summary results. This is our very basic pricing model.**

![](/assets/radiant_price_model.jpg)

## Bonus - Residual & Coefficient Plots

As a bonus for making it this far, I'm showing you how you can quickly make some **awesome visuals** for your Business Analytics Report.

### Residuals Plot

This plot helps us see **how well the model is performing**. It's worth mentioning that we are seeing a lot of clusters, which means a non-linear model may be a better model.

![](/assets/radiant_model_residual_plot.jpg)

### Coefficient Plot

This plot helps us see the effect of a 1-unit change to the modeled price. It appears that the model is very sensitive to Fuel Price. Keep in mind that the units are important for comparison.

* A change in $1 of fuel price is a lot.
* A change in 1-degree Fahrenheit for Temperature is not that much.

![](/assets/radiant_model_coefficient_plot.jpg)

## Step 5 - Finish the Report

Once we are happy, we can finish our report. Just **hit the "Report Button"** to send the results from the Modeling Tab to the Report Tab.

On the reporting tab:

1. **Add a title and sections** to your report
2. **Move the code chunks** to follow the order
3. **Hit Save Report** (I saved as HTML in the Youtube Video)

![](/assets/radiant_finish_report.jpg)

The report is saved as an HTML document (assuming you switched from Notebook to HTML like I did in the video.)

## Conclusions

You just created a report using `radiant`. But there's a lot more to data science.

If you'd like to become a data scientist (and have an awesome career, improve your quality of life, enjoy your job, and all the fun that comes along), then I can help with that.

{% include cta_struggles_rtrack.md %}
