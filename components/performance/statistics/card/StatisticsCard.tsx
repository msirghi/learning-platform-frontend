import React from 'react';
import styles from './StatisticsCard.module.scss';
import VisibilityIcon from '@material-ui/icons/Visibility';

type Props = {
  helperText?: string;
  primaryText: string;
  title: string;
  iconBackground: string;
};

export const StatisticsCard: React.FC<Props> = ({
  children,
  iconBackground,
  title,
  primaryText,
  helperText
}) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.upperRow}>
        <div className={styles.iconWrapper} style={{ backgroundColor: iconBackground }}>
          {children}
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.title}>{title}</div>
          <div className={styles.primaryText}>{primaryText}</div>
        </div>
      </div>
      <hr className={styles.divider}></hr>
      <div className={styles.helperTextWrapper}>
        <span>{helperText}</span>
      </div>
    </div>
  );
};
