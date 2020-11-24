---
layout: post
title: Java libraries I like
location: Tallinn, Estonia
---

**The list was updated in {{'now' | date: "%Y"}}.**

Everyone knows Spring and Hibernate, but there are other libraries and frameworks that are worth your attention. I pulled a list of **{{site.data.java_libraries.size}} Java libraries** that I like and use daily. Some of them are well-known; others are not so popular, yet very useful at work.

<figure>
    <img src="/images/java_stars.png" alt="Java logo" />
</figure>
---


<table>
    <tr>
        <th align="left" width="25%">Name</th>
        <th align="left">About</th>
    </tr>

    {% for lib in site.data.java_libraries -%}
    <tr>

        <td><a style="min-height: 300px" href="{{lib.link}}">{{lib.name}}</a></td><td>{{lib.about}}.</td>
    </tr>
    {% endfor %}
</table>

---

> 💡 If you want to see and learn those tools in action, join my **[Effective Coding Principles and Patterns in Java {{site.latestJava}}](https://devchampions.com/training/java/)** course.