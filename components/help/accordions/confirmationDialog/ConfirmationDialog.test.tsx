import { Button, Dialog } from '@material-ui/core';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { QuestionConfirmationDialog } from './ConfirmationDialog';

describe('QuestionConfirmationDialog component', () => {
  const defaultProps = {
    open: false,
    handleClose: jest.fn(),
    searchInputValue: 'input value',
    onDialogSubmit: jest.fn()
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<QuestionConfirmationDialog {...defaultProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call handleClose prop on cancel button click', () => {
    const wrapper = shallow(<QuestionConfirmationDialog {...defaultProps} />);
    const button = wrapper.find(Button).at(0);

    expect(button).toHaveLength(1);
    button.simulate('click');
    expect(defaultProps.handleClose).toBeCalled();
  });

  it('should call handleClose prop on dialog close', () => {
    const wrapper = shallow(<QuestionConfirmationDialog {...defaultProps} />);
    const dialog = wrapper.find(Dialog);
    expect(dialog).toHaveLength(1);

    dialog.props().onClose({}, 'backdropClick');
    expect(defaultProps.handleClose).toBeCalled();
  });

  it('should call onDialogSubmit prop on submit button click', () => {
    const wrapper = shallow(<QuestionConfirmationDialog {...defaultProps} />);
    const button = wrapper.find(Button).at(1);

    expect(button).toHaveLength(1);
    button.simulate('click');
    expect(defaultProps.onDialogSubmit).toBeCalled();
  });

  it('should render provided message', () => {
    const wrapper = shallow(<QuestionConfirmationDialog {...defaultProps} />);
    expect(wrapper.text().includes(defaultProps.searchInputValue)).toBeTruthy();
  });
});
