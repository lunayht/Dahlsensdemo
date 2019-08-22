const ip = require('ip');
const http = require('http');
const ping = require('ping');
const Netmask = require('netmask').Netmask;

const ipAdd = ip.address();
const keepAliveAgent = new http.Agent({
    maxSockets: 100
});

var temports = []
var data = {};
var key = 'response';
data[key] = [];

let block = new Netmask(ipAdd + '/24');

export function scanresult(req, res) {
    console.log('Scanning now..........')
    var entries = req.body.port.split(',');
    var length = entries.length;
    var i, entry, low, high, range;
    for (i = 0; i < length; i++) {
        entry = entries[i];
        if (!~entry.indexOf('-')) {
            temports.push(+entry);
        } else {
            range = entry.split('-');
            low = +range[0];
            high = +range[1];
            while (low <= high) {
                temports.push(low++);
            }
        }
        temports.sort((a, b) => a - b);
        var Ports = [...new Set(temports)];
    }
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
        res.json(data)
    }, 10000);
}

export function getlocalip(req, res) {
    res.json({
        sent: true,
        localip: ipAdd
    });
}