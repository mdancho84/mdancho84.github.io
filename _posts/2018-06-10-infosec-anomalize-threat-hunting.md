---
layout: post
title: "Information Security: Anomaly Detection and Threat Hunting with Anomalize"
author: "Russ McRee"
categories: [Business]
tags: [R-Project, R, InfoSec, Anomaly Detection, Time Series, anomalize, tibbletime]
image: 2018-06-10-infosec-anomalize/security_event_anomalies.png
---




[Information Security (InfoSec)](https://en.wikipedia.org/wiki/Information_security) is critical to a business. For those new to __InfoSec, it is the state of being protected against the unauthorized use of information, especially electronic data. A single malicious threat can cause massive damage to a firm, large or small.__ It's this reason when I (Matt Dancho) saw [Russ McRee's](https://twitter.com/holisticinfosec) article, ["Anomaly Detection & Threat Hunting with Anomalize"](https://holisticinfosec.blogspot.com/2018/06/toolsmith-133-anomaly-detection-threat.html), that I asked him to repost on the [Business Science blog](http://www.business-science.io/blog/index.html). In his article, Russ speaks to use of our new R package, `anomalize`, as a way to detect threats (aka __"threat hunting"__). Russ is Group Program Manager of the [Blue Team](https://danielmiessler.com/study/red-blue-purple-teams/) (the internal security team that defends against real attackers) for Microsoft’s Windows and Devices Group (WDG), now part of the Cloud and AI (C+AI) organization. He writes [toolsmith](https://holisticinfosec.blogspot.com/), a monthly column for information security practitioners, and has written for other publications including Information Security, (IN)SECURE, SysAdmin, and Linux Magazine. __The data Russ routinely deals with is massive in scale__: He processes [security event telemetry](https://en.wikipedia.org/wiki/Telemetry) of all types (operating systems, network, applications, service layer) for all of Windows, Xbox, the Universal Store (transactions/purchases), and a few others. Billions of events in short order.

<span data-sumome-listbuilder-embed-id="6cf8523a01e2faac60392073d460d72402c5971ce4821a8a8e81b28cde43f056"></span>

## Learning Trajectory

This is a great article from __master in information security, Russ McCree__. You'll learn how Russ is using our new package for time series anomaly detection, `anomalize`, within his Blue Team (internal thread-defending team) work at Microsoft. He provides real-world examples of "threat hunting", or the act of identifying malicious attacks on servers and how `anomalize` can help to _algorithmically_ identify threats. Specifically, Russ shows you how to detect anomalies in security event logs as shown below.

![Security Event Log Anomalies](/assets/2018-06-10-infosec-anomalize/security_event_anomalies.png)




## Threat Hunting With Anomalize 

> By Russ McCree, Group Program Manager of Microsoft's Windows and Devices Group

When, in [October](https://holisticinfosec.blogspot.com/2017/10/toolsmith-128-dfir-redefined-deeper.html) and [November](https://holisticinfosec.blogspot.com/2017/11/toolsmith-129-dfir-redefined-deeper.html)'s [toolsmith](https://holisticinfosec.blogspot.com/) posts, I (Russ McRee) redefined _DFIR_ under the premise of __Deeper Functionality for Investigators in R__, I discovered a "tip of the iceberg" scenario. 
To that end, I'd like to revisit the DFIR concept with an additional discovery and opportunity. In reality, this is really a case of Deeper Functionality for Investigators in R within the original and paramount activity of [**D**igital **F**orensics/**I**ncident **R**esponse (DFIR)](https://en.wikipedia.org/wiki/Digital_forensics).  

### Massive Data Requires Algorithmic Methods

Those of us in the DFIR practice, and Blue Teaming at large, are overwhelmed by data and scale. __Success truly requires algorithmic methods__. If you're not already invested here I have an __immediately applicable case study for you in tidy anomaly detection with anomalize__.  

First, let me give credit where entirely due for the work that follows. Everything I discuss and provide is immediately derivative from _Business Science_ ([@bizScienc](https://twitter.com/bizScienc)), specifically Matt Dancho ([@mdancho84](https://twitter.com/mdancho84)). When a client asked _Business Science_ to build an open source anomaly detection algorithm that suited their needs, he created [anomalize](https://business-science.github.io/anomalize/):

> "_a tidy anomaly detection algorithm that's time-based (built on top of `tibbletime`) and scalable from one to many time series_," 

I'd say he responded beautifully. 

### Anomalizing in InfoSec: Threat Hunting At Scale

When his [blogpost introducing anomalize](http://www.business-science.io/code-tools/2018/04/08/introducing-anomalize.html) hit my (Russ's) radar via [R-Bloggers](https://www.r-bloggers.com/) it lived as an open tab in my browser for more than a month until generating [this _toolsmith_ article](https://holisticinfosec.blogspot.com/2018/06/toolsmith-133-anomaly-detection-threat.html). Please consider Matt's post a mandatory read as step one of the process here. I'll quote Matt specifically before shifting context: 

>"_Our client had a challenging problem: detecting anomalies in time series on daily or weekly data at scale. Anomalies indicate exceptional events, which could be increased web traffic in the marketing domain or a malfunctioning server in the IT domain. Regardless, it's important to flag these unusual occurrences to ensure the business is running smoothly. One of the challenges was that the client deals with not one time series but thousands that need to be analyzed for these extreme events._"
>
> -Matt Dancho, creator of `anomalize`

**Key takeaway: Detecting anomalies in time series on daily or weekly data at scale. Anomalies indicate exceptional events.**  

Now shift context with me to security-specific events and incidents, as they pertain to security monitoring, incident response, and threat hunting. In my [November 2017 post on redefining DFIR](https://holisticinfosec.blogspot.com/2017/11/toolsmith-129-dfir-redefined-deeper.html), I discussed __Time Series Regression (TSR) with the Holt-Winters method and a focus on seasonality and trends__. Unfortunately, I couldn't share the code for how we applied TSR, but pointed out alternate methods, including __Seasonal and Trend Decomposition using Loess (STL)__, which:  

*   Handles any type of seasonality (which can change over time)
*   Automatically smooths the trend-cycle (this can also be controlled by the user)
*   Is robust to outliers (high leverage points that can shift the mean)

Here now, Matt has created a means to immediately apply the __STL method__, along with the __Twitter method__ ([reference page](https://business-science.github.io/anomalize/reference/time_decompose.html)), as part of his `time_decompose()` function, one of three functions specific to the `anomalize` package. The [anomalize](https://github.com/business-science/anomalize) package includes the following main functions:

*  `time_decompose()`: Separates the time series into seasonal, trend, and remainder components. The methods used including __STL__ and __Twitter__ are described in Matt's [reference page](https://business-science.github.io/anomalize/reference/time_decompose.html). 

*  `anomalize()`: Applies anomaly detection methods to the remainder component. The methods used including __IQR__ and __GESD__ are described in Matt's [reference page](https://business-science.github.io/anomalize/reference/anomalize.html). 

*  `time_recompose()`: Calculates limits that separate the "normal" data from the anomalies.

Matt ultimately set out to build a scalable adaptation of [Twitter's AnomalyDetection package](https://github.com/twitter/AnomalyDetection) in order to address his client's challenges in dealing with not one time series but thousands needing to be analyzed for extreme events. You'll note that Matt describes `anomalize` using a dataset (`tidyverse_cran_downloads` that ships with `anomalize`) that contains the daily download counts of the 15 [tidyverse](https://www.tidyverse.org/) packages from [CRAN](https://cran.r-project.org/), relevant as he leverages the tidyverse package. 

I initially toyed with tweaking Matt's demo to model downloads for security-specific R packages (yes, there are such things) from CRAN, including:

* [RAppArmor](https://cran.r-project.org/web/packages/RAppArmor/index.html)
* [net.security](https://cran.r-project.org/web/packages/net.security/index.html)
* [securitytxt](https://cran.r-project.org/web/packages/securitytxt/index.html)
* [cymruservices](https://cran.r-project.org/web/packages/cymruservices/index.html)

The latter two packages are courtesy of [Bob Rudis](https://twitter.com/hrbrmstr) of our beloved [Data-Driven Security: Analysis, Visualization and Dashboards](https://holisticinfosec.blogspot.com/2014/09/toolsmith-jay-and-bob-strike-back-data.html). Alas, this was a mere rip and replace, and really didn't exhibit the use of `anomalize` in a deserving, varied, truly security-specific context. That said, I was able to generate immediate results doing so, as seen in **Figure 1: Security R Anomalies**.

![Security R Anomalies](/assets/2018-06-10-infosec-anomalize/Figure1.PNG)


<!-- **Figure 1:** Initial experiment -->

As an initial experiment you can replace packages names with those of your choosing in [tidyverse_cran_downloads](https://business-science.github.io/anomalize/reference/tidyverse_cran_downloads.html), run it in R Studio, then tweak variable names and labels in the code per Matt's [README page](https://github.com/business-science/anomalize).

### Code Tutorial: Anomalizing A Real Security Scenario

I wanted to run `anomalize` against __a real security data scenario__, so I went back to the dataset from the original DFIR articles where I'd utilized counts of 4624 Event IDs per day, per user, on a given set of servers. As utilized originally, I'd represented results specific to only one device and user, but herein is the beauty of anomalize. We can achieve quick results across multiple times series (multiple systems/users). This premise is but one of many where time series analysis and seasonality can be applied to security data. 

For those that would like to follow along, load the following libraries.


{% highlight r %}
library(tidyverse)
library(tibbletime)
library(anomalize)
{% endhighlight %}


I originally tried to write log data from `log.csv` straight to an `anomalize.R` script with `logs = read_csv("log.csv")` into a [tibble](https://tibble.tidyverse.org/index.html) (ready your troubles with tibbles jokes), which was not being parsed accurately, particularly time attributes. To correct this, from Matt's GitHub I grabbed `tidyverse_cran_downloads.R`, and modified it as follows:  


{% highlight r %}
# Path to security log data
logs_path <- "https://raw.githubusercontent.com/holisticinfosec/toolsmith_R/master/anomalize/log.csv"

# Group by server, Convert to tibbletime
security_access_logs <- read_csv(logs_path) %>%
  group_by(server) %>%
  as_tbl_time(date)

security_access_logs
{% endhighlight %}



{% highlight text %}
## # A time tibble: 198 x 3
## # Index:  date
## # Groups: server [3]
##    date       count server       
##    <date>     <int> <chr>        
##  1 2017-05-22     7 SERVER-549521
##  2 2017-05-23     9 SERVER-549521
##  3 2017-05-24    12 SERVER-549521
##  4 2017-05-25     4 SERVER-549521
##  5 2017-05-26     4 SERVER-549521
##  6 2017-05-30     2 SERVER-549521
##  7 2017-05-31    10 SERVER-549521
##  8 2017-06-01    14 SERVER-549521
##  9 2017-06-02    12 SERVER-549521
## 10 2017-06-05     7 SERVER-549521
## # ... with 188 more rows
{% endhighlight %}


This helped greatly thanks to the `tibbletime` package, which __"is an extension that allows for the creation of time aware tibbles"__. Some immediate advantages of this include: the ability to perform time-based subsetting on tibbles, quickly summarising and aggregating results by time periods. Guess what, Matt's colleague, Davis Vaughan, is the one who wrote `tibbletime` too. :-)  


I then followed Matt's sequence as he posted on _Business Science_, but with my logs defined as a function in `Security_Access_Logs_Function.R`. Following, I'll give you the code snippets, as revised from Matt's examples, followed by their respective results specific to processing my Event ID 4624 daily count log.  


First, let's summarize daily logon counts across three servers over four months.  
The result is evident in **Figure 2: Server Logon Counts**.  


{% highlight r %}
# plot login counts across 3 servers
security_access_logs %>%
  ggplot(aes(date, count)) +
  geom_point(color = "#2c3e50", alpha = 0.5) +
  facet_wrap(~ server, scale = "free_y", ncol = 3) +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 30, hjust = 1)) +
  labs(title = "Figure 2: Server Logon Counts",
       subtitle = "Data from Security Event Logs, Event ID 4624")
{% endhighlight %}

![Figure 2: Server logon counts visualized](/figure/source/2018-06-10-infosec-anomalize-threat-hunting/unnamed-chunk-3-1.png)


<!-- ![Figure 2](img/Figure2.PNG) -->

<!-- **Figure 2:** Server logon counts visualized -->

Next, let's determine which daily download logons are anomalous with Matt's three main functions, `time_decompose()`, `anomalize()`, and `time_recompose()`, along with the visualization function, `plot_anomalies()`, across the same three servers over four months. The result is revealed in **Figure 3: Security Event Log Anomalies**.


{% highlight r %}
# Detect and plot security event log anomalies
security_access_logs %>%
    # Data Manipulation / Anomaly Detection
    time_decompose(count, method = "stl") %>%
    anomalize(remainder, method = "iqr") %>%
    time_recompose() %>%
    # Anomaly Visualization
    plot_anomalies(time_recomposed = TRUE, ncol = 3, alpha_dots = 0.25) +
    labs(title = "Figure 3: Security Event Log Anomalies", subtitle = "STL + IQR Methods") 
{% endhighlight %}

![Figure 3: Security Event Log Anomalies](/figure/source/2018-06-10-infosec-anomalize-threat-hunting/unnamed-chunk-4-1.png)





<!-- ![Figure 3](img/Figure3.PNG) -->

<!-- **Figure 3:** Security event log anomalies -->


<!-- ![Figure 4](img/Figure4.PNG) -->

<!-- **Figure 4:** SERVER-549521 logon anomalies with Twitter + GESD methods -->

Next, we can compare method combinations for the `time_decompose()` and `anomalize()` methods:

* The [Twitter](https://business-science.github.io/anomalize/reference/decompose_methods.html) (`time_decompose()`) combined with the [GESD](https://business-science.github.io/anomalize/reference/anomalize_methods.html) (`anomalize()`) method 

* The [STL](https://business-science.github.io/anomalize/reference/decompose_methods.html) (`time_decompose()`) and [IQR](https://business-science.github.io/anomalize/reference/anomalize_methods.html) (`anomalize()`) arguments

These are two different [decomposition](https://business-science.github.io/anomalize/reference/time_decompose.html) and [anomaly detection](https://business-science.github.io/anomalize/reference/anomalize.html) approaches.  

__Twitter + GESD__:

Following Matt's method using Twitter's `AnomalyDetection` package, combining `time_decompose(method = "twitter")` with `anomalize(method = "gesd")`, while adjusting the `trend = "4 months"` to adjust median spans, we'll focus only on SERVER-549521.  In **Figure 4: SERVER-549521 Anomalies, Twitter + GESD**, you'll note that there are anomalous logon counts on SERVER-549521 in June.  


{% highlight r %}
# Get only SERVER549521 access
SERVER549521 <- security_access_logs %>%
  filter(server == "SERVER-549521") %>% 
  ungroup()

# Anomalize using Twitter + GESD
SERVER549521 %>%
  # Twitter + GESD
  time_decompose(count, method = "twitter", trend = "4 months") %>%
  anomalize(remainder, method = "gesd") %>%
  time_recompose() %>%
  # Anomaly Visualziation
  plot_anomalies(time_recomposed = TRUE) +
  labs(title = "Figure 4: SERVER-549521 Anomalies", subtitle = "Twitter + GESD Methods")
{% endhighlight %}

![Figure 4: SERVER-549521 Anomalies](/figure/source/2018-06-10-infosec-anomalize-threat-hunting/unnamed-chunk-5-1.png)

__STL + IQR__:

Again, we note anomalies in June, as seen in **Figure 5: STL + IQR Methods**. Obviously, the results are quite similar, as one would hope.


{% highlight r %}
# STL + IQR
SERVER549521 %>%
  # STL + IQR Anomaly Detection
  time_decompose(count, method = "stl", trend = "4 months") %>%
  anomalize(remainder, method = "iqr") %>%
  time_recompose() %>%
  # Anomaly Visualization
  plot_anomalies(time_recomposed = TRUE) +
  labs(title = "Figure 5: SERVER-549521 Anomalies", 
       subtitle = "STL + IQR Methods")
{% endhighlight %}

![Figure 5: STL + IQR Methods](/figure/source/2018-06-10-infosec-anomalize-threat-hunting/unnamed-chunk-6-1.png)






<!-- ![Figure 5](img/Figure5.PNG) -->

<!-- **Figure 5:** SERVER-549521 logon anomalies with STL + IQR methods -->

 

Finally, let use Matt's `plot_anomaly_decomposition()` for visualizing the inner workings of how algorithm detects anomalies in the [remainder](https://business-science.github.io/anomalize/reference/anomalize.html) for SERVER-549521. The result is a four part visualization, including observed, season, trend, and remainder as seen in **Figure 6**.  


{% highlight r %}
# Created from Anomalize project, Matt Dancho
# https://github.com/business-science/anomalize
SERVER549521 %>%
  time_decompose(count) %>%
  anomalize(remainder) %>%
  plot_anomaly_decomposition() +
  labs(title = "Figure 6: Decomposition of Anomalized SERVER-549521 Downloads")
{% endhighlight %}

![Figure 6: Decomposition of Anomalized SERVER-549521 Downloads](/figure/source/2018-06-10-infosec-anomalize-threat-hunting/unnamed-chunk-7-1.png)





<!-- ![Figure 6](img/Figure6.PNG) -->

<!-- **Figure 6:** Decomposition for SERVER-549521 Logins. -->

### Future Work In InfoSec: Anomalize At A Larger Scale

I'm really looking forward to putting these methods to use at a __much larger scale__, across a far broader event log dataset. I firmly assert that Blue Teams are already way behind in combating automated adversary tactics and problems of sheer scale, so...much...data. It's only with tactics such as Matt's `anomalize` package, and others of its ilk, that defenders can hope to succeed. Be sure to watch Matt's [YouTube video on anomalize](https://www.youtube.com/watch?v=Gk_HwjhlQJs). _Business Science_ is building a series of videos in addition, so keep an eye out there and on their GitHub for more great work that we can apply a blue team/defender's context to.

All the code snippets are in my [GitHubGist](https://gist.github.com/holisticinfosec), and the sample [log file](https://github.com/holisticinfosec/toolsmith_R/blob/master/anomalize/log.csv), a single [R script](https://github.com/holisticinfosec/toolsmith_R/blob/master/anomalize/anomalizeEventID.R), and a [Jupyter Notebook](https://github.com/holisticinfosec/toolsmith_R/tree/master/anomalize) are all available for you on my GitHub under [toolsmith_r](https://github.com/holisticinfosec/toolsmith_R). I hope you find `anomalize` as exciting and useful as I have. Great work by Matt, looking forward to see what's next from Business Science.

Cheers... until next time.

## About The Author

[Russ McRee](https://twitter.com/holisticinfosec) is Group Program Manager of the Blue Team for Microsoft’s Windows and Devices Group (WDG), now part of the Cloud and AI (C+AI) organization. He writes [toolsmith](https://holisticinfosec.blogspot.com/), a monthly column for information security practitioners, and has written for other publications including Information Security, (IN)SECURE, SysAdmin, and Linux Magazine.

Russ has spoken at events such as DEFCON, Derby Con, BlueHat, Black Hat, SANSFIRE, RSA, and is a SANS Internet Storm Center handler. He serves as a joint forces operator and planner on behalf of Washington Military Department’s cyber and emergency management missions. Russ advocates for a holistic approach to the practice of information assurance as represented by [holisticinfosec.org](https://holisticinfosec.org/).


## Business Science University  <a class="anchor" id="bsu"></a>

If you are looking to take the next step and learn __Data Science For Business (DS4B)__, [Business Science University](https://university.business-science.io/) is for you! Our goal is to __empower data scientists__ through teaching the tools and techniques we implement every day. You'll learn:

- Data Science Framework: [Business Science Problem Framework](https://university.business-science.io/courses/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/lectures/5029853)
- Tidy Eval
- H2O Automated Machine Learning
- LIME Feature Explanations
- Sensitivity Analysis
- Tying data science to financial improvement

All while solving a __REAL WORLD CHURN PROBLEM: Employee Turnover__!

#### Special Autographed "Deep Learning With R" Giveaway!!!

One lucky student that enrolls in June will receive an __autographed copy of _Deep Learning With R_, signed by JJ Allaire, Founder of Rstudio and DLwR co-author__. 

![Deep Learning With R](/assets/deeplearning_with_r.png)



<p class="text-center" style="font-size:30px;"><a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15">
Get 15% OFF in June!
</a></p>


### DS4B Virtual Workshop: Predicting Employee Attrition <a class="anchor" id="vw"></a>

Did you know that __an organization that loses 200 high performing employees per year is essentially losing $15M/year in lost productivity__? Many organizations don't realize this because it's an indirect cost. It goes unnoticed. What if you could use data science to predict and explain turnover in a way that managers could make better decisions and executives would see results? You will learn the tools to do so in our Virtual Workshop. Here's an example of a Shiny app you will create.

<p class="text-center" style="font-size:30px;"><a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15">
Get 15% OFF in June!
</a></p>



![HR 301 Shiny Application: Employee Prediction](/img/hr_301_app.png) 
<p class="text-center date">Shiny App That Predicts Attrition and Recommends Management Strategies, Taught in HR 301</p> 


Our first __Data Science For Business Virtual Workshop__ teaches you how to solve this employee attrition problem in four courses that are fully integrated:

* [HR 201: Predicting Employee Attrition with `h2o` and `lime`](https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15)
* HR 301 (Coming Soon): Building A `Shiny` Web Application
* HR 302 (EST Q4): Data Story Telling With `RMarkdown` Reports and Presentations
* HR 303 (EST Q4): Building An R Package For Your Organization, `tidyattrition`

The Virtual Workshop is intended for __intermediate and advanced R users__. It's __code intensive (like these articles)__, but also teaches you fundamentals of data science consulting including CRISP-DM and the Business Science Problem Framework. __The content bridges the gap between data science and the business, making you even more effective and improving your organization in the process.__

<p class="text-center" style="font-size:30px;"><a href="https://university.business-science.io/p/hr201-using-machine-learning-h2o-lime-to-predict-employee-turnover/?product_id=635023&coupon_code=DS4B_15">
Get 15% OFF in June!
</a></p>

## Don't Miss A Beat

<span data-sumome-listbuilder-embed-id="8944080265e0a41a6249cd11ea3299d46ee953ea5bc9a1cd5635069be5bf0987"></span>

* Sign up for the [Business Science blog](http://www.business-science.io/blog/index.html) to stay updated
* Enroll in [Business Science University](https://university.business-science.io/) to learn how to solve real-world data science problems from Business Science
* Check out our [Open Source Software](http://www.business-science.io/r-packages.html)


## Connect With Business Science <a class="anchor" id="social"></a>

If you like our software (`anomalize`, `tidyquant`, `tibbletime`, `timetk`, and `sweep`), our courses, and our company, you can connect with us:

* [__business-science__ on GitHub](https://github.com/business-science)
* [__Business Science, LLC__ on LinkedIn](https://www.linkedin.com/company/business.science)
* [__bizScienc__ on twitter](https://twitter.com/bizScienc)
* [__Business Science, LLC__ on Facebook](https://www.facebook.com/Business-Science-LLC-754699134699054/)
