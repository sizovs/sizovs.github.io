---
layout: default
title: About me
permalink: /about/
---

# Hi. 👋

{% assign year = 'now' | date: '%Y' %}
{% assign month = 'now' | date: '%m' | minus: 0 %}
{% assign day = 'now' | date: '%d' | minus: 0 %}

{% if month <= 6 and day < 21 %}
{% assign age = year | minus: 1988 | minus: 1 %}
{% else %}
{% assign age = year | minus: 1988 | minus: 0 %}
{% endif %}

My name is Eduards Sizovs  /ɛdwərdz sɪzovs/. I am a coding software architect, [trainer](https://principal.dev), [speaker](https://dev.tube/@eduardsi), and a [conference organizer](https://devternity.com) from <span class="flag-icon flag-icon-squared flag-icon-lv"></span> Riga, Latvia. I am {{age}} years old.
<figure>
<img src="/images/about.jpg">
<figcaption>It's me in 2018, replying to an email.</figcaption>
</figure>

I've been doing commercial software development for over 15 years. I quickly grew from a developer to architect, from architect to software engineering manager, from manager to IT director. Today, I consult C-level technical people and organize training for experienced developers:

<div id="training"></div>
- 🎓 [The Principal Developer](https://principal.dev) is a 2-day masterclass for the next-gen tech leaders.

- 🎓 [Awesome Java Architecture](https://devchampions.com/training/java) is a 2-day training for Java developers.

I organize a conference, that turns devs into architects and engineering leaders:

- 👨‍💻 [DevTernity](https://devternity.com) ([top 3 in Europe](https://itconference.top))

I contribute to open-source:

- 🍿 [DevTube](https://dev.tube) (#1 Hackernews, #3 ProductHunt) is a hub for developer videos.

- 📚 [mustread.tech](https://mustread.tech) is a crowd-sourced book listing.

- 🚀 [PipelinR](https://github.com/sizovs/pipelinr) is a lightweight command processing pipeline ❍ ⇢ ❍ ⇢ ❍ for your Java awesome app.

I share cool links on my Telegram channel for software developers:

- 💬[DevChampions](http://t.me/devchampions)

## Email me

My email is [eduards@sizovs.net](mailto:eduards@sizovs.net). I reply within 48 hours.

## Follow me
I use Twitter. <a href="https://twitter.com/intent/follow?screen_name=eduardsi" target="_blank">Follow me</a> to learn more about technology and people.

You can [invite me](https://www.linkedin.com/in/eduardsi){: rel="nofollow" } on LinkedIn. Please introduce yourself when sending an invitation.

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
