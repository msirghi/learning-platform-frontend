import React, { useState } from 'react';
import { withTranslation } from '../../i18n';
import styles from '../../styles/modules/Auth.module.scss';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AuthHeader from './AuthHeader';
import LoginForm from './Forms/LoginForm';
import RegisterForm from './Forms/RegisterForm';

function AuthContainer({ t }) {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const onTabChange = (tab: number) => setCurrentTab(tab);

  return (
    <Grid container justify='center'>
      <div className={styles.authContainer}>
        <AuthHeader onTabChange={onTabChange} activeTab={currentTab} />
        <div>
          <Grid container justify='center'>
            <Grid xs={10} item>
              <div className={styles.formDescription}>
                <Typography>{t('auth:registerFormDescription')}</Typography>
              </div>
            </Grid>
            <Grid item xs={10}>
              {currentTab === 0 && <RegisterForm />}
              {currentTab === 1 && <LoginForm />}
            </Grid>
          </Grid>
        </div>
      </div>
    </Grid>
  );
}

AuthContainer.getInitialProps = async () => ({
  namespacesRequired: ['auth']
});

export default withTranslation()(AuthContainer);
