/* eslint-disable */
const { nextI18NextRewrites } = require('next-i18next/rewrites');
const path = require('path');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const localeSubpaths = {};

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: false
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  env: {
    RECAPTCHA_SITEKEY: process.env.RECAPTCHA_SITEKEY
  }
});
