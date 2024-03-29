import React from 'react';
import { studentsMock } from '../../mocks/studentsMock';
import styles from '../../styles/modules/MyGroup.module.scss';
import { GroupInfo } from './info/GroupInfo';
import { StudentRow } from './info/StudentRow';

export const GroupStudents = () => {
  return (
    <div className={styles.studentsContainer}>
      <GroupInfo totalMembers={6} totalOnline={1} groupName={'TI 4.2'} />
      <div className={styles.content}>
        {studentsMock.map(({ firstName, lastName, id }, idx) => {
          return <StudentRow name={`${firstName} ${lastName}`} key={id} isOnline={idx === 0} />;
        })}
      </div>
    </div>
  );
};
