import { Avatar, Chip } from '@material-ui/core';
import React from 'react';
import { LessonPlatform } from '../../../../common/enums';
import styles from '../editor/CourseEditor.module.scss';
import DoneIcon from '@material-ui/icons/Done';

type Props = {
  selectedPlatform: LessonPlatform;
  label: string;
  isActive: boolean;
  onClick: (platform: LessonPlatform) => void;
};

export const PlatformBadge: React.FC<Props> = ({ selectedPlatform, isActive, label, onClick }) => {
  return (
    <div>
      <Chip
        className={styles.chip}
        avatar={<Avatar>{label.toUpperCase().charAt(0)}</Avatar>}
        label={label}
        color={isActive ? 'primary' : 'default'}
        onClick={() => onClick(selectedPlatform)}
        onDelete={() => {}}
        deleteIcon={isActive ? <DoneIcon /> : <></>}
      />
    </div>
  );
};
