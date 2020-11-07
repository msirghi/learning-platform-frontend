import Head from 'next/head';
import styles from '../styles/modules/Home.module.scss';
import { withTranslation } from '../i18n';
import AuthContainer from '../components/Auth/AuthContainer';

function Register({ t }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{t('auth:title')}</title>
        <link rel='icon' href='../public/favicon.ico' />
      </Head>

      <AuthContainer />
    </div>
  );
}

Register.getInitialProps = async () => ({
  namespacesRequired: ['auth'],
});

export default withTranslation()(Register);
