import { IconButton } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { messagesMock } from '../../mocks/messagesMocks';
import styles from '../../styles/modules/MyGroup.module.scss';
import { ChatPrimaryTextField } from './chat/ChatPrimaryTextField';
import { Message } from './chat/Message';
import SettingsIcon from '@material-ui/icons/Settings';
import { SettingsDialog } from './chat/settings/SettingsDialog';
import { ChatThemes } from '../../common/enums';

type Props = {
  chatTheme: ChatThemes;
  handleThemeChange: (val: ChatThemes) => void;
  chatFontSize: number;
  handleFontChange: (val: number) => void;
};

export const GroupChat: React.FC<Props> = ({
  chatFontSize,
  handleFontChange,
  chatTheme,
  handleThemeChange
}) => {
  const [messageValue, setMessageValue] = useState('');
  const [settingsDialogOpen, setSettingsDialogOpen] = useState(false);
  const [messages, setMessages] = useState(messagesMock);

  const messagesEnd = useRef(null);

  const handleChatThemeChange = (val: ChatThemes) => {
    handleThemeChange(val);
  };

  const handleSettingsDialogClose = () => setSettingsDialogOpen(false);

  const handleSettingsDialogOpen = () => setSettingsDialogOpen(true);

  const onInputChange = (val: string) => {
    setMessageValue(val);
  };

  useEffect(() => {
    messagesEnd.current.scrollTop = messagesEnd.current.scrollHeight;
  }, []);

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

  useEffect(() => {
    messagesEnd.current.scrollTop = messagesEnd.current.scrollHeight;
  }, [messages]);

  return (
    <div className={styles.groupChatContainer} style={{ backgroundColor: chatTheme }}>
      <SettingsDialog
        chatFontSize={chatFontSize}
        handleFontChange={handleFontChange}
        currentColor={chatTheme}
        handlePaletteChange={handleChatThemeChange}
        open={settingsDialogOpen}
        handleClose={handleSettingsDialogClose}
      />
      <div className={styles.header}>
        <IconButton onClick={() => handleSettingsDialogOpen()}>
          <SettingsIcon />
        </IconButton>
      </div>
      <div className={styles.messages} ref={messagesEnd}>
        {messages.map((message, idx) => {
          return (
            <Message
              fontSize={chatFontSize}
              fromMe={idx % 2 === 0}
              chatMessage={message}
              key={message.id}
            />
          );
        })}
      </div>
      <div className={styles.textFieldContainer}>
        <ChatPrimaryTextField
          onKeyDown={onKeyDown}
          onChange={onInputChange}
          onMessageSend={onMessageSend}
          value={messageValue}
        />
      </div>
    </div>
  );
};
