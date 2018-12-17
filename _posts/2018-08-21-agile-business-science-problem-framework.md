---
layout: post
title: "Agile Framework For Creating An ROI-Driven Data Science Practice"
author: "Favio Vazquez"
date:   2018-08-21 5:47:01
categories: [Business]
tags: [R-Project, R, BSPF, Data Science, AI, Machine Learning, Agile Framework, Project Management, CRISP-DM, DMAIC]
image: bspf_computer.png
---



Data Science is an amazing field of research that is under active development both from the academia and the industry. One of the saddest facts in the real-world is that ___most data science projects in organizations fail___. Here I'll present a new iteration of an ___agile framework___ called [Business Science Problem Framework (Download PDF here)](http://www.business-science.io/bspf.html) to implement data science in a way that enables decision making to follow a systematic process that connects the models you create to ___Return On Investment (ROI)___ and show the value that your improvements bring to the business. The end result is that the BSPF is an agile framework, and we are working to develop a new visualization (BSPF 2.0) that conveys this agility.



## Articles In this Series

- __Agile BSPF Framework__: [Agile Framework For Creating An ROI-Driven Data Science Practice](http://www.business-science.io/business/2018/08/21/agile-business-science-problem-framework.html)

- __BSPF Framework__: [How To Successfully Manage A Data Science Project: The BSPF](http://www.business-science.io/business/2018/06/19/business-science-problem-framework.html)

- __Expected Value Framework__: [3 Reasons You Need To Learn The Expected Value Framework](http://www.business-science.io/business/2018/07/11/expected-value-framework-data-science.html)



## Learning Trajectory

We'll cover a lot of ground related to how one can implement an __Agile Methodology__ for an __ROI-Driven Data Science Practice__. Here are the discussion steps along the way:

- [The Problem Definition](#problem-definition): We'll first define data science and modeling in the context of minimum requirements to meet the business objectives of generating ROI. 

- [Business Science Problem Framework](#bspf): We'll learn about the BSPF, a data science project framework that has __cut the time-to-deliver ROI-generating data science projects in half__.

- [Agility In Data Science](#agility): We'll investigate what agile methods are and how they help in the data science for business process.


__The key to your success as a data scientist is generating ROI. How do you do this?__

<p class="text-center" style="font-size:30px;">
The Business Science Problem Framework! 
</p>



![Business Science Problem Framework](/assets/bspf_computer.png)

<p class="text-center date">
<strong>Business Science Problem Framework (BSPF)</strong> 
</p>

<br>
<hr>

<h2 class="text-center">Learn How To Apply The Business Science Problem Framework</h2>

<p class="text-center">
If you're interested in learning how to apply critical thinking and data science while solving a real-world business problem following an end-to-end data science project, check out <a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B15"><strong>Data Science For Business With R(DS4B 201-R)</strong></a>. Over the course of 10 weeks you will solve an end-to-end Employee Churn data science project following our <strong>systematic Business Science Problem Framework (BSPF)</strong>.
</p>

<p style="text-align:center;">
<a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B15">
<img src="/img/ds4b_201_r_small.png" alt="Data Science For Business With R" style="width:75%;height:75%;">
</a>
</p>

<p class="text-center" style="font-size:30px;">
<a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B15"><strong>Start Learning Today!</strong></a> 
</p>


<hr>
<br>

Now let's learn about this ___agile process___.

## The Problem Definition {#problem-definition}

Doing data science for business is not easy for several reasons. One of them is that most people have a partial definition, or description, of what data science actually is and what it means to be a good data scientist for solving real problems.

### Defining Data Science

Because of that I'll start this article with my definition (or description) of how data science should be defined for a business:

___Data science___ is the resolution to business problems through mathematics, programming and the scientific method that involves the creation of hypotheses, experiments and tests through the analysis of data and the generation of predictive models. It is responsible for transforming these problems into well-posed questions that can also respond to the initial hypothesis in a creative way finding the optimal threshold that maximizes the expected profit or savings. It must also include the effective communication of the results obtained and how the solution adds value to the business.

I'll explain my definition step by step below so stick with me.

___Modeling___ is the process of understanding the "reality", the world around us, but creating a higher level prototype that will describe the things we are seeing, hearing and feeling, but it's a representative thing, not the "actual" or "real" thing. This is what we actually do in science and data science is no exception.

### Minimum Requirements

What I'm saying here is that data science is very much linked to the business, but it is a science in the end. A lot of people can disagree with me in the part that data science is a science. But keep your mind open and read this carefully. I think it could be very useful that we define data science as a science because, if that's the case, every project in data science should be at least:


- __Reproducible__: Necessary for making easy to test others work and analysis.
 
- __Fallible__: Data Science and Science are not looking for the truth, they look for knowledge, so every project can be substituted or improved in the future, no solution is the ultimate solution. 

- __Collaborative__: The data scientist doesn't exists alone, he needs a team (even a virtual team, like collaborating in an open source project), this team will make things possible for creating intelligence and solutions. Collaboration is a big part of science, and data science should not be an exception. 

- __Creative__: Most of what data scientists do is new research, new approaches or takes on different solutions, so their environment should be very creative and easy to work. Creativity is crucial in science, is the only way we can find solutions to hard and complex problems. 

- __Compliant to regulations__: Right now there are a lot of regulations on science, not that much on data science, but there will be more in the future. It is important that the projects we are building can be aware of these different types of regulations so we can create a clean and acceptable solution to the problems. 

If we don't follow those basic principles it would be very hard to conduct a proper data science practice. Data science should be implemented in a way that enables decision making to follow a __systematic process__.

Data science isn't about software, knowing how to program, or being able to read data from different databases. It is about solving problems. An analogy would be saying that physics isn't about calculus, moving objects, algebra; it's about studying nature, understanding it and modeling it. 

> "_Data science isn't about software, knowing how to program, or being able to read data from different databases. It is about solving problems._"

## Business Science Problem Framework (BSPF) {#bspf}

<p style="text-align:center;">
<a href="http://www.business-science.io/bspf.html">
<img src="/img/cheatsheets/bspf.png" alt="Business Science Problem Framework" style="width:75%;height:75%;">
</a>
</p>

<p class="text-center date">
<a href="http://www.business-science.io/bspf.html"><strong>Business Science Problem Framework (BSPF), Download Here</strong></a> 
</p>



### BSPF Results 

Before we dive into the BSPF, let us first explain the __incredible results__ that this methodology has generated. At the end of the day, results are what the organization cares about. Let's put the results first then.

A recent success story is that of [Rodrigo Prado](https://www.linkedin.com/in/rodrigo-prado-90b55522/). Rodrigo is a high-end data science consultant and graduate of the prestigious [University of Columbia Masters of Science in Applied Analytics](http://sps.columbia.edu/applied-analytics/master-of-science-in-applied-analytics). While the program was very good, Rodrigo left with a knowledge gap still present not fully enabling him to connect data science to the business.

> _While the program was very good, Rodrigo left with a knowledge gap still present not fully enabling him to connect data science to the business._

He read an article about the [Business Science Problem Framework](http://www.business-science.io/business/2018/06/19/business-science-problem-framework.html), and immediately signed up for our [Data Science For Business With R (DS4B 201-R) course](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023).

Through his company, [Genesis Partners](https://www.linkedin.com/company/genesis-partnerscl/), Rodrigo has since implemented the BSPF on 3 projects. __According to Rodrigo, the BSPF has cut his time-to-deliver data science projects in half!__

Let's think about this for a minute. Half. That's 50% of the time it used to take to complete a project. This means Rodrigo just doubled his effeciency. If he was generating 10X ROI as a consultant, __he's now generating 20X ROI__ just by implementing our BSPF framework!

If interested, you can listen to his [2-minute testimonial](https://youtu.be/yw5CtGTzIw0).

<iframe width="100%" height="400" src="https://www.youtube.com/embed/yw5CtGTzIw0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


<br>
<hr>

<h2 class="text-center">Experience The Data Science Course That Cut Rodrigo's Time-To-Deliver In Half</h2>

<p class="text-center">
If you're interested in learning how to apply critical thinking and BSPF while solving a real-world business problem following an end-to-end data science project, check out <a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B15"><strong>Data Science For Business With R(DS4B 201-R)</strong></a>. Over the course of 10 weeks you will solve an <strong>end-to-end Employee Churn data science project following our systematic Business Science Problem Framework</strong>.
</p>

<p style="text-align:center;">
<a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B15">
<img src="/img/ds4b_201_r_small.png" alt="Data Science For Business With R" style="width:75%;height:75%;">
</a>
</p>

<p class="text-center" style="font-size:30px;">
<a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B15"><strong>Start Learning Today!</strong></a> 
</p>

<hr>
<br>

### What Is The BSPF?

The __Business Science Problem Framework__ is an agile data science process developed by [Business Science](http://www.business-science.io/). Business Science, founded by [Matt Dancho](https://www.linkedin.com/in/mattdancho/), empowers data scientists by providing software, education, training, and developing the areas of business and finance. It is a proven system conceived afters years of work, trial and error. Business Science says that clients loved the BSPF because it put a clear path forward and they loved it because it systemized their problem-solving method, making results more repeatable. 

Many of the philosophies for creating the framework comes from the writings of Ray Dalio (author of [Principles](https://www.principles.com/)) along with Business Science's experience using the BSPF with clients. Beyond, high level and detailed, it's a proven framework.


Let's start with the principles before going to the BSPF. Take a look at this image:

![Principles Process](/assets/2018-08-21-agile-bspf/principle_process.png)

<p class="text-center date">
<a href="https://www.principles.com/"><strong>Evolution Of An Organization, Principles</strong></a> 
</p>

This is one of the schemas that the author presents us. He tell us that this is the process of actually achieving your goals, and that failure is an important step in the journey. This is an iterative process, meaning that you will have to go through it over and over again; forever. You'll always have new goals and you'll also face new problems, but if you learn from them, by first recognizing them and creating a good design you can solve these problems and achieve your goals.

## Agility in Data Science {#agility}

If we go back to data science, and we apply this to solving business problems, the first thing we have to do is recognize that it has to be an iterative process. Agility is a word for doing that in the IT world, and that's why I'm calling the BSPF an agile framework. 

> _Agility is fundamental to business' ability to successfully build systems in a world where it's difficult to predict the future._
>
>_James Kobielus_

We need agility to adapt. And if we want to go further, and beyond our common sense and intuition, we need to do it in a systematic way and then we can solve complex business problems.

### Manifesto For Agile Data Science

The process of an ___Agile Data Science Workflow___ proposed by Russell Jurney is an amazing way of understanding how and why data science together with agility helps us going beyond, seeing more and solving problems in a creative way. 

We are used to jumping to conclusions really fast, not analyzing every side of things. We are used to seeing what our eyes are seeing and "trusting our gut".

Sadly, the common sense that reigns in our culture is Aristotelian and Medieval (Etudes d'histoire de la pensee scientifique - Alexandre Koyre). That means that __intuition fails a lot of times when trying to understand the world__. Also, this "common sense" comes sometimes with judgement, something that creates a bias in the way we see things.

Going and seeing beyond in this context means going a step forward, putting your judgment, common sense and intuition aside and really analyzing a situation. We should be doing this for everything that happens around us, question ourselves if the things you are doing, thinking and perceiving are actually correct. This is something very close to the Cartesian Doubt.

The [__Manifesto for Agile Data Science__](https://www.oreilly.com/ideas/a-manifesto-for-agile-data-science) leads us to this. Iterating, over and over again, rethinking the business process and needs, experimenting a lot, listening what the data has to say, understanding and encouraging the business to understand that the data's opinion must always be included in product discussions, finding a critical path to solve the problem and then organizing the team around completing it, and going further, letting the models solve the problems, of course using our expertise to help them, but not biasing them.

![The Agile Data Science Manifesto](/assets/2018-08-21-agile-bspf/agile_data_science_manifesto.png)

<p class="text-center date">
<a href="https://www.oreilly.com/ideas/a-manifesto-for-agile-data-science"><strong>The Agile Data Science Manifesto</strong></a> 
</p>

I need to emphasize that this is an agile framework, not that data science is being agile. This is following the words of Dave Thomas one of the creators of the Manifesto for Agile Software Development, 

- You aren't an agile programmer - you're a programmer who programs with agility.
- You don't work on an agile team - your team exhibits agility.
- You don't use agile tools - you use tools that enhance your agility.

I'll add:

- You are not an agile data scientist - you're a data scientist following a framework with agility. 

So after studying the process proposed by Russell and Matt, I found a way of combining them, creating a system that will __skyrocket your productivity__ as a data scientist and adding much more value. I realized that all of the steps that Russell proposed were already a part of the BSPF in some way, I'll make them all clear here. 

### Understanding The Agile Business Science Problem Framework (A-BSPF)

The BSPF is split into a top and bottom section. The top half contains details of what to investigate while the bottom half contains high level stages of the project. The two sections are integrated, meaning they work together to provide a complete program for managing a data science project in a business context. 

The BSPF has seven phases that are detailed with specific actions focused on understanding the problem and tying the results to Return On Investment (ROI), which is what the organization is keenly focused on:

- View The Business As A Machine
- Understand The Drivers
- Measure The Drivers
- Uncover Problems and Opportunities
- Encode Algorithms
- Measure Results
- Report Financial Impact

![Business Science Problem Framework - Top](/assets/2018-06-19_BSPF/bspf_top.PNG)

<p class="text-center date">BSPF - Top</p>

And in the bottom there are the six phases of [CRISP-DM](https://en.wikipedia.org/wiki/Cross-industry_standard_process_for_data_mining) that are high-level steps for any data science problem:

- Business Understanding
- Data Understanding
- Data Preparation
- Modeling
- Evaluation
- Deployment


![Business Science Problem Framework - Bottom](/assets/2018-06-19_BSPF/bspf_bottom.PNG)

<p class="text-center date">BSPF - Bottom</p>

If you follow this agile methodology and framework is much more likely you'll succeed in your practice. 

But what about some of the steps that Russell mentions? 

In his book, Russell talks about something called the "data-value pyramid". It expresses the increasing amount of value created when refining raw data into tables and charts, followed by reports, then predictions, all of which is intended to enable new actions or improve existing ones:

![Data Value Pyramid](/assets/2018-08-21-agile-bspf/data_value_pyramid.png)

<p class="text-center date">
<a href="https://www.oreilly.com/ideas/a-manifesto-for-agile-data-science">Data Value Pyramid</a> 
</p>


But wait! Matt also created a pyramid in his methodology. The "Systematic Decision Making Pyramid":

![Systematic Decision Making Pyramid](/assets/2018-08-21-agile-bspf/systematic_decision_making_pyramid.png)

<p class="text-center date">
<a href="http://www.business-science.io/business/2018/06/19/business-science-problem-framework.html">Systematic Decision Making Pyramid</a> 
</p>

### Agile Data Science Workflow And BSPF Align

If we take a closer look of both pyramids they are actually saying the same things, and have the same hierarchy. 

The data-value pyramid gives structure to our work. The pyramid is something to keep in mind, not a rule to be followed. Sometimes you skip steps, sometimes you work backward, making it an interactive process. And the systematic decision making pyramid tells us that we need to understand the business. And, before we can understand the business, we need to identify the business problem to then being able to achieve systematic decision making, but it is also an interactive process, you'll have to go back and forth sometimes. 

Both frameworks are the same in one way or another, they are both proven systems that comes from years of work related to data, consulting, teaching and more. I say we need to fully understand both for enabling data science to create intelligence through AI. That's a big sentence.


## Looking To The Future

Matt and I are working on a _new visualization_ that accurately shows the agility of the BSPF. __Look for the BSPF 2.0 coming soon!__ 

## Next Steps (Transform Your Abilities) {#next-steps}

I joined Business Science a little while ago for helping create courses and content for their University. The first course so far, [Data Science For Business With R (DS4B 201-R) Course](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B15) has a student satisfaction rating of 9.0/10, and students are learning how to apply data science to business using R code, the __Business Science Problem Framework__, and more. I'm creating the Python counterpart course with the __Agile Data Science Framework__ right now so if you are interested in that please let me know! 


<br>
<hr>

<h2 class="text-center">Data Science For Business With R (DS4B 201-R)</h2>

<p class="text-center">
Learn everything you need to know to complete a real-world, end-to-end data science project with the R programming language. Transform your abilities in 10 weeks. 
</p>

<p class="text-center" style="font-size:30px;">
<a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B15"><strong>Get Started Today!</strong></a> 
</p>

<hr>
<br>

See below for our __course roadmap__ including information about my forthcoming Data Science For Business with Python + Spark (DS4B 201-P) course!  

## About The Author

[Favio Vazquez](https://www.linkedin.com/in/faviovazquez/) is Principal Data Scientist at OXXO, and a data science influencer on LinkedIn. A physicist by trade, Favio has transitioned into data science and has since mastered Python, Spark, and R. Favio has recently joined the Business Science team and is building our first ever Python and Spark course (equivalent to Data Science For Business With R). Please connect with him and let him know if you are interested in taking __Data Science For Business With Python (DS4B 201-P)__ coming soon!

![Python Track](/img/python_track.png)

<p class="text-center date">
Python Track, Coming In Q4 2018
</p>

## Course Roadmap

Here is the lineup of courses!

### Data Science For Business With R (DS4B 201-R): Available Now!

Over the course of 10 weeks, we teach you how to solve an end-to-end data science project using the __Business Science Problem Framework__. Available now!


<iframe width="100%" height="400px" src="https://www.youtube.com/embed/lyWxrhaBJ38" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<p class="text-center date">Transform your abilities by solving a 10-week end-to-end data science project using the Business Science Problem Framework</p>




<p class="text-center" style="font-size:30px;">
<a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B15"><strong>Get Started Today!</strong></a> 
</p>



### Building A Shiny Application (DS4B 301-R): Coming In Q3!

Our next course teaches you how to take the H2O Model, LIME explanation results, and the recommendation algorithm you develop in DS4B 201-R and turn it into a `Shiny` Web Application that predicts employee attrition! Coming in Q3 2018.

![DS4B 301-R Shiny Application: Employee Prediction](/img/hr_301_app.png) 
<p class="text-center date">Shiny App That Predicts Attrition and Recommends Management Strategies, Taught in DS4B 301-R (Building A Shiny Web App)</p> 


[Kelly O'Briant](https://www.linkedin.com/in/kellyobriant/) is lead developer for the Shiny App Course coming soon. She's a brilliant software engineer / data scientist that knows how to make a great looking and performing Shiny app.

<p class="text-center" style="font-size:30px;">
<a href="https://university.business-science.io"><strong>Sign Up! Coming Q3!</strong></a> 
</p>

### Data Science For Business With Python (DS4B 201-P): Coming In Q4!

Did we mention with have a __DS4B Python Course coming__? Well we do! Coming in Q4 2018.

The problem changes: Customer Churn! The tools will be H2O, LIME, and a host of other tools implemented in Python + Spark.  

![Python Track](/img/python_track.png)

<p class="text-center date">Python Track: Data Science For Business With Python And Spark</p>

[Favio Vazquez](https://www.linkedin.com/in/faviovazquez/), Principle Data Scientist at OXXO, is building the Python + Spark equivalent of DS4B 201-R. He's so talented knowing Python, Spark, and R, along with a host of other data science tools.

<p class="text-center" style="font-size:30px;">
<a href="https://university.business-science.io"><strong>Sign Up! Coming Q4!</strong></a> 
</p>

## Don't Miss A Beat

* Sign up for the [Business Science "5 Topic Friday" Newsletter!](https://mailchi.mp/business-science/data-science-five-topic-friday) 
* Get started with [Business Science University](https://university.business-science.io/) to learn how to solve real-world data science problems from Business Science
* Check out our [Open Source Software](https://www.business-science.io/software.html)

<span data-sumome-listbuilder-embed-id="8944080265e0a41a6249cd11ea3299d46ee953ea5bc9a1cd5635069be5bf0987"></span>

## Connect With Business Science <a class="anchor" id="social"></a>

If you like our software (`anomalize`, `tidyquant`, `tibbletime`, `timetk`, and `sweep`), our courses, and our company, you can connect with us:

* [GitHub](https://github.com/business-science)
* [LinkedIn](https://www.linkedin.com/company/business.science)
* [__bizScienc__ on twitter](https://twitter.com/bizScienc)
* [Facebook](https://www.facebook.com/Business-Science-LLC-754699134699054/)
