import HttpStatus from 'http-status-codes';
import Camera from '../models/camera.model';

var http = require('http')

function isUrlValid(userInput) {
    var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null)
        return false;
    else
        return true;
}

export function checkurl(req, res) {
    const { url } = req.body
    if (isUrlValid(url)) {
        http.get(url, function() {
            console.log('URL test succeed.')
            res.json({
                testsuccess: true,
                url: url
            })
        }).on('error', function(err) {
            console.log('URL test failed. Error msg: ' + err)
            res.json({
                testsuccess: false,
                url: url
            });
        })
    } else {
        console.log('Not a valid URL.')
        res.json({
            testsuccess: false,
            url: url
        })
    }
}

export function saveinfo(req, res) {
    const { b64img, title, notes, url } = req.body;
    Camera.forge({b64img, title, notes, url}).save()
    .then(camera => res.json({
        save: true,
        data: camera.toJSON()
    }))
    .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: err
    }))
}

export function queryinfo(req, res) {
    Camera.fetchAll()
    .then((resData) => {
        // console.log(resData.serialize())
        console.log('Query All Data Done.')
        res.json({
            query: true,
            data: resData.serialize()
        })
    })
}

export function queryone(req, res) {
    const { b64img } = req.body;
    Camera.query({
        where: { b64img: b64img },
    }).fetch().then((resData) => {
        console.log('Query Single Data Done.')
        res.json({
            query: true,
            data: resData.serialize()
        })
    })
}