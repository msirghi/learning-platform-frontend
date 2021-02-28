import { Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { PerformanceTabs } from '../../common/enums';
import { GradesMock } from '../../mocks/gradesMock';
import { LessonGradeCard } from './LessonGradeCard';
import { PerformanceMenu } from './PerformanceMenu';
import styles from '../../styles/modules/Performance.module.scss';
import { PageInfo } from './PageInfo';
import { useTranslation } from '../../i18n';

export const PerformanceContent = () => {
  const [currentTab, setCurrentTab] = useState(PerformanceTabs.GRADES);
  const changeCurrentTab = (tab: PerformanceTabs) => setCurrentTab(tab);
  const { t } = useTranslation();

  return (
    <div>
      <PerformanceMenu currentTab={currentTab} changeTab={changeCurrentTab} />

      <div className={styles.performanceHeader}>
        <PageInfo message={t('performance:pageDescription')} />
        <div className={styles.searchInput}>
          <TextField label={t('performance:searchInputLabel')} />
        </div>
      </div>

      <div>
        {currentTab === PerformanceTabs.GRADES && (
          <Grid container justify='center' spacing={5}>
            {GradesMock.map((grade) => {
              return (
                <Grid item key={grade.id} className={styles.gradeGreedItem}>
                  <LessonGradeCard grade={grade} />
                </Grid>
              );
            })}
          </Grid>
        )}

        {currentTab === PerformanceTabs.STATISTICS && <div>Statistics</div>}
      </div>
    </div>
  );
};
