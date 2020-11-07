import { shallow, ShallowWrapper, mount, configure  } from 'enzyme';
import AuthHeader from '../Auth/AuthHeader';
import sinon from 'sinon';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

describe('AuthHeader component', () => {
  configure({ adapter: new Adapter() });
  let component: any;

  const defaultProps = {
    onTabChange: sinon.spy(),
    activeTab: 1
  };

  beforeEach(() => {
    component = mount(<AuthHeader {...defaultProps} />);
  });

  it('should render two tabs', () => {
    expect(component.find('.tab')).to.have.lengthOf(2);
  });
});
