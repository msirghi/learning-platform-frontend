import React, { useState } from 'react';
import styles from './AccountCard.module.scss';
import LockIcon from '@material-ui/icons/Lock';
import { IconButton, InputAdornment, Input, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { useTranslation } from '../../../i18n';

type Props = {
  toggleNameDialog: (val: boolean) => void;
  togglePasswordChangeDialog: (val: boolean) => void;
};

export const AccountCard: React.FC<Props> = ({ toggleNameDialog, togglePasswordChangeDialog }) => {
  const [email, setEmail] = useState('someemail@mail.com');
  const [emailChangeMode, setEmailChangeMode] = useState(false);
  const { t } = useTranslation();

  const toggleEmailChangeMode = (val: boolean) => setEmailChangeMode(val);

  return (
    <div className={styles.accountContentWrapper}>
      <div className={styles.accountCard}>
        <div className={styles.avatar}></div>
        <div className={styles.cardActions}>
          <div className={styles.name}>Name Surname</div>
          <div className={styles.requestChange} onClick={() => toggleNameDialog(true)}>
            {t('account:requestChange')}
          </div>

          <div className={styles.textField}>
            <Input
              disabled={!emailChangeMode}
              value={email}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton onClick={() => toggleEmailChangeMode(!emailChangeMode)}>
                    <EditIcon color='primary' />
                  </IconButton>
                </InputAdornment>
              }
            />

            {emailChangeMode && (
              <Button fullWidth color='primary'>
                {t('account:saveEmail')}
              </Button>
            )}
          </div>

          <div className={styles.changePassword} onClick={() => togglePasswordChangeDialog(true)}>
            <span>{t('account:changePassword')}</span>
            <LockIcon color='primary' />
          </div>
        </div>
      </div>
    </div>
  );
};
