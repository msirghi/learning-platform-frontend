import { Button, Fade, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Course } from '../../../common/types';
import styles from './CoursePage.module.scss';
import { CourseContent } from '../courseCard/CourseContent';
import { CourseInfo } from './CourseInfo';
import { TeacherInfo } from './TeacherInfo';
import { TopicFilter } from '../topicFilter/TopicFilter';
import { CourseEditor } from './editor/CourseEditor';
import { SnackbarProvider } from 'notistack';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useRouter } from 'next/router';
import sharedStyles from '../../../styles/modules/Shared.module.scss';
import { useTranslation } from '../../../i18n';

type Props = {
  course: Course;
};

export const CoursePage: React.FC<Props> = ({ course }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<Course>();
  const [editMode, setEditMode] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const searchInputHandler = (val: string) => {
    setSearchValue(val);
  };

  const onCourseAdd = () => setEditMode(true);

  const onBackButtonClick = () => {
    if (editMode) {
      setEditMode(false);
      return;
    }

    router.push('/myCourses');
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <Button className={sharedStyles.backButton} color='primary' onClick={onBackButtonClick}>
        <ArrowBackIcon color='primary' /> {t('courses:backButtonLabel')}
      </Button>

      <div className={styles.singlePage}>
        {editMode ? (
          <Fade in>
            <CourseEditor />
          </Fade>
        ) : (
          <Fade in>
            <Grid container spacing={4}>
              <Grid item lg={3} md={12} xs={12} sm={12}>
                <TeacherInfo course={course} />
              </Grid>
              <Grid item lg={9} md={12} xs={12} sm={12}>
                <CourseInfo course={course} onCourseAdd={onCourseAdd} />
                <TopicFilter value={searchValue} onChange={searchInputHandler} />
                <CourseContent />
              </Grid>
            </Grid>
          </Fade>
        )}
      </div>
    </SnackbarProvider>
  );
};
