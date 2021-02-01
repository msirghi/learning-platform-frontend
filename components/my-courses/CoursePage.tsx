import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Course } from '../../common/types';
import styles from '../../styles/modules/MyCourses.module.scss';
import { CourseContent } from './CourseContent';
import { CourseInfo } from './CourseInfo';
import { TeacherInfo } from './TeacherInfo';
import { TopicFilter } from './TopicFilter';

type Props = {
  course: Course;
};

export const CoursePage: React.FC<Props> = ({ course }) => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const searchInputHandler = (val: string) => {
    setSearchValue(val);
  };

  return (
    <div className={styles.singlePage}>
      <Grid container spacing={4}>
        <Grid item lg={3} md={12} xs={12} sm={12}>
          <TeacherInfo course={course} />
        </Grid>
        <Grid item lg={9} md={12} xs={12} sm={12}>
          <CourseInfo course={course} />
          <TopicFilter value={searchValue} onChange={searchInputHandler} />
          <CourseContent />
        </Grid>
      </Grid>
    </div>
  );
};
