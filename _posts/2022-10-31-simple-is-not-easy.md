---
layout: post
title: Simple is not easy
location: Tallinn
permalink: /simple-not-easy/
redirect_from:
  - /2022/10/31/simple-is-not-easy/
---

"Keep it simple, stupid" is a good advice. It's also an obvious one because, when solving problems, nobody is thinking: "How do I make things more complex than necessary?". Engineers generally try to keep things simple. Yet, over-engineering is found on every corner, and we keep reminding our colleagues to KISS. 

**So why is it so hard to follow KISS advice? 🤔**

KISS often means one of the following: 
- Don't do unnecessary things. 
- When doing things, prefer simple solutions.

Both goals are hard to achieve. Here is why:

### 1️⃣ We don’t stay with problems long enough
One should always try to simplify a problem before attempting to solve it. Behind every complex problem is a set of simpler problems hiding from you. Decomposition, removing the non-essential parts, and reframing can simplify the problem (or completely eliminate it, if you’re lucky). But that all requires a deep understanding of the nature of the problem. And such understanding requires staying with the problem long enough – the luxury we can’t always afford.

> It's not that I'm so smart; it's just that I stay with problems longer. — Albert Einstein

To be like Einstein, devote your conscious and subconscious mind to a single problem. Eliminate multitasking. Monotasking is the way to go. It's also essential to accumulate and preserve domain knowledge. Switching business domains every year is like switching programming languages every year, never mastering any of them. Developers with deep domain expertise have a huge advantage over those new to the business. 

### 2️⃣ More effort is needed to find simple solutions

Software development is a continuous process of experimentation, discovery, and complexity elimination. Your first solution will probably be the worst. As you accumulate knowledge, your subsequent solutions will improve over time. So, to get to a simpler solution, you need more time, more experimentation, and more feedback. The key word here is “more.” Complexity is the default outcome unless you invest time to reduce it. That’s how simplicity becomes costly. The best way I know to lower the cost of simplicity is to practice eXtreme Programming:

<figure>
<a href="https://www.goodreads.com/book/show/67833.Extreme_Programming_Explained">
    <img src="/images/xp.jpg" width="400px">
</a>
</figure>

### 3️⃣ Our decision-making is flawed

Even engineers, who consider themselves the most intelligent species on earth, constantly make irrational, emotional, and biased decisions. And even with perfect problem understanding, you will very likely introduce accidental complexity, unless you don’t fight the following temptations: doing what large companies do (cargo culting), preferring fancy tech to boring tech (marchitecture), writing extra code and creating unnecessary abstractions for the future (speculative thinking), attaching emotionally to the code you wrote (the sunk-cost fallacy), etc. 

To understand the extent of your flawed thinking and what to do about it, check out “[Thinking, Fast and Slow](https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow)” and “[Influence](https://www.goodreads.com/book/show/56419468-influence-new-and-expanded)” books. Also, make sure you always have a solid business case for your tech decisions:


<div align="center">
<iframe width="100%" height="315" src="https://www.youtube.com/embed/b9I3aOnXepA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

We’ll keep reminding each other to KISS because making something simple is difficult. Finding and implementing a simple solution can be expensive, hence the paradox: we want KISS to move faster, but discovering a simple solution or simplifying an existing solution can slow us down. So, whenever someone says: “keep it simple, stupid,” I immediately think: “that’s gonna be difficult.”