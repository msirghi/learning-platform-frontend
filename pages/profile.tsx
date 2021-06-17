import React from 'react';
import Head from 'next/head';
import { useTranslation } from '../i18n';
import { SiteWrapper } from '../components/common/SiteWrapper';
import { ProfileContent } from '../components/profile/ProfileContent';

function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>{t('profile:title')}</title>
        <link rel='icon' href='favicon.ico' />
      </Head>
      <SiteWrapper>
        <ProfileContent />
      </SiteWrapper>
    </div>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['profile', 'common']
});

export default Home;
