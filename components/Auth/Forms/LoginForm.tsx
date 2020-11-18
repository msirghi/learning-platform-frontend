import React, { FormEvent, useState } from 'react';
import { Button, LinearProgress, Typography, TextField } from '@material-ui/core';
import { useTranslation } from '../../../i18n';
import styles from '../../../styles/modules/Auth.module.scss';
import Link from '@material-ui/core/Link';
import { AlertType, AuthPage } from '../../../common/enums';

type Props = {
  onMessage: (type: AlertType, text: string) => void;
  onTabChange: (tab: AuthPage) => void;
};

function LoginForm({ onMessage, onTabChange }: Props) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      onMessage(AlertType.ERROR, t('auth:invalidCredentials'));
    }, 500);
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
