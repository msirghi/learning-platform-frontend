import { Button, Dialog, TextField } from '@material-ui/core';
import { fireEvent, render } from '@testing-library/react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { NameChangeDialog } from './NameChangeDialog';

describe('NameChangeDialog component', () => {
  const props = {
    open: true,
    toggleOpen: jest.fn(),
    onSubmit: jest.fn((firstName: string, lastName: string) => {})
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<NameChangeDialog {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should toggle the dialog status on cancel button click', () => {
    const wrapper = shallow(<NameChangeDialog {...props} />);
    const cancelButton = wrapper.find(Button).at(0);

    expect(cancelButton).toBeDefined();
    cancelButton.simulate('click');
    expect(props.toggleOpen).toBeCalled();
  });

  it('should toggle the dialog status on onClose Dialog prop', () => {
    const wrapper = shallow(<NameChangeDialog {...props} />);
    const dialog = wrapper.find(Dialog);

    expect(dialog).toBeDefined();
    dialog.props().onClose({} as any, 'escapeKeyDown');
    expect(props.toggleOpen).toBeCalled();
  });

  it('should have disabled submit button on both fields empty', () => {
    const wrapper = shallow(<NameChangeDialog {...props} />);
    const submitButton = wrapper.find(Button).at(1);
    expect(submitButton).toHaveLength(1);
    expect(submitButton.props().disabled).toBeTruthy();
  });

  it('should have disabled submit button on empty last name field', () => {
    const wrapper = shallow(<NameChangeDialog {...props} />);
    const firstNameInput = wrapper.find(TextField).at(0);
    expect(firstNameInput).toHaveLength(1);

    firstNameInput.props().onChange({ target: { value: 'value' } } as any);

    const submitButton = wrapper.find(Button).at(1);
    expect(submitButton).toHaveLength(1);
    expect(submitButton.props().disabled).toBeTruthy();
  });

  it('should have disabled submit button on empty first name field', () => {
    const wrapper = shallow(<NameChangeDialog {...props} />);
    const lastNameInput = wrapper.find(TextField).at(1);
    expect(lastNameInput).toHaveLength(1);

    lastNameInput.props().onChange({ target: { value: 'value' } } as any);

    const submitButton = wrapper.find(Button).at(1);
    expect(submitButton).toHaveLength(1);
    expect(submitButton.props().disabled).toBeTruthy();
  });

  it('should have enabledd button if all fields are filled', () => {
    const { queryByTestId } = render(<NameChangeDialog {...props} />);

    const firstNameField = queryByTestId('firstname-field');
    expect(firstNameField).toBeInTheDocument();

    const lastNameField = queryByTestId('lastname-field');
    expect(lastNameField).toBeInTheDocument();

    fireEvent.change(firstNameField, { target: { value: 'test' } });
    fireEvent.change(lastNameField, { target: { value: 'test' } });

    const submitButton = queryByTestId('submit-button');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).not.toBeDisabled();
  });
});
