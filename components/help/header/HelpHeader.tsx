import { InputAdornment, TextField } from '@material-ui/core';
import React from 'react';
import styles from './HelpHeader.module.scss';
import SearchIcon from '@material-ui/icons/Search';
import { useTranslation } from '../../../i18n';

type Props = {
  onSearchInputChange: (val: string) => void;
  searchInputValue: string;
};

export const HelpHeader: React.FC<Props> = ({ searchInputValue, onSearchInputChange }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.headerContainer}>
      <img src='images/help-primary.png' />

      <div className={styles.searchContainer}>
        <div className={styles.title}>{t('help:primaryTitle')}</div>
        <TextField
          className={styles.inputField}
          variant='outlined'
          value={searchInputValue}
          onChange={(e) => onSearchInputChange(e.target.value)}
          placeholder={t('help:searchInputTitle')}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </div>
    </div>
  );
};
