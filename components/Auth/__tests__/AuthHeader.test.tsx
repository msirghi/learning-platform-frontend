import { shallow, ShallowWrapper } from 'enzyme';
import AuthHeader from '../AuthHeader';
import toJson from 'enzyme-to-json';

describe('AuthHeader component', () => {
  let component: ShallowWrapper;

  const defaultProps = {
    onTabChange: jest.fn(),
    activeTab: 1
  };

  beforeEach(() => {
    component = shallow(<AuthHeader {...defaultProps} />);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should fire the prop function on register tab click', () => {
    const tab = component.find('.registerTab');
    tab.simulate('click');
    expect(defaultProps.onTabChange).toBeCalledTimes(1);
  });

  it('should fire the prop function on login tab click', () => {
    jest.clearAllMocks();
    const tab = component.find('.loginTab');
    tab.simulate('click');
    expect(defaultProps.onTabChange).toBeCalledTimes(1);
  });

  it('should have inactive register tab if login tab is active', () => {
    const registerTab = component.find('.registerTab');
    const loginTab = component.find('.loginTab');

    expect(registerTab.hasClass('inactiveTab')).toBeTruthy();
    expect(loginTab.hasClass('inactiveTab')).toBeFalsy();
  });

  it('should have inactive login tab if register tab is active', () => {
    const component = shallow(<AuthHeader onTabChange={jest.fn()} activeTab={0} />);
    const registerTab = component.find('.registerTab');
    const loginTab = component.find('.loginTab');

    expect(registerTab.hasClass('inactiveTab')).toBeFalsy();
    expect(loginTab.hasClass('inactiveTab')).toBeTruthy();
  });
});
