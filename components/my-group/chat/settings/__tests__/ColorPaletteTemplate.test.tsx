import { Radio } from '@material-ui/core';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { ChatThemes } from '../../../../../common/enums';
import { ColorPaletteTemplate } from '../ColorPaletteTemplate';

describe('ColorPaletteTemplate component', () => {
  it('should match the snapshot on default color', () => {
    const wrapper = shallow(
      <ColorPaletteTemplate onChange={jest.fn()} color={ChatThemes.WHITE} checked />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have specific color', () => {
    const wrapper = shallow(<ColorPaletteTemplate onChange={jest.fn()} color={'red'} checked />);
    const container = wrapper.find('.colorPaletteTemplate');

    expect(container).toHaveLength(1);
    expect(container.props().style.backgroundColor).toEqual('red');
  });

  it('should have a cheched radio of checkced prop is true', () => {
    const wrapper = shallow(<ColorPaletteTemplate onChange={jest.fn()} color={'red'} checked />);
    const radio = wrapper.find(Radio);

    expect(radio).toHaveLength(1);
    expect(radio.props().checked).toBeTruthy();
  });

  it('should not have a cheched radio of checkced prop is false', () => {
    const wrapper = shallow(
      <ColorPaletteTemplate onChange={jest.fn()} color={'red'} checked={false} />
    );
    const radio = wrapper.find(Radio);

    expect(radio).toHaveLength(1);
    expect(radio.props().checked).toBeFalsy();
  });

  it('should call prop method on radio button change', () => {
    const spy = jest.fn();
    const wrapper = shallow(<ColorPaletteTemplate onChange={spy} color={'red'} checked={false} />);
    const radio = wrapper.find(Radio);

    expect(radio).toHaveLength(1);
    radio.simulate('change');
    expect(spy).toBeCalled();
  });
});
