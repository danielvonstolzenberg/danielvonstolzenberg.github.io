module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('assets')
    return {
        passthroughFileCopy: true
    },
    module.exports = {
        dir: {
            input: "pages",
            includes: "temp",
            output: "docs"
        }
    }
 }