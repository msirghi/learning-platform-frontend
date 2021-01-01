import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { HomeContent } from '../HomeContent';
import Grid from '@material-ui/core/Grid';
import MockDate from 'mockdate';

describe('HomeContent component', () => {
  const initialWidth = global.innerWidth;

  beforeAll(() => {
    MockDate.set('2000-11-22');
  });

  afterAll(() => {
    global.innerWidth = initialWidth;
    MockDate.reset();
    global.dispatchEvent(new Event('resize'));
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<HomeContent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have a Grid with spacing of 10 if the screen width is greater than 768px', () => {
    global.innerWidth = 1200;
    global.dispatchEvent(new Event('resize'));
    const wrapper = mount(<HomeContent />);
    const grid = wrapper.find(Grid).at(0);
    expect(grid.props().spacing).toBe(10);
  });

  it('should have a Grid with spacing of 5 if the screen width is less than 768px', () => {
    global.innerWidth = 700;
    global.dispatchEvent(new Event('resize'));
    const wrapper = mount(<HomeContent />);
    const grid = wrapper.find(Grid).at(0);
    expect(grid.props().spacing).toBe(5);
  });
});
