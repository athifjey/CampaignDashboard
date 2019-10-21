import React from 'react';
import { shallow, configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import StyledDatepicker from './styledDatepicker';

configure({ adapter: new Adapter() });

describe('StyledDatepicker', () => {
  it('should render StyledDatepicker correctly in "debug" mode', () => {
   shallow(<StyledDatepicker debug />);    
  });
});