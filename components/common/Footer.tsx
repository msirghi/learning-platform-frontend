import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant='body2'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: '#202020',
    color: '#fff'
  }
}));

export const SiteFooter = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth='sm'>
        <Typography variant='body1'>My sticky footer can be found here.</Typography>
        <Copyright />
      </Container>
    </footer>
  );
};
