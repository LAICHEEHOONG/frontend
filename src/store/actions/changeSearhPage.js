
import { searchAllPage, setAlert, setSearchResData } from './index';
import { search2Fn } from '../../util/tool';
import { searchProgressAction } from './index';


export const paginationSearchPage = (page) => {

    return async (dispatch, getState) => {
        try {
            const searchData = getState().search2;
            dispatch(searchProgressAction(true));
            search2Fn(searchData)
                .then(data => {
                    dispatch(searchAllPage(data[1].allPage))
                    if (data[0].length === 0) {
                        dispatch(setAlert(true));
                        setTimeout(() => {
                            dispatch(setAlert(false));
                            dispatch(searchProgressAction(false))
                        }, 4000)
                    }
                    dispatch(setSearchResData(data[0]));
                    dispatch(searchProgressAction(false));
                })
                .catch(err => console.log(err));

        } catch (error) {
            console.error('Error search page change', error);
        }
    }
}









