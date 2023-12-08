import { CHANGE_TABLE } from "../type";

export default function changeTableReducer(state = true, action) {
    switch (action.type) {
        case CHANGE_TABLE:
            return action.payload;

        default:
            return state;
    }
}