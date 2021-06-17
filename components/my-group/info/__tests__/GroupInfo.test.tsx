import { IconButton } from '@material-ui/core';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { GroupInfo } from '../GroupInfo';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

describe('GroupInfo component', () => {
  const props = {
    totalMembers: 1,
    totalOnline: 1,
    groupName: 'name',
    showChevron: true,
    chevronDown: true,
    onChevronClick: jest.fn()
  };

  it('should match the snapshot', () => {
    const wrapper = shallow(<GroupInfo {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should fire on click prop handler on icon button click', () => {
    const wrapper = shallow(<GroupInfo {...props} />);
    const iconButton = wrapper.find(IconButton);
    expect(iconButton).toHaveLength(1);

    iconButton.simulate('click');
    expect(props.onChevronClick).toBeCalled();
  });

  it('should render arrow up on chevron down status', () => {
    const wrapper = shallow(<GroupInfo {...props} />);
    const arrowUp = wrapper.find(KeyboardArrowUpIcon);
    const arrowDown = wrapper.find(KeyboardArrowDownIcon);

    expect(arrowUp).toHaveLength(1);
    expect(arrowDown).toHaveLength(0);
  });

  it('should render arrow down on chevron up status', () => {
    const wrapper = shallow(<GroupInfo {...props} chevronDown={false} />);
    const arrowUp = wrapper.find(KeyboardArrowUpIcon);
    const arrowDown = wrapper.find(KeyboardArrowDownIcon);

    expect(arrowUp).toHaveLength(0);
    expect(arrowDown).toHaveLength(1);
  });
});
