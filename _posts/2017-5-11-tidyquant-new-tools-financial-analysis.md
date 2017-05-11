---
layout: post
title:  "tidyquant: New Tools for Performing Financial Analysis within the Tidy Ecosystem"
author: "Matt Dancho"
categories: [Technical-Papers]
tags: [R-Project, R, tidyquant, tidyverse, quantmod, TTR, xts, zoo, PerformanceAnalytics]
image: new_tools_report_cover.PNG
---




In advance of upcoming [_Business Science_](http://www.business-science.io/) talks on `tidyquant` at R/Finance and EARL San Francisco, we are releasing a technical paper entitled [__"New Tools For Performing Financial Analysis within the 'Tidy' Ecosystem"__](https://github.com/business-science/reports/blob/master/new_financial_tools_tidy_ecosystem.pdf). The technical paper covers an overview of the current R financial package landscape, the independent development of the "tidyverse" data science tools, and the `tidyquant` package that bridges the gap between the two underlying systems. Several usage cases are discussed. We encourage anyone interested in __financial analysis and financial data science__ to check out the technical paper. We will be giving talks related to the paper at [__R/Finance on May 19th in Chicago__](http://www.rinfinance.com/) and [__EARL on June 7th in San Francisco__](https://earlconf.com/sanfrancisco/#speakersAnchor). If you can't make it, I encourage you to read the technical paper and to [follow us on social media to stay up on the latest _Business Science_ news, events and information](#social). 


# Technical Paper Abstract

Financial analysis and data science in the R programming language have followed separate paths resulting in two important systems: “xts” and “tidyverse”. The advantage of the “xts” system is in the management of time series financial data. The advantage of the “tidyverse” system is in the ability to implement a set of packages that have a uniform structure and data representation to incorporate within the data science workflow. Because of the separation in development, the two systems are difficult to use together limiting the full potential of financial analysis within R. The `tidyquant` package solves this problem by integrating several of the best financial analysis packages with the “tidy” ecosystem. The integration unlocks the data science workflow, which enables modeling and scaling analyses in a “tidy” way.

Three usage cases are discussed to illustrate the benefits of `tidyquant`. The first example uses the scaling capabilities to provide an answer for how the financial market values risk versus reward. The second example builds on the first by visualizing the returns over time and illustrating how the `purrr` package can be used to apply functions to data frames. The third example evaluates methods to scale the performance analysis of multiple portfolios using combinations of weighted asset blends. These examples only scratch the surface of what is possible with `tidyquant`.

![tidyquant Technical Paper Cover](/assets/new_tools_report_cover.PNG)

# Announcements

If you're interested in meeting with the members of [_Business Science_](http://www.business-science.io/), we'll be speaking at the following upcoming conferences:

* [R/Finance: Chicago, May 19-20](http://www.rinfinance.com/)
* [Enterprise Applications of the R Language (EARL): San Francisco, June 5-7](https://earlconf.com/sanfrancisco/)


# Important Links

If you are interested learning more about `tidyquant`:

* [Visit our `pkgdown` site for detailed documentation](https://business-science.github.io/tidyquant/)
* [Visit our GitHub site for code updates](https://github.com/business-science/)
* [Visit our website for news and announcements](http://www.business-science.io/)

# Follow Us on Social Media <a class="anchor" id="social"></a>

* [@bizScienc](https://twitter.com/bizScienc) is on [twitter](https://twitter.com/bizScienc) and [LinkedIn](https://www.linkedin.com/company/business.science)!
* Sign up for [our insights blog](http://www.business-science.io/) to stay updated!
* If you like our software, [star our GitHub packages](https://github.com/business-science) :)


