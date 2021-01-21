import * as types from '../../types';
import * as actions from './interfaceAction';

describe('Interface Actions', () => {
  it('should return action for setting desktop drawer status', () => {
    const payload = true;
    const expectedAction = {
      type: types.SET_DESKTOP_DRAWER_STATUS,
      payload
    };
    expect(actions.setDesktopDrawerStatus(payload)).toEqual(expectedAction);
  });

  it('should return action for getting desktop drawer status', () => {
    const expectedAction = {
      type: types.GET_INTERFACE_LOCALE
    };
    expect(actions.getDesktopDrawerStatus()).toEqual(expectedAction);
  });
});
