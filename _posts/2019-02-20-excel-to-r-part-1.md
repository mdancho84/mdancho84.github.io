---
layout: post
title: "Excel to R, Part 1 - The 10X Productivity Boost"
date:   2019-02-20 08:08:01
excerpt: "The first article in a 3-part series on Excel to R, this article walks the reader through a Marketing Case Study exposing the 10X productivity boost from switching from Excel to R."
author: "Matt Dancho"
categories: [Business]
tags: [R-Bloggers, Learn-R, Learn-Business, Learn-Marketing, Excel, dplyr, purrr]
image: 2019-02-20-excel-to-r/excel_to_r_pt1.jpg
image_preview: 2019-02-20-excel-to-r/excel_to_r_pt1.jpg
---




Transitioning from `Excel` to `R` is one of the best decisions I have ever made. It accelerated my career and it boosted my productivity 10X - 100X (I show how in a __Time Study__ - keep reading). I used `Excel` primarily for sales and marketing analytics. I was a power-user of `Excel` fully equipped in VBA, Pivot Tables, Conditional Formatting, and all the functions. I was really good. 

___So, why did I make the switch?___


<a href="/business/2019/02/20/excel-to-r-part-1.html">
<img src="/assets/2019-02-20-excel-to-r/excel_to_r_pt1.jpg" class="img-rounded pull-right" alt="Key Strengths, R and Python" style="width:50%;margin-left:20px"/></a>



The short answer is that `Excel` has __painful limitations__. `Excel` grinds to a halt with "large" VLOOKUPS, often sitting idly with the spinning wheel or crashing computers as file sizes approach 50MB. Plus, I didn't know it at the time, but I was __very innefficient__ in my approach to analysis. 


In a world where the data being generated was far exceeding my ability to analyze it in `Excel` (i.e. 50MB), I needed a better tool. The tool I went to was `R` - a free and open source tool that's in high demand for many reasons - [I discuss 6 reasons to use R for business in this article](https://www.business-science.io/business/2017/12/27/six-reasons-to-use-R-for-business.html). 

> The bottom line is that learning `R` was an amazing decision, one that has changed my life. I'd like to share how to use `R` with you. 

I learn best by following ___real-world applications___, so this tutorial will follow a __Marketing Case Study__ first showing the errors, limitations, and inefficiencies of `Excel` (Part 1) and next how to perform the marketing analysis in `R` (Parts 2 and 3). 

If you learn best from real-world applications, then don't miss the [Business Science University Curriculum below](#curriculum) - We have a fully integrated `3-Course R-Track` that will help you ___advance your career___. All of the tools in this article series are taught in the R-Track plus advanced Machine Learning and `Shiny` Web Apps using real-world applications. 


<p class="well"> 
Read this article series, to see how you can gain a <strong>10X productivity boost</strong> by switching from Excel to R!
</p>



## Articles in this Series

- [__Excel to R, Part 1 - The 10X Productivity Boost__](/business/2019/02/20/excel-to-r-part-1.html) __(You're here)__

- Excel to R, Part 2 - The Correlation Funnel (Coming Soon)

- Excel to R, Part 3 - The Business Report (Coming Soon)


## Part 1 Overview

<img src="/assets/2019-02-20-excel-to-r/bank_of_america.jpg" class="img-rounded pull-right" alt="Key Strengths, R and Python" style="width:50%;margin-left:20px;margin-top:0px"/>

<p class="text-center date pull-right" style="width:50%">Bank of America Term Deposits</p>

In this 3-part series on `Excel` to `R`, we'll follow a __Marketing Case Study__ for a bank that has a product (Term Loans). The bank's Marketing Department wants to know which customers are more likely to purchase Term Loans so they can focus their efforts on contacting the right ones. 

In ___"Excel to R, Part 1 - The 10X Productivity Boost"___, we'll showcase how the business process is performed in `Excel`, the `VLOOKUP` problem we run into because the lookup is too large for `Excel`, and how we can perform the same "join" operation in R with no problem (in 3 lines of code). 

<br>

In this article, you'll learn about limitations of the `VLOOKUP` in Excel, showing how this complex operation combining 4 separate worksheets into 1 can be converted into 3 lines of `R` code.

![VLOOKUP](/assets/2019-02-20-excel-to-r/vlookup.jpg)

<p class="text-center date">VLOOKUP that Takes Forever to Compute</p>

...And here are the __3 lines__ of code that do the VLOOKUP join in `R`.


{% highlight r %}
# 3 Lines of Code - Accomplishes VLOOKUP saving us hours!
data_joined_tbl <- sheets[4:7] %>%
    map(~ read_excel(path = path_to_excel_file, sheet = .)) %>%
    reduce(left_join)
{% endhighlight %}

<img src="/assets/2019-02-20-excel-to-r/time_study.jpg" class="img-rounded pull-right" alt="Key Strengths, R and Python" style="width:50%;margin-left:20px;margin-top:0px"/>
<p class="text-center date pull-right" style="width:50%">Time Study - Save 6 hours (minimum)</p>

We'll also uncover a shocking __Time Study__ were we estimate switching from `Excel` to `R` saving 6 hours on the marketing analysis, making you a minimum of 7X more productive in the process. Once you develop the code (see how in Part 2 of the series), you can rinse-and-repeat __boosting your productivity to 10X and beyond__!




<br>


> The `VLOOKUP` can be performed in `R` with __3 lines of code__

## Video Tutorial - Marketing Case Study {#youtube}

<p class="pull-right" style="width:50%;margin-left:20px">
<iframe width="100%" height="250" src="https://www.youtube.com/embed/VSjU_4XoMAM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>

The Excel to R - 3-part Series - is also available as a video tutorial from our recent [Learning Lab - Excel to R - Marketing Case Study](https://www.youtube.com/watch?v=VSjU_4XoMAM&list=PLo32uKohmrXvDwyyty6pC4mcWER5tSdmO&index=3). If you prefer video walkthroughs, then check this video out. If you want to attend the next Learning Lab live or get copies of the recordings, [sign up for Learning Labs here](/labs/).



<p class="date text-center">
<a href="https://www.youtube.com/watch?v=VSjU_4XoMAM&list=PLo32uKohmrXvDwyyty6pC4mcWER5tSdmO&index=3">
Learning Lab - Excel to R - Marketing Case Study </a>
</p>



## Contents  

- [Marketing Case Study - Term Deposit Analysis](#marketing)

    - [Requirements](#requirements)
    
    - [Get the Data](#data) 
    
    - [Business Process](#business-process)
    
- [Implementing the Business Process in Excel and R](#implementing)

    - [Step 1 - Collect Information](#step1)
    
    - [Step 2 - Merge the Data](#step2)
    
    - [Step 3 - Marketing Analysis](#step3)

- [Conclusion](#conclusion)

- [References](#references)

- [Announcements](#announcements)

- [Curriculum](#curriculum)








# Marketing Case Study - Term Deposit Analysis {#marketing}

This 3-Part series follows a real-world study that companies like [Bank of America an others that provide Certificates of Deposit (CDs) (Term Deposits)](https://www.bankofamerica.com/deposits/bank-cds/cd-accounts/) would go through to analyze customer purchasing behavior. 

![Bank of America](/assets/2019-02-20-excel-to-r/bank_of_america.jpg)

The bank is interested in contacting customers that are likely to enroll in a Term Deposit (CD for a fixed term). The banks love these products because they can earn interest on the customers money. More enrollments means more revenue for the bank. 

## Requirements {#requirements}

Here's what you'll need to follow along:

- `Excel` or `Google Sheets` to view the Excel File

- [Install R](https://www.r-project.org/) and [RStudio](https://www.rstudio.com/products/RStudio/#Desktop). Install the following libraries with the `install.packages()` function: `tidyverse`, `readxl`, `recipes`, `tidyquant`, and `ggrepel`. These will be used throughout the 3-part series. 

![RStudio IDE](/assets/2019-02-20-excel-to-r/rstudio_ide.jpg)

<p class="text-center date">RStudio Desktop IDE</p>

## Get the Data {#data}

The dataset we'll use is a modified version of the __"Bank Marketing Data Set"__ provided by the UCI Machine Learning Repository.[^1] The version we will use is in an `Excel` file with multiple tabs covering the business process. 

- [GitHub Repo with Code, Data, and Reports](https://github.com/business-science/presentations/tree/master/2019_02_13_Learning_Lab_Marketing_Analytics)

In the data folder, download the `Excel` File, "bank_term_deposit_marketing_analysis.xlsx".



## Business Process {#business-process}

The `Excel` File is setup like many business processes where there are multiple tabs indicating steps in the business process. 

![Excel File Contents](/assets/2019-02-20-excel-to-r/excel_file_contents.jpg)

<p class="text-center date">Excel File Contents</p>

## The Business Process has 3 Steps:

1. __Collect Data__ - The goal is to collect data that can be mined for relationships to Term Deposit enrollment. This is where Client Information, Loan History, Marketing History, and Term Loan (Product Enrollment) Information is pulled into `Excel`. 

2. __Merge Information__ - This is where the `VLOOKUP` is performed to join the 4 spreadsheet tables from the first step. 

3. __Perform Marketing Analysis__ - This is where the business analyst performs the Marketing Study mining the data for relationships between to the customer enrollments in the term deposit product.

# Implementing the Process in Excel and R {#implementing}

Let's investigate the first 2 steps of the process to show what's going on and what happens inside of `Excel` when doing a `VLOOKUP`. 

## Step 1 - Collect Information {#step1}

This step is already done, which is basically taking tables from a SQL database and pulling the information into `Excel` in the four worksheets:

1. [CLIENT_INFO](#client)
2. [LOAN_HISTORY](#loan)
3. [MARKETING HISTORY](#mkt)
4. [SUBSCRIPTION HISTORY](#subscript)



### 1. Client Information {#client}

![Client Info](/assets/2019-02-20-excel-to-r/client_info.jpg)
<p class="text-center date">Client Information</p>

This worksheet includes the following features:

- __ID__ - Unique Client ID
- __AGE__ - Age of the client
- __JOB__ - Current job category
- __MARITAL__ - Marital status (single, married, divorced)
- __EDUCATION__ - Education level (primary, secondary, tertiary, unknown)

### 2. Loan History {#loan}

![Loan History](/assets/2019-02-20-excel-to-r/loan_history.jpg)

<p class="text-center date">Loan History</p>

This worksheet includes the following features:

- __ID__ - Unique Client ID
- __DEFAULT__ - Has credit in default (yes/no)
- __BALANCE__ - Average yearly balance
- __HOUSING__ - Home loan (yes/no)
- __LOAN__ - Personal loan (yes/no)

### 3. Marketing History {#mkt}

![Marketing History](/assets/2019-02-20-excel-to-r/marketing_history.jpg)

<p class="text-center date">Marketing History</p>

This worksheet includes the following features:

- __ID__ - Unique Client ID
- __CONTACT__ - The type of contact (cellular, telephone, unknown)
- __DAY__ - Day of the month when the client was last contacted
- __MONTH__ - Month of the year when the client was last contacted
- __DURATION__ - Duration of the last contact in seconds
- __CAMPAIGN__ - Number of contacts performed during this campaign
- __PDAYS__ - Number of days passed after the client was last contacted
- __PREVIOUS__ - Number of contacts performed before this campaign
- __POUTCOME__ - Outcome of the previous marketing campaign (success, failure, other, unknown)

### 4. Subscription History {#subscript}

![Subscription History](/assets/2019-02-20-excel-to-r/subscription_history.jpg)

<p class="text-center date">Subscription History</p>

This worksheet includes the following features:

- __ID__ - Unique Client ID
- __TERM_DEPOSIT__ - Whether or not the customer enrolled in the program (yes/no)



## Step 2 - Merge the Data {#step2}

### Excel: Joining Data

This is very challenging in `Excel` because of several reasons I will get to in a minute. First, we want to get each of the 4 worksheets (CLIENT_INFO, LOAN_HISTORY, MARKETING HISTORY, and  SUBSCRIPTION HISTORY) into one combined table where all of the data is joined using the "ID" field. Here's how we attempt to do the `VLOOKUP` on our 45,000 row data set.

#### VLOOKUP Attempt

This is a `VLOOKUP` that I attempted. It combines data from 4 worksheets - the end data set was supposed to be 45,211 rows by 18 columns. After letting the Excel Application spin for about 20 minutes I decided to truncate the rows to 10,000 or about 20% of the data. The VLOOKUP then worked. 

![VLOOKUP Craziness](/assets/2019-02-20-excel-to-r/vlookup.jpg)

<p class="text-center date">VLOOKUP that Grinds My Mac to a Halt</p>

#### VLOOKUP Process

The general process is as follows:

- We create column indexes for each of the columns we want to pull in (row 7). these correspond the column positions in each of the 4 worksheets of "feeder data" (data feeding the `VLOOKUP`)
- We build the first `VLOOKUP()` in cell B9
    - __1st argument__: We key in on the ID field (column A) making sure to remember the dollar sign (`$A9`) in front of A to lock into the "A" column
    - __2nd Argument__: We select the data for the first worksheet (`CLIENT_INFO`) remembering to lock in the entire data with \$ signs in front of the first column and row and the last column and row (`$A$2:$E$45212`)
    - __3rd Argument__: We then add the column index in row 7 making sure to lock the row in with a dollar sign (`B$7`) 
    - __4th Argument__: We add `FALSE` to ensure exact matching (we don't want partial matches... do we ever???).
- We drag the VLOOKUP across and down to fill in the first 4 columns (AGE to EDUCATION)
- We then repeat this process for the remaining 3 worksheets



#### Excel: The Pain

This was painful for 3 Reasons:

1. __Errors__: I made at least 3 mistakes when performing the `VLOOKUP`. At various points, I forgot dollar signs before dragging, and the output looked very similar to what I was going for. It took me a lot of unnecessary time to debug. Plus - If I had someone checking my work, I doubt that they would have caught all of the errors. This is a QA nightmare!

2. __Computational Intensity__: We are not dealing with a lot of data. 45K rows by 18 columns is normal. Yet, by the 4th `VLOOKUP`, `Excel` had my computer spinning in an _"I'm thinking and this is going to take a really long time"_ way. I eventually trimmed the data set to the first 10K rows (20% of data) and it worked, but that's terrible because I need to evaluate all of the data.

3. __My Excel File Doubled, I only replicated 20% of data__: `Excel` is not efficient. Each `VLOOKUP` is stored as a function in every cell (45K x 18 = 810K functions), which causes file sizes to increase exponentially. My file's size went from 4MB to 7.2MB during the VLOOKUP - and I only performed the `VLOOKUP` on 10K rows (20% of the data).  

### R: Joining Data

#### Joining Multiple Excel Sheets in R

Here's how simple the process is in `R`. First, I load the `tidyverse` and `readxl`. 

- `tidyverse`: A meta-package that contains several workhorse packages including `dplyr`, `ggplot2`, and `purrr`.  

- `readxl`: A light-weight package for reading `Excel` files. 


{% highlight r %}
# Load Libraries
library(tidyverse)
library(readxl)
{% endhighlight %}

Next, we setup a string which is the path to our file. My file is located in a folder named `data` that is in my home directory. Use `getwd()` to identify your home directory. 


{% highlight r %}
# Setup path
path_to_excel_file <- "data/bank_term_deposit_marketing_analysis.xlsx"
{% endhighlight %}



Next, let's determine what sheets exist in the `Excel` file. We can use `excel_sheets()` to determine this. 


{% highlight r %}
# Read excel sheets
sheets <- excel_sheets(path_to_excel_file)
sheets
{% endhighlight %}



{% highlight text %}
##  [1] "PROCEDURE"                    "DATA DESCRIPTION"            
##  [3] "Step 1 - Collect Information" "CLIENT_INFO"                 
##  [5] "LOAN_HISTORY"                 "MARKETING HISTORY"           
##  [7] "SUBSCRIPTION HISTORY"         "Step 2 - Merge Information"  
##  [9] "CLIENT_MERGE"                 "Step 3 - Marketing Analysis" 
## [11] "DAILY RANGE"                  "JOB ANALYSIS"                
## [13] "Sheet3"
{% endhighlight %}

We want to read in the data from sheet 4 ("CLIENT_INFO") through sheet 7 ("SUBSCRIPTION HISTORY"). Here's how we can do it in one pipe.


{% highlight r %}
# 3 Lines of Code - Accomplishes VLOOKUP saving us hours!
data_joined_tbl <- sheets[4:7] %>%
    map(~ read_excel(path = path_to_excel_file, sheet = .)) %>%
    reduce(left_join, by = "ID")
{% endhighlight %}

For those that want to understand what the code above is doing:

- We use bracket notation `sheets[4:7]` to select the names of sheets 4 through 7. 

- We pipe (`%>%`) the sheet names into a `map()` function 
    - `map()` allows us to iteratively apply any function - We use it to apply `read_excel()` to each of the sheet names. 
    - We use `read_excel(path, sheet)`, setting the `path = path_to_excel_file` and the `sheet = .`. 
    - The dot (`.`) tells `map()` to place the sheet name in that spot as it iterates. This returns a `list` with 4 `tibbles` (a data structure similar to an excel spreadsheet in `R`), one `tibble` for each spreadsheet.

- We then join the tibbles iteratively using the `reduce()` function. 

    - `reduce()` allows us to apply a function to the first two elements, then the output combined with the 3rd, that output with the 4th, iterating until all elements have been "reduced". 
    - We use the `left_join()` function as our reducer, which basically joins all 4 tibbles. 
    - We specify `by = "ID"`, which is actually an argument of `left_join()`. `reduce()` is smart enough to pass that argument to `left_join()` and "ID" is then the column key that we join by using an exact match.  

Just to prove that each worksheet was joined appropriately, the next line of code shows the first 10 rows of the resulting 45,211 row x 18 column `tibble`. 


{% highlight r %}
data_joined_tbl %>%
    slice(1:10) %>%
    knitr::kable()
{% endhighlight %}



|ID   | AGE|JOB          |MARITAL  |EDUCATION |DEFAULT | BALANCE|HOUSING |LOAN |CONTACT | DAY|MONTH | DURATION| CAMPAIGN| PDAYS| PREVIOUS|POUTCOME |TERM_DEPOSIT |
|:----|---:|:------------|:--------|:---------|:-------|-------:|:-------|:----|:-------|---:|:-----|--------:|--------:|-----:|--------:|:--------|:------------|
|2836 |  58|management   |married  |tertiary  |no      |    2143|yes     |no   |unknown |   5|may   |      261|        1|    -1|        0|unknown  |no           |
|2837 |  44|technician   |single   |secondary |no      |      29|yes     |no   |unknown |   5|may   |      151|        1|    -1|        0|unknown  |no           |
|2838 |  33|entrepreneur |married  |secondary |no      |       2|yes     |yes  |unknown |   5|may   |       76|        1|    -1|        0|unknown  |no           |
|2839 |  47|blue-collar  |married  |unknown   |no      |    1506|yes     |no   |unknown |   5|may   |       92|        1|    -1|        0|unknown  |no           |
|2840 |  33|unknown      |single   |unknown   |no      |       1|no      |no   |unknown |   5|may   |      198|        1|    -1|        0|unknown  |no           |
|2841 |  35|management   |married  |tertiary  |no      |     231|yes     |no   |unknown |   5|may   |      139|        1|    -1|        0|unknown  |no           |
|2842 |  28|management   |single   |tertiary  |no      |     447|yes     |yes  |unknown |   5|may   |      217|        1|    -1|        0|unknown  |no           |
|2843 |  42|entrepreneur |divorced |tertiary  |yes     |       2|yes     |no   |unknown |   5|may   |      380|        1|    -1|        0|unknown  |no           |
|2844 |  58|retired      |married  |primary   |no      |     121|yes     |no   |unknown |   5|may   |       50|        1|    -1|        0|unknown  |no           |
|2845 |  43|technician   |single   |secondary |no      |     593|yes     |no   |unknown |   5|may   |       55|        1|    -1|        0|unknown  |no           |


#### R: The Gain 

`R` just saved us about __2 hours__ of work. In 3 lines of code, we read the each of the 4 excel sheets and iteratively joined using an exact match on the "ID" column for all 45,211 customers. 


{% highlight r %}
# 3 Lines of Code - Accomplishes VLOOKUP saving us hours!
data_joined_tbl <- sheets[4:7] %>%
    map(~ read_excel(path = path_to_excel_file, sheet = .)) %>%
    reduce(left_join)
{% endhighlight %}

The best part - You don't need to even know what this code does. Just make sure the "ID" column is the only matching column in each of the worksheets that you want to join. Copy-and-paste it the next time you are in a similar situation. 


## Step 3 - Marketing Analysis {#step3}

### Excel: Pivot Tables and Pivot Charts Galore

The approach we normally take in `Excel` is investigating features one-by-one with Pivot Tables and Pivot Charts. This is a great way to interactively explore the data, but it's also time consuming. Let's follow the analytical process for a few iterations. 

#### Daily Hit Rate - Baseline

We want to assess the hit rate (how many clients enroll vs total clients) to get a baseline for our analysis. One way we can do so is by analyzing the daily activity. We spend 30 minutes or so coming up with a nice sheet that looks something like this. We can see pretty clearly that our daily range is around 3.5% with a range of about 1% to 6% on most given days.

![Daily Hit Rate](/assets/2019-02-20-excel-to-r/hit_rate.jpg)

<p class="text-center date">Daily Hit Rate</p>

With a baseline hit rate in hand, we can then start to assess which features yield a higher hit rate.

#### Job Analysis

We spend another 15 minutes or so on our next analysis, which is gauging which job categories yield higher hit rates than the baseline 3.5%.

![Job Analysis](/assets/2019-02-20-excel-to-r/job_analysis.jpg)

<p class="text-center date">Job Analysis</p>

From this, we develop a story that "self-employed" customers are almost double the hit-rate and therefore are better to contact. What we don't realize is that we are only considering 20% of the data, which is heavily biased because it's only the two months of a much longer time series data set. 

#### Excel: The Pain

We've just spent __3 hours__ collecting data, combining data, and analyzing 2 features, and we are no closer to the truth because we only have 20% of the data set in our `VLOOKUP`. We have an estimated __4 more hours__ of work (16 more features x 15 minutes/feature of analysis) to get through the whole data set. The entire estimated analysis is going to take __7+ hours__ and this doesn't include writing a report. 

> At __7+ hours__ for analysis not including writing a report, it's going to be a long day unless we use a better tool for the job.

### R: Correlation Funnel

Rather than go through all 18 features one-by-one, we can let the insights come to us by way of a special technique called a ___Correlation Funnel___.  

#### Correlation Funnel

Here's what the Correlation Funnel looks like on this data set. In the ___next post___, we'll show you how to set it up. 

![Correlation Funnel](/assets/2019-02-20-excel-to-r/correlation_funnel.jpg)

#### R: The Gain

__More Accurate Results__:
The top features are Duration of call ("DURATION") and Previous Outcome ("POUTCOME"). Having POUTCOME = "SUCCESS" or DURATION >= 319 results in a high likelihood of enrolling in Term Deposit. 

It turns out that JOB = "self.employed" (identified in the `Excel` Job Analysis) has very little correlation to Term Deposit as shown in the _Correlation Funnel_. This is the issue with only using 20% of a data set for a cross section of time. Making sacrifices to accommodate the `VLOOKUP` caused us to ___incorrectly identify___ self employed customers rather than focus on the most important features including Previous Outcome and Call Duration.

__Time Savings__:
The correlation funnel takes minutes to set up, and we can generate valuable insights quickly. At 1 hour for setup (first time), the estimate time savings is __6 hours__ or about 85% more efficient versus Excel (7+ hours).  

Better yet, I can repeatedly use the script in Part 2 so future Matt will get a time savings of approaching the __full 7 hours__.

## Summary of Time Savings

Just for kicks, I'll show a quick visual using `ggplot2` of the time savings from switching from `Excel` to `R` for 1 Marketing Analysis (excluding Reporting, which saves even more time). 
First, convert the time savings estimate to a `tibble` in an appropriate format for `ggplot2`. 


{% highlight r %}
# Summarize Time Savings
time_savings_tbl <- tibble(
    type  = c("Collecting & Joining Data", "Marketing Analysis"),
    R     = c(0, 1),
    Excel = c(2, 5)
) %>%
    mutate(type = type %>% factor(levels=c("Marketing Analysis", "Collecting & Joining Data"))) %>%
    gather(key = "tool", value = "time", -type, factor_key = F)

time_savings_tbl   
{% endhighlight %}



{% highlight text %}
## # A tibble: 4 x 3
##   type                      tool   time
##   <fct>                     <chr> <dbl>
## 1 Collecting & Joining Data R         0
## 2 Marketing Analysis        R         1
## 3 Collecting & Joining Data Excel     2
## 4 Marketing Analysis        Excel     5
{% endhighlight %}

Plot the result using `ggplot2` package. I use the `tidyquant` theme, which makes business-ready plots.


{% highlight r %}
time_savings_tbl %>%
    ggplot(aes(x = tool, y = time, fill = type)) +
    geom_col() +
    geom_label(aes(label = str_glue("{type}: {time} hr")), 
               position= "stack",
               fill = "white", color = "#2c3e50"
               ) +
    tidyquant::scale_fill_tq() +
    tidyquant::theme_tq() +
    labs(
        title = "Time Study: Comparison of time to complete a Marketing Analysis",
        subtitle = "Switching from Excel to R saves 85% time on 1 analysis making you 7X more productive",
        y = "Time (Hours)", x = "", fill = ""
    ) 
{% endhighlight %}

![plot of chunk unnamed-chunk-10](/figure/source/2019-02-20-excel-to-r-part-1/unnamed-chunk-10-1.png)

The __Time Study__ visualization makes is pretty clear that switching from `Excel` to `R` is much more efficient. In the next article we'll see how the Marketing Analysis can be performed in `R` using the ___Correlation Funnel___. 

## Conclusion {#conclusion}

In the first part of the Marketing Case Study, we've seen how `Excel` has glaring issues with:

- __`VLOOKUP` Breaks Down__ - Does not handle medium-size data well, easy for errors to go unnoticed
- __Inefficient Analysis__ - 7+ hours to perform the marketing evaluation 
- __Inaccurate Analysis__ - Because of the data limitation (we were only able to use 20%), the Job Analysis was inaccurate

We've also seen that `R` has benefits in joining data (saving about 2-3 hours per complex `VLOOKUP`), reducing errors in the process, and making QA's job easier (someone has to review).

The real benefits will become much clearer once we get to the ___Correlation Funnel___. This drops the analysis time dramatically for a total time savings of about 90% - 100% (R at 0-1 hours as compared to Excel as 7+ hours)

We'll cover the ___Correlation Funnel___ in the next article, __"Excel to R for Marketing, Part 2 - The Correlation Funnel"__ (Coming Soon).

__Learning R is not that difficult:__

Finally, if you want to learn R, be sure to check out our [Business Science University Curriculum below](#curriculum). We have an integrated `3-Course R-Track` that will teach you everything you need to be effective as a data scientist. And, you can do it - going from no prior knowledge to advanced in weeks. 


## References {#references}

[^1]: [Moro et al., 2014] S. Moro, P. Cortez and P. Rita. A Data-Driven Approach to Predict the Success of Bank Telemarketing. Decision Support Systems, Elsevier, 62:22-31, June 2014



