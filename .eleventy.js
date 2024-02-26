var moment = require('moment-timezone');

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("dateformat", function(dateIn) {
    return moment(dateIn).tz('GMT').format('DD MMM YYYY');
});
    eleventyConfig.setTemplateFormats([
      "md",
      "njk",
      "woff2",
      "png",
      "js",
      "css", // css is not yet a recognized template extension in Eleventy
      "pdf"
    ]);
  };
