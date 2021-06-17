import Head from 'next/head';
import React from 'react';
import { SiteWrapper } from '../components/common/SiteWrapper';
import { MyCoursesContent } from '../components/my-courses/MyCoursesContent';
import { useTranslation } from '../i18n';
import styles from '../styles/modules/MyCourses.module.scss';

const MyCourses = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>{t('common:headerTabs.myCourses')}</title>
        <link rel='icon' href='favicon.ico' />
      </Head>
      <SiteWrapper>
        <div className={styles.myCoursesWrapper}>
          <MyCoursesContent />
        </div>
      </SiteWrapper>
    </div>
  );
};

export default MyCourses;
