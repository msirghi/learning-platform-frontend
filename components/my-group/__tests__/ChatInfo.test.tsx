import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { ChatInfo } from '../ChatInfo';

describe('ChatInfo component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<ChatInfo />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
