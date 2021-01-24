import { shallow } from 'enzyme';
import React from 'react';
import CourseCard from '../CourseCard';
import { coursesMock } from '../../../mocks/coursesMock';
import toJson from 'enzyme-to-json';
import { COURSE_DEFAULT_COVER_IMAGE } from '../../../common/constants/common.constants';

describe('CourseCard component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<CourseCard course={coursesMock[0]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have default image cover if there is no cover image', () => {
    const wrapper = shallow(<CourseCard course={{ ...coursesMock[0], coverImg: null }} />);
    const img = wrapper.find('img').at(0);
    expect(img.props().src).toEqual(COURSE_DEFAULT_COVER_IMAGE);
  });
});
