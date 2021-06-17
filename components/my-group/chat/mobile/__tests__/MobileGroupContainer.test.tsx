import { shallow } from 'enzyme';
import React from 'react';
import { ChatThemes } from '../../../../../common/enums';
import { MobileChatContainer } from '../MobileChatContainer';
import { MobileGroupContainer } from '../MobileGroupContainer';

describe('MobileGroupContainer component', () => {
  const props = {
    chatTheme: ChatThemes.WHITE,
    handleThemeChange: jest.fn(),
    chatFontSize: 14,
    handleFontChange: jest.fn()
  };

  it('should have hidden container by default', () => {
    const wrapper = shallow(<MobileGroupContainer {...props} />);
    expect(wrapper.find('.hide')).toHaveLength(1);
  });

  it('should have hidden container on mobile chat toggled', () => {
    const wrapper = shallow(<MobileGroupContainer {...props} />);
    const mobileChat = wrapper.find(MobileChatContainer);

    expect(mobileChat).toHaveLength(1);
    mobileChat.props().onBackClick();
    wrapper.update();
    expect(wrapper.find('.hide')).toHaveLength(1);
  });
});
