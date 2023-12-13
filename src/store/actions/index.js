import {
    ALLPAGE, PAGE, CLEARPAGE, ALERT, SEARCH_TEXT,
    SEARCH_DATE_START, SEARCH_DATE_END, SEARCH_RES_DATA, 
    CLEAR_RES_DATA, SEARCH_ALL_PAGE, CHANGE_SEARCH_PAGE, 
    CHANGE_TABLE, SEARCH_RESET, SEARCH_PROGRESS,
    SEARCH_STATUS, SEARCH_TARGET_GROUP, STATUS_TARGETGROUP_TYPES,
    SELECTOR_WIDTH, SCREEN_WIDTH

} from '../type';


export const screenWidthAction = (width) => ({
    type: SCREEN_WIDTH,
    payload: width
})

export const selectorWidthAction = (width) => ({
    type: SELECTOR_WIDTH,
    payload: width
})

export const statusTargetGroupTypesAction = (arr) => ({
    type: STATUS_TARGETGROUP_TYPES,
    payload: arr
})

export const searchStatusAction = (status) => ({
    type: SEARCH_STATUS,
    payload: status
})

export const searchTargetGroupAction = (targetGroup) => ({
    type: SEARCH_TARGET_GROUP,
    payload: targetGroup
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

