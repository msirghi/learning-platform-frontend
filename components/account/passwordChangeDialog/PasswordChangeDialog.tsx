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
import { AlertType } from '../../../common/enums';
import { useTranslation } from '../../../i18n';
import { AlertMessage } from '../../common/AlertMesssage';
import styles from './PasswordChangeDialog.module.scss';

type Props = {
  open: boolean;
  toggleOpen: (val: boolean) => void;
};

export const PasswordChangeDialog: React.FC<Props> = ({ open, toggleOpen }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState<string | undefined>();
  const { t } = useTranslation();

  const onSubmit = () => {
    setError(undefined);

    if (newPassword !== repeatPassword) {
      setError(t('account:passwordMismatch'));
      return;
    }

    // Backend call
  };

  useEffect(() => {
    setOldPassword('');
    setNewPassword('');
    setRepeatPassword('');
    setError(undefined);
  }, [open]);

  return (
    <Dialog open={open} onClose={() => toggleOpen(false)}>
      <DialogTitle>{t('account:passwordChangeDialogTitle')}</DialogTitle>
      <DialogContent>
        <DialogContentText>{t('account:passwordChangeDialogDescription')}</DialogContentText>
        {error && (
          <div className={styles.alert} data-testid='alert'>
            <AlertMessage type={AlertType.ERROR} message={error} />
          </div>
        )}
        <TextField
          label={t('account:oldPassword')}
          fullWidth
          variant='outlined'
          value={oldPassword}
          type='password'
          onChange={(e) => setOldPassword(e.target.value)}
          inputProps={{
            'data-testid': 'old-pass-field'
          }}
        />
        <div className={styles.field}>
          <TextField
            label={t('account:newPassword')}
            fullWidth
            variant='outlined'
            type='password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            inputProps={{
              'data-testid': 'new-pass-field'
            }}
          />
        </div>

        <div className={styles.field}>
          <TextField
            type='password'
            label={t('account:repeatNewPassword')}
            fullWidth
            variant='outlined'
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            inputProps={{
              'data-testid': 'repeat-pass-field'
            }}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => toggleOpen(false)} color='primary'>
          {t('account:cancelButtonLabel')}
        </Button>
        <Button
          data-testid='submit-btn'
          onClick={() => onSubmit()}
          color='primary'
          disabled={!oldPassword || !newPassword || !repeatPassword}
        >
          {t('account:submitButtonLabel')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
