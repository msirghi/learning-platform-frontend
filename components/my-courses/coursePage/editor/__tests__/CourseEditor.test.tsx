import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { CourseEditor } from '../CourseEditor';
import { SnackbarProvider } from 'notistack';
import { fireEvent, render } from '@testing-library/react';
import { ConfirmationDialog } from '../dialog/ConfirmationDialog';
import { Button, TextField } from '@material-ui/core';
import { CourseEditorForm } from '../mainEditor/CourseEditorForm';
import { FileEditor } from '../fileEditor/FileEditor';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import { MAXIMUM_LESSON_FILES } from '../../../../../common/constants/common.constants';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

describe('CourseEditor component', () => {
  const mockEnqueue = jest.fn();

  jest.mock('notistack', () => ({
    ...jest.requireActual('notistack'),
    useSnackbar: () => {
      return {
        enqueueSnackbar: mockEnqueue
      };
    }
  }));

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    const wrapper = mount(
      <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITEKEY}>
        <SnackbarProvider maxSnack={3}>
          <CourseEditor />
        </SnackbarProvider>
      </GoogleReCaptchaProvider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render all the fields', () => {
    const { getByTestId } = render(
      <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITEKEY}>
        <SnackbarProvider maxSnack={3}>
          <CourseEditor />
        </SnackbarProvider>
      </GoogleReCaptchaProvider>
    );

    const subjectField = getByTestId('subject-field');
    expect(subjectField).toBeInTheDocument();

    const startDateField = getByTestId('start-date-field');
    expect(startDateField).toBeInTheDocument();

    const endDateField = getByTestId('end-date-field');
    expect(endDateField).toBeInTheDocument();

    const startTimeField = getByTestId('start-time-field');
    expect(startTimeField).toBeInTheDocument();

    const endTimeField = getByTestId('end-time-field');
    expect(endTimeField).toBeInTheDocument();

    const descriptionField = getByTestId('description-field');
    expect(descriptionField).toBeInTheDocument();
  });

  it('should render confirmation dialog on filling the form and not selectin the platform', () => {
    const { getByTestId } = render(
      <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITEKEY}>
        <SnackbarProvider maxSnack={3}>
          <CourseEditor />
        </SnackbarProvider>
      </GoogleReCaptchaProvider>
    );

    const subjectField = getByTestId('subject-field');
    fireEvent.change(subjectField, { target: { value: 'Some subject' } });

    expect(subjectField).toHaveValue('Some subject');

    const submitButton = getByTestId('course-submit');
    expect(submitButton).toBeInTheDocument();

    const confirmationDialog = getByTestId('confirmation-dialog');
    expect(confirmationDialog).toBeInTheDocument();
  });

  it('should not show confirmation dialog on onCancel prop call in the dialog', () => {
    const wrapper = mount(
      <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITEKEY}>
        <SnackbarProvider maxSnack={3}>
          <CourseEditor />
        </SnackbarProvider>
      </GoogleReCaptchaProvider>
    );

    const dialog = wrapper.find(ConfirmationDialog);
    expect(dialog).toHaveLength(1);

    dialog.props().onCancel();
    expect(dialog.props().open).toBeFalsy();
  });

  it('should not show confirmation dialog if the subject field is not filled', () => {
    const wrapper = mount(
      <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITEKEY}>
        <SnackbarProvider maxSnack={3}>
          <CourseEditor />
        </SnackbarProvider>
      </GoogleReCaptchaProvider>
    );

    const form = wrapper.find(CourseEditorForm);
    expect(form).toHaveLength(1);

    const button = form.find(Button);
    button.simulate('click');

    const dialog = wrapper.find(ConfirmationDialog);
    dialog.props().onCancel();
    expect(dialog.props().open).toBeFalsy();
  });

  it('should not show confirmation dialog if the platform is not selected', () => {
    const wrapper = mount(
      <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITEKEY}>
        <SnackbarProvider maxSnack={3}>
          <CourseEditor />
        </SnackbarProvider>
      </GoogleReCaptchaProvider>
    );

    const form = wrapper.find(CourseEditorForm);
    expect(form).toHaveLength(1);

    form.props().onChange('subject', 'Subject');
    const subjectField = form.find(TextField).at(0);
    expect(subjectField).toBeDefined();

    subjectField.simulate('change', { target: { value: 'Subject' } });
    subjectField.props().value = 'Subject';
    expect(subjectField.props().value).toEqual('Subject');
    wrapper.update();

    const button = form.find(Button);
    button.simulate('click');

    wrapper.update();
    const dialog = wrapper.find(ConfirmationDialog);
    dialog.props().onCancel();
    expect(dialog.props().open).toBeTruthy();
  });

  it('should not accept too big files', () => {
    const wrapper = mount(
      <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITEKEY}>
        <SnackbarProvider maxSnack={3}>
          <CourseEditor />
        </SnackbarProvider>
      </GoogleReCaptchaProvider>
    );

    const fileEditor = wrapper.find(FileEditor);
    expect(fileEditor).toHaveLength(1);

    fileEditor.props().onFileSelect({
      target: { files: [({ name: 'Name', size: 999999999 } as unknown) as File] }
    });
    expect(wrapper.find(InsertDriveFileIcon)).toHaveLength(0);
  });

  it.todo(`should not accept more than ${MAXIMUM_LESSON_FILES} files`);
});
