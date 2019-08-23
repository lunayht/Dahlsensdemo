var http = require('http')

function toDataURL(src, callback, outputFormat) {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function() {
      var canvas = document.createElement('CANVAS');
      var ctx = canvas.getContext('2d');
      var dataURL;
      canvas.height = this.naturalHeight;
      canvas.width = this.naturalWidth;
      ctx.drawImage(this, 0, 0);
      dataURL = canvas.toDataURL(outputFormat);
      callback(dataURL);
    };
    img.src = src;
    if (img.complete || img.complete === undefined) {
      img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      img.src = src;
    }
  }

export function savescreenshot(req, res) {
    console.log(req.body)
    // toDataURL(
    //     req.body.url,
    //     function(dataUrl) {
    //       console.log('RESULT:', dataUrl)
    //     }
    //   )
    // var c = document.createElement('canvas');
    // console.log(c)
}

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