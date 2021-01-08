import { IconButton, ListItem, Menu } from '@material-ui/core';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { LanguageSelect } from '../LanguageSelect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

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

  const mockStore = configureStore();
  const store = mockStore({});

  it('should match the snapshot', () => {
    const wrapper = mount(
      <Provider store={store}>
        <LanguageSelect />
      </Provider>
    );
    expect(toJson(wrapper.find(LanguageSelect))).toMatchSnapshot();
  });

  it('should open menu on language icon click', () => {
    const wrapper = mount(
      <Provider store={store}>
        <LanguageSelect />
      </Provider>
    );
    const container = wrapper.find(LanguageSelect);
    const button = container.find(IconButton);
    expect(button.length).toBe(1);

    button.simulate('click', { currentTarget: 're' });
    const menu = container.find(Menu);
    expect(menu.props().open).toBeDefined();
  });

  it('should close menu on language selection', () => {
    const wrapper = mount(
      <Provider store={store}>
        <LanguageSelect />
      </Provider>
    );
    const container = wrapper.find(LanguageSelect);
    const item = container.find(ListItem).at(0);

    item.simulate('click', { currentTarget: 're' });
    const menu = container.find(Menu);
    expect(menu.props().open).toBeFalsy();
  });
});
