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

My name is Eduards Sizovs  /ɛdwərd sɪzov/. I am a professional software developer, trainer, speaker, and conference organizer. I am {{age}} years old. 
<figure>
<img src="/images/about.jpg">
<figcaption>It's me in 2019.</figcaption>
</figure>

I’ve been involved in software development for over 15 years as a developer, architect, engineering manager, CTO, advisor, and development coach. Today, **[through The Principal Dev masterclass](https://principal.dev)** I help developers become architects and engineering leaders and teach them how to deliver value sooner, improve teamwork, dev process, and hiring results. 


Before, I built from scratch and led for 7 years the most-waited software development conference in Europe, that featured the legends of software development such as **Robert Martin, Scott Hanselman, Kevlin Henney, Sandro Mancuso, J.B. Rainsberger, Allen Holub, Venkat Subramaniam, Dave Farley.**

I personally spoke at 103 events Worldwide, including conferences with 1000+ attendees. You can see me in action:


<div class="videoWrapper">
<iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/AEtCEt44vlE?autoplay=0&origin=https://sizovs.net"
  frameborder="0"></iframe>
</div>


---

From time to time I contribute to open-source. I built a number of OSS projects such as [dev.events](https://dev.events), [PipelinR](https://github.com/sizovs/pipelinr), [mustread.tech](https://mustread.tech), and [dev.tube](https://dev.tube). Some of them have become quite popular, others are discontinued.

---

I'm also a certified Enterprise Architect (OCEA), CSM, CSPO, PMP, and an ICF coach. I also hold a CS degree in programming and engineering management. But it doesn't really matter anyway.

