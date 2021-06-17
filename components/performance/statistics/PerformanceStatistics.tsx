import React from 'react';
import { StatisticsCard } from './card/StatisticsCard';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Grid } from '@material-ui/core';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import styles from './PerformanceStatistics.module.scss';
import dynamic from 'next/dynamic';
import BarChart from './chart/BarChart';

export const PerformanceStatistics: React.FC = () => {
  //   const BarChartComponent = dynamic(() => import('./chart/BarChart'), { ssr: false });

  return (
    <div className={styles.statisticsWrapper}>
      <Grid container spacing={10} justify='center'>
        <Grid item>
          <StatisticsCard
            title={'Visited lessons'}
            primaryText={'90'}
            iconBackground={'#801053'}
            helperText='Lorem'
          >
            <VisibilityIcon />
          </StatisticsCard>
        </Grid>
        <Grid item>
          <StatisticsCard
            title={'Attended courses'}
            primaryText={'15'}
            iconBackground={'#105e80'}
            helperText='Lorem'
          >
            <ImportContactsIcon />
          </StatisticsCard>
        </Grid>

        <Grid item>
          <StatisticsCard
            title={'Average mark'}
            primaryText={'7.76'}
            iconBackground={'#5e8010'}
            helperText='Lorem'
          >
            <CheckCircleOutlineIcon />
          </StatisticsCard>
        </Grid>
      </Grid>

      <hr className={styles.separator} />

      <div>
        <BarChart />
      </div>
    </div>
  );
};
