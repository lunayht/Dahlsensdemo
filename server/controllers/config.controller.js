import { PythonShell } from 'python-shell';
const shelljs = require('shelljs');

const PATH = '/home/yinghuit/Documents/Git/Dahlsensdemo';
var options = {
    pythonPath: '/usr/bin/python3', // Run in python3 
    pythonOptions: ['-u'],
    scriptPath: PATH
};
const MAIN = '/main.py'

export function configUrl(req, res) {
    const { url, id } = req.body
    // Create new py file to execute
    shelljs.exec('cp ' + PATH + MAIN + ' ' + PATH + '/' + id + '.py') 
    options['args'] = [url]
    var filename = id + '.py'
    
    // Run the created py file
    PythonShell.run(filename, options, function(err, result) {
        if (err) { console.log(err) };

        // Delete py file when program end
        if (result[0] === 'END OF PROGRAM') {
            shelljs.exec('rm ' + PATH + '/' + filename)

            // res.json({
            //     assign: true
            // })
        }
    })
}