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
          <span>Theme</span>
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

          <span>Font size</span>
          <FontSizeSlider value={chatFontSize} handleFontChange={handleFontChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Close
          </Button>
          <Button onClick={handleClose} color='primary' autoFocus>
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
