import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import Grid from '@material-ui/core/Grid';
import styles from '../../styles/Auth.module.scss';
import { CheckboxWithLabel } from 'formik-material-ui';
import { withTranslation } from '../../i18n';

interface Values {
  email: string;
  password: string;
}

function RegisterForm({ t }) {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validate={(values) => {
        const errors: Partial<Values> = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
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
              disabled={isSubmitting}
              onClick={submitForm}
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
    namespacesRequired: ['auth'],
  };
};

export default withTranslation()(RegisterForm);
