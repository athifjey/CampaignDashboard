import React from 'react';
import { shallow, configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CampaignTable from './campaignTable';

configure({ adapter: new Adapter() });

describe('CampaignTable', () => {
  it('should render correctly in "debug" mode', () => {
   shallow(<CampaignTable debug />);    
  });
});