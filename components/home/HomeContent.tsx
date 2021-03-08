import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { NewsCard } from './NewsCard';
import { newsMock } from '../../mocks/newsMocks';
import { ScheduleCard } from './ScheduleCard';
import { useWindowSize } from '../common/hooks/useWindowResize';
import styles from '../../styles/modules/Home.module.scss';
import { useTranslation } from '../../i18n';
import { NoContent } from './NoContent';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-around'
    },
    grid: {
      maxWidth: 1400
    }
  })
);

/**
 * Home content wrapper.
 *
 * @version 0.1
 * @author [Sirghi Mihail](https://github.com/msirghi)
 */
export const HomeContent: React.FC = () => {
  const classes = useStyles();
  const [width] = useWindowSize();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Grid container spacing={width < 900 ? 5 : 10} className={classes.grid}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <ScheduleCard />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <NewsCard title={t('home:groupNewsTitle')} news={newsMock} />
          <div className={styles.cardNewsMargin}>
            <NewsCard title={t('home:unversityNewsTitle')} news={newsMock} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
