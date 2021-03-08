import React, { useEffect } from 'react';
import '../styles/globals.scss';
import { appWithTranslation, useTranslation } from '../i18n';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NextNprogress from 'nextjs-progressbar';
import store from '../redux/store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { setInterfaceLocale } from '../redux/actions/preference/preferenceAction';
import { RootState } from '../redux/reducers';
import { setInterfaceMode } from '../redux/actions/interface/interfaceAction';
import { orange } from '@material-ui/core/colors';
import { InterfaceMode } from '../common/enums';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const siteMode = useSelector((state: RootState) => state.interface.interfaceMode);
  const mainPrimaryColor = siteMode === InterfaceMode.DARK ? orange[500] : '#26816b';

  const darkTheme = createMuiTheme({
    palette: {
      type: siteMode,
      primary: {
        main: mainPrimaryColor
      }
    }
  });

  const getInvertedMode = () =>
    siteMode === InterfaceMode.DARK ? InterfaceMode.LIGHT : InterfaceMode.DARK;

  const onInterfaceModeChange = (mode: InterfaceMode = undefined) => {
    const siteMode = mode || getInvertedMode();
    dispatch(setInterfaceMode(siteMode));
    localStorage.setItem('siteMode', siteMode);
  };

  useEffect(() => {
    dispatch(setInterfaceLocale(i18n.language));
    const initialMode = localStorage.getItem('siteMode') as InterfaceMode;
    onInterfaceModeChange(initialMode || InterfaceMode.LIGHT);
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITEKEY}>
        <NextNprogress color='#29D' startPosition={0.3} stopDelayMs={200} />
        <MuiThemeProvider theme={darkTheme}>
          <Component {...pageProps} />
        </MuiThemeProvider>
      </GoogleReCaptchaProvider>
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(appWithTranslation(MyApp));
