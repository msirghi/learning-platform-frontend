import React, { useState } from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Menu from '@material-ui/core/Menu';
import { useTranslation } from '../../i18n';
import { useDispatch } from 'react-redux';
import { setInterfaceLocale } from '../../redux/actions/preference/preferenceAction';

const languageChoice = [
  {
    key: 'en',
    value: 'English'
  },
  {
    key: 'ru',
    value: 'Русский'
  }
];

export const LanguageSelect: React.FC = () => {
  const [notificationMenuOpen, setNotificationMenuOpen] = useState<null | HTMLElement>(null);
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleChange = (val: string) => {
    dispatch(setInterfaceLocale(val));
    i18n.changeLanguage(val);
    handleClose();
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setNotificationMenuOpen(event.currentTarget);
  };

  const handleClose = () => {
    setNotificationMenuOpen(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <LanguageIcon color='primary' />
      </IconButton>
      <Menu
        anchorEl={notificationMenuOpen}
        keepMounted
        open={Boolean(notificationMenuOpen)}
        onClose={handleClose}
      >
        <List>
          {languageChoice.map((item) => {
            return (
              <ListItem key={item.key} button onClick={() => handleChange(item.key)}>
                {item.value}
              </ListItem>
            );
          })}
        </List>
      </Menu>
    </>
  );
};
