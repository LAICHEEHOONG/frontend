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
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formattedDate = `${month}/${day}/${year} , ${hours}:${minutes}:${seconds}`;

    return formattedDate;
}

