import React from 'react';
import { LessonStatus } from '../../common/enums';
import { Lesson } from '../../common/types';
import styles from '../../styles/modules/Home.module.scss';
import { useTranslation } from '../../i18n';
import Tooltip from '@material-ui/core/Tooltip';

type Props = {
  /**
   * Lesson to display.
   */
  lesson: Lesson;
};

/**
 * Lesson row in 'Schedule' card on home page.
 * Depending on lesson status, renders shapes with different colors.
 *
 * @version 0.1
 * @author [Sirghi Mihail](https://github.com/msirghi)
 */
export const LessonRow: React.FC<Props> = ({ lesson: { status, time, title, topic } }) => {
  let shapeClassName = styles.lessonRowStatusShape;
  const { t } = useTranslation();

  if (status === LessonStatus.ONGOING) {
    shapeClassName += ` ${styles.lessonRowStatusShapeOngoing}`;
  } else if (status === LessonStatus.NOT_STARTED) {
    shapeClassName += ` ${styles.lessonRowStatusShapeNotStarted}`;
  }

  return (
    <div>
      <div className={styles.lessonRowContainer}>
        <div className={styles.lessonRowTime}>{time}</div>
        <div className={styles.lessonRowTitle}>{title}</div>
        <Tooltip title={t(`home:scheduleCard.${status}`)}>
          <span className={shapeClassName} />
        </Tooltip>
      </div>
      <div className={styles.lessonRowTopic}>
        {t('home:scheduleCard.topic')}: {topic}
      </div>
    </div>
  );
};
