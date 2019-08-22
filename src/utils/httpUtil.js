import axios from 'axios';

const serveraddress = 'http://localhost:5000'

export function scan(data) {
    return axios
        .post(serveraddress + '/scan', data, {
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
        .get(serveraddress + '/localip')
        .catch((err) => {
            console.log(err)
        })
}

export function sendurl(url) {
    return axios
        .post(serveraddress + '/imgurl', url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .catch((err) => {
            console.log(err)
        });
}