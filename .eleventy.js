module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('assets')
    return {
        passthroughFileCopy: true
    },
    module.exports = {
        dir: {
            includes: "assets",
            output: "docs"
        }
    }
 }