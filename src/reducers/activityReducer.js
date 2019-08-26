import { ADDCAM, NORMAL, TEST_URL, SCANIP, TEST_FAILURE, TEST_SUCCESS, NEXT_N_SAVE, SAVE_IMG, SAVED_TO_DATABASE } from "../constants/actionType";

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

        case SAVE_IMG:
            return Object.assign({}, state, {
                img: action.data
            })
        
        case SCANIP:
            return Object.assign({}, state, {
                status: 'SCANIP'
            })

        case NEXT_N_SAVE: 
            return Object.assign({}, state, {
                status: 'NEXT_N_SAVE',
                finalurl: action.url,
                testurl: '',
                validurl: ''
            })
        
        case SAVED_TO_DATABASE:
            return Object.assign({}, state, {
                status: 'SAVED_TO_DATABASE',
                img: action.data.b64img,
                title: action.data.title,
                notes: action.data.notes
            })

        default:
            return state;
    }
}