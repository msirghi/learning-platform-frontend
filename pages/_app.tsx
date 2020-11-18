import React, { useEffect } from 'react';
import '../styles/globals.scss';
import { appWithTranslation } from '../i18n';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NextNprogress from 'nextjs-progressbar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6200ee'
    }
  }
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <NextNprogress color='#29D' startPosition={0.3} stopDelayMs={200} height='3' />
      <MuiThemeProvider theme={theme}>
        <Component {...pageProps} />
      </MuiThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
