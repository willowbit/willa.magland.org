---
date: 2024-05-25T18:49:53Z
tags:
  - blog
description: My solution to posting to this Hugo site from my phone.
title: Posting From Mobile With Syncthing
---
I gave up on my hacky, shameful "bundle of scripts" solution attempting to allow me to make posts from my phone. Instead, I've adopted the solution I use for practically everything: Syncthing!

Since I set up Syncthing remotely, I did have to alter the config in ~/.config/syncthing/ to host the web GUI on the local IP, *not* it's internal one.

This is the current workflow: I create a new text file in an Obsidian vault on my phone. I made a template with the basic YAML header stuff hugo generates, with "draft" set to true. The new post then syncs up to the content/blog/ directory on my server. To build the site I simply listen to a different tune: the little script you can see at the top of the page rebuilds the site whenever a new song is played on my Spotify (I'm really proud of that part; killing two birds with one stone).

We'll see if it works, and this post shows up!

Let me know if this helps you :)

Update (2024-10-07): I ditched this, am back to just VSCode SSH-ing in and writing there.