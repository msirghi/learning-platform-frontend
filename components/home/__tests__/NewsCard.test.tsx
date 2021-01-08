import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { newsMock } from '../../../mocks/newsMocks';
import { NewsCard } from '../NewsCard';
import Divider from '@material-ui/core/Divider';

describe('NewsCard component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<NewsCard title='Title' news={newsMock} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have have mock.length - 1 dividers', () => {
    const wrapper = shallow(<NewsCard title='Title' news={newsMock} />);
    const dividers = wrapper.find(Divider);
    expect(dividers.length).toBe(newsMock.length - 1);
  });
});
