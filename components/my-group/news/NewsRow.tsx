import React from 'react';
import styles from '../../../styles/modules/MyGroup.module.scss';
import dateFormat from 'dateformat';

type Props = {
  title: string;
  description: string;
  date: Date;
  author: string;
};

export const NewsRow: React.FC<Props> = ({ title, description, date, author }) => {
  return (
    <div className={styles.newsRow}>
      <div className={styles.message}>{title}</div>
      <div className={styles.message}>{description}</div>
      <div className={styles.info}>
        <div>{author}</div>
        <div>{dateFormat(date, 'mediumDate')}</div>
      </div>
    </div>
  );
};
