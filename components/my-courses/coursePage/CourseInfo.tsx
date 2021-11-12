import React from 'react';
import { Course } from '../../../common/types';
import styles from './CoursePage.module.scss';
import StarIcon from '@material-ui/icons/Star';
import { Button } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useTranslation } from '../../../i18n';
import AddIcon from '@material-ui/icons/ExposurePlus1';

type Props = {
  course: Course;
  onCourseAdd: () => void;
};

export const CourseInfo: React.FC<Props> = ({ course: { name, description }, onCourseAdd }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.courseInfo}>
      <div className={styles.header}>
        <div className={styles.name}>{name}</div>
        <Button variant='outlined' color='secondary'>
          <ExitToAppIcon /> {t('courses:quitCourse')}
        </Button>
      </div>
      <div className={styles.description}>{description}</div>

      <div className={styles.textIcon}>
        <StarIcon color='primary' />
        <span>{t('courses:seeMyGrades')}</span>
      </div>

      <div className={styles.textIcon}>
        <AddIcon color='primary' />
        <span onClick={onCourseAdd}>{t('courses:addNewLessonLabel')}</span>
      </div>
    </div>
  );
};
