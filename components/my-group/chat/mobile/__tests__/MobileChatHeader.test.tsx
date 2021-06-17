import { IconButton } from '@material-ui/core';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { MobileChatHeader } from '../MobileChatHeader';

describe('MobileChatHeader component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <MobileChatHeader total={3} online={4} onBackClick={jest.fn()} toggleSettings={jest.fn()} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should fire prop function on arrow button click', () => {
    const spy = jest.fn();
    const wrapper = shallow(
      <MobileChatHeader total={3} online={4} onBackClick={spy} toggleSettings={jest.fn()} />
    );

    const arrowButton = wrapper.find(IconButton).at(0);
    arrowButton.simulate('click');
    expect(spy).toBeCalled();
  });

  it('should fire prop function on settings button click', () => {
    const spy = jest.fn();
    const wrapper = shallow(
      <MobileChatHeader total={3} online={4} onBackClick={jest.fn()} toggleSettings={spy} />
    );

    const settingsButton = wrapper.find(IconButton).at(1);
    settingsButton.simulate('click');
    expect(spy).toBeCalled();
  });

  it('should not render online memebers if online prop is 0', () => {
    const wrapper = shallow(
      <MobileChatHeader total={3} online={0} onBackClick={jest.fn()} toggleSettings={jest.fn()} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
