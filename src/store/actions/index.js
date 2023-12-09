import {
    ALLPAGE, PAGE, SEARCH, CLEARPAGE, ALERT, SEARCH_TEXT,
    SEARCH_DATE_START, SEARCH_DATE_END, SEARCH_RES_DATA, CLEAR_RES_DATA, SEARCH_ALL_PAGE,
    CHANGE_SEARCH_PAGE, CHANGE_TABLE, SEARCH_RESET, SEARCH_PROGRESS, SUBMIT
} from '../type';

import { add8hour } from '../../util/tool';

export const submitAction = (booleaN) => ({
    type: SUBMIT,
    payload: booleaN
})

export const searchProgressAction = (booleaN) => ({
    type: SEARCH_PROGRESS,
    payload: booleaN
})

export const searchResetAction = () => ({
    type: SEARCH_RESET
})

export const changeTableAction = (booleaN) =>( {
    type: CHANGE_TABLE,
    payload: booleaN
})

export const changeSearchPage = (page) => ({
    type: CHANGE_SEARCH_PAGE,
    payload: page
})

export const searchAllPage = (pages) => ({
    type: SEARCH_ALL_PAGE,
    payload: pages
})

export const clearResData = () => ({
    type: CLEAR_RES_DATA
})

export const setSearchResData = (arr) => ({
    type: SEARCH_RES_DATA,
    payload: arr
})

export const setSearchText = (text) => ({
    type: SEARCH_TEXT,
    payload: text
})

export const setDateStart = (startDate) => ({
    type: SEARCH_DATE_START,
    payload: startDate
    // payload: add8hour(startDate)
})

export const setDateEnd = (endDate) => ({
    type: SEARCH_DATE_END,
    payload: endDate
    // payload: add8hour(endDate)
})

export const setAlert = (booleaN) => ({
    type: ALERT,
    payload: booleaN
})

export const allPage = (total) => ({
    type: ALLPAGE,
    payload: total.pages
});

export const changePage = (pageNum) => ({
    type: PAGE,
    payload: pageNum
})

export const searchText = (text) => ({
    type: SEARCH,
    payload: text
})

export const clearText = () => ({
    type: CLEARPAGE
})

