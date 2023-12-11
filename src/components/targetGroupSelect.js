import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { searchTargetGroupAction } from '../store/actions/index';

export default function TargetGroupSelect() {

  const dispatch = useDispatch();
  const targetGroup = useSelector(state => state.search2.targetGroup);

  const handleChange = (event) => {
    const targetValue = event.target.value;
    dispatch(searchTargetGroupAction(targetValue));
  };

  return (
    <Box sx={{ minWidth: 120, width: 140 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Target Group</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={targetGroup}
          label="Target Group"
          onChange={handleChange}
        >
          <MenuItem value={'User'}>User</MenuItem>
          <MenuItem value={'Agent'}>Agent</MenuItem>
          <MenuItem value={'Guest'}>Guest</MenuItem>
          <MenuItem value="">None</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}


//User
//Agent