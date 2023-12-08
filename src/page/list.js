import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import TableList from "../components/table";
import Pages from "../components/pagination";
import Pages2 from "../components/pagination2";
import Navbar2 from "../components/navbar2";
import TableList2 from "../components/table2";
import BasicAlerts from "../components/alert";
import '../style/list.css'

const List = () => {

    const searchResData = useSelector(state => state.searchRes);
    const alertStatus = useSelector(state => state.alert);
    const tableStatus = useSelector(state => state.changeTable);

    return (
        <div>

            <Navbar2 />
            {
                alertStatus ? <BasicAlerts /> : null
            }

            {
                // searchResData.length > 0 ? <TableList2 /> : <TableList />
                tableStatus ? <TableList /> : <TableList2 />
            }
            <div className="list">
                {
                    tableStatus ? <Pages /> : <Pages2 />
                }
                {/* {
                    searchResData.length > 0 ?
                        <Pages2 />
                        :
                        <Pages />
                } */}
            </div>
        </div>
    )
}

export default List;