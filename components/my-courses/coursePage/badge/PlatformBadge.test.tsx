import { Chip } from '@material-ui/core';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { LessonPlatform } from '../../../../common/enums';
import { PlatformBadge } from './PlatformBadge';

describe('PlatformBadge component', () => {
  const defaultProps = {
    selectedPlatform: LessonPlatform.OTHER,
    label: 'Label',
    isActive: true,
    onClick: jest.fn((data) => data)
  };

  it('should match the snapshot', () => {
    const wrapper = shallow(<PlatformBadge {...defaultProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render default chip if isActive prop is false', () => {
    const wrapper = shallow(<PlatformBadge {...defaultProps} isActive={false} />);
    const chip = wrapper.find(Chip);

    expect(chip).toHaveLength(1);
    expect(chip.props().color).toEqual('default');
  });

  it('should fire onClick prop with selected platform', () => {
    const wrapper = shallow(<PlatformBadge {...defaultProps} isActive={false} />);
    const chip = wrapper.find(Chip);

    expect(chip).toHaveLength(1);
    chip.simulate('click');
    expect(defaultProps.onClick).toBeCalledTimes(1);
    expect(defaultProps.onClick).toBeCalledWith(defaultProps.selectedPlatform);
  });
});
