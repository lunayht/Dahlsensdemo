import { PythonShell } from 'python-shell';
import HttpStatus from 'http-status-codes';
import Camera from '../models/camera.model';
const shelljs = require('shelljs');

const PATH = '/home/lauretta/Documents/Dahlsensdemo';
var options = {
    pythonPath: '/usr/bin/python3', // Run in python3 
    pythonOptions: ['-u'],
    scriptPath: PATH
};
const MAIN = '/main.py'

export function configurl(req, res) {
    const { url, id } = req.body
    // Create new py file to execute
    shelljs.exec('cp ' + PATH + MAIN + ' ' + PATH + '/' + id + '.py') 
    options['args'] = [url, id]
    var filename = id + '.py'
    
    // Run the created py file
    PythonShell.run(filename, options, function(err, result) {
        if (err) { console.log(err) };

        // Delete py file when program end
        if (result.length > 0) {
            shelljs.exec('rm ' + PATH + '/' + filename)

            // res.json({
            //     assign: true
            // })
        }
        console.log(result)
    })
}