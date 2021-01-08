---
layout: post
title: "Finance in R - Evaluating American Funds Portfolio"
date: 2020-09-30 7:30:00
excerpt: "Active funds have done poorly over the last ten years, and in most cases, struggled to justify their fees. In the post, there is a supporting chart showing a group of American Funds funds compared to the Vanguard Total Market index. "
author: "David Lucey"
categories: [Finance]
tags: [R-Bloggers, Learn-R, Learn-Finance, PerformanceAnalytics]
image: 2020-09-30-evaluate-american-funds-portfolio/evaluating-american-portfolio-cover.png
image_preview: 2020-09-30-evaluate-american-funds-portfolio/evaluating-american-portfolio-preview.png
canonical: https://redwallanalytics.com/2020/06/12/checking-up-on-american-funds-performance-through-cycle/
---


# Introduction

Active funds have done poorly over the last ten years, and in most cases, struggled to justify their fees. A growing list of commentators appropriately advocate for index funds, although sometimes go a little beyond what we believe to be fairly representing the facts. The inspiration for this article is this post by Asset Builder blog site [American Funds Says, “We Can Beat Index Funds”](https://assetbuilder.com/knowledge-center/articles/american-funds-says-we-can-beat-index-funds) scrutinizing claims by the fund group. Asset Builder asserts that “Even without this commission, the S&P 500 beat the aggregate returns of these (”American“) funds over the past 1-, 3-, 5-, 10- and 15-year periods”. In the post, there is a supporting chart showing a group of American Funds (“AF”) funds compared to the Vanguard Total Market (“TMI”) index. This analysis struck us in conflict with our own experience as actual holders of a core portfolio of eight AF over the last 20 years, so this post will be about exploring this data.

In this article, we will download the weekly closing prices of the relevant AF and the most comparable Vanguard Funds, re-construct our portfolio and estimate the corresponding weighting of different asset classes for each, replicate a relevant benchmark portfolio of Vanguard index funds, and explore their relative performance histories over the period to try to square the two perspectives. We will also consider the possibility that AF’s declining out-performance versus our customized benchmark over the last 15 years may have to do with growing fee differentials with index alternatives.

As usual, Redwall would like to avoid defending to any particular viewpoint other than to follow the data and see where it leads. If we have made any mistakes in our assumptions or the data used, we welcome polite commentary to set us straight. We have no relationship with the AF, and for the most part are sympathetic to those who say that index funds may be the best choice for most investors. All the code is available on Github for anybody to replicate. Also to be clear, Redwall is not an investment adviser and is making no investment recommendations.


# Set Up of AF Portfolio

During the 2000 bear market, Redwall put substantial research into its investment strategy, and concluded that the AF had a competitive advantage over other mutual fund groups. Capital Group, the operator of the AF, was founded at the beginning of the Great Depression in 1932. Capital had a large group of experienced managers sitting in different locations around the world, with varied perspectives, owning a heavy component of their own funds, with each investing in concentrated portfolio of their own highest conviction ideas. Managers had strong incentive to think long-term instead of for the next quarter. If the style of one manager of the fund was out of sync with the current flavor of the market, others might pick up the pace. The cost of research could be leveraged over a much larger asset base than most mutual funds while still keeping running costs at a manageable level. Being one of the largest managers, analysts and managers would always have access to the best information and advice. Convinced that AF were a solid set-it and forget-it portfolio, investments were were made with monthly dollar-cost averaging without paying loads, and mostly between 2001-2004.


<br>
{% include cta_rtrack.html %}


# Description of American Funds Held

The AF don’t fit well into the traditional Morningstar investment categories. By in large, its portfolios are many times larger than other active funds, and mostly stick to the largest of the large capitalization global stocks. Washington Mutual mostly owns US mega caps value stocks and holds no cash, while Amcap often moves down the market capitalization spectrum a bit with growth stocks, and will hold a substantial amount of cash. Capital Income builder has a mix of US and overseas stocks which pay high dividends with room to grow. Income Fund of America is similar to Capital Income builder, but has a more US oriented mix and takes more credit risk. Capital World Growth and Income is like Washington Mutual in its stock selection, but will hold a small amount of credit at times when it makes more sense than the equity. New Perspective owns the largest multinational companies domiciled in the US and around the world, but have acquired the competency to expand across borders.


# New Geography of Investing

It was probably from operating New Perspective, set up to invest in companies having a majority of revenues of coming from outside of their country of domicile, which led AF to discover a new way of looking at its portfolios. In the [New Geography of Investing](https://www.capitalgroup.com/content/dam/cgc/tenants/canada/pdf/en/public/NewGeographyOfInvesting.pdf) campaign launched in 2016, they do an excellent job of explaining the concept that a portfolio shouldn’t be constrained by company domicile, a central pillar of the Morningstar ratings platform. In addition to the country of domicile, AF now disclose the aggregated geographic mix of revenues of all of its portfolios on their website, and explain clearly that it doesn’t prioritize fitting its portfolios into Morningstar regional boxes at the expense of finding the best investments. Because of this, a single index benchmark may be less applicable to AF funds than some others.


# Doublecheck Asset Builder Values

We believe that Asset Builder were referring to no-load AF in their table, but were not sure. It has been possible to buy American Fund F-1 class shares load-free since 2016 (with a 3 bps higher annual expense ratio), so there is no reason for anyone that doesn’t want to pay the up-front sales changes for advice to pay one. As shown below, we calculate that Asset Builder’s ending value for is 3-4% too high for the Vanguard Fund, but also too low for 4 out of the 5 AF without loads. For the most part, their assertion that AF’s funds lose to the S&P still holds up, even with these adjustments. If taxes were taken into account, it would widen the performance advantage of TMI. Still, this is a strange pattern (tilting the calculation in favor of TMI and against AF), and makes us a little suspicious of Asset Builder. The assertion doesn’t take into account risk. As we will discuss below, the AF funds are all less volatile than the market over the period.


{% highlight r %}
# Get data from quantmod
tickers <-c("AGTHX","AMCPX","AWSHX","AIVSX","AMRMX", "VTSAX")
asset_builder_data <- lapply(tickers, function(fund) {
  getSymbols(
    fund,
    src = "yahoo",
    env = NULL,
    from = as.Date("2004-11-30"),
    to = as.Date("2019-11-30")
  )
})

# Calculate holding period return of $100 invested monthly
get_data <- function(xts_obj, load = 0) {
  
  # Build data.table
  dt <- data.table(
          date = index(xts_obj),
          price = (Ad(xts_obj[, 6]))
        )
  
  # Filter monthly
  dt[, month:=zoo::as.yearmon(date)]
  dt <- dt[, .SD[1], month]
  
  # Adjust load if needed
  if (!str_detect(names(dt)[3], "price.A.*")) {
    dt[, shares := 100 / .SD, .SDcols=3]
  } else {
    dt[, shares := (100 * (1 - load)) / .SD, .SDcols=3]
  }
  
  # Calculate final value
  final_price <- as.numeric(dt[nrow(dt), 3])
  dt[, final_value := shares * final_price]
  return <- sum(dt$final_value)
  
  # Return final value
  return
  }
  
# Values from Asset Builder table
asset_builder <- 
  c(42402, 41827, 39981, 37125, 39814, 45112)

# Build comparison table
dt <-data.table(
        fund = tickers,
        asset_builder,
        redwall_no_load = round(sapply(asset_builder_data, get_data), 0),
        redwall_load = round(sapply(asset_builder_data, get_data, load=0.0575), 0)
      )
dt
{% endhighlight r %}

{% highlight r %}
   fund   asset_builder  redwall_no_load  redwall_load
1: AGTHX         42402           43125        40646
2: AMCPX         41827           42539        40093
3: AWSHX         39981           41186        38818
4: AIVSX         37125           37883        35705
5: AMRMX         39814           38989        36747
6: VTSAX         45112           43505        43505
{% endhighlight r %}


# Customized Vanguard Benchmark Index Portfolio

There is nothing wrong with Asset Builder’s choice of Vanguard Total Market Index (TMI) as a comp for the US funds, but our portfolio also includes several non-US and balanced funds. As shown below, we will be comparing our portfolio to 54.5% of the S&P index. The S&P has an average market capitalization almost twice as large as the Total Market Index, and we believe is more comparable to typical holdings of the AF. We are also including 24.5% of our benchmark in non-US stocks based on our estimated weightings shown in the matrix below. AF also run with a higher amount of cash than index funds, as can be seen with our estimated 7.35% weighting in VFISX below. Cash reserves are a drag on performance during bull markets, so has likely been weighing on AF in recent years. During the 2000 tech crash, extra cash gave AF room to maneuver, and as we show below, helped them achieve ~30% out-performance through the bear market. Our benchmark is more granular, and we believe a more fair comparison than the TMI for our portfolio, but in the end is still only an estimate. Weightings over time have not been static as we have assumed, and we have chosen one set of weightings for the entire 20-year period. A future analysis may look at ways of flexing our weightings matrix over time.

{% highlight r %}
# Funds to query
am_funds <- c("AMCPX","AWSHX","CAIBX","AMECX","SMCWX","AEPGX", "ANWPX", "CWGIX")
van_funds <- c("VFINX", "VGTSX", "VBTIX", "VSCIX", "VFISX", "VBINX")
funds <- c(am_funds, van_funds)

# Assumed Vanguard weighting of fund
m <- matrix(
  # vfinx, vgtsx, vbtix, vscix,  vfisx, vbinx
  c(0.85,  0.05,  0,     0,      0.1,    0,  #amcpx
    0.95,  0.02,  0,     0,      0.03,   0,  #awshx
    0.35,  0.30,  0.25,  0,      0.1,    0,  #caibx
    0.5,   0.15,  0.30,  0,      0.05,   0,  #amecx
    0,     0,     0,     0.9,    0.1,    0,  #smcwx
    0.05,  0.8,   0,     0.05,   0.1,    0,  #aepgx
    0.45,  0.4,  0.05,   0,      0.1,    0,  #cwigx
    0.5,   0.45,  0,     0,      0.05,   0), #anwpx
  ncol = 6, 
  byrow=TRUE)

# Weighting of AF portfolio
portfolio <- c(0.15, 0.20, 0.15, 0.15, 0.05, 0.1, 0.1, 0.1)

# Implied benchmark portfolio weightings
benchmark <- as.vector(colSums(m * portfolio))

# US Equity, Intl Equity, Total Bonds, Smallcap Equity, Money Market, Balanced
benchmark
{% endhighlight r %}


{% highlight r %}
[1] 0.5450 0.2440 0.0875 0.0500 0.0735 0.0000
{% endhighlight r %}


# Download Raw Weekly Mutual Fund Price Data with Quantmod

In the course of writing this blog, Redwall has frequently expressed amazement that so many analyses, not possible previously, are now enabled so quickly with a few lines of code. Using the `quantmod` package, here we extract over 20 years of mutual fund data, 80,738 prices for our 14 funds in a matter of seconds, all for free. In addition to stock, mutual fund and index prices, we could just as easily query economic series from FRED with `quantmod`.

{% highlight r %}
# Get data with quantmod
data <- lapply(funds, function(fund) {
  getSymbols(
    fund,
    src = "yahoo",
    env = NULL,
    from = as.Date("1997-07-12"),
    to = as.Date("2020-06-12")
  )
})
names(data) <- funds

# Print a few rows of AWSHX
data$AWSHX['1997-07']
{% endhighlight r %}


{% highlight r %}
           AWSHX.Open AWSHX.High AWSHX.Low AWSHX.Close AWSHX.Volume AWSHX.Adjusted
1997-07-14      29.66      29.66     29.66       29.66            0       8.205210
1997-07-15      29.73      29.73     29.73       29.73            0       8.224575
1997-07-16      29.91      29.91     29.91       29.91            0       8.274372
1997-07-17      29.73      29.73     29.73       29.73            0       8.224575
1997-07-18      29.30      29.30     29.30       29.30            0       8.105614
1997-07-21      29.37      29.37     29.37       29.37            0       8.124981
1997-07-22      29.97      29.97     29.97       29.97            0       8.290968
1997-07-23      30.00      30.00     30.00       30.00            0       8.299267
1997-07-24      30.07      30.07     30.07       30.07            0       8.318631
1997-07-25      30.03      30.03     30.03       30.03            0       8.307570
1997-07-28      30.05      30.05     30.05       30.05            0       8.313101
1997-07-29      30.31      30.31     30.31       30.31            0       8.385027
1997-07-30      30.61      30.61     30.61       30.61            0       8.468021
1997-07-31      30.66      30.66     30.66       30.66            0       8.481853
{% endhighlight r %}


# Preprocess Data into Weekly Log Returns for Analysis

Our data list contains 14 xts (time series) objects with dates and prices of each fund over the period. `quantmod` also has a suite of tools for processing quantitative market data for stocks, mutual funds and portfolios. In the first line below, we magically select only the adjusted prices and convert them all to weekly log returns. In the second, we merge the time series of all 14 mutual funds on the respective dates into a data.frame. In the third line, we simulate the money growth on $1 of owning the funds in proportion to our portfolio and benchmark vectors and re-balancing every quarter when the target weightings move out of line.


{% highlight r %}
# Convert weekly pries to log returns
fund_returns_list <- 
  lapply(data, function(fund)
    log(1 + weeklyReturn(Ad(fund))))

# Build data frame of American and Vanguard funds with weekly log returns by date
fund_returns_df <-
  Reduce(function(d1, d2)
    merge.xts(d1, d2, 
              join = 'left', 
              check.names = TRUE),
    fund_returns_list)
names(fund_returns_df) <- funds

# Calculate return on AF re-balanced quarterly with PerformanceAnalytics Return.Portfolio function
portfolio_return <-
  Return.portfolio(fund_returns_df[, am_funds],
                   rebalance_on = 'quarters',
                   weights = portfolio)

# Calculate return on Vanguard benchmark re-balanced quarterly
benchmark_return <-
  Return.portfolio(fund_returns_df[, van_funds],
                   rebalance_on = 'quarters',
                   weights = benchmark)

# Show a few lines of portfolio returns
portfolio_return[1:5]
{% endhighlight r %}


{% highlight r %}
           portfolio.returns
1997-07-18      -0.001874128
1997-07-25       0.014072466
1997-08-01       0.007248111
1997-08-08      -0.004673215
1997-08-15      -0.018078228
{% endhighlight r %}


# AF Steadily Outperforming our Customized Benchmark

The chart below gives a much better “apples-to-apples” benchmark for comparison to our portfolio than the Vanguard Total Market Index would have. It is true that the mainly US-oriented AF that we may not have outperformed as much as the non-US heavy portfolios. But our portfolio is global, and as can be seen here in aggregate, outperforming steadily except for a few relatively short periods. We can see three periods of either under-performance or treading of water relative to the benchmarks at the tail end of the previous two bulls, but then the subsequent out-performance.

{% highlight r %}
chart.RelativePerformance(portfolio_return, benchmark_return)
{% endhighlight r %}

![Relative Performance](/assets/2020-09-30-evaluate-american-funds-portfolio/relative-performance-chart-1.png)


# Money Difference of AF vs Index Benchmarks

The annual active premium of the AF portfolio over the whole period has been about 1.8% per annum, but as we will discuss below, the fund group’s premium may be compressing. If we choose the starting point to be the beginning of 2003, it falls to 1.02%. Over the full period as shown below in blue, a dollar invested in 1997 would be worth $4.47 while the benchmark would yield $3.03 for the benchmark in orange (a considerable reward for hiring AF even ignoring likely greater tax inefficiency). If we move to 2002 (around when we built our portfolio), the difference falls to $3.16 and $2.66.

{% highlight r %}
chart.CumReturns(
  merge.xts(portfolio_return["2002-01-01/"]$portfolio.returns, benchmark_return["2002-01-01/"]$portfolio.returns, join = "left"),
  colorset = 1,
  begin = "first",
  wealth.index = TRUE,
  plot.engine = "plotly"
)
{% endhighlight r %}

![Relative Performance](/assets/2020-09-30-evaluate-american-funds-portfolio/benchmarks-plot.png)


# Mutual Fund Grading Ready for Overhaul

Morningstar came up with the ideas of mutual fund Star Ratings in 1985 to compare funds across broadly defined categories. They took it a step further, they created investment style and regional boxes in 1992, which all made sense at the time. Just like other report cards though, investors began to try to game the system by moving funds among categories, launching and merging funds when advantageous, and creating incentives for managers chasing quarterly or calendar year returns. It doesn’t seem to make a lot of sense now make decisions about manager skill over any particular year or group of years when it is possible to break a fund into weekly performance, and build new benchmarks all in a matter of a day or two, as we have done in this analysis.

It is easily possible to extract all periods to see how persistently or not a fund has out-performed. American Fund itself did an analysis along these lines last year _The Select Investment Scorecard_, but unfortunately hasn’t updated or made the data available for others to reproduce, though a quick glance at the methodology, it seemed robust. It is hard to understand why Morningstar wouldn’t want to improve its measurement process along these lines.


# Looking at Number of Weeks with Outperformance

We took all of our 1196 weeks, and calculated the percentage of weeks by quarter where our AF portfolio outperformed the benchmark. We can see that the ratio of weeks outperforming greater than 0.5 in almost all periods, though it broke below briefly during 2007 and again last week. The confidence bars are wide, and so hard to conclude definitively that the ratio has been above 0.5 since 2006-7. After a while looking at this chart, the trend downward since 2005 certainly struck us.

{% highlight r %}
# Combine AF and Benchmark for Comparison
joined <- 
  data.table(
    date = index(portfolio_return),
    am_funds = portfolio_return$portfolio.returns,
    bench = benchmark_return$portfolio.returns,
    diff = portfolio_return$portfolio.returns - benchmark_return$portfolio.returns
  )

# Calculate weekly performance difference of AF vs benchmark
dt <-
  joined[, (diff.portfolio.returns > 0), 
         zoo::as.yearqtr(date)][
        ][, sum(V1) / .N, zoo]
setnames(dt, c("V1", "zoo"), c("comparison", "quarter"))

# Plot smoothed quarterly number of outperforming weeks
ggplot(dt, aes(quarter, comparison)) + 
  geom_smooth() +
  theme_bw() +
  labs(
    title = "Percent of Weeks Where AF Outperformed Vanguard Benchmark Portfolio by Quarter",
    y = "Percentage of Weeks Outperforming Benchmark",
    x = "Date"
    )
{% endhighlight r %}

![Weekly Returns](/assets/2020-09-30-evaluate-american-funds-portfolio/weekly-returns-1.png)


# Modeling Fee Reductions in Line with Index Fund Benchmarks

In 2005, the cost of many of the index funds we used in comparison exceeded 30 bps, and today the best in class index funds are at or below 10bps. We might have to study it more, but it seems like there was a bigger reduction in overseas and bond index funds than for the S&P, which was already low by 2010. Meanwhile, AF haven’t lowered its expense ratios meaningfully in 20 years. That means that its managers would have to generate that much higher gross returns just to maintain the same active return. If we model in a 1 bp fee reduction per year, or 23 bps over the full period, the out-performance trajectory improves noticeably, though we are still not sure it is greater than 50%.

{% highlight r %}
# Model fee reduction of 0.001 per annum
fee_reduction <- seq(0,23)/10000
fee_reduction_db <- data.table( year = 1997:2020,
                                fee_reduction )
joined[, year := year(date)]
new_joined <- fee_reduction_db[joined, on = "year"][
  ][, .(date, adj_return = diff.portfolio.returns + fee_reduction/52)]

# Calculate weekly performance difference of AF vs benchmark
dt <-
  new_joined[, (adj_return > 0), 
         zoo::as.yearqtr(date)][
        ][, sum(V1) / .N, zoo]
setnames(dt, c("V1", "zoo"), c("comparison", "quarter"))

# Plot smoothed quarterly number of outperforming weeks
ggplot(dt, aes(quarter, comparison)) + 
  geom_smooth() +
  theme_bw() +
  labs(
    title = "Percent of Weeks Where AF Outperformed Vanguard Benchmark Portfolio by Quarter",
    y = "Percentage of Weeks Outperforming Benchmark",
    x = "Date"
    )
{% endhighlight r %}

![Weekly Returns](/assets/2020-09-30-evaluate-american-funds-portfolio/model-fee-reduction-1.png)


# Conclusion

This has been a quick analysis to become accustomed to the `quantmod` and PerformanceAnalytics tools. We may return to this subject to look at relative performance during bear markets, and also to try to replicate the American Fund’s Select Investment Scorecard, which measured longer periods of out-performance. Another future study we would like to do to more precisely quantify the change in relative fees. AF assets under management have risen from about $1 trillion just before the GFC to $1.8 trillion today, and this seems like a business with a high degree of operating leverage. Rather than spending a more money advertising, like many the other mediocre investment managers, as they have begun doing daily on CNBC and Morningstar, an investment in lower fees and renewed quiet out-performance might be the best medicine.


<br>

<strong>Author: David Lucey, Founder of [Redwall Analytics](https://redwallanalytics.com)</strong>
<br>David spent 25 years working with institutional global equity research with several top investment banking firms.

<br>
{% include cta_rtrack.html %}
