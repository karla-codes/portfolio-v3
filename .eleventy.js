module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/sass/');
  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addWatchTarget('./src/fonts/');
  eleventyConfig.addPassthroughCopy('./src/fonts');
  eleventyConfig.addWatchTarget('./src/img/');
  eleventyConfig.addPassthroughCopy('./src/img');

  return {
    // define directories
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
