import { PythonShell } from 'python-shell';

let options = {
    pythonPath: '/usr/bin/python3',
    pythonOptions: ['-u'],
    scriptPath: '/home/yinghuit/Documents/Git/Dahlsensdemo'
}

export function configurl(req, res) {
    const { url } = req.body
    options['args'] = url
    PythonShell.run('main.py', options, function(err, result) {
        if (err) { console.log(err) };

        console.log('results: ', result)
    })
}