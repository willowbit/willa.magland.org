---
date: 2024-03-11T21:16:17Z
description: The history of willa.magland.org
tags:
- blog
title: This Website
---

I've spent a lot of time working on the website you're looking at right now, and if you've been following, you'll know that it's gone through a *lot*. It all started about seven months ago, when I was taking my first steps in the small web, and wanted a place to share the things I found and the thoughts I had.

At the time I had a subscription with [Joplin](https://joplinapp.org/), which had a "publish" feature for making notes available on the web. It was cute and easy: write a note, publish it, and put the link on my Instagram story.

Eventually, after getting into a groove of consistently publishing these notes, I set up a small [WriteFreely](https://writefreely.org/) instance on my laptop. I bought the magland.org domain, and port-forwarded my makeshift server to the outer web. I had my own little place!

While WriteFreely is a great software with a lot of potential, it's not very customizable, a little janky, and very much still in beta. I used WriteFreely for a long time, formatting my posts in Markdown in the web editor. Eventually, frustrated with not being able to get the built in federation to work, I started looking for other blogging softwares.

I moved to [Known](https://withknown.com/), an Indieweb-centered CMS, but the main problem I ran into with that was that it didn't allow assigning past dates to posts, so importing my old logs wasn't possible. Otherwise, it was a nice little platform.

After playing around with React, which was way beyond me, I decided to try out Hugo, and I really liked it. It wasn't overwhelming for me, who knew code, but not web code. I was able to pick [a theme](https://themes.gohugo.io/), mess around with the css a bit, throw all my .md posts in a folder, edit a few headers, and voila!

Hugo is exactly what I was looking for. It's also able to be [indieweb-ified](https://www.amitgawande.com/2018/02/10/204300.html), which I'm looking forward to diving into. And adding content is very easy. I simply upload a post, build with `hugo`, and my nginx reverse proxy serves those built files. I love it!

Update (2024-10-07): I use 11ty now!