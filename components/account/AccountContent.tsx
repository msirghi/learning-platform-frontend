import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { SiteWrapper } from '../common/SiteWrapper';
import styles from './AccountContent.module.scss';
import { AccountCard } from './card/AccountCard';
import { NameChangeDialog } from './nameChangeDialog/NameChangeDialog';
import { PasswordChangeDialog } from './passwordChangeDialog/PasswordChangeDialog';

export const AccountContent = () => {
  const [nameDialogOpened, setNameDialogOpened] = useState(false);
  const [passwordChangeDialogOpened, setPasswordChangeDialogOpened] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const onNameDialogSubmit = (firstName: string, lastName: string) => {
    // TODO: Backend request
    enqueueSnackbar('Your request was sent suceessfully.', { variant: 'success' });
    setNameDialogOpened(false);
  };

  return (
    <SiteWrapper>
      <div className={styles.accountContentWrapper}>
        <AccountCard
          toggleNameDialog={(val: boolean) => setNameDialogOpened(val)}
          togglePasswordChangeDialog={(val: boolean) => setPasswordChangeDialogOpened(val)}
        />

        <NameChangeDialog
          open={nameDialogOpened}
          toggleOpen={(val: boolean) => setNameDialogOpened(val)}
          onSubmit={onNameDialogSubmit}
        />

        <PasswordChangeDialog
          open={passwordChangeDialogOpened}
          toggleOpen={(val: boolean) => setPasswordChangeDialogOpened(val)}
        />
      </div>
    </SiteWrapper>
  );
};
