/* eslint-disable */
const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default()
  ? require('next/config').default().publicRuntimeConfig
  : { localeSubpaths: {} };
import { Trans as OriginalTrans } from 'react-i18next';
import i18n from 'i18next';

const path = require('path');

export const nextI18next = new NextI18Next({
  otherLanguages: ['en', 'ru'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales')
});

export const appWithTranslation = nextI18next.appWithTranslation;
export const Trans = nextI18next.Trans as typeof OriginalTrans;
export const withNamespaces = nextI18next.withNamespaces;
export const useTranslation = nextI18next.useTranslation;
export const withTranslation = nextI18next.withTranslation;

export default i18n;
