

import React from 'react';
import ReactDOM from 'react-dom'
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Search from './search';
import StyledDatepicker from '../styledDatepicker';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


configure({ adapter: new Adapter() });

describe('Search', () => {
  let wrapper;
  let labelVal;

  
  
  it('should render Search correctly in "debug" mode', () => {
    shallow(<Search debug />);
  });

  it('should render StyledDatepicker correctly in "debug" mode', () => {
    shallow(<StyledDatepicker debug />);
  });

  it('should render TextField correctly in "debug" mode', () => {
    shallow(<TextField debug />);
  });
  
  it('renders text input with label (default type)', () => {
    wrapper = mount(<TextField name="search" label="Campaign name" />);
    const label = wrapper.find('label');
    expect(label).toHaveLength(1);
    expect(label.text()).toEqual('Campaign name');
    const input = wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('name')).toEqual('search');   
  });

  it('renders submit button with custom text', () => {
    const wrapper = mount(<Button>SEARCH</Button>);
    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
    expect(button.text()).toEqual('SEARCH');
  });
});