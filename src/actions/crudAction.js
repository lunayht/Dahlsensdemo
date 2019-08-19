import { startscan, checkip } from '../services/httpService';
import * as commonAction from './commonAction';

export function clickscan(data) {
    return startscan({'status': data})
    .catch((error) => {
        commonAction.failure(error)
    })
}

export function checkclientlocalip() {
    return checkip()
    .catch((error) => {
        commonAction.failure(error)
    })
}