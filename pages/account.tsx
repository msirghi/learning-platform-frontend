import React from 'react';
import Head from 'next/head';
import styles from '../styles/modules/Auth.module.scss';
import { withTranslation } from '../i18n';
import { AccountContent } from '../components/account/AccountContent';

function Account({ t }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{t('auth:title')}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AccountContent />
    </div>
  );
}

Account.getInitialProps = async () => ({
  namespacesRequired: ['account']
});

export default withTranslation()(Account);
