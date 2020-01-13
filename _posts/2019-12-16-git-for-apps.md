---
layout: post
title: "Git for Data Science Applications (A Top Skill for 2020)"
date: 2019-12-09 11:30:01
excerpt: "Moving into 2020, three things are clear - Organizations want Data Science, Cloud, and Apps. A key skill that companies need is Git for application development (I call this Full Stack Data Science). Here's what is driving Git's growth, and why you should learn Git for data science application development."
author: "Matt Dancho"
categories: [Business]
tags: [R-Bloggers, Learn-R, Learn-Business, Git, Shiny]
image: 2019-12-16-git/git.jpg
image_preview: 2019-12-16-git/git.jpg
---

<p class="lead">Moving into 2020, three things are clear - Organizations want Data Science, Cloud, and Apps. <strong>A key skill that companies need is <code>Git</code> for application development (I call this Full Stack Data Science). Here's what is driving Git's growth, and why you should learn Git for data science application development.</strong></p>

### Full-Stack Data Science Series

<div class="pull-right hidden-xs" style="width:50%; margin-left:20px;">
  <img class="img-responsive" src="/assets/2020-01-13-h2o/full_stack_data_science_technologies.jpg"> 
</div>

This is part of a series of articles on essential Data Science and Web Application skills for 2020 and beyond:

1. [__Part 1 - 5 Full-Stack Data Science Technologies for 2020 (and Beyond)__](https://www.business-science.io/business/2019/12/09/data-science-technologies.html)
2. [__Part 2 - AWS Cloud__ ](https://www.business-science.io/business/2019/11/13/data-science-with-aws.html)
3. [__Part 3 - Docker__](https://www.business-science.io/business/2019/11/22/docker-for-data-science.html)
4. [__Part 4 - Git Version Control__](https://www.business-science.io/business/2019/12/09/git-for-apps.html)
5. [__Part 5 - H2O Automated Machine Learning (AutoML)__](https://www.business-science.io/business/2020/01/13/5-reasons-to-learn-h2o-machine-learning.html)
6. __Part 6 - Shiny Web Applications__ (Coming Soon)
7. [__\[NEW BOOK\] - Shiny Production with AWS, Docker, Git Book__](https://www.business-science.io/business/2020/01/02/shiny-production-with-aws-docker-git-book.html)

## Top 20 Tech Skills 2014-2019

Indeed, the popular employment-related search engine, released an article [showing changing trends from 2014 to 2019 in "Technology-Related Job Postings"](https://www.hiringlab.org/2019/11/19/todays-top-tech-skills/) examining the __5-Year Change of the most requested technology skills.__

![Today's Top Tech Skills](/assets/2019-12-09-data-science-technologies/indeed_tech_trends.jpg)

<p class="date text-center">
Top 20 Tech Skills 2014-2019 <br>
<a href="https://www.hiringlab.org/2019/11/19/todays-top-tech-skills/" target="_blank">Source: Indeed Hiring Lab.</a>
</p>

I'm generally not a big fan of these reports because the technology landscape changes so quickly. But, I was pleasantly surprised at the length of time from the analysis - Indeed looked at ___changes over a 5-year period, which gives a much better sense of the long term trends.___ 

## Cloud, Machine Learning, Apps Driving Growth

__3 Technology Trends__ show that organizations are transitioning from Business Reporting to Application Development (Read [5 Data Science Technologies for 2020 (and Beyond)](https://www.business-science.io/business/2019/12/09/data-science-technologies.html) for more insights on Key Skills for Data Science and App Development):

1. __Cloud__ - AWS (14% Share, 400% Growth) and Azure (1100% Growth)

2. __Machine Learning__ - Machine Learning (400% Growth), Python (18% Share, 123% Growth)

3. <span style="color:blue;">__Applications__ - Git (8% Share, 150% Growth), Docker (4000% Growth)</span>

The changing business needs is _challenging Data Scientists_ to learn new technologies for __Data Science Application Development... And, `Git` and `Docker` are the future for app development.__ 

## Git & Docker Trends

We can see that both `Git` and `Docker` are experiencing explosive, multi-year growth trends in "Google Search Interest", further supporting the need to learn these key technologies that drive application development. (Read [Docker for Data Science Applications (4000% Growth)](https://www.business-science.io/business/2019/11/22/docker-for-data-science.html) to learn about how `Docker` helps facilitate data science applications.)

<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2051_RC11/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"/m/05vqwg","geo":"US","time":"2004-01-01 2019-12-16"},{"keyword":"/m/0wkcjgj","geo":"US","time":"2004-01-01 2019-12-16"}],"category":0,"property":""}, {"exploreQuery":"date=all&geo=US&q=%2Fm%2F05vqwg,%2Fm%2F0wkcjgj","guestPath":"https://trends.google.com:443/trends/embed/"}); </script>


## What Is Git?

Let's look at a (`Shiny`) web application to see what `Git` does and how it helps.

![Git Workflow](/assets/2019-12-16-git/git_workflow.jpg)

<p class="text-center date">Git Workflow
<br><a href="https://university.business-science.io/p/expert-shiny-developer-with-aws-course-ds4b-202a-r/"><small>From Shiny Developer with AWS Course</small></a></p>

`Git` and `GitHub` facilitate a workflow for developing and deploying applications:

1. Application Development begins locally (__Local Repository__) on your computer. Changes are tracked with `Git`.

2. Code is pushed to `GitHub`, a __Remote Repository__ designed for sharing version controlled files.

3. The remote repository can be cloned to an `AWS EC2 Instance`, which is a __Host__ for the production application. 

## Git Version Control

The most important concept of `git` is version control. Let's dive into the application to see how `git` helps. 

![AWS Application Development with Git and Docker](/assets/2019-12-16-git/application_development.jpg)

We can see that application consists of 2 things:

- __Files (`Git` Control__ - The set of instructions for the app. For a Shiny App this includes an app.R file that contains layout instructions, server control instructions, database instructions, etc

- __Software (`Docker` Control)__ - The code external to your files that your application files depend on. For a Shiny App, this is R, Shiny Server, and any libraries your app uses.


<mark><strong><code>Git</code> applies version control to the files.</strong> This is a lifeline in case you make a change that adversely impacts production. You can always go backwards.</mark>


## Git Commands

__Version Control Status & `Git` Command Workflow.__ When a codebase has `git` initialized, the files are untracked in your Working Directory. As changes are made, the user wants to track these changes. We track them using git commands. 

![Git Commands](/assets/2019-12-16-git/git_commands.png)



Git commands change the status by moving files through the version control workflow. The most important commands are:

- `commit` - This is when a snapshot of the file is added to your local repository. You can always go back to this version.

- `push` - To push any committed files from a local repo (e.g. your computer) to a remote repo (e.g. GitHub)

- `pull` - To pull down files on a remote repository to your local computer

- `reset` - To undo a change to a committed file



## Real Shiny App + AWS + Git Example

In my [Shiny Developer with AWS Course (NEW)](https://university.business-science.io/p/expert-shiny-developer-with-aws-course-ds4b-202a-r/), you use the following application architecture that uses `AWS EC2` to create an `Ubuntu Linux Server` that hosts a `Shiny` App in the cloud called the _Stock Analyzer_.  

<img src="/assets/2019-12-09-data-science-technologies/shiny_application_architecture.jpg" class="img-responsive">
<p class="text-center date">Data Science Web Application Architecture
<br><a href="https://university.business-science.io/p/expert-shiny-developer-with-aws-course-ds4b-202a-r/"><small>From Shiny Developer with AWS Course</small></a></p>

We use `Git` to track our files as we move into Production. Here's an example of the files stored on GitHub in a Private Repo. 

<img src="/assets/2019-12-16-git/stock_analyzer_github.jpg" class="img-responsive">
<p class="text-center date">GitHub Repository for Stock Analzyer
<br><a href="https://university.business-science.io/p/expert-shiny-developer-with-aws-course-ds4b-202a-r/"><small>From Shiny Developer with AWS Course</small></a></p>

You then deploy your "Stock Analyzer" application into Production so it's accessible anywhere via the __AWS Cloud__ via AWS EC2 Instance. 

<img src="/assets/2019-12-09-data-science-technologies/stock_analyzer_app.jpg" class="img-responsive">
<p class="text-center date">Stock Analyzer App
<br><a href="https://university.business-science.io/p/expert-shiny-developer-with-aws-course-ds4b-202a-r/"><small>From Shiny Developer with AWS Course</small></a></p>



If you are ready to learn how to build and deploy `Shiny` Applications in the cloud using `AWS`, then I recommend my [__NEW 4-Course R-Track System__](https://university.business-science.io/p/4-course-bundle-machine-learning-and-web-applications-r-track-101-102-201-202a/?coupon_code=DS4B15).

<br>

{% include cta_rtrack.html %}

<br>

I look forward to providing you the best data science for business education. 

Matt Dancho

Founder, Business Science

Lead Data Science Instructor, Business Science University