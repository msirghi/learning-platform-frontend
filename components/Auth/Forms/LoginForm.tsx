import React from 'react';
import { Button, LinearProgress, Typography, TextField } from '@material-ui/core';
import { useTranslation } from '../../../i18n';
import styles from '../../../styles/modules/Auth.module.scss';
import Link from '@material-ui/core/Link';

function LoginForm() {
  const { t } = useTranslation();

  return (
    <div>
      <form>
        <TextField
          variant='outlined'
          name='email'
          label={t('auth:email')}
          inputProps={{
            'data-testid': 'email-field',
            name: 'email'
          }}
          data-test='email'
          fullWidth
          margin='normal'
        />

        <TextField
          variant='outlined'
          name='password'
          label={t('auth:password')}
          inputProps={{
            'data-testid': 'password-field',
            name: 'password'
          }}
          data-test='password'
          fullWidth
          type={'password'}
          margin='normal'
        />

        <Typography className={styles.link}>
          <Link href='#'>{t('auth:forgotPasswordLabel')}</Link>
        </Typography>

        <Typography className={styles.link}>
          {t('auth:dontHaveAnAccountLabel')}
          <Link href='#'>{t('auth:signUp')}</Link>
        </Typography>

        <div className={styles.submitButton}>
          <Button
            type={'submit'}
            variant='contained'
            color='primary'
            data-testid='submit-button'
            data-test='submit-button'
            className={styles.registerButton}
          >
            {t('auth:signIn')}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
