import { Button, Dialog } from '@material-ui/core';
import { fireEvent, render } from '@testing-library/react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { PasswordChangeDialog } from './PasswordChangeDialog';

describe('PasswordChangeDialog component', () => {
  const props = {
    open: true,
    toggleOpen: jest.fn()
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<PasswordChangeDialog {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should trigger prop method on onClose Dialog method', () => {
    const wrapper = shallow(<PasswordChangeDialog {...props} />);
    const dialog = wrapper.find(Dialog);
    expect(dialog).toHaveLength(1);

    dialog.props().onClose({} as any, 'escapeKeyDown');
    expect(props.toggleOpen).toBeCalledTimes(1);
  });

  it('should trigger prop method on cancel button click', () => {
    const wrapper = shallow(<PasswordChangeDialog {...props} />);
    const cancelButton = wrapper.find(Button).at(0);
    expect(cancelButton).toBeDefined();
    cancelButton.simulate('click');
    expect(props.toggleOpen).toBeCalledTimes(1);
  });

  it('should should have submit button disabled by default', () => {
    const wrapper = shallow(<PasswordChangeDialog {...props} />);
    const submitButton = wrapper.find(Button).at(1);
    expect(submitButton).toBeDefined();
    expect(submitButton.props().disabled).toBeTruthy();
  });

  it('should have disabled button if all fields are filled and old password is empty', () => {
    const { queryByTestId } = render(<PasswordChangeDialog {...props} />);

    const oldPassword = queryByTestId('old-pass-field');
    expect(oldPassword).toBeInTheDocument();

    const newPassword = queryByTestId('new-pass-field');
    expect(newPassword).toBeInTheDocument();

    const repeatPassword = queryByTestId('repeat-pass-field');
    expect(repeatPassword).toBeInTheDocument();

    fireEvent.change(newPassword, { target: { value: 'test' } });
    fireEvent.change(repeatPassword, { target: { value: 'test' } });

    const submitButton = queryByTestId('submit-btn');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  it('should have disabled button if all fields are filled and new password is empty', () => {
    const { queryByTestId } = render(<PasswordChangeDialog {...props} />);

    const oldPassword = queryByTestId('old-pass-field');
    expect(oldPassword).toBeInTheDocument();

    const newPassword = queryByTestId('new-pass-field');
    expect(newPassword).toBeInTheDocument();

    const repeatPassword = queryByTestId('repeat-pass-field');
    expect(repeatPassword).toBeInTheDocument();

    fireEvent.change(oldPassword, { target: { value: 'test' } });
    fireEvent.change(repeatPassword, { target: { value: 'test' } });

    const submitButton = queryByTestId('submit-btn');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  it('should have disabled button if all fields are filled and repeat new password is empty', () => {
    const { queryByTestId } = render(<PasswordChangeDialog {...props} />);

    const oldPassword = queryByTestId('old-pass-field');
    expect(oldPassword).toBeInTheDocument();

    const newPassword = queryByTestId('new-pass-field');
    expect(newPassword).toBeInTheDocument();

    const repeatPassword = queryByTestId('repeat-pass-field');
    expect(repeatPassword).toBeInTheDocument();

    fireEvent.change(oldPassword, { target: { value: 'test' } });
    fireEvent.change(newPassword, { target: { value: 'test' } });

    const submitButton = queryByTestId('submit-btn');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  it('should have enabled button if all fields are filled', () => {
    const { queryByTestId } = render(<PasswordChangeDialog {...props} />);

    const oldPassword = queryByTestId('old-pass-field');
    const newPassword = queryByTestId('new-pass-field');
    const repeatPassword = queryByTestId('repeat-pass-field');

    fireEvent.change(oldPassword, { target: { value: 'test' } });
    fireEvent.change(newPassword, { target: { value: 'test' } });
    fireEvent.change(repeatPassword, { target: { value: 'test' } });

    const submitButton = queryByTestId('submit-btn');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).not.toBeDisabled();
  });

  it('should should show the error message if passwords do not match', () => {
    const { queryByTestId } = render(<PasswordChangeDialog {...props} />);

    const oldPassword = queryByTestId('old-pass-field');
    const newPassword = queryByTestId('new-pass-field');
    const repeatPassword = queryByTestId('repeat-pass-field');

    fireEvent.change(oldPassword, { target: { value: 'test' } });
    fireEvent.change(newPassword, { target: { value: 'test' } });
    fireEvent.change(repeatPassword, { target: { value: 'testtest' } });

    const submitButton = queryByTestId('submit-btn');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).not.toBeDisabled();

    fireEvent.click(submitButton);

    const alert = queryByTestId('alert');
    expect(alert).toBeInTheDocument();
  });
});
