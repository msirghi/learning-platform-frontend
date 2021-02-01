import React from 'react';
import { Course } from '../../common/types';
import styles from '../../styles/modules/MyCourses.module.scss';
import StarIcon from '@material-ui/icons/Star';
import { Button } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useTranslation } from '../../i18n';

type Props = {
  course: Course;
};

export const CourseInfo: React.FC<Props> = ({ course: { name, description } }) => {
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
    </div>
  );
};
