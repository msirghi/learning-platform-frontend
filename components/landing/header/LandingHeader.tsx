import { Button } from '@material-ui/core';
import React from 'react';
import styles from './LandingHeader.module.scss';

export const LandingHeader = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logo}>
        <img src={'./images/register-logo-148.png'} width={53} height={53} />
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.link}>
          <Button>Register</Button>
        </div>
        <div className={styles.link}>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
};
