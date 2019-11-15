---
layout: post
title: "Data Science with AWS"
date: 2019-11-13 05:00:00
excerpt: "Organizations depend on the Data Science team to build distributed applications that solve business needs. AWS provides an infrastructure to host data science products for stakeholder to access."
author: "Matt Dancho"
categories: [Business]
tags: [Learn-R]
image: 2019-11-13-data-science-with-aws/amazon-web-services.jpg
image_preview: 2019-11-13-data-science-with-aws/amazon-web-services-preview.jpg
---


If you follow the news, you've seen that articles like ["Microsoft snags hotly contested $10 billion defense contract, beating out Amazon."](https://www.cnbc.com/2019/10/25/microsoft-wins-major-defense-cloud-contract-beating-out-amazon.html)

The CNBC article describes the hotly contested "JEDI" (Joint Enterprise Defense Infrastructure) contract, the largest Cloud Contract ever.

[According to The Verge](https://www.theverge.com/2019/10/25/20700698/microsoft-pentagon-contract-jedi-cloud-amazon-details), "the contract will provide the Pentagon with cloud services for basic storage and power all the way up to artificial intelligence processing, machine learning, and the ability to process mission-critical workloads."

Don't feel bad about Amazon losing the contract to Microsoft. Amazon already has the CIA and the majority of cloud service contracts in enterprises. 

The point I'm making is not that AWS is the loser and you should learn Microsoft Azure, but rather that no matter where you go, Government or Enterprise, the cloud infrastructure is going to be an important part of what we do as Data Scientists - and you will need to know AWS, Azure, and possibly other cloud service providers too.

Here's what you need to know about AWS (and Cloud in general):

<br>
<hr>

## The main cloud players

The 3 main cloud players are:

- **Amazon Web Services (AWS)** - The market leader in enterprise & beyond; Tools have grown exponentially; Full-featured & popular with coders, app developers, and IT professionals

- **Microsoft Azure** - 2nd in Popularity; Popular with Enterprise, offers "hybrid" cloud that interoperates with customer data centers

- **Google Cloud Platform (GCP)** - Popular with Digital Marketing because of integration with Google Analytics

<img src="/assets/2019-11-13-data-science-with-aws/enterprise-cloud-public-adoption.png" class="img-responsive">


## AWS vs Azure Comparison

The smart choice is to learn one of the cloud service providers because switching is relatively simple - when you learn one cloud solution, you learn them all.

Here's a **switching guide** from Microsoft [Azure vs AWS Cloud Comparison](https://docs.microsoft.com/en-us/azure/architecture/aws-professional/services). The major services in AWS are also available in Azure. The same goes for GCP if Google is your preference. 


<strong>Key Point</strong> - Learn how to use one cloud service, and you'll be able to switch back and forth no matter what cloud service provider your organization standardizes on - AWS, Azure, or GCP.

<img src="/assets/2019-11-13-data-science-with-aws/Switching-Guide-Amazon-AWS-Microsoft-Azure.jpg" class="img-responsive">
<p class="text-center small">Switching Guide - Amazon AWS to Microsoft Azure</p>


## Which services are important to data scientists?

AWS has a lot of services to choose from. Here's what I recommend (and teach several of these in my [NEW  Shiny Developer with AWS Course](https://university.business-science.io/p/expert-shiny-developer-with-aws-course-ds4b-202a-r/?coupon_code=DS4B15)). 

<img src="/assets/2019-11-13-data-science-with-aws/aws-toolkit.png" class="img-responsive">
<p class="text-center small">AWS ToolKit - Overwhelming to say the least!</p>

### Here are the key tools to have on your Data Science radar:

**Amazon EC2 - Elastic Compute** - Taught in 202A Course

EC stands for "Elastic Compute" - these are virtual servers that you can spin up and rent. You can set the servers up however you want, and you can scale them up or down (to provide more juice) as needed. 

**Amazon S3 - Simple Storage Service**

S3 is like Dropbox or Google Drive, but at scale and designed to work with applications rather than people. You store files in S3 Buckets (root folder). You interface with S3 through R ([aws.s3](https://github.com/cloudyr/aws.s3)) or Python ([boto3](https://aws.amazon.com/sdk-for-python/)). 

**Databases**

- **Amazon RDS** - Relational (SQL) Databases that are pre-configured to run on EC2 Servers
- **Redshift** - Petabyte Scale Data Warehouse
- **DynamoDB** - NoSQL (similar to MongoDB Atlas, which is taught in 202A Course)


## Building Apps for Data Scientists

Organizations depend on the Data Science team to **build distributed applications that solve business needs.**

With enterprises shifting towards cloud services, I created the [Shiny Developer with AWS Course (NEW)](https://university.business-science.io/p/expert-shiny-developer-with-aws-course-ds4b-202a-r/?coupon_code=DS4B15) to teach data scientists how to build scalable web applications hosted on **Amazon EC2 - Elastic Compute.**  

<img src="/assets/2019-11-13-data-science-with-aws/aws-data-science-application-architecture.jpg" class="img-responsive">

<br>

The Shiny Developer with AWS Course uses an end-to-end web app project to teach the core skills of app development for data scientists. The final application architecture includes:

- **Amazon EC2** - Used to deploy the Web Application
- **Shiny Server** - Runs Shiny on Amazon EC2
- **MongoDB Atlas** - A cloud NoSQL database equivalent to DynamoDB but free of cost up to 512 MB. 

<br>

<a href="https://www.youtube.com/watch?v=QCL_Z47MZdg"><img src="/assets/2019-11-13-data-science-with-aws/video-thumb.jpg" class="img-responsive"></a>

<p class="text-center small">
    <a href="https://youtu.be/QCL_Z47MZdg" class="btn btn-info btn-md">Watch on YouTube</a> 
    &nbsp;&nbsp;
    <a href="https://speakerdeck.com/mdancho84/r-plus-shiny-plus-aws" class="btn btn-info btn-md">Download the Slides</a> 
</p>

<br>

If you are ready to Learn Data Science, How to Build Web Applications, and Cloud Computing, then I recommend my [NEW 4-Course R-Track System](https://university.business-science.io/p/4-course-bundle-machine-learning-and-web-applications-r-track-101-102-201-202a/?coupon_code=DS4B15), which includes: 

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