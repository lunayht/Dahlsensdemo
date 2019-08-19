import { startscan, checkip } from '../services/httpService';
import * as commonAction from './commonAction';

export function clickscan(data) {
    console.log(data)
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