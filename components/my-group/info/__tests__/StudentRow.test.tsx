import { Tooltip } from '@material-ui/core';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { StudentRow } from '../StudentRow';

describe('StudentRow component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<StudentRow name='Name' />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render Tooltip if isOnline prop is true', () => {
    const wrapper = shallow(<StudentRow name='Name' isOnline />);
    expect(wrapper.find(Tooltip)).toHaveLength(1);
  });
});
