import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { GroupChat } from './GroupChat';
import { GroupStudents } from './GroupStudents';
import styles from '../../styles/modules/MyGroup.module.scss';
import { useWindowSize } from '../common/hooks/useWindowResize';
import { MobileGroupContainer } from './chat/mobile/MobileGroupContainer';
import { ChatInfo } from './ChatInfo';
import { ChatThemes } from '../../common/enums';

export const MyGroupContent: React.FC = () => {
  const [width] = useWindowSize();
  const [chatTheme, setChatTheme] = useState(ChatThemes.WHITE);
  const [chatFontSize, setChatFontSize] = useState(14);

  useEffect(() => {
    const info = localStorage.getItem('chatSettings');
    if (info) {
      const parsed = JSON.parse(info);
      if (parsed.theme && parsed.theme in ChatThemes) {
        setChatTheme(parsed.theme);
      }
      parsed.font && setChatFontSize(parsed.font > 16 ? 16 : parsed.font);
    }
  }, []);

  const handleChatFontChange = (val: number) => {
    setChatFontSize(val);
    const info = JSON.parse(localStorage.getItem('chatSettings') || '{}');
    info.font = val;
    localStorage.setItem('chatSettings', JSON.stringify(info));
  };

  const handleChatThemeChange = (val: ChatThemes) => {
    setChatTheme(val);
    const info = JSON.parse(localStorage.getItem('chatSettings') || '{}');
    info.theme = val;
    localStorage.setItem('chatSettings', JSON.stringify(info));
  };

  if (width < 960) {
    return (
      <MobileGroupContainer
        chatTheme={chatTheme}
        handleThemeChange={handleChatThemeChange}
        chatFontSize={chatFontSize}
        handleFontChange={handleChatFontChange}
      />
    );
  }

  return (
    <Grid container className={styles.myGroupContainer}>
      <Grid item md={3}>
        <GroupStudents />
      </Grid>
      <Grid item md={6} className={styles.chatGrid}>
        <GroupChat
          chatTheme={chatTheme}
          handleThemeChange={handleChatThemeChange}
          chatFontSize={chatFontSize}
          handleFontChange={handleChatFontChange}
        />
      </Grid>
      <Grid item md={3} className={styles.newsGrid}>
        <ChatInfo />
      </Grid>
    </Grid>
  );
};
