import { ADDCAM, NORMAL, TEST_URL, SCANIP, TEST_FAILURE, TEST_SUCCESS } from "../constants/actionType";

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
                status: 'TESTURL',
                testurl: action.data
            })

        case TEST_FAILURE:
            return Object.assign({}, state, {
                status: 'TEST_FAILED'
            })

        case TEST_SUCCESS:
            return Object.assign({}, state, {
                status: 'TEST_SUCCESS',
                validurl: action.data
            })
        
        case SCANIP:
            return Object.assign({}, state, {
                status: 'SCANIP'
            })

        default:
            return state;
    }
}