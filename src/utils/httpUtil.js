import axios from 'axios';

const SERVERADDRESS = 'http://localhost:5000'

export function scan(data) {
    return axios
        .post(SERVERADDRESS + '/scan', data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

export function check() {
    return axios
        .get(SERVERADDRESS + '/localip')
        .catch((err) => {
            console.log(err)
        })
}

export function sendurl(url) {
    return axios
        .post(SERVERADDRESS + '/imgurl', url)
        .catch((err) => {
            console.log(err)
        });
}

export function todatabase(data) {
    return axios
        .post(SERVERADDRESS + '/mysql', data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

export function getinfo() {
    return axios
        .post(SERVERADDRESS + '/getall')
        .catch((err) => {
            console.log(err)
        })
}

export function checkcard(img) {
    return axios   
        .post(SERVERADDRESS + '/getone', img)
        .catch((err) => {
            console.log(err)
        })
}