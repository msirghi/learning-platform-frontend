import { Button } from '@material-ui/core';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from '../forms/LoginForm';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

describe('LoginForm component', () => {
  const mockStore = configureStore();
  const store = mockStore({ user: { email: 'email' } });

  it('should match snapshot', () => {
    const wrapper = mount(
      <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITEKEY}>
        <Provider store={store}>
          <LoginForm onTabChange={jest.fn()} onMessage={jest.fn()} />
        </Provider>
      </GoogleReCaptchaProvider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have disabled button by default', () => {
    const wrapper = mount(
      <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITEKEY}>
        <Provider store={store}>
          <LoginForm onMessage={jest.fn()} onTabChange={jest.fn()} />
        </Provider>
      </GoogleReCaptchaProvider>
    );
    const button = wrapper.find(Button);

    expect(button).toHaveLength(1);
    expect(button.props().disabled).toBeTruthy();
  });

  it('should have enabled button on fullfiled fields', () => {
    const { getByTestId } = render(
      <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITEKEY}>
        <Provider store={store}>
          <LoginForm onMessage={jest.fn()} onTabChange={jest.fn()} />
        </Provider>
      </GoogleReCaptchaProvider>
    );

    const emailField = getByTestId('email-field');
    expect(emailField).toBeInTheDocument();

    const passwordField = getByTestId('password-field');
    expect(passwordField).toBeInTheDocument();

    const button = getByTestId('submit-button');
    expect(button).toBeDisabled();

    fireEvent.change(emailField, { target: { value: 'email@email.com' } });
    fireEvent.change(passwordField, { target: { value: 'password' } });
    expect(button).toBeEnabled();
    fireEvent.click(button);
  });
});
