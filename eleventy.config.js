module.exports = async function(eleventyConfig) {
	// Configure Eleventy
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("img")
    eleventyConfig.addPassthroughCopy("**/*.jpg");
    eleventyConfig.addPassthroughCopy("**/*.png");
    eleventyConfig.addPassthroughCopy("bundle.js");

    // Configure date time
    const {DateTime} = require("luxon");
    eleventyConfig.addFilter("readableDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    // Make sure drafts don't get posted
    eleventyConfig.addCollection("published", (collection) => {
        return collection.getFilteredByTags("blog").filter((post) => !post.data.draft);
    });
    
    // Configure footnotes
    const footnotes = require('eleventy-plugin-footnotes')
    var md = require('markdown-it')()
        .use(require('markdown-it-footnote'));
    
    // Configure RSS
    const markdownItAnchor = require('markdown-it-anchor')
    const {
        feedPlugin
    } = require("@11ty/eleventy-plugin-rss");

    eleventyConfig.setLibrary("md", md, md.use(markdownItAnchor))

    eleventyConfig.addPlugin(feedPlugin, {
        type: "rss", // or "rss", "json"
        outputPath: "/feed.xml",
        collection: {
            name: "published", // iterate over `collections.posts`
            limit: 0, // 0 means no limit
        },
        metadata: {
            language: "en",
            title: "Willa's Blog",
            subtitle: "This is the feed of Willa's Blog.",
            base: "https://willa.magland.org/",
            author: {
                name: "Willa Magland",
                email: "wmagland@tuta.com", // Optional
            }
        }
    });
};