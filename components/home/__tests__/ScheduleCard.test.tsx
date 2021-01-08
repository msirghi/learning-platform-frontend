import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { lessonMock } from '../../../mocks/lessonMocks';
import { ScheduleCard } from '../ScheduleCard';

describe('ScheduleCard component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<ScheduleCard />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should mock.length - 1 vertical lines', () => {
    const wrapper = shallow(<ScheduleCard />);
    const lines = wrapper.find('.scheduleContentVerticalLine');
    expect(lines.length).toBe(lessonMock.length - 1);
  });

  it('should have vertical line with specific classname if lesson has not ended', () => {
    const wrapper = shallow(<ScheduleCard />);
    const lines = wrapper.find('.scheduleContentVerticalLineNotEnded');
    expect(lines.length).toBe(2);
  });
});
