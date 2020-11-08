import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import AuthContainer from '../AuthContainer';

describe('AuthContainer component', () => {
  it('should match the snapshot', () => {
    const component = mount(<AuthContainer />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
