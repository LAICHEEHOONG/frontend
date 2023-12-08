
import * as action from './index';
import axios from 'axios';

export const allPages = () => {
    return async (dispatch, getState) => {
        try {
            const pages = await axios.get('/api/page');
            const result = pages.data;
            // console.log(result)
            dispatch(action.allPage(result));
        } catch(err) {
            console.log(err);
        }
    }
}




// import * as chinese from './index';
// import axios from 'axios';

// export const chineseData = () => {
//     return async (dispatch, getState) => {
//         try {
//             const chinese_data = await axios.get('/api/chinese');
//             const data = chinese_data.data;
//             // console.log(data);
//             dispatch(chinese.chineseData(data));
//         } catch (error) {
//             console.error('Request chinese data error.', error);
//         }
//     }

// }

