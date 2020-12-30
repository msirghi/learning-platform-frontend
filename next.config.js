const { nextI18NextRewrites } = require('next-i18next/rewrites');
const path = require('path');
const localeSubpaths = {};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
