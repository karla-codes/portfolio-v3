module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/sass/');
  eleventyConfig.addPassthroughCopy('./src/css');

  return {
    // define directories
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
