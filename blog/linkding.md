---
date: 2024-05-09T02:47:13Z
description: Migrating from Omnivore to Linkding Bookmark Manager
tags:
- blog
title: 'Selfhosting Everything: Linkding Bookmark Manager'
---

Maybe one of the best decisions of my life when I started really exploring the web was signing up for Omnivore, a FOSS read-it-later app of the likes of Mozilla's Pocket, which has gone downhill over the years. Omnivore, with its browser extension and app, made it super easy to save articles on the fly. I knew that anything I saved, I would be able to find quickly.

Back when I did link roundups more often, I'd scroll through my Omnivore to see what I had found interesting over the past few weeks, because it was *all there*. 

The one thing that I ran into, though, is that Omnivore is a read-it-later app, when I was treating it as a bookmark manager. Most of what I was saving weren't even articles, they were just webpages and people's blogs I'd found! It felt sad watching the parser hopelessly try and display non-article formatted html.

Also, I wasn't super happy with Omnivore. It's a great piece of software, but in its age it *still* doesn't have an export feature, and there are little plans toward making it easily selfhostable.

And so today I jumped ship.

I found Linkding a few days ago, and it's great! Its simple, minimalistic interface gives the same feel as miniflux, which I also enjoy. It also has this really cool "shared bookmarks" feature that creates a public feed of certain links curated by the users.

Moving my links over from Omnivore wasn't a one-step process, but it was pretty easy. First, I exported all my data using Cito's [Omnivore Export](https://github.com/Cito/omnivore-export). For imports, Linkding follows the Netscape bookmark HTML format, so after looking over that, I whipped up a quick Python script to get the job done.

```
import json
from dateutil.parser import isoparse

with open("omnivore.json", 'r') as f:
	data = json.load(f) # load your exported data

html_file = open("newBookmarks.html", "a") # the file you'll import
html_file.write(
"""<!DOCTYPE NETSCAPE-Bookmark-file-1>

<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">

<TITLE>Bookmarks</TITLE>

<H1>Bookmarks</H1>

<DL><p>""") # header stuff

def format(time, title, url, descrip):
	print(f"{time}\n{title}\n{url}\n{descrip}")
	time = int(isoparse(time).timestamp()) # format the time from ISO to epoch
	try:
	    descrip = descrip.strip('\n')[:150] # I restricted the description to the first 150 characters, because some got a little crazy...
		html_string = f'''<DT><A HREF="{url}" ADD_DATE="{time}" PRIVATE="1" TOREAD="0" TAGS="">{title}</A>

<DD>"{descrip}”

'''

	except Exception: # some don't have descriptions
		html_string = f'<DT><A HREF="{url}" ADD_DATE="{time}" PRIVATE="1" TOREAD="0" TAGS="">{title}</A>\n\n'

html_file.write(html_string) # write it!

for x in data:
	format(x['createdAt'], x['title'], x['url'], x['description'])

html_file.write("\n\n</DL><p>") # close it out
```

...and then just imported it in Linkding's settings.

So yeah, super easy! I'm really excited to play around with it, especially the shared bookmarks. Also nice to stretch my Python, as it's gotten really rusty haha.

If I know you, and you're cool, and you want an account on https://links.magland.org, send me an email! It would make me very happy to host you.

Willa

2024-05-10 Edit: Just recently found out that Miniflux has built in support for saving articles to Linkding! The two work together so nicely!
