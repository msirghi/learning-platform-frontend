import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/modules/Home.module.scss';
import { useRouter } from 'next/router';
import { LandingContent } from '../components/landing/LandingContent';

function Home() {
  const router = useRouter();

  useEffect(() => {
    // router.push('/home');
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <LandingContent />
      </main>
    </div>
  );
}

export default Home;
