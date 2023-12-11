import axios from "axios";

export const search2Fn = async (obj) => {

    try {
        const response = await axios.post('/api/find', { searchData: obj });
        const data = response.data;
        return data;
    } catch (error) {
        console.log(error);
    }
}

export function convertDateFormat(dateString) {

    const date = new Date(dateString);

    const month = date.getMonth() + 1; 
    const day = date.getDate();
    const year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    // let seconds = date.getSeconds();
    // const formattedDate = `${month}/${day}/${year} , ${hours}:${minutes}:${seconds}`;
    const monthsText = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let amPm = 'AM';

    if(hours >= 13) {
        hours = hours - 12;
        amPm = 'PM'
    }

    if(minutes && minutes >= 0 && minutes < 10) {
        minutes = `0${minutes}`;
    }

    const dateFormat = `${day} ${monthsText[month - 1]} ${year}`;
    const timeFormat = `${hours}:${minutes} ${amPm}`;
    // console.log(dateFormat2);
    const result = [dateFormat, timeFormat];
    return result;
}

// January -> Jan
// February -> Feb
// March -> Mar
// April -> Apr
// May -> May
// June -> Jun
// July -> Jul
// August -> Aug
// September -> Sep
// October -> Oct
// November -> Nov
// December -> Dec