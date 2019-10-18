import React from 'react';
import { shallow } from 'enzyme';
import CampaignTemplate from './campaign-template';

describe('<CampaignTemplate />', () => {
  test('renders', () => {
    const wrapper = shallow(<CampaignTemplate />);
    expect(wrapper).toMatchSnapshot();
  });
});
