var http = require('http')

export function checkurl(req, res) {
    const { url } = req.body
    http.get(url, function() {
        console.log('URL test success')
        res.json({
            testsuccess: true,
            url: url
        })
    }).on('error', function(err) {
        console.log('URL test failed')
        res.json({
            testsuccess: false,
            url: url
        });
    })
}

export function saveinfo(req, res) {
    console.log(req.body)
    res.json({
        savesuccess: true
    })
}