import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RegisterForm from '../forms/RegisterForm';

describe('RegisterForm component', () => {
  const defaultProps = {
    onTabChange: jest.fn(),
    onMessage: jest.fn()
  };

  it('should match snapshot', () => {
    const component = shallow(<RegisterForm {...defaultProps} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render all the fields properly', () => {
    const { queryByTestId } = render(<RegisterForm {...defaultProps} />);

    const emailField = queryByTestId('email-field');
    expect(emailField).toBeInTheDocument();

    const firstNameField = queryByTestId('firstName-field');
    expect(firstNameField).toBeInTheDocument();

    const lastNameField = queryByTestId('lastName-field');
    expect(lastNameField).toBeInTheDocument();

    const passwordField = queryByTestId('password-field');
    expect(passwordField).toBeInTheDocument();

    const repeatPasswordField = queryByTestId('repeatPassword-field');
    expect(repeatPasswordField).toBeInTheDocument();

    const checkbox = queryByTestId('checkbox');
    expect(checkbox).toBeInTheDocument();

    const submitButton = queryByTestId('submit-button');
    expect(submitButton).toBeInTheDocument();
  });

  it('should have submit button enabled by default', () => {
    const { queryByTestId } = render(<RegisterForm {...defaultProps} />);

    const submitButton = queryByTestId('submit-button');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeEnabled();
  });

  it('should have enabled submit button on valid form', () => {
    const { queryByTestId } = render(<RegisterForm {...defaultProps} />);

    const emailField = queryByTestId('email-field');
    const firstNameField = queryByTestId('firstName-field');
    const lastNameField = queryByTestId('lastName-field');
    const passwordField = queryByTestId('password-field');
    const repeatPasswordField = queryByTestId('repeatPassword-field');
    const checkbox = queryByTestId('checkbox');
    const submitButton = queryByTestId('submit-button');

    fireEvent.change(emailField, { target: { value: 'test@mail.com' } });
    fireEvent.change(firstNameField, { target: { value: 'test' } });
    fireEvent.change(lastNameField, { target: { value: 'test' } });
    fireEvent.change(passwordField, { target: { value: 'test123' } });
    fireEvent.change(repeatPasswordField, { target: { value: 'test123' } });
    fireEvent.click(checkbox);

    expect(emailField).toHaveValue('test@mail.com');
    expect(submitButton).toBeEnabled();
  });

  it('should submit the form if values are valid', async () => {
    const { queryByTestId, getByRole } = render(<RegisterForm {...defaultProps} />);

    const emailField = queryByTestId('email-field');
    const firstNameField = queryByTestId('firstName-field');
    const lastNameField = queryByTestId('lastName-field');
    const passwordField = queryByTestId('password-field');
    const repeatPasswordField = queryByTestId('repeatPassword-field');
    const checkbox = getByRole('checkbox');
    const submitButton = queryByTestId('submit-button');

    fireEvent.change(emailField, { target: { value: 'test@mail.com' } });
    fireEvent.change(firstNameField, { target: { value: 'test' } });
    fireEvent.change(lastNameField, { target: { value: 'test' } });
    fireEvent.change(passwordField, { target: { value: 'test123' } });
    fireEvent.change(repeatPasswordField, { target: { value: 'test123' } });
    fireEvent.click(checkbox);
    fireEvent.click(submitButton);

    expect(emailField).toHaveValue('test@mail.com');
    expect(submitButton).toBeEnabled();
    expect(checkbox).toBeChecked();
  });

  it('should display error message on unchecked checkbox', () => {
    const { queryByTestId, getByText } = render(<RegisterForm {...defaultProps} />);
    const submitButton = queryByTestId('submit-button');
    fireEvent.click(submitButton);

    expect(submitButton).toBeEnabled();
    expect(getByText('auth:acceptTermsAndCondition')).toBeDefined();
  });

  it('should get value from getInitialProps', async () => {
    const props = await RegisterForm.getInitialProps();
    expect(props).toStrictEqual({
      namespacesRequired: ['auth']
    });
  });
});
