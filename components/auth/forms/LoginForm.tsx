import React, { FormEvent, useEffect, useState } from 'react';
import { Button, LinearProgress, Typography, TextField } from '@material-ui/core';
import { useTranslation } from '../../../i18n';
import styles from '../../../styles/modules/Auth.module.scss';
import Link from '@material-ui/core/Link';
import { AlertType, AuthPage } from '../../../common/enums';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import app from '../../config/firebase';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../../../redux/actions/user/userAction';

/**
 * Login page props.
 */
type Props = {
  /**
   * Function for triggering the diplay of AlertMessage component.
   */
  onMessage: (type: AlertType, text: string) => void;
  /**
   * Function for changing the current tab.
   */
  onTabChange: (tab: AuthPage) => void;
};

/**
 * Login form page. Uses google recaptcha v3 to trigger actions.
 *
 * @version 0.1
 * @author [Sirghi Mihail](https://github.com/msirghi)
 */
function LoginForm({ onMessage, onTabChange }: Props) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    executeRecaptcha && executeRecaptcha('login');
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await handleSignIn();
    executeRecaptcha && await executeRecaptcha('login_submit');
  };

  const handleSignIn = async () => {
    try {
      const res = await app.auth().signInWithEmailAndPassword(email, password);
      setSubmitting(false);
      dispatch(setUserInfo({ email: res.user.email }));
      router.push('/home'
      );
    } catch (error) {
      onMessage(AlertType.ERROR, error.message);
      setSubmitting(false);
    }
  };

  return (
    <div>
      {isSubmitting && <LinearProgress />}
      <form onSubmit={onSubmit}>
        <TextField
          variant='outlined'
          name='email'
          label={t('auth:email')}
          inputProps={{
            'data-testid': 'email-field',
            'data-test': 'email',
            name: 'email'
          }}
          fullWidth
          margin='normal'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          variant='outlined'
          name='password'
          label={t('auth:password')}
          inputProps={{
            'data-testid': 'password-field',
            'data-test': 'password',
            name: 'password'
          }}
          fullWidth
          type={'password'}
          margin='normal'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Typography className={styles.link}>
          <Link href='#'>{t('auth:forgotPasswordLabel')}</Link>
        </Typography>

        <Typography className={styles.link}>
          {t('auth:dontHaveAnAccountLabel')}
          <Link onClick={() => onTabChange(AuthPage.REGISTER)} href='#'>
            {t('auth:signUp')}
          </Link>
        </Typography>

        <div className={styles.submitButton}>
          <Button
            type={'submit'}
            variant='contained'
            color='primary'
            data-testid='submit-button'
            data-test='submit-button'
            disabled={isSubmitting || !email || !password}
            className={styles.loginButton}
          >
            {t('auth:signIn')}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
