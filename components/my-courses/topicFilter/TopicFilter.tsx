import React from 'react';
import { TextField } from '@material-ui/core';
import styles from './TopicFilter.module.scss';
import { useWindowSize } from '../../common/hooks/useWindowResize';
import { useTranslation } from '../../../i18n';

type Props = {
  value: string;
  onChange: (val: string) => void;
};

export const TopicFilter: React.FC<Props> = ({ value, onChange }) => {
  const [width] = useWindowSize();
  const { t } = useTranslation();

  return (
    <div className={styles.searchFieldWrapper}>
      <div className={styles.field}>
        <TextField
          label={t('courses:findTopic')}
          fullWidth={width < 768}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};
