import React from 'react';
import styles from '../../styles/modules/Performance.module.scss';
import BulbIcon from '@material-ui/icons/EmojiObjects';

type Props = {
  message: string;
};

export const PageInfo: React.FC<Props> = ({ message }) => {
  return (
    <div className={styles.pageInfo}>
      <BulbIcon />
      <span>{message}</span>
    </div>
  );
};
