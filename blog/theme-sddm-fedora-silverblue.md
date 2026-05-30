---
date: 2025-08-01
title: "How To Theme SDDM (In Fedora Silverblue) (or another atomic distro)"
---

For the past six months I've been using Fedora's atomic distributions on my laptop. So far, my experience has been extremely stable and happy. Atomic desktops offer an operating system that is *much harder* to break than others. I switched to Fedora in the first place because I wanted something that just worked, and an immutable desktop offers just that.

On an atomic desktop the root filesystem is mounted as read-only. This is great for dependability, but can be a little limiting when making changes outside of ~. I like to customize my desktop, so I thought I was at a dead end when I tried to theme SDDM. Fortunately, I was able to do it through /etc.

1. Download the theme you want and extract it somewhere. Mine is called gruvbox.

```
unzip ~/Downloads/gruvbox.zip
```

2. Make a `themes` folder in /etc/sddm/, then copy the extracted folder there.

```
sudo mkdir /etc/sddm/themes
cp -r ~/Downloads/gruvbox/ /etc/sddm/themes/
```

(the `-r` makes the operation recursive)

3. Edit the SDDM configuration file `/etc/sddm.conf` to the following (you may have to make it).

```
[Theme]
ThemeDir=/etc/sddm/themes/
Current=gruvbox # Change to the name of your theme (the same as the name of the folder)
```

4. run `systemctl restart sddm.service`, your changes should be applied!

You can preview the theme with `sddm-greeter --test-mode --theme /etc/sddm/themes/gruvbox`

It seems important not to put the themes/ directory in your ~/, as I was getting an error that it didn't exist.

Hope this helps somebody!

Before you leave, enjoy some beautiful art made by my friend Adam.

![An MS-PAINT drawing of a tree and a stream](/img/art.png)

Thank you, Adam.

Willa
