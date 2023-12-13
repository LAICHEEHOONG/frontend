import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import TableList from "../components/table";
import Pages from "../components/pagination";
import Pages2 from "../components/pagination2";
import Navbar from "../components/navbar";
import TableList2 from "../components/table2";
import BasicAlerts from "../components/alert";
import NavbarMobile from "../components/navbarMobile";
import { screenWidthAction, selectorWidthAction } from "../store/actions";
import '../style/list.css'

const List = () => {
    
    const dispatch = useDispatch();
    const alertStatus = useSelector(state => state.alert);
    const tableStatus = useSelector(state => state.changeTable);

    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        let screenInnerWidth = window.innerWidth;
        setIsMobile(screenInnerWidth < 1000);
        dispatch(screenWidthAction(screenInnerWidth));
    }

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {
                !isMobile ?
                    <div>
                        <Navbar />
                        {alertStatus ? <BasicAlerts /> : null}
                        {tableStatus ? <TableList /> : <TableList2 />}
                        <div className="list">
                            {tableStatus ? <Pages /> : <Pages2 />}
                        </div>
                    </div>
                    :
                    <div>
                        <NavbarMobile />
                        {alertStatus ? <BasicAlerts /> : null}
                        {tableStatus ? <TableList /> : <TableList2 />}
                        <div className="list">
                            {tableStatus ? <Pages /> : <Pages2 />}
                        </div>
                    </div>

            }


        </>
    )
}

export default List;