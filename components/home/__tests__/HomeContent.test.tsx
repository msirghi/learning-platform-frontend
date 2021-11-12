import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { HomeContent } from '../HomeContent';
import Grid from '@material-ui/core/Grid';
import MockDate from 'mockdate';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('HomeContent component', () => {
  const initialWidth = global.innerWidth;
  const mockStore = configureStore();
  const store = mockStore({ user: { email: 'email' } });

  beforeAll(() => {
    MockDate.set('2000-11-22');
  });

  afterAll(() => {
    global.innerWidth = initialWidth;
    MockDate.reset();
    global.dispatchEvent(new Event('resize'));
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <HomeContent />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have a Grid with spacing of 7 if the screen width is greater than 768px', () => {
    global.innerWidth = 1200;
    global.dispatchEvent(new Event('resize'));
    const wrapper = mount(
      <Provider store={store}>
        <HomeContent />
      </Provider>
    );
    const grid = wrapper.find(Grid).at(0);
    expect(grid.props().spacing).toBe(7);
  });

  it('should have a Grid with spacing of 5 if the screen width is less than 768px', () => {
    global.innerWidth = 700;
    global.dispatchEvent(new Event('resize'));
    const wrapper = mount(
      <Provider store={store}>
        <HomeContent />
      </Provider>
    );
    const grid = wrapper.find(Grid).at(0);
    expect(grid.props().spacing).toBe(5);
  });
});
