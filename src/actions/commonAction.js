import { FAILURE, ADDCAM, TEST_URL, SCANIP, TEST_SUCCESS, TEST_FAILURE, NORMAL, NEXT_N_SAVE, SAVE_IMG, SAVED_TO_DATABASE } from '../constants/actionType';

export function normal() {
    return {
        type: NORMAL
    }
}

export function testfailure(data) {
    return {
        type: TEST_FAILURE,
        data
    }
}

export function saveimg(data) {
    return {
        type: SAVE_IMG,
        data
    }
}

export function testsuccess(data) {
    return {
        type: TEST_SUCCESS,
        data
    }
}

export function addcam() {
    return {
        type: ADDCAM
    }
};

export function testcam(data) {
    return {
        type: TEST_URL,
        data
    }
};

export function scancam() {
    return {
        type: SCANIP
    }
};

export function failure(error) {
    return {
        type: FAILURE,
        error: error
    }
};

export function nextnsave(url) {
    return {
        type: NEXT_N_SAVE,
        url
    }
};

export function savetodatabase(data) {
    return {
        type: SAVED_TO_DATABASE,
        data
    }
}