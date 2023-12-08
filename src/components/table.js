import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
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
import { toMalaysiaTime } from "../util/tool";

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

// function convertDateFormat(dateString) {
//     // Create a Date object from the input string
//     const date = new Date(dateString);
  
//     // Extract the necessary components
//     const month = date.getMonth() + 1; // Month starts from 0, so add 1
//     const day = date.getDate();
//     const year = date.getFullYear();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();
  
//     // Format the date in the desired way
//     const formattedDate = `${month}/${day}/${year} , ${hours}:${minutes}:${seconds}`;
  
//     return formattedDate;
//   }
  
  // Usage
//   const inputDateString = "Mon Nov 20 2023 21:58:08 GMT+0800 (Malaysia Time)";
//   const convertedDate = convertDateFormat(inputDateString);
//   console.log(convertedDate);
  

// const toMalaysiaTime = (time) => {
//     const utcTimestamp = time;
//     const dateInUTC = new Date(utcTimestamp);

//     // Convert UTC time to Malaysia Time (UTC +8)
//     const malaysiaTime = new Date(dateInUTC.getTime() + (8 * 60 * 60 * 1000)); // Adding 8 hours in milliseconds

//     // Formatting the Malaysia Time
//     const options = {
//         year: 'numeric',
//         month: 'numeric',
//         day: 'numeric',
//         hour: 'numeric',
//         minute: 'numeric',
//         second: 'numeric',
//         hour12: false,
//         timeZone: 'Asia/Kuala_Lumpur' // Setting the timezone
//     };

//     const malaysiaTimeFormatted = new Intl.DateTimeFormat('en-GB', options).format(malaysiaTime);
//     // console.log(malaysiaTimeFormatted); // Outputting the formatted Malaysia Time
//     // console.log(convertDateFormat(malaysiaTime))
//     return convertDateFormat(malaysiaTime);
// }


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
                                    <StyledTableCell>Create Date</StyledTableCell>
                    
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
                                                        {el.created ? toMalaysiaTime(el.created) : null}
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





