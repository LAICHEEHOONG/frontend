import {
    ALLPAGE, PAGE, CLEARPAGE, ALERT, SEARCH_TEXT,
    SEARCH_DATE_START, SEARCH_DATE_END, SEARCH_RES_DATA, CLEAR_RES_DATA, SEARCH_ALL_PAGE,
    CHANGE_SEARCH_PAGE, CHANGE_TABLE, SEARCH_RESET, SEARCH_PROGRESS
} from '../type';



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
})

export const setDateEnd = (endDate) => ({
    type: SEARCH_DATE_END,
    payload: endDate
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

export const clearText = () => ({
    type: CLEARPAGE
})

