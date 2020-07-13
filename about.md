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

I’ve been involved in enterprise software development for over 15 years as a developer, architect, CTO, IT director, and independent consultant. Through regular training and mentoring I helped 63 startups, scale-ups, and large enterprises establish good coding culture, fix broken agile process, and accelerate hiring. Being a hard-code developer and an IT manager gave me a unique and rare perspective on IT. I am still writing code and can teach you a trick or two.

In 2014, I founded Latvian Software Craftsmanship Community, that has naturally transformed into **[DevTernity](https://devternity.com)** conference; At DevTernity we help developers masters skills they need to become architects or engineering leaders – coding, architecture, and leadership. Scott Hanselman, Sandro Mancuso, Kevlin Henney, Venkat Subramaniam, J.B Rainsberger are our regular guests. The conference is among **[the best developer conferences in Europe](https://itconference.top)**.

I spoke at 103 events Worldwide, including conferences with 1000+ attendees.

<div class="videoWrapper">
<iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/AEtCEt44vlE?autoplay=0&origin=https://sizovs.net"
  frameborder="0"></iframe>
</div>


<br>
I make living by organizing a fantastic conference **[DevTernity](https://devternity.com)** and growing developers and their managers via **[The Principal Developer](https://principal.dev)** course. Attendees say that my training is always practical, inspiring, and high-energy. **You can hire me to run a training for your team (in English or Russian).** 

## A bit more about me

I am solopreneur, meaning that I don't have "physical" business, office and colleagues to hang out with. Being a company of one allows me to charge reasonable fees for my services, which is pretty rare in enterprise software development. Moreover, it also allows me to travel the world with my family, and live quality, balanced, independent life. Right now, I am writing this from sunny Koh Samui, Thailand. 

I enjoy guaranteed passive income from ETFs (Exchange-Traded Funds) and cryptocurrency. Being financially independent allows me to focus on what I care about more: self-developing and developing others. 

I am an astute reader. I read and grasped all fundamental technical books – from clean code to continuous delivery. I am particularly interested in psychology, anthropology, science. I don't read news and social media, because it's distracting us from what truly matters.

I believe that all answers hide inside ourselves. In the age of information abundance, we're searching for answers outside too much. Yet, we should be looking for answers inside our own minds. Walking, observing, and meditation helps a lot. I also practice Krav Maga and Muay Thai, because a healthy body is required for a healthy mind.

I’m a certified Enterprise Architect (OCMEA), certified Scrum Master, certified Product Owner, certified Project Management Professional (PMP), and ICF certified coach. But that doesn't matter much.


## Other projects

<i class="fas fa-check"></i> [dev.tube](https://dev.tube) is a crowd-sourced hub for developer videos.

<i class="fas fa-check"></i> [dev.events](https://dev.events) is a crowd-sourced event listing.

<i class="fas fa-check"></i> [mustread.tech](https://mustread.tech) is a crowd-sourced book listing.

<i class="fas fa-check"></i> [PipelinR](https://github.com/sizovs/pipelinr) is a lightweight command processing pipeline for Java.

I also help my wife Julia a promote her Instagram account **[Coding Unicorn](https://www.instagram.com/coding_unicorn/)**, where we share coding and career advice for the next generation of developers. We already gathered 55K followers.