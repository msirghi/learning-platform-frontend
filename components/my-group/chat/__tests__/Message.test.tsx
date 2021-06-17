import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { ChatAvatar } from '../ChatAvatar';
import { Message } from '../Message';

describe('ChatMessage component', () => {
  const defaultProps = {
    hideAvatar: true,
    chatMessage: { date: new Date(), message: 'Message', author: 'Me', id: 1 },
    fromMe: false,
    fontSize: 14
  };

  it('should match the snapshot if all the props are provided', () => {
    const wrapper = shallow(<Message {...defaultProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render ChatAvatar component', () => {
    const wrapper = shallow(<Message {...defaultProps} fromMe={false} hideAvatar={false} />);
    expect(wrapper.find(ChatAvatar)).toHaveLength(1);
  });

  it('should render ChatAvatar component if the message is mine and avatar is hiddedn', () => {
    const wrapper = shallow(<Message {...defaultProps} fromMe hideAvatar={false} />);
    expect(wrapper.find(ChatAvatar)).toHaveLength(1);
  });
});
