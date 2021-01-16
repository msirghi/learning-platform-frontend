import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { SiteFooter } from '../Footer';

describe('Footer component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<SiteFooter drawerOpened />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
