/* eslint-disable */
const { nextI18NextRewrites } = require('next-i18next/rewrites');
const path = require('path');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const localeSubpaths = {};

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
});
