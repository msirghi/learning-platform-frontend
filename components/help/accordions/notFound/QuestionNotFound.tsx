import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import styles from './QuestionNotFound.module.scss';
import { QuestionConfirmationDialog } from '../confirmationDialog/ConfirmationDialog';
import { useSnackbar } from 'notistack';
import { useTranslation } from '../../../../i18n';

type Props = {
  searchInputValue: string;
};

export const QuestionNotFound: React.FC<Props> = ({ searchInputValue }) => {
  const [confirmationDialogOpen, setConfirmationDialogOpen] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const toggleConfirmationDialog = (val: boolean) => setConfirmationDialogOpen(val);

  const onDialogSubmit = () => {
    toggleConfirmationDialog(false);
    enqueueSnackbar(t('help:messageSentSuccessMessage'), { variant: 'success' });
  };

  return (
    <>
      <QuestionConfirmationDialog
        open={confirmationDialogOpen}
        onDialogSubmit={onDialogSubmit}
        handleClose={() => toggleConfirmationDialog(false)}
        searchInputValue={searchInputValue}
      />
      <div className={styles.notFoundContainer}>
        <div>{t('help:nothingWasFoundLabel')}</div>

        <div className={styles.buttonContainer}>
          <Button variant='outlined' color='primary' onClick={() => toggleConfirmationDialog(true)}>
            {t('help:sendMessageButtonLabel')}
          </Button>
        </div>
      </div>
    </>
  );
};
