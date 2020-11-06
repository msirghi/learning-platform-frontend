import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { withTranslation } from '../i18n';

function Home({ t }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>{t('home:test')}</main>
    </div>
  );
}

Home.getInitialProps = async () => {
  return {
    namespaceRequired: ['home'],
  };
};

export default withTranslation()(Home);
