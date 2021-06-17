import React from 'react';
import Head from 'next/head';
import { withTranslation } from '../i18n';
import { CalendarContent } from '../components/calendar/CalendarContent';

function Calendar({ t }) {
  return (
    <div>
      <Head>
        <title>{t('calendar:title')}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <CalendarContent />
    </div>
  );
}

Calendar.getInitialProps = async () => ({
  namespacesRequired: ['calendar']
});

export default withTranslation()(Calendar);
