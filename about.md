---
layout: default
title: About me
permalink: /about/
---

# Hi. 👋

{% assign year = 'now' | date: '%Y' %}
{% assign month = 'now' | date: '%m' | minus: 0 %}
{% assign day = 'now' | date: '%d' | minus: 0 %}

{% if month < 6 or month == 6 and day < 21 %}
{% assign age = year | minus: 1988 | minus: 1 %}
{% else %}
{% assign age = year | minus: 1988 | minus: 0 %}
{% endif %}

My name is Eduards Sizovs  /ɛdwərdz sɪzovs/. I am a coding software architect, [trainer](https://principal.dev), [speaker](https://dev.tube/@eduardsi), and a [conference organizer](https://devternity.com) from <span class="flag-icon flag-icon-squared flag-icon-lv"></span> Riga, Latvia. I am {{age}} years old.
<figure>
<img src="/images/about.jpg">
<figcaption>It's me in 2019.</figcaption>
</figure>

I've been doing commercial software development for over 15 years, primarily in Java. I quickly grew from a developer to architect, from architect to software engineering manager, from manager to IT director. Today, I keep writing code, mentor software developers and their managers.

 I’m an Oracle Certified Master and Java Enterprise Architect (OCMEA), Certified Scrum Master, Certified Product Owner, Certified Project Management Professional (PMP), and an ICF certified coach.

## My training

<div id="training"></div>
🎓 [The Principal Developer](https://principal.dev) is a 2-day masterclass for technical leaders. Here I give a practical career advice, make a deep-dive into engineering practices, lean software development, soft skills, recruiting, and mentoring.

🎓 [Effective Java Software Design](https://devchampions.com/training/java/) is a 2-day training for Java developers. Here you will learn how to design clean and lightweight enterprise applications in Java, that are easy and fun to maintain.

**You can hire me to run a training for your team.**

## My conference

[DevTernity](https://devternity.com) is [the top 3 developer conferences in Europe](https://itconference.top). It's a must-visit event, where, together with my team, we turn developers into architects and engineering leaders. 

## My open source work

<i class="fas fa-check"></i> [dev.tube](https://dev.tube) is a crowd-sourced hub for developer videos.

<i class="fas fa-check"></i> [dev.events](https://dev.events) is a crowd-sourced event listing.

<i class="fas fa-check"></i> [mustread.tech](https://mustread.tech) is a crowd-sourced book listing.

<i class="fas fa-check"></i> [PipelinR](https://github.com/sizovs/pipelinr) is a lightweight command processing pipeline for Java.

## Let's connect

<i class="far fa-envelope"></i> [eduards@sizovs.net](mailto:eduards@sizovs.net)

<i class="fab fa-twitter-square"></i> <a href="https://twitter.com/intent/follow?screen_name=eduardsi" target="_blank">@eduardsi</a>

<i class="fab fa-linkedin"></i> [LinkedIn](https://www.linkedin.com/in/eduardsi){: rel="nofollow" }

<i class="fab fa-goodreads"></i> [Goodreads](https://goodreads.com/eduardsi){: rel="nofollow" }

<i class="fab fa-instagram"></i> [Instagram](https://instagram.com/eduards.sizovs/){: rel="nofollow" } (posting stuff together with my wife Julia)

<i class="fab fa-telegram-plane"></i> [Telegram](https://t.me/devchampions){: rel="nofollow" }

## Subscribe
Once a month, I send a summary of my writing activity. Sometimes it includes Tweets and interesting things from the web. You can subscribe and unsubscribe any time, no questions asked. I won't spam you with commercials and will never share your email with a third party.

<div id="subscribeForm">
  <form action="https://www.getrevue.co/profile/sizovs/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
  <div class="form-group">
    <label for="member_email">Email address</label>
    <input class="revue-form-field" type="email" name="member[email]" id="member_email" required>
  </div>
  <div class="form-group">
    <label for="member_first_name">First name</label>
    <input class="revue-form-field" type="text" name="member[first_name]" id="member_first_name" required>
  </div>
  <div class="form-group">
    <label for="member_last_name">Last name</label>
    <input class="revue-form-field" type="text" name="member[last_name]" id="member_last_name" required>
  </div>
  <div class="form-group">
    <input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit">
  </div>
  </form>
</div>
