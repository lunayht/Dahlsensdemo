import { PythonShell } from 'python-shell';
// import HttpStatus from 'http-status-codes';
// import Camera from '../models/camera.model';
const shelljs = require('shelljs');

const PATH = 'D:\\Git\\Dahlsensdemo\\';
var options = {
    pythonPath: 'C:\\Users\\User\\AppData\\Local\\Programs\\Python\\Python36\\python.exe', // Run in python3 
    pythonOptions: ['-u'],
    scriptPath: PATH
};
const MAIN = 'main.py'

export function configurl(req, res) {
    const { url, id } = req.body  
    // Create new py file to execute
    shelljs.exec('copy ' + PATH + MAIN + ' ' + PATH + id + '.py') 
    options['args'] = [url, id]
    var filename = id + '.py'
    
    // Run the created py file
    PythonShell.run(filename, options, function(err, result) {
        if (err) { console.log(err) };

        // Delete py file when program end
        if (result[0] === 'END OF PROGRAM') {
            shelljs.exec('del ' + PATH + filename)

            // res.json({
            //     assign: true
            // })
        }
    })
}