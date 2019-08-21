import { SCAN_FAILURE, ADDCAM, TEST_URL, SCANIP } from '../constants/actionType';

export function addcam() {
    return {
        type: ADDCAM
    }
};

export function testcam() {
    return {
        type: TEST_URL
    }
};

export function scancam() {
    return {
        type: SCANIP
    }
}

export function failure(error) {
    return {
        type: SCAN_FAILURE,
        error: error
    }
};