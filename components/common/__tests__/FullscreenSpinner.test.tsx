import { shallow } from 'enzyme';
import React from 'react';
import { JellyfishSpinner } from 'react-spinners-kit';
import { FullscreenSpinner } from '../spinners/FullscreenSpinner';

describe('FullscreenSpinner component', () => {
  it('should render the spinner', () => {
    const wrapper = shallow(<FullscreenSpinner />);
    const spinner = wrapper.find(JellyfishSpinner);
    expect(spinner).toHaveLength(1);
    expect(spinner.props().size).toEqual(220);
  });
});
