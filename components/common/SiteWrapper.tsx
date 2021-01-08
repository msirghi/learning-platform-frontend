import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { NavBar } from './NavBar';
import { MainDrawer } from './MainDrawer';
import { SiteFooter } from './Footer';
import { useWindowSize } from './hooks/useWindowResize';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  root: {
    display: 'flex'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  appBar: {
    backgroundColor: '#fafafa',
    color: '#000',
    boxShadow: 'none',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth / 2}px)`
    }
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export const SiteWrapper: React.FC = ({ children }) => {
  const classes = useStyles();
  const [desktopOpen, setDesktopOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [width] = useWindowSize();

  useEffect(() => {
    if (width < 768 && desktopOpen) {
      setDesktopOpen(false);
      return;
    }

    if(width > 768 && mobileOpen) {
      setMobileOpen(false);
    }
  }, [width]);

  const handleDrawerOpen = () => {
    if (width > 768) {
      setDesktopOpen(true);
      return;
    }
    setMobileOpen(true);
  };

  const handleDrawerClose = () => {
    if (width > 768) {
      setDesktopOpen(false);
      return;
    }
    setMobileOpen(false);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.root}>
        <CssBaseline />
        <NavBar
          classes={classes}
          handleDrawerClose={handleDrawerClose}
          handleDrawerOpen={handleDrawerOpen}
          open={desktopOpen}
        />
        <MainDrawer
          handleDrawerOpen={handleDrawerOpen}
          mobileOpen={mobileOpen}
          handleDrawerClose={handleDrawerClose}
          open={desktopOpen}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
      <SiteFooter />
    </div>
  );
};
