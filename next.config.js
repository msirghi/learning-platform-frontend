/* eslint-disable */
const { nextI18NextRewrites } = require('next-i18next/rewrites');
const path = require('path');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const withTM = require('next-transpile-modules')(['@fullcalendar']);

const localeSubpaths = {};

module.exports = withTM(
  withPWA({
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV === 'development',
      register: false
    },
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
      localeSubpaths
    },
    env: {
      RECAPTCHA_SITEKEY: process.env.RECAPTCHA_SITEKEY
    },
    serverRuntimeConfig: {
      PROJECT_ROOT: __dirname
    }
  })
);
