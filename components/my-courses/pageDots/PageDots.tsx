import React from 'react';
import styles from './PageDots.module.scss';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

type Props = {
  amount: number;
  currentTab: number;
  onPageChange: (val: number) => void;
  showDots: boolean;
};

export const PageDots: React.FC<Props> = ({ amount, currentTab, onPageChange, showDots }) => {
  return (
    <div className={styles.pageDotsWrapper}>
      <IconButton onClick={() => onPageChange(currentTab - 1)} disabled={currentTab === 1}>
        <ArrowBackIcon />
      </IconButton>
      {showDots &&
        [...Array(amount)].map((_, idx) => {
          return (
            <div
              onClick={() => onPageChange(idx + 1)}
              key={idx}
              className={`${styles.dot} ${currentTab === idx + 1 && styles.active}`}
            />
          );
        })}
      <IconButton onClick={() => onPageChange(currentTab + 1)} disabled={currentTab === amount}>
        <ArrowForwardIcon />
      </IconButton>
    </div>
  );
};
