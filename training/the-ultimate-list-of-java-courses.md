---
layout: post
title: The Ultimate List of Java Courses
noActions: true
includeYear: true

---
{% assign thisYear = '2019' %}

{% assign picks = site.data.events.list | where_exp: "self", "self.name contains 'Effective Java'" %} 
{% assign courses = picks | concat: site.data.courses %} 
{% assign coursesSorted = courses | sort: 'date' %} 

<i class="far fa-star"></i> **The list was updated in {{thisYear}}.**

Attending an expert-led course is the best way to boost Java skills. No online course can compare with live learning, when when you work in a group of like-minded people, ask questions and learn from industry practitioners. 

**I manually collected the ultimate list of training courses offered by different European training providers and individuals.** This is the list of all Java courses I am aware of. All the information here has been compiled correctly to the best of my knowledge. If some great Java training is missing, let me know.

![Venkat](/images/venk.jpg)

## <i class="fab fa-java"></i> {{courses | size}} upcoming Java training courses

{% for c in coursesSorted -%}
{% if c.awsm %}
<a href="{{c.url}}"><img src="{{c.img}}" style="width: 260px" /></a>
{% endif %}
### [{{c.title | default: c.name}}]({{c.link | default: c.url}}){: rel="nofollow" }
**Date**: {{c.date}}
<br>
**Duration**: {{c.duration}} days
<br>
**Location**: {{c.city}}, {{c.country}}
<br>
**Price**: €{{c.price | round: -2}}
<p>{{c.info}}</p>
{% if c.awsm %}
<a href="{{c.url}}" class="button">Apply</a>
{% endif %}
<hr>
{% endfor %}

> Hard to choose? Check out my [Java training](https://devchampions.com/training/java/).