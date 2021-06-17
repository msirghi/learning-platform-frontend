import React from 'react';
import { PerformanceTabs } from '../../common/enums';
import { useTranslation } from '../../i18n';
import styles from '../../styles/modules/Performance.module.scss';

type Props = {
  currentTab: PerformanceTabs;
  changeTab: (val: PerformanceTabs) => void;
};

export const PerformanceMenu: React.FC<Props> = ({ currentTab, changeTab }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.performanceMenuContainer}>
      <div
        onClick={() => changeTab(PerformanceTabs.GRADES)}
        className={`${styles.tab} ${currentTab === PerformanceTabs.GRADES ? styles.active : ''}`}
      >
        <span>{t('performance:gradesLabel')}</span>
      </div>
      <div
        onClick={() => changeTab(PerformanceTabs.STATISTICS)}
        className={`${styles.tab} ${styles.secondTab} ${
          currentTab === PerformanceTabs.STATISTICS ? styles.active : ''
        }`}
      >
        <span>{t('performance:statisticsLabel')}</span>
      </div>
    </div>
  );
};
