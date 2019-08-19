import { scan, check } from '../utils/httpUtil';

export function startscan(data) {
    return scan(data);
}

export function checkip() {
    return check();
}