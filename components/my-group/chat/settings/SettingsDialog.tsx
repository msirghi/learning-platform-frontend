import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ColorPaletteTemplate } from './ColorPaletteTemplate';
import { chatThemes } from '../../../common/utils/chatThemes';
import styles from '../../../../styles/modules/MyGroup.module.scss';
import { FontSizeSlider } from './FontSizeSlider';
import { useTranslation } from '../../../../i18n';

type Props = {
  open: boolean;
  handleClose: () => void;
  handlePaletteChange: (pallete: string) => void;
  currentColor: string;
  chatFontSize: number;
  handleFontChange: (val: number) => void;
};

export const SettingsDialog: React.FC<Props> = ({
  currentColor,
  open,
  handleClose,
  handlePaletteChange,
  chatFontSize,
  handleFontChange
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Chat settings'}</DialogTitle>
        <DialogContent>
          <span>{t('myGroup:themesTitle')}</span>
          <div className={styles.chatThemesContainer}>
            {chatThemes.map(({ color }) => {
              return (
                <div className={styles.theme} key={color}>
                  <ColorPaletteTemplate
                    onChange={() => handlePaletteChange(color)}
                    color={color}
                    checked={color === currentColor}
                  />
                </div>
              );
            })}
          </div>

          <span>{t('myGroup:fontSizeTitle')}</span>
          <FontSizeSlider value={chatFontSize} handleFontChange={handleFontChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            {t('myGroup:close')}
          </Button>
          <Button onClick={handleClose} color='primary' autoFocus>
            {t('myGroup:apply')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
