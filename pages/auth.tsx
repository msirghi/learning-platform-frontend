import React from 'react';
import Head from 'next/head';
import styles from '../styles/modules/Auth.module.scss';
import { withTranslation } from '../i18n';
import AuthContainer from '../components/auth/AuthContainer';

function Register({ t }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{t('auth:title')}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.registerLogo}>
        <img src='/images/register-logo-148.png' alt={'site-logo'} />
      </div>

      <AuthContainer />
    </div>
  );
}

Register.getInitialProps = async () => ({
  namespacesRequired: ['auth']
});

export default withTranslation()(Register);
