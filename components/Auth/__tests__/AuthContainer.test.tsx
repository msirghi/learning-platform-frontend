import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import AuthContainer from '../AuthContainer';
import LoginForm from '../forms/LoginForm';
import RegisterForm from '../forms/RegisterForm';

describe('AuthContainer component', () => {
  it('should match the snapshot', () => {
    const component = mount(<AuthContainer />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render Login form by default', () => {
    const wrapper = mount(<AuthContainer />);
    const loginForm = wrapper.find(LoginForm);
    const registerForm = wrapper.find(RegisterForm);

    expect(loginForm).toHaveLength(1);
    expect(registerForm).toHaveLength(0);
  });

  it('should render Register form on tab click', () => {
    const wrapper = mount(<AuthContainer />);
    const registerTab = wrapper.find('.registerTab');

    expect(registerTab).toHaveLength(1);
    registerTab.simulate('click');

    const loginForm = wrapper.find(LoginForm);
    const registerForm = wrapper.find(RegisterForm);

    expect(loginForm).toHaveLength(0);
    expect(registerForm).toHaveLength(1);
  });
});
