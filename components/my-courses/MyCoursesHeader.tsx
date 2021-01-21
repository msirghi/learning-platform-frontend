import React from 'react';
import styles from '../../styles/modules/MyCourses.module.scss';
import BulbIcon from '@material-ui/icons/EmojiObjects';
import { CourseFilter } from './CourseFilter';

type Props = {
  onSearchInputChange: (val: string) => void;
  searchValue: string;
};

export const MyCoursesHeader: React.FC<Props> = ({ onSearchInputChange, searchValue }) => {
  return (
    <div className={styles.myCoursesHeader}>
      <div className={styles.myCoursesHeaderLeftWrapper}>
        <BulbIcon />
        <span>Lorem ipsum dolor sit amet.</span>
      </div>
      <CourseFilter onSearchInputChange={onSearchInputChange} searchValue={searchValue} />
    </div>
  );
};
