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

I organize certification training and masterclasses for software engineers called **[The Principal Developer](https://principal.dev)**.

Attendees say that my training is always practical, inspiring, and high-energy. You can hire me to run a training for your team.


---

When I have time, I contribute to open-source. I built a number of OSS projects such as [dev.events](https://dev.events), [PipelinR](https://github.com/sizovs/pipelinr), and [dev.tube](https://dev.tube). Some of them have become quite popular.

---

I'm a certified Enterprise Architect (OCMEA), Certified Scrum Master, Certified Product Owner, Certified Project Management Professional (PMP), and an ICF certified coach. I also hold a degree in Computer Science (programming and software architecture). But it doesn't really matter anyway.

