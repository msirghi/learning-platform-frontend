import React, { useEffect, useRef, useState } from 'react';
import { messagesMock } from '../../../../mocks/messagesMocks';
import { Message } from '../Message';
import styles from '../../../../styles/modules/MyGroup.module.scss';
import { ChatPrimaryTextField } from '../ChatPrimaryTextField';
import { MobileChatHeader } from './MobileChatHeader';
import { Fade } from '@material-ui/core';
import { MobileChatSettings } from './MobileChatSettings';
import { ChatThemes } from '../../../../common/enums';

type Props = {
  onBackClick: () => void;
  chatOpened: boolean;
  chatTheme: ChatThemes;
  handleThemeChange: (val: ChatThemes) => void;
  chatFontSize: number;
  handleFontChange: (val: number) => void;
};

export const MobileChatContainer: React.FC<Props> = ({
  onBackClick,
  chatOpened,
  handleThemeChange,
  chatTheme,
  chatFontSize,
  handleFontChange
}) => {
  const [messageValue, setMessageValue] = useState('');
  const [messages, setMessages] = useState(messagesMock);
  const [chatSettingsOpened, setChatSettingsOpened] = useState(false);
  const messagesEnd = useRef(null);

  const onInputChange = (val: string) => {
    setMessageValue(val);
  };

  const onMessageSend = () => {
    if (messageValue) {
      setMessages((m) => [
        ...m,
        { id: Math.random(), author: 'Me', date: new Date(), message: messageValue }
      ]);
      setMessageValue('');
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode == 13) {
      onMessageSend();
    }
  };

  const scrollToLastMessage = () => {
    messagesEnd.current.scrollTop = messagesEnd.current.scrollHeight;
  };

  const onFocus = () => {
    scrollToLastMessage();
  };

  useEffect(() => scrollToLastMessage(), []);

  useEffect(() => {
    scrollToLastMessage();
  }, [messages]);

  return (
    <div className={styles.mobileChatContent}>
      <MobileChatHeader
        online={8}
        total={1}
        onBackClick={onBackClick}
        toggleSettings={() => setChatSettingsOpened(!chatSettingsOpened)}
      />
      {chatSettingsOpened ? (
        <MobileChatSettings
          chatFontSize={chatFontSize}
          handleFontChange={handleFontChange}
          currentColor={chatTheme}
          handleThemeChange={(val) => handleThemeChange(val)}
          toggleSettings={() => setChatSettingsOpened(!chatSettingsOpened)}
        />
      ) : (
        <Fade in={chatOpened}>
          <div className={styles.fixedContainer} style={{ backgroundColor: chatTheme }}>
            <div
              className={styles.mobileChatContainer}
              style={{ backgroundColor: chatTheme }}
              ref={messagesEnd}
            >
              {messages.map((message, idx) => {
                return (
                  <>
                    <Message
                      fontSize={chatFontSize}
                      hideAvatar
                      fromMe={idx % 2 === 0}
                      chatMessage={message}
                      key={message.id}
                    />
                    <div
                      className={`${
                        idx % 2 === 0 ? styles.myMessageMobile : styles.notMyMessageMobile
                      }`}
                    >
                      {message.author}
                    </div>
                  </>
                );
              })}
            </div>
            <div className={styles.mobileTextFieldContainer}>
              <ChatPrimaryTextField
                onFocus={onFocus}
                onKeyDown={onKeyDown}
                onChange={onInputChange}
                onMessageSend={onMessageSend}
                value={messageValue}
              />
            </div>
          </div>
        </Fade>
      )}
    </div>
  );
};
