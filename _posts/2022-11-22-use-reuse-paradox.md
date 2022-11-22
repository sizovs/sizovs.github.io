---
layout: post
title: The Use/Reuse paradox
location: Samui
---

What is easy to use is hard to reuse. What is easy to reuse is hard to use. This phenomenon is called the use/reuse paradox: 

As we try to make code more reusable (more generic, more abstract, more customizable), we make it more difficult to use. Such code/module/library needs to be tailored to our context *and* the context of every individual consumer.

Moreover, the API of a highly reusable module will also be less convenient and more bloated because it should satisfy all consumers and their different requirements. As a result, every individual consumer will bear the cost of reusability.

On the other hand, as we make code more usable (more tailored to the specific context), we make it less reusable.

Usability vs. reusability is a design trade-off. Increasing one reduces the other, and a wrong balance harms the consumer. Therefore, to hit the sweet spot, you must always design the code with the consumer in mind (TDD helps a lot).