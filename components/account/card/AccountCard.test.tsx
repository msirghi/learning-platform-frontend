import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { AccountCard } from './AccountCard';

describe('AccountCard component', () => {
  const props = {
    toggleNameDialog: jest.fn(),
    togglePasswordChangeDialog: jest.fn()
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<AccountCard {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call prop method on password change click', () => {
    const wrapper = shallow(<AccountCard {...props} />);
    const pwdChange = wrapper.find('.changePassword');

    expect(pwdChange).toHaveLength(1);

    pwdChange.simulate('click');
    expect(props.togglePasswordChangeDialog).toBeCalledTimes(1);
  });

  it('should call prop method on request change click', () => {
    const wrapper = shallow(<AccountCard {...props} />);
    const requestChange = wrapper.find('.requestChange');

    expect(requestChange).toHaveLength(1);

    requestChange.simulate('click');
    expect(props.toggleNameDialog).toBeCalledTimes(1);
  });
});
