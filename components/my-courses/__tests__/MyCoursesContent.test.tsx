import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { FullscreenSpinner } from '../../common/spinners/FullscreenSpinner';
import { MyCoursesContent } from '../MyCoursesContent';
import TextField from '@material-ui/core/TextField';
import { CourseNotFound } from '../CourseNotFound';
import { PageDots } from '../PageDots';

describe('MyCoursesContent component', () => {
  it('should match the snapshot', () => {
    const wrapper = mount(<MyCoursesContent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match the snapshot on mobile screen width', () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));

    const wrapper = mount(<MyCoursesContent />);
    expect(toJson(wrapper)).toMatchSnapshot();

    global.innerWidth = 1200;
    global.dispatchEvent(new Event('resize'));
  });

  it('should render loader if no courses available', () => {
    const wrapper = shallow(<MyCoursesContent />);
    expect(wrapper.find(FullscreenSpinner).length).toEqual(1);
  });

  it('should render NotFound component if there are no curses after filtering', () => {
    const wrapper = mount(<MyCoursesContent />);
    const input = wrapper.find(TextField);

    expect(input).toHaveLength(1);
    input.props().onChange({ target: { value: 'not found' } });

    wrapper.update();
    expect(wrapper.find(CourseNotFound)).toHaveLength(1);
  });

  it('should render scroll to the top on page change', () => {
    jest.spyOn(window, 'scrollTo');
    const wrapper = mount(<MyCoursesContent />);
    const pageDots = wrapper.find(PageDots);
    pageDots.props().onPageChange(1);
    expect(window.scrollTo).toBeCalled();
  });

  it('should render not render NotFound component on input change if input value is empty', () => {
    const wrapper = mount(<MyCoursesContent />);
    const input = wrapper.find(TextField);

    expect(input).toHaveLength(1);
    input.props().onChange({ target: { value: 'not found' } });

    wrapper.update();

    input.props().onChange({ target: { value: '' } });
    wrapper.update();
    expect(wrapper.find(CourseNotFound)).toHaveLength(0);
  });
});
