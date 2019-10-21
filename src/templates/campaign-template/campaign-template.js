import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import Link from '@material-ui/core/Link';

import '../../App.css'

import Search from '../../components/search/search';
import CampaignTable from '../../components/campaignTable/campaignTable';

class CampaignTemplate extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      searchValue: '',
      selEndDate: '',
      selStartDate: '',
      resetTable : false,
      data:[]
    };
  }

  // Emitter to fetch Search data from search.js
  emitSearchFormFn = (e) => {
    this.setState({
      searchValue: e.searchValue,
      selEndDate: e.selEndDate,
      selStartDate: e.selStartDate,
      resetTable: false
    })
  }

  // Emitter to fetch Reset data from search.js
  resetTableFn = (e) => {
    this.setState({ resetTable: e })
  }

  render() {
    return <div className="width-100">
      <Container>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Our Campaigns
          </Typography>
          <Search emitSearchForm={this.emitSearchFormFn.bind(this)} resetTable={this.resetTableFn.bind(this)} />
          <CampaignTable emittedSearchData={this.state} />
        </Box>
      </Container>
    </div>;
  }
}

export default CampaignTemplate;
