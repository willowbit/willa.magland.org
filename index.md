---
layout: layout.html
title: "Willa's Website"
---

Hello, welcome to my site! This is where I write, share the things that I find, and experiment with the internet.

You can [learn more about me](https://willa.magland.org/about) or check out my [blog posts](https://willa.magland.org/blog).

While you're here, [sign the guestbook](https://willa.magland.org/guestbook)!

---

## Recent Posts

{% assign items = collections.published | sort: 'something' | reverse %}
{% for post in items limit:3 %}

### {{ post.data.title }}

{% if post.data.blurb %}
    {{ post.data.blurb }}
{% else %}
    {{ post.content | strip_html | split: "\n" | slice: 0,3 | join | split: "." | slice: 0, 2 | join: "."}}
{% endif %}

[*Continue reading→*]({{ post.url }})

{% endfor %}