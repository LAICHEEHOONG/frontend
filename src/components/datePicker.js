import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { setDateStart, setDateEnd, selectorWidthAction } from '../store/actions';
import { covertDateFormatDatePicker } from '../util/tool';

const BasicDateRangePicker = () => {

    const dispatch = useDispatch()
    const screenWidth = useSelector(state => state.mobileMode.screenPixel);
    const startDateData = useSelector(state => state.search2.startDate);
    const endDateData = useSelector(state => state.search2.endDate);
    // const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
    const DATE_FORMAT = 'DD/MM/YYYY';
    
    let [startDateFloat, setStartDateFloat] = useState('DD/MM/YYYY');
    let [endDateFloat, setEndDateFloat] = useState('DD/MM/YYYY');

    const handleDateChange = (newDateRange) => {
        let startDate = newDateRange[0];
        let endDate = newDateRange[1];

        if (startDate) {
            startDate = startDate.$d;
        } else if(!startDate && startDateData) {
            startDate = new Date(startDateData);
        } 

        if (endDate) {
            endDate = endDate.$d;
        } else if(!endDate && endDateData) {
            endDate = new Date(endDateData);
        }

     
        // setSelectedDateRange([startDate, endDate]);
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

    useEffect(() => {
        if(startDateData) {
            let dateCovert = covertDateFormatDatePicker(startDateData);
            setStartDateFloat(dateCovert);
        } else {
            setStartDateFloat('DD/MM/YYYY');
        }
        if(endDateData) {
            let dateCovert = covertDateFormatDatePicker(endDateData);
            setEndDateFloat(dateCovert);
        } else {
            setEndDateFloat('DD/MM/YYYY');
        }

    }, [startDateData, endDateData])

    // useEffect(() => {
        
    //     console.log(startDateData, endDateData)
    // }, [startDateData, endDateData])




    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateRangePicker']}>
                <div ref={dateRangePickerRef}>
                    <DateRangePicker
                        // value={selectedDateRange}
                        // value={[new Date(startDateData), new Date(endDateData)]}
                        onChange={handleDateChange}
                        format={DATE_FORMAT}
                        localeText={{ start: startDateFloat, end: endDateFloat }}
                    />
                </div>
            </DemoContainer>
        </LocalizationProvider>
    );
}

export default BasicDateRangePicker;
