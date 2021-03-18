import React from 'react';
import styles from './CourseLesson.module.scss';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

type Props = {
  name: string;
  description: string;
  date: Date;
};

export const CourseLesson: React.FC<Props> = ({ name, description, date }) => {
  return (
    <div className={styles.courseLesson}>
      <div className={styles.decor}></div>

      <div className={styles.contentWrapper}>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.textIcon}>
          <InsertDriveFileIcon /> <span>File 1</span>
        </div>
        <div className={styles.textIcon}>
          <InsertDriveFileIcon /> <span>File 2</span>
        </div>
        <div className={styles.date}>{date.toLocaleDateString()}</div>
      </div>
    </div>
  );
};
