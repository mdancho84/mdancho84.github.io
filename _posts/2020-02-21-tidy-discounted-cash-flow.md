---
layout: post
title: "Tidy Discounted Cash Flow Analysis in R (for Company Valuation)"
date:   2020-02-21 09:12:01
excerpt: "Learn how to use the Tidy Data Principles to perform a discounted cash flow analysis for Saudi Aramco, an oil giant with a value listed of 1.7 Trillion USD"
author: "Rafael Nicolas Fermin Cota"
categories: [Finance]
tags: [R-Bloggers, Learn-R, Learn-Finance, tabulizer, fuzzyjoin, rvest, tidyverse]
image: 2020-02-21-dcf/tidy-discounted-cash-flow.jpg
image_preview: 2020-02-21-dcf/tidy-discounted-cash-flow.jpg
---



The ___tidy data principles___ are a cornerstone of financial data management and the data modeling workflow. The foundation for tidy data management is the `tidyverse`, a collection of R packages, that work in harmony, are built for scalability, and are taught at [__Business Science University__](https://www.business-science.io/). Using this infrastructure and the core tidy concepts, we can apply the tidy data principles to the [__Saudi Aramco Discounted	Cash Flow (DCF)	Valuation__](#). 

    

#### R Packages Covered

<div class="pull-right hidden-xs" style="width:50%; margin-left:20px;">
  <img class="img-responsive" src="/assets/2020-02-21-dcf/tidy-discounted-cash-flow.jpg"> 
</div>

__Scraping and Tidying Unclean Data__

* `tidyverse` - An ecosystem for wrangling and visualizing data in `R`
* `tabulizer` - PDF Scraping
* `fuzzyjoin` - Joining data with inexact matching
* `rvest` - Web Scraping
* `tidyxl` - Importing non-tabular (non-tidy) Excel Data



## Tidy DCF Workflow

In this post, we'll use the following workflow for performing and automating DCF Analysis. 

![Tidy DCF Workflow for Company Valuation](/assets/2020-02-21-dcf/tidyverse_dcf_workflow.jpg)

<p class="date text-center">
Workflow for Tidy DCF Analysis and Company Valuation
</p>

The article is split into two sections:

- [__Part 1 - Data Sources__](#data-sources): Collect DCF input data with PDF Scraping, Web Scraping, API's, and tidy the data into a single DCF Inputs that can be used for Part 2.

- [__Part 2 - DCF Company Valuation__](#dcf-valuation): Model Saudi Aramco's Company Valuation. Perform sensitivity analysis given various risks to our model. 



<hr>

__Need to learn Data Science for Business?__ This is an advanced tutorial, but you can get the foundational skills, advanced machine learning, business consulting, and web application development using `R`, `Shiny` (Apps), `H2O` (Machine Learning), `AWS` (Cloud), and `tidyverse` (Data Science). I recommend Business Science's [__4-Course R-Track for Business Bundle__](https://university.business-science.io/p/4-course-bundle-machine-learning-and-web-applications-r-track-101-102-201-202a/?coupon_code=ds4b15). 

{% include cta_rtrack.html %}

<br>

## Part 1 - Data Sources {#data-sources}

<div class="pull-right hidden-xs" style="width:30%; margin-left:20px;">
  <img class="img-responsive" src="/assets/2020-02-21-dcf/prospectus.jpg"> 
  <p class="text-center">Saudi Aramco Prospectus<br><small>658 Pages of data in PDF format</small></p>
</div>

Saudi Aramco has set a price range for its listing that implies the oil giant is worth between USD \$1.6 trillion and US \$1.7 trillion, making it potentially the world's biggest IPO. The numbers that are laid out in the [Saudi Aramco Prospectus](https://www.saudiaramco.com/-/media/images/investors/saudi-aramco-prospectus-en.pdf){:target="_blank"} are impressive, painting a picture of the most profitable company in the world, with almost unassailable competitive advantages. __In this post, I valued Saudi Aramco between US\$1.69 and US\$1.83 trillion using the following R packages.__

#### tabulizer

The [tabulizer package](https://docs.ropensci.org/tabulizer/){:target="_blank"} provides a suite of tools for extracting data from _PDFs_. We will use the `extract_tables()` function to pull out tables 42 (pg 131 - gearing), 43 (pg 132 - capital), 45 (pg 133 - income statement) and 52 (pg 144 - balance sheet) from the Saudi Aramco Prospectus. 

#### fuzzyjoin

The [fuzzyjoin package](https://github.com/dgrtwo/fuzzyjoin){:target="_blank"} is a variation on __dplyr__’s [join](https://dplyr.tidyverse.org/reference/join.html){:target="_blank"} operations that allows matching not just on values that match between columns, but on inexact matching. This allows the Aramco's financial accounts (e.g., gearing, capital, income statement, balance sheet) to be quickly matched with the tables it is reported on and without having to looking for the correct location in the prospectus, a behemoth weighing in at 658 pages.


#### World Bank Data API

The World Bank makes available a large body of economic data from the [World Development Indicators](http://datatopics.worldbank.org/world-development-indicators/){:target="_blank"} through its web API. 

The [WDI package for R](https://cran.r-project.org/web/packages/WDI/index.html){:target="_blank"}  makes it easy to search and download the annual percentage growth rate of Gross Domestic Product (GDP) for Saudi Arabia (Indicator: NY.GDP.MKTP.KD.ZG). 

#### rvest

The [rvest package](https://rvest.tidyverse.org/){:target="_blank"} makes it easy to scrape daily treasury yield curve rates from the website of the [U.S. Deparment of the Treasury](https://www.treasury.gov/resource-center/data-chart-center/interest-rates/pages/textview.aspx?data=yield){:target="_blank"}. Here, I use it with `magrittr` so that I can express complex operations as elegant pipelines composed of simple, easily understood pieces.

#### tidyxl

The [tidyxl package](https://nacnudus.github.io/tidyxl/){:target="_blank"} imports non-tabular data from Excel files into R. It exposes cell content, position, formatting and comments in a tidy structure for further manipulation. I use `tidyxl` to capture Damodaran's spreadsheets (risk premium, credit spread, unlevered beta, marginal tax rate) in a tidy fashion allowing for seamless interaction between rows and columns.

### 1.1 Libraries and Set Up

Install and load the following R packages to complete this tutorial. A few points to avoid frustration:

- The `tabulizer` package depends on Java and `rJava` libraries. This can be amazingly frustrating to get set up (see my next point). 
- To replicate my set up, I installed the [Java 11 JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html){:target="_blank"}. 
- I have several versions of Java (not uncommon for developers). Using `Sys.setenv()`, I pointed R to the version of Java that I wanted `tabulizer` to use. 


{% highlight r %}
Sys.setenv(JAVA_HOME="/Library/Java/JavaVirtualMachines/jdk-11.0.1.jdk/Contents/Home/")

library(knitr)
library(kableExtra)
library(ggpage)
library(magrittr)
library(tidyverse)
library(WDI)
library(pdftools)
library(tabulizer)
library(fuzzyjoin)
library(rvest)
library(janitor)
library(tidyxl)
{% endhighlight %}


### 1.2 Prospectus

In this section, I extract financial data from the prospectus, using `tabulizer` and `fuzzyjoin`. It automates work that would have taken significant manual collection and manipulation.



{% highlight r %}
# Automated Data Extraction Functions for Saudi Aramco Prospectus 

# Download Helper - Creates a Data folder
download.f <- function(url) {
  data.folder = file.path(getwd(), 'data')  # setup temp folder
  if (!dir.exists(data.folder)){dir.create(data.folder, F)}
  filename = file.path(data.folder, basename(url))
  if(!file.exists(filename))
    tryCatch({ download.file(url, filename, mode='wb') }, 
             error = function(ex) cat('', file=filename))
  message(paste0('File located at: ', filename))
  filename
}

# Tidy PDF Scraping and Fuzzy Joining Helper
extract.values.f <- function(pdf.file, page, names){
  require(tabulizer)
  require(fuzzyjoin) # regex_inner_join()
  
  # PDF: https://www.saudiaramco.com/-/media/images/investors/saudi-aramco-prospectus-en.pdf
  # Locate table areas
  area = case_when(
    page == 220  ~ c(459.77, 69.76, 601, 427.98), # Table 42 (pg 131)
    page == 221  ~ c(168.03, 69.76, 394.53, 404.59), # Table 43 (pg 132)
    page == 222  ~ c(180.11, 68.38, 413.04, 412.05), # Table 45 (pg 133)
    page == 233  ~ c(181.57, 70.99, 673.96, 448.91) # Table 52 (pg 144)
  )
  
  # Extract the tables
  extract_tables(
      pdf.file, 
      pages  = page, 
      area   = list(area), 
      guess  = FALSE, 
      output = "data.frame"
    ) %>% 
    purrr::pluck(1) %>%
    map_dfc(~trimws(gsub("\\.|[[:punct:]]", "", .x))) %>%
    set_names( c("Heading", paste0("X", if(page==233){1:4}else{0:4})) ) %>%
    regex_inner_join(
      data.frame(regex_name = names, stringsAsFactors = FALSE), 
      by = c(Heading = "regex_name")
    ) %>%
    select(X4) %>% 
    pull() %>% 
    as.numeric()
}

url <- 'https://www.saudiaramco.com/-/media/images/investors/saudi-aramco-prospectus-en.pdf'

prospectus.pdf <- download.f(url)
{% endhighlight %}


{% highlight text %}
## File located at: /Users/nico/aramco/data/saudi-aramco-prospectus-en.pdf
{% endhighlight %}


For working with function programming, we solve the issue for one element, wrap the code inside a function, and then simply map `extract.values.f()` to a list of elements in different tables (42, 43, 45 and 52).

#### 1.2.1 Reserves Life

Saudi Aramco's average reserve life is 52 years, versus 17 years at it's closest competitor,  [ExxonMobil](https://corporate.exxonmobil.com/Investors/Annual-Report/Upstream/Resources-and-proved-reserves){:target="_blank"}. __Saudi Aramco's crude reserves are about five times (5X) that of the combined oil reserves of the five major international oil companies, comprising ExxonMobil, Shell, Chevron, Total, and BP.__


{% highlight r %}
# 4.6.1.2 - Long reserves life
inputs <- prospectus.pdf %>% 
  pdf_text() %>% 
  read_lines() %>% 
  grep("proved reserves life", ., value = TRUE) %>% 
  str_match_all("[0-9]+") %>% 
  pluck(1) %>% 
  unlist() %>% 
  first() %>% 
  as.numeric() %>% 
  set_names(c("LONG_RESERVES_LIFE")) %>% 
  as.list()

inputs %>% enframe() %>% unnest(value) %>% kable()
{% endhighlight %}

<table>
 <thead>
  <tr>
   <th style="text-align:left;"> name </th>
   <th style="text-align:right;"> value </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> LONG_RESERVES_LIFE </td>
   <td style="text-align:right;"> 52 </td>
  </tr>
</tbody>
</table>

#### 1.2.2 Gearing

Gearing is a measure of the degree to which Saudi Aramco’s operations are financed by debt. It is widely used by analysts and investors in the oil and gas industry to indicate a company’s financial health and flexibility.


{% highlight r %}
# Table 42 - Gearing and reconciliation
inputs <- extract.values.f(
    pdf.file = prospectus.pdf, 
    page     = 220, 
    names    = c("Total borrowings", "Cash and cash equivalents", 
                 "Total equity")
  ) %>% 
  set_names(c("TOTAL_BORROWINGS", "CASH_AND_CASH_EQUIVALENTS", 
              "TOTAL_EQUITY")) %>%
  as.list() %>% 
  append(inputs, .)

inputs %>% enframe() %>% unnest(value) %>% kable()
{% endhighlight %}

<table>
 <thead>
  <tr>
   <th style="text-align:left;"> name </th>
   <th style="text-align:right;"> value </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> LONG_RESERVES_LIFE </td>
   <td style="text-align:right;"> 52 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TOTAL_BORROWINGS </td>
   <td style="text-align:right;"> 27018 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> CASH_AND_CASH_EQUIVALENTS </td>
   <td style="text-align:right;"> 48841 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TOTAL_EQUITY </td>
   <td style="text-align:right;"> 274249 </td>
  </tr>
</tbody>
</table>

#### 1.2.3 Capital

Saudi Aramco has a comprehensive and disciplined internal approval process for capital allocation. Average capital employed is the average of Saudi Aramco’s total borrowings plus total equity at the beginning and end of the applicable period.


{% highlight r %}
# Table 43 - Return on Average Capital Employed (ROACE) and reconciliation
inputs <- extract.values.f(
    pdf.file = prospectus.pdf, 
    page     = 221, 
    names    = c("Capital employed")
  ) %>% 
  last() %>% 
  set_names(c("CAPITAL_EMPLOYED")) %>%
  as.list() %>% 
  append(inputs, .)

inputs %>% enframe() %>% unnest(value) %>% kable()
{% endhighlight %}

<table>
 <thead>
  <tr>
   <th style="text-align:left;"> name </th>
   <th style="text-align:right;"> value </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> LONG_RESERVES_LIFE </td>
   <td style="text-align:right;"> 52 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TOTAL_BORROWINGS </td>
   <td style="text-align:right;"> 27018 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> CASH_AND_CASH_EQUIVALENTS </td>
   <td style="text-align:right;"> 48841 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TOTAL_EQUITY </td>
   <td style="text-align:right;"> 274249 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> CAPITAL_EMPLOYED </td>
   <td style="text-align:right;"> 301267 </td>
  </tr>
</tbody>
</table>

#### 1.2.4 Income Statement

The numbers in the financial statement are impressive, painting a picture of the most profitable company in the world, with almost unassailable competitive advantages.


{% highlight r %}
# Table 45 - Income statement
inputs <- extract.values.f(
    pdf.file = prospectus.pdf, 
    page = 222, 
    names = c("Operating income", "Income taxes", 
              "Income before income taxes", "Net income")
  ) %>% 
  set_names(c("OPERATING_INCOME", "INCOME_BEFORE_INCOME_TAXES", 
              "INCOME_TAXES", "NET_INCOME")) %>%
  as.list() %>% 
  append(inputs, .)

inputs %>% enframe() %>% unnest(value) %>% kable()
{% endhighlight %}

<table>
 <thead>
  <tr>
   <th style="text-align:left;"> name </th>
   <th style="text-align:right;"> value </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> LONG_RESERVES_LIFE </td>
   <td style="text-align:right;"> 52 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TOTAL_BORROWINGS </td>
   <td style="text-align:right;"> 27018 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> CASH_AND_CASH_EQUIVALENTS </td>
   <td style="text-align:right;"> 48841 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TOTAL_EQUITY </td>
   <td style="text-align:right;"> 274249 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> CAPITAL_EMPLOYED </td>
   <td style="text-align:right;"> 301267 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> OPERATING_INCOME </td>
   <td style="text-align:right;"> 212908 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INCOME_BEFORE_INCOME_TAXES </td>
   <td style="text-align:right;"> 212772 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INCOME_TAXES </td>
   <td style="text-align:right;"> 101701 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> NET_INCOME </td>
   <td style="text-align:right;"> 111071 </td>
  </tr>
</tbody>
</table>

#### 1.2.5 Balance Sheet 

Saudi Aramco’s unique reserves and resources base, operational flexibility, field management, and strong cash flow generation serve as a foundation for its low gearing and flexible balance sheet.


{% highlight r %}
# Table 52 - Balance sheet
inputs <- extract.values.f(
  pdf.file = prospectus.pdf, 
  page     = 233, 
  names    = c("Shareholders equity", "Investment in joint ventures and associates", 
               "Investment in securities", "Noncontrolling interests")
  ) %>% 
  purrr::discard(is.na) %>% 
  set_names(c("INVESTMENT_JOINT_VENTURES_ASSOCIATES", "INVESTMENT_SECURITIES", 
              "SHAREHOLDERS_EQUITY", "NON_CONTROLLING_INTERESTS")) %>%
  as.list() %>% 
  append(inputs, .)

inputs %>% enframe() %>% unnest(value) %>% kable()
{% endhighlight %}

<table>
 <thead>
  <tr>
   <th style="text-align:left;"> name </th>
   <th style="text-align:right;"> value </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> LONG_RESERVES_LIFE </td>
   <td style="text-align:right;"> 52 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TOTAL_BORROWINGS </td>
   <td style="text-align:right;"> 27018 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> CASH_AND_CASH_EQUIVALENTS </td>
   <td style="text-align:right;"> 48841 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TOTAL_EQUITY </td>
   <td style="text-align:right;"> 274249 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> CAPITAL_EMPLOYED </td>
   <td style="text-align:right;"> 301267 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> OPERATING_INCOME </td>
   <td style="text-align:right;"> 212908 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INCOME_BEFORE_INCOME_TAXES </td>
   <td style="text-align:right;"> 212772 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INCOME_TAXES </td>
   <td style="text-align:right;"> 101701 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> NET_INCOME </td>
   <td style="text-align:right;"> 111071 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INVESTMENT_JOINT_VENTURES_ASSOCIATES </td>
   <td style="text-align:right;"> 6021 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INVESTMENT_SECURITIES </td>
   <td style="text-align:right;"> 4590 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> SHAREHOLDERS_EQUITY </td>
   <td style="text-align:right;"> 271142 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> NON_CONTROLLING_INTERESTS </td>
   <td style="text-align:right;"> 3107 </td>
  </tr>
</tbody>
</table>

### 1.3 World Bank GDP

For Saudi Aramco, the growth rate in earnings corresponds closely to the growth in Saudi Arabia's GDP. The reason is simple. Saudi Arabia derives almost 80% of its GDP from oil. 


{% highlight r %}
# World Development Indicators (WDI)
inputs <- WDI::WDI(
    country=c("SAU"), 
    indicator="NY.GDP.MKTP.KD.ZG", # = GDP growth (annual %)
    start=2018, 
    end=2018
  ) %>%
  pull("NY.GDP.MKTP.KD.ZG") %>%
  set_names(c("GDP_GROWTH")) %>% #  (annual %)
  as.list() %>% 
  append(inputs, .)

inputs %>% enframe() %>% unnest(value) %>% kable()
{% endhighlight %}

<table>
 <thead>
  <tr>
   <th style="text-align:left;"> name </th>
   <th style="text-align:right;"> value </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> LONG_RESERVES_LIFE </td>
   <td style="text-align:right;"> 5.200000e+01 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TOTAL_BORROWINGS </td>
   <td style="text-align:right;"> 2.701800e+04 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> CASH_AND_CASH_EQUIVALENTS </td>
   <td style="text-align:right;"> 4.884100e+04 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TOTAL_EQUITY </td>
   <td style="text-align:right;"> 2.742490e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> CAPITAL_EMPLOYED </td>
   <td style="text-align:right;"> 3.012670e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> OPERATING_INCOME </td>
   <td style="text-align:right;"> 2.129080e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INCOME_BEFORE_INCOME_TAXES </td>
   <td style="text-align:right;"> 2.127720e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INCOME_TAXES </td>
   <td style="text-align:right;"> 1.017010e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> NET_INCOME </td>
   <td style="text-align:right;"> 1.110710e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INVESTMENT_JOINT_VENTURES_ASSOCIATES </td>
   <td style="text-align:right;"> 6.021000e+03 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INVESTMENT_SECURITIES </td>
   <td style="text-align:right;"> 4.590000e+03 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> SHAREHOLDERS_EQUITY </td>
   <td style="text-align:right;"> 2.711420e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> NON_CONTROLLING_INTERESTS </td>
   <td style="text-align:right;"> 3.107000e+03 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> GDP_GROWTH </td>
   <td style="text-align:right;"> 2.434111e+00 </td>
  </tr>
</tbody>
</table>

### 1.4 U.S.Treasuries

We use the 10-Year U.S. Treasury Rate because the currency choice for the Saudi Aramco discounted cash flow valuation is U.S. dollars.


{% highlight r %}
treasury.rates.f <- function(year=2019){
  require(rvest)
  require(janitor)
  # year=calendar year to pull results for
  
  # Data is generally updated at the end of each business day
  rate_url <- paste(
    'https://www.treasury.gov/resource-center/data-chart-center/interest-rates/Pages/TextView.aspx?data=yieldYear&year=', 
    year, 
    sep=''
  )
  
  #  1 mo, 2 mo, 3 mo, 6 mo, 1 yr, 2 yr, 3 yr, 5 yr, 7 yr, 10 yr, 20 yr, 30 yr
  rates_raw <- read_html(rate_url) %>%
    html_node('.t-chart') %>%
    html_table()
  
  # Returns treasury rates for the given duration
  rates <- rates_raw %>%
    clean_names(.) %>%
    mutate(
      date = as.Date(date, "%m/%d/%y"),
      month = factor(months(date), levels=month.name)
    ) %>%
    mutate_at(
      vars(-one_of("date", "month")),
      as.numeric
    )
  
  summary <- rates %>%
    select(-date) %>%
    group_by(month) %>%
    summarise_all(list(mean))
  
  return(summary)
}

rates <- treasury.rates.f(2019) # last update dec 7, 2019

inputs <- rates %>%
  select(x10_yr) %>%
  slice(n()) %>% # Dec 10_yr Avg.
  pull() %>% 
  set_names(c("TREASURY_YIELD_10YR")) %>%
  as.list() %>% 
  append(inputs, .)

inputs %>% enframe() %>% unnest(value) %>% kable()
{% endhighlight %}

<table>
 <thead>
  <tr>
   <th style="text-align:left;"> name </th>
   <th style="text-align:right;"> value </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> LONG_RESERVES_LIFE </td>
   <td style="text-align:right;"> 5.200000e+01 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TOTAL_BORROWINGS </td>
   <td style="text-align:right;"> 2.701800e+04 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> CASH_AND_CASH_EQUIVALENTS </td>
   <td style="text-align:right;"> 4.884100e+04 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TOTAL_EQUITY </td>
   <td style="text-align:right;"> 2.742490e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> CAPITAL_EMPLOYED </td>
   <td style="text-align:right;"> 3.012670e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> OPERATING_INCOME </td>
   <td style="text-align:right;"> 2.129080e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INCOME_BEFORE_INCOME_TAXES </td>
   <td style="text-align:right;"> 2.127720e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INCOME_TAXES </td>
   <td style="text-align:right;"> 1.017010e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> NET_INCOME </td>
   <td style="text-align:right;"> 1.110710e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INVESTMENT_JOINT_VENTURES_ASSOCIATES </td>
   <td style="text-align:right;"> 6.021000e+03 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INVESTMENT_SECURITIES </td>
   <td style="text-align:right;"> 4.590000e+03 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> SHAREHOLDERS_EQUITY </td>
   <td style="text-align:right;"> 2.711420e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> NON_CONTROLLING_INTERESTS </td>
   <td style="text-align:right;"> 3.107000e+03 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> GDP_GROWTH </td>
   <td style="text-align:right;"> 2.434111e+00 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TREASURY_YIELD_10YR </td>
   <td style="text-align:right;"> 1.862857e+00 </td>
  </tr>
</tbody>
</table>

### 1.5 Damodaran Online

#### 1.5.1 Risk Premium

Damodaran's equity risk premium is calculated by adding the mature market premium estimated for the US to the country-specific risk premium. To arrive at Saudi Arabia's equity risk premium, Damodaran augmented the default spread by a scaling factor to reflect the higher risk of equity.


{% highlight r %}
risk.premium.f <- function(){
  require(tidyxl) 
  
  url <- 'http://pages.stern.nyu.edu/~adamodar/pc/datasets/ctrypremJuly19.xlsx'
  data_file <- download.f(url)
  tidy_table <- xlsx_cells(data_file, sheets = "ERPs by country") %>% 
    filter(!is_blank, row >= 7 & row <=162) %>%
    select(row, col, data_type, character, numeric)
  # equity risk premium with a country risk premium for Saudi Arabia added to 
  # the mature market premium estimated for the US. 
  i <- tidy_table %>% filter(character=="Saudi Arabia") %>% pull(row)
  j <- tidy_table %>% filter(character=="Total Equity Risk Premium") %>% pull(col)
  v <- tidy_table %>% filter(row == i & col == j) %>% pull(numeric)
  return(v * 100)
}

erp <- risk.premium.f()
{% endhighlight %}


{% highlight text %}
## File located at: /Users/nico/aramco/data/ctrypremJuly19.xlsx
{% endhighlight %}


{% highlight r %}
inputs <- erp %>%
  set_names(c("EQUITY_RISK_PREMIUM")) %>%
  as.list() %>% 
  append(inputs, .)

inputs %>% enframe() %>% unnest(value) %>% kable()
{% endhighlight %}

<table>
 <thead>
  <tr>
   <th style="text-align:left;"> name </th>
   <th style="text-align:right;"> value </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> LONG_RESERVES_LIFE </td>
   <td style="text-align:right;"> 5.200000e+01 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TOTAL_BORROWINGS </td>
   <td style="text-align:right;"> 2.701800e+04 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> CASH_AND_CASH_EQUIVALENTS </td>
   <td style="text-align:right;"> 4.884100e+04 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TOTAL_EQUITY </td>
   <td style="text-align:right;"> 2.742490e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> CAPITAL_EMPLOYED </td>
   <td style="text-align:right;"> 3.012670e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> OPERATING_INCOME </td>
   <td style="text-align:right;"> 2.129080e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INCOME_BEFORE_INCOME_TAXES </td>
   <td style="text-align:right;"> 2.127720e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INCOME_TAXES </td>
   <td style="text-align:right;"> 1.017010e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> NET_INCOME </td>
   <td style="text-align:right;"> 1.110710e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INVESTMENT_JOINT_VENTURES_ASSOCIATES </td>
   <td style="text-align:right;"> 6.021000e+03 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INVESTMENT_SECURITIES </td>
   <td style="text-align:right;"> 4.590000e+03 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> SHAREHOLDERS_EQUITY </td>
   <td style="text-align:right;"> 2.711420e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> NON_CONTROLLING_INTERESTS </td>
   <td style="text-align:right;"> 3.107000e+03 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> GDP_GROWTH </td>
   <td style="text-align:right;"> 2.434111e+00 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TREASURY_YIELD_10YR </td>
   <td style="text-align:right;"> 1.862857e+00 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> EQUITY_RISK_PREMIUM </td>
   <td style="text-align:right;"> 6.463396e+00 </td>
  </tr>
</tbody>
</table>


#### 1.5.2 Credit Spread

We use a credit spread that lenders would charge a large integrated oil & gas company with a specific credit rating, and add it to the avg. 10 year U.S. treasury rate to arrive at Saudi Aramco's cost of debt. 


{% highlight r %}
rating.spread.f <- function(){
  require(readxl)

  # Ratings, Interest Coverage Ratios and Default Spread
  url <- 'http://www.stern.nyu.edu/~adamodar/pc/ratings.xls'
  data_file <- download.f(url)
  v <- read_excel(
    data_file, sheet = "Start here Ratings sheet", 
    range = "A18:D33") %>% # A18:D33 -> rating table for large manufacturing firms
    janitor::clean_names() %>%
    filter(rating_is=="A1/A+") %>%
    pull(spread_is)
  return(v * 100)
}

cs <- rating.spread.f()
{% endhighlight %}


{% highlight text %}
## File located at: /Users/nico/aramco/data/ratings.xls
{% endhighlight %}


{% highlight r %}
inputs <- cs %>%
  set_names(c("CREDIT_SPREAD")) %>%
  as.list() %>% 
  append(inputs, .)

inputs %>% enframe() %>% unnest(value) %>% kable()
{% endhighlight %}

<table>
 <thead>
  <tr>
   <th style="text-align:left;"> name </th>
   <th style="text-align:right;"> value </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> LONG_RESERVES_LIFE </td>
   <td style="text-align:right;"> 5.200000e+01 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TOTAL_BORROWINGS </td>
   <td style="text-align:right;"> 2.701800e+04 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> CASH_AND_CASH_EQUIVALENTS </td>
   <td style="text-align:right;"> 4.884100e+04 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TOTAL_EQUITY </td>
   <td style="text-align:right;"> 2.742490e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> CAPITAL_EMPLOYED </td>
   <td style="text-align:right;"> 3.012670e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> OPERATING_INCOME </td>
   <td style="text-align:right;"> 2.129080e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INCOME_BEFORE_INCOME_TAXES </td>
   <td style="text-align:right;"> 2.127720e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INCOME_TAXES </td>
   <td style="text-align:right;"> 1.017010e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> NET_INCOME </td>
   <td style="text-align:right;"> 1.110710e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INVESTMENT_JOINT_VENTURES_ASSOCIATES </td>
   <td style="text-align:right;"> 6.021000e+03 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INVESTMENT_SECURITIES </td>
   <td style="text-align:right;"> 4.590000e+03 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> SHAREHOLDERS_EQUITY </td>
   <td style="text-align:right;"> 2.711420e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> NON_CONTROLLING_INTERESTS </td>
   <td style="text-align:right;"> 3.107000e+03 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> GDP_GROWTH </td>
   <td style="text-align:right;"> 2.434111e+00 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TREASURY_YIELD_10YR </td>
   <td style="text-align:right;"> 1.862857e+00 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> EQUITY_RISK_PREMIUM </td>
   <td style="text-align:right;"> 6.463396e+00 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> CREDIT_SPREAD </td>
   <td style="text-align:right;"> 9.750000e-01 </td>
  </tr>
</tbody>
</table>



#### 1.5.3 Unlevered Beta

In calculating the cost of equity, we use an unlevered beta for Saudi Aramco based on integrated oil companies for both cash flow models: (1) cash flows after	reinvestment needs and taxes, but before debt payments (FCFF); and (2) cash	flows	after	taxes, reinvestments,	and	debt payments (FCFE).
  

{% highlight r %}
# Effective Tax rate, Unlevered beta
unlevered.beta.f <- function(){
  require(readxl)

  # Unlevered Betas (Global)
  url <- 'http://www.stern.nyu.edu/~adamodar/pc/datasets/betaGlobal.xls'
  data_file <- download.f(url)

  v <- read_excel(data_file, sheet = "Industry Averages", range = "A10:F106") %>%
    janitor::clean_names() %>%
    filter(industry_name=="Oil/Gas (Integrated)") %>%
    pull(unlevered_beta)
  return(v)
}

ub <- unlevered.beta.f()
{% endhighlight %}


{% highlight text %}
## File located at: /Users/nico/aramco/data/betaGlobal.xls
{% endhighlight %}


{% highlight r %}
inputs <- ub %>%
  set_names(c("UNLEVERED_BETA")) %>%
  as.list %>% 
  append(inputs, .)

inputs %>% enframe() %>% unnest(value) %>% kable()
{% endhighlight %}

<table>
 <thead>
  <tr>
   <th style="text-align:left;"> name </th>
   <th style="text-align:right;"> value </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> LONG_RESERVES_LIFE </td>
   <td style="text-align:right;"> 5.200000e+01 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TOTAL_BORROWINGS </td>
   <td style="text-align:right;"> 2.701800e+04 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> CASH_AND_CASH_EQUIVALENTS </td>
   <td style="text-align:right;"> 4.884100e+04 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TOTAL_EQUITY </td>
   <td style="text-align:right;"> 2.742490e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> CAPITAL_EMPLOYED </td>
   <td style="text-align:right;"> 3.012670e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> OPERATING_INCOME </td>
   <td style="text-align:right;"> 2.129080e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INCOME_BEFORE_INCOME_TAXES </td>
   <td style="text-align:right;"> 2.127720e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INCOME_TAXES </td>
   <td style="text-align:right;"> 1.017010e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> NET_INCOME </td>
   <td style="text-align:right;"> 1.110710e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INVESTMENT_JOINT_VENTURES_ASSOCIATES </td>
   <td style="text-align:right;"> 6.021000e+03 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INVESTMENT_SECURITIES </td>
   <td style="text-align:right;"> 4.590000e+03 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> SHAREHOLDERS_EQUITY </td>
   <td style="text-align:right;"> 2.711420e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> NON_CONTROLLING_INTERESTS </td>
   <td style="text-align:right;"> 3.107000e+03 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> GDP_GROWTH </td>
   <td style="text-align:right;"> 2.434111e+00 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TREASURY_YIELD_10YR </td>
   <td style="text-align:right;"> 1.862857e+00 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> EQUITY_RISK_PREMIUM </td>
   <td style="text-align:right;"> 6.463396e+00 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> CREDIT_SPREAD </td>
   <td style="text-align:right;"> 9.750000e-01 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> UNLEVERED_BETA </td>
   <td style="text-align:right;"> 1.084964e+00 </td>
  </tr>
</tbody>
</table>


#### 1.5.4 Marginal Tax

The marginal tax rate is the number we use to compute Saudi Aramco's after-tax cost of debt. Given Saudi Aramco's marginal corporate tax rate, the after-tax cost of debt equates to the treasury rate plus the credit spread that lenders would charge Saudi Aramco multiplied by one minus the marginal tax rate.


{% highlight r %}
marginal.tax.f <- function(){
  require(readxl)
  # data_file <- file.path("data", "countrytaxrates.xls")
  url <- 'http://www.stern.nyu.edu/~adamodar/pc/datasets/countrytaxrates.xls'
  data_file <- download.f(url)
  # Corporate Marginal Tax Rates - By country
  v <- read_excel(data_file, sheet = "Sheet1") %>%
    janitor::clean_names() %>%
    filter(country=="Saudi Arabia") %>%
    pull(x2018)
  return(v * 100)
}

mtr <- marginal.tax.f()
{% endhighlight %}


{% highlight text %}
## File located at: /Users/nico/aramco/data/countrytaxrates.xls
{% endhighlight %}


{% highlight r %}
inputs <- mtr %>%
  set_names(c("MARGINAL_TAX_RATE")) %>%
  as.list %>% 
  append(inputs, .)

inputs %>% enframe() %>% unnest(value) %>% kable()
{% endhighlight %}

<table>
 <thead>
  <tr>
   <th style="text-align:left;"> name </th>
   <th style="text-align:right;"> value </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> LONG_RESERVES_LIFE </td>
   <td style="text-align:right;"> 5.200000e+01 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TOTAL_BORROWINGS </td>
   <td style="text-align:right;"> 2.701800e+04 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> CASH_AND_CASH_EQUIVALENTS </td>
   <td style="text-align:right;"> 4.884100e+04 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TOTAL_EQUITY </td>
   <td style="text-align:right;"> 2.742490e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> CAPITAL_EMPLOYED </td>
   <td style="text-align:right;"> 3.012670e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> OPERATING_INCOME </td>
   <td style="text-align:right;"> 2.129080e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INCOME_BEFORE_INCOME_TAXES </td>
   <td style="text-align:right;"> 2.127720e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INCOME_TAXES </td>
   <td style="text-align:right;"> 1.017010e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> NET_INCOME </td>
   <td style="text-align:right;"> 1.110710e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INVESTMENT_JOINT_VENTURES_ASSOCIATES </td>
   <td style="text-align:right;"> 6.021000e+03 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INVESTMENT_SECURITIES </td>
   <td style="text-align:right;"> 4.590000e+03 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> SHAREHOLDERS_EQUITY </td>
   <td style="text-align:right;"> 2.711420e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> NON_CONTROLLING_INTERESTS </td>
   <td style="text-align:right;"> 3.107000e+03 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> GDP_GROWTH </td>
   <td style="text-align:right;"> 2.434111e+00 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> TREASURY_YIELD_10YR </td>
   <td style="text-align:right;"> 1.862857e+00 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> EQUITY_RISK_PREMIUM </td>
   <td style="text-align:right;"> 6.463396e+00 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> CREDIT_SPREAD </td>
   <td style="text-align:right;"> 9.750000e-01 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> UNLEVERED_BETA </td>
   <td style="text-align:right;"> 1.084964e+00 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> MARGINAL_TAX_RATE </td>
   <td style="text-align:right;"> 2.000000e+01 </td>
  </tr>
</tbody>
</table>

# Part 2 - DCF Company Valuation {#dcf-valuation}

We now have all of the data needed to calculate the Company Valuation. 

* Calculate the discount rate or rates to	use	in	the	valuation for Saudi Aramco.
  - cost of equity for equity investors (FCFE)
  - cost of capital for all	claimholders (FCFF)
  
* Calculate the current earnings	and	cash flows of Saudi Aramco for equity	investors	and for all	claimholders.

* Calculate the future	earnings and cash	flows	of Saudi Aramco	by estimating	an expected	growth rate in earnings (GDP growth).

* Calculate Saudi Aramco's Discounted Cash Flow valuations.


{% highlight r %}
equity.valuation.f <- function(inp){
  
  for (j in 1:length(inp)) assign(names(inp)[j], inp[[j]])
  #-------------------------------------------------------------------------------------
  # Calculated inputs
  
  EFFECTIVE_TAX_RATE <- INCOME_TAXES / INCOME_BEFORE_INCOME_TAXES
  INVESTED_CAPITAL <- CAPITAL_EMPLOYED - CASH_AND_CASH_EQUIVALENTS
  DEBT_RATIO <- TOTAL_BORROWINGS / ( TOTAL_BORROWINGS + TOTAL_EQUITY )

  COST_DEBT <- ( CREDIT_SPREAD + TREASURY_YIELD_10YR ) / 100
  COST_EQUITY <- ( TREASURY_YIELD_10YR + UNLEVERED_BETA * EQUITY_RISK_PREMIUM ) / 100
  COST_CAPITAL <- COST_DEBT * ( 1 - ( MARGINAL_TAX_RATE / 100 ) ) * DEBT_RATIO + 
    COST_EQUITY * ( 1 - DEBT_RATIO )
  
  NUMBER_YEARS <- LONG_RESERVES_LIFE

  #-------------------------------------------------------------------------------------
  # Free Cash Flow to Equity (FCFE)
  
  EXPECTED_RETURN_EQUITY <- NET_INCOME / SHAREHOLDERS_EQUITY
  EXPECTED_GROWTH_EARNINGS <- GDP_GROWTH / 100
  PAYOUT_RATIO <- 1 - EXPECTED_GROWTH_EARNINGS / EXPECTED_RETURN_EQUITY
  
  VALUE_EQUITY <- NET_INCOME * PAYOUT_RATIO * 
    ( 1 - ( ( 1 + EXPECTED_GROWTH_EARNINGS ) ^ NUMBER_YEARS / 
              ( 1 + COST_EQUITY ) ^ NUMBER_YEARS ) ) / 
    ( COST_EQUITY - EXPECTED_GROWTH_EARNINGS )
  
  FCFE_EQUITY_VALUATION <- VALUE_EQUITY + CASH_AND_CASH_EQUIVALENTS + 
    INVESTMENT_JOINT_VENTURES_ASSOCIATES + INVESTMENT_SECURITIES
  
  #-------------------------------------------------------------------------------------
  # Free Cash Flow to Firm (FCFF)
  EXPECTED_GROWTH_RATE <- GDP_GROWTH / 100
  EXPECTED_ROIC <- OPERATING_INCOME * ( 1 - EFFECTIVE_TAX_RATE ) / INVESTED_CAPITAL
  REINVESTMENT_RATE <- EXPECTED_GROWTH_RATE / EXPECTED_ROIC
  
  EXPECTED_OPERATING_INCOME_AFTER_TAX <- OPERATING_INCOME * 
    ( 1 - EFFECTIVE_TAX_RATE ) * ( 1 + EXPECTED_GROWTH_RATE )
  
  EXPECTED_FCFF <- EXPECTED_OPERATING_INCOME_AFTER_TAX * ( 1 - REINVESTMENT_RATE )
  
  VALUE_OPERATING_ASSETS <- EXPECTED_FCFF * 
    ( 1 - ( ( 1 + EXPECTED_GROWTH_RATE ) ^ NUMBER_YEARS / 
              ( 1 + COST_CAPITAL ) ^ NUMBER_YEARS ) ) / 
    ( COST_CAPITAL - EXPECTED_GROWTH_RATE )
  
  FCFF_EQUITY_VALUATION <- VALUE_OPERATING_ASSETS + CASH_AND_CASH_EQUIVALENTS + 
    INVESTMENT_JOINT_VENTURES_ASSOCIATES + INVESTMENT_SECURITIES - 
    TOTAL_BORROWINGS - NON_CONTROLLING_INTERESTS

  #-------------------------------------------------------------------------------------
  # Use set_names to name the elements of the vector
  out <- c(INVESTED_CAPITAL, DEBT_RATIO, EFFECTIVE_TAX_RATE) %>% 
    set_names(c("INVESTED_CAPITAL", "DEBT_RATIO", "EFFECTIVE_TAX_RATE"))
  
  out <- c(NUMBER_YEARS, COST_CAPITAL, COST_EQUITY, COST_DEBT) %>% 
    set_names(c("NUMBER_YEARS", "COST_CAPITAL", "COST_EQUITY", "COST_DEBT")) %>%
    as.list %>% append(out)

  out <- c(FCFE_EQUITY_VALUATION, VALUE_EQUITY, PAYOUT_RATIO, 
           EXPECTED_GROWTH_EARNINGS, EXPECTED_RETURN_EQUITY) %>% 
    set_names(c("FCFE_EQUITY_VALUATION", "VALUE_EQUITY", "PAYOUT_RATIO", 
                "EXPECTED_GROWTH_EARNINGS", "EXPECTED_RETURN_EQUITY")) %>%
    as.list %>% append(out)
  
  out <- c(FCFF_EQUITY_VALUATION, VALUE_OPERATING_ASSETS, EXPECTED_FCFF, 
           EXPECTED_OPERATING_INCOME_AFTER_TAX, REINVESTMENT_RATE, 
           EXPECTED_ROIC, EXPECTED_GROWTH_RATE) %>% 
    set_names(c("FCFF_EQUITY_VALUATION", "VALUE_OPERATING_ASSETS", "EXPECTED_FCFF", 
                "EXPECTED_OPERATING_INCOME_AFTER_TAX", "REINVESTMENT_RATE", 
                "EXPECTED_ROIC", "EXPECTED_GROWTH_RATE")) %>%
    as.list %>% append(out)
  #-------------------------------------------------------------------------------------

  return(out)
}

output <- equity.valuation.f(inputs)

output %>% enframe() %>% unnest(value) %>% kable()
{% endhighlight %}

<table>
 <thead>
  <tr>
   <th style="text-align:left;"> name </th>
   <th style="text-align:right;"> value </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> FCFF_EQUITY_VALUATION </td>
   <td style="text-align:right;"> 1.765728e+06 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> VALUE_OPERATING_ASSETS </td>
   <td style="text-align:right;"> 1.736401e+06 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> EXPECTED_FCFF </td>
   <td style="text-align:right;"> 1.075534e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> EXPECTED_OPERATING_INCOME_AFTER_TAX </td>
   <td style="text-align:right;"> 1.138473e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> REINVESTMENT_RATE </td>
   <td style="text-align:right;"> 5.528360e-02 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> EXPECTED_ROIC </td>
   <td style="text-align:right;"> 4.402954e-01 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> EXPECTED_GROWTH_RATE </td>
   <td style="text-align:right;"> 2.434110e-02 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> FCFE_EQUITY_VALUATION </td>
   <td style="text-align:right;"> 1.613303e+06 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> VALUE_EQUITY </td>
   <td style="text-align:right;"> 1.553851e+06 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> PAYOUT_RATIO </td>
   <td style="text-align:right;"> 9.405795e-01 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> EXPECTED_GROWTH_EARNINGS </td>
   <td style="text-align:right;"> 2.434110e-02 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> EXPECTED_RETURN_EQUITY </td>
   <td style="text-align:right;"> 4.096414e-01 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> NUMBER_YEARS </td>
   <td style="text-align:right;"> 5.200000e+01 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> COST_CAPITAL </td>
   <td style="text-align:right;"> 8.283050e-02 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> COST_EQUITY </td>
   <td style="text-align:right;"> 8.875410e-02 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> COST_DEBT </td>
   <td style="text-align:right;"> 2.837860e-02 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> INVESTED_CAPITAL </td>
   <td style="text-align:right;"> 2.524260e+05 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> DEBT_RATIO </td>
   <td style="text-align:right;"> 8.968120e-02 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> EFFECTIVE_TAX_RATE </td>
   <td style="text-align:right;"> 4.779811e-01 </td>
  </tr>
</tbody>
</table>

### 2.1 DCF Summary

Below, I valued Saudi Aramco at about USD\$1.76 trillion using a weighted DCF equity valuation: 

- 50% for Operating income &amp; FCFF 
- 50% for Equity income &amp; FCFE.


{% highlight r %}
tibble(
    Weighted = 0.5 * (output$FCFF_EQUITY_VALUATION + output$FCFE_EQUITY_VALUATION) / 1000000,
    FCFF     = output$FCFF_EQUITY_VALUATION / 1000000,
    FCFE     = output$FCFE_EQUITY_VALUATION / 1000000
  ) %>%
  mutate_all(scales::dollar) %>% 
  kable() %>%
  kable_styling(c("striped", "bordered")) %>%
  add_header_above(c("Saudi Aramco Equity Valuation ($ trillions)" = 3))
{% endhighlight %}

<table class="table table-striped table-bordered" style="margin-left: auto; margin-right: auto;">
 <thead>
<tr><th style="border-bottom:hidden; padding-bottom:0; padding-left:3px;padding-right:3px;text-align: center; " colspan="3"><div style="border-bottom: 1px solid #ddd; padding-bottom: 5px; ">Saudi Aramco Equity Valuation ($ trillions)</div></th></tr>
  <tr>
   <th style="text-align:left;"> Weighted </th>
   <th style="text-align:left;"> FCFF </th>
   <th style="text-align:left;"> FCFE </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> $1.69 </td>
   <td style="text-align:left;"> $1.77 </td>
   <td style="text-align:left;"> $1.61 </td>
  </tr>
</tbody>
</table>

### 2.2 Sensitivity

It is very likely that investors will reward Saudi Aramco for:

- Ultralong reserve life 
- Lower gearing than each of the five major international oil companies
- Ability to execute some of the world’s largest upstream and downstream capital projects
- Higher operating cash flow, free cash flow, EBIT, EBITDA, and Return on Average Capital Employed (ROACE) than each of the five major international oil companies

However, investors could also penalize Saudi Aramco for the geopolitical risk and the central banking conspiracy to keep interest rates low.

#### 2.2.1 Risk Premium Sensitivity

Given the risk of attacks against Saudi Aramco' oil and gas infrastructure, there is a chance that the equity risk premium and the cost of capital could go up. However, if we remove that geopolitical risk from consideration and look at the remaining risk, Aramco is a remarkably safe investment, with the mind-boggling profits and cash flows and access to huge oil reserves consisting of $201.4$ billion barrels of crude oil and condensate, $25.4$ billion barrels of NGLs, and $185.7$ trillion standard cubic feet of natural gas.


{% highlight r %}
# Equity Risk Premium
out <- map(
  seq(6, 10, 0.25), 
  ~list_modify(
    inputs, 
    EQUITY_RISK_PREMIUM=.x
  ) %>% 
    equity.valuation.f(.) 
)

map2_dfr(
    out, 
    seq(6, 10, 0.25),
    ~list(
      EQUITY_RISK_PREMIUM=.y, 
      COST_CAPITAL=.x$COST_CAPITAL*100,
      WEIGHTED=(.x$FCFF_EQUITY_VALUATION+.x$FCFE_EQUITY_VALUATION) / 2 / 1000000,
      FCFF=.x$FCFF_EQUITY_VALUATION / 1000000, 
      FCFE=.x$FCFE_EQUITY_VALUATION / 1000000
    )
  ) %>%
  mutate_at(
    vars(one_of("FCFF", "FCFE", "WEIGHTED")),
    scales::dollar
  ) %>% 
  mutate_at(
    vars(one_of("EQUITY_RISK_PREMIUM", "COST_CAPITAL")),
    function(v) sprintf(v, fmt = "%.2f%%")
  ) %>%
  kable() %>%
  add_header_above(c("Risk Premium Sensitivity" = 5))
{% endhighlight %}

<table>
 <thead>
<tr><th style="border-bottom:hidden; padding-bottom:0; padding-left:3px;padding-right:3px;text-align: center; " colspan="5"><div style="border-bottom: 1px solid #ddd; padding-bottom: 5px; ">Risk Premium Sensitivity</div></th></tr>
  <tr>
   <th style="text-align:left;"> EQUITY_RISK_PREMIUM </th>
   <th style="text-align:left;"> COST_CAPITAL </th>
   <th style="text-align:left;"> WEIGHTED </th>
   <th style="text-align:left;"> FCFF </th>
   <th style="text-align:left;"> FCFE </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> 6.00% </td>
   <td style="text-align:left;"> 7.83% </td>
   <td style="text-align:left;"> $1.81 </td>
   <td style="text-align:left;"> $1.89 </td>
   <td style="text-align:left;"> $1.72 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 6.25% </td>
   <td style="text-align:left;"> 8.07% </td>
   <td style="text-align:left;"> $1.74 </td>
   <td style="text-align:left;"> $1.82 </td>
   <td style="text-align:left;"> $1.66 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 6.50% </td>
   <td style="text-align:left;"> 8.32% </td>
   <td style="text-align:left;"> $1.68 </td>
   <td style="text-align:left;"> $1.76 </td>
   <td style="text-align:left;"> $1.61 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 6.75% </td>
   <td style="text-align:left;"> 8.57% </td>
   <td style="text-align:left;"> $1.62 </td>
   <td style="text-align:left;"> $1.70 </td>
   <td style="text-align:left;"> $1.55 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 7.00% </td>
   <td style="text-align:left;"> 8.81% </td>
   <td style="text-align:left;"> $1.57 </td>
   <td style="text-align:left;"> $1.64 </td>
   <td style="text-align:left;"> $1.50 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 7.25% </td>
   <td style="text-align:left;"> 9.06% </td>
   <td style="text-align:left;"> $1.52 </td>
   <td style="text-align:left;"> $1.59 </td>
   <td style="text-align:left;"> $1.45 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 7.50% </td>
   <td style="text-align:left;"> 9.31% </td>
   <td style="text-align:left;"> $1.47 </td>
   <td style="text-align:left;"> $1.54 </td>
   <td style="text-align:left;"> $1.41 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 7.75% </td>
   <td style="text-align:left;"> 9.55% </td>
   <td style="text-align:left;"> $1.43 </td>
   <td style="text-align:left;"> $1.49 </td>
   <td style="text-align:left;"> $1.36 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 8.00% </td>
   <td style="text-align:left;"> 9.80% </td>
   <td style="text-align:left;"> $1.39 </td>
   <td style="text-align:left;"> $1.45 </td>
   <td style="text-align:left;"> $1.32 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 8.25% </td>
   <td style="text-align:left;"> 10.05% </td>
   <td style="text-align:left;"> $1.35 </td>
   <td style="text-align:left;"> $1.41 </td>
   <td style="text-align:left;"> $1.29 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 8.50% </td>
   <td style="text-align:left;"> 10.29% </td>
   <td style="text-align:left;"> $1.31 </td>
   <td style="text-align:left;"> $1.37 </td>
   <td style="text-align:left;"> $1.25 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 8.75% </td>
   <td style="text-align:left;"> 10.54% </td>
   <td style="text-align:left;"> $1.27 </td>
   <td style="text-align:left;"> $1.33 </td>
   <td style="text-align:left;"> $1.22 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 9.00% </td>
   <td style="text-align:left;"> 10.79% </td>
   <td style="text-align:left;"> $1.24 </td>
   <td style="text-align:left;"> $1.29 </td>
   <td style="text-align:left;"> $1.18 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 9.25% </td>
   <td style="text-align:left;"> 11.04% </td>
   <td style="text-align:left;"> $1.21 </td>
   <td style="text-align:left;"> $1.26 </td>
   <td style="text-align:left;"> $1.15 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 9.50% </td>
   <td style="text-align:left;"> 11.28% </td>
   <td style="text-align:left;"> $1.18 </td>
   <td style="text-align:left;"> $1.23 </td>
   <td style="text-align:left;"> $1.12 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 9.75% </td>
   <td style="text-align:left;"> 11.53% </td>
   <td style="text-align:left;"> $1.15 </td>
   <td style="text-align:left;"> $1.20 </td>
   <td style="text-align:left;"> $1.10 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 10.00% </td>
   <td style="text-align:left;"> 11.78% </td>
   <td style="text-align:left;"> $1.12 </td>
   <td style="text-align:left;"> $1.17 </td>
   <td style="text-align:left;"> $1.07 </td>
  </tr>
</tbody>
</table>

#### 2.2.2 Treasury Yield Sensitivity

Central banks around the world have conspired to keep interest rates low and artificially push up the price of financial assets. The end game in this story is that the central banks will eventually be forced to face reality, where the U.S. 10-Year Treasury will rise to normal levels and the value of Saudi Aramco could decrease. 


{% highlight r %}
out <- map(
  seq(1, 4, 0.25), 
  ~list_modify(
    inputs, 
    TREASURY_YIELD_10YR=.x
  ) %>% 
    equity.valuation.f(.)
)

map2_dfr(
    out, 
    seq(1, 4, 0.25),
    ~list(
      TREASURY_YIELD_10YR = .y, 
      WEIGHTED = (.x$FCFF_EQUITY_VALUATION+.x$FCFE_EQUITY_VALUATION) / 2 / 1000000,
      FCFF = .x$FCFF_EQUITY_VALUATION / 1000000, 
      FCFE = .x$FCFE_EQUITY_VALUATION / 1000000
    )
  ) %>%
  # arrange(-TREASURY_YIELD_10YR) %>%
  mutate_at(
    vars(one_of("FCFF", "FCFE", "WEIGHTED")),
    scales::dollar
  ) %>% 
  mutate_at(
    vars(one_of("TREASURY_YIELD_10YR")),
    function(v) sprintf(v, fmt = "%.2f%%")
  ) %>%
  kable() %>%
  add_header_above(c("Treasury Yield Sensitivity" = 4))
{% endhighlight %}

<table>
 <thead>
<tr><th style="border-bottom:hidden; padding-bottom:0; padding-left:3px;padding-right:3px;text-align: center; " colspan="4"><div style="border-bottom: 1px solid #ddd; padding-bottom: 5px; ">Treasury Yield Sensitivity</div></th></tr>
  <tr>
   <th style="text-align:left;"> TREASURY_YIELD_10YR </th>
   <th style="text-align:left;"> WEIGHTED </th>
   <th style="text-align:left;"> FCFF </th>
   <th style="text-align:left;"> FCFE </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> 1.00% </td>
   <td style="text-align:left;"> $1.91 </td>
   <td style="text-align:left;"> $2.00 </td>
   <td style="text-align:left;"> $1.81 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 1.25% </td>
   <td style="text-align:left;"> $1.84 </td>
   <td style="text-align:left;"> $1.93 </td>
   <td style="text-align:left;"> $1.75 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 1.50% </td>
   <td style="text-align:left;"> $1.78 </td>
   <td style="text-align:left;"> $1.86 </td>
   <td style="text-align:left;"> $1.69 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 1.75% </td>
   <td style="text-align:left;"> $1.72 </td>
   <td style="text-align:left;"> $1.79 </td>
   <td style="text-align:left;"> $1.64 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 2.00% </td>
   <td style="text-align:left;"> $1.66 </td>
   <td style="text-align:left;"> $1.73 </td>
   <td style="text-align:left;"> $1.59 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 2.25% </td>
   <td style="text-align:left;"> $1.61 </td>
   <td style="text-align:left;"> $1.68 </td>
   <td style="text-align:left;"> $1.54 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 2.50% </td>
   <td style="text-align:left;"> $1.56 </td>
   <td style="text-align:left;"> $1.62 </td>
   <td style="text-align:left;"> $1.49 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 2.75% </td>
   <td style="text-align:left;"> $1.51 </td>
   <td style="text-align:left;"> $1.57 </td>
   <td style="text-align:left;"> $1.45 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 3.00% </td>
   <td style="text-align:left;"> $1.46 </td>
   <td style="text-align:left;"> $1.52 </td>
   <td style="text-align:left;"> $1.40 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 3.25% </td>
   <td style="text-align:left;"> $1.42 </td>
   <td style="text-align:left;"> $1.48 </td>
   <td style="text-align:left;"> $1.36 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 3.50% </td>
   <td style="text-align:left;"> $1.38 </td>
   <td style="text-align:left;"> $1.43 </td>
   <td style="text-align:left;"> $1.33 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 3.75% </td>
   <td style="text-align:left;"> $1.34 </td>
   <td style="text-align:left;"> $1.39 </td>
   <td style="text-align:left;"> $1.29 </td>
  </tr>
  <tr>
   <td style="text-align:left;"> 4.00% </td>
   <td style="text-align:left;"> $1.31 </td>
   <td style="text-align:left;"> $1.35 </td>
   <td style="text-align:left;"> $1.26 </td>
  </tr>
</tbody>
</table>

### 2.2.3 Reserves Life Sensitivity

Saudi Aramco’s oil equivalent reserves were sufficient for proved reserves life of $52$ years, which was significantly longer than the $9$ to $17$ year proved reserves life of any of the five major international oil companies based on publicly available information.


{% highlight r %}
out <- map(
  40:52, # Long reserves life
  ~list_modify(
    inputs, 
    LONG_RESERVES_LIFE=.x
  ) %>% 
    equity.valuation.f(.)
)

map_dfr(
    out, 
    ~list(
      RESERVES_LIFE = .x$NUMBER_YEARS, 
      WEIGHTED      = (.x$FCFF_EQUITY_VALUATION+.x$FCFE_EQUITY_VALUATION) / 2 / 1000000,
      FCFF = .x$FCFF_EQUITY_VALUATION / 1000000, 
      FCFE = .x$FCFE_EQUITY_VALUATION / 1000000
    )
  ) %>% 
  arrange(-RESERVES_LIFE) %>%
  mutate_at(
    vars(one_of("FCFF", "FCFE", "WEIGHTED")),
    scales::dollar
  ) %>% 
  kable() %>%
  add_header_above(c("Reserves Life Sensitivity" = 4))
{% endhighlight %}

<table>
 <thead>
<tr><th style="border-bottom:hidden; padding-bottom:0; padding-left:3px;padding-right:3px;text-align: center; " colspan="4"><div style="border-bottom: 1px solid #ddd; padding-bottom: 5px; ">Reserves Life Sensitivity</div></th></tr>
  <tr>
   <th style="text-align:right;"> RESERVES_LIFE </th>
   <th style="text-align:left;"> WEIGHTED </th>
   <th style="text-align:left;"> FCFF </th>
   <th style="text-align:left;"> FCFE </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:right;"> 52 </td>
   <td style="text-align:left;"> $1.69 </td>
   <td style="text-align:left;"> $1.77 </td>
   <td style="text-align:left;"> $1.61 </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 51 </td>
   <td style="text-align:left;"> $1.68 </td>
   <td style="text-align:left;"> $1.76 </td>
   <td style="text-align:left;"> $1.61 </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 50 </td>
   <td style="text-align:left;"> $1.68 </td>
   <td style="text-align:left;"> $1.75 </td>
   <td style="text-align:left;"> $1.60 </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 49 </td>
   <td style="text-align:left;"> $1.67 </td>
   <td style="text-align:left;"> $1.75 </td>
   <td style="text-align:left;"> $1.60 </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 48 </td>
   <td style="text-align:left;"> $1.67 </td>
   <td style="text-align:left;"> $1.74 </td>
   <td style="text-align:left;"> $1.59 </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 47 </td>
   <td style="text-align:left;"> $1.66 </td>
   <td style="text-align:left;"> $1.73 </td>
   <td style="text-align:left;"> $1.59 </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 46 </td>
   <td style="text-align:left;"> $1.65 </td>
   <td style="text-align:left;"> $1.73 </td>
   <td style="text-align:left;"> $1.58 </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 45 </td>
   <td style="text-align:left;"> $1.65 </td>
   <td style="text-align:left;"> $1.72 </td>
   <td style="text-align:left;"> $1.58 </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 44 </td>
   <td style="text-align:left;"> $1.64 </td>
   <td style="text-align:left;"> $1.71 </td>
   <td style="text-align:left;"> $1.57 </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 43 </td>
   <td style="text-align:left;"> $1.63 </td>
   <td style="text-align:left;"> $1.70 </td>
   <td style="text-align:left;"> $1.56 </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 42 </td>
   <td style="text-align:left;"> $1.62 </td>
   <td style="text-align:left;"> $1.69 </td>
   <td style="text-align:left;"> $1.56 </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 41 </td>
   <td style="text-align:left;"> $1.61 </td>
   <td style="text-align:left;"> $1.68 </td>
   <td style="text-align:left;"> $1.55 </td>
  </tr>
  <tr>
   <td style="text-align:right;"> 40 </td>
   <td style="text-align:left;"> $1.60 </td>
   <td style="text-align:left;"> $1.67 </td>
   <td style="text-align:left;"> $1.54 </td>
  </tr>
</tbody>
</table>

## Conclusion

We performed a __Saudi Aramco Discounted	Cash Flow (DCF)	Valuation__ leveraging:

* `tidyverse` - An ecosystem for wrangling and visualizing data in `R`
* `tabulizer` - PDF Scraping
* `fuzzyjoin` - Joining data with inexact matching
* `rvest` - Web Scraping
* `tidyxl` - Importing non-tabular (non-tidy) Excel Data

If you would like to learn these skills, I recommend Business Science University's [__4-Course R-Track Program__](https://university.business-science.io/p/4-course-bundle-machine-learning-and-web-applications-r-track-101-102-201-202a/). This program teaches you the essential skills to apply data science to finance and accelerate you career. Learn more. 

{% include cta_rtrack.html %}

## About the Author

Business Science would like to thank the author, [Rafael Nicolas Fermin Cota (Follow Nico here)](https://www.linkedin.com/in/rnfc/){:target="_blank"}, for contributing this powerful article on "Tidy Discounted Cash Flow Valuation". 

Rafael Nicolas Fermin Cota (Nico) founded and is the CEO at [162 Labs](https://162labs.com){:target="_blank"}. He is also a part-time faculty member at the National University of Singapore.

Prior to founding 162 Labs, Nico co-founded and led the technology and research teams at OneSixtyTwo Capital (https://onesixtytwocapital.com){:target="_blank"}. In this role, he was responsible for quantitative application development supporting various systematic trading strategies and the integration of trading/market data-driven technologies.
