import { mount } from 'enzyme';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { AccountContent } from '../AccountContent';
import { NameChangeDialog } from '../nameChangeDialog/NameChangeDialog';
import { PasswordChangeDialog } from '../passwordChangeDialog/PasswordChangeDialog';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('AccountContent component', () => {
  const mockStore = configureStore();
  const store = mockStore({
    interface: { desktopLeftDrawerOpen: false },
    preference: { locale: 'en' }
  });

  beforeAll(() => {
    global.window = Object.create(window);
    String.prototype.replaceAll = jest.fn(() => '');
    const url = 'http://test.com';
    Object.defineProperty(window, 'location', {
      value: {
        href: url,
        pathname: 'pathname'
      }
    });
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  const getComponent = () => {
    return (
      <Provider store={store}>
        <SnackbarProvider maxSnack={3}>
          <AccountContent />
        </SnackbarProvider>
      </Provider>
    );
  };

  it('should have closed name change dialog by default', () => {
    const wrapper = mount(getComponent());
    const nameChangeDialog = wrapper.find(NameChangeDialog);

    expect(nameChangeDialog).toHaveLength(1);
    expect(nameChangeDialog.props().open).toBeFalsy();
  });

  it('should have closed password change dialog by default', () => {
    const wrapper = mount(getComponent());
    const passwordChangeDialog = wrapper.find(PasswordChangeDialog);

    expect(passwordChangeDialog).toHaveLength(1);
    expect(passwordChangeDialog.props().open).toBeFalsy();
  });
});
