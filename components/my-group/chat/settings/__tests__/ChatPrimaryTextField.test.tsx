import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { ChatPrimaryTextField, ValidationTextField } from '../../ChatPrimaryTextField';
import SendIcon from '@material-ui/icons/Send';

describe('ValidationTextField component', () => {
  const props = {
    onKeyDown: jest.fn(),
    value: 'default',
    onChange: jest.fn(),
    onMessageSend: jest.fn(),
    onFocus: jest.fn()
  };

  it('should match the snapshot if all props are provided', () => {
    const wrapper = shallow(<ChatPrimaryTextField {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should fire on focus prop method on input focus event', () => {
    const spy = jest.fn();
    const wrapper = shallow(<ChatPrimaryTextField {...props} onFocus={spy} />);

    const input = wrapper.find(ValidationTextField);
    expect(input).toHaveLength(1);
    input
      .props()
      .onFocus(({} as unknown) as React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>);
    expect(spy).toBeCalled();
  });

  it('should fire on change prop method on input change event', () => {
    const spy = jest.fn((data) => data);
    const wrapper = shallow(<ChatPrimaryTextField {...props} onChange={spy} />);

    const input = wrapper.find(ValidationTextField);
    expect(input).toHaveLength(1);
    input.simulate('change', { target: { value: 'test' } });

    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith('test');
  });

  it('should fire on key down prop method on input keyDown event', () => {
    const spy = jest.fn((data) => data);
    const wrapper = shallow(<ChatPrimaryTextField {...props} onKeyDown={spy} />);

    const input = wrapper.find(ValidationTextField);
    expect(input).toHaveLength(1);
    input.props().onKeyDown(({} as unknown) as React.KeyboardEvent<HTMLDivElement>);

    expect(spy).toBeCalled();
  });

  it('should fire on key prop method on send icon click', () => {
    const spy = jest.fn();
    const wrapper = mount(<ChatPrimaryTextField {...props} onMessageSend={spy} />);
    const button = wrapper.find(SendIcon);
    button.simulate('click');

    expect(spy).toBeCalled();
  });
});
