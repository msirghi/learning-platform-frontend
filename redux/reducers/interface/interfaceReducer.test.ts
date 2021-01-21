import * as types from '../../types';
import { interfaceReducer } from './interfaceReducer';

describe('Preference Reducer', () => {
  const initialState = {
    desktopLeftDrawerOpen: false
  };

  it('should return default state', () => {
    const newState = interfaceReducer(undefined, { type: undefined, payload: false });
    expect(newState).toStrictEqual(initialState);
  });

  it('should return updated updated state', () => {
    const newState = interfaceReducer(undefined, {
      type: types.SET_DESKTOP_DRAWER_STATUS,
      payload: true
    });
    expect(newState).toStrictEqual({ desktopLeftDrawerOpen: true });
  });
});
