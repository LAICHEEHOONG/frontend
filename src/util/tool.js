import axios from "axios";


export const search2Fn = async (obj) => {

    try {
        const response = await axios.post('/api/find', { searchData: obj });
        const data = response.data;
        // console.log(data)
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
    const monthsText = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let amPm = 'AM';

    if (hours >= 13) {
        hours = hours - 12;
        amPm = 'PM'
    }

    if (minutes && minutes >= 0 && minutes < 10) {
        minutes = `0${minutes}`;
    }

    const dateFormat = `${day} ${monthsText[month - 1]} ${year}`;
    const timeFormat = `${hours}:${minutes} ${amPm}`;
    // console.log(dateFormat2);
    const result = [dateFormat, timeFormat];
    return result;
}

export const covertDateFormatDatePicker = (date) => {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();

    month = !month ? 'MM' : month;
    day = !day ? 'DD' : day;
    year = !year ? 'YYYY' : year;
    return `${day}/${month}/${year}`;
}

export const checkDataStatusAndTargetGroup = async () => {


    try {
        const res = await axios.get('/api/checkStatus');
        const data = res.data.result;
        const allStatus = [];
        const allTargetGroup = [];
        let statusObj = {};
        let targetGroupObj = {};

        data.forEach(el => {
            allStatus.push(el.status);
            allTargetGroup.push(el.targetGroup);
        })

        for (let i = 0; i < allStatus.length; i++) {
            if (statusObj[allStatus[i]]) {
                statusObj[allStatus[i]]++;
            } else {
                statusObj[allStatus[i]] = 1
            }
            if (targetGroupObj[allTargetGroup[i]]) {
                targetGroupObj[allTargetGroup[i]]++;
            } else {
                targetGroupObj[allTargetGroup[i]] = 1;
            }
        }

        //obj.map(item => Object.keys(item)[0]);
        statusObj = Object.keys(statusObj);
        targetGroupObj = Object.keys(targetGroupObj);

        statusObj = [...statusObj, 'All'];
        targetGroupObj = [...targetGroupObj, 'All']

        let result = {
            statusObj,
            targetGroupObj
        };

        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}

