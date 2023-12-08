import { SEARCH_RES_DATA, CLEAR_RES_DATA } from "../type";

export default function alertReducer(state = [], action) {
    switch (action.type) {
        case SEARCH_RES_DATA:
            return action.payload;
        
        case CLEAR_RES_DATA:
            return [];

        default:
            return state;
    }
}