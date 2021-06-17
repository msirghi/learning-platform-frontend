import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { FileEditor } from './FileEditor';
import ClearIcon from '@material-ui/icons/Clear';

describe('FileEditor component', () => {
  global.File = class MockFile {
    filename: string;
    constructor(
      parts: (string | Blob | ArrayBuffer | ArrayBufferView)[],
      filename: string,
      properties?: FilePropertyBag
    ) {
      this.filename = filename;
    }
  };

  afterAll(() => {
    jest.clearAllMocks();
  });

  const defaultProps = {
    selectedFiles: [new global.File(('' as unknown) as BlobPart[], 'New file.txt')],
    onFileSelect: jest.fn(),
    onFileRemove: jest.fn()
  };

  it('should match the snapshot', () => {
    const wrapper = shallow(<FileEditor {...defaultProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render invisible input', () => {
    const wrapper = shallow(<FileEditor {...defaultProps} />);
    const input = wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.props().style.display).toEqual('none');
  });

  it('should fire prop function on adding the file', () => {
    const wrapper = shallow(<FileEditor {...defaultProps} />);
    const input = wrapper.find('input');
    expect(input).toHaveLength(1);

    input.simulate('change');
    expect(defaultProps.onFileSelect).toHaveBeenCalledTimes(1);
  });

  it('should fire prop function on removing the file', () => {
    const wrapper = shallow(<FileEditor {...defaultProps} />);
    const btn = wrapper.find(ClearIcon);
    expect(btn).toHaveLength(1);

    btn.simulate('click');
    expect(defaultProps.onFileRemove).toHaveBeenCalledTimes(1);
  });
});
