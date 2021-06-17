import { Button } from '@material-ui/core';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { GradesMock } from '../../../mocks/gradesMock';
import { LessonGradeCard } from '../LessonGradeCard';

describe('LessonGradeCard component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<LessonGradeCard grade={GradesMock[1]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render flipped card on button click', () => {
    const wrapper = shallow(<LessonGradeCard grade={GradesMock[1]} />);
    const button = wrapper.find(Button);
    expect(button).toHaveLength(1);

    button.simulate('click');
    const flipped = wrapper.find('.marksContainer');
    expect(flipped).toHaveLength(1);
  });
});
