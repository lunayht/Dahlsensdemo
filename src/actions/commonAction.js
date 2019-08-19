import { FAILURE } from '../constants/actionType';

export function failure(error) {
    return {
        type: FAILURE,
        error: error
    }
};