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
  const targetGroupTypes = useSelector(state => state.statusTargetGroupTypes.targetGroupType);
  const targetGroup = useSelector(state => state.search2.targetGroup);
  const mobileState = useSelector(state => state.mobileMode)

  const handleChange = (event) => {
    let targetValue = event.target.value;
    dispatch(searchTargetGroupAction(targetValue));
  };

  //ipadAir - ipad mini width: 431 
  //iphoneSE width: 343

  return (
    <Box sx={{ width: mobileState.width }} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Target Group</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={targetGroup}
          label="Target Group"
          onChange={handleChange}
        >
          {
            targetGroupTypes.length === 0 || !targetGroupTypes ?
              null :

              targetGroupTypes.map((el, i) => {
                return (
                  <MenuItem key={`${el}${i}`} value={el}>{el}</MenuItem>
                )
              })

          }
          {/* <MenuItem value={'User'}>User</MenuItem>
          <MenuItem value={'Agent'}>Agent</MenuItem>
          <MenuItem value={'Guest'}>Guest</MenuItem>
          <MenuItem value={'All'}>All</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}


//User
//Agent