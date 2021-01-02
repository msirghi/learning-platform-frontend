import { IconButton, ListItem, Menu } from '@material-ui/core';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { LanguageSelect } from '../LanguageSelect';

describe('LanguageSelect component', () => {
  beforeAll(() => {
    jest.mock('next-i18next', () => ({
      useTranslation: () => {
        return {
          t: (str) => str,
          i18n: {
            changeLanguage: () => new Promise(() => jest.fn())
          }
        };
      }
    }));
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<LanguageSelect />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should open menu on language icon click', () => {
    const wrapper = shallow(<LanguageSelect />);
    const button = wrapper.find(IconButton);
    expect(button.length).toBe(1);

    button.simulate('click', { currentTarget: 're' });
    const menu = wrapper.find(Menu);
    expect(menu.props().open).toBeTruthy();
  });

  it('should close menu on language selection', () => {
    const wrapper = shallow(<LanguageSelect />);
    const item = wrapper.find(ListItem).at(0);

    item.simulate('click', { currentTarget: 're' });
    const menu = wrapper.find(Menu);
    expect(menu.props().open).toBeFalsy();
  });
});
