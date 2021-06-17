import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from '../../../i18n';
import styles from './NameChangeDialog.module.scss';

type Props = {
  open: boolean;
  toggleOpen: (val: boolean) => void;
  onSubmit: (firstName: string, lastName: string) => void;
};

export const NameChangeDialog: React.FC<Props> = ({ open, toggleOpen, onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    setFirstName('');
    setLastName('');
  }, [open]);

  return (
    <Dialog open={open} onClose={() => toggleOpen(false)}>
      <DialogTitle>{t('account:nameChangeDialogTitle')}</DialogTitle>
      <DialogContent>
        <DialogContentText>{t('account:nameChangeDialogDescription')}</DialogContentText>
        <TextField
          label={t('account:firstName')}
          fullWidth
          variant='outlined'
          value={firstName}
          inputProps={{
            'data-testid': 'firstname-field'
          }}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <div className={styles.lastNameField}>
          <TextField
            label={t('account:lastName')}
            fullWidth
            variant='outlined'
            value={lastName}
            inputProps={{
              'data-testid': 'lastname-field'
            }}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => toggleOpen(false)} color='primary'>
          {t('account:cancelButtonLabel')}
        </Button>
        <Button
          data-testid='submit-button'
          onClick={() => onSubmit(firstName, lastName)}
          color='primary'
          disabled={!firstName || !lastName}
        >
          {t('account:submitButtonLabel')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
