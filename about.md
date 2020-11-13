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

I’ve been involved in enterprise software development for over 15 years as a developer, architect, CTO, IT director, and independent consultant. Today, through training and mentoring I help teams establish good coding culture, accelerate development process, and improve hiring process. 

I lead **[DevTernity](https://devternity.com)** conference, where we turn developers into architects and engineering leaders. It has been recognized as one of **[the best developer conferences in Europe](https://itconference.top)**.

I personally spoke at 103 events Worldwide, including conferences with 1000+ attendees. You can see me in action:


<div class="videoWrapper">
<iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/AEtCEt44vlE?autoplay=0&origin=https://sizovs.net"
  frameborder="0"></iframe>
</div>


--- 

<span id="courses"></span>

I organize certification training and masterclasses for software engineers:
- **[Clean Code in Java 15](https://devchampions.com/training/java-clean-code/)**
- **[Clean Architecture in Java 15](https://devchampions.com/training/java-clean-architecture/)**
- 🚀 **[Effective Agile Software Development](https://devchampions.com/training/agile-software-development/) (most popular)**
- 🚀 **[Effective Coding Principles and Patterns in Java 15](https://devchampions.com/training/java) (most popular)** 
- **[Effective Soft Skills and Leadership for Developers](https://devchampions.com/training/softskills)**
- **[Effective TDD in Java 15](https://devchampions.com/training/java-tdd/)**
- 🚀 **[How to Hire and Grow Developers](https://devchampions.com/training/how-to-hire-and-grow-developers/) (most popular)**
- 🚀 **[The Principal Developer](https://principal.dev) (most popular)** 

Attendees say that my training is always practical, inspiring, and high-energy. You can hire me to run a training for your team.


---

When I have time, I contribute to open-source. I built a number of OSS projects such as [dev.events](https://dev.events), [mustread.tech](https://mustread.tech), and [PipelinR](https://github.com/sizovs/pipelinr). Among the most successful creations is [dev.tube](https://dev.tube) – a crowd-sourced hub for developer videos. I didn't expect it to become so popular. 

---

I’m a certified Enterprise Architect (OCMEA), certified Scrum Master, certified Product Owner, certified Project Management Professional (PMP), and ICF certified coach. I have two degrees in Computer Science (programming and software architecture) and international MBA degree (IT process organization, leadership, management, recruiting, remote work).

