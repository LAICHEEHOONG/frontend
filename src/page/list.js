import React from "react";
import { useSelector } from 'react-redux';
import TableList from "../components/table";
import Pages from "../components/pagination";
import Pages2 from "../components/pagination2";
import Navbar from "../components/navbar";
import TableList2 from "../components/table2";
import BasicAlerts from "../components/alert";
import '../style/list.css'

const List = () => {

    const alertStatus = useSelector(state => state.alert);
    const tableStatus = useSelector(state => state.changeTable);

    return (
        <div>

            <Navbar />
            {
                alertStatus ? <BasicAlerts /> : null
            }

            {
                tableStatus ? <TableList /> : <TableList2 />
            }
            <div className="list">
                {
                    tableStatus ? <Pages /> : <Pages2 />
                }
            </div>
        </div>
    )
}

export default List;