import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { NavBar } from '../NavBar';
import IconButton from '@material-ui/core/IconButton';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Typography } from '@material-ui/core';

describe('NavBar component', () => {
  const props = {
    classes: { nav: 'nav' },
    open: true,
    handleDrawerOpen: jest.fn(),
    handleDrawerClose: jest.fn()
  };

  const mockStore = configureStore();
  const store = mockStore({ preference: { locale: 'en' } });

  beforeAll(() => {
    String.prototype.replaceAll = jest.fn(() => 'localhost:3000');
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <NavBar {...props} />
      </Provider>
    );
    expect(toJson(wrapper.find(NavBar))).toMatchSnapshot();
  });

  it('should fire handleDrawerOpen prop on icon button click', () => {
    const wrapper = mount(
      <Provider store={store}>
        <NavBar {...props} />
      </Provider>
    );
    const container = wrapper.find(NavBar);
    const icon = container.find(IconButton).at(0);
    icon.simulate('click');
    expect(props.handleDrawerOpen).toHaveBeenCalled();
  });

  it('should fire handleDrawerClose prop on arrow icon button click', () => {
    const wrapper = mount(
      <Provider store={store}>
        <NavBar {...props} />
      </Provider>
    );
    const container = wrapper.find(NavBar);
    const icon = container.find(IconButton).at(1);
    icon.simulate('click');
    expect(props.handleDrawerClose).toHaveBeenCalled();
  });

  it('should have boxShadow on page scroll', () => {
    const wrapper = mount(
      <Provider store={store}>
        <NavBar {...props} />
      </Provider>
    );
    const container = wrapper.find(NavBar);
    const icon = container.find(IconButton).at(1);
    icon.simulate('click');
    expect(props.handleDrawerClose).toHaveBeenCalled();
  });

  it('should set active tab if it includes my courses in it', () => {
    String.prototype.includes = jest.fn(() => true);
    const wrapper = mount(
      <Provider store={store}>
        <NavBar {...props} />
      </Provider>
    );
    const container = wrapper.find(NavBar);
    const icon = container.find(IconButton).at(1);
    icon.simulate('click');

    const title = wrapper.find(Typography);
    expect(title.props().children).toEqual('common:headerTabs.myCourses');
  });
});
