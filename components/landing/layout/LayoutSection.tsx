import React from 'react';
import styles from './LayoutSection.module.scss';

export const LayoutSection = () => {
  return (
    <div className={styles.layoutWrapper}>
      <img src='/images/landing-desktop.png' className={styles.desktopLogo}/>
    </div>
  );
};
