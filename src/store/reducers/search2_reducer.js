import {
    SEARCH_DATE_START, SEARCH_DATE_END, SEARCH_TEXT,
    SEARCH_PAGE, SEARCH_ALL_PAGE, CHANGE_SEARCH_PAGE,
    SEARCH_RESET, SEARCH_STATUS, SEARCH_TARGET_GROUP
} from "../type";

const DEFAULT_SEARCH = {
    text: '',
    startDate: null,
    endDate: null,
    page: 1,
    allPages: 1,
    status: '',
    targetGroup: '',
}

export default function search2Reducer(state = DEFAULT_SEARCH, action) {
    switch (action.type) {
        case SEARCH_TEXT:
            return { ...state, text: action.payload }
        case SEARCH_DATE_START:
            return { ...state, startDate: action.payload }
        case SEARCH_DATE_END:
            return { ...state, endDate: action.payload }
        case SEARCH_PAGE:
            return { ...state, page: action.payload }
        case SEARCH_ALL_PAGE:
            return { ...state, allPages: action.payload }
        case CHANGE_SEARCH_PAGE:
            return { ...state, page: action.payload }
        case SEARCH_RESET:
            return { ...state, ...DEFAULT_SEARCH }
        case SEARCH_STATUS:
            return { ...state, status: action.payload }
        case SEARCH_TARGET_GROUP:
            return { ...state, targetGroup: action.payload }

        default:
            return state;
    }
}