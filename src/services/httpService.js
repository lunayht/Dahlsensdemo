import { scan, check, sendurl } from '../utils/httpUtil';

export function startscan(data) {
    return scan(data);
}

export function checkip() {
    return check();
}

export function sendimageurl(url) {
    return sendurl(url)
}