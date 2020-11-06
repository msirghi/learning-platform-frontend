import React, { useState } from 'react';
import { withTranslation } from '../../i18n';
import styles from '../../styles/Auth.module.scss';
import RegisterForm from './Forms/RegisterForm';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AuthHeader from './AuthHeader';
import LoginForm from './Forms/LoginForm';

function AuthContainer({ t }) {
  const [currentTab, setCurrentTab] = useState<number>(1);

  const onTabChange = (tab: number) => setCurrentTab(tab);

  return (
    <Grid container justify='center'>
      <div className={styles.authContainer}>
        <AuthHeader onTabChange={onTabChange} activeTab={currentTab}/>
        <div>
          <Grid container xs={12} justify='center'>
            <Grid xs={10} item>
              <div className={styles.formDescription}>
                <Typography>{t('auth:registerFormDescription')}</Typography>
              </div>
            </Grid>
            <Grid item xs={10} justify='center'>
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
  namespacesRequired: ['auth'],
});

export default withTranslation()(AuthContainer);
