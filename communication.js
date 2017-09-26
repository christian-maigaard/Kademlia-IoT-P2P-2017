const request = require('request');
const main = require('./main');

// sends post request to bootnode on startup
exports.sendping = function ping(ID, port, my_ip) {
  if (port != 3500) { // boot node should request itself
    request.post(
      'http://localhost:3500/api/node/ping', {
        json: {
          remoteId: ID,
          remotePort: port,
          remoteIp: my_ip
        }
      },
      function(error, response, body) {
        if (!error && response.statusCode == 200) {
          main.handleResponse(this.response.body);
        }
      }
    );
  }
}