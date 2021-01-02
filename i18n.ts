/* eslint-disable */
const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
import { Trans as OriginalTrans } from 'react-i18next';

export const nextI18next = new NextI18Next({
  otherLanguages: ['en', 'ru'],
  localeSubpaths,
  localePath: 'static/locales'
});

export const appWithTranslation = nextI18next.appWithTranslation;
export const Trans = nextI18next.Trans as typeof OriginalTrans;
export const withNamespaces = nextI18next.withNamespaces;
export const useTranslation = nextI18next.useTranslation;
export const withTranslation = nextI18next.withTranslation;
