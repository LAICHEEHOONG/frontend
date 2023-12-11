import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { searchStatusAction } from '../store/actions/index';

export default function StatusSelect() {

  const searchStatus = useSelector(state => state.search2.status);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(searchStatusAction(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 120, width: 140 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={searchStatus}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value={'In Progress'}>In Progress</MenuItem>
          <MenuItem value={'Completed'}>Completed</MenuItem>
          <MenuItem value={'Terminate'}>Terminate</MenuItem>
          <MenuItem value="">None</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

//	In Progress
// Completed