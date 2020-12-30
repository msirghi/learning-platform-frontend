import { Button, LinearProgress } from '@material-ui/core';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { findByTestAttr } from '../../../common/testUtils';
import LoginForm from '../forms/LoginForm';

describe('LoginForm component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<LoginForm onMessage={jest.fn()} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have disabled button by default', () => {
    const wrapper = shallow(<LoginForm onMessage={jest.fn()} />);
    const button = wrapper.find(Button);

    expect(button).toHaveLength(1);
    expect(button.props().disabled).toBeTruthy();
  });

  it('should have enabled button on fullfiled fields', () => {
    const { getByTestId } = render(<LoginForm onMessage={jest.fn()} />);

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

  it('should submit the form and show LinearProgress', () => {
    const wrapper = mount(<LoginForm onMessage={jest.fn()} />);

    const emailField = findByTestAttr(wrapper, 'email');
    expect(emailField).toHaveLength(1);

    const passwordField = findByTestAttr(wrapper, 'password');
    expect(passwordField).toHaveLength(1);

    emailField.simulate('change', 'email@email.com');
    passwordField.simulate('change', 'password');

    const form = wrapper.find('form');
    expect(form).toHaveLength(1);

    form.simulate('submit');
    expect(wrapper.find(LinearProgress)).toHaveLength(1);
  });
});
