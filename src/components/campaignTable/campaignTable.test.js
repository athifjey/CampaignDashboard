import React from 'react';
import { shallow } from 'enzyme';
import CampaignTable from './campaignTable';

describe('<CampaignTable />', () => {
  test('renders', () => {
    const wrapper = shallow(<CampaignTable />);
    expect(wrapper).toMatchSnapshot();
  });
});
