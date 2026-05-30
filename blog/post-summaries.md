---
title: "Short Post Summaries in 11ty (with LiquidJS)"
date: 2025-02-27
---

My website's [home page](/) is rather simple: a profile picture, title, navigation, intro, and a list of recent blog posts I've made. For a long time, that "Recent Posts" section has included the title, the first paragraph of the post, and a *continue reading* button. Simple enough, right? Here's what that looked like in my `index.html`:

{% raw %}
```
<hr>
<h2>Recent Posts</h2>
{% assign items = collections.posts | sort: 'something' | reverse %}
{% for post in items limit:3 %}
<h3>{{ post.data.title }}</h3>
<p>{{ post.content | split: "\n" | first}}</p>
<a href="{{ post.url }}"><em>Continue reading→</em></a>
<hr>
{% endfor %}
```
{% endraw %}

However, I've run into two problems with this solution. First, sometimes the first paragraph is long, which clogs up the homepage. Second, many of my posts include an image before any text, which results in a broken image icon in chromium browsers. No good!

To solve this, I used the [LiquidJS docs on Filters](https://liquidjs.com/filters/overview.html) to make a better summary:

{% raw %}```
<p>{{ post.content | strip_html | split: "\n" | slice: 0,2 | join | split: "." | slice: 0, 2 | join: "." | append: "."}}</p>
```{% endraw %}

First, we grab our post with `post.content`. Then, we remove all the html gunk with `strip html`, and get the first three paragraphs with `split: "\n"` and `slice: 0,2` (using the first two paragraphs protects us from the image problem). After `join`ing these together, we split it into an array of sentences with `split: "."`, grab the first three with `slice: 0,2`, `join` them back together, and add a final period on the end with `append: "."`.

In the end, it looks like this:

{% raw %}
```
<h2>Recent Posts</h2>
{% assign items = collections.posts | sort: 'something' | reverse %}
{% for post in items limit:3 %}
<h3>{{ post.data.title }}</h3>
<p>{{ post.content | strip_html | split: "\n" | slice: 0,2 | join | split: "." | slice: 0, 2 | join: "." | append: "."}}</p>
<a href="{{ post.url }}"><em>Continue reading→</em></a>
<hr>
{% endfor %}
```
{% endraw %}


Let me know if this helps you! 💖

*Willa*

UPDATE: I've altered this so that I can specify a "blurb" in the posts metadata. Now it looks like this:

{% raw %}
```
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

---
{% endfor %}
```
{% endraw %}