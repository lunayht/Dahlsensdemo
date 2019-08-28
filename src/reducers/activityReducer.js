import { ADDCAM, SETUP, TEST_URL, SCANIP, TEST_FAILURE, TEST_SUCCESS, NEXT_N_SAVE, SAVE_IMG, SAVED_TO_DATABASE, MONITOR, REDIRECT_TO_MONITOR, DISPLAYIMG } from "../constants/actionType";

var initialState = {
    status: 'SETUP',
    imgnow: '',
    titlenow: ''
}

export default function(state, action) {
    state = state || initialState;

    switch (action.type) {
        case SETUP:
            return Object.assign({}, state, {
                status: 'SETUP'
            })

        case MONITOR:
            return Object.assign({}, state, {
                status: 'MONITOR'
            })

        case ADDCAM:
            return Object.assign({}, state, {
                status: 'ADD CAMERA'
            });
        
        case TEST_URL:
            return Object.assign({}, state, {
                status: 'TEST URL',
                testurl: action.data
            })

        case TEST_FAILURE:
            return Object.assign({}, state, {
                status: 'TEST FAILED',
                failedurl: action.data
            })

        case TEST_SUCCESS:
            return Object.assign({}, state, {
                status: 'TEST SUCCESS',
                validurl: action.data
            })

        case SAVE_IMG:
            return Object.assign({}, state, {
                img: action.data
            })
        
        case SCANIP:
            return Object.assign({}, state, {
                status: 'SCAN IP'
            })

        case NEXT_N_SAVE: 
            return Object.assign({}, state, {
                status: 'NEXT N SAVE',
                finalurl: action.url,
                testurl: '',
                validurl: ''
            })
        
        case SAVED_TO_DATABASE:
            return Object.assign({}, state, {
                status: 'SAVED TO DATABASE',
                img: action.data.b64img,
                title: action.data.title,
                notes: action.data.notes
            })

        case REDIRECT_TO_MONITOR:
            return Object.assign({}, state, {
                status: 'REDIRECT TO MONITOR',
                imgnow: action.data.src,
                titlenow: action.data.title
            })

        case DISPLAYIMG:
            return Object.assign({}, state, {
                imgnow: action.data.b64img,
                titlenow: action.data.title
            })

        default:
            return state;
    }
}