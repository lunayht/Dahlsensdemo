import { SCAN_FAILURE } from '../constants/actionType';

export function failure(error) {
    return {
        type: SCAN_FAILURE,
        error: error
    }
};