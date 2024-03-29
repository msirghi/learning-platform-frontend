import React, { useEffect, useState } from 'react';
import { SiteWrapper } from '../common/SiteWrapper';
import dynamic from 'next/dynamic';
import { Lesson } from '../../common/types';
import { lessonMock } from '../../mocks/lessonMocks';
import { CalendarDialog } from './CalendarDialog';
import { PageInfo } from '../performance/PageInfo';
import { useTranslation } from '../../i18n';
import styles from '../../styles/modules/Calendar.module.scss';

const CalendarPage = dynamic(() => import('./Calendar'), {
  ssr: false
});

/**
 * Calendar page content container.
 * Includes calendar dialog toggle.
 *
 * @version 0.1
 * @author [Sirghi Mihail](https://github.com/msirghi)
 */
export const CalendarContent = () => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson>();
  const [lessons, setLessons] = useState<Lesson[]>();
  const { t } = useTranslation();

  useEffect(() => {
    setLessons(lessonMock);
  }, []);

  const selectLesson = (id: string) => {
    const lesson = lessons.find((lesson) => lesson.id === id);
    if (!lesson) {
      return;
    }
    setSelectedLesson(lesson);
  };

  const toggleDialog = () => setSelectedLesson(undefined);

  return (
    <SiteWrapper>
      <div className={styles.calendarPageInfo}>
        <PageInfo message={t('calendar:pageDescription')} />
      </div>
      <CalendarDialog
        open={!!selectLesson}
        toggleDialog={toggleDialog}
        selectedLesson={selectedLesson}
      />
      <CalendarPage selectLesson={selectLesson} />
    </SiteWrapper>
  );
};
