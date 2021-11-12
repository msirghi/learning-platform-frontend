import { Slider } from '@material-ui/core';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { FontSizeSlider } from '../FontSizeSlider';

describe('FontSizeSlider component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<FontSizeSlider handleFontChange={jest.fn()} value={12} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have a default value if it was not provided', () => {
    const wrapper = shallow(<FontSizeSlider handleFontChange={jest.fn()} />);
    const slider = wrapper.find(Slider);

    expect(slider).toHaveLength(1);
    expect(slider.props().value).toEqual(14);
  });

  it('should fire prop method on change', () => {
    const spy = jest.fn();
    const wrapper = shallow(<FontSizeSlider handleFontChange={spy} />);
    const slider = wrapper.find(Slider);
    expect(slider).toHaveLength(1);

    slider.props().onChange({} as React.ChangeEvent, 12);
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith(12);
  });
});
