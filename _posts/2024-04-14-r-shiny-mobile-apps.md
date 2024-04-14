---
layout: post
title: "How to Make Mobile Apps with R Shiny"
date: 2024-04-14 10:00:00 -0500
excerpt: "Hey guys, welcome back to my R-tips newsletter. In today's lesson, I'm sharing how to make Mobile Web Apps with R Shiny using shinyMobile. Let's go!" 
author: Matt Dancho
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- shinyMobile
image: "/assets/079_mobile_web_apps_in_r.jpg"
image_preview: "/assets/079_mobile_web_apps_in_r.jpg"

---
Hey guys, welcome back to my [R-tips newsletter](https://learn.business-science.io/r-tips-newsletter?el=website). It's no secret that modern businesses run on mobile apps. Today, I'm going to share how to turn your R Shiny web apps into Mobile-First business applications. 

### Table of Contents

Here's what you're learning today:

* **What is shinyMobile?** You'll discover what is is and why use it versus Shiny
* **How to create mobile apps with `shinyMobile`** I'll explain how to make your first .
* **A Business Science Mobile Investment App**. This is an app idea that I have for managing my Interactive Brokers algorithmic trading performance and portfolio risk analytics.

![Mobile Apps](/assets/079_mobile_web_apps_in_r.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code (In the R-Tip 079 Folder)</a></p>

---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">weekly video tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> 
    <li><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Sign up for our R-Tips Newsletter and get the code.</a></li> 
    <!-- <li><a href="https://youtu.be/fkwKQi7skAw">YouTube Tutorial</a></li>-->
</ul>

# What is shinyMobile?

The [`shinyMobile` package](https://rinterface.github.io/shinyMobile/) is an R package that integrates the Framework7 mobile app framework that's designed for Mobile-First applications. 

![shinyMobile](/assets/079_shinymobile.jpg)

# Why Mobile-First Shiny Apps (vs Normal Shiny Apps)?

Chances are you're interested in making R Shiny web applications that are specifically designed for use on mobile apps. But why not use just regular old Shiny for this task?

## Shiny uses Bootstrap Responsive Mobile Design

Shiny is built on top of a web framework called `Bootstrap`. [**Bootstrap**](https://getbootstrap.com/) is ideal for Shiny developers looking to create responsive websites quickly that look great on all devices without the need to write much CSS or JavaScript from scratch. It's less focused on providing a "mobile app" experience and more on being mobile-responsive.

![Bootstrap](/assets/079_bootstrap.jpg)

## shinyMobile uses Framework7 for actually putting your app on your iPhone

[**Framework7**](https://framework7.io/) is better suited for developers who want to build an application that feels and behaves like a native mobile application rather than a website that is simply responsive. It's especially powerful when used in conjunction with platforms like Cordova or Capacitor to build hybrid mobile apps.

![Framework7](/assets/079_framework7.jpg)

Key Features:

1. **Mobile-First Approach:** Designed specifically for mobile devices, it provides UI elements and animations that feel like native mobile applications.
2. **Native Look and Feel:** Includes styles for iOS and Android that mimic the design language of these platforms (like iOS's rounded buttons and Android's Material Design ripple effects).
3. **Integration with Mobile Frameworks:** Often used with PhoneGap or Cordova for creating apps that can be deployed on app stores and access native device features.
4. **Rich Interactive Components:** Offers components like swipeable sliders, pull-to-refresh, infinite scroll, and floating action buttons that are essential for modern mobile applications.
5. **Router Integration:** Comes with a built-in router for managing page transitions and loading new pages efficiently, which is critical for single-page applications that mimic a native app.

**A key ingredient is deployment, which I'll cover basic instructions with `Cordova` in the second part of this tutorial.**


# shinyMobile Tutorial: How I built the Business Science Mobile Investment App

This is a proof-of-concept that I'm working on to connect my Interactive Brokers API that manages all of my algorithmic trading. 

![Mobile Investment App](/assets/079_mobile_investment_app.jpg)

**To get the code: [Join R-Tips Newsletter](https://learn.business-science.io/r-tips-newsletter?el=website)**

The code is in the R-Tip 079 Folder. Download the code and run it:

![The code](/assets/079_code.jpg)

## Anatomy of a shinyMobile App

The important thing to understand is the key differences between a standard R Shiny App and shinyMobile App. 

### User Interface (UI)

![Anatomy of a Shiny Mobile app](/assets/079_anatomy_of_shinymobile_app.jpg)

#### Key Differences:

1. `f7Page()` this sets up your mobile page
2. `f7TabLayout()` This is the type of mobile layout. I prefer the Tab layout.
   - `f7Navbar()` sets up the navigation bar for your mobile app
3. `f7Tabs()` These expose tabs at the bottom of the mobile screen. They are swipeable so the app actually feels like a mobile app. 
   - `f7Tab()`: Each tab can be added that includes shiny content like inputs and outputs
4. `f7Card()`: I use cards to house pieces of content like plots (in this case my portfolio growth plot)

### Server

The server operates much like a normar R Shiny application. One of the key differences is that instead of using Plotly plots like I normally use, I've made the switch to **Apex Charts**. 

#### Apex Charts

Why Apex Charts via `apexchartr`? These are super fast and great for mobile or web applications. 

![Apex Charts](/assets/079_apex_charts.jpg)

# Installing Your Framework7 App with Cordova

Adding a Framework7 app to your iPhone typically involves creating a hybrid app that can be installed like a native app. Framework7 itself is designed to provide mobile-app-like experiences using web technologies (HTML, CSS, JavaScript), but to install it as an app on an iPhone, you'll need to wrap it in a native container. This is commonly done using tools like Cordova or Capacitor. Here’s a step-by-step guide on how to do it:

### Step 1: Develop Your Framework7 App

First, create your Framework7 app on your development machine. Ensure it's fully functional as a web application and ready for conversion into a mobile app.

```bash
# Example of setting up a Framework7 project
npm install -g cordova
cordova create myapp
cd myapp
cordova platform add ios
```

### Step 2: Set Up Cordova or Capacitor

**Cordova** and **Capacitor** are popular tools to convert web apps into native apps that can be deployed on mobile operating systems like iOS and Android.

#### Using Cordova:

1. **Install Cordova**:
   ```bash
   npm install -g cordova
   ```

2. **Create a Cordova Project**:
   ```bash
   cordova create myapp com.example.myapp MyApp
   cd myapp
   ```

3. **Add iOS as a Platform**:
   ```bash
   cordova platform add ios
   ```

4. **Copy Your Framework7 App Files**:
   Place your Framework7 app files into the `www` directory of the newly created Cordova project, replacing the existing files.

5. **Build the iOS App**:
   ```bash
   cordova build ios
   ```

#### Using Capacitor:

1. **Set Up Capacitor**:
   ```bash
   npm install @capacitor/core @capacitor/cli
   npx cap init MyApp com.example.myapp
   ```

2. **Integrate Capacitor with Your Framework7 Project**:
   If your Framework7 project was set up using a specific build tool (like Webpack or Vite), follow the integration steps specific to that setup. Essentially, you'll be configuring Capacitor to use the output directory of your web app as its `webDir`.

3. **Add iOS as a Platform**:
   ```bash
   npx cap add ios
   ```

4. **Build Your Project**:
   First, build your Framework7 project, then update Capacitor with the latest web assets:
   ```bash
   npx cap copy
   ```

### Step 3: Open and Run in Xcode

After setting up with either Cordova or Capacitor, the next step is to run the app using Xcode.

1. **Open the Project in Xcode**:
   - For **Cordova**: Open the `.xcworkspace` in the `platforms/ios/` folder.
   - For **Capacitor**: Open the `.xcworkspace` inside the `ios` folder.

2. **Run the App**:
   Connect your iPhone to your Mac, select your device in Xcode, and hit the run button to build and run the app on your device. You might need to configure your developer settings and provisioning profiles via Xcode if it's your first time running an app on a physical device.

### Step 4: Distribute the App (Optional)

If you want to distribute the app to others or publish it on the App Store, you will need to go through the Apple App Store submission process. This involves setting up an Apple Developer account, paying the annual developer fee, and submitting your app for review.

### Troubleshooting Common Issues

- **Provisioning Profiles**: Make sure your developer account is correctly set up with Apple, and you have the right provisioning profiles for development and distribution.
- **App Performance**: Check that your app performs well on actual devices, not just in simulators or as a web app.

By wrapping your Framework7 app in a Cordova or Capacitor project, you can effectively deploy it as a native-like app on an iPhone, providing users with an enhanced mobile experience that leverages native platform capabilities.

# Conclusions:

This is exciting! Making mobile-first web applications with R Shiny is now possible. I'll keep you posted on the progress as I develop my algo trading app. 

Now, building web applications and putting data science into production is absolutely essential to growing your career and advancing your skills. 

If you would like to **grow your Business Data Science skills**, then please read on...

{% include cta_struggles_rtrack.md %}


