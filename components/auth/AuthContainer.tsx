import React, { useEffect, useState } from 'react';
import { withTranslation } from '../../i18n';
import styles from '../../styles/modules/Auth.module.scss';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AuthHeader from './AuthHeader';
import { AlertType, AuthPage } from '../../common/enums';
import { AlertMessage } from '../common/AlertMesssage';
import Head from 'next/head';
import RegisterForm from './forms/RegisterForm';
import LoginForm from './forms/LoginForm';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useRouter } from 'next/router';
import { FullscreenSpinner } from '../common/spinners/FullscreenSpinner';

/**
 * Auth container component. Includes auth form handler.
 *
 * @version 0.1
 * @author [Sirghi Mihail](https://github.com/msirghi)
 */
function AuthContainer({ t }) {
  const [currentTab, setCurrentTab] = useState<AuthPage>(AuthPage.LOGIN);
  const [message, setMessage] = useState<{ type: AlertType; text: string } | null>();
  const loggedInUser = useSelector((state: RootState) => state.user.email);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loggedInUser) {
      router.push('/home');
      return;
    }
    setLoading(false);
  }, []);

  const onTabChange = (tab: AuthPage) => {
    setMessage(null);
    setCurrentTab(tab);
  };

  const onMessage = (type: AlertType, text: string) => setMessage({ type, text });

  if (loading) {
    return <FullscreenSpinner />;
  }

  return (
    <>
      <Head>
        <title>
          {currentTab === AuthPage.REGISTER ? t('auth:registerTitle') : t('auth:loginTitle')}
        </title>
      </Head>
      <Grid container justify='center'>
        <div className={styles.authContainer}>
          <AuthHeader onTabChange={onTabChange} activeTab={currentTab} />
          {message && <AlertMessage type={message.type} message={message.text} />}
          <div>
            <Grid container justify='center'>
              <Grid xs={10} item>
                <div className={styles.formDescription}>
                  <Typography>
                    {t(
                      `auth:${
                        currentTab === AuthPage.REGISTER
                          ? 'registerFormDescription'
                          : 'loginDescription'
                      }`
                    )}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={10}>
                {currentTab === AuthPage.REGISTER && (
                  <RegisterForm onTabChange={(tab) => setCurrentTab(tab)} onMessage={onMessage} />
                )}
                {currentTab === AuthPage.LOGIN && (
                  <LoginForm onTabChange={onTabChange} onMessage={onMessage} />
                )}
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
    </>
  );
}

AuthContainer.getInitialProps = async () => ({
  namespacesRequired: ['auth']
});

export default withTranslation()(AuthContainer);
