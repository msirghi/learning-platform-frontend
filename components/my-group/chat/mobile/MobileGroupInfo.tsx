import React, { useState } from 'react';
import { studentsMock } from '../../../../mocks/studentsMock';
import { StudentRow } from '../../info/StudentRow';
import styles from '../../../../styles/modules/MyGroup.module.scss';
import { GroupInfo } from '../../info/GroupInfo';
import Fab from '@material-ui/core/Fab';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import { newsMock } from '../../../../mocks/newsMocks';
import { NewsRow } from '../../news/NewsRow';
import { Button } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import { useTranslation } from '../../../../i18n';

type Props = {
  openChatHandler: () => void;
};

export const MobileGroupInfo: React.FC<Props> = ({ openChatHandler }) => {
  const [showMembers, setShowMembers] = useState(true);
  const { t } = useTranslation();

  const toggleShowMembers = () => setShowMembers(!showMembers);

  return (
    <div>
      <div className={styles.studentsContainer}>
        <div className={styles.chatInfoContainer}>
          <div className={styles.newsTitle}>{t('myGroup:news')}</div>
          {newsMock.map(({ id, description, date, title }, idx) => {
            return (
              <>
                <NewsRow
                  description={description}
                  key={id}
                  date={date}
                  author={'Nicolae'}
                  title={title}
                />
                {idx !== newsMock.length - 1 && <hr className={styles.separator} />}
              </>
            );
          })}
        </div>

        <Button color='primary' variant='outlined' fullWidth className={styles.seeMoreButton}>
          {t('myGroup:seeMore')}
        </Button>

        <GroupInfo
          onChevronClick={toggleShowMembers}
          chevronDown={showMembers}
          showChevron
          totalMembers={7}
          totalOnline={3}
          groupName='Name'
        />

        {showMembers && (
          <div className={styles.studentsContainer}>
            {studentsMock.map(({ firstName, lastName, id }) => {
              return <StudentRow key={id} name={`${firstName} ${lastName}`} />;
            })}
          </div>
        )}

        <Fade in>
          <div className={styles.chatButton}>
            <Fab
              color='primary'
              aria-label='add'
              className={styles.chatButton}
              onClick={() => openChatHandler()}
            >
              <InsertCommentIcon />
            </Fab>
          </div>
        </Fade>
      </div>
    </div>
  );
};
