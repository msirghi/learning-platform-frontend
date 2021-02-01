import { TextField } from '@material-ui/core';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { TopicFilter } from '../TopicFilter';

describe('TopicFilter component', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<TopicFilter value='val' onChange={jest.fn()} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have proper input value', () => {
    const wrapper = shallow(<TopicFilter value='val' onChange={jest.fn()} />);
    const input = wrapper.find(TextField);

    expect(input).toHaveLength(1);
    expect(input.props().value).toEqual('val');
  });

  it('should have input that is not full width on desktop', () => {
    const initWidth = global.innerWidth;
    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));

    const wrapper = mount(<TopicFilter value='val' onChange={jest.fn()} />);
    const input = wrapper.find(TextField);

    wrapper.update();
    expect(input).toHaveLength(1);
    expect(input.props().fullWidth).toBeFalsy();
    global.innerWidth = initWidth;
    global.dispatchEvent(new Event('resize'));
  });

  it('should have input that is full width on mobile', () => {
    const initWidth = global.innerWidth;
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
    const wrapper = shallow(<TopicFilter value='val' onChange={jest.fn()} />);
    const input = wrapper.find(TextField);

    expect(input).toHaveLength(1);
    expect(input.props().fullWidth).toBeTruthy();
    global.innerWidth = initWidth;
    global.dispatchEvent(new Event('resize'));
  });

  it('should call onChange prop on input change', () => {
    const spy = jest.fn((data) => data);
    const wrapper = shallow(<TopicFilter value='val' onChange={spy} />);
    const input = wrapper.find(TextField);

    expect(input).toHaveLength(1);
    input.props().onChange({ target: { value: 'new value' } });
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith('new value');
  });
});
