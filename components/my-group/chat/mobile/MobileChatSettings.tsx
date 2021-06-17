import React from 'react';
import { ColorPaletteTemplate } from '../settings/ColorPaletteTemplate';
import styles from '../../../../styles/modules/MyGroup.module.scss';
import { chatThemes } from '../../../common/utils/chatThemes';
import { FontSizeSlider } from '../settings/FontSizeSlider';
import { Button } from '@material-ui/core';
import { ChatThemes } from '../../../../common/enums';

type Props = {
  currentColor: string;
  chatFontSize: number;
  handleThemeChange: (pallete: ChatThemes) => void;
  handleFontChange: (val: number) => void;
  toggleSettings: () => void;
};

export const MobileChatSettings: React.FC<Props> = ({
  currentColor,
  chatFontSize,
  handleThemeChange,
  handleFontChange,
  toggleSettings
}) => {
  return (
    <div className={styles.mobileChatSettingsContainer}>
      <div className={styles.mainTitle}>Chat settings</div>
      <div className={styles.themeTitle}>Theme</div>
      <div className={styles.themeSubtitle}>Select a theme for your chat</div>
      <div className={styles.mobileChatPalettes}>
        {chatThemes.map(({ color }) => {
          return (
            <div className={styles.theme} key={color}>
              <ColorPaletteTemplate
                onChange={() => handleThemeChange(color as ChatThemes)}
                color={color}
                checked={color === currentColor}
              />
            </div>
          );
        })}
      </div>

      <div className={styles.fontSizeTitle}>Font size</div>
      <div className={styles.fontSizeSubtitle}>Adjust the chat font size</div>
      <FontSizeSlider value={chatFontSize} handleFontChange={(val) => handleFontChange(val)} />

      <div className={styles.applyButtonContainer}>
        <Button color='primary' variant='contained' fullWidth onClick={() => toggleSettings()}>
          Apply
        </Button>
      </div>
    </div>
  );
};
