import React from 'react';
import { LessonPlatform } from '../../../../../common/enums';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { PlatformBadge } from '../../badge/PlatformBadge';
import { ContactEditor } from './ContactEditor';

describe('ContactEditor component', () => {
  const defaultProps = {
    selectedPlatform: LessonPlatform.SKYPE,
    setSelectedPlatform: jest.fn((data) => data)
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot on all the props provided', () => {
    const wrapper = shallow(<ContactEditor {...defaultProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call prop function with the selected contact value', () => {
    const wrapper = shallow(<ContactEditor {...defaultProps} />);
    const zoomBadge = wrapper.find(PlatformBadge).at(0);
    zoomBadge.props().onClick(LessonPlatform.ZOOM);
    expect(defaultProps.setSelectedPlatform).toBeCalled();
    expect(defaultProps.setSelectedPlatform).toBeCalledWith(LessonPlatform.ZOOM);
  });

  it('should render proper active chip', () => {
    const wrapper = shallow(<ContactEditor {...defaultProps} />);
    const skypeBadge = wrapper.find(PlatformBadge).at(2);
    expect(skypeBadge.props().isActive).toBeTruthy();
  });

  it('should render ZOOM active chip and call prop function with its contact value', () => {
    const wrapper = shallow(
      <ContactEditor {...defaultProps} selectedPlatform={LessonPlatform.ZOOM} />
    );
    const badge = wrapper.find(PlatformBadge).at(0);
    expect(badge.props().isActive).toBeTruthy();
    badge.props().onClick(LessonPlatform.ZOOM);
    expect(defaultProps.setSelectedPlatform).toBeCalledWith(LessonPlatform.ZOOM);
  });

  it('should render TEAMS active chip and call prop function with its contact value', () => {
    const wrapper = shallow(
      <ContactEditor {...defaultProps} selectedPlatform={LessonPlatform.TEAMS} />
    );
    const badge = wrapper.find(PlatformBadge).at(1);
    expect(badge.props().isActive).toBeTruthy();
    badge.props().onClick(LessonPlatform.TEAMS);
    expect(defaultProps.setSelectedPlatform).toBeCalledWith(LessonPlatform.TEAMS);
  });

  it('should render SKYPE active chip and call prop function with its contact value', () => {
    const wrapper = shallow(
      <ContactEditor {...defaultProps} selectedPlatform={LessonPlatform.SKYPE} />
    );
    const badge = wrapper.find(PlatformBadge).at(2);
    expect(badge.props().isActive).toBeTruthy();
    badge.props().onClick(LessonPlatform.SKYPE);
    expect(defaultProps.setSelectedPlatform).toBeCalledWith(LessonPlatform.SKYPE);
  });

  it('should render DISCORD active chip and call prop function with its contact value', () => {
    const wrapper = shallow(
      <ContactEditor {...defaultProps} selectedPlatform={LessonPlatform.DISCORD} />
    );
    const badge = wrapper.find(PlatformBadge).at(3);
    expect(badge.props().isActive).toBeTruthy();
    badge.props().onClick(LessonPlatform.DISCORD);
    expect(defaultProps.setSelectedPlatform).toBeCalledWith(LessonPlatform.DISCORD);
  });

  it('should render OTHER active chip and call prop function with its contact value', () => {
    const wrapper = shallow(
      <ContactEditor {...defaultProps} selectedPlatform={LessonPlatform.OTHER} />
    );
    const badge = wrapper.find(PlatformBadge).at(4);
    expect(badge.props().isActive).toBeTruthy();
    badge.props().onClick(LessonPlatform.OTHER);
    expect(defaultProps.setSelectedPlatform).toBeCalledWith(LessonPlatform.OTHER);
  });
});
