---
layout: post
title: "30 Year Weather Data Analysis"
date:   2021-01-07 06:30:00
excerpt: "Quickly learn how to analyze weather data. This is a code-based article showing how to load, explore and visualize the data from 30 years of Connecticut weather history."
author: "David Lucey"
categories: [Code-Tools]
tags: [R-Bloggers, IoT]
image: 2021-01-07-analyzing-weather-data/weather_analysis_cover.jpg
image_preview: 2021-01-07-analyzing-weather-data/weather_analysis_preview.jpg
canonical: https://redwallanalytics.com/2020/09/22/exploring-30-years-of-local-ct-weather-history-with-r/
---




<div style="background-color:whitesmoke; padding:14px;" class="text-center">
  <h4>&#128073; &#128073; &#128073; <a href="https://mailchi.mp/business-science/blog-registration">Sign Up For More Blog Articles</a> &#128072; &#128072; &#128072;</h4>
</div>



<h2>Introduction</h2>

<p>In this article, we'll use the <a href="https://epa.maps.arcgis.com/apps/webappviewer/index.html?id=5f239fd3e72f424f98ef3d5def547eb5&amp;extent=-146.2334,13.1913,-46.3896,56.5319">EPA Arcgis map</a> that contains weather data going back to 1990. <b>This will be a quick code-based blog post showing how to load, explore and visualize the data a local EPA monitor.</b></p>

<img src="/assets/2021-01-07-analyzing-weather-data/Introduction_1.png" width="100%" />

<pre class="r"><code>
# Libraries
packages &lt;- 
  c(&quot;data.table&quot;,
    &quot;ggplot2&quot;,
    &quot;stringr&quot;,
    &quot;skimr&quot;,
    &quot;janitor&quot;,
    &quot;glue&quot;
    )

if (length(setdiff(packages,rownames(installed.packages()))) &gt; 0) {
  install.packages(setdiff(packages, rownames(installed.packages())))  
}

invisible(lapply(packages, library, character.only = TRUE))

knitr::opts_chunk$set(
  comment = NA,
  fig.width = 12,
  fig.height = 8,
  out.width = &#39;100%&#39;,
  cache = TRUE
)
</code></pre>


<h1>Weather Monitor Data Extraction</h1>

<p>Below, we show how to use <code>glue::glue()</code> to hit the api for our local site (“09-001-0017”) for the annual daily data sets from 1990-2020 with <code>datatable::fread()</code>, which took only a few minutes. See how we create an integer vector of desired years, and glue the string into each iteration of the request to create a list. We could easily change the code above and get the same for the next closest monitor in Westport, CT, or from any group of monitors in Connecticut or beyond if needed. For the actual blog post, the data we extracted below and saved to disc will be used.</p>

<pre class="r"><code># Years to retrieve
year &lt;- c(1990:2020)
ac &lt;- 
  lapply(
    glue::glue(
      &#39;https://www3.epa.gov/cgi-bin/broker?_service=data&amp;_program=dataprog.Daily.sas&amp;check=void&amp;polname=Ozone&amp;debug=0&amp;year={year}&amp;site=09-001-0017&#39;
    ),
    fread
  )</code></pre>

<p>Fortunately, the annual data sets were consistent over the period with all the same variables, so it took just a few minutes to get a clean data.table stretching back to 1990. In our experience with public data sets, this is almost always not the case. Things like variables or formatting almost always change. It seems surprising that the collected data would be exactly the same for such a long period of time, so we assume that the EPA is making an effort to clean it up and keep it consistent, which is very much appreciated. In a future post, we might look at a more complicated exploration of the <a href="https://aqs.epa.gov/aqsweb/documents/about_aqs_data.html#_airdata">EPA API</a>, which has data going back much further for some monitors and some variables, and seems to be one of the better organized and documented government API’s we have come across.</p>
<pre class="r"><code># Bind lists to data.table
ac_dt &lt;- rbindlist(ac)

# Clean names
ac_dt &lt;- janitor::clean_names(ac_dt)</code></pre>


<br>

{% include cta_rtrack.html %}


<h2>Exploration and Preparation</h2>

<p>We will start off with the full 34 columns, but throw out the identifier rows where there is only one unique value. We can see that there are only 10,416 unique dates though there are 55,224 rows, so the many fields are layered in the data set. Four of the logical columns are all missing, so they will have to go. There are 14 unique values in the parameter_name field, so we will have to explore those. A majority of the pollutant standard rows are missing. We can also see “aqi”(Air Quality Index) which we consider to be a parameter is included in a separate column as a character. The two main measurements for all the other parameters are the “arithmetic_mean” and “first_maximum_value”. There are a couple of time-related variables including year, day_in_year and date_local. There are a lot of fields with only one unique value to identify the monitor, so these can all be dropped. Its pretty messy, so he best thing we can think of doing is to tidy up the data set so it is easier to work with.</p>

<pre class="r">
  <code>
    # Summarize data.table
    skimzr::skim(ac_dt)
  </code>
</pre>


<table>
<caption><span id="tab:skim">Table 1: </span>Data summary</caption>
<tbody>
<tr class="odd">
<td align="left">Name</td>
<td align="left">ac_dt</td>
</tr>
<tr class="even">
<td align="left">Number of rows</td>
<td align="left">55224</td>
</tr>
<tr class="odd">
<td align="left">Number of columns</td>
<td align="left">34</td>
</tr>
<tr class="even">
<td align="left">_______________________</td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left">Column type frequency:</td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left">character</td>
<td align="left">15</td>
</tr>
<tr class="odd">
<td align="left">Date</td>
<td align="left">1</td>
</tr>
<tr class="even">
<td align="left">logical</td>
<td align="left">4</td>
</tr>
<tr class="odd">
<td align="left">numeric</td>
<td align="left">14</td>
</tr>
<tr class="even">
<td align="left">________________________</td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left">Group variables</td>
<td align="left">None</td>
</tr>
</tbody>
</table>
<p><strong>Variable type: character</strong></p>
<table>
<thead>
<tr class="header">
<th align="left">skim_variable</th>
<th align="right">n_missing</th>
<th align="right">complete_rate</th>
<th align="right">min</th>
<th align="right">max</th>
<th align="right">empty</th>
<th align="right">n_unique</th>
<th align="right">whitespace</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">Datum</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">5</td>
<td align="right">5</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">0</td>
</tr>
<tr class="even">
<td align="left">Parameter Name</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">5</td>
<td align="right">26</td>
<td align="right">0</td>
<td align="right">14</td>
<td align="right">0</td>
</tr>
<tr class="odd">
<td align="left">Duration Description</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">6</td>
<td align="right">23</td>
<td align="right">0</td>
<td align="right">6</td>
<td align="right">0</td>
</tr>
<tr class="even">
<td align="left">Pollutant Standard</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">0</td>
<td align="right">17</td>
<td align="right">35497</td>
<td align="right">6</td>
<td align="right">0</td>
</tr>
<tr class="odd">
<td align="left">Units of Measure</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">5</td>
<td align="right">29</td>
<td align="right">0</td>
<td align="right">8</td>
<td align="right">0</td>
</tr>
<tr class="even">
<td align="left">Exceptional Data Type</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">4</td>
<td align="right">8</td>
<td align="right">0</td>
<td align="right">2</td>
<td align="right">0</td>
</tr>
<tr class="odd">
<td align="left">AQI</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">1</td>
<td align="right">3</td>
<td align="right">0</td>
<td align="right">157</td>
<td align="right">0</td>
</tr>
<tr class="even">
<td align="left">Daily Criteria Indicator</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">1</td>
<td align="right">1</td>
<td align="right">0</td>
<td align="right">2</td>
<td align="right">0</td>
</tr>
<tr class="odd">
<td align="left">State Name</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">11</td>
<td align="right">11</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">0</td>
</tr>
<tr class="even">
<td align="left">County Name</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">9</td>
<td align="right">9</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">0</td>
</tr>
<tr class="odd">
<td align="left">City Name</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">19</td>
<td align="right">19</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">0</td>
</tr>
<tr class="even">
<td align="left">Local Site Name</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">20</td>
<td align="right">20</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">0</td>
</tr>
<tr class="odd">
<td align="left">Address</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">31</td>
<td align="right">31</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">0</td>
</tr>
<tr class="even">
<td align="left">MSA or CBSA Name</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">31</td>
<td align="right">31</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">0</td>
</tr>
<tr class="odd">
<td align="left">Data Source</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">13</td>
<td align="right">13</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">0</td>
</tr>
</tbody>
</table>
<p><strong>Variable type: Date</strong></p>
<table>
<thead>
<tr class="header">
<th align="left">skim_variable</th>
<th align="right">n_missing</th>
<th align="right">complete_rate</th>
<th align="left">min</th>
<th align="left">max</th>
<th align="left">median</th>
<th align="right">n_unique</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">Date (Local)</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="left">1990-01-01</td>
<td align="left">2020-03-31</td>
<td align="left">2002-08-29</td>
<td align="right">10416</td>
</tr>
</tbody>
</table>
<p><strong>Variable type: logical</strong></p>
<table>
<thead>
<tr class="header">
<th align="left">skim_variable</th>
<th align="right">n_missing</th>
<th align="right">complete_rate</th>
<th align="right">mean</th>
<th align="left">count</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">Nonreg Observation Count</td>
<td align="right">55224</td>
<td align="right">0</td>
<td align="right">NaN</td>
<td align="left">:</td>
</tr>
<tr class="even">
<td align="left">Nonreg Arithmetic Mean</td>
<td align="right">55224</td>
<td align="right">0</td>
<td align="right">NaN</td>
<td align="left">:</td>
</tr>
<tr class="odd">
<td align="left">Nonreg First Maximum Value</td>
<td align="right">55224</td>
<td align="right">0</td>
<td align="right">NaN</td>
<td align="left">:</td>
</tr>
<tr class="even">
<td align="left">Tribe Name</td>
<td align="right">55224</td>
<td align="right">0</td>
<td align="right">NaN</td>
<td align="left">:</td>
</tr>
</tbody>
</table>
<p><strong>Variable type: numeric</strong></p>
<table style="width:100%;">
<colgroup>
<col width="17%" />
<col width="8%" />
<col width="12%" />
<col width="8%" />
<col width="7%" />
<col width="8%" />
<col width="8%" />
<col width="8%" />
<col width="8%" />
<col width="8%" />
<col width="5%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">skim_variable</th>
<th align="right">n_missing</th>
<th align="right">complete_rate</th>
<th align="right">mean</th>
<th align="right">sd</th>
<th align="right">p0</th>
<th align="right">p25</th>
<th align="right">p50</th>
<th align="right">p75</th>
<th align="right">p100</th>
<th align="left">hist</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">State Code</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">9.00</td>
<td align="right">0.00</td>
<td align="right">9.00</td>
<td align="right">9.00</td>
<td align="right">9.00</td>
<td align="right">9.00</td>
<td align="right">9.00</td>
<td align="left">▁▁▇▁▁</td>
</tr>
<tr class="even">
<td align="left">County Code</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">1.00</td>
<td align="right">0.00</td>
<td align="right">1.00</td>
<td align="right">1.00</td>
<td align="right">1.00</td>
<td align="right">1.00</td>
<td align="right">1.00</td>
<td align="left">▁▁▇▁▁</td>
</tr>
<tr class="odd">
<td align="left">Site Number</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">17.00</td>
<td align="right">0.00</td>
<td align="right">17.00</td>
<td align="right">17.00</td>
<td align="right">17.00</td>
<td align="right">17.00</td>
<td align="right">17.00</td>
<td align="left">▁▁▇▁▁</td>
</tr>
<tr class="even">
<td align="left">Parameter Code</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">55689.14</td>
<td align="right">9429.11</td>
<td align="right">42401.00</td>
<td align="right">44201.00</td>
<td align="right">61102.00</td>
<td align="right">62101.00</td>
<td align="right">82403.00</td>
<td align="left">▅▁▇▁▁</td>
</tr>
<tr class="odd">
<td align="left">POC</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">1.01</td>
<td align="right">0.29</td>
<td align="right">1.00</td>
<td align="right">1.00</td>
<td align="right">1.00</td>
<td align="right">1.00</td>
<td align="right">9.00</td>
<td align="left">▇▁▁▁▁</td>
</tr>
<tr class="even">
<td align="left">Latitude</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">41.00</td>
<td align="right">0.00</td>
<td align="right">41.00</td>
<td align="right">41.00</td>
<td align="right">41.00</td>
<td align="right">41.00</td>
<td align="right">41.00</td>
<td align="left">▁▁▇▁▁</td>
</tr>
<tr class="odd">
<td align="left">Longitude</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">-73.59</td>
<td align="right">0.00</td>
<td align="right">-73.59</td>
<td align="right">-73.59</td>
<td align="right">-73.59</td>
<td align="right">-73.59</td>
<td align="right">-73.59</td>
<td align="left">▁▁▇▁▁</td>
</tr>
<tr class="even">
<td align="left">Year</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">2002.86</td>
<td align="right">8.22</td>
<td align="right">1990.00</td>
<td align="right">1996.00</td>
<td align="right">2002.00</td>
<td align="right">2009.00</td>
<td align="right">2020.00</td>
<td align="left">▇▆▇▃▃</td>
</tr>
<tr class="odd">
<td align="left">Day In Year (Local)</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">181.50</td>
<td align="right">96.44</td>
<td align="right">1.00</td>
<td align="right">106.00</td>
<td align="right">181.00</td>
<td align="right">258.00</td>
<td align="right">366.00</td>
<td align="left">▆▇▇▇▅</td>
</tr>
<tr class="even">
<td align="left">Observation Count</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">21.28</td>
<td align="right">5.60</td>
<td align="right">1.00</td>
<td align="right">23.00</td>
<td align="right">24.00</td>
<td align="right">24.00</td>
<td align="right">24.00</td>
<td align="left">▁▁▁▁▇</td>
</tr>
<tr class="odd">
<td align="left">Observation Percent</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">97.44</td>
<td align="right">9.07</td>
<td align="right">4.00</td>
<td align="right">100.00</td>
<td align="right">100.00</td>
<td align="right">100.00</td>
<td align="right">100.00</td>
<td align="left">▁▁▁▁▇</td>
</tr>
<tr class="even">
<td align="left">Arithmetic Mean</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">44.42</td>
<td align="right">75.70</td>
<td align="right">-7.50</td>
<td align="right">0.04</td>
<td align="right">5.00</td>
<td align="right">56.62</td>
<td align="right">353.00</td>
<td align="left">▇▁▁▁▁</td>
</tr>
<tr class="odd">
<td align="left">First Maximum Value</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">65.56</td>
<td align="right">112.18</td>
<td align="right">-5.00</td>
<td align="right">0.07</td>
<td align="right">10.00</td>
<td align="right">64.00</td>
<td align="right">360.00</td>
<td align="left">▇▁▁▁▁</td>
</tr>
<tr class="even">
<td align="left">First Maximum Hour</td>
<td align="right">0</td>
<td align="right">1</td>
<td align="right">10.89</td>
<td align="right">6.69</td>
<td align="right">0.00</td>
<td align="right">6.00</td>
<td align="right">12.00</td>
<td align="right">15.00</td>
<td align="right">23.00</td>
<td align="left">▆▅▇▇▅</td>
</tr>
</tbody>
</table>


<p>First we will drop all of the identifier rows with only one unique value (before column 9 and after column 27), and also the “tribe” and “nonreg” columns using <code>data.table::patterns()</code>. We then convert the air quality index (“aqi”) column to numeric for the cases where it is not missing. We are not clear why the “aqi” is not included in the “parameter_name” variable with the other measures, but seems to be associated with rows which have “ozone” and “sulfur dioxide” (two of five variables which compose the “aqi” itself). Air Quality is also stored in by the 1-hour average and separately a single 8-hour measurements for each day, and these numbers can be significantly different.</p>

<pre class="r"><code># Drop unneeded cols
ac_dt &lt;- ac_dt[, c(9:27)][, .SD, .SDcols = !patterns(&quot;tribe|nonreg&quot;)]

# Convert aqi to integer
ac_dt[, aqi := as.integer(str_extract(aqi, &quot;\\d*&quot;))]</code></pre>

<p>We add the three measurement columns to value and 12 identifier columns to variable. We decided to separate the “aqi” index column from the rest of the data which is identified in the “parameter_name” column before tidying, and then bind them back together with three variables (“aqi”, “arithmetic_mean” and “first_maximum_value”).</p>

<pre class="r"><code># Separate out aqi
aqi &lt;- ac_dt[!is.na(aqi)]

# Tidy key measures for parameters other than aqi
measures &lt;- c(&quot;first_maximum_value&quot;, &quot;arithmetic_mean&quot;)
ids &lt;- setdiff(names(ac_dt), measures)
ids &lt;- ids[!str_detect(ids, &quot;aqi&quot;)]
ac_dt_tidy &lt;-
  ac_dt[, 
        melt(.SD,
             idcols = ids,
             measure.vars = measures),
        .SDcols = !&quot;aqi&quot;]

# Tidy up aqi
aqi &lt;- 
  aqi[, 
      melt(.SD,
           idcols = ids,
           measure.vars = &quot;aqi&quot;),
      .SDcols = !measures]

# Put two tidied data sets back together
ac_dt_tidy &lt;- rbind(ac_dt_tidy, aqi)

# Show sample rows
ac_dt_tidy</code></pre>

<pre><code>             parameter_name    duration_description pollutant_standard
     1: Outdoor Temperature                  1 HOUR                   
     2:      Sulfur dioxide                  1 HOUR    SO2 1-hour 2010
     3:      Sulfur dioxide            3-HR BLK AVG    SO2 3-hour 1971
     4:      Sulfur dioxide            3-HR BLK AVG    SO2 3-hour 1971
     5: Outdoor Temperature                  1 HOUR                   
    ---                                                               
120581:               Ozone 8-HR RUN AVG BEGIN HOUR  Ozone 8-hour 2015
120582:               Ozone 8-HR RUN AVG BEGIN HOUR  Ozone 8-hour 2015
120583:               Ozone 8-HR RUN AVG BEGIN HOUR  Ozone 8-hour 2015
120584:               Ozone 8-HR RUN AVG BEGIN HOUR  Ozone 8-hour 2015
120585:               Ozone 8-HR RUN AVG BEGIN HOUR  Ozone 8-hour 2015
        date_local year day_in_year_local   units_of_measure
     1: 1990-01-01 1990                 1 Degrees Fahrenheit
     2: 1990-01-01 1990                 1  Parts per billion
     3: 1990-01-01 1990                 1  Parts per billion
     4: 1990-01-02 1990                 2  Parts per billion
     5: 1990-01-02 1990                 2 Degrees Fahrenheit
    ---                                                     
120581: 2020-03-27 2020                87  Parts per million
120582: 2020-03-28 2020                88  Parts per million
120583: 2020-03-29 2020                89  Parts per million
120584: 2020-03-30 2020                90  Parts per million
120585: 2020-03-31 2020                91  Parts per million
        exceptional_data_type observation_count observation_percent
     1:                  None                24                 100
     2:                  None                23                  96
     3:                  None                 7                  88
     4:                  None                 7                  88
     5:                  None                24                 100
    ---                                                            
120581:                  None                17                 100
120582:                  None                17                 100
120583:                  None                17                 100
120584:                  None                17                 100
120585:                  None                12                  71
        first_maximum_hour daily_criteria_indicator            variable value
     1:                  0                        Y first_maximum_value  43.0
     2:                  8                        Y first_maximum_value  11.0
     3:                  8                        Y first_maximum_value   9.3
     4:                 23                        Y first_maximum_value  17.6
     5:                 14                        Y first_maximum_value  42.0
    ---                                                                      
120581:                 10                        Y                 aqi  48.0
120582:                 22                        Y                 aqi  46.0
120583:                  8                        Y                 aqi  46.0
120584:                  7                        Y                 aqi  37.0
120585:                 16                        N                 aqi  42.0</code></pre>



<p>When we graph with “parameter_name” facets including separate colors for the mean and maximum values, we can see a few things. There are a few gaps in collection including a big one in sulfur dioxide from about 1997-2005. The Air Quality Index first created in the Clean Air Act has the following components: ground-level ozone, particulate matter, carbon monoxide, sulfur dioxide, and nitrogen dioxide. We are unsure how they calculate the AQI in our data set for the full period, because of the period where sulfur dioxide is missing. When we read up on <a href="https://thebolditalic.com/understanding-purpleair-vs-airnow-gov-measurements-of-wood-smoke-pollution-562923a55226">AQI</a>, we learned that there may be several ways of calculating the AQI. We will leave the details for later research.</p>

<pre class="r"><code># Look for missing periods
ac_dt_tidy[
  variable %in% c(&quot;arithmetic_mean&quot;, &quot;first_maximum_value&quot;), 
  ggplot(.SD,
         aes(date_local,
             y = value,
             color = variable)) +
    geom_line() +
    facet_wrap( ~ parameter_name, scale = &#39;free&#39;) +
    theme_bw() +
    labs(caption = &quot;Source: EPA Monitor 09-001-0017&quot;
    )]</code></pre>

<img src="/assets/2021-01-07-analyzing-weather-data/graph-measurements-1.png" width="100%" />


<h2>Wind is Lowest during the Summer</h2>

<p>We had hoped to look at the wind speeds during Hurricane Sandy, which hit us hard, but apparently, the monitor was knocked out, so there are no measurements for that date or for several months subsequent, so it looks like we may not do a lot with the wind data. It is hard to find much in the charts above, so we averaged up the values by month. We might have guessed, but hadn’t thought that wind was as seasonal as it seems to be below.</p>
<pre class="r"><code>ac_dt_tidy[
  str_detect(parameter_name, &quot;Wind&quot;) &amp;
    variable %in% c(&quot;first_maximum_value&quot;, &quot;arithmetic_mean&quot;),
  .(avg_speed = mean(value)), by = .(month(date_local), parameter_name, variable)][,
  ggplot(.SD, aes(month, avg_speed, color = variable)) +
    geom_line() +
    facet_wrap( ~ parameter_name, scales = &quot;free_y&quot;) +
    theme_bw() + 
    labs(
      x = &quot;Month&quot;,
      y = &quot;Wind Speed&quot;,
      caption = &quot;Source: EPA Monitor 09-001-0017&quot;
    ) ]</code></pre>

<img src="/assets/2021-01-07-analyzing-weather-data/wind-data-1.png" width="100%" />






<h2>Air Quality Has Improved</h2>
<p>The data set actually records 4 measurements for ozone, the average and maximum values by hour, and separately, for 8-hour periods. The EPA sets a threshold for the level of Ozone to be avoided at 0.064, and days above this are shown in red. It looks like the “first_maximum_value” very often registers undesirable levels, although the hourly reading does much less so. We can see that there are clearly fewer unhealthy days over time, and only two unhealthy days based on the hourly arithmetic average since 2003. We can also see that the low end of the readings has been moving up over time, even though well in the healthy zone.</p>
<pre class="r"><code>ac_dt_tidy[
  parameter_name == &quot;Ozone&quot; &amp;
    variable %in% c(&quot;arithmetic_mean&quot;, &quot;first_maximum_value&quot;)][
  ][,
    ggplot(.SD,
           aes(date_local,
               y = value)) +
      geom_point(aes(color = cut(
        value,
        breaks = c(0, 0.064, 0.3),
        labels = c(&quot;Good&quot;, &quot;Unhealthy&quot;)
      )),
      size = 1) +
      scale_color_manual(
        name = &quot;Ozone&quot;,
        values = c(&quot;Good&quot; = &quot;green1&quot;,
                   &quot;Unhealthy&quot; = &quot;red1&quot;)) +
      theme_bw() +
      labs(x = &quot;Year&quot;,
           y = &quot;Ozone&quot;,
           caption = &quot;Source: EPA Monitor 09-001-0017&quot;) +
      facet_wrap(~ variable + duration_description, scales = &quot;free_y&quot;)]</code></pre>


<img src="/assets/2021-01-07-analyzing-weather-data/ozone-dotplots-1.png" width="100%" />


<p>We can see in the chart looking at Air Quality based on the “Ozone 8-hour 2015” parameter below, that if the EPA calculates it, it doesn’t report AQI during the winter months, which probably makes sense because people are not out and air quality appears to be worst in the summer. Sometimes we get the iPhone messages about Air Quality and naturally worry, but when we look at the AQI daily over the last 30 years, we can see that the number of “Unhealthy” days has been declining similar two what we saw above with Ozone, and the last “Very Unhealthy” day was in 2006. The same trend with the low end of the AQI rising a little over time is apparent.</p>

<pre class="r"><code>
ac_dt_tidy[
  variable == &quot;aqi&quot; &amp;
    pollutant_standard == &quot;Ozone 8-hour 2015&quot;][
  ][,
     ggplot(.SD,
            aes(date_local,
                y = value)) +
       geom_point(aes(color = cut(
         value,
         breaks = c(0, 50, 100, 150, 200, 300),
         labels = c(
           &quot;Good&quot;,
           &quot;Moderate&quot;,
           &quot;Unhealthy - Sensitive&quot;,
           &quot;Unhealthy&quot;,
           &quot;Very Unhealthy&quot;
         )
       )),
       size = 1) +
       scale_color_manual(
         name = &quot;AQI&quot;,
         values = c(
           &quot;Good&quot; = &quot;green1&quot;,
           &quot;Moderate&quot; = &quot;yellow&quot;,
           &quot;Unhealthy - Sensitive&quot; = &quot;orange&quot;,
           &quot;Unhealthy&quot; = &quot;red&quot;,
           &quot;Very Unhealthy&quot; = &quot;violetred4&quot;
         )
       ) +
       theme_bw() +
       labs(x = &quot;Year&quot;,
            y = &quot;Air Quality Indicator (AQI)&quot;,
            caption = &quot;Source: EPA Monitor 09-001-0017&quot;
            )]
</code></pre>

<img src="/assets/2021-01-07-analyzing-weather-data/aqi-dotplot-1.png" width="100%" />

<p>A heatmap is another way to look at the Ozone which better shows the time dimension. The y-axis shows the day of the year, so the most unhealthy air quality is between days 175-225, or the end of June through the first half of August. We can also see that “Unhealthy” days might even have outnumbered healthy days back in the early 1990s, but we rarely see above “moderate” now.</p>

<pre class="r"><code>breaks &lt;- c(0, 50, 100, 150,200, 300, 1000)
labels &lt;- c(&quot;Good&quot;, &quot;Moderate&quot;, &quot;Unhealty - Sensitive Groups&quot;, &quot;Unhealthy&quot;, &quot;Very Unhealthy&quot;, &quot;Hazardous&quot;)
ac_dt[parameter_name == &quot;Ozone&quot; &amp;
        exceptional_data_type == &quot;None&quot;, .(
          year,
          day_in_year_local,
          observation_count,
          duration_description,
          date_local,
          aqi= as.integer(str_extract(aqi, &quot;\\d*&quot;)),
          parameter_name,
          `Air Quality` = cut(
            as.integer(str_extract(aqi, &quot;\\d*&quot;)),
            breaks = breaks,
            labels = labels
          )
        )][!is.na(`Air Quality`) &amp; 
             day_in_year_local %in% c(90:260),
           ggplot(.SD, aes(year, day_in_year_local, fill = `Air Quality`)) + 
             geom_tile() +
             theme_bw() +
             labs(
               x = &quot;Year&quot;,
               y = &quot;Day of Year&quot;, 
               caption = &quot;Source: EPA Monitor 09-001-0017&quot; 
             )]</code></pre>

<img src="/assets/2021-01-07-analyzing-weather-data/temperature_heatmap.png" width="100%" />


<h2>Temperature</h2>

<p>We can see above the dot plot of the Outside Temperature over the period. Hot days are defined as above 85, and very hot above 95, while cold are below 32. There isn’t much of a trend visible in the middle of the graphs. As might be expected the daily first maximum highs and lows tend to be significantly above the daily average levels. All in all, if there is change, it is less definitive than the air quality data looking at it this way.</p>
<pre class="r"><code>ac_dt_tidy[
  parameter_name == &quot;Outdoor Temperature&quot; &amp;
    variable %in% c(&quot;arithmetic_mean&quot;, &quot;first_maximum_value&quot;)][
  ][,
  ggplot(.SD,
         aes(date_local,
             y = value)) +
    geom_point(aes(
      color = cut(value, 
                  breaks = c(-20, 32, 50, 65, 85, 95, 120),
                  labels = c(&quot;Very Cold&quot;, &quot;Cold&quot;, &quot;Cool&quot;, &quot;Moderate&quot;, &quot;Hot&quot;, &quot;Very Hot&quot;))),
             size = 1) +
    scale_color_manual(
        name = &quot;Outside Temperature&quot;,
        values = c(
          &quot;Very Cold&quot; = &quot;blue&quot;,
          &quot;Cold&quot; = &quot;yellow&quot;,
          &quot;Cool&quot; = &quot;green1&quot;,
          &quot;Moderate&quot; = &quot;green4&quot;,
          &quot;Hot&quot; = &quot;orange&quot;,
          &quot;Very Hot&quot; = &quot;red&quot;
          )
      ) +
    theme_bw() + 
    labs(
      x = &quot;Year&quot;,
      y = &quot;Outside Temperature&quot;,
      caption = &quot;Source: EPA Monitor 09-001-0017&quot;
    ) +
    facet_wrap(~ variable)]</code></pre>


<img src="/assets/2021-01-07-analyzing-weather-data/outside_temperature.png" width="100%" />

<p>We also tried to look at the change in temperature over the period versus the first five years (1990-1995). By doing this, we probably learned more about heat maps than about the temperature. It does look like the bigger changes in temperature have probably happened more at the beginning and the end of the year. Movements in the maximum temperatures seem more pronounced than the averages, but again it makes sense that this would be the case.</p>

<pre class="r"><code>temperature &lt;-
  ac_dt[parameter_name == &quot;Outdoor Temperature&quot;,
        c(&quot;year&quot;,
          &quot;day_in_year_local&quot;,
          &quot;arithmetic_mean&quot;,
          &quot;first_maximum_value&quot;)]

baseline &lt;- 
  temperature[year &lt; 1995,
              .(base_mean = mean(arithmetic_mean),
                base_max = mean(first_maximum_value)), day_in_year_local]

temperature &lt;- 
  baseline[temperature[year &gt; 1994], on = c(&quot;day_in_year_local&quot;)][, 
    `:=`(change_avg = arithmetic_mean - base_mean,
         change_max = first_maximum_value - base_max)]

temperature &lt;-
  temperature[, melt(
    .SD,
    id.vars = c(&quot;day_in_year_local&quot;, &quot;year&quot;),
    measure.vars = c(&quot;change_max&quot;, &quot;change_avg&quot;)
  )]

temperature[
  year %in% c(1995:2019) &amp;
    !is.na(value), 
  ggplot(.SD,
         aes(year,
             day_in_year_local,
             fill = cut(
               value,
               breaks = c(-100, -15, -5, 5, 15, 100),
               labels = c(&quot;Much Colder&quot;, &quot;Colder&quot;, &quot;Similar&quot;, &quot;Warmer&quot;, &quot;Much Warmer&quot;)
             ))) +
    geom_tile() +
    scale_fill_manual(name = &quot;Temp. Change&quot;,
                      values = c(&quot;skyblue4&quot;, &quot;skyblue&quot;, &quot;green&quot;, &quot;red&quot;, &quot;red4&quot;)) +
    theme_bw() +
    labs(
      title = &quot;Days Compared to 1990-1994 Average Temp. on That Day&quot;,
      subtitle = &quot;Hotter Days Shown Redder&quot;,
      x = &quot;Year&quot;,
      y = &quot;Day of Year&quot;,
      caption = &quot;Source: EPA&quot;
    ) +
    facet_wrap(~ variable)
]</code></pre>

<img src="/assets/2021-01-07-analyzing-weather-data/temperature_heatmap_2.png" width="100%" />

<h2>Thoughts on Heatmaps</h2>
The interesting thing we learned about heat maps is how much we could control the perception of the chart based on our decisions about the size of the groupings and the color choices. Dark colors on the days with the biggest temperature increases could flood the chart with red. If we chose equal equal sized groups for the cut-offs, there would be a lot more days for the average which were colder (as shown below), but a lot more for the max which were hotter. It made us more wary of heat maps.
<pre class="r"><code># Uneven hand selected cutoffs to find more balanced counts
lapply(list(cut(temperature[variable == &quot;change_avg&quot; &amp;
                    !is.na(value)]$value, c(-100,-15,-5, 5, 15, 100)), 
cut(temperature[variable == &quot;change_max&quot; &amp;
                    !is.na(value)]$value, c(-100,-15,-5, 5, 15, 100))), summary)</code></pre>
<pre><code>[[1]]
(-100,-15]   (-15,-5]     (-5,5]     (5,15]   (15,100] 
       169       1489       4929       1786         65 

[[2]]
(-100,-15]   (-15,-5]     (-5,5]     (5,15]   (15,100] 
       286       2016       4155       1821        160 </code></pre>
<pre class="r"><code># Even range limits with less even counts
lapply(list(cut(temperature[variable == &quot;change_avg&quot; &amp;
                    !is.na(value)]$value, 5),
cut(temperature[variable == &quot;change_max&quot; &amp;
                    !is.na(value)]$value, 5)), summary)</code></pre>
<pre><code>[[1]]
    (-38,-25]   (-25,-12.1] (-12.1,0.827]  (0.827,13.8]   (13.8,26.8] 
            5           305          4253          3767           108 

[[2]]
(-28.8,-15.8] (-15.8,-2.95]  (-2.95,9.95]   (9.95,22.9]   (22.9,35.8] 
          215          2858          4659           686            20 </code></pre>



<h1>Conclusion</h1>
<p>That wraps up this quick exploration of an EPA monitor in Connecticut. We still have many questions about air quality, temperature and wind speed. We wonder why the EPA chose to put the monitor down by the edge of the water away from the heavy traffic of I-95 and Route 1 and the bulk of the population. We didn’t have a lot of time to spend, and acknowledge that we may have misread or misinterpreted some of the data, but now we at least know what to look for.

<br><br>

The purpose of this blog is to explore, learn and get better, faster and more accurate in data analysis. If you are interested in learning R and would like to see what it takes to learn R, we invite you to download our free <a href="https://www.business-science.io/">data science cheat sheet</a> and <a href="https://us02web.zoom.us/webinar/register/WN_tuDEp9ZmQUeVm_lqVw1BfA?utm_content=buffer4396b&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer&fbclid=IwAR0s45FjkubJGeJB48Ja2VgxZaBh8cqwHGtrOCIdB71XmKiTqqIxJFWADvk">join our free R webinar</a> on January 20, 2021. </p>


<br>

<strong>Author: David Lucy, Founder of [Redwall Analytics](https://redwallanalytics.com)</strong>
<br>David spent 25 years working with institutional global equity research with several top investment banking firms.


<br>

{% include cta_rtrack.html %}
