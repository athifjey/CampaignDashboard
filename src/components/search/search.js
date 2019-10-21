import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import './search.css'
import StyledDatepicker from '../styledDatepicker';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      selStartDate: Date(),
      selEndDate: Date(),
      dateError: '',
      inputError: false
    };
  }

  useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

  // Fetching the start date from date picker
  selectedStartDate(data) {
    this.setState({
      selStartDate: data
    })
  }

  // Fetching the end date from date picker
  selectedEndDate(data) {
    this.setState({
      selEndDate: data
    })
  }

  // Fetching the search input
  inputValue = (event) => {
    var evTgtVal = event.target.value;
    let regExpAlpNm = /[^A-Za-z0-9]+/g;
    var res = regExpAlpNm.test(evTgtVal)

    if (res) {
      var newStr = evTgtVal.slice(0, -1);
      event.target.value = newStr;
      this.setState({ inputError: true })
    } else {
      this.setState({ inputError: false })
    }

    this.setState(
      {
        searchValue: event.target.value
      }
    );

  }

  // Function to call when SEARCH is clicked
  onSubmit = (event) => {
    event.preventDefault();

    var startD = new Date(this.state.selStartDate);
    var endD = new Date(this.state.selEndDate);

    if (startD <= endD) {
      this.setState({
        dateError: '',
        selStartDate: startD,
        selEndDate: endD,
        resetTable: false
      });
      this.props.emitSearchForm(this.state)
    } else {
      this.setState({ dateError: 'Start date cannot be greater than End date' });
    }
  }

  // Function to call when RESET is clicked
  onReset = (event) => {
    event.preventDefault();
    this.props.resetTable(true);
  }

  render() {
    let dateError;
    if (this.state.dateError) {
      dateError = <div>{this.state.dateError}</div>
    }
    else {
      dateError = '';
    }

    return (
      <div className="flex-column search-bg search-container">
        <div className="flex-row search-bg search-form-container">

          <div className="flex-column">
            <StyledDatepicker
              selStartDate={this.selectedStartDate.bind(this)}
              selEndDate={this.selectedEndDate.bind(this)} />
            <div className="error-class">
              {dateError}
            </div>
          </div>

          <div className="label-or">
            --OR--
          </div>

          <Tooltip onClose={this.state.inputError} onOpen={this.state.inputError} open={this.state.inputError} 
          title="Start date cannot be greater than End date">
            <div className="input-container flex-column">
              <TextField
                ref='search'
                id="standard-with-placeholder"
                label="Campaign name"
                placeholder=""
                name="search"
                className="textfield-class"
                onChange={this.inputValue}
              />
            </div>
            </Tooltip>


            <div className="button-container">
              <div className="flex-row">

                <Button
                  variant="outlined" color="secondary" className={this.useStyles.button}
                  onClick={this.onSubmit}>
                  SEARCH
              </Button>
                <Button
                  variant="outlined" color="primary" className={this.useStyles.button}
                  onClick={this.onReset}>RESET</Button>
              </div>

            </div>
        </div>

          <div className="info-text">
            You can either search with Date range or with Campaign name. Searching with all values will only search with campaign name.
        </div>
        </div>
        );
      }
    }
    
    export default Search;
