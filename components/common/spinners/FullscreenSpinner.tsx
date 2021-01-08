import { useTheme } from '@material-ui/core';
import React from 'react';
import { JellyfishSpinner } from 'react-spinners-kit';
import styles from '../../../styles/modules/Shared.module.scss';

export const FullscreenSpinner: React.FC = () => {
  const theme = useTheme();

  return (
    <div className={styles.spinnerFullscreenContainer}>
      <div className={styles.spinnerContent}>
        <JellyfishSpinner size={220} color={theme.palette.primary.main} />
        <div className={styles.spinnerText}>Loading...</div>
      </div>
    </div>
  );
};
