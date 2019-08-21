import { startscan, checkip } from '../services/httpService';
import * as commonAction from './commonAction';
import history from '../utils/history';

export function clickscan(data) {
    return function(dispatch) {
        return startscan(data)
        .catch((error) => {
            dispatch(commonAction.failure(error))
        })
    }
}

export function checkclientlocalip() {
    return function(dispatch) {
        return checkip()
        .catch((error) => {
            dispatch(commonAction.failure(error))
        })
    }   
}

export function addingcam() {
    history.push('/addcam')
    return function(dispatch) {
        dispatch(commonAction.addcam())
    }
}

export function testingcam() {
    return function(dispatch) {
        dispatch(commonAction.testcam())
    }
}

export function scanningip() {
    return function(dispatch) {
        dispatch(commonAction.scancam())
    }
}