import { TEST } from "../type";

export default function testReducer(state = [], action) {
    switch (action.type) {
        case TEST:
            return {
                test: true
            }

        default:
            return state;
    }
}