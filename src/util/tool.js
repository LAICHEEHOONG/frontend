import axios from "axios";

export const pagesData = async (pageNum) => {
    try {
        const response = await axios.post('/api/page', { pageNum });
        const data = response.data;
        return data;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const search2Fn = async (obj) => {

    try {
        const response = await axios.post('/api/find2', { searchData: obj });
        const data = response.data;
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const toMalaysiaTime = (time) => {
    const utcTimestamp = time;
    const dateInUTC = new Date(utcTimestamp);
    // Convert UTC time to Malaysia Time (UTC +8)
    const malaysiaTime = new Date(dateInUTC.getTime() + (8 * 60 * 60 * 1000)); // Adding 8 hours in milliseconds

    return convertDateFormat(malaysiaTime);
}

export function addOneDay(date) {
    let newDate = date;
    newDate.setDate(newDate.getDate() + 1);
    return newDate;
  }
  
function convertDateFormat(dateString) {
    // Create a Date object from the input string
    const date = new Date(dateString);

    // Extract the necessary components
    const month = date.getMonth() + 1; // Month starts from 0, so add 1
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Format the date in the desired way
    const formattedDate = `${month}/${day}/${year} , ${hours}:${minutes}:${seconds}`;

    return formattedDate;
}