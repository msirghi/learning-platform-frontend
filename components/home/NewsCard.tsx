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

type Props = {
  title: string;
  news: News[];
};

export const NewsCard: React.FC<Props> = ({ title, news }) => {
  const { t } = useTranslation();

  return (
    <Card variant='outlined'>
      <CardHeader title={title} className={styles.cardTitle} />
      <CardContent>
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
        <div className={styles.cardNewsButtonContainer}>
          <Button size='small'>{t('home:scheduleCard.seeOlderNews')}</Button>
        </div>
      </CardContent>
    </Card>
  );
};
