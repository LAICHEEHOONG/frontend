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


const SearchList = () => {

    let searchData = useSelector(state => state.search.text);
    const [searchQuery, setSearchQuery] = useState([]);

    useEffect(() => {
        setSearchQuery(searchData)
    }, [searchData])

    return (

        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Title</StyledTableCell>
                            <StyledTableCell>Status</StyledTableCell>
                            <StyledTableCell align="center">Target Group</StyledTableCell>
                            <StyledTableCell>Content</StyledTableCell>
                            <StyledTableCell>Url</StyledTableCell>
                            <StyledTableCell>Start</StyledTableCell>
                            <StyledTableCell>End</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            searchQuery.length === 0 ? null :
                                searchQuery.map(el => {
                                    return (
                                        <TableRow key={el._id}>
                                            <TableCell>
                                                {el.title.length > 20 ? el.title.substring(0, 20) + '...' : el.title}
                                            </TableCell>
                                            <TableCell>
                                                {el.status}
                                            </TableCell>
                                            <TableCell align="center">
                                                {el.targetGroup}
                                            </TableCell>
                                            <TableCell>
                                                {el.content.length > 20 ? el.content.substring(0, 20) + '...' : el.content}
                                            </TableCell>
                                            <TableCell>
                                                {el.url ? el.url : null}
                                            </TableCell>
                                            <TableCell>  
                                                {el.start.substring(0, 10)}
                                            </TableCell>
                                            <TableCell>
                                                {el.end ? el.end.substring(0, 10) : null}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default SearchList;

