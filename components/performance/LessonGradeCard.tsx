import { Avatar, Button, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import styles from '../../styles/modules/Performance.module.scss';
import ReactCardFlip from 'react-card-flip';
import UndoIcon from '@material-ui/icons/Undo';
import { Grade, Mark } from '../../common/types';
import dateFormat from 'dateformat';
import GradeTestService from '../services/GradeTestService';
import { GradeType } from '../../common/enums';
import ColorService from '../services/ColorService';
import { useWindowSize } from '../common/hooks/useWindowResize';
import { useTranslation } from '../../i18n';

type Props = {
  grade: Grade;
};

type CellProps = {
  mark?: Mark;
  type: GradeType;
};

const Cell: React.FC<CellProps> = ({ mark, type }) => {
  return (
    <div className={styles.cell}>
      <span className={styles.title}>
        {GradeTestService.getRelevantTranslation(mark ? mark.test : type)}
      </span>
      <span className={styles.mark}>{mark ? mark.mark : 'n/a'}</span>
    </div>
  );
};

export const LessonGradeCard: React.FC<Props> = ({ grade }) => {
  const { course, marks, maxPresence, presence, teacher, year } = grade;
  const [flipped, setFlipped] = useState(false);
  const [width] = useWindowSize();
  const { t } = useTranslation();

  const handleFlipChange = () => setFlipped(!flipped);

  return (
    <ReactCardFlip isFlipped={flipped} flipDirection='vertical'>
      <div className={styles.lessonGradeCardWrapper}>
        <div>
          <Avatar
            className={styles.avatar}
            style={{ backgroundColor: ColorService.getAvatarColorByText(course) }}
          >
            {grade.course.substring(0, 2)}
          </Avatar>
        </div>
        <div className={styles.lessonInfo}>
          <div className={styles.year}>{year}</div>
          <div className={styles.name}>{course}</div>
          <div className={styles.teacher}>{teacher}</div>
        </div>

        <div className={styles.gradeWrapper}>
          <div className={styles.mark}>{marks[0].mark}</div>
          <div className={styles.name}>
            {GradeTestService.getRelevantTranslation(marks[0].test)}
          </div>
          <div className={styles.date}>{dateFormat(marks[0].updatedAt, 'mediumDate')}</div>
        </div>

        <div className={styles.buttonContainer}>
          <Button
            fullWidth
            variant={width < 768 ? 'outlined' : 'text'}
            color='primary'
            onClick={() => handleFlipChange()}
          >
            {t('performance:viewAll')}
          </Button>
        </div>
      </div>

      <div className={styles.marksContainer}>
        <div className={styles.decor}></div>

        <div className={styles.cellRow}>
          <Cell
            mark={marks.find((m) => m.test === GradeType.ATTESTATION_1)}
            type={GradeType.ATTESTATION_1}
          />
          <Cell
            mark={marks.find((m) => m.test === GradeType.ATTESTATION_2)}
            type={GradeType.ATTESTATION_2}
          />
        </div>

        <div className={styles.cellRow}>
          <Cell mark={marks.find((m) => m.test === GradeType.EXAM)} type={GradeType.EXAM} />
          <Cell
            mark={marks.find((m) => m.test === GradeType.INDIVIDUAL_WORK)}
            type={GradeType.INDIVIDUAL_WORK}
          />
        </div>

        <div className={styles.cellRow}>
          <div className={styles.cell}>
            <span className={styles.title}>{t('performance:presence')}</span>
            <span className={styles.mark}>
              {presence} / {maxPresence}
            </span>
          </div>
          <Cell mark={marks.find((m) => m.test === GradeType.FINAL)} type={GradeType.FINAL} />
        </div>

        <div className={styles.undoButton}>
          <IconButton onClick={handleFlipChange}>
            <UndoIcon color='primary' />
          </IconButton>
        </div>
      </div>
    </ReactCardFlip>
  );
};
