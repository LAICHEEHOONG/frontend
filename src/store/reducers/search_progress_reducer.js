import { SEARCH_PROGRESS } from "../type";

export default function searchProgressReducer(state = false, action) {
    switch (action.type) {
        case SEARCH_PROGRESS:
            return action.payload;

        default:
            return state;
    }
}