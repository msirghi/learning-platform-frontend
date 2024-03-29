import React from 'react';
import styles from '../../../../styles/modules/MyGroup.module.scss';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { useTranslation } from '../../../../i18n';

type Props = {
  onBackClick: () => void;
  toggleSettings: () => void;
  online: number;
  total: number;
};

export const MobileChatHeader: React.FC<Props> = ({
  onBackClick,
  toggleSettings,
  online,
  total
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.mobileHeader}>
      <div>
        <IconButton onClick={() => onBackClick()}>
          <ArrowBackIcon className={styles.backIcon} />
        </IconButton>
      </div>
      <div>
        <div className={styles.groupName}>Group name</div>
        <div className={styles.stats}>
          <span>{total} {t('myGroup:members')}</span>
          {online > 0 && <span> / {online} {t('myGroup:online')}</span>}
        </div>
      </div>
      <div className={styles.settingsIcon}>
        <IconButton onClick={() => toggleSettings()}>
          <SettingsIcon />
        </IconButton>
      </div>
    </div>
  );
};
