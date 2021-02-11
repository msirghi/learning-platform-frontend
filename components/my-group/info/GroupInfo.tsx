import React from 'react';
import styles from '../../../styles/modules/MyGroup.module.scss';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { IconButton } from '@material-ui/core';

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
  return (
    <div className={styles.groupInfoContainer}>
      <div>
        <div className={styles.header}>{groupName}</div>
        <div className={styles.subheader}>
          {totalMembers} members / {totalOnline} online
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
