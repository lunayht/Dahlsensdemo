import { SCAN_FAILURE, ADDCAM, TEST_URL, SCANIP, TEST_SUCCESS, TEST_FAILURE, NORMAL } from '../constants/actionType';

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
        type: SCAN_FAILURE,
        error: error
    }
};