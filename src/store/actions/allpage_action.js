
import * as action from './index';
import axios from 'axios';

export const allPages = () => {
    return async (dispatch, getState) => {
        try {
            const pages = await axios.get('/api/page');
            const result = pages.data;
            dispatch(action.allPage(result));
        } catch(err) {
            console.log(err);
        }
    }
}




