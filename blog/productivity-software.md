---
date: 2024-02-14T02:14:07Z
tags:
- blog
title: Productivity Software
---

note: this is a really old draft that got posted accidentally when I migrated to 11ty. I'm leaving it how it is with an update on my current configuration.

Theres something enrapturing about the concept of productivity systems. The idea that your output or success is not a result of the amount of work you're doing, but rather how you're doing it. That with just a small change, you could finally reach your full potential, be the perfect student, writer, employee, *anything*. It's an easy fantasy to fall into, especially when we're surrounded by people who have seemingly achieved these perfect systems, and rose above and beyond. "This one trick cured my procrastination," or "I reclaimed 4 hours of my day with this system."[^1]

Productivity Software, Personal Knowledge Management, Personal Productivty Systems, the "Second Brain," there are hundreds of claimed Holy Grails of knowledge mangament, and an entire business around it that has exploded in recent years on Youtube and TikTok. And they're all extremely tantalizing with their promises of streamlining and capturing knowledge, life optimization. Just a quick glance at some of the linked websites will make that clear.

My first introduction to note taking software and "knowledge organization" was seven years ago when I had built up a shared Google Drive with a few of my school friends. It brimmed with creativity, with more than a hundred seperate documents, mostly consisting of half-finished creative writing projects and angsty poetry. It was fantastic, though, and led me to creating an Evernote account for a personal, private space to write down my (sparse) imaginative musings.

Anyone who has ever used Evernote will understand why I started looking for something different. And thus began my deep dive down the note taker's rabbithole...

### Next up: Workflowy

Found on AlternativeTo.net, Workflowy is minimalist browser-based app focused on an infinite bullet-point lists. You start out with a single bullet-point from which you craft your own infrastructure, making heierachal groups for anything you need to jot down. I used Workflowy for a long time, and even shared it with my Grandpa, who still uses it to this day, five years since I introduced it to him. Workflowy is near-perfect, for those it works for, but I lost taste in it when I started prefering local software over the browser.

**Pros:**

* Web-based
* Minimalistic
* Freemium[^2]

**Cons:**

* Web-based
* Closed source

### Obsidian

Next to Notion, which I never tried, [Obsidian](https://obsidian.md) is the most well-known of the PKMS gaggle. It's very sleek-looking with a large host of features, such as a WYSIWYG editor, canvases, templates, graphs, and hundreds of extensions & themes. Obsidian introduced me to the wonders of Markdown, the format on which each note is based on (this post was written in it!).

The problem that I ran into with Obsidian is that it left you to design your own system. It provided you the tools for crafting frontmatter, adding data visualization, creating hierarchies, but left _you_ to do it all.

Did I really want to invest tens of hours into designing a system just to jot down my school assignments? At first, yeah! And it was *really* fun. But in two months all I had was a hand-crafted and poorly-designed organization system (and a cool looking graph). I still use Obsidian for large-scale projects, such as crafting my murder mystery, where I need to visually see connections between nodes, and lay it out with Obsidian's Canvas feature. But for the daily recording of thoughts and information, I needed something more minimal.

**Pros:**

* Extremely customizable
* Handles large numbers of notes well
* Notes are stored in clean, Markdown format
* Graphs & Canvases

**Cons:**

* Closed source :(
* High time investment

### Dendron

I needed something simple, something that didn't force me to learn new software, methods, and best practices, so [Dendron](https://www.dendron.so/) caught my eye as a VSCode extension, rather than a full fledged desktop app. I could create and manage my notes from the comfort of my code editor. Dendron had almost everything that Obsidian had, but unfortunately I had found it on the tail-end of the developers announcing they were finished with the project. It still works great, if you're looking for something integrated with VSCode, but when I found that they didn't support aliases for file linking, I knew it would never be added, so I jumped ship.

**Pros:**

* Open Source
* Lives in VSCode
* Stores in Markdown!
* Wide range of features (file linking, graphs, daily notes)
* Has its own publishing feature!

**Cons:**

* No file aliases
* Not beginner friendly

What I love Dendron for is that it introduced me to the [Digital Garden](https://maggieappleton.com/garden-history), specifically with its publishing feature, so for a while I messed around with Vim and [Emanote](https://github.com/srid/emanote) (a great little tool, I recommend it).

**At this point in my journey I'd realized that:**

1. I needed to take my notes in Markdown
2. Those Markdown files need to be accessible and clean
3. I needed some kind of visual medium of reading and exploring those notes

So, I learned how to use Vim, a terminal-based text-editor, and used Emanote for viewing. I could link to other notes, establish heierachy with simple folders, and view it all from my web browser. But then again, it was fun, rather than functional.

## What's the problem?

Why did it feel like my creativity, my urge to *create and learn* was still stagnant, even though I had tried everything? I'd tried so many softwares, tools, and solutions to manage and hold my knowledge rather than *actually fostering and growing it*. My wake-up call came in the form of [this youtube video](https://youtu.be/baKCC2uTbRc) that popped up in my feed one day.

In the words of @SHates in the comments:

> This video is exactly what I needed to hear. I've fallen into the trap of constantly looking for the perfect app and system at the cost of actually creating something meaningful.

So all this software-switching and maximization was all a wild, time-wasting goose chase? Not entirely, I *had* created meaningful things, but probably not as many as I could have. So what now? I still needed somewhere to write things down, so I turned to Joplin.

### Joplin

[Joplin](https://joplinapp.org/) is a great, Markdown based note taker. It has good feature parity between desktop and mobile, and has a sync service that generously has a student discount! It's got all the features of a basic markdown text editor, without all the bells and whistles of all the PKMS I didn't want to deal with. Notes are organized under notebooks, and can be sorted into tags.

Joplin met my need for a simple, no BS editor, and it felt good for a long time. Eventually, though, I found myself simply *writing things down* in a notebook I kept handy. It was easier that way, and with things constantly synced up, I always had what I needed.

**Pros:**

* Simple interface and basic features
* Nice sync service
* Markdown formatting
* Open source

**Cons:**

* Doesn't store notes as .md files in your ~/

### ~~What I'm using now~~ A Temporary Solution

I stopped using Joplin mid-summer last year for no particular reason. My subscription to their sync service had lapsed, and I didn't have much to type up anymore, as I'd switched primarily to using a leather journal. As School started up again though, and as I began writing this blog, I started keeping an eye out for "the new big tool" for notetaking. This post was written on [Notesnook](https://notesnook.com/), a software very similar to Joplin, but with more of a focus on privacy.

**Pros:**

* 99% feature parity desktop to mobile
* Sleek user interface
* Lots-a-features
* Open source

**Cons:**

* Still early in development
* A little awkward with Markdown

## Conclusion

It's easy to skimp out[^3] of recognizing that the amount of work we put into something is *probably* proportionate to what we get out, and much easier to blame our pace on not using the right tool. You could say the lesson learned here is to resort to absolute minimalism, set a timer, and write on Microsoft Notepad for 2 hours each day, but I don't think that's it.

I think the more important thing I learned is that my work pace is OK. I don't need to write 3 pages on every profound thought I've had and backlink it to 4 seperate quotes from 3 different philosophy novels, have it tagged properly, and indexed into my Zettelkasten (...and if that's your thing, go for it). All I need is a place for when I _do_ want to write something down, when I _want_ to expand on a thought or format a blog post.

The productivity carnival is really easy to get caught up in, and feels extremely exciting at first, but it's important to remember that maybe it's more about the thing you want to be productive about rather than how productive you're being right now. Make stuff, and make a lot of it, but do it for the sake of creation, not for productivity!

## What I'm REALLY Using Now (2024-10-07)

Whoosh! I forgot about this until someone mentioned it in my guestbook. I ditched Notesnook for pen and paper—it's just the best! When I do need it I use [Obsidian + Syncthing](/obsidianplussyncthingequalsawesome/). But I love my handy journal and pen!

[^1]: [Carrot Problems](https://www.atvbt.com/the-carrot-problem/)
[^2]: "Freemium, a portmanteau of the words 'free' and 'premium', is a pricing strategy by which a basic product or service is provided free of charge, but money (a premium) is charged for additional features" [Wikipedia](https://en.wikipedia.org/wiki/Freemium)
[^3]: Seriously, there are some phrases I swear I have never written in print my whole life