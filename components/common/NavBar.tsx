import React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import NotificationsIcon from "@material-ui/icons/Notifications";
import LanguageIcon from "@material-ui/icons/Language";
import styles from "../../styles/modules/Shared.module.scss";
import Divider from "@material-ui/core/Divider";
import { UserAvatar } from "./UserAvatar";

type Props = {
  classes: { [key: string]: string };
  handleDrawerOpen: () => void;
  open: boolean;
};

export const NavBar: React.FC<Props> = ({ classes, handleDrawerOpen, open }) => {
  return (
    <AppBar
      position='fixed'
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          edge='start'
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap>
          Home
        </Typography>
        <div className={styles.navBarRightIconsContainer}>
          <IconButton>
            <LanguageIcon color={"primary"} />
          </IconButton>
          <IconButton>
            <NotificationsIcon color={"primary"} />
          </IconButton>
          <IconButton>
            <UserAvatar />
          </IconButton>
        </div>
      </Toolbar>
      <div className={styles.navBarDividerContainer}>
        <Divider light />
      </div>
    </AppBar>
  );
};
