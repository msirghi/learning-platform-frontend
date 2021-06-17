import { shallow } from 'enzyme';
import React from 'react';
import { HelpAccordion } from './HelpAccordion';

describe('HelpAccordion component', () => {
  it('should render the title provided', () => {
    const title = 'title';
    const wrapper = shallow(<HelpAccordion title={title} description='desc' />);
    expect(wrapper.text().includes(title)).toBeTruthy();
  });

  it('should render the description provided', () => {
    const description = 'some description';
    const wrapper = shallow(<HelpAccordion title='title' description={description} />);
    expect(wrapper.text().includes(description)).toBeTruthy();
  });
});
