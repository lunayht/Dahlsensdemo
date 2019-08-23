import { startscan, checkip, sendimageurl } from '../services/httpService';
import * as commonAction from './commonAction';
import history from '../utils/history';

export function normal() {
    history.push('/')
    return function(dispatch) {
        dispatch(commonAction.normal())
    }
}

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

export function testingcam(data) {
    return function(dispatch) {
        dispatch(commonAction.testcam(data))
    }
}

export function scanningip() {
    return function(dispatch) {
        dispatch(commonAction.scancam())
    }
}

export function saveimage(b64) {
    return function(dispatch) {
        dispatch(commonAction.saveimg(b64))
    }
}

export function testurl(url) {
    var data = { 'url': url }
    return function(dispatch) {
        return sendimageurl(data)
        .catch((error) => {
            dispatch(commonAction.failure(error))
        })
    }
}

export function nextnsave(url) {
    history.push('/savecam')
    return function(dispatch) {
        dispatch(commonAction.nextnsave(url))
    }
}

export function back() {
    history.push('/addcam')
    return function(dispatch) {
        dispatch(commonAction.addcam())
    }
}