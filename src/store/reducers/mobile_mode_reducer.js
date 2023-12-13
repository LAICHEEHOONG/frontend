import { SCREEN_WIDTH, SELECTOR_WIDTH } from "../type";

const DEFAULT_MOBILE = {
    screenPixel: 1500,
    width: 140
}

export default function mobileModeReducer(state = DEFAULT_MOBILE, action) {
    switch (action.type) {
        case SCREEN_WIDTH:
            return { ...state, screenPixel: action.payload }
        case SELECTOR_WIDTH:
            return { ...state, width: action.payload }

        default:
            return state;
    }
}