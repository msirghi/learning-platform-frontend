import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { AlertType } from '../../common/enums';

type Props = {
  message: string;
  type: AlertType;
};

export const AlertMessage: React.FC<Props> = ({ message, type }) => {
  return <Alert severity={type}>{message}</Alert>;
};
