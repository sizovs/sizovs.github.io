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

My name is Eduards Sizovs  /ɛdwərdz sɪzovs/. I am a software developer, trainer, speaker, and a conference organizer from <span class="flag-icon flag-icon-squared flag-icon-lv"></span> Riga, Latvia. I am {{age}} years old.
<figure>
<img src="/images/about.jpg">
<figcaption>It's me in 2019.</figcaption>
</figure>

I've been doing commercial software development for over fifteen years, primarily using Java ecosystem. I quickly grew from a developer to architect, from architect to engineering manager, from manager to IT director. Today I keep writing code, mentoring software engineers, and their managers.

 I’m a certified Enterprise Architect (OCMEA), certified Scrum Master, certified Product Owner, certified Project Management Professional (PMP), ICF certified coach, and a certified good guy.

## My training

<div id="training"></div>
🎓 [The Principal Developer](https://principal.dev) is a 2-day masterclass for technical leaders. Here I give a practical career advice, make a deep-dive into engineering practices, lean software development, soft skills, recruiting, and mentoring.

🎓 [Effective Java Software Design](https://devchampions.com/training/java/) is a 2-day training for Java developers. Here you will learn how to design clean and lightweight enterprise applications in Java, that are easy and fun to maintain.

People say my training is always practical, inspiring, with energy level over 9000. **You can hire me to run a training for your team.**

<div class="videoWrapper">
<iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/AEtCEt44vlE?autoplay=0&origin=https://sizovs.net"
  frameborder="0"></iframe>
</div>

## DevTernity

I organize [DevTernity](https://devternity.com) conference — [the top 3 developer event in Europe](https://itconference.top). It's a must-visit event, where, together with my team, we turn developers into architects and engineering leaders. 

## Open source

<i class="fas fa-check"></i> [dev.tube](https://dev.tube) is a crowd-sourced hub for developer videos.

<i class="fas fa-check"></i> [dev.events](https://dev.events) is a crowd-sourced event listing.

<i class="fas fa-check"></i> [mustread.tech](https://mustread.tech) is a crowd-sourced book listing.

<i class="fas fa-check"></i> [PipelinR](https://github.com/sizovs/pipelinr) is a lightweight command processing pipeline for Java.

[Here](https://github.com/sizovs/mac) you can see what's on my Macbook.

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
