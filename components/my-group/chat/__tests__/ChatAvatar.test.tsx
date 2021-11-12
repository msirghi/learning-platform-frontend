import { shallow } from 'enzyme';
import React from 'react';
import { ChatAvatar } from '../ChatAvatar';

describe('ChatAvatar component', () => {
  it('should render avatar with specific class', () => {
    const wrapper = shallow(<ChatAvatar />);
    expect(wrapper.find('.avatar')).toHaveLength(1);
  });
});
