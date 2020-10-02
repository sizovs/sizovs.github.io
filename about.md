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

My name is Eduards Sizovs  /ɛdwərd sɪzov/. I am a software developer, trainer, speaker, and conference organizer from <span class="flag-icon flag-icon-squared flag-icon-lv"></span> Riga, Latvia. I am {{age}} years old. 
<figure>
<img src="/images/about.jpg">
<figcaption>It's me in 2019.</figcaption>
</figure>

I’ve been involved in enterprise software development for over 15 years as a developer, architect, CTO, IT director, and independent consultant. Through regular training and mentoring I helped 63 startups, scale-ups, and large enterprises establish good coding culture, fix broken agile process, and accelerate hiring. 

I lead **[DevTernity](https://devternity.com)** conference, where we turn developers into architects and engineering leaders. It has been recognized as one of **[the best developer conferences in Europe](https://itconference.top)**.

I personally spoke at 103 events Worldwide, including conferences with 1000+ attendees. You can see me in action:


<div class="videoWrapper">
<iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/AEtCEt44vlE?autoplay=0&origin=https://sizovs.net"
  frameborder="0"></iframe>
</div>


--- 

In addition to DevTernity, I organize a masterclass for development team leaders – **[The Principal Developer](https://principal.dev)**. I also run **[Effective Java Software Design](https://devchampions.com/training/java)** training. Attendees say that my training is always practical, inspiring, and high-energy. You can hire me to run a training for your team (in English or Russian).

<figure>
<img src="/images/me_training.jpg">
<figcaption>It's me with a training group in 2018</figcaption>
</figure>


When I have time, I contribute to open-source. I built a bunch of nice projects such as [dev.events](https://dev.events), [mustread.tech](https://mustread.tech), and [PipelinR](https://github.com/sizovs/pipelinr). Among the most successful creations with 200K users is [dev.tube](https://dev.tube) – a crowd-sourced hub for developer videos. I didn't expect it to become so popular. 

---

I’m a certified Enterprise Architect (OCMEA), certified Scrum Master, certified Product Owner, certified Project Management Professional (PMP), and ICF certified coach. But who cares about certificates anyway.

