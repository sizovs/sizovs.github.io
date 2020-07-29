---
layout: post
title: Code review – from good to great
location: Koh Samui, Thailand
---

In a team I sat next to, a junior developer asked a senior to conduct code review for a newly completed feature. According to the process, that Senior had to approve all changes going to production. Here is how it went:

Junior: "Could you please take a look at my code?"

Senior: "No, I am busy. Send me a PR; I'll take a look when I have more time." (never)

Junior: "This is urgent; our key customer needs this fix. Can you take a look now?"

Senior (eyes rolling): "O.K."

For the next ten minutes, the senior was scrolling the code back and forth, revealing no emotions in dead silence; he looked very unhappy. Because the silence was unbearable and senior showed almost no signs of life, the curious Junior interrupted the busy reviewer by sending an ACK packet. The ~~server~~ senior responded:

> Tsshhhhh. I am still reviewing. Everything sucks. Need more time. Go grab a coffee.

Then silence came again. Click. Click. Scroll. Click. Click.

Junior, hoping to learn something, was still sitting next to Senior. The air was tense and smelled with trotyl. The senior – like a C4 – was ready to explode if someone moves or says a word. 

<span id="continue"></span>

---

Twenty minutes have passed before Senior returned from the deep trance:

Senior: "I reviewed your code carefully and it’s **total shit**."

Junior:  (⊙_⊙)

Senior: "It’s **unreadable** and **messy**."

Junior: (⊙_⊙)

Senior: "And it doesn’t conform to **our best practices**. Didn’t you read Clean Code?"

Junior: "Well…  I… I… Just started reading."

Senior: "You are John Snow of GoF design patterns - you know none of them."

John Snow of Patterns: "Ok, enough of it. Can you help me improve the code?"

Senior: "Sorry, but I have **wasted** a lot of time already and have other priorities. I will unclebobify your mess tomorrow in between meetings. Don’t worry about this task anymore. Take an easier task from JIRA; there are plenty of tasks good for your level."

Junior: (⊙_⊙)

<img src="/images/jackie.gif" alt="Jackie Chan with a WTF face" width="100%">

---

People rarely talk about it, but in many companies, code review makes developers feel like shit. In one company I felt myself this way, too, but never told anyone. Because no one is asking juniors and no one is watching the watchmen.

Code review is an extremely delicate form of feedback: when people put their soul into work, they become vulnerable and sensitive to criticism. Saying that “the code review is not about us, it’s about our code” doesn’t help much. We are what we do. 

I believe we can do better. 

---

## Here are my eight recommendations on how to create a code review process that people love. 

#### 1. Code review is better without tools
The best code review is face-to-face. People are designed to efficiently exchange information with words, body language, and voice. This is how we understand each other and build relationships. Tools turn humans into 128x128 avatars and feelings into emojis.

Given access to online messaging, people become the worst versions of themselves; then they’re trying to fix the damage caused by messaging; at team buildings, they drink and sing uniting songs. Then they open browsers again. And the cycle continues.


If you don't like your teammates, pull requests, Slack, and Gerrit will make you hate them even more. So, for God's sake, **stop sending the code over the wire.** Review the code by sitting next to each other – it's *much* faster. If you work in the same building and review each other's work via PRs, millions of years of evolution are laughing at you. If you're remote, try [Tuple](https://tuple.app/).

You will only need a check-list with “issues” that you discovered during the review and that need to be fixed. I use high-tech tools called pen and paper. Believe it or not, but writing by hand is incredibly cool; writing together even more so. Remember: **more face-to-face, fewer tools.**

#### 2. Code review is more mentoring than control
Some seniors see code review as a means for controlling quality and preventing bad things from happening on production. Seniors become gatekeepers. This is often met with resistance and rebellion because control implies lack of trust. It also doesn't scale well as your team grows.

When I meet a team that drowns in spaghetti but resists strict code review, I offer them mentorship via code review. Developers accept it with ease because mastery is [what motivates developers the most](/2020/03/26/developers-dont-need-ping-pong-tables/). 

Then, I use code review time that developers trusted me to accelerate their professional growth: I write code, explain things, share inspiration and books. My goal is to make myself unnecessary. A great team doesn’t need a gatekeeper. And because it scales well, I can focus on more strategic tasks than gatekeeping. Remember: **more mentoring, less control.**

#### 3. Code review is not only about bad parts
Criticizing and finding flaws in someone else’s work is easy. Just look at the internet and social media – people’s work is being aggressively criticized, every comment is like a small cut; add twelve years of school; add what parents said; Those cuts accumulate and we start drowning in self-doubt, afraid to fly. This blog post will be criticized, too.

I think we can do better. Criticism is important, but the question is – can you also find and appreciate good parts?

I always start the review by praising a person for hard work. Then, during the code review, I give an equal amount of attention to both “good” and “bad” parts of the solution. When I discover a good part, I am saying: “wow, this is a really good solution; keep rocking.” When you appreciate people’s work, they begin to open up.

When I discover a “bad” part, I look at its positive sides. In 99% of cases, when you understand the context, that ugly technical decision begins to make sense. In 1% of cases when it doesn't, you’ve already mentioned enough good parts that compensate for the bad one.

So, don’t turn code review into a funeral ceremony; keep looking for good parts.

![a joke where reviewer, looking for good parts, says: at least we don't need to obfuscate before shipping](/images/obfuscate.png)

#### 4. Code review doesn't tolerate exceptions
I regularly meet teams where seniors review juniors, but juniors are not allowed to review seniors. This brings an unhealthy divide into the team and leads to shitty company culture: juniors mimic the behavior of seniors and start thinking, that, the day they grow up, they’ll be writing perfect code that doesn’t need review, and seniors are always right. You probably met seniors like that. Now you know where they come from.

In a healthy organization, seniors’ solutions, ideas, and code should be openly challenged and reviewed by juniors. Seniors have enough motivation, patience, and skills to explain. In such environments, juniors grow into good seniors; and seniors… well, juniors just stop calling them assholes.

Dear juniors! I learned a lot from your feedback, questions, and ideas that seemed crazy then. You made me a better programmer, mentor, human. Thank you.

#### 5. Code review is an act of humility
Being humble and acknowledging that you are not always right are prerequisites for a good code review. Sometimes we're pushing our solutions because we just want to be right and it pleases our ego. But software development is not a single-player game; consistent codebases emerge from consensus; good teamwork requires personal sacrifices.

Sometimes, when I can’t reach consensus, I step back and say: “fine, let’s just do things your way” or “both solutions seem good enough. what's your preference”? This makes people feel relevant and teaches them to take responsibility.

Always check your ago.

#### 6. Code review doesn't tolerate abstract judgment
Calling code “bad”, “crap”, or “unreadable” is subjective and abstract judgment. It offends people and causes resistance. Certain code qualities lead to the productive conversation:

* conformance to requirements
* conformance to standards and rules the team agreed on
* coverage with tests
* coupling 
* cohesion
* reusability
* discoverability
* duplication
* verbosity
* comprehensibility
* cognitive load
* levels of abstraction
* etc. 

This is your new code review language.

It’s also important to learn to demonstrate the impact of those qualities in action: break the code to demonstrate the value of a unit test; write a test to simulate bad performance; move a class to a different package to demonstrate coupling; ask a third person to read the code and explain what the code does – this is how you assess comprehensibility. **Be concrete in judgment, and creative in demonstrations.**

#### 7. Code review must be the first priority
If code review is not a top priority, then something is wrong with your priorities. Or you let the work pile up and then deliver it in batches, making continuous delivery impossible.

In a bad team, code review is the last priority. Pull-requests hang open for days, sometimes weeks, or even months. Everyone is busy doing “their own stuff.” This kills motivation because our hard work doesn’t seem important. To avoid “idle state”, we start working on new tasks; then switching back to the code review; then back again. Productivity drops.

In a good team, code review is the top priority. You raise a hand screaming: “I need code review!”. Because you're one step away from delivering value to the customer, a teammate replies immediately: “I am coming!” and moves his chair next to you. Then review, a couple of fixes, all green. Git push. The feature is live. Traffic starts coming; no errors in logs. The value was delivered and you mark the task completed. Together with the reviewer, smiling, you go to the kitchen for a coffee.

Make code review the first priority.

#### 8. Code review is better when you come prepared
To make code review short and efficient, reviewee must prepare carefully. Pay your reviewer respect and think of how you’ll explain:

* The task or feature you've been working on
* The problem you've been trying to solve
* The reasoning behind design decisions

Use notes and write important things down. The better you'll explain the problem to the reviewer, the more thorough and valuable review will be. Otherwise, it's waste of time.

Show code in small increments. Don’t wait until your 2-week-long user story is completed – such reviews consume too much time and energy. They also cause too much re-work, if you got requirements wrong. Use git commits to tell the story in small chapters, ordered chronologically. Show one commit at a time.
## Wrap up

Your code review process can be a torture:

<img src="/images/review_nok.png?new=1" alt="Angry people reviewing code" width="500">

Or it can be an effective, encouraging, and positive activity:


<img src="/images/review_ok.png?new=1" alt="Happy people reviewing code" width="500">

The difference is in implementation details. Remember that code review:

* is better when you come prepared
* is better without tools
* is more mentoring than control
* is not only about bad parts
* is an act of humility
* must be the first priority
* doesn't tolerate exceptions &amp; abstract judgment

Thank you for attention. 

---

During my [training](https://principal.dev), we cover and simulate different code review situations. If you’re interested in boosting your code review skills – join in.