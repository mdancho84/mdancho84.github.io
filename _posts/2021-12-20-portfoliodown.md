---
layout: post
title: "Introducing portfoliodown: The Data Science Portfolio Website Builder"
date:   2021-12-20 06:50:01
excerpt: "I'm super excited to introduce a new R package that makes it painless for data scientists to create a professional."
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, R, portfoliodown]
image: /assets/2021-12-20-portfoliodown/introducing_portfoliodown.jpg
image_preview: /assets/2021-12-20-portfoliodown/introducing_portfoliodown.jpg
---

I'm super excited to introduce `portfoliodown`, a new R package that makes it __painless for data scientists__ to create a polished professional website so they can host their project portfolios, get great job interviews, and launch their data science careers. I'll show of a short demo in this article. 

For those that want to learn more about __launching your career in data science with `R`__, I have a [__FREE 40-minute webinar__](https://learn.business-science.io/free-rtrack-masterclass-signup) on what skills are needed (these are the 10 skills that helped me launch my career in data science).

<p class="text-center">
  <a class="btn btn-xxl-wide-green" href="https://learn.business-science.io/free-rtrack-masterclass-signup">
  Watch Free Career Training
  </a>
</p>

# What is `portfoliodown`?

`portfoliodown` is the __Data Science Portfolio Website Builder.__ In as little as 15-minutes, you can get a professional website created that is designed to get you a job interview. 

The website is streamlined with a focus on the __two questions Hiring Managers need to know:__ 

1. What have you done? 

2. Can you fill our needs?

In summary,`portfoliodown` takes care of __communicating your value in as few words as possible.__ 

![Portfoliodown](/assets/2021-12-20-portfoliodown/introducing_portfoliodown.jpg)

<p class="text-center date">Portfoliodown: The Data Science Portfolio Builder</p>

# Example: Matt's Data Science Portfolio

__Check out an example data science portfolio__ at [https://mattdancho.netlify.app](https://mattdancho.netlify.app){:target='_blank'}. It took me 15-minutes to make this with `portfoliodown`. 

![Example Data Science Portfolio](/assets/2021-12-20-portfoliodown/example_portfolio.gif)

<p class="text-center date">Matt's Data Science Portfolio</p>

# Make Your First Portfolio

Now that you see what `portfoliodown` can make, let's get you up and running with your first portfolio. 

## Install `portfoliodown`

At the moment, `portfoliodown` is only available as a development version. Hopefully, we will launch on CRAN, but until then, you can install from GitHub. 

{% highlight r %}
devtools::install_github("business-science/portfoliodown")
{% endhighlight %}

## Load `portfoliodown`

Next, load `portfoliodown`. This brings in key functions that we'll use like `new_portfolio_site()` and `serve_site()`.

{% highlight r %}
library(portfoliodown)
{% endhighlight %}

## Set up your new site

Run `new_portfolio_site()`, which will create a __Data Science Portfolio Website Template.__  

{% highlight r %}
new_portfolio_site()
{% endhighlight %}

## Serve the Site Locally

Run `serve_site()` to serve the portfolio site. It should look like this. The template is essentially a `blogdown` website without the blog. It's designed to be __streamlined__, which is essential for busy hiring managers be able to quickly investigate your project experience, experience, and technical skills. 

![Data Science Portfolio Template - Website](/assets/2021-12-20-portfoliodown/portfolio_example.jpg)

<p class="text-center date">Website Template (being served)</p>

## Understanding the Data Science Portfolio Template Files

Here's what happens when you run `new_portfolio_site()`:

1. The function gets a special hugo theme designed for data science portfolios from here: https://github.com/business-science/raditian-free-hugo-theme-data-science

2. The hugo theme files are copied into a new hugo website with a directory structure that looks like this. 

![Data Science Portfolio Template - Directory Structure](/assets/2021-12-20-portfoliodown/portfolio_files.jpg)

<p class="text-center date">Portfolio Website Directory Structure</p>

This directory contains the following important folders and files:

- `/data`: contains a copy of the `homepage.yml` file. This file is used to modify your website. 

- `/themes`: Contains a copy of the `raditian-free-hugo-theme-data-science` theme. 

- `config.yaml`: A file that controls general information about the website like Google Analytics, Homepage Section Order, etc. 


We'll need knowledge of these files to move onto customizing the site, next. 

## Customizing the Portfolio Template

Obviously your goal isn't to make a template, so you'll want to __customize your new portfolio website__. We'll step through a basic process here. Most of the content for the website will be modified from the `/data/homepage.yml` file. 

### Section 1: The Website Title

Open the `/data/homepage.yml` file. The first section is called `head`. In this section you can modify the title of the webpage. 


![Modify the Head](/assets/2021-12-20-portfoliodown/section_00_head.jpg)

<p class="text-center date">Update the Website Title</p>


### Section 2: The Showcase

Next, update the Showcase Section. 

![Modify the Head](/assets/2021-12-20-portfoliodown/section_01_showcase.jpg)

<p class="text-center date">Update the Showcase Section</p>

Modify the key parts:

- `enable`: Can toggle whether or not the section shows. 

- `title`, `subtitle` and `description`

- `image`: The images can be modified by creating a new folder and pointing to new images. 

- `button`: This is the call to action. It's set to create an email via the `URL` parameter. 

- `socialLinks`: You can add/modify/delete social links here. 

### Sections 3 - N

The remaining sections can be modified in the same way. 

## Deployment

Once you've designed your Data Science Project Portfolio, __you're now ready to deploy.__ 

Deployment takes two steps:

1. __Push to Github.__ 

2. __Create a Netlify account__ and connect it to your github repo containing your Data Science Portfolio Website. 

Great! You now have a functioning portfolio website. 

<span style='font-size:30px;color:blue;'>What next? How do you gain that elusive data science career?!</span>

## 🚀 Launching a Career in Data Science

I'll have detailed training coming soon on how to launch a data science career in 2022: __"Launching a Data Science Career in 30-Days".__ 

- You'll need to take the [__5-Course R-Track Courses__](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series) first to gain the prerequisite knowledge needed. Note that this will take several months to complete, but the R-Track system will set you up for insane performance on the job (and wow everyone in the technical interview). 

- __The Career Module__ will cover what to do to land data science interviews, gain recommendations from me, and get promotion after promotion on the job to accelerate your career. 

If you are interested in learning more, then please [__watch my Free Webinar: 10 Secrets to becoming a Data Scientist with R.__](https://learn.business-science.io/free-rtrack-masterclass-signup)

<p class="text-center">
  <a class="btn btn-xxl-wide-green" href="https://learn.business-science.io/free-rtrack-masterclass-signup">
  Watch Free Career Training
  </a>
</p>

{% include cta_rtrack.html %}
