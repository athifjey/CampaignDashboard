import React, { Component } from 'react';
import MaterialTable from 'material-table';
import Moment from 'react-moment';
import CurrencyFormat from 'react-currency-format';

// Local imports
import './campaignTable.css';
import '../../App.css';

class CampaignTable extends Component {

  constructor(props) {
    super(props);
    window.Campaign = this;
    this.state = {
      exData: 'exData',
      firstReset: false,
      columns: [
        { title: 'Name', field: 'name' },
        {
          title: 'Start date', field: 'startDate', type: 'date',
          render: rowData => <Moment format="YYYY/MM/DD">{rowData.startDate}</Moment>
        },
        {
          title: 'End date', field: 'endDate',
          render: rowData => <Moment format="YYYY/MM/DD">{rowData.endDate}</Moment>
        },
        {
          title: 'Active',
          field: 'active',

          render: rowData => (
            <div className="flex-row flex-just-start flex-align-center">
              <div className={(rowData.active === 'Inactive' ? 'red-dot' : 'green-dot')}></div>
              <div>{rowData.active}</div>
            </div>)
        },
        {
          title: 'Budget', field: 'Budget',
          render: rowData => (<CurrencyFormat value={rowData.Budget} displayType={'text'} thousandSeparator={true} prefix={'$'} />)
        }
      ],
      data: [
        {
          id: '1',
          name: 'Sea campaign',
          startDate: '9/19/2017',
          endDate: '3/9/2018',
          Budget: '30000'
        },
        {
          id: '2',
          name: 'Land campaign',
          startDate: 'Mon Jun 06 2016 14:49:00 GMT+0530 (India Standard Time)',
          endDate: 'Tue Oct 19 2021 14:49:00 GMT+0530 (India Standard Time)',
          Budget: '40000'
        },
        {
          id: '3',
          name: 'January campaign',
          startDate: 'Sat Oct 31 2020 14:52:00 GMT+0530 (India Standard Time)',
          endDate: 'Thu Dec 31 2026 14:52:00 GMT+0530 (India Standard Time)',
          Budget: '42000'
        },
        {
          id: '4',
          name: 'February campaign',
          startDate: 'Fri Oct 29 2010 14:53:00 GMT+0530 (India Standard Time)',
          endDate: 'Sat Feb 01 2014 14:53:00 GMT+0530 (India Standard Time)',
          Budget: '49000'
        },
        {
          id: '5',
          name: 'March campaign',
          startDate: 'Sun Feb 01 2009 14:46:00 GMT+0530 (India Standard Time)',
          endDate: 'Wed May 15 2019 14:46:00 GMT+0530 (India Standard Time)',
          Budget: '50000'
        },
        {
          id: '6',
          name: 'Summer campaign',
          startDate: 'Mon Jun 06 2016 14:49:00 GMT+0530 (India Standard Time)',
          endDate: 'Tue Oct 19 2021 14:49:00 GMT+0530 (India Standard Time)',
          Budget: '65000'
        },
        {
          id: '7',
          name: 'Winter campaign',
          startDate: 'Fri Oct 29 2010 14:53:00 GMT+0530 (India Standard Time)',
          endDate: 'Sat Feb 01 2014 14:53:00 GMT+0530 (India Standard Time)',
          Budget: '70000'
        },
        {
          id: '8',
          name: 'Autumn campaign',
          startDate: 'Sun Feb 01 2009 14:46:00 GMT+0530 (India Standard Time)',
          endDate: 'Wed May 15 2019 14:46:00 GMT+0530 (India Standard Time)',
          Budget: '80000'
        },
        {
          id: '9',
          name: 'Rain campaign',
          startDate: 'Sat Oct 31 2020 14:52:00 GMT+0530 (India Standard Time)',
          endDate: 'Thu Dec 31 2026 14:52:00 GMT+0530 (India Standard Time)',
          Budget: '95000'
        },
        {
          id: '10',
          name: 'Water campaign',
          startDate: 'Fri Oct 29 2010 14:53:00 GMT+0530 (India Standard Time)',
          endDate: 'Sat Feb 01 2014 14:53:00 GMT+0530 (India Standard Time)',
          Budget: '100000'
        },
      ],
      tableData: [],
      resetTable: false
    };

    this.tableData = [];
  }

  componentDidMount() {
    this.modifyCampData();
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.props.emittedSearchData !== prevProps.emittedSearchData) {
      if (this.props.emittedSearchData.resetTable) {
        this.resetTableFn(); // Function to call when Reset is clicked
      } else {
        this.filterCampData(); //To filter based on search
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {

    // To update table data
    if (this.state.tableData !== nextState.tableData) {
      return true;
    }

    // To check if emitted prop is updated
    if (this.props.emittedSearchData !== nextProps.emittedSearchData) {
      return true;
    }

    // To update the dynamic data import from browser console
    if (this.state.data !== nextState.data) {
      return true;
    }

    // To verify reset state
    if (this.state.resetTable !== nextState.resetTable) {
      return true;
    } else {
      return false;
    }

  }

  // To add campaigns through browser console
  AddCampaigns(campD) {
    this.setState({ data: campD });
    this.modifyCampData();
  }

  // Method to add active status to the response based on date range
  modifyCampData() {

    var tempData = this.state.data.map((item, i) => {
      var o = Object.assign({}, item);
      var tempStDt = new Date(item.startDate)
      var tempEndDt = new Date(item.endDate);
      var today = new Date();
      if (today <= tempEndDt && today >= tempStDt) {
        o.active = 'Active';
      } else {
        o.active = 'Inactive';
      }
      return o;
    })

    this.setState({
      data: tempData,
      tableData: tempData
    })

  }

  // Method for filtering the table data
  filterCampData() {
    var filterData = this.state.data;
    this.setState({ resetTable: false });
    var searchValue = this.props.emittedSearchData.searchValue;
    var newFilData = [];

    if (searchValue === '') {
      newFilData = filterData.filter((row) => {
        var tableStDate = new Date(row.startDate);
        var tableEndDate = new Date(row.endDate);
        var selStDate = new Date(this.props.emittedSearchData.selStartDate);
        var selEndDate = new Date(this.props.emittedSearchData.selEndDate);

        if (tableStDate > selStDate && tableEndDate < selEndDate) {
          return row;
        }
      })

      this.setState({
        tableData: newFilData
      })
    } else {

      searchValue = searchValue.toLowerCase();

      newFilData = filterData.filter((row) => {
        return row.name.toLowerCase().includes(searchValue);
      });

      this.setState({
        tableData: newFilData
      })

    }
  }

  // Method to reset the table
  resetTableFn() {
    var tempTabData = this.state.data;
    this.setState({
      resetTable: false,
      tableData: tempTabData
    });
  }

  render() {
    return (
      <div>
        <MaterialTable
          title="Campaigns"
          columns={this.state.columns}
          data={this.state.tableData}
          options={{
            search: false
          }}
        />
      </div>
    )
  }
}

export default CampaignTable;
