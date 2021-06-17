import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Lesson } from '../../common/types';
import { startCase } from 'lodash';
import dateformat from 'dateformat';
import Chip from '@material-ui/core/Chip';
import { LessonStatus } from '../../common/enums';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton aria-label='close' className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

/**
 * Calendar dialog props.
 */
type Props = {
  /* Dialog status. */
  open: boolean;
  /* Calendar lesson selected. */
  toggleDialog: () => void;
  /*  Function that makes dialog hide. */
  selectedLesson?: Lesson;
};

/**
 * Calendar dialog. Shown when calendar event is clicked.
 *
 * @version 0.1
 * @author [Sirghi Mihail](https://github.com/msirghi)
 */
export const CalendarDialog: React.FC<Props> = ({ open, toggleDialog, selectedLesson }) => {
  if (!selectedLesson) {
    return <div />;
  }

  const { title, start, end, status, topic } = selectedLesson;

  return (
    <div>
      <Dialog
        onClose={toggleDialog}
        aria-labelledby='customized-dialog-title'
        open={open}
        fullWidth
      >
        <DialogTitle id='customized-dialog-title' onClose={toggleDialog}>
          {startCase(title)}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <div>
              <b>Topic</b>: {topic}
            </div>
            <div>
              <b>When</b>: {dateformat(start, 'mmm d, yyyy')}, {dateformat(start, 'H:MM')} -{' '}
              {dateformat(start, 'mmm d, yyyy') === dateformat(end, 'mmm d, yyyy')
                ? dateformat(end, 'H:MM')
                : `${dateformat(end, 'mmm d, yyyy')} ${dateformat(end, 'H:MM')}`}
            </div>
            <div>
              <b>Status</b>:{' '}
              {status === LessonStatus.ONGOING && <Chip label={'ONGOING'} color='primary' />}
              {status === LessonStatus.ENDED && <Chip label={'ENDED'} color='secondary' />}
              {status === LessonStatus.NOT_STARTED && <Chip label={'NOT STARTED'} />}
            </div>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog} color='primary'>
            Close
          </Button>
          <Button color='primary'>Visit course page</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
