import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import styles from '../../styles/modules/Home.module.scss';
import { News } from '../../common/types';
import { NewsRow } from './NewsRow';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { useTranslation } from '../../i18n';
import { makeStyles, createStyles } from '@material-ui/core/styles';

type Props = {
  /**
   * News card title.
   */
  title: string;
  /**
   * News to display.
   */
  news: News[];
};

const useStyles = makeStyles(() =>
  createStyles({
    content: {
      '&:last-child': {
        paddingBottom: 16
      }
    }
  })
);

/**
 * Home news card.
 *
 * @version 0.1
 * @author [Sirghi Mihail](https://github.com/msirghi)
 */
export const NewsCard: React.FC<Props> = ({ title, news }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Card variant='outlined'>
      <CardHeader
        action={
          <div className={styles.cardHeaderContainer}>
            <Button variant='outlined' className={styles.cardHeaderButton} size='small'>
              {t('home:scheduleCard.seeOlderNews')}
            </Button>
          </div>
        }
        title={title}
        className={styles.cardTitle}
      />
      <CardContent className={classes.content}>
        {news.map((item, idx) => (
          <div key={item.title}>
            <NewsRow news={item} />
            {news.length - 1 !== idx && (
              <div className={styles.cardNewsDivider}>
                <Divider />
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
