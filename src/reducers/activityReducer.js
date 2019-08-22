import { ADDCAM, NORMAL, TEST_URL, SCANIP, TEST_FAILURE, TEST_SUCCESS, NEXT_N_SAVE } from "../constants/actionType";

var initialState = {
    status: 'NORMAL'
}

export default function(state, action) {
    state = state || initialState;

    switch (action.type) {
        case NORMAL:
            return Object.assign({}, initialState)

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
                status: 'TEST_FAILED',
                failedurl: action.data
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

        case NEXT_N_SAVE: 
            return Object.assign({}, state, {
                status: 'NEXT_N_SAVE',
                finalurl: action.url
            })

        default:
            return state;
    }
}