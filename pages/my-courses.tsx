import React from 'react';
import { SiteWrapper } from '../components/common/SiteWrapper';
import { MyCoursesContent } from '../components/my-courses/MyCoursesContent';
import styles from '../styles/modules/MyCourses.module.scss';

const MyCourses = () => {
  return (
    <div>
      <SiteWrapper>
        <div className={styles.myCoursesWrapper}>
          <MyCoursesContent />
        </div>
      </SiteWrapper>
    </div>
  );
};

export default MyCourses;
