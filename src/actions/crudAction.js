import { startscan, sendimageurl, sendtodatabase } from '../services/httpService';
import * as commonAction from './commonAction';
import history from '../utils/history';
import store from '../store/store';

export function setup() {
    history.push('/')
    return function(dispatch) {
        dispatch(commonAction.setup())
    }
}

export function monitor() {
    history.push('/monitor')
    return function(dispatch) {
        dispatch(commonAction.monitor())
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

// export function checkclientlocalip() {
//     return function(dispatch) {
//         return checkip()
//         .catch((error) => {
//             dispatch(commonAction.failure(error))
//         })
//     }   
// }

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

export function todatabase(data) {
    return function(dispatch) {
        dispatch(commonAction.savetodatabase(data))
        return sendtodatabase(data)
        .catch((error) => {
            dispatch(commonAction.failure(error))
        })
    }
}

export function redirecttomonitor(imgsrc, title) {
    var data = {}
    data['src'] = imgsrc
    data['title'] = title
    history.push('/monitor')
    store.dispatch(commonAction.redirecttomonitor(data))
} 