---
layout: post
title: "Data Science for Business: 3 Reasons Why You Need the Expected Value Framework"
excerpt: "The Expected Value Framework connects the machine learning model to ROI. In data science for business, it is critical to quantify the  ROI of data science."
author: "Matt Dancho"
date:   2018-07-11 04:45:01
categories: [Business]
tags: [R-Project, R, Expected Value, Employee Turnover, Human Resources, Churn, People Analytics, HR Analytics]
image: 2018-07-11-expected-value/threshold_optimization.png
---



One of the most difficult and most critical parts of implementing data science in business is __quantifying the return-on-investment or ROI__. As a data scientist in an organization, it's of chief importance to show the value that your improvements bring. In this article, we highlight __three reasons you need to learn the Expected Value Framework, a framework that connects the machine learning classification model to ROI__. Further, we'll point you to a new video we released on the [Expected Value Framework: Modeling Employee Churn With H2O](https://youtu.be/amGLWN4hmY0) that was recently taught as part of our flagship course: [Data Science For Business (DS4B 201)](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15). The video serves as an overview of the steps involved in calculating ROI from reducing employee churn with H2O, tying the key H2O functions to the process. Last, we'll go over some __Expected Value Framework FAQ's__ that are commonly asked in relation to applying Expected Value to machine learning classification problems in business. 

## Articles In this Series

- __Agile BSPF Framework__: [Agile Framework For Creating An ROI-Driven Data Science Practice](http://www.business-science.io/business/2018/08/21/agile-business-science-problem-framework.html)

- __BSPF Framework__: [How To Successfully Manage A Data Science Project: The BSPF](http://www.business-science.io/business/2018/06/19/business-science-problem-framework.html)

- __Expected Value Framework__: [3 Reasons You Need To Learn The Expected Value Framework](http://www.business-science.io/business/2018/07/11/expected-value-framework-data-science.html)


## Learning Trajectory

We'll touch on the following Expected Value Framework topics in this article: 

* [3 Reasons You Need To Learn The Expected Value Framework](#benefits)

* [YouTube Expected Value Framework Overview](#youtube)

* [Frequently Asked Questions (FAQs)](#faqs)


Alright, let's get started!

<hr>

<h2 class="text-center">Get The Best Resources In Data Science. Every Friday!</h2>

<p class="text-center">
Sign up for our free <strong>"5 Topic Friday" Newsletter</strong>. Every week, I'll send you the five coolest topics in data science for business that I've found that week. These could be new R packages, free books, or just some fun to end the week on. 
</p>

<p class="text-center" style="font-size:30px;">
<a href="https://mailchi.mp/business-science/data-science-five-topic-friday"><strong>Sign Up For Five-Topic-Friday!</strong></a> 
</p>

<hr>

## 3 Reasons You Need To Learn The Expected Value Framework <a class="anchor" id="benefits"></a>

Here are the 3 reasons you need to know about Expected Value if you want to tie data science to ROI for a machine learning classifier. We'll use examples from the [DS4B 201 course](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15) that are related to employee churn (also called employee turnover or employee attrition).

### Reason #1: We Can Avoid The Problem With Max F1


> _The problem with machine learning classification is that most data scientists use the __threshold that maximizes F1__ as the classification threshold._

The problem with machine learning classification is that most data scientists use the __threshold that maximizes F1__ as the classification threshold. Using the threshold that maximizes F1 is the default for most machine learning classification algorithms. For many problems outside of the business domain this is OK. However, for business problems, this is rarely the best choice. 

For those that are wondering [__what the threshold at max F1 is__](https://en.wikipedia.org/wiki/F1_score), it's the threshold that harmonically balances the precision and recall (in other words, it optimally aims to reduce both the false positives and the false negatives finding a threshold that achieves a relative balance). The problem is that, in business, the costs associated with false positives (Type 1 Errors) and false negatives (Type 2 Errors) are _rarely_ equal. In fact, in many cases false negatives are much more costly ( by a factor of 3 to 1 or more!).

#### Example: Cost of Type 1 And Type 2 Errors For Employee Attrition

As an example, let's focus on the cost difference between Type 1 (false positives) and Type 2 (false negatives) in an employee attrition problem. Say we are considering a mandatory overtime reduction because saw that employees flagged as working overtime are 5X more likely to quit. We develop a prediction algorithm using H2O Automated Machine Learning and then run our LIME algorithm to develop explanations at the employee level. The LIME results confirm our suspicion. Overtime is a key feature supporting Employee Attrition. 

![Expected Value Of Churn](/assets/2018-07-11-expected-value/ev_churn.png)

<p class="text-center date">Calculating Expected Attrition Cost From H2O + LIME Results</p>

We develop a proposal to reduce overtime using our H2O classification model, which by default uses the threshold that maximizes F1 (treats Type 1 and Type 2 errors equally). We then begin targeting people for overtime reduction. We end up misclassifying people that leave as stay (Type 2 error) at roughly the same rate as we misclassify people that stay as leave (Type 1 error). The cost of overtime reduction for an employee is estimated at 30% of the lost productivity if the employee quits. 

__Here lies the problem: The cost of reducing the overtime incorrectly for some one that stays is 30% of missing the opportunity to reduce overtime for an employee incorrectly predicted to stay when they leave. In other words, Type 2 Error is 3X more costly than Type 1 Error, yet we are treating them the same!__

> "Type 2 Error is 3X more costly than Type 1 Error, yet we are treating them the same!"

Because of this, the ___optimal threshold for business problems___ is almost always less than the F1 threshold. This leads us to our second reason you need to know the Expected Value Framework. 

### Reason #2: We Can Maximize Expected Profit Using Threshold Optimization

When we have a calculation to determine the expected value using business costs, we can perform the calculation iteratively to find the optimal threshold that __maximizes the expected profit or savings of the business problem__. By iteratively calculating the savings generated at different thresholds, we can see which threshold optimizes the targeting approach. 

In the example below, we can see in the threshold optimization results that the maximum savings (\$546K) occurs at a threshold of 0.149, which is __16% more savings__ than the savings at threshold at max F1 (\$470K). It's worth mentioning that the threshold that maximizes F1 was 0.280, and that for a test set containing 15% of the total population it cost \$76K due to being sub-optimal (\$546K - \$470K). __Extending this inefficiency to the full population (train + test data), this is a missed opportunity of \$500K annually!__

![Threshold Optimization Results](/assets/2018-07-11-expected-value/threshold_optimization.png)

<p class="text-center date">Threshold Optimization Results Results in 16% Benefit for A Test Set Containing 15% Of Total Population, Extending To Full Set is $500K Savings</p>

The Expected Value Framework enables us to find the optimal threshold that accounts for the business costs, thus weighting Type 2 Errors appropriately. As shown, this can result in huge savings over the F1.

> _The Expected Value Framework enables us to find the optimal threshold that accounts for the business costs, thus weighting Type 2 Errors appropriately._

Ok, now we know we need to use Expected Value Framework. But it's worth mentioning that the model we just built using H2O is not reality. 

Wait, what?!?!

Here's what I mean: The model is based on a number of assumptions including the average overtime percentage, the anticipated net profit per employee, and so on. The assumptions are imperfect. This leads us to the third reason you need to learn the Expected Value Framework.

### Reason #3: We Can Test Variability In Assumptions And Its Effect On Expected Profit

Let's face it, we don't know what the future will bring, and we need to put our assumptions in check. This is exactly what the third benefit enables: Sensitivity Analysis, or testing the effect of model assumptions on expected profit (or savings).

In the human resources example below, we tested for a range of values _average overtime percentage_ and _net revenue per employee_ because our estimates for the future may be off. In the __Sensitivity Analysis Results__ shown below, we can see in the profitability heat map that as long as the average overtime percentage is less than or equal to 25%, implementing a targeted overtime policy saves the organization money.

![Sensitivity Analysis Results](/assets/2018-07-11-expected-value/sensitivity_analysis.png)
<p class="text-center date">Sensitivity Analysis Results (Profitability Heat Map)</p>

Wow! Not only can we test for the optimal threshold that maximizes the business case, we can use expected value to test for a range of inputs that are variable from year to year and person to person. This is huge for business analysis!



<hr>

<h2 class="text-center">Interested in Learning The Expected Value Framework For Business?</h2>

<p class="text-center">
If you're interested in learning how to apply the Expected Value Framework using R Programming, we teach it in Chapters 7 and 8 of <strong>Data Science For Business (DS4B 201)</strong> as part of our <strong>end-to-end Employee Churn business data science project</strong>.
</p>

<p class="text-center" style="font-size:30px;">
<a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15"><strong>Get Started Today!</strong></a> 
</p>

<hr>

## YouTube Expected Value Framework Overview <a class="anchor" id="youtube"></a>

Here's a 20-minute tutorial on the Expected Value Framework that applies to the [Data Science For Business (DS4B 201)](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15) course where we use __H2O Automated Machine Learning__ to develop high performance models identifying those likely to leave and then the expected value framework to calculate the savings due to various policy changes.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/amGLWN4hmY0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<hr>

## FAQS: Expected Value Framework <a class="anchor" id="faqs"></a>

The Expected Value Framework can be confusing and there's a lot to learn. Here are a few of the most frequently asked questions related to applying the EVF to machine learning classification problems in business.

### FAQ 1. What Is Expected Value?

Expected value is a way of assigning a value to a decision using the probability of it’s occurrence. We can do this for almost any decision. 

#### Example: Is A Face-To-Face Meeting Warranted?

Suppose you work for a company that makes high tech equipment. Your company has received a quote for a project estimated at \$1M in gross profit. The downside is that your competition is preferred and 99% likely to get the award. A face-to-face meeting will cost your organization \$5,000 for travel costs, time to develop a professional quotation, and time and materials involved in the sales meeting. Should you take the meeting or no-quote the project?

![High Tech Manufacturer](/assets/2018-07-11-expected-value/chip.jpg)

<p class="text-center date">High Tech Semiconductor Manufacturer</p>

This problem is an expected value problem. We can assign a value to the meeting. We know that the competition is 99% likely to win, but we still have a 1% shot. Is it worth it? 

Applying expected value, we multiply the probability of a win, which is 1%, by the profit of the win, which is \$1M dollars. This totals \$10,000 dollars. This is the expected benefit of the decision excluding any costs. If our total spend for the face-to-face meeting and quotation process is \$5000, then it makes sense to take the meeting because it’s lower than \$10,000 dollars, or the expected benefit.  

### FAQ 2. What Is The Expected Value Framework?

The __Expected Value Framework__ is way to apply expected value to a classification model. Essentially it connects a machine learning classification model to ROI for the business. It enables us to combine:

1. The __threshold__,
2. Knowledge of __costs and benefits__, and 
3. The confusion matrix converted to __expected error rates__ to account for the presence of false positives and false negatives. 

We can use this combination to target based on __postive class probability__ (think employee flight risk quantified as a probability) to gain even greater expected savings than an “all-or-none” approach without the framework. 


![Expected Value Framework](/assets/2018-07-11-expected-value/expected_value_framework.png)

<p class="text-center date">Source: <a href="https://www.amazon.com/Data-Science-Business-Data-Analytic-Thinking-ebook/dp/B00E6EQ3X4">Data Science for Business by Foster Provost & Tom Fawcett
</a></p>

### FAQ 3. What Is The Threshold?

It's the dividing line that we (the data scientist) select between which values for the __positive class probability__ (Yes in the example shown below) we convert to a positive versus a negative. If we choose a threshold (say 0.30), only one observation meets this criteria.  

![Class Probability](/assets/2018-07-11-expected-value/class_probability.png)
<p class="text-center date">Class Probabilities</p>


### FAQ 4: What Are The Expected Rates?


The confusion matrix results can be converted to expected rates through a process called normalization. The "Actual Negative" and "Actual Positive" results are grouped and then converted to probabilities. The __expected rates__ are then probabilities of correctly predicting an Actual value. 



![Expected Rates](/assets/2018-07-11-expected-value/expected_rates.png)
<p class="text-center date">Expected Rates</p>

### FAQ 5: What Is The Cost-Benefit Matrix?

The __cost / benefit matrix__ is the final piece needed for the Expected Value Framework. We develop this using our intuition about the problem. This is the most difficult part because we need to apply critical thinking to the business problem and the methodology we intend to use when coding the problem. 

For the Employee Churn problem, one way to think of the cost benefit is analyzing two states: an initial state (baseline) and a new state (after a policy change to reduce overtime). We'll use an employee named Maggie from the DS4B 201 course.

#### Initial State: Baseline With Allowing Overtime For Maggie

First, we’ll look at the initial state. In this scenario, Maggie’s probability of leaving is 15%, and she has a cost of attrition of \$167K. The cost of a policy change is zero because no policy change is implemented in the baseline case. There are four scenarios we need to account for with probabilities of their own:

* The cases of __true positives__ and __true negatives__ when the algorithm predicts correctly
* And the cases of __false positives__ and __false negatives__ when the algorithm predicts incorrectly. 

The cost of each scenario is what we are concerned with. 

![Initial State: Allowing Overtime](/assets/2018-07-11-expected-value/cb_initial.png)

<p class="text-center date">Cost-Benefit Matrix: Initial State (Baseline)</p>

Going through a cost-benefit analysis, we can address each of these costs:

* First is true negatives. If Maggie stays, the cost associated with her staying is nothing.
* Second is true positives. If Maggie leaves, the cost associated with her leaving is \$167K, which is her attrition cost. 
* Third, is false positives. If Maggie was predicted to leave, but actually stays, the cost associated with this scenario is nothing. We did not implement a policy change for the baseline so we don’t have any costs.
* Fourth, is false negatives. If Maggie leaves but was predicted to stay, we lose her attrition cost. 

The expected cost associated with her leaving is \$25K


#### New State: Targeting Maggie For Overtime Reduction

Let’s propose a new state, one that eliminates overtime for Maggie. 

In this scenario, Maggie’s probability of leaving drops to 3%. Her cost of attrition is the same, but now we are expecting a higher cost of policy change than we originally anticipated. __The cost of the policy change in this scenario is 20% of her attrition cost, meaning she’s working approximately 20% over time. Should we make the policy change?__

![New State: No Overtime Allowed](/assets/2018-07-11-expected-value/cb_new.png)

Like the initial state, there are four scenarios we need to account for with probabilities of their own

* First is true negatives. If Maggie stays, the cost associated with her staying is 20% of her attrition cost, or \$33K.
* Second is true positives. If Maggie leaves, the cost associated with her leaving is \$167K, which is her attrition cost plus the \$33K policy change cost for reducing her overtime. This totals \$200K.
* Third, is false positives. If Maggie was predicted to leave, but actually stays, the cost associated with this scenario is \$33K because she was targeted. 
* Fourth, is false negatives. If Maggie leaves but was predicted to stay, we lose her attrition cost plus the cost of targeting her, which total \$200K

The expected cost is \$38K for this scenario

#### Expected Savings (Benefit Of Expected Value Framework)


At an overtime percentage of 20%, the savings is __(negative) -\$13K__ versus the baseline. Therefore, we should _not_ reduce Maggie’s over time. 


__This is the benefit of using Expected Value. Since the model predicts Maggie having only a 15% risk of leaving when working overtime, she is not a high flight risk. We can use the model to target people that are much higher risk to retain.__ 



## Next Steps: Take The DS4B 201 Course!

If interested in learning more, definitely check out [__Data Science For Business (DS4B 201)__](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15). In 10 weeks, the course covers all of the steps to solve the employee turnover problem with H2O in an integrated fashion. 

The students love it. Here's a comment we just received on Sunday morning from one of our students, [Siddhartha Choudhury, Data Architect at Accenture](https://www.linkedin.com/in/siddhartha-choudhury-715524100/). 

![Testimonial](/assets/2018-07-11-expected-value/testimonial.png)


> _"To be honest, this course is the best example of an end to end project I have seen from business understanding to communication."_
>
> Siddhartha Choudhury, Data Architect at Accenture

See for yourself why our students have rated [Data Science For Business (DS4B 201)](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15) a 9.0 of 10.0 for Course Satisfaction!

<p class="text-center" style="font-size:30px;"><a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15">
Get Started Today!
</a></p>

## Learning More

Check out our other articles on Data Science For Business!

* [How To Successfully Manage A Data Science Project For Business: The Business Science Problem Framework](http://www.business-science.io/business/2018/06/19/business-science-problem-framework.html)

* [HR Analytics: Using Machine Learning To Predict Employee Turnover](http://www.business-science.io/business/2017/09/18/hr_employee_attrition.html)

* [Data Science For Business Tutorial: Using Machine Learning With LIME To Understand Employee Churn](http://www.business-science.io/business/2018/06/25/lime-local-feature-interpretation.html)

* [Customer Analytics: Using Deep Learning With Keras To Predict Customer Churn](http://www.business-science.io/business/2017/11/28/customer_churn_analysis_keras.html)

* [Sales Analytics: How To Use Machine Learning To Predict And Optimize Product Backorders](http://www.business-science.io/business/2017/10/16/sales_backorder_prediction.html)



## Business Science University  <a class="anchor" id="bsu"></a>

[Business Science University](https://university.business-science.io/) is a revolutionary new online platform that __get's you results fast__. 

<iframe width="100%" height="400" src="https://www.youtube.com/embed/dl6V3122IkI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Why learn from [Business Science University](https://university.business-science.io/)? __You could spend years trying to learn all of the skills required to confidently apply Data Science For Business (DS4B)__. Or you can take the first course in our Virtual Workshop, [__Data Science For Business (DS4B 201)__](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15). In 10 weeks, you'll learn:

- A 100% ROI-driven Methodology - Everything we teach is to maximize ROI.

- A clear, systematic plan that we've successfully used with clients

- Critical thinking skills necessary to solve problems

- Advanced technology: _H2O Automated Machine Learning__

- How to do 95% of the skills you will need to use when wrangling data, investigating data, building high-performance models, explaining the models, evaluating the models, and building tools with the models

 
You can spend years learning this information or in 10 weeks (one chapter per week pace). Get started today!

<p class="text-center" style="font-size:30px;"><a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15">
Sign Up Now!
</a></p>

### DS4B Virtual Workshop: Predicting Employee Attrition <a class="anchor" id="vw"></a>

Did you know that __an organization that loses 200 high performing employees per year is essentially losing $15M/year in lost productivity__? Many organizations don't realize this because it's an indirect cost. It goes unnoticed. What if you could use data science to predict and explain turnover in a way that managers could make better decisions and executives would see results? You will learn the tools to do so in our Virtual Workshop. Here's an example of a Shiny app you will create.

<p class="text-center" style="font-size:30px;"><a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15">
Get Started Today!
</a></p>


![HR 301 Shiny Application: Employee Prediction](/img/hr_301_app.png) 
<p class="text-center date">Shiny App That Predicts Attrition and Recommends Management Strategies, Taught in HR 301</p> 

<span data-sumome-listbuilder-embed-id="1e13d987ad901ab4571b6d92bb2ab8a2230c397b886c1fd49eba5392ed5c88cb"></span>

Our first __Data Science For Business Virtual Workshop__ teaches you how to solve this employee attrition problem in four courses that are fully integrated:

* [DS4B 201: Predicting Employee Attrition with `h2o` and `lime`](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15)
* DS4B 301 (Coming Soon): Building A `Shiny` Web Application
* DS4B 302 (Coming Soon): Data Communication With `RMarkdown` Reports and Presentations
* DS4B 303 (Coming Soon): Building An R Package For Your Organization, `tidyattrition`

The Virtual Workshop is __code intensive (like these articles)__ but also teaches you fundamentals of data science consulting including CRISP-DM and the Business Science Problem Framework and many data science tools in an integrated fashion. __The content bridges the gap between data science and the business, making you even more effective and improving your organization in the process.__

Here's what one of our students, [Jason Aizkalns](https://www.linkedin.com/in/jasonaizkalns/), Data Science Lead at Saint-Gobain had to say:

> _"In an increasingly crowded data science education space, Matt and the Business Science University team have found a way to differentiate their product offering in a compelling way. BSU offers a unique perspective and supplies you with the materials, knowledge, and frameworks to close the gap between just “doing data science” and providing/creating value for the business. Students will learn how to formulate their insights with a value-creation / ROI-first mindset which is critical to the success of any data science project/initiative in the “real world”. Not only do students work a business problem end-to-end, but the icing on the cake is “peer programming” with Matt, albeit virtually, who codes clean, leverages best practices + a good mix of packages, and talks you through the why behind his coding decisions – all of which lead to a solid foundation and better habit formation for the student."_
>
> Jason Aizkalns, Data Science Lead at Saint-Gobain

<p class="text-center" style="font-size:30px;"><a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15">
Get Started Today!
</a></p>

## Don't Miss A Beat

<span data-sumome-listbuilder-embed-id="8944080265e0a41a6249cd11ea3299d46ee953ea5bc9a1cd5635069be5bf0987"></span>

* Sign up for the [Business Science blog](http://www.business-science.io/blog/index.html) to stay updated
* Get started with [Business Science University](https://university.business-science.io/) to learn how to solve real-world data science problems from Business Science
* Check out our [Open Source Software](http://www.business-science.io/software.html)


## Connect With Business Science <a class="anchor" id="social"></a>

If you like our software (`anomalize`, `tidyquant`, `tibbletime`, `timetk`, and `sweep`), our courses, and our company, you can connect with us:

* [__business-science__ on GitHub](https://github.com/business-science)
* [__Business Science, LLC__ on LinkedIn](https://www.linkedin.com/company/business.science)
* [__bizScienc__ on twitter](https://twitter.com/bizScienc)
* [__Business Science, LLC__ on Facebook](https://www.facebook.com/Business-Science-LLC-754699134699054/)
