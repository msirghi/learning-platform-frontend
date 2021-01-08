import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { LessonStatus } from '../../../common/enums';
import { lessonMock } from '../../../mocks/lessonMocks';
import { LessonRow } from '../LessonRow';

describe('LessonRow component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<LessonRow lesson={lessonMock[0]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should should have specific classname for shape if the lesson is ongoing', () => {
    const wrapper = shallow(
      <LessonRow lesson={{ ...lessonMock[0], status: LessonStatus.ONGOING }} />
    );
    const shape = wrapper.find('span');
    expect(shape.hasClass('lessonRowStatusShapeOngoing')).toBeTruthy();
  });

  it('should should have specific classname for shape if the lesson is not started yet', () => {
    const wrapper = shallow(
      <LessonRow lesson={{ ...lessonMock[0], status: LessonStatus.NOT_STARTED }} />
    );
    const shape = wrapper.find('span');
    expect(shape.hasClass('lessonRowStatusShapeNotStarted')).toBeTruthy();
  });

  it('should should have specific classname for shape if the lesson has ended', () => {
    const wrapper = shallow(
      <LessonRow lesson={{ ...lessonMock[0], status: LessonStatus.ENDED }} />
    );
    const shape = wrapper.find('span');
    expect(shape.hasClass('lessonRowStatusShape')).toBeTruthy();
  });
});
