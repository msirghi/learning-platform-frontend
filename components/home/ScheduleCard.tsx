import React from 'react';
import styles from '../../styles/modules/Home.module.scss';
import { LessonRow } from './LessonRow';
import { LessonStatus } from '../../common/enums';
import { lessonMock } from '../../mocks/lessonMocks';
import { useTranslation } from '../../i18n';

export const ScheduleCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.scheduleContainer}>
      <div className={styles.scheduleHeader}>
        <div className={styles.scheduleDate}>
          <div className={styles.scheduleDateNumber}>{new Date().getDate()}</div>
          <div className={styles.scheduleDateMonth}>
            {new Date().toLocaleDateString('default', { month: 'short' })}
          </div>
        </div>
        <div className={styles.scheduleHeaderText}>
          <div>{t('home:scheduleCard.welcomeBack')}, Nicolay.</div>
          <div>
            {t('home:scheduleCard.todayYouHave')} 4 {t('home:scheduleCard.lessons')}.
          </div>
        </div>
      </div>

      <div className={styles.scheduleContent}>
        <div className={styles.scheduleContentHeader}>{t('home:scheduleCard.scheduleForThisDay')}:</div>
        {lessonMock.map((lesson, idx) => {
          let lineClassname = styles.scheduleContentVerticalLine;
          if (lesson.status !== LessonStatus.ENDED) {
            lineClassname += ` ${styles.scheduleContentVerticalLineNotEnded}`;
          }
          return (
            <div key={lesson.id} className={styles.scheduleContentLessonRow}>
              <LessonRow lesson={lesson} />
              {idx !== lessonMock.length - 1 && <div className={lineClassname} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};
