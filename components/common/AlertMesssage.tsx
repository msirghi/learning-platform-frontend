import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { AlertType } from '../../common/enums';

/**
 * AlertMessage component props.
 */
type Props = {
  /**
   * Message that will be displayed
   */
  message: string;
  /**
   * Alert type. Depending on it component will have special colors.
   */
  type: AlertType;
};

/**
 * Component for displaying the alert messages. Uses Alert component from '@material-ui/lab' library.
 *
 * @version 0.1
 * @author [Sirghi Mihail](https://github.com/msirghi)
 */
export const AlertMessage: React.FC<Props> = ({ message, type }) => {
  return <Alert severity={type}>{message}</Alert>;
};
