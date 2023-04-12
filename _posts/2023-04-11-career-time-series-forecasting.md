---
layout: post
title: "How I Went From A Mechanical Engineer To The Director Of Sales Engineering Using Time Series Forecasting"
date: 2023-04-11 11:00:00 -0500
excerpt: "Plus How My Students Are Using These Lessons To Get Promoted Themselves."
author: Matt Dancho
categories:
- Business 
tags:
- R-Bloggers
image: "/assets/mechanical_engineer_to_director.jpg"
image_preview: "/assets/mechanical_engineer_to_director.jpg"
---


# Part 1: Before I Knew What Data Science Was

When I graduated from Penn State in 2007, I spent the first couple of years as a mechanical engineer learning all there was to know about engineering valves.

Eventually, I landed at a company called Bonney Forge, which manufactured pipe fittings and valves for places like Oil Refineries and even the Guinness Factory.

![Mechanical Engineer](/assets/mechanical_engineer.jpg)

<p class="text-center date">On a vacation at the Guiness Factory in Dublin Ireland (realizing they had Bonney Forge Valves!)</p>

It was a mechanical engineer’s dream- *a never-ending supply of work, puzzles to solve, and plans to draw on.* The only problem was: <span style="color:red;">I was sick of it.</span>

After a while I realized it wasn’t the company I had a problem with- it was the work.

So I made a conscious decision to grow into a new profession- **immediately.**

The first thing which caught my eye was “business analysis”. In fact, when I was working on insanely complicated projects at work, I was going home and studying things like **Business Problems**, `Excel`, and `PowerBI`. Heck, I *even* went back to Penn State for a 2nd round to get my MBA.

Eventually, I had a knowledge base where I was somewhat useful and started submitting reports to my boss about how to grow our products & services… get more business from customers… and how to make our company more money while servicing our customers even better.

After a year of being a mechanical engineering manager (& an undercover business analyst), I got a promoted to oversee a small division within the company as the “technical sales & engineering manager”. 

It was my job to do analysis within that division and help the technical sales team win jobs.

At the time I had become a wizard with `Excel`. I could do complicated multi-variable analysis, programming with `VBA`, create reports, spreadsheets with 100,000’s of rows, and most importantly… I learned to solve business problems.

However…

## Excel Would Almost Be My Downfall.

Once a quarter all of the “business managers” had to have a meeting with the C-Suite to tell them how to improve the business. That means you had to look the CEO, CFO, and COO in the eye and basically tell them what decisions need to be made to make the company more profitable.

Normally these meetings went on for hours. My first one was in 2013 and I’ll remember it forever. We all piled into this conference room in the building. Management, the C-Suite, and division heads were all in attendance.

In the beginning, I felt fine. I had spent 3 weeks making my presentation, and it was air-tight. I watched the other people present. 1 by 1 a bunch of nervous guys got up, delivered some form of a PowerPoint, and delivered notes to the executives.

After 4-5 managers, I was next. So I decided to pull out my laptop, and test everything just to make sure it was going to work.

Unfortunately, I had a spreadsheet that was almost 1,000,000 rows long and often lagged. And I wanted to update it with the freshest, new sales data from that week. So when I opened it up to make sure it had plenty of time to work…

## … I Got The Blue Screen Of Death.

![Blue Screen Of Death](/assets/blue_screen_of_death_2.png)

<p class="text-center date">"The Blue Screen Of Death" (It's about as fun as it looks)</p>

I tried not to panic. So I restarted, loaded everything up again, and before the file even opened…
… I got it again. And again. And again.

I went into full panic mode. I was in the middle of a meeting with every single other business analyst and I couldn’t open the <u>only</u> file I needed. I was toast.

Before I knew it my CEO stood up and announced: “Alright! Give a warm welcome to Matt Dancho from the Technical Sales Team!”

I stood up. Face bright red. “Ehrm. So I have to apologize. My laptop can’t seem to function right now, I’m going to have to delay my presentation to another day. All I’m getting is the blue screen of death.”


\*\*\*Silence\*\*\*

“Alright. Matt, we’ll talk after the meeting and get your notes when you can. Next up we have…”

## I Was Convinced I Was Going To Be Fired

I took the file, opened it up on my desktop, pre-recorded my presentation, and sent it to the CEO the next day. (Shocker, he didn’t find it all that useful.)

After embarrassing myself in front of the entire company’s head staff I was convinced I had destroyed my own career in about 60 seconds. The good news is… I was very wrong.

Because of that mishap, I decided to look for a more powerful tool than Excel. That way I wouldn’t ever have that happen again.

After a few days of searching, I read an article about how to take what you do in Excel and automate it with a programming language called `Python`. To be honest with you, I had heard of “coding” before, but didn’t really know what it was.

So I said, “Screw it, I’m this far in, how hard can Python be?”

**Yeah, turns out `Python` IS hard.** And after several weeks of attempting to learn Python, I gave up. I couldn’t do ANYTHING that I could do in `Excel`, and figured Python was for “programmers”.

For a few months, I went back to business-as-usual. Working in Excel, learning about business, and creating reports for my bosses. But just when I thought I was out…
… they pulled me back in.

A co-worker fresh out of engineering school showed me something he did in a programming language called “R” and I was blown away. **What took me 2 days to do he could do in 2 minutes with `R`.**

“Is it hard?”

“Not really, there is a transition period, but once you learn the basics it’s like `Excel` on steroids.”

## I Was Off To The Races

**I started learning `R` and it was 10X easier than `python`.** It operated very similarly to `Excel`, and I could do 100X more with it than Excel. Not to mention I could work with larger amounts of data.

After a few more months, I was flying through my job. I could automate all of my analysis, 90% of my routine reporting (<u>saving me 20+ hours per week</u>), and I was out-performing every business manager around me.

Little did I know, I had actually started learning Data Science.

# Part 2: Flying Through My Company As A Rogue Data Scientist

I started taking classes in my off-time learning about R & Data Science. The stuff data scientists were doing was LIGHTYEARS beyond what I was doing as a business manager / analyst…

… and I loved every second of learning it.

Eventually, I stumbled into Rob Hyndman and Time Series forecasting. Time Series seemed like a super weapon. Being able to predict sales seemed like the perfect thing for me to master since I was in charge of “technical sales”.

And then this happens…

![Oil Prices Go Into A Free Fall](/assets/oil_prices_freefall.jpg)

<p class="text-center date">Oil Prices Go Into A Free Fall For Over A Year Straight (2015 to 2016)</p>


And you know what’s even worse? **All of our revenue was based on the price of oil.**

Which means the lower the price of crude oil… the less money we could make as demand went down. And oil & gas was our bread and butter. So pivoting wasn’t exactly an option.

So you know what we did? We waited a month to see if it would get better. It got worse.
Then we waited again. Worse. Then again. Worse.

As things kept getting worse I figured my job was done. **I was going to be fired less than** a year later from my **blue screen of death fiasco.** I even started applying to other companies for about a week. Then I realized… *“Maybe I can fix this.”*

So in traditional Matt Dancho fashion, I took matters into my own hands.

I had been learning forecasting and time series in my spare time, and now I was just dangerous enough to predict how FAR it was going to fall. However, `ARIMA` & `Linear Regressions` just weren’t cutting it. My predictions were too inaccurate, and they were hurting more than they were helping.

So I developed a forecasting system taking advantage of new algorithms that were winning time series competitions. And to my surprise,  they sped up the process and improved my accuracy. With these tools, I was able to predict which jobs would be profitable even with the falling oil prices. And in the WORST year for oil…

## … I Took My Division From $3,000,000 In Revenue To $15,000,000.

After a year of piloting a sinking ship, the CEO wanted me to do this for ALL the divisions. So he promoted me from “Technical Sales Manager” to **Director Of Sales & Engineering.**

This instantly took me from $80,000 a year to $155,000. I went from being a grunt to reporting DIRECTLY to the CEO.

He also gave me a 60-person staff and now I was working about 20 hours a week.

## I Had Made It As A Lone Data Scientist & My CEO Was Convinced I Was Magic.

I’m sure you’ve figured this out by now but being able to forecast is incredibly important to ANY company that sells something. (Which is all of them.)

That means if you can do forecasting well, you can pretty much write your own ticket.

And since I developed `modeltime` & `timetk`, the 2 time series analysis and forecasting `R` packages that streamlined my 10,000-lines-of-code forecasting process into just 200 lines of code, my notoriety had just broken through.

So I had a steady trickle of companies who wanted me to do time series forecasting for them.

Because of my consulting gigs, I was bringing in an extra $50,000 to $100,000 completing projects on the weekend. And let me remind you, I didn’t ask for ANY of this. All I did was follow my passion and try to improve at my job.

# Big Conclusions:

By combining problem solving skills and data science, I was able to take myself from 1 of 100 mechanical engineers working at Bonney Forge to reporting directly to the CEO making over $300,000 a year and doing what I loved.

If you want to make a splash where you work, you have to tackle the big problems and go the extra mile to constantly improve yourself.

Alright, that’s it for now.

*Your Friendly Neighborhood Data Scientist,* 

*Matt Dancho,*

P.S. If you would like to learn time series forecasting, you can pick up my [**High-Performance Time Series Course + its expansion pack: The Lost Time Series Modules for 50% off until April 14th, 2023.**](https://learn.business-science.io/timeseries-9715-2517)

