import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

import './styledDatepicker.css';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const StyledDatepicker = ({selStartDate, selEndDate}) => {
 
  // The first commit of Material-UI
  const [selectedStartDate, setSelectedStartDate] = React.useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());
  
  
  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);    
    selStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
    selEndDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>

      <Grid>

        <KeyboardDatePicker
          margin="normal"
          id="start-date-picker-dialog"
          label="Start date"
          format="MM/dd/yyyy"
          value={selectedStartDate}
          onChange={handleStartDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="end-date-picker-dialog"
          label="End date"
          format="MM/dd/yyyy"
          value={selectedEndDate}
          onChange={handleEndDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

      </Grid>
    </MuiPickersUtilsProvider>
  );
}

export default StyledDatepicker