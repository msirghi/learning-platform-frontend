export const SET_INTERFACE_LOCALE = 'SET_INTERFACE_LOCALE';
export const GET_INTERFACE_LOCALE = 'GET_INTERFACE_LOCALE';

interface SetInterfaceLocale {
  type: typeof SET_INTERFACE_LOCALE;
  payload: string;
}

export type PreferenceActionTypes = SetInterfaceLocale;
