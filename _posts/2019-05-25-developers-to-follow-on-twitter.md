---
layout: post
title: Developers to follow on Twitter
location: Riga, Latvia
noActions: true

---

<style type="text/css">
    img[alt=Avatar] {
        width: 32px;
        height: 32px;
        object-fit: cover;
        border-radius: 100%;
    }
</style>

**The list was updated in {{'now' | date: "%Y"}}.**

In addition to [books](/2019/03/17/the-best-books-all-software-developers-must-read/) and [conferences](/2019/03/21/the-best-developer-conferences/), Twitter is my primary source of inspiration. Unfortunately, some developers don't use Twitter because they find it too noisy. To improve the situation, I decided to compile a list of **{{site.data.twitter.accounts.size}} high-quality Twitter accounts** with good signal vs. noise ratio.

<figure>
<img src="/images/selfie.jpg" alt="bullshit" width="200px" align="center" />
<figcaption>No cats, politics and selfies allowed.</figcaption>
</figure>

---
{% for account in site.data.twitter.accounts -%}
{% capture avatar -%}![Avatar](https://avatars.io/twitter/{{account.handle}}){:rel="nofollow" }{% endcapture -%}
## {{avatar}}  [{{account.name}}](https://twitter.com/{{account.handle}}){:rel="nofollow" }

{{account.about}}
{% endfor %}

---

Do you know of other accounts with a good signal vs. noise ratio?