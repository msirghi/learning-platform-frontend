import { LoggedUser } from '../common/types';

export const SET_INTERFACE_LOCALE = 'SET_INTERFACE_LOCALE';
export const GET_INTERFACE_LOCALE = 'GET_INTERFACE_LOCALE';

export const SET_DESKTOP_DRAWER_STATUS = 'SET_DESKTOP_DRAWER_STATUS';
export const GET_DESKTOP_DRAWER_STATUS = 'GET_DESKTOP_DRAWER_STATUS';

export const SET_INTERFACE_MODE = 'SET_INTERFACE_MODE';
export const GET_INTERFACE_MODE = 'GET_INTERFACE_MODE';

export const SET_USER_INFO = 'SET_USER_INFO';
export const GET_USER_INFO = 'GET_USER_INFO';

interface SetUserInfo {
  type: typeof SET_USER_INFO;
  payload: LoggedUser;
}

interface SetInterfaceLocale {
  type: typeof SET_INTERFACE_LOCALE;
  payload: string;
}

interface SetInterfaceMode {
  type: typeof SET_INTERFACE_MODE;
  payload: string;
}

interface SetDesktopDrawerStatus {
  type: typeof SET_DESKTOP_DRAWER_STATUS;
  payload: boolean;
}

export type PreferenceActionTypes = SetInterfaceLocale;
export type UserActionTypes = SetUserInfo;
export type InterfaceActionTypes = SetDesktopDrawerStatus | SetInterfaceMode | UserActionTypes;
