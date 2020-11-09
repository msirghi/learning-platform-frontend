import React, { useState } from 'react';
import { Button, LinearProgress, Typography } from '@material-ui/core';
import styles from '../../../styles/modules/Auth.module.scss';
import { useTranslation } from '../../../i18n';
import ValidationService from '../../../services/ValidationService';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import RegexContants from '../../../common/constants/regex.constants';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

interface Values {
  email: string;
  password: string;
  repeatPassword: string;
  firstName: string;
  lastName: string;
  checked: boolean | string;
}

function RegisterForm() {
  const { t } = useTranslation();
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const { register, handleSubmit, errors, getValues } = useForm<Values>();

  const onSubmit = (values: Values) => {
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 500);
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      {errors.checked && (
        <Typography color='secondary'>{t('auth:errorMessages.acceptTerms')}</Typography>
      )}

      {isSubmitting && (
        <div data-testid='progress'>
          <LinearProgress />
        </div>
      )}

      <TextField
        variant='outlined'
        name='email'
        label={t('auth:email')}
        inputProps={{
          ref: register({
            required: String(t('auth:errorMessages.required')),
            pattern: {
              value: RegexContants.EMAIL_REGEX,
              message: t('auth:errorMessages.invalidEmail')
            }
          }),
          'data-testid': 'email-field',
          name: 'email'
        }}
        data-test='email'
        fullWidth
        margin='normal'
        error={!!errors.email}
        helperText={errors.email && errors.email.message}
      />

      <TextField
        variant='outlined'
        type='text'
        label={t('auth:firstName')}
        name='firstName'
        error={!!errors.firstName}
        helperText={errors.firstName && errors.firstName.message}
        inputProps={{
          ref: register({
            required: String(t('auth:errorMessages.required')),
            pattern: {
              value: RegexContants.NAME_REGEX,
              message: t('auth:errorMessages.invalidName')
            }
          }),
          'data-testid': 'firstName-field'
        }}
        fullWidth
        margin='normal'
      />

      <TextField
        variant='outlined'
        type='text'
        label={t('auth:lastName')}
        name='lastName'
        fullWidth
        margin='normal'
        error={!!errors.lastName}
        helperText={errors.lastName && errors.lastName.message}
        inputProps={{
          ref: register({
            required: String(t('auth:errorMessages.required')),
            pattern: {
              value: RegexContants.NAME_REGEX,
              message: t('auth:errorMessages.invalidName')
            }
          }),
          'data-testid': 'lastName-field'
        }}
      />
      <TextField
        error={!!errors.password}
        helperText={
          (errors.password &&
            errors.password.type === 'validate' &&
            t('auth:errorMessages.weakPassword')) ||
          (errors.password && errors.password.message)
        }
        variant='outlined'
        type='password'
        label={t('auth:password')}
        name='password'
        fullWidth
        margin='normal'
        inputProps={{
          ref: register({
            required: String(t('auth:errorMessages.required')),
            validate: (val) => !ValidationService.isPasswordWeak(val)
          }),
          'data-testid': 'password-field'
        }}
      />

      <TextField
        error={!!errors.repeatPassword}
        helperText={
          (errors.repeatPassword &&
            errors.repeatPassword.type === 'validate' &&
            t('auth:errorMessages.passwordMismatch')) ||
          (errors.repeatPassword && errors.repeatPassword.message)
        }
        variant='outlined'
        type='password'
        label={t('auth:repeatPassword')}
        name='repeatPassword'
        fullWidth
        margin='normal'
        inputProps={{
          ref: register({
            required: String(t('auth:errorMessages.required')),
            validate: (val) => getValues().password === val
          }),
          'data-testid': 'repeatPassword-field'
        }}
      />

      <FormControlLabel
        control={
          <Checkbox
            inputProps={{ 'data-testid': 'checkbox' }}
            inputRef={register({ required: true })}
            name='checked'
            color={'primary'}
          />
        }
        label={String(t('auth:acceptTermsAndCondition'))}
      />

      <div className={styles.submitButton}>
        <Button
          type={'submit'}
          variant='contained'
          color='primary'
          disabled={isSubmitting}
          data-testid='submit-button'
          data-test='submit-button'
          className={styles.registerButton}
        >
          {t('auth:registerButtonLabel')}
        </Button>
      </div>
    </form>
  );
}

RegisterForm.getInitialProps = async () => {
  return {
    namespacesRequired: ['auth']
  };
};

export default RegisterForm;
