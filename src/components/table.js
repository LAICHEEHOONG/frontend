import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import CircularIndeterminate from "./progress";
import { convertDateFormat } from "../util/tool";

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
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Title</StyledTableCell>
                                    <StyledTableCell>Status</StyledTableCell>
                                    <StyledTableCell align="center">Target Group</StyledTableCell>
                                    <StyledTableCell>Content</StyledTableCell>
                                    {/* <StyledTableCell>Created Date</StyledTableCell> */}
                                    <StyledTableCell>Created Date</StyledTableCell>
                                    <StyledTableCell>Created Time</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {

                                    searchQuery.length === 0 ? null :
                                        searchQuery.map(el => {
                                            return (
                                                <TableRow key={el._id}>
                                                    <TableCell>
                                                        {el.title.length > 30 ? el.title.substring(0, 30) + '...' : el.title}
                                                    </TableCell>
                                                    <TableCell>
                                                        {el.status}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {el.targetGroup}
                                                    </TableCell>
                                                    <TableCell>
                                                        {el.content.length > 30 ? el.content.substring(0, 30) + '...' : el.content}
                                                    </TableCell>
                                                    <TableCell>
                                                        {el.created ? convertDateFormat(el.created)[0] : null}
                                                    </TableCell>
                                                    <TableCell>
                                                        {el.created ? convertDateFormat(el.created)[1] : null}
                                                    </TableCell>
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





