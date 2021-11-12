import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import AuthContainer from '../AuthContainer';
import LoginForm from '../forms/LoginForm';
import RegisterForm from '../forms/RegisterForm';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as nextRouter from 'next/router';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));
describe('AuthContainer component', () => {
  const mockStore = configureStore();
  const store = mockStore({ user: { email: undefined } });

  it('should match the snapshot', () => {
    const component = mount(
      <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITEKEY}>
        <Provider store={store}>
          <AuthContainer />
        </Provider>
      </GoogleReCaptchaProvider>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render Login form by default', () => {
    const wrapper = mount(
      <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITEKEY}>
        <Provider store={store}>
          <AuthContainer />
        </Provider>
      </GoogleReCaptchaProvider>
    );
    const loginForm = wrapper.find(LoginForm);
    const registerForm = wrapper.find(RegisterForm);

    expect(loginForm).toHaveLength(1);
    expect(registerForm).toHaveLength(0);
  });

  it('should render Register form on tab click', () => {
    const wrapper = mount(
      <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITEKEY}>
        <Provider store={store}>
          <AuthContainer />
        </Provider>
      </GoogleReCaptchaProvider>
    );
    const registerTab = wrapper.find('.registerTab');

    expect(registerTab).toHaveLength(1);
    registerTab.simulate('click');

    const loginForm = wrapper.find(LoginForm);
    const registerForm = wrapper.find(RegisterForm);

    expect(loginForm).toHaveLength(0);
    expect(registerForm).toHaveLength(1);
  });
});
