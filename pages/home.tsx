import React from 'react';
import Head from 'next/head';
import { useTranslation } from '../i18n';
import { SiteWrapper } from '../components/common/SiteWrapper';
import { HomeContent } from '../components/home/HomeContent';

function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>{t('home:title')}</title>
        <link rel='icon' href='favicon.ico' />
      </Head>
      <SiteWrapper>
        <HomeContent />
      </SiteWrapper>
    </div>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['home', 'common']
});

export default Home;
