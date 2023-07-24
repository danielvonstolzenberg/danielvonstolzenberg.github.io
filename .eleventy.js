const { DateTime } = require("luxon");
const pluginSEO = require("eleventy-plugin-seo");

module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    // Templates:
    "html",
    "liquid",
    "md",
    // Static Assets:
    "css",
    "jpeg",
    "jpg",
    "png",
  ]);
    eleventyConfig.addPassthroughCopy('assets');

    const seo = require("./src/seo.json");
 
    eleventyConfig.addPlugin(pluginSEO, seo);
  
    // Filters let you modify the content https://www.11ty.dev/docs/filters/
    eleventyConfig.addFilter("htmlDateString", dateObj => {
      return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
    });
  
    eleventyConfig.setBrowserSyncConfig({ ghostMode: false });

    eleventyConfig.addCollection("posts", addCollection("posts"))
  

  function addCollection(collectionName){
    return function(collection){
      const coll = collection
      .getFilteredByTag(collectionName)
      .sort((a, b) => b.data.date - a.data.date);

    // From: https://github.com/11ty/eleventy/issues/529#issuecomment-568257426 
    // Adds {{ prevPost.url }} {{ prevPost.data.title }}, etc, to our njks templates
    for (let i = 0; i < coll.length; i++) {
      const prevPost = coll[i - 1];
      const nextPost = coll[i + 1];

      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }

    return coll;
    }
  }

    return {
        dir: {
            input: "src",
            includes: "temp",
            output: "build"
        }
    }
 }