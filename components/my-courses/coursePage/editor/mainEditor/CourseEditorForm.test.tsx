import { Button, TextField } from '@material-ui/core';
import { DatePicker, TimePicker } from '@material-ui/pickers';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { LessonCreationFormValues } from '../../../../../common/types';
import { CourseEditorForm } from './CourseEditorForm';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

describe('CourseEditorForm component', () => {
  const defaultProps = {
    onSubmit: jest.fn(),
    onChange: jest.fn((d) => d),
    values: {
      subject: 'Subject',
      endDate: new Date(),
      endTime: new Date(),
      startDate: new Date(),
      startTime: new Date(),
      description: 'description'
    } as LessonCreationFormValues
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot if all the props are provided', () => {
    const wrapper = shallow(<CourseEditorForm {...defaultProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should fire onChange prop function on subject field change', () => {
    const wrapper = shallow(<CourseEditorForm {...defaultProps} />);
    const subjectInput = wrapper.find(TextField).at(0);

    subjectInput.simulate('change', { target: { value: 'New value' } });
    expect(defaultProps.onChange).toBeCalled();
  });

  it('should fire onChange prop function on description field change', () => {
    const wrapper = shallow(<CourseEditorForm {...defaultProps} />);
    const subjectInput = wrapper.find(TextField).at(1);

    subjectInput.simulate('change', { target: { value: 'New value' } });
    expect(defaultProps.onChange).toBeCalled();
  });

  it('should fire onChange prop function on start date field change', () => {
    const wrapper = shallow(<CourseEditorForm {...defaultProps} />);
    const picker = wrapper.find(DatePicker).at(0);

    picker.simulate('change', { target: { value: new Date() } });
    expect(picker.props().helperText).toEqual('courses:editor.startDateLabel');
    expect(defaultProps.onChange).toBeCalledTimes(1);
  });

  it('should fire onChange prop function on end date field change', () => {
    const wrapper = shallow(<CourseEditorForm {...defaultProps} />);
    const picker = wrapper.find(DatePicker).at(1);

    picker.simulate('change', { target: { value: new Date() } });
    expect(picker.props().helperText).toEqual('courses:editor.endDateLabel');
    expect(defaultProps.onChange).toBeCalledTimes(1);
  });

  it('should fire onChange prop function on end time field change', () => {
    const wrapper = shallow(<CourseEditorForm {...defaultProps} />);
    const picker = wrapper.find(TimePicker).at(1);

    picker.simulate('change', { target: { value: new Date() } });
    expect(picker.props().helperText).toEqual('courses:editor.endTimeLabel');
    expect(defaultProps.onChange).toBeCalledTimes(1);
  });

  it('should fire onChange prop function on start time field change', () => {
    const wrapper = shallow(<CourseEditorForm {...defaultProps} />);
    const picker = wrapper.find(TimePicker).at(0);

    picker.simulate('change', { target: { value: new Date() } });
    expect(picker.props().helperText).toEqual('courses:editor.startTimeLabel');
    expect(defaultProps.onChange).toBeCalledTimes(1);
  });

  it('should not render submit button on mobile view', () => {
    const initialWidth = global.innerWidth;
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));

    const wrapper = mount(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <CourseEditorForm {...defaultProps} />
      </MuiPickersUtilsProvider>
    );
    const button = wrapper.find(Button);
    expect(button).toHaveLength(0);

    global.innerWidth = initialWidth;
    global.dispatchEvent(new Event('resize'));
  });

  it('should render submit button on desktop', () => {
    const wrapper = mount(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <CourseEditorForm {...defaultProps} />
      </MuiPickersUtilsProvider>
    );
    const button = wrapper.find(Button);
    expect(button).toHaveLength(1);
  });

  it('should fire onSubmit prop function clicking the submit button', () => {
    const initialWidth = global.innerWidth;
    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));

    const wrapper = mount(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <CourseEditorForm {...defaultProps} />
      </MuiPickersUtilsProvider>
    );
    const button = wrapper.find(Button);

    expect(button).toHaveLength(1);
    button.simulate('click');
    expect(defaultProps.onSubmit).toBeCalled();

    global.innerWidth = initialWidth;
    global.dispatchEvent(new Event('resize'));
  });
});
