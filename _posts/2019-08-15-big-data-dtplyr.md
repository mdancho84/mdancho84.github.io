---
layout: post
title: "Big Data in R: Wrangling 4.6M Rows with dtplyr (the NEW data.table backend for dplyr)"
date:   2019-08-15 08:08:01
excerpt: "Wrangling Big Data is one of the best features of the R programming language - which boasts a Big Data Ecosystem that contains fast in-memory tools (e.g. data.table) and distributed computational tools (sparklyr). With the NEW dtplyr package, data scientists with dplyr experience gain the benefits of data.table backend. We saw a 3X speed boost for dplyr!"
author: "Matt Dancho"
categories: [Code-Tools]
tags: [R-Bloggers, Learn-R, Learn-Finance, Learn-Machine-Learning, data.table, dplyr, dtplyr]
image: 2019-08-15-dtplyr/dtplyr_bridging_the_big_data_gap.jpg
image_preview: 2019-08-15-dtplyr/dtplyr_bridging_the_big_data_gap.jpg
---



Wrangling ___Big Data___ is one of the best features of the `R` programming language, which boasts a ___Big Data Ecosystem___ that contains fast in-memory tools (e.g. `data.table`) and distributed computational tools (`sparklyr`). With the NEW `dtplyr` package, data scientists with `dplyr` experience _gain_ the benefits of `data.table` backend. ___We saw a 3X speed boost for `dplyr`!___ 

<a href="#"><img src="/assets/2019-08-15-dtplyr/dtplyr_bridging_the_big_data_gap.jpg" width="50%" align="right" style="border-style: solid; border-width: 2px; border-color: #2c3e50; margin-left: 10px; "/></a>

We'll go over the pros and cons and what you need to know to get up and running using a real world example of [_Fannie Mae Loan Performance_](#section4) that when combined is 4.6M Rows by 55 Columns - Not super huge, but enough to show off the new and improved `dtplyr` interface to the `data.table` package. We'll end with a [Time Study showing a 3X Speed Boost](#section5) and [Learning Recommendations to get you expertise fast](#section6).


<hr>

#### Like this article? Here are more just like it!

If you like this article, we have more just like it in our [Machine Learning Section](https://www.business-science.io/blog/learn-machine-learning.html) of the [Business Science Learning Hub](https://www.business-science.io/learn.html). 

- [Correlation Funnel - Speed Up EDA by 100X](https://www.business-science.io/code-tools/2019/08/07/correlationfunnel.html)

- [Time Series Analysis with ANNs](https://www.business-science.io/business/2018/12/04/time-series-forecasting.html)

- [Machine Learning Model Interpretability and Feature Explanation with IML and H2O](https://www.business-science.io/business/2018/08/13/iml-model-interpretability.html)

<hr>

## Table of Contents

1. [The 30-Second Summary](#summary)

2. [Big Data Ecosystem](#section2)

3. [Enter dtplyr: Boost dplyr with data.table backend](#section3)

4. [Case Study - Wrangling 4.6M Rows of Financial Data](#section4)

5. [The 3X Speedup - Time Comparisons](#section5)

6. [Conclusions and Learning Recommendations](#section6)

7. [Additional Big Data Guidelines and Packages](#section7)

8. [Recognizing the Developers](#section8)

9. [Expert Shiny Apps Course - Coming Soon!](#section9)


## 1.0 The 30-Second Summary {#summary}

We reviewed the ___latest advance in big data___ - The [NEW `dtplyr` package](https://dtplyr.tidyverse.org/), which is an interface to the high performance `data.table` library. 

<a href="https://dtplyr.tidyverse.org/"><img src="/assets/2019-08-15-dtplyr/dtplyr_for_big_data.jpg" width="50%" align="right" style="border-style: solid; border-width: 2px; border-color: #2c3e50; margin-left: 10px; "/></a>

### Pros

- A ___3X speed boost___ on the data joining and wrangling operations on a 4.6M ROw data set. The data wrangling operatiosn were performed in 6 seconds with `dtplyr` vs 18 seconds with `dplyr`. 

- Performs ___inplace operations___ (`:=`), which vastly accelerates big data computations (see grouped time series `lead()` operation in [Section 3.7 tutorial](#section4_7))

- Shows the `data.table` translation (this is really cool!)

### Cons

- __For pure speed__, you will need to learn all of `data.table`'s features including managing keys for fast lookups. 

- In most cases, `data.table` __will be faster__ than `dtplyr` because of overhead in the `dtplyr` translation process. However, we saw the difference to be very minimal. 

- `dtplyr` is in ___experimental status___ currently - Tester's wanted, [file issues and requests here](https://github.com/tidyverse/dtplyr/issues)


### What Should You Learn?

___Just starting out?___ Our recommendation is to learn `dplyr` first, then learn `data.table`, using `dtplyr` to bridge the gap

- Begin with `dplyr`, which has ___easy-to-learn syntax___ and works well for datasets of 1M Rows+. 

- Learn `data.table` as you become comfortable in R. `data.table` is ___great for pure speed___ on data sets 50M Rows+. It has a different "bracketed" syntax that is streamlined but more complex for beginners. However, it has features like fast keyed subsetting and optimization for rolling joins that are out of the scope of this article.

- Use `dtplyr` as a translation tool to help ___bridge the gap___ between `dplyr` and `data.table`.

___At a bare minimum___ - Learning `dplyr` is essential. Learn more about a system for learning `dplyr` in the [Conclusions and Recommendations](#section6). 


## 2.0 Big Data Ecosystem {#section2}

`R` has an amazing ecosystem of tools designed for ___wrangling Big Data___. The 3 most popular tools are `dplyr`, `data.table`, and `sparklyr`. We've trained hundreds of students on big data, and our students ___most common Big Data question is, "Which tool to use and when?"___


![Big Data Tools by Dataset Size](/assets/2019-08-15-dtplyr/big_data_tools_by_dataset_size.jpg)
<p class="date text-center">Big Data: Data Wrangling Tools By Dataset Size</p>
<p class="date text-center">Source: <a href="https://university.business-science.io/courses/learning-labs-pro/lectures/10835164" target="_blank">Business Science Learning Lab 13: Wrangling 4.6M Rows (375 MB) of Financial Data with data.table</a></p>

<br>

The ___"Big Data: Data Wrangling Tools by Dataset Size"___ graphic comes from Business Science's [Learning Lab 13:  Wrangling 4.6M Rows (375 MB) of Financial Data with data.table](https://university.business-science.io/courses/learning-labs-pro/lectures/10835164) where we taught students how to use `data.table` using [Fannie Mae's Financial Data Set](https://loanperformancedata.fanniemae.com/lppub/index.html). The graphic provides _rough guidelines_ on when to use which tools by dataset row size. 

1. [__dplyr (website)__](https://dplyr.tidyverse.org/) - Used for in-memory calculations. Syntax design and execution emphasizes readability over performance. Very good in most situations. 

2. [__data.table (website)__](https://github.com/Rdatatable/data.table/wiki) - Used for higher in-memory performance. Modifies data inplace for huge speed gains. Easily wrangles data in the range of 10M-50M+ rows.

3. [__sparklyr (website)__](https://spark.rstudio.com/) - Distribute work across nodes (clusters) and performs work in parallel. Best used on big data (100M+ Rows). 

<br>
{% include cta_pain_point1.html %}

## 3.0 Enter dtplyr: Boost dplyr with data.table backend {#section3}

We now have a 4th tool that boosts `dplyr` using `data.table` as its backend. The good news is that if you are already familiar with `dplyr`, you don't need to learn much to get the gains of `data.table`!

![dtplyr: Bridging the Big Data Gap](/assets/2019-08-15-dtplyr/dtplyr_bridging_the_big_data_gap.jpg)
<p class="date text-center"><code>dtplyr</code>: Bridging the Big Data Gap</p>

The [dtplyr package](https://dtplyr.tidyverse.org/) is a new front-end that wraps the High Performance `data.table` R package. I say new, but `dtplyr` has actually been around for over 2 years. However, the _implementation recently underwent a complete overhaul_ vastly improving the functionality. Let's check out the goals the package from the `dtplyr` website: https://dtplyr.tidyverse.org/. 

![dtplyr for Big Data](/assets/2019-08-15-dtplyr/dtplyr_for_big_data.jpg) 

<p class="date text-center"><code>dtplyr</code> for Big Data</p>

Here's what you need to know:

- __Goal__: Increase speed of working with big data when using `dplyr` syntax

- __Implementation__: The `dtplyr` package enables the user to write `dplyr` code. Internally the package translates the code to `data.table` syntax. When run, the user gains the faster performance of `data.table` while being able to write the more readable `dplyr` code. 

- __Dev Status__: The package is still ___experimental___. This means that developers are still in the process of testing the package out, reporting bugs, and improving via feature requests. 


# 4.0 Case Study - Wrangling 4.6M Rows (375MB) of Financial Data {#section4}

Let's try out the new and improved `dtplyr` + `data.table` combination on a large-ish data set. 

### 4.1 Bad Loans Cost Millions (and Data Sets are MASSIVE)

![Bank Loan Defaults](/assets/2019-08-15-dtplyr/loan_defaults.jpg)

Loan defaults cost organization millions. Further, the datasets are massive. This is a task where `data.table` and `dtplyr` will be needed as part of the ___preprocessing steps___ prior to building a Machine Learning Model.


### 4.2 Fannie Mae Data Set

The data used in the tutorial can be downloaded from [Fannie Mae's website](https://loanperformancedata.fanniemae.com/lppub/index.html). We will just be using the ___2018 Q1 Acquisition and Performance data set___. 

![Fannie Mae Loan Data](/assets/2019-08-15-dtplyr/fannie_mae_loan_data.jpg)

A few quick points:

- The _2018 Q1 Performance Data Set_ we will use is 4.6M rows, enough to send `Excel` to a grinding hault, crashing your computer in the process. 

- For `dplyr`, it's actually do-able at 4.6M rows. However, if we were to do the full 25GB, we'd definitely want to use `data.table` to speed things up. 

- We'll do a series of common data manipulation operations including ___joins and grouped time series calculation___ to determine which loans become delinquent in the next 3 months. 

<br>
{% include cta_pain_point2.html %}

### 4.3 Install and Load Libraries

In this tutorial, we'll use the latest Development Version of `dtplyr` installed using `devtools`. All other packages used can be used by installing with `install.packages()`.


{% highlight r %}
devtools::install_github("tidyverse/dtplyr")
{% endhighlight %}

Next, we'll load the the following libraries with `library()`:

- `data.table`: High-performance data wrangling
- `dtplyr`: Interface between `dplyr` and `data.table`
- `tidyverse`: Loads `dplyr` and several other useful R packages
- `vroom`: Fast reading of delimited files (e.g. csv) with `vroom()`
- `tictoc`: Simple timing operations
- `knitr`: Use the `kable()` function for nice HTML tables


{% highlight r %}
# Load data.table & dtplyr interface
library(data.table)
library(dtplyr)

# Core Tidyverse - Loads dplyr
library(tidyverse)

# Fast reading of delimited files (e.g. csv)
library(vroom) # vroom()

# Timing operations
library(tictoc)

# Table Printing
library(knitr) # kable()
{% endhighlight %}


### 4.4 Read the Data

We'll read the data. The column-types are going to be pre-specified to assist in the loading process. The `vroom()` function does the heavy lifting. 

First, I'll setup the paths to the two files I'll be reading: 

1. __Acquisitions_2018Q1.txt__ - Meta-data about each loan
2. __Performance_2018Q1.txt__ - Time series data set with loan performance characteristics over time

For me, the files are stored in a folder called `2019-08-15-dtplyr`. Your paths may be different depending on where the files are stored.


{% highlight r %}
# Paths to files
path_acq  <- "2019-08-15-dtplyr/Acquisition_2018Q1.txt"
path_perf <- "2019-08-15-dtplyr/Performance_2018Q1.txt"
{% endhighlight %}



#### Read the Loan Acquisition Data

Note we specify the columns and types to improve the speed of reading the columns. 


{% highlight r %}
# Loan Acquisitions Data 
col_types_acq <- list(
    loan_id                            = col_factor(),
    original_channel                   = col_factor(NULL),
    seller_name                        = col_factor(NULL),
    original_interest_rate             = col_double(),
    original_upb                       = col_integer(),
    original_loan_term                 = col_integer(),
    original_date                      = col_date("%m/%Y"),
    first_pay_date                     = col_date("%m/%Y"),
    original_ltv                       = col_double(),
    original_cltv                      = col_double(),
    number_of_borrowers                = col_double(),
    original_dti                       = col_double(),
    original_borrower_credit_score     = col_double(),
    first_time_home_buyer              = col_factor(NULL),
    loan_purpose                       = col_factor(NULL),
    property_type                      = col_factor(NULL),
    number_of_units                    = col_integer(),
    occupancy_status                   = col_factor(NULL),
    property_state                     = col_factor(NULL),
    zip                                = col_integer(),
    primary_mortgage_insurance_percent = col_double(),
    product_type                       = col_factor(NULL),
    original_coborrower_credit_score   = col_double(),
    mortgage_insurance_type            = col_double(),
    relocation_mortgage_indicator      = col_factor(NULL))

acquisition_data <- vroom(
      file       = path_acq, 
      delim      = "|", 
      col_names  = names(col_types_acq),
      col_types  = col_types_acq,
      na         = c("", "NA", "NULL"))
{% endhighlight %}

The loan acquisition data contains information about the owner of the loan.


{% highlight r %}
acquisition_data %>% head() %>% kable()
{% endhighlight %}



|loan_id      |original_channel |seller_name            | original_interest_rate| original_upb| original_loan_term|original_date |first_pay_date | original_ltv| original_cltv| number_of_borrowers| original_dti| original_borrower_credit_score|first_time_home_buyer |loan_purpose |property_type | number_of_units|occupancy_status |property_state | zip| primary_mortgage_insurance_percent|product_type | original_coborrower_credit_score| mortgage_insurance_type|relocation_mortgage_indicator |
|:------------|:----------------|:----------------------|----------------------:|------------:|------------------:|:-------------|:--------------|------------:|-------------:|-------------------:|------------:|------------------------------:|:---------------------|:------------|:-------------|---------------:|:----------------|:--------------|---:|----------------------------------:|:------------|--------------------------------:|-----------------------:|:-----------------------------|
|100001040173 |R                |QUICKEN LOANS INC.     |                  4.250|       453000|                360|2018-01-01    |2018-03-01     |           65|            65|                   1|           28|                            791|N                     |C            |PU            |               1|P                |OH             | 430|                                 NA|FRM          |                               NA|                      NA|N                             |
|100002370993 |C                |WELLS FARGO BANK, N.A. |                  4.250|       266000|                360|2018-01-01    |2018-03-01     |           80|            80|                   2|           41|                            736|N                     |R            |PU            |               1|P                |IN             | 467|                                 NA|FRM          |                              793|                      NA|N                             |
|100005405807 |R                |PMTT4                  |                  3.990|       233000|                360|2017-12-01    |2018-01-01     |           79|            79|                   2|           48|                            696|N                     |R            |SF            |               1|P                |CA             | 936|                                 NA|FRM          |                              665|                      NA|N                             |
|100008071646 |R                |OTHER                  |                  4.250|       184000|                360|2018-01-01    |2018-03-01     |           80|            80|                   1|           48|                            767|Y                     |P            |PU            |               1|P                |FL             | 336|                                 NA|FRM          |                               NA|                      NA|N                             |
|100010739040 |R                |OTHER                  |                  4.250|       242000|                360|2018-02-01    |2018-04-01     |           49|            49|                   1|           22|                            727|N                     |R            |SF            |               1|P                |CA             | 906|                                 NA|FRM          |                               NA|                      NA|N                             |
|100012691523 |R                |OTHER                  |                  5.375|       180000|                360|2018-01-01    |2018-03-01     |           80|            80|                   1|           14|                            690|N                     |C            |PU            |               1|P                |OK             | 730|                                 NA|FRM          |                               NA|                      NA|N                             |

Get the size of the acquisitions data set: 426K rows by 25 columns. Not that bad, but this is meta-data for the loan. ___The dataset we are worried about is the next one.___ 


{% highlight r %}
dim(acquisition_data)
{% endhighlight %}



{% highlight text %}
## [1] 426207     25
{% endhighlight %}



#### Read the Loan Performance Data


{% highlight r %}
# Loan Performance Data 
col_types_perf = list(
    loan_id                                = col_factor(),
    monthly_reporting_period               = col_date("%m/%d/%Y"),
    servicer_name                          = col_factor(NULL),
    current_interest_rate                  = col_double(),
    current_upb                            = col_double(),
    loan_age                               = col_double(),
    remaining_months_to_legal_maturity     = col_double(),
    adj_remaining_months_to_maturity       = col_double(),
    maturity_date                          = col_date("%m/%Y"),
    msa                                    = col_double(),
    current_loan_delinquency_status        = col_double(),
    modification_flag                      = col_factor(NULL),
    zero_balance_code                      = col_factor(NULL),
    zero_balance_effective_date            = col_date("%m/%Y"),
    last_paid_installment_date             = col_date("%m/%d/%Y"),
    foreclosed_after                       = col_date("%m/%d/%Y"),
    disposition_date                       = col_date("%m/%d/%Y"),
    foreclosure_costs                      = col_double(),
    prop_preservation_and_repair_costs     = col_double(),
    asset_recovery_costs                   = col_double(),
    misc_holding_expenses                  = col_double(),
    holding_taxes                          = col_double(),
    net_sale_proceeds                      = col_double(),
    credit_enhancement_proceeds            = col_double(),
    repurchase_make_whole_proceeds         = col_double(),
    other_foreclosure_proceeds             = col_double(),
    non_interest_bearing_upb               = col_double(),
    principal_forgiveness_upb              = col_double(),
    repurchase_make_whole_proceeds_flag    = col_factor(NULL),
    foreclosure_principal_write_off_amount = col_double(),
    servicing_activity_indicator           = col_factor(NULL))


performance_data <- vroom(
    file       = path_perf, 
    delim      = "|", 
    col_names  = names(col_types_perf),
    col_types  = col_types_perf,
    na         = c("", "NA", "NULL"))
{% endhighlight %}

Let's inspect the data. We can see that this is a time series where each "Loan ID" and "Monthly Reporting Period" go together. 


{% highlight r %}
performance_data %>% head() %>% kable()
{% endhighlight %}



|loan_id      |monthly_reporting_period |servicer_name      | current_interest_rate| current_upb| loan_age| remaining_months_to_legal_maturity| adj_remaining_months_to_maturity|maturity_date |   msa| current_loan_delinquency_status|modification_flag |zero_balance_code |zero_balance_effective_date |last_paid_installment_date |foreclosed_after |disposition_date | foreclosure_costs| prop_preservation_and_repair_costs| asset_recovery_costs| misc_holding_expenses| holding_taxes| net_sale_proceeds| credit_enhancement_proceeds| repurchase_make_whole_proceeds| other_foreclosure_proceeds| non_interest_bearing_upb| principal_forgiveness_upb|repurchase_make_whole_proceeds_flag | foreclosure_principal_write_off_amount|servicing_activity_indicator |
|:------------|:------------------------|:------------------|---------------------:|-----------:|--------:|----------------------------------:|--------------------------------:|:-------------|-----:|-------------------------------:|:-----------------|:-----------------|:---------------------------|:--------------------------|:----------------|:----------------|-----------------:|----------------------------------:|--------------------:|---------------------:|-------------:|-----------------:|---------------------------:|------------------------------:|--------------------------:|------------------------:|-------------------------:|:-----------------------------------|--------------------------------------:|:----------------------------|
|100001040173 |2018-02-01               |QUICKEN LOANS INC. |                  4.25|          NA|        0|                                360|                              360|2048-02-01    | 18140|                               0|N                 |                  |NA                          |NA                         |NA               |NA               |                NA|                                 NA|                   NA|                    NA|            NA|                NA|                          NA|                             NA|                         NA|                       NA|                        NA|                                    |                                     NA|N                            |
|100001040173 |2018-03-01               |                   |                  4.25|          NA|        1|                                359|                              359|2048-02-01    | 18140|                               0|N                 |                  |NA                          |NA                         |NA               |NA               |                NA|                                 NA|                   NA|                    NA|            NA|                NA|                          NA|                             NA|                         NA|                       NA|                        NA|                                    |                                     NA|N                            |
|100001040173 |2018-04-01               |                   |                  4.25|          NA|        2|                                358|                              358|2048-02-01    | 18140|                               0|N                 |                  |NA                          |NA                         |NA               |NA               |                NA|                                 NA|                   NA|                    NA|            NA|                NA|                          NA|                             NA|                         NA|                       NA|                        NA|                                    |                                     NA|N                            |
|100001040173 |2018-05-01               |                   |                  4.25|          NA|        3|                                357|                              357|2048-02-01    | 18140|                               0|N                 |                  |NA                          |NA                         |NA               |NA               |                NA|                                 NA|                   NA|                    NA|            NA|                NA|                          NA|                             NA|                         NA|                       NA|                        NA|                                    |                                     NA|N                            |
|100001040173 |2018-06-01               |                   |                  4.25|          NA|        4|                                356|                              356|2048-02-01    | 18140|                               0|N                 |                  |NA                          |NA                         |NA               |NA               |                NA|                                 NA|                   NA|                    NA|            NA|                NA|                          NA|                             NA|                         NA|                       NA|                        NA|                                    |                                     NA|N                            |
|100001040173 |2018-07-01               |                   |                  4.25|          NA|        5|                                355|                              355|2048-02-01    | 18140|                               0|N                 |                  |NA                          |NA                         |NA               |NA               |                NA|                                 NA|                   NA|                    NA|            NA|                NA|                          NA|                             NA|                         NA|                       NA|                        NA|                                    |                                     NA|N                            |

Let's check out the data size. We can see it's __4.6M rows by 31 columns!__ Just a typical financial time series (seriously). 


{% highlight r %}
dim(performance_data)
{% endhighlight %}



{% highlight text %}
## [1] 4645448      31
{% endhighlight %}

### 4.5 Convert to Tibbles to dtplyr Steps

Next, we'll use the `lazy_dt()` function to convert the `tibbles` to `dtplyr` steps.


{% highlight r %}
acquisition_data_dtplyr <- lazy_dt(acquisition_data)
performance_data_dtplyr <- lazy_dt(performance_data)
{% endhighlight %}

We can check the `class()` to see what we are working with.


{% highlight r %}
class(acquisition_data_dtplyr)
{% endhighlight %}



{% highlight text %}
## [1] "dtplyr_step_first" "dtplyr_step"
{% endhighlight %}

The returned object is the first step in a `dtplyr` sequence. 

__Key Point:__

- We are going to set up operations using a sequence of steps. 
- The operations will not be fully evaluated until we convert to a `data.table` or `tibble` depending on our desired output. 
<br>
{% include cta_pain_point3.html %}

### 4.6 Join the Data Sets

Our first data manipulation operation is a join. We are going to use the `left_join()` function from `dplyr`. Let's see what happens. 


{% highlight r %}
combined_dtplyr <- performance_data_dtplyr %>%
    left_join(acquisition_data_dtplyr)
{% endhighlight %}

The output of the joining operation is a new step sequence, this time a `dtplyr_step_subset`. 


{% highlight r %}
class(combined_dtplyr)
{% endhighlight %}



{% highlight text %}
## [1] "dtplyr_step_subset" "dtplyr_step"
{% endhighlight %}

Next, let's examine what happens when we print `combined_dt` to the console. 


{% highlight r %}
combined_dtplyr
{% endhighlight %}



{% highlight text %}
## Source: local data table [?? x 55]
## Call:   `_DT2`[`_DT1`, on = .(loan_id)]
## 
##   loan_id monthly_reporti… servicer_name current_interes… current_upb
##   <fct>   <date>           <fct>                    <dbl>       <dbl>
## 1 100001… 2018-02-01       QUICKEN LOAN…             4.25          NA
## 2 100001… 2018-03-01       ""                        4.25          NA
## 3 100001… 2018-04-01       ""                        4.25          NA
## 4 100001… 2018-05-01       ""                        4.25          NA
## 5 100001… 2018-06-01       ""                        4.25          NA
## 6 100001… 2018-07-01       ""                        4.25          NA
## # … with 50 more variables: loan_age <dbl>,
## #   remaining_months_to_legal_maturity <dbl>,
## #   adj_remaining_months_to_maturity <dbl>, maturity_date <date>,
## #   msa <dbl>, current_loan_delinquency_status <dbl>,
## #   modification_flag <fct>, zero_balance_code <fct>,
## #   zero_balance_effective_date <date>,
## #   last_paid_installment_date <date>, foreclosed_after <date>,
## #   disposition_date <date>, foreclosure_costs <dbl>,
## #   prop_preservation_and_repair_costs <dbl>,
## #   asset_recovery_costs <dbl>, misc_holding_expenses <dbl>,
## #   holding_taxes <dbl>, net_sale_proceeds <dbl>,
## #   credit_enhancement_proceeds <dbl>,
## #   repurchase_make_whole_proceeds <dbl>,
## #   other_foreclosure_proceeds <dbl>, non_interest_bearing_upb <dbl>,
## #   principal_forgiveness_upb <dbl>,
## #   repurchase_make_whole_proceeds_flag <fct>,
## #   foreclosure_principal_write_off_amount <dbl>,
## #   servicing_activity_indicator <fct>, original_channel <fct>,
## #   seller_name <fct>, original_interest_rate <dbl>,
## #   original_upb <int>, original_loan_term <int>,
## #   original_date <date>, first_pay_date <date>, original_ltv <dbl>,
## #   original_cltv <dbl>, number_of_borrowers <dbl>,
## #   original_dti <dbl>, original_borrower_credit_score <dbl>,
## #   first_time_home_buyer <fct>, loan_purpose <fct>,
## #   property_type <fct>, number_of_units <int>,
## #   occupancy_status <fct>, property_state <fct>, zip <int>,
## #   primary_mortgage_insurance_percent <dbl>, product_type <fct>,
## #   original_coborrower_credit_score <dbl>,
## #   mortgage_insurance_type <dbl>,
## #   relocation_mortgage_indicator <fct>
## 
## # Use as.data.table()/as.data.frame()/as_tibble() to access results
{% endhighlight %}

__Key Points:__

- The important piece is the ___`data.table` translation code___, which we can see in the ouput: `Call: _DT2[_DT1, on = .(loan_id)]`
 
- Note that we haven't excecuted the data manipulation operation. `dtplyr` smartly gives us a glimpse of what the operation will look like though, which is really cool. 

### 4.7 Wrangle the Data {#section4_7}

We'll do a sequence of data wrangling operations:

- Select specific columns we want to keep
- Arrange by `loan_id` and `monthly_reporting_period`. This is needed to keep groups together and in the right time-stamp order.
- Group by `loan_id` and mutate to calculate whether or not loans become delinquent in the next 3 months. 
- Filter rows with `NA` values from the newly created column (these aren't needed)
- Reorder the columns to put the new calculated column first. 


{% highlight r %}
final_output_dtplyr <- combined_dtplyr %>%
    select(loan_id, monthly_reporting_period, 
           current_loan_delinquency_status) %>%
    arrange(loan_id, monthly_reporting_period) %>%
    
    group_by(loan_id) %>%
    mutate(gt_1mo_behind_in_3mo = lead(current_loan_delinquency_status, n = 3) >= 1) %>%
    ungroup() %>%
    
    filter(!is.na(gt_1mo_behind_in_3mo)) %>%
    select(gt_1mo_behind_in_3mo, everything())
{% endhighlight %}

The final output is a `dtplyr_step_group`, which is just a sequence of steps.


{% highlight r %}
class(final_output_dtplyr)
{% endhighlight %}



{% highlight text %}
## [1] "dtplyr_step_group" "dtplyr_step"
{% endhighlight %}

If we print the `final_output_dt` object, we can see the _data.table translation_ is pretty intense. 


{% highlight r %}
final_output_dtplyr
{% endhighlight %}



{% highlight text %}
## Source: local data table [?? x 4]
## Call:   `_DT2`[`_DT1`, .(loan_id, monthly_reporting_period, current_loan_delinquency_status), 
##     on = .(loan_id)][order(loan_id, monthly_reporting_period)][, 
##     `:=`(gt_1mo_behind_in_3mo = lead(current_loan_delinquency_status, 
##         n = 3) >= 1), keyby = .(loan_id)][!is.na(gt_1mo_behind_in_3mo), 
##     .(gt_1mo_behind_in_3mo, loan_id, monthly_reporting_period, 
##         current_loan_delinquency_status)]
## 
##   gt_1mo_behind_in_… loan_id   monthly_reporting… current_loan_delinq…
##   <lgl>              <fct>     <date>                            <dbl>
## 1 FALSE              10000104… 2018-02-01                            0
## 2 FALSE              10000104… 2018-03-01                            0
## 3 FALSE              10000104… 2018-04-01                            0
## 4 FALSE              10000104… 2018-05-01                            0
## 5 FALSE              10000104… 2018-06-01                            0
## 6 FALSE              10000104… 2018-07-01                            0
## 
## # Use as.data.table()/as.data.frame()/as_tibble() to access results
{% endhighlight %}

__Key Point__:

- The most important piece is that `dtplyr` correctly converted the grouped mutation to an __inplace calculation__, which is `data.table` speak for a super-fast calculation that makes no copies of the data. Here's inplace calculation code from the `dtplyr` translation: `[, :=(gt_1mo_behind_in_3mo = lead(current_loan_delinquency_status, n = 3) >= 1), keyby = .(loan_id)]`

### 4.8 Collecting The Data

Note that up until now, ___nothing has been done to process the data___ - we've just created a _recipe_ for data wrangling. We still need tell `dtplyr` to execute the data wrangling operations. 

To implement all of the steps and convert the `dtplyr` sequence to a `tibble`, we just call `as_tibble()`.


{% highlight r %}
final_output_dtplyr %>% as_tibble()
{% endhighlight %}



{% highlight text %}
## # A tibble: 3,352,231 x 4
##    gt_1mo_behind_in_… loan_id  monthly_reporting… current_loan_delinq…
##    <lgl>              <fct>    <date>                            <dbl>
##  1 FALSE              1000010… 2018-02-01                            0
##  2 FALSE              1000010… 2018-03-01                            0
##  3 FALSE              1000010… 2018-04-01                            0
##  4 FALSE              1000010… 2018-05-01                            0
##  5 FALSE              1000010… 2018-06-01                            0
##  6 FALSE              1000010… 2018-07-01                            0
##  7 FALSE              1000010… 2018-08-01                            0
##  8 FALSE              1000010… 2018-09-01                            0
##  9 FALSE              1000023… 2018-03-01                            0
## 10 FALSE              1000023… 2018-04-01                            0
## # … with 3,352,221 more rows
{% endhighlight %}

__Key Point__:

- Calling the `as_tibble()` function tells `dtplyr` to execute the `data.table` wrangling operations. 


## 5.0 The 3X Speedup - Time Comparisons {#section5}

Finally, let's check the performance of the `dplyr` vs `dtplyr` vs `data.table`. We can seed a nice __3X speed boost!__

### 5.1 Time using dplyr


{% highlight r %}
tic()
performance_data %>%
    left_join(acquisition_data) %>%
    
    select(loan_id, monthly_reporting_period, 
           current_loan_delinquency_status) %>%
    arrange(loan_id, monthly_reporting_period) %>%
    
    group_by(loan_id) %>%
    mutate(gt_1mo_behind_in_3mo = lead(current_loan_delinquency_status, n = 3) >= 1) %>%
    ungroup() %>%
    
    filter(!is.na(gt_1mo_behind_in_3mo)) %>%
    select(gt_1mo_behind_in_3mo, everything())
{% endhighlight %}


{% highlight r %}
toc()
{% endhighlight %}



{% highlight text %}
## 15.905 sec elapsed
{% endhighlight %}



### 5.2 Time using dtplyr


{% highlight r %}
tic()
performance_data_dtplyr %>%
    left_join(acquisition_data_dtplyr) %>%
    
    select(loan_id, monthly_reporting_period, 
           current_loan_delinquency_status) %>%
    arrange(loan_id, monthly_reporting_period) %>%
    
    group_by(loan_id) %>%
    mutate(gt_1mo_behind_in_3mo = lead(current_loan_delinquency_status, n = 3) >= 1) %>%
    ungroup() %>%
    
    filter(!is.na(gt_1mo_behind_in_3mo)) %>%
    select(gt_1mo_behind_in_3mo, everything()) %>%
    
    as_tibble()
{% endhighlight %}


{% highlight r %}
toc()
{% endhighlight %}



{% highlight text %}
## 4.821 sec elapsed
{% endhighlight %}


### 5.3 Time using data.table


{% highlight r %}
DT1 <- as.data.table(performance_data)
DT2 <- as.data.table(acquisition_data)

tic()
DT2[DT1, .(loan_id, monthly_reporting_period, current_loan_delinquency_status), on = .(loan_id)] %>%
  .[order(loan_id, monthly_reporting_period)] %>%
  .[, gt_1mo_behind_in_3mo := lead(current_loan_delinquency_status, n = 3) >= 1, keyby = .(loan_id)] %>%
  .[!is.na(gt_1mo_behind_in_3mo), .(gt_1mo_behind_in_3mo, loan_id, monthly_reporting_period, current_loan_delinquency_status)]
{% endhighlight %}


{% highlight r %}
toc()
{% endhighlight %}



{% highlight text %}
## 4.627 sec elapsed
{% endhighlight %}

## 6.0 Conclusions and Learning Recommendations {#section6}

__For Big Data wrangling__, the `dtplyr` package represents a ___huge opportunity___ for data scientists to leverage the _speed_ of `data.table` with the _readability_ of `dplyr`. We saw an impressive ___3X Speedup___ going from `dplyr` to using `dtplyr` for wrangling a 4.6M row data set. This just scratches the surface of the potential, and I'm looking forward to seeing `dtplyr` mature, which will help bridge the gap between the two groups of data scientists using `dplyr` and `data.table`.

For new data scientists coming from other tools like `Excel`, my hope is that you see the awesome potential of learning `R` for data analysis and data science. The Big Data capabilities represent a ___massive opportunity for you to bring your organization data science at scale.___

### You just need to learn how to go from normal data to Big Data.

___My recommendation is to start by learning `dplyr`___ - The popular data manipulation library that makes reading and writing R code very ___easy to understand___.

Once you get to an intermediate level, learn `data.table`. This is where you gain the benefits of scaling data science to Big Data. The `data.table` package has a steeper learning curve, but learning it will help you leverage its full performance and scalability.

___If you need to learn `dplyr` as fast as possible___ - I recommend beginning with our ___Data Science Foundations DS4B 101-R Course___. The 101 Course is available as part of the [___3-Course R-Track Bundle___](https://university.business-science.io/p/machine-learning-web-apps-level-1-bundle-r-track-courses-101-102-201/?coupon_code=ds4b15), a _complete learning system_ designed to transform you from beginner to advanced in under 6-months. You will learn everything you need to ___become an expert data scientist___.  

<br>
{% include cta_rtrack.html %}


## 7.0 Additional Big Data Guidelines {#section7}

I find that students have an easier time picking a tool based on ___dataset row size___ (e.g. I have 10M rows, what should I use?). With that said, there are __2 factors__ that will influence whhich tools you need to use:

1. __Are you performing Grouped and Iterative Operations?__ Performance even on normal data sets can become an issue if you have a lot of groups or if the calculation is iterative. A particular source of pain in the financial realm are ___rolling (window) calculations___, which are both grouped and iterative within groups. In these situation, use high-performance C++ functions (e.g. Rolling functions from the [`roll` package](https://github.com/jjf234/roll) or [`RcppRoll` package](https://github.com/kevinushey/RcppRoll)).

2. __Do you have sufficient RAM?__ Once you begin working with gig's of data, then you start to run out of memory (RAM). In these situations, you will need to work in chunks and parellelizing operations. You can do this with distributed [`sparklyr`](https://spark.rstudio.com/), which will perform some operations in parallel and distribute across nodes.

## 8.0 Recognizing the Developers {#section8}

I'd like to take a quick moment to thank the developers of `data.table` and `dplyr`. Without these two packages, _Business Science_ probably would not exist. Thank you. 

- [__Matt Dowle__](https://twitter.com/mattdowle) - Creator of `data.table` in R. Check out the [R data.table website](https://github.com/Rdatatable/data.table/wiki). 

- [__Hadley Wickham__](https://twitter.com/hadleywickham) - Creator of `dplyr` and `dtplyr`. Check out the [dplyr website](https://dplyr.tidyverse.org/) and the new [dtplyr website](https://github.com/tidyverse/dtplyr).

## 9.0 Coming Soon - Expert Shiny Apps Course! {#section9}

I'm very excited to announce that Business Science has an __Expert Shiny Course - Coming soon!__ [Head over to Business Science University and create a free account.](https://university.business-science.io/) I will update you with the details shortly. 

<br>
{% include cta_expert_shiny.html %}
