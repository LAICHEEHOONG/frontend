import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { searchStatusAction } from '../store/actions/index';

export default function StatusSelect() {

  const searchStatus = useSelector(state => state.search2.status);
  const statusTypes = useSelector(state => state.statusTargetGroupTypes.statusType);
  const mobileState = useSelector(state => state.mobileMode);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(searchStatusAction(event.target.value));
  };
  // 343,,431
  return (
    <Box sx={{ width: mobileState.width }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={searchStatus}
          label="Status"
          onChange={handleChange}
        >
          {
            statusTypes.length === 0 || !statusTypes ?
            null
            :
              statusTypes.map((el, i) => {
                return (
                  <MenuItem key={`status${i}`} value={el} >{el}</MenuItem>
                )
              })
           
          }
          
          {/* <MenuItem value={'Completed'}>Completed</MenuItem>
          <MenuItem value={'Terminate'}>Terminate</MenuItem>
          <MenuItem value={'In Progress'}>In Progress</MenuItem>
          <MenuItem value={'New'}>New</MenuItem>
          <MenuItem value={"All"}>All</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}

//	In Progress
// Completed