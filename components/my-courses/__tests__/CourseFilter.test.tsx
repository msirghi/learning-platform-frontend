import { TextField } from '@material-ui/core';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { CourseFilter } from '../CourseFilter';

describe('CourseFilter component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<CourseFilter searchValue={'val'} onSearchInputChange={jest.fn()} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should fire onSearchInputChange on input value change', () => {
    const spy = jest.fn();
    const wrapper = shallow(<CourseFilter searchValue={'val'} onSearchInputChange={spy} />);

    const input = wrapper.find(TextField);
    expect(input).toHaveLength(1);
    input
      .props()
      .onChange({ target: { value: 'value' } } as React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement
      >);
    expect(spy).toBeCalled();
  });

  it('should have relevant initial input value', () => {
    const wrapper = shallow(
      <CourseFilter searchValue={'initial'} onSearchInputChange={jest.fn()} />
    );

    const input = wrapper.find(TextField);
    expect(input).toHaveLength(1);
    expect(input.props().value).toEqual('initial');
  });
});
