// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { setConfig } from 'next/config';
import { publicRuntimeConfig } from './next.config';
import "@testing-library/jest-dom/extend-expect";
import MockDate from 'mockdate';

setConfig({ publicRuntimeConfig });

Enzyme.configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true
});

console.error = jest.fn();
console.warn = jest.fn();
MockDate.set('2000-11-22');