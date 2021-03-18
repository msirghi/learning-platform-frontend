import { TextField, Button } from '@material-ui/core';
import React from 'react';
import styles from '../CourseEditor.module.scss';
import { DatePicker, TimePicker } from '@material-ui/pickers';
import { useWindowSize } from '../../../../common/hooks/useWindowResize';
import { useTranslation } from '../../../../../i18n';
import { LessonCreationFormValues } from '../../../../../common/types';

type Props = {
  onSubmit: () => void;
  onChange: (name: keyof LessonCreationFormValues, value: string | Date) => void;
  values: LessonCreationFormValues;
};

export const CourseEditorForm: React.FC<Props> = ({ onSubmit, onChange, values }) => {
  const [width] = useWindowSize();
  const { t } = useTranslation();
  const { startDate, endDate, subject, description, startTime, endTime } = values;

  return (
    <div>
      <div className={styles.sectionTitle}>{t('courses:informationLabel')}</div>
      <div>
        <TextField
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
            onChange('subject', e.target.value)
          }
          value={subject}
          name='subject'
          helperText={t('courses:editor.subjectHelperText')}
          fullWidth
          variant='outlined'
          label={t('courses:editor.subjectLabel')}
          required
        />
      </div>

      <div className={styles.dateTimeRow}>
        <DatePicker
          value={startDate}
          onChange={(date) => onChange('startDate', date)}
          name='startDate'
          fullWidth={width < 1200}
          helperText={t('courses:editor.startDateLabel')}
          inputVariant='outlined'
        />
        <TimePicker
          value={startTime}
          onChange={(time) => onChange('startTime', time)}
          name='startTime'
          fullWidth={width < 1200}
          helperText={t('courses:editor.startTimeLabel')}
          className={styles.timepicker}
          inputVariant='outlined'
        />
      </div>

      <div className={styles.dateTimeRow}>
        <DatePicker
          onChange={(date) => onChange('endDate', date)}
          value={endDate}
          name='endDate'
          fullWidth={width < 1200}
          inputVariant='outlined'
          helperText={t('courses:editor.endDateLabel')}
        />
        <TimePicker
          value={endTime}
          onChange={(time) => onChange('endTime', time)}
          name='endTime'
          fullWidth={width < 1200}
          inputVariant='outlined'
          helperText={t('courses:editor.endTimeLabel')}
          className={styles.timepicker}
        />
      </div>

      <div>
        <TextField
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
            onChange('description', e.target.value)
          }
          name='description'
          helperText={t('courses:editor.descriptionHelperText')}
          fullWidth
          variant='outlined'
          rows={4}
          multiline
          value={description}
          label={t('courses:editor.descriptionLabel')}
        />
      </div>
      {width > 768 && (
        <Button
          type='submit'
          fullWidth
          className={styles.addButton}
          onClick={onSubmit}
          color='primary'
          variant='contained'
        >
          {t('courses:submitButtonLabel')}
        </Button>
      )}
    </div>
  );
};
