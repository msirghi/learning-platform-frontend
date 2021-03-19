import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { CourseEditor } from '../CourseEditor';
import { SnackbarProvider } from 'notistack';

describe('CourseEditor component', () => {
  it('should match the snapshot', () => {
    const wrapper = mount(
      <SnackbarProvider maxSnack={3}>
        <CourseEditor />
      </SnackbarProvider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it.todo('shoul render confirmation dialog');
});
