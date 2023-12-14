import React, { useState, useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StatusSelect from './statusSelect';
import TargetGroupSelect from './targetGroupSelect';
import BasicDateRangePicker from './datePicker';
import { search2Fn, checkDataStatusAndTargetGroup } from "../util/tool";
import {
    setSearchText, setSearchResData, clearResData,
    setAlert, searchAllPage, changeTableAction, searchResetAction,
    searchProgressAction, changeSearchPage, statusTargetGroupTypesAction
} from "../store/actions";


export default function More() {

    const buttonWidth = useSelector(state => state.mobileMode.width);
    const dispatch = useDispatch();
    let searchData = useSelector(state => state.search2);
    const [disableBtn, setDisableBtn] = useState(false);


    useEffect(() => {
        if (searchData.text === ''
            && !searchData.startDate
            && !searchData.endDate
            && searchData.status === ''
            && searchData.targetGroup === ''
        ) {
            setDisableBtn(true)
        } else {
            setDisableBtn(false)
        }

        checkDataStatusAndTargetGroup()
            .then(data => {
                dispatch(statusTargetGroupTypesAction([data.statusObj, data.targetGroupObj]));
            })
            .catch(err => console.log(err))
        // console.log(checkDataStatusAndTargetGroup())


    }, [searchData, dispatch])

    const [state, setState] = useState({
        bottom: false,
    })

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ bottom: open })
    };


    const submitHandle = (event) => {
        event.preventDefault();
        dispatch(changeSearchPage(1));
        dispatch(changeTableAction(false));
        dispatch(searchProgressAction(true));

        search2Fn({ ...searchData, page: 1 })
            .then(data => {
                dispatch(searchAllPage(data[1].allPage))
                if (data[0].length === 0) {
                    dispatch(setAlert(true));
                    setTimeout(() => {
                        dispatch(setAlert(false));
                        dispatch(searchProgressAction(false));
                    }, 4000)
                }
                dispatch(setSearchResData(data[0]))
                dispatch(searchProgressAction(false));
            })
            .catch(err => {
                console.log(err);
                searchProgressAction(false);
            });

        setState({ bottom: false })
    }

    const clearSearchFn = (event) => {
        // event.preventDefault();
        dispatch(changeTableAction(true));
        dispatch(clearResData());
        dispatch(searchResetAction());
        setState({ bottom: false })
    }

    const list = (anchor) => (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Center the items horizontally
                justifyContent: 'center', // Center the items vertically
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250
            }}
            role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem>
                    <StatusSelect />
                </ListItem>
                <ListItem>
                    <TargetGroupSelect />
                </ListItem>
            </List>
            <List>
                <ListItem>
                   <BasicDateRangePicker />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem>
                    <button className="btn btn-success"
                        style={{ width: buttonWidth }}
                        disabled={disableBtn}
                        onClick={submitHandle}
                    >Search</button>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div >
            {['bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                    {/* <MoreVertIcon onClick={toggleDrawer(anchor, true)} /> */}
                    <Button
                        style={{ color: 'black', marginLeft: '-15px', fontSize: '0.7rem' }}
                        onClick={toggleDrawer(anchor, true)}
                    >
                        <MoreVertIcon />
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
