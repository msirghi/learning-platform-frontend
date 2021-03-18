import { shallow } from 'enzyme';
import React from 'react';
import CourseCard from './CourseCard';
import { coursesMock } from '../../../mocks/coursesMock';
import toJson from 'enzyme-to-json';
import { COURSE_DEFAULT_COVER_IMAGE } from '../../../common/constants/common.constants';
import { Button } from '@material-ui/core';

describe('CourseCard component', () => {
  /* eslint-disable */
  const useRouter = jest.spyOn(require('next/router'), 'useRouter');
  const pushSpy = jest.fn();

  useRouter.mockImplementation(() => ({
    route: '/yourRoute',
    pathname: '/yourRoute',
    query: '',
    asPath: '',
    push: pushSpy
  }));

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<CourseCard course={coursesMock[0]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have default image cover if there is no cover image', () => {
    const wrapper = shallow(<CourseCard course={{ ...coursesMock[0], coverImg: null }} />);
    const img = wrapper.find('img').at(0);
    expect(img.props().src).toEqual(COURSE_DEFAULT_COVER_IMAGE);
  });

  it('should redirect on button click', () => {
    const wrapper = shallow(<CourseCard course={{ ...coursesMock[0], coverImg: null }} />);
    const button = wrapper.find(Button);

    expect(button).toHaveLength(1);
    button.simulate('click');
    expect(pushSpy).toBeCalled();
  });
});
