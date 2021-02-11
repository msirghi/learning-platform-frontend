import React from 'react';
import { ChatMessage } from '../../../common/types';
import styles from '../../../styles/modules/MyGroup.module.scss';
import dateformat from 'dateformat';
import { ChatAvatar } from './ChatAvatar';

type Props = {
  chatMessage: ChatMessage;
  fromMe?: boolean;
  hideAvatar?: boolean;
  fontSize: number;
};

export const Message: React.FC<Props> = ({
  hideAvatar,
  chatMessage: { author, date, message },
  fromMe,
  fontSize
}) => {
  return (
    <div className={`${styles.messageContainer} ${fromMe ? styles.myMessage : undefined}`}>
      <div
        className={`${styles.messageContentContainer} ${
          fromMe ? styles.myMessageContainer : undefined
        }`}
      >
        {!fromMe && !hideAvatar && <ChatAvatar />}
        {fromMe && <div className={styles.date}>{dateformat(date, 'h:MM')}</div>}
        <div
          className={`${styles.content} ${
            fromMe ? styles.myMessageContent : styles.notMyMessageContent
          }`}
        >
          <div style={{ fontSize }}>{message}</div>
          {/* <div className={styles.author}>{author}</div> */}
        </div>
        {fromMe && !hideAvatar && <ChatAvatar />}
        {!fromMe && <div className={styles.date}>{dateformat(date, 'h:MM')}</div>}
        {/* <div className={styles.author}>{author}</div> */}
      </div>
    </div>
  );
};
