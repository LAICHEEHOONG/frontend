import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BasicDateRangePicker from "./datePicker";
import StatusSelect from "./statusSelect";
import TargetGroupSelect from "./targetGroupSelect";
import { search2Fn } from "../util/tool";
import {
    setSearchText, setSearchResData, clearResData,
    setAlert, searchAllPage, changeTableAction, searchResetAction,
    searchProgressAction, changeSearchPage
} from "../store/actions";
import '../style/navbar2.css';


const Navbar = () => {

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
    }, [searchData])

    const handleInputChange = (event) => {
        const value = event.target.value;
        dispatch(setSearchText(value));
    };

    const submitHandle = (event) => {
        event.preventDefault();
        dispatch(changeSearchPage(1));
        dispatch(changeTableAction(false));
        dispatch(searchProgressAction(true));

        search2Fn({...searchData, page: 1})
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


    }

    const clearSearchFn = (event) => {
        // event.preventDefault();
        dispatch(changeTableAction(true));
        dispatch(clearResData());
        dispatch(searchResetAction());
    }

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <form className="d-flex" role="search">
                    <input className="form-control me-2 nav_input" type="search" placeholder="Search Title" aria-label="Search"
                        onChange={handleInputChange}
                    />
                    <div>
                        <StatusSelect />
                    </div>
                    <div className='target_group_select'>
                        <TargetGroupSelect />
                    </div>
                    <div className="date_picker">
                        <BasicDateRangePicker />
                    </div>

                    <button className="btn btn-success" disabled={disableBtn}
                        onClick={submitHandle}
                    >Search</button>
                    <button className="btn btn-danger clear_btn" 
                        onClick={clearSearchFn}
                    >Clear</button>
                </form>
            </div>
        </nav>
    )

}

export default Navbar;

