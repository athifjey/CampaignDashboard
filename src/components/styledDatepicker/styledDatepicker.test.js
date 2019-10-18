import React from 'react';
import { shallow } from 'enzyme';
import StyledDatepicker from './styledDatepicker';

describe('<StyledDatepicker />', () => {
  test('renders', () => {
    const wrapper = shallow(<StyledDatepicker />);
    expect(wrapper).toMatchSnapshot();
  });
});
