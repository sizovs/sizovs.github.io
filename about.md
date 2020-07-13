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

I’ve been involved in enterprise software development for over 15 years as a developer, architect, CTO, IT director, and independent consultant. Through regular training and mentoring I helped 63 startups, scale-ups, and large enterprises establish good coding culture, fix broken agile process, and accelerate hiring. Being a hard-code developer and an IT manager gave me a unique perspective on IT.

In 2014, I founded Latvian Software Craftsmanship Community, that has naturally transformed into **[DevTernity](https://devternity.com)** conference, where we turns developers into architects and engineering leaders. Scott Hanselman, Sandro Mancuso, Kevlin Henney, Venkat Subramaniam, J.B Rainsberger are our regular guests. Since, it has been recognized as one of **[the best developer conferences in Europe](https://itconference.top)**.

<figure>
<img src="/images/devternity_prep.jpg">
<figcaption>Preparing for amazing DevTernity.</figcaption>
</figure>

I personally spoke at 103 events Worldwide, including conferences with 1000+ attendees. You can see me in action:


<div class="videoWrapper">
<iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/AEtCEt44vlE?autoplay=0&origin=https://sizovs.net"
  frameborder="0"></iframe>
</div>


--- 

In addition to DevTernity, I organize a masterclass for development team leaders – **[The Principal Developer](https://principal.dev)**. Attendees say that my training is always practical, inspiring, and high-energy. You can hire me to run a training for your team (in English or Russian).

<figure>
<img src="/images/me_training.jpg">
<figcaption>It's me with a training group in 2018</figcaption>
</figure>

---

In 2019 I achieved financial independence, also known as [FIRE](https://en.wikipedia.org/wiki/FIRE_movement). In other words, I generate enough passive income from my investment (ETFs and cryptocurrency), so I don't have to do any forced work. This allows me to focus on what I care about the most: developing myself and developing others. 

I am solopreneur, meaning that I don't have "physical" business, office and colleagues to hang out with. Being a "company of one" allows me to charge reasonable fees for my services, which is rarely happens nowadays in enterprise software development. Moreover, it also allows me to travel the world with my family, and live quality, balanced, independent life. 

<figure>
<img src="/images/samui_me.jpg">
<figcaption>Right now, I am writing this from sunny Koh Samui, Thailand. </figcaption>
</figure>

When I have time, I contribute to open-source. I built a bunch of nice projects such as [dev.events](https://dev.events), [mustread.tech](https://mustread.tech), and [PipelinR](https://github.com/sizovs/pipelinr). Among the most successful creations with 200K users is [dev.tube](https://dev.tube) – a crowd-sourced hub for developer videos. I didn't expect it to become so popular. You can watch the full story here:

<div class="videoWrapper">
<iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/lojL7oDiaTk?autoplay=0&origin=https://sizovs.net"
  frameborder="0"></iframe>
</div>

---

I am an astute reader. I read and grasped all fundamental technical books – from clean code to continuous delivery. Apart of computer science, I am interested in psychology, philosophy, anthropology, communication, and leadership:

<figure>
<img src="/images/bookshelf.jpg">
<figcaption>My bookshelf</figcaption>
</figure>

I don't read news and don't have TV. In the age of information abundance, we're getting distracted from thinking for ourselves. Because all answers are inside us, I prefer to unplug and look for answers walking, observing, and meditating. I also practice Krav Maga and Muay Thai, because a a healthy mind requires a healty body.

<figure>
<img src="/images/muay.jpg">
<figcaption>Trainer Yongyut Chairan and me</figcaption>
</figure>

I’m a certified Enterprise Architect (OCMEA), certified Scrum Master, certified Product Owner, certified Project Management Professional (PMP), and ICF certified coach. But who cares about certificates anyway.

---

Together with my wife Julia we created an Instagram account **[Coding Unicorn](https://www.instagram.com/coding_unicorn/)**. By sharing coding and career advice, the unicorn has become the top tech influencer with 55K followers (and counting).

<figure>
<a href="https://www.instagram.com/coding_unicorn/"><img src="/images/unicorn.jpg"></a>
<figcaption>Coding Unicorn</figcaption>
</figure>

## You made it.

It was nice e-meeting you! Let's stay in touch on socials, and I hope to meet you in real at **[DevTernity](https://devternity.com)**, or perhaps at **[The Principal Developer](https://principal.dev)**.

<figure>
<img src="/images/me_again.jpg">
<figcaption>Trainer Yongyut Chairan and me</figcaption>
</figure>