import React, { Component } from 'react';
import { saveimg } from '../../utils/httpUtil';
// import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
// import 'react-html5-camera-photo/build/css/index.css';
 
// var stream, imageCapture; 
// function toDataURL(src, callback, outputFormat) {
//     var img = new Image();
//     img.crossOrigin = 'Anonymous';
//     img.onload = function() {
//       var canvas = document.createElement('CANVAS');
//       var ctx = canvas.getContext('2d');
//       var dataURL;
//       canvas.height = this.naturalHeight;
//       canvas.width = this.naturalWidth;
//       ctx.drawImage(this, 0, 0);
//       dataURL = canvas.toDataURL(outputFormat);
//       callback(dataURL);
//     };
//     img.src = src;
//     if (img.complete || img.complete === undefined) {
//       img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
//       img.src = src;
//     }
//   }


class App extends Component {


    gotMedia(mediaStream) {
        console.log('getMedia')
        var imggg = new Image();

        imggg.setAttribute('crossOrigin','anonymous');
        
        const img = document.getElementById('img')
        imggg.src = img.url
//         img.setAttribute('crossOrigin', 'anonymous'); // works for me
//         // console.log(vid)
        var c = document.createElement('canvas');

// // var img = document.getElementById('myImage');
c.width = img.width;
c.height = img.height;
var ctx = c.getContext('2d');

console.log(ctx)
ctx.drawImage(imggg, 0, 0);
var dataURL = c.toDataURL("image/png");

        console.log(dataURL);
// console.log(ctx)
// toDataURL(
//     img.src,
//     function(dataUrl) {
//       console.log('RESULT:', dataUrl)
//     }
//   )
// var image = c.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
// window.location.href=image;
// saveimg(
//     {'url': img.src, 'width': img.width, 'height': img.height}
// )
// var data = c.toDataURL('image/png');
// console.log(data)
    //     window.navigator.mediaDevices.getUserMedia({video: true})
    // .then(function(mediaStream)
    // { 
    //     stream = mediaStream; 
    //     let mediaStreamTrack = mediaStream.getVideoTracks()[0];
    //     imageCapture = new ImageCapture(vid);
    //     console.log(imageCapture);
    // })
      }

error(error)
{ 
    console.error('error:', error); 
}

takePhoto(imgg)
{ 
    const img = imgg || document.querySelector('img');
    console.log(img)
    // imageCapture.takePhoto()
    // .then(blob => {
    //     let url = window.URL.createObjectURL(blob);
    //     img.src = url;
    //     window.URL.revokeObjectURL(url); 
    // })
}; 

  onTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log('returns photo in b64');
  }
 
  onCameraError (error) {
    console.error('onCameraError', error);
  }
 
  onCameraStart (stream) {
    console.log(stream);
  }
 
  onCameraStop () {
    console.log('onCameraStop');
  }
 
  render () {
    return (
      <div className="App">
        <img id='img' src='http://85.210.115.44/videostream.cgi?user=admin&pwd=' alt='insecurecam'/>
        
        {/* <Camera
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
          onCameraError = { (error) => { this.onCameraError(error); } }
          idealFacingMode = {FACING_MODES.ENVIRONMENT}
          idealResolution = {{width: 640, height: 480}}
          imageType = {IMAGE_TYPES.JPG}
          imageCompression = {0.97}
          isMaxResolution = {false}
          isImageMirror = {false}
          isSilentMode = {true}
          isDisplayStartCameraError = {true}
          isFullscreen = {true}
          sizeFactor = {1}
          onCameraStart = { () => { this.onCameraStart('http://176.92.122.44:8083/videostream.cgi?user=admin&pwd='); } }
          onCameraStop = { () => { this.onCameraStop(); } }
        /> */}
        <button onClick={this.gotMedia}>getMediaStream</button>
        <button onClick={this.takePhoto}>takephoto</button>
      </div>
    );
  }
}
 
export default App;