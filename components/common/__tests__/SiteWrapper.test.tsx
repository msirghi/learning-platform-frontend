import React from 'react';
import { mount } from 'enzyme';
import { SiteWrapper } from '../SiteWrapper';
import toJson from 'enzyme-to-json';
import { NavBar } from '../NavBar';
import { MainDrawer } from '../MainDrawer';

describe('SiteWrapper component', () => {
  const initWidth = global.innerWidth;

  beforeAll(() => {
    String.prototype.replaceAll = jest.fn();
  });

  afterAll(() => {
    jest.clearAllMocks();
    global.innerWidth = initWidth;
  });

  it('should match the snapshot', () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
    const wrapper = mount(<SiteWrapper>content</SiteWrapper>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should open nav on screen width 1200px', () => {
    global.innerWidth = 1200;
    const wrapper = mount(<SiteWrapper>content</SiteWrapper>);
    const nav = wrapper.find(NavBar);
    nav.props().handleDrawerOpen();
    expect(nav.props().open).toBeDefined();
  });

  it('should not open nav on screen width 700px', () => {
    global.innerWidth = 700;
    const wrapper = mount(<SiteWrapper>content</SiteWrapper>);
    const nav = wrapper.find(NavBar);
    nav.props().handleDrawerOpen();
    expect(nav.props().open).toBeFalsy();
  });

  it('should open mobile drawer on screen width 700px', () => {
    global.innerWidth = 700;
    const wrapper = mount(<SiteWrapper>content</SiteWrapper>);
    const nav = wrapper.find(MainDrawer);
    nav.props().handleDrawerClose();
    expect(nav.props().open).toBeFalsy();
  });

  it('should not open mobile drawer on screen width 1200px', () => {
    global.innerWidth = 1200;
    const wrapper = mount(<SiteWrapper>content</SiteWrapper>);
    const nav = wrapper.find(MainDrawer);
    nav.props().handleDrawerClose();
    expect(nav.props().mobileOpen).toBeFalsy();
  });
});
