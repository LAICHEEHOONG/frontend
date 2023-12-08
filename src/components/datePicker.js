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

    const handleDateChange = (newDateRange) => {
        let startDate = newDateRange[0];
        let endDate = newDateRange[1]; 
        
        if(startDate) {
            startDate = startDate.$d;
            console.log(`startDate: ${startDate}`);
        }
        if(endDate) {
            endDate = endDate.$d;
            console.log(`endDate: ${endDate}`);
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
                    localeText={{ start: 'Start', end: 'End' }} />
            </DemoContainer>
        </LocalizationProvider>
    );
}


