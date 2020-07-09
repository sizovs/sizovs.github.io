---
layout: post
title: Developers to follow on Instagram
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

Instagram is becoming the next big thing in education. In addition to [books](/2019/03/17/the-best-books-all-software-developers-must-read/), [conferences](/2019/03/21/the-best-developer-conferences/) and [Twitter](/2019/05/25/developers-to-follow-on-twitter/), I use Instagram to get access to the content you won't find anywhere else on the internet. The content is a mix of coding tips, good advice and inspiring visuals. If you appreciate good photography and aesthetics, check out a list of **{{site.data.instagram.accounts.size}} high-quality Instagram accounts that I follow**:

---
{% for account in site.data.instagram.accounts -%}
## [{{account.name}}](https://instagram.com/{{account.handle}}){:rel="nofollow" }

{{account.about}}
{{account.tweet}}
{% endfor %}

---

P.S. check out [Twitter accounts](https://sizovs.net/2019/05/25/developers-to-follow-on-twitter/) as well.