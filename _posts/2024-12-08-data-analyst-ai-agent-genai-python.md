---
layout: post
title: "Create A Pandas Dataframe AI Agent With Generative AI, Python And OpenAI"
date: 2025-12-08 06:00:00 -0500
excerpt: "Discover the power of generative AI in data science. Learn how to build a data analysis agent using Python and OpenAI's API to unlock new insights from your data."
author: Matt Dancho
categories:
- GenAI-ML-Tips
tags:
- Python-Bloggers
- Learn-Python
- Python
- Pandas
- OpenAI
- LangChain
image: "/assets/AI001_pandas_data_agent.jpg"
image_preview: "/assets/AI001_pandas_data_agent.jpg"
---

Hey guys, this is the first article in my [NEW GenAI / ML Tips Newsletter](https://learn.business-science.io/free-ai-tips). Today, we're diving into the world of **Generative AI** and exploring how it can help companies automate common data science tasks. Specifically, we'll learn how to **create a Pandas dataframe agent** that can answer questions about your dataset using Python, Pandas, LangChain, and OpenAI's API. Let's get started!


### Table of Contents

Here’s what you’ll learn in this article:

- Why Generative AI is Transforming Data Science
- What is a Pandas Data Frame Agent?
- Create a Pandas DataFrame Agent
    - Setting Up the Environment
    - Loading and Exploring the Dataset
    - Creating the Data Analysis Agent with LangChain
    - Interacting with the Agent
    - Visualizing the Results
- **Before You Go Any Further:** **[Join the Free GenAI/ML Tips Newsletter to get the Data and Code so you can follow along](https://learn.business-science.io/free-ai-tips?el=website)** 

# This is what you are making today

We'll use this **Generative AI Workflow** to combine data (from CSVs or SQL databases) with a Pandas Data Frame Agent that helps us produce common analytics outputs like visualizations and reports. 

![Make A Pandas Data Analysis Agent with Python and Generative AI](/assets/AI001_pandas_data_agent.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/free-ai-tips?el=website" target="_blank">Get the Code (In the AI-Tip 001 Folder)</a></p>

---

{% include webinar_chatgpt.md %}

---

# GenAI/ML-Tips Weekly

This article is part of GenAI/ML Tips Weekly, a <a href="https://learn.business-science.io/free-ai-tips?el=website" target="_blank">weekly video tutorial</a> that shows you step-by-step how to do common Data Science and Generative AI coding tasks. Pretty cool, right?

<p>Here is the link to get set up. 👇</p>

<ul> 
    <li><a href="https://learn.business-science.io/free-ai-tips?el=website" target="_blank">Sign up for our GenAI/ML Tips Newsletter and get the code.</a></li> 
</ul>

![Get the code](/assets/AI001_get_the_code.jpg)

<p class="text-center date"><a href="https://learn.business-science.io/free-ai-tips?el=website" target="_blank">Get the Code (In the GenAI/ML Tip 001 Folder)</a></p>

# This Tutorial is Available in Video (9-minutes)

I have a **9-minute video** that walks you through setting up the Pandas Data Frame Agent and running data analysis with it.  👇

<iframe width="100%" height="450" src="https://www.youtube.com/embed/2LDyRnUgLos" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Why Generative AI is Transforming Data Science

Generative AI, powered by models like OpenAI's GPT series, is reshaping the data science landscape. These models can understand and generate human-like text, making it possible to interact with data in more intuitive ways. By integrating Generative AI into data science, you can:

- **Automate Data Insights:** Quickly generate summaries and insights from complex datasets.
- **Enhance Decision Making:** Obtain answers to specific questions without manually sifting through data.
- **Improve Accessibility:** Make data science more accessible to non-technical stakeholders.

Creating a **Pandas dataframe agent** combines the power of AI with data science, enabling you to unlock new possibilities in data exploration and interpretation from Natural Language.

# What is a Pandas Data Frame Agent?

A **Pandas Data Frame Agent** automates common Pandas operations from Natural Language inputs.

It can be used to perform:

- GroupBy + Aggregate
- Math calculations (that normal LLMs struggle with)
- Filters
- Pivots
- Window calculations
- Resampling (Time Series)
- Binning
- Log Transformations
- Summary Statistics (Mean, Median, IQR, Min/Max, Count (frequency), etc)

All from Natural Language prompts.

# Make A Pandas Data Frame Agent

Let's walk through the steps to create a Pandas data frame agent that can answer questions about a dataset using Python, OpenAI's API, Pandas, and LangChain. 

**Quick Reminder:** You can get all of the code and datasets shown in a Python Script and Jupyter Notebook when you [join my GenAI/ML Tips Newsletter](https://learn.business-science.io/free-ai-tips?el=website). 

**Code Location:** `/001_pandas_dataframe_agent` 

## Step 1: Setting Up the Python Environment

First, you'll need to set up your Python environment and install the required libraries.

``` python
pip install openai langchain langchain_openai langchain_experimental pandas plotly pyyaml
```

Next, import the libraries.

![Libraries](/assets/AI001_libraries_1.jpg)

Then run this to access our utility function, `parse_json_to_dataframe()`.

![Utility Function](/assets/AI001_utility_function.jpg)

The last part is to set up your OpenAI API Key. Make sure to get an API Key from OpenAI's API website. 

![OpenAI API Key](/assets/AI001_openai_api_key.jpg)

**Note:** Replace 'credentials.yml' with the path to your YAML file containing the OpenAI API key or set the 'OPENAI_API_KEY' environment variable directly.

## Step 2: Loading and Exploring the Dataset

Load your dataset into a Pandas DataFrame. For this tutorial, we'll use a sample customer data CSV file. But you could easily use any data that you can get into a Pandas Data Frame:

- SQL Database
- CSV
- Excel File

Run this code to load the customer dataset:

![Load The Customer Dataset](/assets/AI001_customer_dataset.jpg)

This dataset contains customer information, including sales and geography data.


## Step 3: Create the Pandas Data Analysis Agent with LangChain

Initialize the language model and create the Pandas data analysis agent using LangChain.


![Create The Pandas Data Frame Agent](/assets/AI001_create_pandas_data_frame_agent.jpg)

This is what's happening:

- `ChatOpenAI`: Initializes the OpenAI language model.
- `create_pandas_dataframe_agent`: Creates an agent that can interact with the Pandas DataFrame.
- `agent_type`: Specifies the type of agent (using OpenAI functions).
- `suffix`: Instructs the agent to return results in JSON format for easy parsing.

**Pro-Tip:** The secret sauce is to use the `suffix` parameter to specify the output format. Under the hood, this appends the agent's default prompt template with additional information that describes how to return the information. 

## Step 4: Interacting with the Pandas Data Frame Agent

Now, you can ask the agent questions about your data. Try running this code with a Natural Language analysis question:

> "What are the total sales by geography?"

![Invoke the agent](/assets/AI001_invoke_the_agent.jpg)

The agent processes the query and returns a response.

![Process Query](/assets/AI001_process_query.jpg)

This is where Post Processing comes into play. Remember when I added the `suffix` parameter to return JSON. The Agent actually burries the JSON in a string. 

![JSON String](/assets/AI001_json_string.jpg)

That's OK, because I have created a handy little parsing tool that extracts the JSON from the string and converts it to a Pandas Data Frame for us. 

![Convert JSON To Pandas](/assets/AI001_convert_json_to_pandas.jpg)

## Step 5: Visualizing the Results

With a pandas data frame we can then report the results. I'll do this manually with Plotly, but a great challenge is to extend the code to create an AI agent that makes the visualization code and executes it automatically. 

![Data Visualization](/assets/AI001_visualization.jpg)

This visualization provides a clear view of sales distribution across different geographical regions.

**Quick Reminder:** You can get all of the code and datasets shown in a Python Script and Jupyter Notebook when you [join my GenAI/ML Tips Newsletter](https://learn.business-science.io/free-ai-tips?el=website). 

# Conclusion

By integrating Generative AI with data science, you've created a powerful tool that can interact with your data in natural language. This Pandas data analysis agent simplifies the process of extracting insights and can help non-technical stakeholders automate common data manipulations to help them make data-driven decisions.

**But there's so much more to learn in Generative AI and data science.**

If you're excited to become a Generative AI Data Scientist with Python, then keep reading...

{% include cta_generative_ai.md %}
