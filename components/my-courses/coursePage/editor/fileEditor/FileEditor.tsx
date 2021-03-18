import React from 'react';
import styles from '../CourseEditor.module.scss';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import { useTranslation } from '../../../../../i18n';

type Props = {
  selectedFiles: File[];
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFileRemove: (e: File) => void;
};

export const FileEditor: React.FC<Props> = ({ selectedFiles, onFileSelect, onFileRemove }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.attachementsContainer}>
      <div className={styles.sectionTitle}>{t('courses:attachFilesLabel')}</div>
      {selectedFiles.length !== 0 &&
        selectedFiles.map((file, idx) => {
          return (
            <div key={idx} className={styles.singleFileContainer}>
              <InsertDriveFileIcon color='primary' />
              <span>{file.name}</span>
              <ClearIcon
                onClick={() => onFileRemove(file)}
                className={styles.deleteIcon}
                color='secondary'
                fontSize='small'
              />
            </div>
          );
        })}
      <input
        color='primary'
        type='file'
        id='icon-button-file'
        onChange={(e) => onFileSelect(e)}
        style={{ display: 'none' }}
      />
      <label htmlFor='icon-button-file'>
        <Button
          className={styles.addFileButton}
          component='span'
          startIcon={<AddIcon />}
          size='large'
          color='primary'
        >
          {t('courses:addFileLabel')}
        </Button>
      </label>
    </div>
  );
};
