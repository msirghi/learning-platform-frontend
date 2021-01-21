export const SET_INTERFACE_LOCALE = 'SET_INTERFACE_LOCALE';
export const GET_INTERFACE_LOCALE = 'GET_INTERFACE_LOCALE';

export const SET_DESKTOP_DRAWER_STATUS = 'SET_DESKTOP_DRAWER_STATUS';
export const GET_DESKTOP_DRAWER_STATUS = 'GET_DESKTOP_DRAWER_STATUS';

interface SetInterfaceLocale {
  type: typeof SET_INTERFACE_LOCALE;
  payload: string;
}

interface SetDesktopDrawerStatus {
  type: typeof SET_DESKTOP_DRAWER_STATUS;
  payload: boolean;
}

export type PreferenceActionTypes = SetInterfaceLocale;
export type InterfaceActionTypes = SetDesktopDrawerStatus;
