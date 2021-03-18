import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTranslation } from '../../../../../i18n';

type Props = {
  message: string;
  onSubmit: () => void;
  onCancel: () => void;
  open: boolean;
};

export const ConfirmationDialog: React.FC<Props> = ({ open, message, onSubmit, onCancel }) => {
  const { t } = useTranslation();

  return (
    <div>
      <Dialog
        open={open}
        onClose={onCancel}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{t('courses:confirmationDialogTitle')}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color='secondary' variant='outlined'>
            {t('courses:cancel')}
          </Button>
          <Button onClick={onSubmit} color='primary' variant='outlined'>
            {t('courses:continue')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
