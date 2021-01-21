import * as types from '../../types';

const initialState = {
  desktopLeftDrawerOpen: false
};

export const interfaceReducer = (state = initialState, action: types.InterfaceActionTypes) => {
  switch (action.type) {
    case types.SET_DESKTOP_DRAWER_STATUS:
      return {
        ...state,
        desktopLeftDrawerOpen: action.payload
      };
    default:
      return state;
  }
};
