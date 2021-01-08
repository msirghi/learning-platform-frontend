// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { setConfig } from 'next/config';
import { publicRuntimeConfig } from './next.config';
import '@testing-library/jest-dom/extend-expect';
import MockDate from 'mockdate';

setConfig({ publicRuntimeConfig });

Enzyme.configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true
});

export const t = (key, params) => {
  if (key === 'key.with.params') {
    return `key.with.params.${params.param}`;
  }

  return key;
};

jest.mock('next-i18next', () => {
  return {
    default: function () {
      return {
        useTranslation: () => {
          return {
            t,
            i18n: {
              language: 'en',
              changeLanguage: jest.fn().mockImplementation((lang) => console.log(lang))
            }
          };
        },
        withTranslation: () => (Component) => {
          Component.defaultProps = { ...Component.defaultProps, t };
          return Component;
        }
      };
    }
  };
});

console.error = jest.fn();
console.warn = jest.fn();
MockDate.set('2000-11-22');
