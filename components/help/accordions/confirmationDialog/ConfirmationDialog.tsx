import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTranslation } from '../../../../i18n';

type Props = {
  open: boolean;
  handleClose: () => void;
  searchInputValue: string;
  onDialogSubmit: () => void;
};

export const QuestionConfirmationDialog: React.FC<Props> = ({
  open,
  handleClose,
  searchInputValue,
  onDialogSubmit
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <Dialog
        maxWidth='lg'
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{t('help:confirmationDialog.title')}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            <div>
              <div>{t('help:confirmationDialog.messageWillBeSentTitle')}:</div>
              <div>
                <b>{searchInputValue}</b>
              </div>
              <div>{t('help:confirmationDialog.confirmYourAction')}</div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={handleClose} color='secondary'>
            {t('help:confirmationDialog.cancelButtonLabel')}
          </Button>
          <Button variant='outlined' onClick={onDialogSubmit} color='primary'>
            {t('help:confirmationDialog.confirmButtonLabel')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
