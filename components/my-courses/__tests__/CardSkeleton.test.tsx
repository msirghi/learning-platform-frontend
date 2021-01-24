import { Card } from '@material-ui/core';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { CardSkeleton } from '../CardSkeleton';

describe('CardSkeleton component', () => {
  const initWidth = global.innerWidth;

  beforeAll(() => {
    global.innerWidth = initWidth;
    global.dispatchEvent(new Event('resize'));
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<CardSkeleton />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have specific card width on mobile', () => {
    global.innerWidth = 400;
    global.dispatchEvent(new Event('resize'));
    const wrapper = shallow(<CardSkeleton />);
    const card = wrapper.find(Card);

    expect(card).toHaveLength(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
