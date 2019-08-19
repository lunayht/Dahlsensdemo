const ip = require('ip');
const http = require('http');
const ping = require('ping');
const Netmask = require('netmask').Netmask;

const ipAdd = ip.address();
const keepAliveAgent = new http.Agent({
    maxSockets: 100
});
const Ports = Array.from(Array(500).keys());

var data = {};
var key = 'response';
data[key] = [];

let block = new Netmask(ipAdd + '/24');

export function scanresult(req, res) {
    console.log('STATUS: ' + req.body.status);
    block.forEach((ip, long, index) => {
        ping.sys.probe(ip, function(isAlive) {
            if (isAlive) {
                for (var p in Ports) {
                    (function check(p) {
                        var s = keepAliveAgent.createConnection({
                            host: ip,
                            port: Ports[p],
                            family: 4
                        }, () => {
                            var result = ip + ':' + Ports[p];
                            data[key].push(result);
                            s.destroy()
                        });

                        s.setTimeout(Ports.length, function() {
                            s.destroy()
                        });

                        s.on('error', function() {
                            s.destroy()
                        });

                    })(p)
                }
            }
        })
    });

    setTimeout(function() {
        console.log(data);
    }, 5000);
    
    res.json({
        success: true,
        status: 'done'
    });
}

export function getlocalip(req, res) {
    res.json({
        sent: true,
        localip: ipAdd
    });
}