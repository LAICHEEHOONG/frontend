import { ALERT } from "../type";

export default function alertReducer(state = false, action) {
    switch (action.type) {
        case ALERT:
            return action.payload;

        default:
            return state;
    }
}