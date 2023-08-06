---
layout: post
title: "How to make Ridiculous Tables in R (from Excel)"
date: 2023-08-06 11:00:00 -0500
excerpt: "Transitioning from Excel to R for data analysis enhances efficiency and enables more complex operations, and R's capability to convert Excel tables simplifies this transition. This article illustrates the importance of this shift and guides readers through the process of converting Excel tables into R." 
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- gt
- gtExtras
image: "/assets/065_tables_in_r_thumb_2.jpg"
image_preview: "/assets/065_tables_in_r_thumb_2.jpg"

---
Did you know that you can make RIDICULOUS tables in R (from Excel)? You can. And in this free R-tip, I share a real case study where I made the working `R` code for my financial cash flow statement table. I converted it from Excel Spreadsheet into a pubilication-ready table for an Accounting Report containing financial statements.  

### Table of Contents

Here's what you're learning today:

* *2-Minute Case Study:* How I made a Cash Flow Statement Table in `R`.
* *New R packages for making Tables*: Get a full `gt` and `gtExtras` code explanations including how to make Sparklines!
* **Bonus: Free download of all the code shown today to make this table** 👇

![Cash Flow Statement in R](/assets/065_cash_flow_statement_table_in_R.jpg)

<p class="text-center date">Bonus: Get the Code for this financial statement table (details below)</p>

---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter?el=website">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> 
    <li><a href="https://learn.business-science.io/r-tips-newsletter?el=website">Get the Code</a></li> 
    <li><a href="https://youtu.be/gh_e6tmjhLA">YouTube Tutorial</a></li>
</ul>


# This Tutorial is Available in Video

I have a companion video tutorial that walks you through how to use `gt` and `gtExtras` for this analysis. 👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/gh_e6tmjhLA" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



# ❌ Excel is killing your analysis

Listen, if you are still doing analysis, modeling and reporting in Excel, then did you know:

1. **90% of Excel spreadsheets contain errors**
2. R can be used to automate the reporting process saving you tons of time every month
3. **Your boss won't care how you do it, as long as it's done right the first time **

So if you're sending your boss an analysis that's Excel...

![Cash Flow Statement in Excel](/assets/065_cash_flow_statement_table_in_Excel.jpg)

...And, if **one small error** throws off your analysis by *$20,000,000,000* (yes, that's $20 Billion with a "B"), then your boss isn't going to be too happy when their shareholders dump billions in stock (because something was mis-reported).

# ✅ R can make awesome tables

What if you could make a better looking table in R, and virtually guarantee your analysis models were error free? 

**You can with R!** And here's the same Cash Flow Statement table in R to prove it: 

![Cash Flow Statement in R](/assets/065_cash_flow_statement_table_in_R.jpg)

This table can be popped into a PDF or Word document straight from R. And more importantly, the analysis that made the table can be automated from R, virtually eliminating Spreadsheet errors. 

**So today, I'm going to share how to convert this Cash Flow Statement from Excel to R.**

![Excel to R Tables](/assets/065_excel_to_r_tables.jpg)

# Free Gift: Cheat Sheet for my Top 100 R Packages (Special Data Analysis Topics Included)

Before we dive in...

**You're going to need R packages to complete the data analysis that helps your company.** So why not speed up the process? 

To help, I'm going to share my secret weapon...

**Even I forget which R packages to use from time to time.** And this cheat sheet saves me so much time. Instead of googling to filter through 20,000 R packages to find a needle in a haystack. I keep my cheat sheet handy so I know which to use and when to use them. Seriously. [This cheat sheet is my bible.](https://www.business-science.io/r-cheatsheet.html)

![Ultimate R Cheat Sheet](https://www.business-science.io/assets/free_cheatsheet.jpg)

Once you [download it](https://www.business-science.io/r-cheatsheet.html), head over to page 3 and you’ll see several R packages I use frequently just for Data Analysis.

![Cheat Sheet Page 3 Special Topics](/assets/cheatsheet_page_3_special_topics.jpg)

Which is important when you want to work in these fields:

* Machine Learning
* Time Series
* Financial Analysis
* Geospatial Analysis
* Text Analysis and NLP
* Shiny Web App Development

[So steal my cheat sheet.](https://www.business-science.io/r-cheatsheet.html) It will save you a ton of time.

# Tutorial: How to make Ridiculous Tables in R

This tutorial is awesome. You'll learn 2 amazing R packages for creating ridiculous tables in R: `gt` and `gtExtras`. And through this [free R-tip](https://learn.business-science.io/r-tips-newsletter-register?el=website), you'll improve your ability to make professional tables in R. Let's go. 

## Step 1: Load the Libraries

First, load these libraries. 

![Load the Libraries](/assets/065_01_libraries.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get my code.</strong></a> </p>

## Step 2: Get the Excel File

Next, get this Excel file. To do so, [join the R-Tips Newsletter](https://learn.business-science.io/r-tips-newsletter?el=website). This gets you access to the code for all of my R-Tips. 

![Excel File](/assets/065_cash_flow_statement_table_in_Excel.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the Excel File.</strong></a> </p>

The Excel file is located in `065_gt_financial_tables\data\` folder. 

## Step 3: Load the Excel File into R

Next, load the excel file.

![Load the Excel File](/assets/065_02_load_excel.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get my code.</strong></a> </p>

This reads in the Cash Flow Statement data from the Excel spreadsheet into R. 

![Cash Flow Statement Data](/assets/065_03_cashflow_data.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the Excel Data.</strong></a> </p>

## Step 4: Data Manipulation

We need to get the raw cash flow data into the right format for the Cash Flow Table. Run this code to get the data prepared:

![Data Preparation Code](/assets/065_04_data_preparation.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the Code.</strong></a> </p>

## Code explanation:

The code performs a series of transformations and manipulations on a data frame called `cashflow_raw_tbl` to create a new data frame `cashflow_wide_tbl`:

1. **`cashflow_wide_tbl <- cashflow_raw_tbl %>%`**:
   This initializes a pipeline with the `%>%` operator, where `cashflow_raw_tbl` is the input data frame. The output of the entire pipeline operation will be assigned to `cashflow_wide_tbl`.

2. **`clean_names() %>%`**:
   This function from the `janitor` package cleans up column names by converting them to lower case and replacing spaces with underscores, among other things. This makes it easier to refer to column names in the code later.

3. **`rowid_to_column("item_id") %>%`**:
   This function adds a new column named "item_id" to the data frame, which contains the row numbers.

4. **`rename(item_name = in_million_usd) %>%`**:
   This renames the column "in_million_usd" to "item_name".

5. **`mutate(group_id = c(1,1,1,1,1, 2,2,2,2, 3,3,3,3,3, 4,4,4)) %>%`**:
   This creates a new column "group_id" by assigning a group ID to each row in a specified sequence.

6. **`mutate(item_type = c(...)) %>%`**:
   This creates a new column "item_type" with the specified sequence of "input" and "output".

7. **`select(group_id, starts_with("item"), everything()) %>%`**:
   This rearranges the columns to start with "group_id", followed by columns starting with "item", and then all other columns.

8. **`mutate(across(starts_with("fy_"), ~ replace_na(., 0))) %>%`**:
   This replaces all NA values in the columns starting with "fy_" with 0.

9. **`rowwise() %>%`**:
   This changes the data frame to a row-wise format, which is useful when applying functions that should operate on rows rather than columns.

10. **`mutate(trend = list(c_across(fy_09:fy_18))) %>%`**:
    In this row-wise format, this line creates a new "trend" column by collating the values from the columns "fy_09" to "fy_18" into a list for each row.

11. **`ungroup()`**:
    Finally, this undoes the previous grouping operation, returning the data frame to a normal (non row-wise) format.

The resulting `cashflow_wide_tbl` data frame contains cleaned and organized data, ready for further analysis or visualization.

![After Data Preparation](/assets/065_05_after_data_preparation.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the Excel Data.</strong></a> </p>

## Step 5: Make the Table in R



Finally, we are ready to make the table in R. Run this code:

![Make the Table in R](/assets/065_06_gt_table_code.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get the Code.</strong></a> </p>

### Code Explanation:

1. **`cashflow_wide_tbl %>%`**:
   This line initializes a pipeline using the `%>%` operator from the `magrittr` package. `cashflow_wide_tbl` is the input data frame (presumably in wide format) that will be passed through the subsequent functions.

2. **`gt() %>%`**:
   Calls the `gt` function to create a `gt` table object from the input data. The `gt` package is used for rendering tables in HTML, which can be viewed in various output formats like Markdown, HTML, and others.

3. **`gtExtras::gt_plt_sparkline(trend) %>%`**:
   Utilizes the `gtExtras` package to add a sparkline plot to the table for the "trend" column. Sparklines are small, simple line graphs typically used to represent a trend over time.

4. **`tab_header(title = "Cash Flow Statement", subtitle = "Exxon Mobil (FY2009 - FY2018)") %>%`**:
   Sets the table header with the title "Cash Flow Statement" and subtitle "Exxon Mobil (FY2009 - FY2018)."

5. **`tab_spanner(label = "Fiscal Year (Values in Millions)", columns = fy_09:fy_18,) %>%`**:
   Adds a spanner header across columns `fy_09` to `fy_18` with the label "Fiscal Year (Values in Millions)."

6. **`cols_label(...)`**:
   This function is used to set custom labels for columns in the table. For instance, the `item_id` column is renamed to "Item No.", and the fiscal year columns are renamed to their corresponding years.

7. **`fmt_currency(columns  = fy_09:fy_18, decimals = 0, accounting = TRUE) %>%`**:
   Formats the fiscal year columns as currency with no decimals and in accounting format (e.g., using parentheses for negative numbers).

8. **`cols_align(align = "center") %>%`**:
   Aligns all columns in the center.

9. **`gtExtras::gt_highlight_rows(rows = item_type == "output", fill = "lightgrey") %>%`**:
   Highlights rows where the `item_type` column equals "output" with a light grey background.

10. **`cols_hide(columns = c(item_type, group_id)) %>%`**:
    Hides the `item_type` and `group_id` columns from the final table display.

11. **`tab_options(...)`**:
    Sets various table options like font sizes and weights. Here, it customizes the size of the title, subtitle, table font, and makes column labels bold.

The final table looks amazing and is ready to add in to your financial report:

![Final Table in R](/assets/065_cash_flow_statement_table_in_R.jpg)

# BONUS: Steal My Code for the R Tables (it's legal)

Want all the code I just showed you? [Steal my R-tip library.](https://learn.business-science.io/r-tips-newsletter?el=website) 

The code for the Tables in R PLUS the Excel Data Set are inside of R-Tip `065_gt_financial_tables` folder.

![Steal My R-Tips Library](/assets/065_07_steal_my_rtips.jpg)

<p class='text-center date'> <a href='https://learn.business-science.io/r-tips-newsletter' target ='_blank'><strong>Get my R-tips code library.</strong></a> </p>


{% include cta_struggles_rtrack.md %}