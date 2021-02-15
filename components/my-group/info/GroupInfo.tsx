import React from 'react';
import styles from '../../../styles/modules/MyGroup.module.scss';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { IconButton } from '@material-ui/core';
import { useTranslation } from '../../../i18n';

type Props = {
  totalMembers: number;
  totalOnline: number;
  groupName: string;
  showChevron?: boolean;
  chevronDown?: boolean;
  onChevronClick?: () => void;
};

export const GroupInfo: React.FC<Props> = ({
  groupName,
  totalMembers,
  totalOnline,
  showChevron,
  chevronDown,
  onChevronClick
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.groupInfoContainer}>
      <div>
        <div className={styles.header}>{groupName}</div>
        <div className={styles.subheader}>
          {totalMembers} {t('myGroup:members')} / {totalOnline} {t('myGroup:online')}
        </div>
      </div>
      {showChevron && (
        <div className={styles.chevron}>
          <IconButton onClick={() => onChevronClick()}>
            {chevronDown ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </div>
      )}
    </div>
  );
};
