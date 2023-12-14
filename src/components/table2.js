import React from "react";
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
import { convertDateFormat } from "../util/tool";
import CircularIndeterminate from "./progress";
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


const TableList2 = () => {

    const searchResArr = useSelector(state => state.searchRes);
    const screenWidth = useSelector(state => state.mobileMode.screenPixel);
    const searchProgressStatus = useSelector(state => state.searchProgress);

    return (

        <>
            {
                searchProgressStatus
                    ?
                    <CircularIndeterminate />
                    :
                    <TableContainer component={Paper} style={screenWidth < 1000 ? { maxHeight: 900, overflow: 'auto' } : null}  >
                        <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell style={screenWidth < 1000 ? { fontSize: '1.2rem' } : null} >Title</StyledTableCell>
                                    <StyledTableCell style={screenWidth < 1000 ? { fontSize: '1.2rem' } : null}>Status</StyledTableCell>
                                    <StyledTableCell style={screenWidth < 1000 ? { fontSize: '1.2rem' } : null} align="center">Target Group</StyledTableCell>
                                    <StyledTableCell style={screenWidth < 1000 ? { fontSize: '1.2rem' } : null}>Content</StyledTableCell>
                                    <StyledTableCell style={screenWidth < 1000 ? { fontSize: '1.2rem' } : null}>Created Date</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {
                                    searchResArr.length === 0 ? null :
                                        searchResArr.map(el => {
                                            return (

                                                <TableRow key={el._id} hover>
                                                    <ArrowTooltips
                                                        tag={
                                                            <TableCell className={screenWidth < 1000 ? 'table_cell_mobile' : 'table_cell'}>
                                                                {el.title.length > 30 ? el.title.substring(0, 30) + '...' : el.title}
                                                            </TableCell>
                                                        }
                                                        str={el.title ? el.title : null}
                                                    />
                                                    <TableCell className={screenWidth < 1000 ? 'table_cell_mobile' : 'table_cell'}>
                                                        {el.status}
                                                    </TableCell>
                                                    <TableCell align="center" className={screenWidth < 1000 ? 'table_cell_mobile' : 'table_cell'}>
                                                        {el.targetGroup}
                                                    </TableCell>
                                                    <ArrowTooltips
                                                        tag={
                                                            <TableCell className={screenWidth < 1000 ? 'table_cell_mobile' : 'table_cell'}>
                                                                {el.content.length > 30 ? el.content.substring(0, 30) + '...' : el.content}
                                                            </TableCell>
                                                        }
                                                        str={el.content ? el.content : null}
                                                    />

                                                    {
                                                        screenWidth < 1000 ?
                                                            <TableCell className={screenWidth < 1000 ? 'table_cell_mobile' : 'table_cell'} >
                                                                {el.created ? `${convertDateFormat(el.created)[0]}` : null}
                                                            </TableCell>
                                                            :
                                                            <TableCell className={screenWidth < 1000 ? 'table_cell_mobile' : 'table_cell'} >
                                                                {el.created ? `${convertDateFormat(el.created)[0]} - ${convertDateFormat(el.created)[1]}` : null}
                                                            </TableCell>
                                                    }
                                                    {/* <TableCell className="table_cell">
                                                        {el.created ? `${convertDateFormat(el.created)[0]} - ${convertDateFormat(el.created)[1]}` : null}
                                                    </TableCell> */}

                                                </TableRow>
                                            )
                                        })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
            }
        </>

    )
}

export default TableList2;





