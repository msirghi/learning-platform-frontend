import React from 'react';
import { newsMock } from '../../mocks/newsMocks';
import styles from '../../styles/modules/MyGroup.module.scss';
import { NewsRow } from './news/NewsRow';

export const ChatInfo = () => {
  return (
    <div className={styles.chatInfoContainer}>
      <div className={styles.header}>
        <span>Group news</span>
      </div>

      <div className={styles.newsContent}>
        {[...newsMock].map(({ date, description, title, id }, idx) => {
          return (
            <>
              <NewsRow
                key={id}
                date={date}
                title={title}
                description={description}
                author={'Nicolae'}
              />
              {idx !== newsMock.length - 1 && <hr className={styles.separator} />}
            </>
          );
        })}
      </div>
    </div>
  );
};
