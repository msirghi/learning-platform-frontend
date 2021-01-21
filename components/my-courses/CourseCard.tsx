import React from 'react';
import styles from '../../styles/modules/MyCourses.module.scss';
import Button from '@material-ui/core/Button';
import { Course } from '../../common/types';
import { COURSE_DEFAULT_COVER_IMAGE } from '../../common/constants/common.constants';

type Props = {
  course: Course;
};

export const CourseCard: React.FC<Props> = ({
  course: { id, teacherImg, coverImg, name, description }
}) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImage}>
        <img src={coverImg || COURSE_DEFAULT_COVER_IMAGE} alt={description} />
      </div>
      <div className={styles.cardTeacherPhoto}>
        <img src={teacherImg} alt={name} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardContentTitle}>{name}</div>
        <div className={styles.cardContentDescription}>{description}</div>
      </div>
      <div className={styles.cardButtonContainer}>
        <Button variant='outlined' color='primary'>
          Enter
        </Button>
      </div>
    </div>
  );
};
