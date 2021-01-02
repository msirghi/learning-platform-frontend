import React, { useEffect } from 'react';
import '../styles/globals.scss';
import { appWithTranslation, useTranslation } from '../i18n';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NextNprogress from 'nextjs-progressbar';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { useDispatch } from 'react-redux';
import { setInterfaceLocale } from '../redux/actions/preference/preferenceAction';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#26816b'
    }
  }
});

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    dispatch(setInterfaceLocale(i18n.language));
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <NextNprogress color='#29D' startPosition={0.3} stopDelayMs={200} height='3' />
      <MuiThemeProvider theme={theme}>
        <Component {...pageProps} />
      </MuiThemeProvider>
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(appWithTranslation(MyApp));
