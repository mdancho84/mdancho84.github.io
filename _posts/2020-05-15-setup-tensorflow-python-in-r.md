---
layout: post
title: "How to Set Up TensorFlow 2 in R in 5 Minutes (BONUS Image Recognition Tutorial)"
date:   2020-05-15 06:24:01
excerpt: "Python can be run from R to leverage the strengths of both R and Python Data Science langauges. Learn how to set up Python's TensorFlow Library in 5 minutes."
author: "Matt Dancho"
categories: [Learn-R]
tags: [R-Bloggers, Learn-R, Learn-Machine-Learning, Python, TensorFlow, Keras, reticulate]
image: 2020-05-15-tensorflow-in-r/tensorflow_in_r_in_5_min.jpg
image_preview: 2020-05-15-tensorflow-in-r/tensorflow_in_r_in_5_min.jpg
---



The 2 most popular data science languages - ___Python and R___ - are often pitted as rivals. This couldn't be further from the truth. Data scientists that learn to use the strengths of both languages are valuable because they __have NO LIMITS.__ 

- __<span style="color:blue;">Machine Learning and Deep Learning:</span>__ They can switch to Python to leverage `scikit learn` and `tensorflow`. 
- __<span style="color:blue;">Data Wrangling, Visualization, Apps & Reporting:</span>__ They can quickly change to R to use `tidyverse`, `shiny` and `rmarkdown`.

The bottom line is that knowing both `R` and `Python` makes you ___SUPER PRODUCTIVE.___ 

#### Article Updates:

- This article has been updated. [View the updated TensorFlow article at Business Science.](#) 

- Check out this article to set up [Scikit Learn in a Python 3.8 Environment](https://www.business-science.io/learn-r/2020/04/20/setup-python-in-r-with-rmarkdown.html). 

# Have 5 minutes? <br><small>Then let's set up TensorFlow 2 for Deep Learning</small>

<div class="pull-right hidden-xs" style="width:50%; margin-left:20px;">
  <a href="#" target="_blank">
  <img class="img-responsive" src="/assets/2020-05-15-tensorflow-in-r/tensorflow_in_r_in_5_min.jpg"> 
  </a>
  <p class="date text-center">TensorFlow in R!</p>
</div>

We're going to go through the essential setup tips of the PRO's - those that use Python from R via `reticulate`. 

- Install `TensorFlow` in R

- Do a ___Image Recognition Analysis___ to verify `TensorFlow` is working. 

Here's the __BONUS Image Reconition Tutorial__. You'll classify Fashion Images. 

![TensorFlow Ankle Boot Classification](/assets/2020-05-15-tensorflow-in-r/tensorflow_ankle_boot.jpg)
<p class="date text-center">TensorFlow Ankle Boot Classification - Tutorial to Test if TF is Working</p>

# Using TensorFlow &amp; R <br><small>How do you use them together in Business Projects?</small>

Setting up `TensorFlow` in `R` is an insane productivity booster. You can leverage the best of Python + R. But you still need to _learn_ how to use Python and R together for ___real business projects.___ And, it's _impossible_ to teach you all the in's and out's in 1 short article. But, I have great news! 

I just launched a [__NEW 5-PART PYTHON + R LEARNING LAB SERIES (Register Here)__](https://mailchi.mp/business-science/webinars) that will show you how to use `Python` and `R` together on __Real Business Projects__:

- _Lab 33:_ Human Resources Employee Segmentation
- _Lab 34:_ Advanced Customer Segmentation and Market Basket Analysis
- _Lab 35:_ TensorFlow for Finance
- _Lab 36:_ TensorFlow for Energy Demand Forecasting
- _Lab 37:_ Social Media Text Analytics! 

__And it's FREE to attend live.__ 

[Register here to attend Python + R Learning Labs live for free.](https://mailchi.mp/business-science/webinars) I'll notify you in advance of the accelerated 1-hour courses that you can attend via webinar.

<div>
  <a href="https://mailchi.mp/business-science/webinars" target="_blank">
  <img class="img-responsive" src="/assets/2020-04-20-python/lab_series_python_r.jpg"> 
  </a>
  <p class="date text-center">
    <a href="https://mailchi.mp/business-science/webinars">Python + R, Register for the NEW Learning Lab Series</a>
  </p>
</div>

# Installing TensorFlow in R

__This process should take under 5-minutes.__ First we have some requirments to get `TensorFlow 2` installed. 

## TensorFlow 2.0.0 Requirements

These may (will) change in the future, but currently [the requirements](https://www.tensorflow.org/install) are:

- Python 3.5-3.7 
- Windows 7 or Later
- MacOS 10.12.6 or Later
- Ubunto 16.04 or Later

If you've followed the [_Scikit Learn in R tutorial_](https://www.business-science.io/learn-r/2020/04/20/setup-python-in-r-with-rmarkdown.html), we used Python 3.8 (latest stable version). We can't use Python 3.8 for TensorFlow, so we need to create a new environment. We'll use Python 3.6 in this tutorial.  

## Conda Requirements

If you don't have Conda installed, please install here: [Anaconda Installation](https://docs.anaconda.com/anaconda/install/). 

## Installing TensorFlow in R with reticulate

__Do this in R.__ Install and load `tidyverse`, `reticulate`, and `tensorflow`. 

{% highlight r %}
# R
library(tidyverse)
library(reticulate)
library(tensorflow)
{% endhighlight %}


Next, run `install_tensorflow()` in your R environment. This will take about 3-5 minutes to install `TensorFlow` in a new Conda Environment named __"py3.6".__


{% highlight r %}
# R
install_tensorflow(
    method               = "conda", 
    version              = "default", # Installs TF 2.0.0 (as of May 15, 2020)
    envname              = "py3.6", 
    conda_python_version = "3.6", 
    extra_packages       = c("matplotlib", "numpy", "pandas", "scikit-learn")
)
{% endhighlight %}

___Side note:___ You can actually specify which TensorFlow version to install with the `version` arg. This can be helpful to switch from the CPU vesion to GPU version (greater power, greater responsibility) or to access older versions of TF. 


We can check to see that `py3.6` conda environment has been created. 


{% highlight r %}
# R
conda_list()
{% endhighlight %}



{% highlight text %}
##        name                                             python
## 1 anaconda3            /Users/mdancho/opt/anaconda3/bin/python
## 2     py3.6 /Users/mdancho/opt/anaconda3/envs/py3.6/bin/python
## 3     py3.7 /Users/mdancho/opt/anaconda3/envs/py3.7/bin/python
## 4     py3.8 /Users/mdancho/opt/anaconda3/envs/py3.8/bin/python
{% endhighlight %}

Next, we tell `reticulate` to use the `py3.6` conda environment.


{% highlight r %}
# R
use_condaenv("py3.6", required = TRUE)
{% endhighlight %}


__Congrats on the Installation is now complete!__ - Now Let's Use `TensorFlow` to classify images. 


# Image Recognition Analysis <br><small>To Verify TensorFlow is Working</small>

Let's run through a short image recognition tutorial. This tutorial comes from Google's [Basic classification: Classify images of clothing](https://www.tensorflow.org/tutorials/keras/classification)

### Step 1 - Make a Python Code Chunk

Use [Pro-Tip #1 Below](#pro-tips) to make a _"Python Code Chunk"_. 

![Python Code Chunks](/assets/2020-05-15-tensorflow-in-r/python_code_chunk.jpg)
<p class="text-center date">Python Code Chunk</p>

### Step 2 - Import Libraries

Import the libraries needed: 

- Deep Learning: `tensorflow` and `keras`
- Math: `numpy`
- Visualization: `matplotlib`


{% highlight python %}
# Python

# TensorFlow and tf.keras
import tensorflow as tf
from tensorflow import keras

# Helper libraries
import numpy as np
import matplotlib.pyplot as plt
{% endhighlight %}


Check the version of `tensorflow` to make sure we're using 2.0.0+.


{% highlight python %}
# Python
print(tf.__version__)
{% endhighlight %}



{% highlight text %}
## 2.0.0
{% endhighlight %}


### Step 3 - Load the Fashion Images

Load the `fashion_mnist` dataset from `keras`. 


{% highlight python %}
# Python
fashion_mnist = keras.datasets.fashion_mnist

(train_images, train_labels), (test_images, test_labels) = fashion_mnist.load_data()
{% endhighlight %}

We have 60,000 training images that have been labeled. 


{% highlight python %}
# Python
train_images.shape
{% endhighlight %}



{% highlight text %}
## (60000, 28, 28)
{% endhighlight %}

We can check the unique labels to see what classifications the images belong to. Note that these are numeric values ranging from 0 to 9.


{% highlight python %}
# Python
np.unique(train_labels)
{% endhighlight %}



{% highlight text %}
## array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], dtype=uint8)
{% endhighlight %}

The corresponding labels are:


{% highlight python %}
# Python
class_names = ['T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat',
               'Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot']
{% endhighlight %}


We can see what the first image looks like using `matplotlib`. 


{% highlight python %}
# Python
plt.figure()
plt.imshow(train_images[0])
plt.colorbar()
plt.grid(False)
plt.show()
{% endhighlight %}

![plot of chunk unnamed-chunk-11](/figure/source/2020-05-15-setup-tensorflow-python-in-r/unnamed-chunk-11-1.png)


And we can also check out the first 25 images. 


{% highlight python %}
# Python
plt.figure(figsize=(10,10))
for i in range(25):
    plt.subplot(5,5,i+1)
    plt.xticks([])
    plt.yticks([])
    plt.grid(False)
    plt.imshow(train_images[i], cmap=plt.cm.binary)
    plt.xlabel(class_names[train_labels[i]])
plt.show()
{% endhighlight %}

![plot of chunk unnamed-chunk-12](/figure/source/2020-05-15-setup-tensorflow-python-in-r/unnamed-chunk-12-1.png)


### Step 4 - Modeling with Keras

Make a `keras` model using the `Sequential()` with 3 steps: Flatten, Dense, and Dense. 


{% highlight python %}
# Python
model = keras.Sequential([
    keras.layers.Flatten(input_shape=(28, 28)),
    keras.layers.Dense(128, activation='relu'),
    keras.layers.Dense(10)
])
{% endhighlight %}

Next, `compile` the model with the "adam" optimizer. 


{% highlight python %}
# Python
model.compile(
    optimizer = 'adam',
    loss      = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
    metrics   = ['accuracy']
)
{% endhighlight %}

Inspect the model summary. 


{% highlight python %}
# Python
model.summary()
{% endhighlight %}



{% highlight text %}
## Model: "sequential"
## _________________________________________________________________
## Layer (type)                 Output Shape              Param #   
## =================================================================
## flatten (Flatten)            (None, 784)               0         
## _________________________________________________________________
## dense (Dense)                (None, 128)               100480    
## _________________________________________________________________
## dense_1 (Dense)              (None, 10)                1290      
## =================================================================
## Total params: 101,770
## Trainable params: 101,770
## Non-trainable params: 0
## _________________________________________________________________
{% endhighlight %}


### Step 5 - Fit the Keras Model

<span style="color:blue;">CRITICAL STEP - Fit the model. Make sure this step works!</p>


{% highlight python %}
# Python
model.fit(train_images, train_labels, epochs=10, verbose=1)
{% endhighlight %}

![TensorFlow Model Training](/assets/2020-05-15-tensorflow-in-r/tensorflow_model_training.jpg)
<p class="text-center date">TensorFlow Model Training</p>


### Step 6 - Training History


{% highlight python %}
# Python
history = model.history.history
history
{% endhighlight %}



{% highlight text %}
## {'loss': [3.1226694132328032, 0.6653605920394262, 0.5747007430752118, 0.5286751741568247, 0.508751327864329, 0.5023731174985567, 0.48900006746848423, 0.4814090680360794, 0.4810072046995163, 0.47561218699614205], 'accuracy': [0.68145, 0.74085, 0.79331666, 0.8143, 0.8228833, 0.8244333, 0.8283167, 0.83428335, 0.8348, 0.83521664]}
{% endhighlight %}

I'll plot this using R. Note - This is an R Code Chunk (not a Python Code Chunk).


{% highlight r %}
# R Code Chunk (not Python)
py$history %>% 
    as_tibble() %>%
    unnest(loss, accuracy) %>%
    rowid_to_column() %>%
    pivot_longer(-rowid) %>%
    ggplot(aes(rowid, value, color = name)) +
    geom_line() +
    geom_point() +
    labs(title = "Training Accuracy")
{% endhighlight %}

![plot of chunk unnamed-chunk-18](/figure/source/2020-05-15-setup-tensorflow-python-in-r/unnamed-chunk-18-1.png)

## Step 7 - Test Accuracy

Evaluate accuracy on the out-of-sample images. 


{% highlight python %}
# Python
test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)
{% endhighlight %}



{% highlight text %}
## 10000/1 - 0s - loss: 0.4470 - accuracy: 0.8098
{% endhighlight %}


## Step 8 - Make Predictions

The model produces linear outputs cakked "logits". The softmax layer to converts the logits to probabilities.


{% highlight python %}
# Python
probability_model = tf.keras.Sequential([model, tf.keras.layers.Softmax()])
{% endhighlight %}

We can then classify all of the test images (held out)


{% highlight python %}
# Python
predictions = probability_model.predict(test_images)
{% endhighlight %}

We can make a prediction for the first image. 


{% highlight python %}
# Python
predictions[0]
{% endhighlight %}



{% highlight text %}
## array([7.7921860e-21, 3.3554016e-13, 0.0000000e+00, 1.8183892e-15,
##        0.0000000e+00, 4.0730215e-03, 8.1443369e-20, 4.2793788e-03,
##        2.6940727e-18, 9.9164760e-01], dtype=float32)
{% endhighlight %}

Use `np.argmax()` to determine which index has the highest probability. 


{% highlight python %}
# Python
np.argmax(predictions[0])
{% endhighlight %}



{% highlight text %}
## 9
{% endhighlight %}

The index value can be retrieved with `np.max()`.


{% highlight python %}
# Python
np.max(predictions[0])
{% endhighlight %}



{% highlight text %}
## 0.9916476
{% endhighlight %}

Get the class name. 


{% highlight python %}
# Python
class_names[np.argmax(predictions[0])]
{% endhighlight %}



{% highlight text %}
## 'Ankle boot'
{% endhighlight %}

And visualize the image. 


{% highlight python %}
# Python
plt.figure()
plt.imshow(test_images[0])
plt.colorbar()
{% endhighlight %}



{% highlight text %}
## <matplotlib.colorbar.Colorbar object at 0x7fee14906240>
{% endhighlight %}



{% highlight python %}
# Python
plt.grid(False)
plt.show()
{% endhighlight %}

![plot of chunk unnamed-chunk-26](/figure/source/2020-05-15-setup-tensorflow-python-in-r/unnamed-chunk-26-1.png)


__Nice work__ - If you made it through this tutorial unscathed, then you are doing well! And your ready for the [TensorFlow Learning Labs.](https://university.business-science.io/p/learning-labs-pro) 


# Pro Tips (Python in R) {#pro-tips}

Now that you have `python` running in `R`, use these pro-tips to make your experience way more enjoyable. 

### Pro-Tip #1 - Python Chunk Keyboard Shortcut

I can't stress this one enough - __Set up a Keyboard shortcut for Python Code Chunks.__ This is a massive productivity booster for Rmarkdown documents. 

- My preference: `Ctrl + Alt + P`

When you hit `Ctrl + Alt + P`, a `{python}` code chunk will appear in your R Markdown document. 

![Make the Python Keyboard Shortcut](/assets/2020-04-20-python/protip-python_chunk_keyboard_shortcut.jpg)

### Pro-Tip #2 - Use Python Interactively

For debugging Python Code Chunks in R Markdown, it can help to use the `repl_python()` to convert your Console to a Python Code Console. To do so:

- In R Console, you can run python interactively using `repl_python()`. You will see `>>>` indicating you are in Python Mode.
- Make sure the correct Python / Conda Environment is selected. 
- To escape Python in the console, just hit `escape`. 

![Python Interactively](/assets/2020-04-20-python/protip-repl_python.jpg)

### Pro-Tip #3 - My Top 4 Conda Terminal Commands

At some point you will need to create, modify, add more packages to your Conda Environment(s). Here are 4 useful commands:

1. Run `conda env list` to list the available conda environments
2. Run `conda activate <env_name>` to activate a conda environment
3. Run `conda update --all` to update all `python` packages in a conda environment. 
4. Run `conda install <package_name>` to install a new package


# Use Python inside Shiny Apps

Up until now we haven't talked about `Shiny` - the ___web application framework___ that is used to take your `python` and `R` machine learning models into ___Production.___

<a href="https://apps.business-science.io/" target="_blank">
  <img class="img-responsive" src="/assets/2020-03-09-shiny-vs-tableau/app-library.jpg"> 
</a>

<p class="text-center date">
<a href="https://apps.business-science.io/" target="_blank">Business Science Application Library</a>
<br><small>A Meta-Application that houses Shiny Apps</small>
</p>

__R Shiny needs to be in your toolbox if you want to productionize Data Science.__ You simply cannot put machine learning applications into production with other "BI" Tools like Tableau, PowerBI, and QlikView. 

__<span style="color:blue;">CRITICAL POINT: You can USE SHINY to productionize `Scikit Learn` and `TensorFlow` models.</span>__

__If you need to learn R Shiny as fast as possible__, I have the perfect program for you. It will accelerate your career. [The 4-Course R-Track Bundle](https://university.business-science.io/p/4-course-bundle-machine-learning-and-web-applications-r-track-101-102-201-202a/) through Business Science. 

{% include cta_rtrack.html %}





# Have questions on using Python + R?

Make a comment in the chat below. 👇

And, if you plan on using `Python` + `R` at work, it's a no-brainer - [attend my Learning Labs](https://mailchi.mp/business-science/webinars) (they are FREE to attend live). 
