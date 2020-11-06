import React from 'react';
import { withTranslation } from '../../i18n';
import styles from '../../styles/Auth.module.scss';
import RegisterForm from './RegisterForm';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function AuthContainer({ t }) {
  return (
    <Grid container justify='center'>
      <div className={styles.authContainer}>
        <div className={styles.authHeader}>
          <div
            className={`${styles.tab} ${styles.registerTab}`}
          >
            <span> {t('auth:registerTitle')} </span>
          </div>
          <div className={`${styles.inactiveTab} ${styles.tab}`}>
            <span>{t('auth:loginTitle')}</span>
          </div>
        </div>
        <div>
          <Grid container xs={12} justify='center'>
            <Grid xs={10} item justify='flex-start'>
              <div className={styles.formDescription}>
                <Typography>{t('auth:registerFormDescription')}</Typography>
              </div>
            </Grid>
            <Grid item xs={10} justify='center'>
              <RegisterForm />
            </Grid>
          </Grid>
        </div>
      </div>
    </Grid>
  );
}

AuthContainer.getInitialProps = async () => ({
  namespacesRequired: ['auth'],
});

export default withTranslation()(AuthContainer);
