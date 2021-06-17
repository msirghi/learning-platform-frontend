import { shallow } from 'enzyme';
import React from 'react';
import { Avatar } from './Avatar';

describe('Avatar component', () => {
  it('should render student avatar with specific class', () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.find('.studentAvatar')).toHaveLength(1);
  });
});
