import { Box, InputBase, InputLabel, styled } from '@mui/material'
import React, { useState } from 'react'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';


const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        textAlign: 'left'
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  
function HotelAvabelity() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
      console.log(date);
      setSelectedDate(date);
    };
    return (
        <form>
            <Box sx={{display: 'flex'}}>
            
            <div>
                <InputLabel shrink htmlFor="bootstrap-input">
                Bootstrap
                </InputLabel>
                <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />
            </div>
            <div>
                <InputLabel shrink htmlFor="bootstrap-input">
                Bootstrap
                </InputLabel>
                <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />
            </div>

            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>

                <KeyboardDatePicker
                label="Material Date Picker"
                value={selectedDate}
                onChange={handleDateChange}
                />

                </MuiPickersUtilsProvider>
            </div>

               
            </Box>
        </form>

    )
}

export default HotelAvabelity
