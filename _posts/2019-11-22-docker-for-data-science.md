---
layout: post
title: "Part 3 - Docker for Data Scientists (A Top Skill for 2020)"
date: 2019-11-22 10:30:01
excerpt: "Moving into 2020, three things are clear - Organizations want Data Science, Cloud, and Apps. Here's how Docker plays a part in the essential skills of 2020."
author: "Matt Dancho"
categories: [Business]
tags: [Learn-R, Learn-Business, Docker]
image: 2019-11-22-docker/docker.png
image_preview: 2019-11-22-docker/docker.png
---

<p class="lead">Moving into 2020, three things are clear - Organizations want Data Science, Cloud, and Apps. Here's what's happening and how <strong>Docker</strong> plays a part in the essential skills of 2020.</p>


#### Articles in Series

<div class="pull-right hidden-xs" style="width:50%; margin-left:20px;">
  <img class="img-responsive" src="/assets/2020-01-13-h2o/full_stack_data_science_technologies.jpg"> 
</div>

1. [__Part 1 - 5 Full-Stack Data Science Technologies for 2020 (and Beyond)__](https://www.business-science.io/business/2019/12/09/data-science-technologies.html) 
2. [__Part 2 - AWS Cloud__ ](https://www.business-science.io/business/2019/11/13/data-science-with-aws.html)
3. [__Part 3 - Docker__](https://www.business-science.io/business/2019/11/22/docker-for-data-science.html) __(You Are Here)__
4. [__Part 4 - Git Version Control__](https://www.business-science.io/business/2019/12/09/git-for-apps.html) 
5. [__Part 5 - H2O Automated Machine Learning (AutoML)__](https://www.business-science.io/business/2020/01/13/five-reasons-to-learn-h2o-machine-learning.html) 
6. [__Part 6 - R Shiny vs Tableau (3 Business Application Examples)__](https://www.business-science.io/business/2020/03/09/shiny-vs-tableau.html) 
7. [__\[NEW BOOK\] - The Shiny Production with AWS Book__](https://www.business-science.io/business/2020/01/02/shiny-production-with-aws-docker-git-book.html)

## Changing Trends in Tech Jobs

Indeed, the popular employment-related search engine, released an article this past Tuesday [showing changing trends from 2015 to 2019 in "Technology-Related Job Postings"](https://www.hiringlab.org/2019/11/19/todays-top-tech-skills/). We can see a number of changes in key technologies - One that we are particularly interested in is the 4000% increase in Docker.

![Today's Top Tech Skills](/assets/2019-11-22-docker/indeed_jobs_docker.jpg)

<p class="date text-center">
<a href="https://www.hiringlab.org/2019/11/19/todays-top-tech-skills/" target="_blank">Source: Indeed Hiring Lab.</a>
</p>

## Drivers of Change

There are 3 Key Drivers of changes in technologies:

1. Rise of ___Machine Learning___ (and more generically ___Data Science___) - _Unlock Business Insights_

2. Businesses Shifting to the ___Cloud Services___ versus On-Premise Infrastructure - _Massive Cost Savings and Flexibility Increase_

3. Businesses Shifting to ___Distributed Applications___ versus Ad-Hoc Executive Reports - _Democratize Data and Improve Decision-Making within the Organization_

If you aren't gaining experience in ___data science, cloud, and web applications___, you are risking your future. 

### Machine Learning (Point 1)

Data Science is shifting. We already know the importance of Machine Learning. But a NEW CHANGE is happening. Organizations need distributed data science. This requires a new set of skills - Docker, Git, and Apps. (More on this in a minute).

### Cloud Services (Point 2)

Last week, I released ["Data Science with AWS"](https://www.business-science.io/business/2019/11/13/data-science-with-aws.html). In the article, I spoke about the shift to _Cloud Services_ and the need to learn __AWS (No. 6 on Indeed's Skill Table, 418% Growth)__. I'll reiterate - AWS is my Number 1 skill that you must learn going into 2020. 

Azure (No. 17, 1107% Growth) is in the same boat along with Google Cloud Platform for Data Scientists in Digital Marketing. 

The nice thing about cloud - If you learn one, then you can quickly switch to the others. 

### Distributed Web Applications (Point 3)
Businesses now need Apps + Cloud. I discuss this at length in this YouTube video. 

<br>

<a href="https://www.youtube.com/watch?v=QCL_Z47MZdg"><img src="/assets/2019-11-13-data-science-with-aws/video-thumb.jpg" class="img-responsive"></a>

<p class="text-center small">
    <a href="https://youtu.be/QCL_Z47MZdg" class="btn btn-info btn-md">Watch on YouTube</a> 
    &nbsp;&nbsp;
    <a href="https://speakerdeck.com/mdancho84/r-plus-shiny-plus-aws" class="btn btn-info btn-md">Download the Slides</a> 
</p>

<br>
Let's talk about the BIG CHANGE from the video...


## The Big Change: From 2015 to 2020, apps now essential to business strategy

The landscape of Data Science is changing from reporting to application building:

- __In 2015 - Businesses need reports__ to make better decisions
- __In 2020 - Businesses need apps__ to empower better decision making at all levels of the organization 

This transition is challenging the Data Scientist to learn new technologies to stay relevant...

In fact, it's no longer sufficient to just know machine learning. We also need to know how to __put machine learning into production as quickly as possible__ to meet the business needs. 

To do so, we need to learn from the Programmers the basics of Software Engineering that can help in our quest to __unleash data science at scale and unlock business value.__

## Learning from programmers

Programmers need applications to run no matter where they are deployed, which is the definition of reproducibility. 

The programming community has developed amazing tools that help solve this issue of reproducibility for software applications:

- ___Docker (and DockerHub)___ - Controls the software environment state

- ___Git (and GitHub)___ - Controls the file state

<mark><strong>It turns out that Data Scientists can use these tools <u>to build apps that work.</u></strong></mark>

We'll focus on Docker (and DockerHub), and we'll make a separate article for Git (and GitHub).


## What is Docker?

Let's look at a (Shiny) application to see what Docker does and how it helps.

![Application Internals](/assets/2019-11-22-docker/app_docker_git.jpg)

We can see that application consists of 2 things:

- ___Files___ - The set of instructions for the app. For a Shiny App this includes an app.R file that contains layout instructions, server control instructions, database instructions, etc

- ___Software___ - The code external to your files that your application files depend on. For a Shiny App, this is R, Shiny Server, and any libraries your app uses.

<mark><strong>Docker "locks down" the Software Environment. This means your software is 100% controlled so that your application uses the same software every time.</strong></mark>

## Key terminology

### Dockerfile

A Dockerfile contains the set of instructions to create a Docker Container. Here's an example from my [Shiny Developer with AWS Course](https://university.business-science.io/p/expert-shiny-developer-with-aws-course-ds4b-202a-r/).

![Dockerfile](/assets/2019-11-22-docker/dockerfile.jpg)

<p class="text-center date">Dockerfile - Used to create a Docker Container
<br><a href="https://university.business-science.io/p/expert-shiny-developer-with-aws-course-ds4b-202a-r/"><small>From Shiny Developer with AWS Course</small></a></p>


### Docker Container

__A docker container__ is a stored version of the software environment built - Think of this as a __saved state__ that can be reproduced on any server (or computer).

__Docker Containers are a productivity booster.__ It usually takes 30 minutes or so to build a software environment in Docker, but once built the container can be stored locally or on DockerHub. The Docker Container can then be __installed in minutes__ on a server or computer. 

Without Docker Containers, it would take 30 minutes per server/computer to build an equivalent environment. 

<mark><strong>Key Point:</strong> Docker Containers not only <strong>save the state</strong> of the software environment making apps reproducible, but they also enhance productivity for data scientists trying to meet the ever-changing business needs.</mark>

### DockerHub

__DockerHub__ is a repository for Docker Containers that have been previously built.

You can install these containers on computers or use these Containers as the base for new containers. 

![DockerHub](/assets/2019-11-22-docker/dockerhub.jpg)

<p class="text-center date">DockerHub - Used to share Docker Containers
<br><a href="https://university.business-science.io/p/expert-shiny-developer-with-aws-course-ds4b-202a-r/"><small>From Shiny Developer with AWS Course</small></a></p>


## Real Docker Use Case Example

In [Shiny Developer with AWS](https://university.business-science.io/p/expert-shiny-developer-with-aws-course-ds4b-202a-r/), we use the following application architecture that uses AWS EC2 to create an Ubuntu Linux Server that hosts a Shiny App in the cloud called the Stock Analyzer.  

<img src="/assets/2019-11-13-data-science-with-aws/aws-data-science-application-architecture.jpg" class="img-responsive">
<br>
<p class="text-center date">Data Science Web Application Architecture
<br><a href="https://university.business-science.io/p/expert-shiny-developer-with-aws-course-ds4b-202a-r/"><small>From Shiny Developer with AWS Course</small></a></p>

We use a Dockerfile that is based on `rocker/shiny-verse:latest` version.

We build on top of the "shiny-verse" container to increase the functionality by adding libraries:

- `mongolite` for connecting to NoSQL databases
- `shiny` libraries like `shinyjs`, `shinywidgets` to increase shiny functionality
- `shinyauthr` for authentication

<p class="text-center">
<img class="img-responsive" src="/assets/2019-11-22-docker/dockerfile_zoomed.jpg" style="width:604px;border:none;box-shadow:none;">
</p>

<br>

We then deploy our "Stock Analyzer" application using this Docker Container called `shinyauth`. The application gets hosted on our Amazon AWS `EC2` instance. 

![Dockerfile Zoomed](/assets/2019-11-22-docker/stock_analyzer_aws_deploy.jpg)


<br>

If you are ready to learn how to build and deploy Shiny Applications in the cloud using AWS, then I recommend my [NEW 4-Course R-Track System](https://university.business-science.io/p/4-course-bundle-machine-learning-and-web-applications-r-track-101-102-201-202a/?coupon_code=DS4B15), which includes: 

- Business Analysis with R (Beginner)
- Data Science for Business (Advanced)
- Shiny Web Applications (Intermediate)
- Expert Shiny Developer with AWS (Advanced) - **NEW COURSE!!**

<br>

{% include cta_rtrack.html %}

<br>

I look forward to providing you the best data science for business education. 

Matt Dancho

Founder, Business Science

Lead Data Science Instructor, Business Science University