import React, {useEffect} from 'react';
import { Pagination, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { allPages } from '../store/actions/allpage_action';
import { changePages } from '../store/actions/changePage';
import { searchText, clearText } from "../store/actions";

const Pages = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allPages());
    }, [dispatch]);
    const allPage = useSelector(state => state.page.allPage);


    const handleChange = (event, value) => {
        dispatch(clearText());
        dispatch(changePages(value));
        dispatch(searchText([]));
    };

    return (
        <Stack spacing={2}>
            <Pagination count={allPage}  onChange={handleChange} />
        </Stack>
    );
}

export default Pages;