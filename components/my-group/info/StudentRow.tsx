import { Tooltip } from '@material-ui/core';
import React from 'react';
import styles from '../../../styles/modules/MyGroup.module.scss';
import { Avatar } from './Avatar';

type Props = {
  name: string;
  isOnline?: boolean;
};

export const StudentRow: React.FC<Props> = ({ name, isOnline }) => {
  return (
    <div className={styles.studentRow}>
      <Avatar />
      <div className={styles.name}>{name}</div>
      {isOnline && (
        <Tooltip title='Online'>
          <div className={styles.onlineDot} />
        </Tooltip>
      )}
    </div>
  );
};
