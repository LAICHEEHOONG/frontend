import { STATUS_TARGETGROUP_TYPES } from "../type";

const DEFAULT_STATUS_TARGETGROUP_TYPES = {
    statusType: [],
    targetGroupType: []
}

export default function alertReducer(state = DEFAULT_STATUS_TARGETGROUP_TYPES, action) {
    switch (action.type) {
        case STATUS_TARGETGROUP_TYPES:
            return {statusType: action.payload[0], targetGroupType: action.payload[1]};

        default:
            return state;
    }
}