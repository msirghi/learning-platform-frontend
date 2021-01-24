import React from 'react';
import styles from '../../styles/modules/Home.module.scss';
import Button from '@material-ui/core/Button';
import { useTranslation } from '../../i18n';

export const NoContent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.noContentContainer}>
      <img src='images/home-no-content.png' alt='no content' />
      <div>
        <div className={styles.noContentTitle}>{t('home:noContent.title')}</div>
        <div className={styles.noContentSubtitle}>{t('home:noContent.subtitle')}</div>
        <div className={styles.noContentButtonContainer}>
          <Button color='primary' variant='contained' fullWidth>
            {t('home:noContent.exploreCourses')}
          </Button>
          <div className={styles.noContentInterButtonText}>
            {t('home:noContent.or').toUpperCase()}
          </div>
          <Button color='primary' variant='contained' fullWidth>
            {t('home:noContent.findGroup')}
          </Button>
        </div>
      </div>
    </div>
  );
};
