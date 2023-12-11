import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { setDateStart, setDateEnd } from '../store/actions';

export default function BasicDateRangePicker() {

    const dispatch = useDispatch()
    const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
    
    const DATE_FORMAT = 'DD/MM/YYYY';

    const handleDateChange = (newDateRange) => {
        let startDate = newDateRange[0];
        let endDate = newDateRange[1]; 
        
        if(startDate) {
            startDate = startDate.$d;
        }
        if(endDate) {
            endDate = endDate.$d;
        }

        setSelectedDateRange([startDate, endDate]);
        dispatch(setDateStart(startDate));
        dispatch(setDateEnd(endDate));
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateRangePicker']}>
                <DateRangePicker
                    value={selectedDateRange}
                    onChange={handleDateChange}
                    format={DATE_FORMAT}
                    localeText={{ start: 'DD/MM/YYYY', end: 'DD/MM/YYYY' }} />
            </DemoContainer>
        </LocalizationProvider>
    );
}




// import { LocalizationProvider, DateRangePicker, AdapterDateFns } from '@mui/lab';
// import AdapterDayjs from '@mui/lab/AdapterDayjs';
// import dayjs from 'dayjs';

// // ...

// // Define your date format
// const DATE_FORMAT = 'DD/MM/YYYY';

// // Inside your component
// <LocalizationProvider dateAdapter={AdapterDayjs}>
//     <DemoContainer components={['DateRangePicker']}>
//         <DateRangePicker
//             value={selectedDateRange}
//             onChange={handleDateChange}
//             format={DATE_FORMAT} // Set the format prop
//             renderInput={(startProps, endProps) => (
//                 <>
//                     <input {...startProps} />
//                     <input {...endProps} />
//                 </>
//             )}
//             startText="Start Date" // You can customize these text labels
//             endText="End Date"
//         />
//     </DemoContainer>
// </LocalizationProvider>
