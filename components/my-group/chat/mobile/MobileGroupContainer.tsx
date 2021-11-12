import React, { useState } from 'react';
import { MobileChatContainer } from './MobileChatContainer';
import { MobileGroupInfo } from './MobileGroupInfo';
import styles from '../../../../styles/modules/MyGroup.module.scss';
import { Fade } from '@material-ui/core';
import { ChatThemes } from '../../../../common/enums';

type Props = {
  chatTheme: ChatThemes;
  handleThemeChange: (val: ChatThemes) => void;
  chatFontSize: number;
  handleFontChange: (val: number) => void;
};

export const MobileGroupContainer: React.FC<Props> = ({
  chatFontSize,
  handleFontChange,
  chatTheme,
  handleThemeChange
}) => {
  const [chatOpened, setChatOpened] = useState(false);

  const toggleChat = () => setChatOpened(!chatOpened);

  return (
    <div>
      <div className={chatOpened ? undefined : styles.hide}>
        <MobileChatContainer
          chatFontSize={chatFontSize}
          handleFontChange={handleFontChange}
          chatTheme={chatTheme}
          handleThemeChange={handleThemeChange}
          chatOpened={chatOpened}
          onBackClick={toggleChat}
        />
      </div>
      <Fade in={!chatOpened}>
        <div className={chatOpened ? styles.hide : undefined}>
          <MobileGroupInfo openChatHandler={toggleChat} />
        </div>
      </Fade>
    </div>
  );
};
