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

My name is Eduards. I am a professional software developer with 15 years of experience. 

I’ve been involved in tech in different roles including a senior developer, chief architect, team lead, engineering manager, CTO, advisor, and development coach. 

I help developers become architects and engineering leaders. If you want to take your team, company, and your career to the next level, join my upcoming masterclass:


📅 **[5-6 May 2022 · Online · The Principal Developer](https://principal.dev)**

<figure>
<img src="/images/about.jpg">
<figcaption>It's me in 2019.</figcaption>
</figure>

## In the past

I built from scratch and led for 7 years one of the best software development conferences in Europe, that featured the legends of software development such as **Robert Martin, Scott Hanselman, Kevlin Henney, Sandro Mancuso, J.B. Rainsberger, Allen Holub, Venkat Subramaniam, Dave Farley.**

I personally spoke at 80+ events Worldwide, including conferences with 1000+ attendees. You can see me in action:

<div class="videoWrapper">
<iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/AEtCEt44vlE?autoplay=0&origin=https://sizovs.net"
  frameborder="0"></iframe>
</div>


---

I built [a number of OSS projects](https://github.com/sizovs). Some of them have become very popular and are still alive; others are discontinued.

---

I am a certified Enterprise Architect (OCEA), CSM, CSPO, PMP, and an ICF coach. I also hold a degree in software engineering and engineering management. 

