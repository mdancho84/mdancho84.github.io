---
layout: post
title: "Data Engineering in R: How to Build Your First Data Pipeline with R, Mage, and Google Cloud Platform (in under 30 Minutes)"
date: 2023-12-02 11:00:00 -0500
excerpt: "Hey guys, welcome back to my R-tips newsletter. In today's lesson, we're sharing how to use R in production, with Mage.ai and Google Cloud. Let's go!" 
author: Arben Kqiku (Intro by Matt Dancho)
categories:
- Code-Tools
tags:
- R-Bloggers
- Learn-R
- R
- R-Tips
- production
- Google Cloud
- Mage
image: "/assets/r_mage_gcp_thumb.jpg"
image_preview: "/assets/r_mage_gcp_thumb.jpg"

---
Hey guys, welcome back to my [R-tips newsletter](https://learn.business-science.io/r-tips-newsletter). In today's R-Tip, [Arben Kqiku](https://www.linkedin.com/in/arben-kqiku-301457117/) is sharing his **exact 8-step framework** for taking R into production for Digital Analytics projects. You'll learn how to use R, Mage.ai, and Google Cloud Platform (GCP) to build your first data engineering pipeline **in under 30 minutes.**  

### About the Author

[Arben](https://www.linkedin.com/in/arben-kqiku-301457117/) is a digital analytics and Google Cloud Platform (GCP) expert. He's also a Business Science University student. In this post, Arben shares how to use R in production, with Mage.ai and Google Cloud. 

This article was originally published on [Simo Ahava's Google Analytics website](https://www.simoahava.com/analytics/join-ga4-google-ads-data-in-google-bigquery/). We've republished it here with permission.

Let's dive in!

### Table of Contents

Here's what you're learning today:

* ***The Problem:*** We'll cover a case study from a recent problem Arben had in Multi-Touch Campaign Attribution. 
  
* ***The Solution: Arben's 8-Step Framework:*** Arben's sharing his exact process for how he sets up production R data engineering pipelines on GCP with R and Mage.ai (perfect if it's your first time).

* ***Full Code Demo:* EXACTLY HOW TO BUILD YOUR FIRST DATA SCIENCE PIPELINE (IN UNDER 30 MINUTES).** 

### What You Make Today:

Below you can see an architectural overview of what we’ll build today.

![Data Engineering Workflow](/assets/r_mage_gcp_workflow.jpg)

<p class="date text-center">What You Make Today!</p>


### The 8-Step Framework to Accomplish This:

Here's the 8-step framework that Arben will walk you through today:

![8-Step Framework](/assets/r_mage_gcp_8_step_framework.jpg)

<p class="date text-center">The 8 steps you follow</p>

---

{% include webinar_chatgpt.md %}

---

# R-Tips Weekly

This article is part of R-Tips Weekly, a <a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">weekly tutorial</a> that shows you step-by-step how to do common R coding tasks. Pretty cool, right?

<p>Here are the links to get set up. 👇</p>

<ul> 
    <li><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Get the Code</a></li> 
    <!-- <li><a href="https://youtu.be/fkwKQi7skAw">YouTube Tutorial</a></li>-->
</ul>

# The Problem: Multi-Touch Campaign Attribution in Digital Analytics

As a digital analyst, I often need to combine data from different sources and display it in a dashboard. This is especially true when I'm working with Google Analytics 4 (GA4) and Google Ads for Campaign Attribution.

## Case Study: Digital Analytics and Multi-Touch Campaign Attribution

For instance, clients run campaigns on platforms like Google Ads and Meta Ads, and **they want to understand the impact of each channel or even individual campaigns.**

To address this, we usually:

1. Use **conversion data** from a third-party source, like Google Analytics, and 
2. Combine it with other data such as impressions, clicks, and cost from the advertising channels. 
 
This helps us **calculate the cost per conversion** for each channel more accurately.


## Building the Multi-Touch Attribution Data Engineering Pipeline

To build a data engineering pipeline, we need to factor in:

1. **Accessibility:** Make sure we can easily get data from different sources, such as Google Ads, Meta Ads, and GA4.

2. **Data integration:** Combine data from different sources accurately.

3. **Storage:** Create a data warehouse in Google BigQuery for the joined data and make it accessible to data visualization tools.

4. **Maintenance:** Find a way to automate these steps without needing manual intervention. That way stakeholders will have access to almost real-time data.

## Our Tech Stack: R, Mage.ai, Google Cloud Platform, and VSCode IDE

![How the Tools Integrate](/assets/r_mage_gcp_tool_integration.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Register for R-Tips Newsletter Here</a></p>

To build this pipeline, we'll use:

1. R: To retrieve data from the APIs and combine it.
2. Mage.ai: To automate the Extract Transform Load (ETL) process.
3. Google Cloud Platform (GCP): To store the data and make it accessible to data visualization tools.
4. VSCode IDE: To access the virtual machine remotely.

### 1. R: To retrieve data from the APIs and combine it

![Rstudio](/assets/069_r_logo_board.png)

- Install R here: [https://www.r-project.org/](https://www.r-project.org/)
- Access to 20,000+ of open source R packages here: [https://cran.r-project.org/](https://cran.r-project.org/)

Packages we'll use today:

- `tidyverse`: To work with data and make the data pipeline.
- `googleAnalyticsR`: To retrieve data from the GA4 API.
- `rgoogleads`: To retrieve data from the Google Ads API.
- `bigrquery`: To export data to Google BigQuery.
- `gargle`: For Google authentication.

### 2. Mage.ai: To automate the Extract Transform Load (ETL) process

I love R and I am so thankful that [Tommy Dang](https://www.linkedin.com/in/dangtommy/) and his team included it in Mage.

![Mage AI](/assets/r_mage_gcp_mage_ai.jpg)

<p class="text-center date">Mage AI</p>
   
- Mage.ai is a tool that helps you automate the ETL process. It's a great tool for data scientists who want to automate their data engineering pipelines.
- Mage.ai: [https://mage.ai/](https://mage.ai/)

The screenshot below comes from Mage. Mage is a data engineering tool that allows you to build your ETL (extract, transform, and load) pipelines. What I love about Mage is that it is easy to use, you can visualize your data pipelines and it supports multiple programming languages: SQL, Python.. and R!

![Mage.ai](/assets/r_mage_gcp_mage-ai-example.jpg)

In addition to building our pipeline, we’ll use Mage to **schedule your pipelines**, as you can see in the example below.

![Mage Schedule](/assets/r_mage_gcp_mage-schedule.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/r-tips-newsletter?el=website" target="_blank">Register for R-Tips Newsletter Here</a></p>

### 3. Google Cloud Platform (GCP): To store the data and make it accessible to data visualization tools.

You can run Mage on your local machine or in the cloud.

Obviously, if you run it locally, your computer needs to be on all the time, which is not ideal. Therefore, we’ll create a virtual machine (VM) on the Google Cloud Platform and run Mage from there.

A virtual machine (VM) on GCP is like a computer in the cloud. It’s not a physical machine you can touch; instead, it’s a powerful, remote computer that you can use to run your software and store your data.

![Google Cloud Platform](/assets/r_mage_gcp_google_cloud_platform.jpg)

<p class="text-center date">Google Cloud Platform (GCP)</p>

- Google Cloud Platform (GCP) is a cloud computing platform that allows you to store data and make it accessible to data visualization tools.
- You'll need to create a Google Cloud account to use GCP.
- Google Cloud Platform: [https://cloud.google.com/](https://cloud.google.com/)

To use GCP, you need a payment method. But worry not, as of today, If you have never used GCP, **you get a credit of $300**. So, go to the Google Cloud Console and create an account: [https://console.cloud.google.com/welcome](https://console.cloud.google.com/welcome).

![$300 Credits](/assets/r_mage_gcp_google-cloud-credits.jpg)

Once you have used your free credits, you need to add a credit card to your account, by going under “BILLING”:

![Billing](/assets/r_mage_gcp_billing.jpg)

### 4. VSCode IDE: To access the virtual machine remotely

To access the virtual machine from our computer, we’ll use Visual Studio Code, which is a lovely, free code editor that supports many programming languages.

![VSCode](/assets/r_mage_gcp_vscode_ide.jpg)

<p class="text-center date">VSCode IDE</p>

- VSCode IDE: [https://code.visualstudio.com/](https://code.visualstudio.com/)


# The Solution: Arben's 8-Step Framework for Data Engineering in R with Mage and GCP (in under 30 minutes)


![8-Step Framework](/assets/r_mage_gcp_8_step_framework.jpg)

<p class="date text-center">The 8 steps you follow</p>

Now for my **8-step framework** for building a data engineering pipeline in R with Mage.ai and GCP. 

- These are the steps I follow when I'm building a data engineering pipeline for a client. 
- Once you are familiar with my framework, you can build your own data engineering pipelines **in under 30 minutes.**


## Step 1: How to create a Google Cloud project

In order to use GCP, we need a project. Later, everything that we’ll do will be within this project. 

So, go back to https://console.cloud.google.com/welcome and create a new project by first clicking on the project selector in the top left.

![Project Selector](/assets/r_mage_gcp_project-selector.jpg)

Then click on “NEW PROJECT”:

![New Project](/assets/r_mage_gcp_new-project.jpg)

Next, name your project. I called my project `mage-ai-test`.

![Project Name](/assets/r_mage_gcp_new-cloud-project.jpg)

Finally, click on “CREATE”. Then simply wait until your project is created. Once you have selected your project, type “vm instances” in the search bar, and select “VM instances”.

![VM Instances](/assets/r_mage_gcp_vm-instances.jpg)

This will lead to the following screen:

![Compute Engine](/assets/r_gcp_mage_compute-engine-api.jpg)

## Step 2: How to set up a virtual machine

There are 4 sub-steps:

1. Activate the Compute Engine API's features
2. Set up SSH keys
3. Create a virtual machine
4. Connect to the virtual machine via SSH

### Step 2.1: Activate the Compute Engine API's features

On GCP, to use specific features, you must activate the corresponding APIs: 

- For example, we’ll enable the Google Analytics API later to get data from GA4. 
- To make a virtual machine, we need to enable the Compute Engine API. 
- Afterward, you’ll see this screen, but we won’t create a VM instance just yet…

![VM Instance](/assets/r_mage_gcp_create-vm-instance.jpg)

### Step 2.2: Set up SSH keys

Next, we need to create SSH keys that will allow us to access our virtual machine from our computer.

SSH keys are like special keys that help your computer talk securely to another computer, such as a virtual machine.

It’s a way for your computer to prove it’s really you when connecting to the virtual machine. It’s like having a secret handshake between your computer and the virtual machine, making sure they can trust each other without needing to type in a password every time.

#### Create SSH and Public Keys

We need to create two SSH keys, a private and a public key. Think of SSH keys like a pair of magic keys for your online accounts. You have one key that you keep secret (the private key) and another key that you share with others (the public key).

1. **Private Key (Secret Key):** This is like the key to your front door that only you have. You keep it safe on your computer, and it’s a secret. It’s used to unlock and access your accounts securely.
2. **Public Key (Shared Key):** This is like a lock that matches your private key.

When you connect to a server or service, you use your private key to prove you are who you say you are. The server then checks this with your public key to make sure it’s really you. This way, even if someone gets your public key, they can’t do anything without the private key, which stays safe on your computer. It’s a bit like having a special lock and key where only your key can open it.

To create your keys, hop to the terminal in your local machine and type the following code:

```bash
ssh-keygen -t rsa -f ~/.ssh/mage-ai-test -C arbenkqiku
```

The end of the code should be your username, in my case `arbenkqiku`. If you don’t know your user name, type `whoami` in the terminal and press enter. This will output your username.

Once you enter the code mentioned above, you’ll be prompted to insert your computer’s password, if you have any. Once you add your password, your SSH keys will be created.

![SSH Keys](/assets/r_mage_gcp_create-ssh-key.jpg)

Now, go to the directory where your SSH keys can be found. `cd` stands for “change directory”:

```bash
cd ~/.ssh
```

This is where your public private and public SSH keys are located.

Now, type the following code to display the content of your public SSH key in the terminal.

```bash
cat mage-ai-test.pub
```

This will show the content of your public SSH key that we will later paste into our VM.

![Public SSH Key](/assets/r_mage_gcp_public-key.jpg)

### Step 2.3: Create a virtual machine

Now, let’s go back to Google Cloud Platform and click on “CREATE INSTANCE” in the VM instances overview.

![Create Instance](/assets/r_mage_gcp_create-new-vm-instance.jpg)

Give a name to the VM instance and select the region closest to you:

![VM Instance Name](/assets/r_mage_gcp_name-and-region-of-vm-instance.jpg)

Go to the “Boot disk” section and click on “CHANGE”:

![Boot Disk](/assets/r_mage_gcp_change-boot-disk.jpg)

Select the following options:

![Boot Disk Options](/assets/r_gcp_mage_advanced-boot-disk-options.jpg)

Under Firewall, select the following options:

![Firewall Options](/assets/r_gcp_mage_firewall-options.jpg)

This is important, as otherwise we won’t be able to access Mage by using the IP address of our VM, you’ll understand later what I mean by this.

Under Advanced Options > Security, click on “ADD ITEM”. Here is where we’ll add our **public SSH key**.

![Add SSH Key](/assets/r_gcp_mage_add-public-key-to-vm.jpg)

Copy the entire SSH public key and paste it.

![Paste SSH Key](/assets/r_gcp_mage_paste-ssh-key.jpg)

Finally, click on “CREATE”. It may take some time to create the VM.

Once done, your new VM will appear here. Also, you’ll see that your VM will have an “External IP”.

![External IP](/assets/r_gcp_mage_vm-external-ip.jpg)

You can use this “External IP” and your SSH private key to connect to this VM. Let’s do this!

## Step 3: How to access your virtual machine remotely

Step 3 has 2 sub-steps:

1. How to connect to your VM via SSH
2. How to connect via VSCode IDE (using Remote - SSH extension)

### Step 3.1: How to connect to your VM via SSH

Go back to the terminal in your local machine and go to the directory where the SSH keys are located:

```bash
cd ~/.ssh
```

Next, type this command:

``` bash
ssh -i mage-ai-test arbenkqiku@34.65.231.180
```

I’ll break it down to you so you know what to replace:

```bash
ssh -i name_of_private_key user_name@gcp_vm_instance_external_ip
```

You’ll likely will be prompted to enter your password again, and also to add the “External IP” as a host. Just follow the instructions and you should be able to connect to your VM.

As you can see from the image below, we connected to the VM named `mage-demo-test`. And if you recall, in “Boot disk” options, we selected Ubuntu as our operating system.

![SSH Connection](/assets/r_mage_gcp_ubuntu-vm-remote.jpg)

### Step 3.2: How to connect via VSCode IDE (using Remote - SSH extension)

We could do this whole process through the terminal, but it is much more user-friendly to do it through Visual Studio Code. 

Visual Studio Code is a very powerful code editor. Go to this link: [https://code.visualstudio.com/download](https://code.visualstudio.com/download), and download Visual Studio Code.

Once you have installed it, go to “Extensions” and install “Remote - SSH”.

![Remote SSH](/assets/r_mage_gcp_remote-ssh-code-extension.jpg)

In Visual Studio Code, go the the search bar and type >, and then select the following option:

![Remote SSH Config](/assets/r_mage_gcp_open-ssh-config.jpg)

In the configuration file that will open, you need to enter your details. Essentially, we’re providing the details to connect to our VM.

```bash
Host mage-demo-test # Give a name to your host
  HostName 34.65.231.180 # Replace with the External IP address in GCP
  User arbenkqiku # Replace this with your user name
  IdentityFile /Users/arbenkqiku/.ssh/mage-ai-test # Path to private SSH key
```

Now, we still have to go back to the terminal one last time and type this:

```bash
eval $(ssh-agent)
ssh-add /Users/arbenkqiku/.ssh/mage-ai-test # Path to private SSH key
```

Then, type your password when prompted. This basically means that you can use your password when you try to access the VM through Visual Studio Code.

![SSH Agent](/assets/r_mage_gcp_ssh-add-command.jpg)

Now, go back to the search bar of Visual Studio Code, type > and select the following option:

![Remote SSH Connect](/assets/r_mage_gcp_code-connect-to-ssh-host.jpg)

It should suggest the host that you just created, click on that host:

![Choose Host](/assets/r_gcp_mage_choose-ssh-host.jpg)

Then, you’ll be prompted to enter your password. Once you enter your password, you’ll be connected to your VM.

![Password](/assets/r_mage_gcp_ssh-passphrase.jpg)

Now, click on the “Remote Explorer” icon, and it should show that you connected to your VM:

![Remote Explorer](/assets/r_mage_gcp_remote-explorer-vm.jpg)

On the top right, click this icon to display the terminal below:

![Terminal Below](/assets/r_mage_gcp_display-terminal-icon.jpg)

Now click on “TERMINAL”. Congratulations, you have accessed your VM through Visual Studio Code!

![Terminal](/assets/r_mage_gcp_access-terminal-success.jpg)

## Step 4: How to install Mage.ai on the virtual machine to handle the automation

To install mage on GCP, I largely followed [this tutorial](https://www.youtube.com/watch?v=C0fNc8ZOpSI&t=696s&ab_channel=DataSlinger), but I will also explain every step here. 

Ther are mainly 3 sub-steps:

1. Create the folder for Mage
2. Install `Docker`
3. Install `Mage`
4. Access `Mage` through the External IP from GCP

### Step 4.1: Create the folder for Mage

First of all, let’s create a directory in our VM for mage:

```bash
mkdir mage-demo
```

Now, if you type the following code, you should be able to see the newly created folder:

```bash
ls
```

Then, let’s access the folder:

```bash
cd mage-demo
```

### Step 4.2: Install `Docker`

Now, to install mage, we need to first install `Docker`.

Docker is a platform for developing, shipping, and running applications. It uses containerization technology to package an application and its dependencies together into a single unit called a “container”.

In the `mage-demo` folder, let’s download a GitHub repo that contains the installation for Docker:

```bash
git clone https://github.com/MichaelShoemaker/DockerComposeInstall.git
```

Let’s access the folder that contains the Docker installation:

```bash
cd DockerComposeInstall
```

Let’s modify the file to make it executable:

``` bash
chmod +x InstallDocker
```

Then, let’s run it:

```bash
./InstallDocker
```

Type this to verify that Docker has been installed correctly:

```bash
docker run hello-world
```

This should show the following message:

![Docker Hello World](/assets/r_mage_gcp_hello-docker.jpg)

### Step 4.3: Install `Mage`

Now, let’s go back to the initial directory:

```bash
cd mage-demo
```

Now, we can finally install mage with this command:

```bash
docker run -it -p 6789:6789 -v $(pwd):/home/src --restart always mageai/mageai /app/run_app.sh mage start mage-ai-test
```

With the command `--restart always`, we’re asking the VM to always restart mage whenever the VM is shut down and later restarted.

At the end, `mage-ai-test` represents the name of our project.

### Step 4.4: Access `Mage` through the External IP from GCP

Now, to access mage through our External IP from GCP, we need to hop back on GCP first, as we need to create a **firewall rule**.

This is necessary to control and regulate incoming and outgoing traffic to and from your VM on Google Cloud Platform. When you want to access mage through your External IP from GCP, a firewall rule is needed to explicitly allow the traffic to reach your VM.

Browse to Firewall in the Google Cloud Platform.

Click on “CREATE FIREWALL RULE”:

![Create Firewall Rule](/assets/r_mage_gcp_create-firewall-rule.jpg)

Select the following options and click on “CREATE”:

![Firewall Rule Options](/assets/r_mage_gcp_firewall-options.jpg)

Basically, with this firewall rule in place, it means we can access mage via the external IP address by using port number 6789.

Now, if you type **your VM external IP** followed by `:6789` in your web browser you should be able to access mage.

For example, this is the URL I would use with my configuration: `http://34.65.231.180:6789`.

![Mage IP Test](/assets/r_mage_gcp_mage-test.jpg)

As you can see, `mage-ai-test` was the name of our project in a previous command.

Congrats, now you can create data pipelines that will run in the cloud!

## Step 5: How to retrieve data from the GA4 API in a production environment

## Step 6: How to retrieve data from the Google Ads API in a production environment

## Step 7: How to export data to Google BigQuery in a production environment

## Step 8: How to schedule a data pipeline that automatically updates every 5 minutes

# Conclusion:

Creating a data science portfolio is a great way to market yourself as a data scientist. It's a great way to get hired, get promoted, and get more business. **But you'll also want to make sure you are ready to win the interview, get the job or client, and excel on the job as a data scientist. Question: Do you:**

1. Need data science skills: Data Visualization, Time Series, Machine Learning, Production, Web Apps, and Cloud?
2. Data science projects to fill your portfolio?
3. Know how to communicate your results to non-technical audiences?
4. Know how to build production web applications?
5. Know how to work with a team?

**If you need to learn these skills, then I can help. Read on.**

{% include cta_struggles_rtrack.md %}