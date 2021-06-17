import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { CourseFilter } from '../CourseFilter';
import { MyCoursesHeader } from '../MyCoursesHeader';

describe('MyCoursesHeader component', () => {
  const props = {
    onSearchInputChange: jest.fn(),
    searchValue: 'string'
  };

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<MyCoursesHeader {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call onSeachInputChange on filter change', () => {
    const wrapper = shallow(<MyCoursesHeader {...props} />);
    const filter = wrapper.find(CourseFilter);

    expect(filter).toHaveLength(1);
    filter.props().onSearchInputChange('val');
    expect(props.onSearchInputChange).toBeCalled();
    expect(props.onSearchInputChange).toBeCalledWith('val');
  });
});
