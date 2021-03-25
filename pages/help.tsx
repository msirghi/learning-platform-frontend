import React from 'react';
import Head from 'next/head';
import { withTranslation } from '../i18n';
import { HelpContent } from '../components/help/HelpContent';

function Calendar({ t }) {
  return (
    <div>
      <Head>
        <title>{t('common:headerTitles.help')}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HelpContent />
    </div>
  );
}

Calendar.getInitialProps = async () => ({
  namespacesRequired: ['help']
});

export default withTranslation()(Calendar);
