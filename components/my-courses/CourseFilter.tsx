import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import styles from '../../styles/modules/MyCourses.module.scss';
import { useTranslation } from '../../i18n';

type Props = {
  onSearchInputChange: (val: string) => void;
  searchValue: string;
};

export const CourseFilter: React.FC<Props> = ({ searchValue, onSearchInputChange }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.myCoursesHeaderRightWrapper}>
      <TextField
        size='small'
        label={t('courses:searchCourse')}
        onChange={(e) => onSearchInputChange(e.target.value)}
        value={searchValue}
      />
      <IconButton>
        <FilterListIcon />
      </IconButton>
    </div>
  );
};
