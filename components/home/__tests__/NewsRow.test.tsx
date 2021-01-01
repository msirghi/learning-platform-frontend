import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { newsMock } from '../../../mocks/newsMocks';
import { NewsRow } from '../NewsRow';

describe('NewsRow component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<NewsRow news={newsMock[0]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match the snapshot if description length is short', () => {
    const wrapper = shallow(
      <NewsRow
        news={{
          ...newsMock[0],
          description: `Lorem ipsum, dolor.`
        }}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
