import { SCAN_FAILURE, ADDCAM, TEST_URL, SCANIP } from '../constants/actionType';

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
}

export function failure(error) {
    return {
        type: SCAN_FAILURE,
        error: error
    }
};