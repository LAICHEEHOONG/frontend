import React from 'react';
import { Pagination, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { paginationSearchPage } from "../store/actions/changeSearhPage";
import { changeSearchPage } from '../store/actions';


const Pages2 = () => {

    const dispatch = useDispatch();
    const allSearchPages = useSelector(state => state.search2);

    const handleChange = (event, value) => {
        dispatch(changeSearchPage(value))
        dispatch(paginationSearchPage(value));
    };

    return (
        <Stack spacing={2}>
            <Pagination
                page={allSearchPages.page}
                count={allSearchPages.allPages}
                onChange={handleChange} />
        </Stack>
    );
}

export default Pages2;



