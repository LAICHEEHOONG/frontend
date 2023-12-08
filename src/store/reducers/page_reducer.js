import { PAGE, ALLPAGE, CLEARPAGE } from "../type";

const DEFAULT_PAGE = {
    pageNum: [],
    allPage: 10
}

export default function pageReducer(state = DEFAULT_PAGE, action) {
    switch (action.type) {
        case PAGE:
            return { ...state, pageNum: action.payload }
        case ALLPAGE:
            return { ...state, allPage: action.payload }
        case CLEARPAGE:
            return {...state, pageNum: []}

        default:
            return state;
    }
}