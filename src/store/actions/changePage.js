
import * as action from './index';
import axios from 'axios';

export const changePages = (pageNum) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.post('/api/page', { pageNum });
            const page = response.data;
            dispatch(action.changePage(page));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}









