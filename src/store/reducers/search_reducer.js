import { SEARCH } from "../type";

const DEFAULT_SEARCH = {
    text: []
}

export default function searchReducer(state = DEFAULT_SEARCH, action) {
    switch (action.type) {
        case SEARCH:
            return { ...state, text: action.payload }

        default:
            return state;
    }
}