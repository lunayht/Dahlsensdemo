import { ADDCAM, NORMAL, TEST_URL, SCANIP } from "../constants/actionType";

var initialState = {
    status: 'NORMAL'
}

export default function(state, action) {
    state = state || initialState;

    switch (action.type) {
        case NORMAL:
            return Object.assign({}, state, {
                status: 'NORMAL'
            })

        case ADDCAM:
            return Object.assign({}, state, {
                status: 'ADD CAMERA'
            });
        
        case TEST_URL:
            return Object.assign({}, state, {
                status: 'TESTURL'
            })
        
        case SCANIP:
            return Object.assign({}, state, {
                status: 'SCANIP'
            })

        default:
            return state;
    }
}