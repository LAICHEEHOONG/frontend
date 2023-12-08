import { SUBMIT } from "../type";

export default function submitReducer(state = false, action) {
    switch (action.type) {
        case SUBMIT:
            return action.payload;
        default:
            return state;
    }
}

// import { ALERT } from "../type";

// export default function alertReducer(state = false, action) {
//     switch (action.type) {
//         case ALERT:
//             return action.payload;

//         default:
//             return state;
//     }
// }