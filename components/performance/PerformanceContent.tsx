import { Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { PerformanceTabs } from '../../common/enums';
import { GradesMock } from '../../mocks/gradesMock';
import { LessonGradeCard } from './LessonGradeCard';
import { PerformanceMenu } from './PerformanceMenu';
import styles from '../../styles/modules/Performance.module.scss';
import { PageInfo } from './PageInfo';
import { useTranslation } from '../../i18n';

const initialLessons = GradesMock;

// TODO: tests
export const PerformanceContent = () => {
  const [currentTab, setCurrentTab] = useState(PerformanceTabs.GRADES);
  const [searchValue, setSearchValue] = useState('');
  const changeCurrentTab = (tab: PerformanceTabs) => setCurrentTab(tab);
  const [displayLessons, setDisplayLessons] = useState(GradesMock);
  const { t } = useTranslation();

  const onInputChange = (val: string) => {
    if (val === '') {
      setSearchValue('');
      setDisplayLessons(initialLessons);
      return;
    }
    const filtered = initialLessons.filter((l) => l.course.toLowerCase().includes(val));
    setDisplayLessons(filtered);
    setSearchValue(val);
  };

  return (
    <div>
      <PerformanceMenu currentTab={currentTab} changeTab={changeCurrentTab} />

      <div className={styles.performanceHeader}>
        <PageInfo message={t('performance:pageDescription')} />
        <div className={styles.searchInput}>
          <TextField
            value={searchValue}
            onChange={(e) => onInputChange(e.target.value)}
            label={t('performance:searchInputLabel')}
          />
        </div>
      </div>

      <div>
        {currentTab === PerformanceTabs.GRADES &&
          (displayLessons.length !== 0 ? (
            <Grid container justify='center' spacing={5}>
              {displayLessons.map((grade) => {
                return (
                  <Grid item key={grade.id} className={styles.gradeGreedItem}>
                    <LessonGradeCard grade={grade} />
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <div className={styles.lessonsNotFound}>{t('performance:lessonsNotFound')}</div>
          ))}

        {currentTab === PerformanceTabs.STATISTICS && <div>Statistics</div>}
      </div>
    </div>
  );
};
