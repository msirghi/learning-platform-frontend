import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress } from '@material-ui/core';
import { TextField, CheckboxWithLabel } from 'formik-material-ui';
import styles from '../../../styles/modules/Auth.module.scss';
import { useTranslation } from '../../../i18n';
import ValidationService from '../../../services/ValidationService';

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

  const onSubmit = () => {};

  return (
    <Formik
      validateOnChange
      initialValues={{
        email: '',
        password: '',
        repeatPassword: '',
        firstName: '',
        lastName: '',
        checked: false
      }}
      validate={(values) => {
        const errors: Partial<Values> = {};
        const { email, firstName, lastName, password, repeatPassword, checked } = values;
        if (!values.email) {
          errors.email = t('auth:errorMessages.required');
        } else if (!ValidationService.isEmailValid(email)) {
          errors.email = t('auth:errorMessages.invalidEmail');
        }

        if (!firstName) {
          errors.firstName = t('auth:errorMessages.required');
        } else if (!ValidationService.isNameValid(firstName)) {
          errors.firstName = t('auth:errorMessages.invalidName');
        }

        if (!lastName) {
          errors.lastName = t('auth:errorMessages.required');
        } else if (!ValidationService.isNameValid(lastName)) {
          errors.lastName = t('auth:errorMessages.invalidName');
        }

        if (!password) {
          errors.password = t('auth:errorMessages.required');
        } else if (ValidationService.checkPasswordStrength(password) === 'Weak') {
          errors.password = t('auth:errorMessages.weakPassword');
        } else if (password !== repeatPassword) {
          errors.repeatPassword = t('auth:errorMessages.passwordMismatch');
        }

        if (!checked) {
          errors.checked = String(t('auth:errorMessages.acceptTerms'));
        }
        console.log('errors :>> ', errors);
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({
        submitForm,
        isSubmitting,
        values: { checked, repeatPassword, lastName, firstName, password, email }
      }) => (
        <Form>
          <Field
            variant='outlined'
            component={TextField}
            name='email'
            type='email'
            label={t('auth:email')}
            fullWidth
            margin='normal'
          />
          <Field
            variant='outlined'
            component={TextField}
            type='text'
            label={t('auth:firstName')}
            name='firstName'
            fullWidth
            margin='normal'
          />
          <Field
            variant='outlined'
            component={TextField}
            type='text'
            label={t('auth:lastName')}
            name='lastName'
            fullWidth
            margin='normal'
          />
          <Field
            variant='outlined'
            component={TextField}
            type='password'
            label={t('auth:password')}
            name='password'
            fullWidth
            margin='normal'
          />
          <Field
            variant='outlined'
            component={TextField}
            type='password'
            label={t('auth:repeatPassword')}
            name='repeatPassword'
            fullWidth
            margin='normal'
          />

          <Field
            component={CheckboxWithLabel}
            color={'primary'}
            type='checkbox'
            name='checked'
            Label={{ label: t('auth:acceptTermsAndCondition') }}
          />

          {isSubmitting && <LinearProgress />}
          <div className={styles.submitButton}>
            <Button
              variant='contained'
              color='primary'
              disabled={
                !firstName ||
                !lastName ||
                !checked ||
                !email ||
                !password ||
                !repeatPassword ||
                isSubmitting
              }
              onClick={submitForm}
              className={styles.registerButton}
            >
              {t('auth:registerButtonLabel')}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

RegisterForm.getInitialProps = async () => {
  return {
    namespacesRequired: ['auth']
  };
};

export default RegisterForm;
