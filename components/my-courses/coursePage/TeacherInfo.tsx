import React from 'react';
import styles from './CoursePage.module.scss';
import MailIcon from '@material-ui/icons/Mail';
import { Course } from '../../../common/types';

type Props = {
  course: Course;
};

export const TeacherInfo: React.FC<Props> = ({ course }) => {
  const { name, teacherImg, teacherName } = course;

  return (
    <div className={styles.info}>
      <img className={styles.teacherImage} src={teacherImg} alt={name} />
      <div className={styles.teacherName}>{teacherName}</div>

      <div className={styles.teacherInfo}>
        <div className={styles.textIcon}>
          <img src='/icons/linkedin.svg' alt={'linkedin'} />
          <span>LinkedIn</span>
        </div>

        <div className={styles.textIcon}>
          <MailIcon color='primary' />
          <span>teacher@mail.com</span>
        </div>
      </div>
    </div>
  );
};
