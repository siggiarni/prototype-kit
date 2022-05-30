module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./favicon.ico");
    eleventyConfig.addPassthroughCopy("./css/");
    eleventyConfig.addWatchTarget("./css/");
};
