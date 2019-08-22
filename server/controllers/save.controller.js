var http = require('http')

export function savescreenshot(req, res) {
    const { url } = req.body
    console.log(url)
    http.get(url, function(res) {
        console.log(res)
    }).on('error', function(err) {
        console.log(err)
    })
}

export function checkurl(req, res) {
    const { url } = req.body
    http.get(url, function(res) {
        console.log('URL test success')
        res.json({
            testsuccess: true,
        });
    }).on('error', function(err) {
        console.log('URL test failed')
        res.json({
            testsuccess: false
        })
    })
}