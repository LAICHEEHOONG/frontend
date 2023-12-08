import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { searchText, setAlert } from "../store/actions";



const filterData = (searchQuery, oriData) => {
    const result = oriData.filter((el) => {
        return (
            el.title.toLowerCase().includes(searchQuery.toLowerCase())
            ||
            el.content.toLowerCase().includes(searchQuery.toLowerCase())
            ||
            el.status.toLowerCase().includes(searchQuery.toLowerCase())
            ||
            el.targetGroup.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })
    return result;
}


const Navbar = () => {

    const listData = useSelector(state => state.page.pageNum);
    let showFilterData = useSelector(state => state.search.text);
    let alertStatus = useSelector(state => state.alert) ;

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        if (value === '' || !value) {
            dispatch(searchText(filterData(value, [])));
   
        } else {
            dispatch(searchText(filterData(value, listData)));
        }

        if (showFilterData.length === 0 && value.length > 1) {
            dispatch(setAlert(true));
   
        }

    };

    useEffect(() => {

        if(alertStatus) {
            setTimeout(() => {
                dispatch(setAlert(false));
            }, 3000)
        }
    }, [alertStatus])

    const clearInput = (e) => {
        e.preventDefault();
        setInputValue('');
        dispatch(searchText([]));
    }

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                        onChange={handleInputChange}
                        value={inputValue}
                    />
                    <button className="btn btn-outline-danger"
                        onClick={clearInput}
                    >Clear</button>
                </form>
            </div>
        </nav>
    )

}

export default Navbar;

