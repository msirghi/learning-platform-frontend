import { Fab } from '@material-ui/core';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { MobileGroupInfo } from '../MobileGroupInfo';

describe('MobileGroupInfo component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<MobileGroupInfo openChatHandler={jest.fn()} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should fire prop spy on opening the chat', () => {
    const spy = jest.fn();
    const wrapper = shallow(<MobileGroupInfo openChatHandler={spy} />);

    const fab = wrapper.find(Fab);
    expect(fab).toHaveLength(1);

    fab.simulate('click');
    wrapper.update();
    expect(spy).toBeCalled();
  });
});
