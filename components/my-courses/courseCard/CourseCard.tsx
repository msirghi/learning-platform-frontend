import React from 'react';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';
import { Course } from '../../../common/types';
import { useTranslation } from '../../../i18n';
import { COURSE_DEFAULT_COVER_IMAGE } from '../../../common/constants/common.constants';
import styles from './CourseCard.module.scss';

type Props = {
  course: Course;
};

const CourseCard: React.FC<Props> = ({
  course: { id, teacherImg, coverImg, name, description }
}) => {
  const router = useRouter();

  const { t } = useTranslation();
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImage}>
        <img src={coverImg || COURSE_DEFAULT_COVER_IMAGE} alt={description} />
      </div>
      <div className={styles.cardTeacherPhoto}>
        <img src={teacherImg} alt={name} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardContentTitle}>{name}</div>
        <div className={styles.cardContentDescription}>{description}</div>
      </div>
      <div className={styles.cardButtonContainer}>
        <Button variant='outlined' color='primary' onClick={() => router.push(`/myCourses/${id}`)}>
          {t('courses:enterButtonLabel')}
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
