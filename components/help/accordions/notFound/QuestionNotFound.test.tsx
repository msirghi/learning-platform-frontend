import { Button } from '@material-ui/core';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { QuestionConfirmationDialog } from '../confirmationDialog/ConfirmationDialog';
import { QuestionNotFound } from './QuestionNotFound';

describe('QuestionNotFound component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <SnackbarProvider>
        <QuestionNotFound searchInputValue='val' />
      </SnackbarProvider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should toggle confirmation dialog on button click', () => {
    const wrapper = mount(
      <SnackbarProvider>
        <QuestionNotFound searchInputValue='val' />
      </SnackbarProvider>
    );
    const button = wrapper.find(Button);
    expect(button).toHaveLength(1);

    button.simulate('click');
    const dialog = wrapper.find(QuestionConfirmationDialog);
    expect(dialog).toHaveLength(1);
    expect(dialog.props().open).toBeTruthy();
  });

  it('should close confirmation dialog on submitting', () => {
    const wrapper = mount(
      <SnackbarProvider>
        <QuestionNotFound searchInputValue='val' />
      </SnackbarProvider>
    );
    const dialog = wrapper.find(QuestionConfirmationDialog);
    expect(dialog).toHaveLength(1);

    dialog.props().onDialogSubmit();
    expect(dialog.props().open).toBeFalsy();
  });
});
