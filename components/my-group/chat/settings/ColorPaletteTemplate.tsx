import React from 'react';
import styles from '../../../../styles/modules/MyGroup.module.scss';
import Radio from '@material-ui/core/Radio';

type Props = {
  color: string;
  checked: boolean;
  onChange: () => void;
};

export const ColorPaletteTemplate: React.FC<Props> = ({ onChange, color, checked }) => {
  return (
    <div className={styles.colorPaletteTemplate} style={{ backgroundColor: color }}>
      <div className={styles.firstMessage} />
      <div className={styles.secondMessage} />
      <div className={styles.radionButton}>
        <Radio checked={checked} color='primary' onChange={() => onChange()} />
      </div>
    </div>
  );
};
