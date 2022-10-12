---
layout: post
title: How to Automate PowerPoint Slidedecks with R
date: 2020-09-22T06:00:00.000+00:00
excerpt: Here's a common situation, you have to make a Monday Morning Slide Deck.
  It's the same deck each week, just date ranges for your data change. Here's how
  to automate this process with R!
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
image: "/assets/rtip_powerpoint_r.jpg"
image_preview: "/assets/rtip_powerpoint_r.jpg"

---
Your boss lives on PowerPoint decks. Do you need to create a Slide Deck every week? Let's learn how to **automate PowerPoint** with R, using `officer` and `tidyverse`.

# R-Tips Weekly Newsletter

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks one R-tip at a time.

<p>Here are the links to get set up. 👇</p>

<ul> <li><a href="https://learn.business-science.io/r-tips-newsletter">Get the Code</a></li> <li><a href="https://youtu.be/JJ5Ltw4PDn4">YouTube Tutorial</a></li> </ul>

# This Tutorial Is Available In Video

I have a companion video tutorial that shows even more secrets (plus mistakes to avoid).  And, I'm finding that a lot of my students prefer the dialogue that goes along with coding. So check out this video to see me running the code in this tutorial. 👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/JJ5Ltw4PDn4" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Automate PowerPoint with R

Here's a common situation, you have to make a **Monday Morning Slide Deck**. It's the same deck each week, just date ranges for your data change. Here's how to automate this process with R!

First, here's what you need to make - **A weekly Stock Report**.

![Weekly Stock Report](/assets/2020-09-22-automate-powerpoint/weekly-stock-report.jpg)

<br>

Thinking like a programmer, you can **collect your stock data using date ranges**.

![Stock Data Using Date Ranges](/assets/2020-09-22-automate-powerpoint/stock-data-using-date-ranges.jpg)

With a little bit of data wrangling with the `tidyverse`, you've got your table extracted & formatted!

![Tidyverse Wrangling](/assets/2020-09-22-automate-powerpoint/tidyverse-wrangling-1.jpg)

![Tidyverse Wrangling](/assets/2020-09-22-automate-powerpoint/tidyverse-wrangling-2.jpg)

<br>

Then you use `timetk` to make a sweet plot.

![Timetk package](/assets/2020-09-22-automate-powerpoint/timetk-1.jpg)

<br>

![Plotting stock data](/assets/2020-09-22-automate-powerpoint/plot.jpg)

<br>

Then you use `officer` to add the table and plot to powerpoint.

![Officer R package](/assets/2020-09-22-automate-powerpoint/officer-powerpoint.jpg)

You've just **automated your Monday Morning PowerPoint in R**. BOOM! 💥💥💥

![Weekly Stock Report](/assets/2020-09-22-automate-powerpoint/weekly-stock-report.jpg)

<br>

# 💡 Conclusions

You learned how to automate PowerPoint with R. Great work! **But, there's a lot more to becoming a Business Scientist (my term for an incredibly valuable data scientist that has business skills).**

If you'd like to become a Business Scientist (and have an awesome career, improve your quality of life, enjoy your job, and all the fun that comes along), then I can help with that.

## My Struggles with Learning Data Science

It took me a long time to learn how to apply data science to business. And I made a lot of mistakes as I fumbled through learning R.

I specifically had a tough time navigating the ever-increasing landscape of tools and packages, trying to pick between R and Python, and getting lost along the way.

**If you feel like this, you're not alone.**

In fact, that's the driving reason that I created Business Science and Business Science University ([You can read about my personal journey here](https://www.business-science.io/business/2019/07/22/how-i-started-my-data-science-business.html)).

What I found out is that:

1. **Data Science does not have to be difficult, it just has to be taught from a business perspective**
2. **Anyone can learn data science fast provided they are motivated.**

# How I can help

If you are interested in learning R and the ecosystem of tools at a deeper level, then I have a streamlined program that will **get you past your struggles** and improve your career in the process.

It's my [5-Course R-Track System](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series/). It's an integrated system containing 5 courses that work together on a learning path. Through 8 projects, you learn everything you need to help your organization: from data science foundations, to advanced machine learning, to web applications and deployment.

The result is that **you break through previous struggles**, learning from my experience & our community of 2653 data scientists that are ready to help you succeed.

Ready to take the next step? Then [let's get started.](https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series/)

![](/assets/rtrack_what_theyre_doing_2.jpg)

<p style="font-size: 36px;text-align: center;"><a href="https://university.business-science.io/p/5-course-bundle-machine-learning-web-apps-time-series">Join My 5-Course R-Track Program<br>(Become A 6-Figure Data Scientist)</a></p>