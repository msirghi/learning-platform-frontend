import { Button, Dialog } from '@material-ui/core';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { ConfirmationDialog } from './ConfirmationDialog';

describe('ConfirmationDialog component', () => {
  const defaultProps = {
    message: 'Message',
    onSubmit: jest.fn(),
    onCancel: jest.fn(),
    open: false
  };

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot if all props are provided', () => {
    const wrapper = shallow(<ConfirmationDialog {...defaultProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should set open status with the status from props', () => {
    const wrapper = shallow(<ConfirmationDialog {...defaultProps} open />);
    const dialog = wrapper.find(Dialog);

    expect(dialog).toHaveLength(1);
    expect(dialog.props().open).toBeTruthy();
  });

  it('should fire onSubmit prop function on clicking the submit button', () => {
    const wrapper = shallow(<ConfirmationDialog {...defaultProps} open />);
    const button = wrapper.find(Button).at(1);

    expect(button).toBeDefined();
    button.simulate('click');
    expect(defaultProps.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should fire onCancel prop function on clicking the cancel button', () => {
    const wrapper = shallow(<ConfirmationDialog {...defaultProps} open />);
    const button = wrapper.find(Button).at(0);

    expect(button).toBeDefined();
    button.simulate('click');
    expect(defaultProps.onCancel).toHaveBeenCalledTimes(1);
  });
});
