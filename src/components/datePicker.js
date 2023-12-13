import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { setDateStart, setDateEnd, selectorWidthAction } from '../store/actions';

export default function BasicDateRangePicker() {

    const dispatch = useDispatch()
    const screenWidth = useSelector(state => state.mobileMode.screenPixel);
    const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
    const DATE_FORMAT = 'DD/MM/YYYY';

    const handleDateChange = (newDateRange) => {
        let startDate = newDateRange[0];
        let endDate = newDateRange[1];

        if (startDate) {
            startDate = startDate.$d;
        }
        if (endDate) {
            endDate = endDate.$d;
        }

        setSelectedDateRange([startDate, endDate]);
        dispatch(setDateStart(startDate));
        dispatch(setDateEnd(endDate));
    };

    const [width, setWidth] = useState(0);
    const dateRangePickerRef = useRef(null);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                    setWidth(entry.contentRect.width);
                }
            
        });

        if (dateRangePickerRef.current) {
            resizeObserver.observe(dateRangePickerRef.current);
            setWidth(dateRangePickerRef.current.clientWidth);
        }

        if(screenWidth < 1000) {
            dispatch(selectorWidthAction(width))
        } else if(screenWidth >= 1000) {
            dispatch(selectorWidthAction(140));
        }
        
      
        return () => {
            resizeObserver.disconnect();
        };
    }, [width, dispatch, screenWidth]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateRangePicker']}>
                <div ref={dateRangePickerRef}>
                    <DateRangePicker
                        value={selectedDateRange}
                        onChange={handleDateChange}
                        format={DATE_FORMAT}
                        localeText={{ start: 'DD/MM/YYYY', end: 'DD/MM/YYYY' }}
                    />
                </div>
            </DemoContainer>
        </LocalizationProvider>
    );
}


