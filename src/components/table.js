import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowTooltips from "./tooltip";
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import CircularIndeterminate from "./progress";
import { convertDateFormat } from "../util/tool";
import '../style/table.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: '1.5rem'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const TableList = () => {

    let pagesData = useSelector(state => state.page.pageNum);
    const [searchQuery, setSearchQuery] = useState([]);

    useEffect(() => {
        setSearchQuery(pagesData)
    }, [pagesData])

    return (

        <>
            {
                searchQuery.length !== 0 ?
                    // <TableContainer component={Paper} style={{ maxHeight: 900, overflow: 'auto' }} >
                    //     <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
                    <TableContainer component={Paper} >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Title</StyledTableCell>
                                    <StyledTableCell>Status</StyledTableCell>
                                    <StyledTableCell align="center">Target Group</StyledTableCell>
                                    <StyledTableCell>Content</StyledTableCell>
                                    <StyledTableCell >Created Date</StyledTableCell>
                                    {/* <StyledTableCell>Created Time</StyledTableCell> */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {

                                    searchQuery.length === 0 ? null :
                                        searchQuery.map(el => {
                                            return (
                                                <TableRow key={el._id} hover>
                                                    <ArrowTooltips
                                                        str={el.title ? el.title : null}
                                                        tag={
                                                            <TableCell className="table_cell">
                                                                {el.title.length > 30 ? el.title.substring(0, 30) + '...' : el.title}
                                                            </TableCell>
                                                        }
                                                    />

                                                    <TableCell className="table_cell">
                                                        {el.status}
                                                    </TableCell>

                                                    <TableCell align="center" className="table_cell">
                                                        {el.targetGroup}
                                                    </TableCell>

                                                    <ArrowTooltips
                                                        str={el.content ? el.content : null}
                                                        tag={
                                                            <TableCell className="table_cell">
                                                                {el.content.length > 30 ? el.content.substring(0, 30) + '...' : el.content}
                                                            </TableCell>
                                                        }
                                                    />

                                                    <TableCell className="table_cell" >
                                                        {el.created ? `${convertDateFormat(el.created)[0]} - ${convertDateFormat(el.created)[1]}` : null}
                                                    </TableCell>
                                                    {/* <TableCell className="table_cell">
                                                        {el.created ? convertDateFormat(el.created)[1] : null}
                                                    </TableCell> */}
                                                </TableRow>
                                            )
                                        })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    :
                    <CircularIndeterminate />
            }
        </>

    )
}

export default TableList;


// Assuming you have some other component or JSX tag named 'AnotherTag'
// const AnotherTag = <div>Another Tag</div>;

// Using ArrowTooltips component elsewhere, passing AnotherTag as an additional component
{/* <ArrowTooltips component={<YourComponent />} str="Tooltip Text"/> */ }





