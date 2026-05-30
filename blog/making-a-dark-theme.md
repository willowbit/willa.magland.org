---
title: "How I Made a Dark Theme"
date: 2025-02-28
draft: true
---

Creating and then implementing a dark theme for this website was a lot simpler than I thought. It still took me 3+ hours to figure it out, though. I love computers, but it really is a time consuming hobby.

Firstly, I picked a good background color for my dark background (I just stole one from another website that looked good). I chose `#262626`. Once I had that, I made a special dark version of my body class.

```
body {
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    font-size: 25px;
    line-height: 1.5em;
    font-family: "Atkinson Hyperlegible", sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: white;
    color: black;
}

body.dark {
    background-color: #262626;
    color: white;
}
```

Pretty easy! In order to make the other elements of my website to adapt, I used the [`inherit` keyword](https://developer.mozilla.org/en-US/docs/Web/CSS/inherit).

Next up was to make a button for switching between the two themes. For this, I used javascript. I created a folder titled "js" and modified `.eleventy.js` sure it would copy over into _site:

```eleventyConfig.addPassthroughCopy("js");```

Within the "js" folder, I started to write some javascript in `main.js`.

```
// Default theme (if it hasn't been set)
if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "light")
}

// Upon page loading, set theme to dark depending on theme
if (localStorage.getItem("theme") == "dark") {
  document.body.classList.toggle("dark");
}

// Changing the value of the theme key
function toggleTheme() {
  document.body.classList.toggle("dark");
  if (localStorage.getItem("theme") == "dark") {
    localStorage.setItem("theme", "light");
  }
  else if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  }
}

// Executed when user presses "theme-toggle" button
const btn = document.getElementById("theme-toggle")
btn.addEventListener("click", () => {
  toggleTheme();
})
```

For my website, I hid a `<button>` behind my profile picture and gave it a unique id with `id="theme-toggle"`, which I referenced in the script. In order to store the user's theme preference, we store a "theme" key in the browser's localStorage.

Finally, we need to reference this script in our html, which in my case is my layout.html template.

`<script src="/js/main.js"></script>`

**NOTE:** It's important to place this at the end of the document, such as after the <body> tag. This way, it will execute after the entire page loads, and it doesn't spit out an error.