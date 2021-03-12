import { shallow } from 'enzyme';
import React from 'react';
import { PerformanceTabs } from '../../../common/enums';
import { PerformanceMenu } from '../PerformanceMenu';

describe('PerformanceMenu component', () => {
  it('should render two tabs', () => {
    const wrapper = shallow(
      <PerformanceMenu changeTab={jest.fn()} currentTab={PerformanceTabs.GRADES} />
    );
    const tabs = wrapper.find('.tab');
    expect(tabs).toHaveLength(2);
  });

  it('should have active tab if the current tab is GRADES', () => {
    const wrapper = shallow(
      <PerformanceMenu changeTab={jest.fn()} currentTab={PerformanceTabs.GRADES} />
    );
    const active = wrapper.find('.active');
    expect(active).toHaveLength(1);

    const tabText = active.find('span');

    expect(tabText).toHaveLength(1);
    expect(tabText.text()).toEqual('performance:gradesLabel');
  });

  it('should have active tab if the current tab is STATISTICS', () => {
    const wrapper = shallow(
      <PerformanceMenu changeTab={jest.fn()} currentTab={PerformanceTabs.STATISTICS} />
    );
    const active = wrapper.find('.active');
    expect(active).toHaveLength(1);

    const tabText = active.find('span');

    expect(tabText).toHaveLength(1);
    expect(tabText.text()).toEqual('performance:statisticsLabel');
  });

  it('should fire prop function on statistics tab click', () => {
    const spy = jest.fn((d) => d);
    const wrapper = shallow(
      <PerformanceMenu changeTab={spy} currentTab={PerformanceTabs.STATISTICS} />
    );
    const tab = wrapper.find('.tab').at(1);
    tab.simulate('click');

    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(PerformanceTabs.STATISTICS);
  });

  it('should fire prop function on grades tab click', () => {
    const spy = jest.fn((d) => d);
    const wrapper = shallow(
      <PerformanceMenu changeTab={spy} currentTab={PerformanceTabs.STATISTICS} />
    );
    const tab = wrapper.find('.tab').at(0);
    tab.simulate('click');

    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(PerformanceTabs.GRADES);
  });
});
