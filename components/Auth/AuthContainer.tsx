import React, { useState } from 'react';
import { withTranslation } from '../../i18n';
import styles from '../../styles/modules/Auth.module.scss';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AuthHeader from './AuthHeader';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import { AlertType, AuthPage } from '../../common/enums';
import { AlertMessage } from '../commom/AlertMesssage';

function AuthContainer({ t }) {
  const [currentTab, setCurrentTab] = useState<AuthPage>(AuthPage.LOGIN);
  const [message, setMessage] = useState<{ type: AlertType; text: string } | null>();

  const onTabChange = (tab: AuthPage) => {
    setMessage(null);
    setCurrentTab(tab);
  };

  const onMessage = (type: AlertType, text: string) => setMessage({ type, text });

  return (
    <Grid container justify='center'>
      <div className={styles.authContainer}>
        <AuthHeader onTabChange={onTabChange} activeTab={currentTab} />
        {message && <AlertMessage type={message.type} message={message.text} />}
        <div>
          <Grid container justify='center'>
            <Grid xs={10} item>
              <div className={styles.formDescription}>
                <Typography>
                  {t(`auth:${currentTab === AuthPage.REGISTER ? 'registerFormDescription' : 'loginDescription'}`)}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={10}>
              {currentTab === AuthPage.REGISTER && (
                <RegisterForm onTabChange={(tab) => setCurrentTab(tab)} onMessage={onMessage} />
              )}
              {currentTab === AuthPage.LOGIN && <LoginForm onMessage={onMessage} />}
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
