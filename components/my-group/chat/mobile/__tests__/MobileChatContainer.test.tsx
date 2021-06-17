import { fireEvent, render } from '@testing-library/react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { ChatThemes } from '../../../../../common/enums';
import { MobileChatContainer } from '../MobileChatContainer';
import { MobileChatHeader } from '../MobileChatHeader';
import { MobileChatSettings } from '../MobileChatSettings';
import userEvent from '@testing-library/user-event';

describe('MobileChatContainer component', () => {
  const props = {
    onBackClick: jest.fn(),
    chatOpened: false,
    chatTheme: ChatThemes.WHITE,
    handleThemeChange: jest.fn(),
    chatFontSize: 14,
    handleFontChange: jest.fn()
  };

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot on valid props', () => {
    const wrapper = shallow(<MobileChatContainer {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should toggle mobile chat settings on header click', () => {
    const wrapper = shallow(<MobileChatContainer {...props} />);
    const header = wrapper.find(MobileChatHeader);

    expect(header).toHaveLength(1);
    header.props().toggleSettings();
    wrapper.update();
    const settings = wrapper.find(MobileChatSettings);
    expect(settings).toHaveLength(1);
  });

  it('should handle theme change on for mobile devices', () => {
    const spy = jest.fn((data) => data);
    const wrapper = shallow(<MobileChatContainer {...props} handleThemeChange={spy} />);
    const header = wrapper.find(MobileChatHeader);
    header.props().toggleSettings();
    wrapper.update();

    const settings = wrapper.find(MobileChatSettings);
    expect(settings).toHaveLength(1);
    settings.props().handleThemeChange(ChatThemes.WHEAT);
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(ChatThemes.WHEAT);
  });

  it('should handle settings toggle on for mobile devices', () => {
    const wrapper = shallow(<MobileChatContainer {...props} />);
    const header = wrapper.find(MobileChatHeader);
    header.props().toggleSettings();
    wrapper.update();

    const settings = wrapper.find(MobileChatSettings);
    expect(settings).toHaveLength(1);
    settings.props().toggleSettings();
    wrapper.update();
    expect(wrapper.find('.fixedContainer')).toHaveLength(1);
  });

  it('should handle text field change', () => {
    const { queryByTestId } = render(<MobileChatContainer {...props} />);
    const input = queryByTestId('message-field');
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input).toHaveValue('new value');
    fireEvent.keyDown(input, { keyCode: 13 });
    expect(input).toHaveValue('');
  });

  it('should handle text field focus', () => {
    const { queryByTestId } = render(<MobileChatContainer {...props} />);
    const input = queryByTestId('message-field');
    expect(input).toBeInTheDocument();

    userEvent.click(input);
    expect(input).toHaveFocus();
  });

  it('should handle text field keydown', () => {
    const { queryByTestId } = render(<MobileChatContainer {...props} />);
    const input = queryByTestId('message-field');
    expect(input).toBeInTheDocument();

    userEvent.type(input, 'new value');
    expect(input).toHaveValue('new value');
    fireEvent.keyDown(input, { keyCode: 13 });

    const sendButton = queryByTestId('send-button');
    expect(sendButton).toBeInTheDocument();
    userEvent.click(sendButton);
    expect(input).toHaveValue('');
  });

  it('should not clear the field if enter was not pressed', () => {
    const { queryByTestId } = render(<MobileChatContainer {...props} />);
    const input = queryByTestId('message-field');
    expect(input).toBeInTheDocument();

    userEvent.type(input, 'new value');
    expect(input).toHaveValue('new value');
    fireEvent.keyDown(input, { keyCode: 14 });
    expect(input).toHaveValue('new value');
  });

  it('should render the field with the same value on trying to clear the empty value', () => {
    const { queryByTestId } = render(<MobileChatContainer {...props} />);
    const input = queryByTestId('message-field');
    expect(input).toBeInTheDocument();

    userEvent.type(input, '');
    expect(input).toHaveValue('');

    const sendButton = queryByTestId('send-button');
    expect(sendButton).toBeInTheDocument();
    userEvent.click(sendButton);
    expect(input).toHaveValue('');
  });
});
