import { Button } from '@material-ui/core';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { ColorPaletteTemplate } from '../../settings/ColorPaletteTemplate';
import { FontSizeSlider } from '../../settings/FontSizeSlider';
import { MobileChatSettings } from '../MobileChatSettings';

describe('MobileChatSettings', () => {
  const props = {
    currentColor: '#fff',
    chatFontSize: 14,
    handleThemeChange: jest.fn(),
    handleFontChange: jest.fn(),
    toggleSettings: jest.fn()
  };

  it('should match the snapshot when all props are provided', () => {
    const wrapper = shallow(<MobileChatSettings {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should fire prop function on palette change', () => {
    const spy = jest.fn();
    const wrapper = shallow(<MobileChatSettings {...props} handleThemeChange={spy} />);

    const paletteTemplates = wrapper.find(ColorPaletteTemplate);
    expect(paletteTemplates.length > 1).toBeTruthy();

    paletteTemplates.at(0).props().onChange();
    expect(spy).toBeCalled();
  });

  it('should fire prop function on font size change', () => {
    const spy = jest.fn((data) => data);
    const wrapper = shallow(<MobileChatSettings {...props} handleFontChange={spy} />);

    const slider = wrapper.find(FontSizeSlider);
    expect(slider).toHaveLength(1);
    slider.props().handleFontChange(14);
    expect(spy).toBeCalled();
    expect(spy).toHaveBeenCalledWith(14);
  });

  it('should fire prop function on apply button click', () => {
    const spy = jest.fn();
    const wrapper = shallow(<MobileChatSettings {...props} toggleSettings={spy} />);

    const button = wrapper.find(Button);
    expect(button).toHaveLength(1);
    button.simulate('click');
    expect(spy).toBeCalled();
  });
});
