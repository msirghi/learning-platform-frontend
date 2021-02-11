import { InputAdornment, TextField, withStyles } from '@material-ui/core';
import React from 'react';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';
import styles from '../../../styles/modules/MyGroup.module.scss';

type Props = {
  onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  value: string;
  onChange: (val: string) => void;
  onMessageSend: () => void;
  onFocus?: () => void;
};

export const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      borderColor: 'green',
      padding: '4px !important'
    }
  }
})(TextField);

export const ChatPrimaryTextField: React.FC<Props> = ({
  onKeyDown,
  value,
  onChange,
  onMessageSend,
  onFocus
}) => {
  return (
    <div>
      <ValidationTextField
        onFocus={() => onFocus && onFocus()}
        size='small'
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        variant='outlined'
        placeholder='Write a message...'
        onKeyDown={onKeyDown}
        inputProps={{
          'data-testid': 'message-field'
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <AttachFileIcon className={styles.icon} color='primary' />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment id='send-button' position='end' data-testid='send-button'>
              <SendIcon onClick={() => onMessageSend()} className={styles.icon} color='primary' />
            </InputAdornment>
          )
        }}
      />
    </div>
  );
};
