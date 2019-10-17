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

🍿 [DevTube](https://dev.tube) (#1 Hackernews, #3 ProductHunt) is a hub for developer videos.

📚 [mustread.tech](https://mustread.tech) is a crowd-sourced book listing.

🚀 [PipelinR](https://github.com/sizovs/pipelinr) is a lightweight command processing pipeline ❍ ⇢ ❍ ⇢ ❍ for your Java awesome app.

## Get in touch

<i class="far fa-envelope"></i> My email is [eduards@sizovs.net](mailto:eduards@sizovs.net). I reply within 48 hours.

<i class="fab fa-twitter-square"></i> <a href="https://twitter.com/intent/follow?screen_name=eduardsi" target="_blank">Follow me</a> for relevant tech content. I have zero politics and cat picture policy.

<i class="fab fa-linkedin"></i> Please introduce yourself when sending an [invitation](https://www.linkedin.com/in/eduardsi){: rel="nofollow" }.

<i class="fab fa-goodreads"></i> I share and review what I read on [Goodreads](https://goodreads.com/eduardsi){: rel="nofollow" }.

<i class="fab fa-instagram"></i> To get a glimpse of my life, follow me on [Instagram](https://instagram.com/eduards.sizovs/){: rel="nofollow" }.

<i class="fab fa-telegram-plane"></i> I share interesting articles on my [Telegram](https://t.me/devchampions){: rel="nofollow" } channel.

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
