/*
    This file is part of ethereum.js.

    ethereum.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    ethereum.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with ethereum.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file httpsync.js
 * @authors:
 *   Marek Kotewicz <marek@ethdev.com>
 *   Marian Oancea <marian@ethdev.com>
 * @date 2014
 */

if (process.env.NODE_ENV !== 'build') {
        var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; // jshint ignore:line
}

var HttpSyncProvider = function (host) {
    this.handlers = [];
    this.host = host || 'http://localhost:8080';
};

HttpSyncProvider.prototype.send = function (payload) {
    //var data = formatJsonRpcObject(payload);

    var request = new XMLHttpRequest();
    request.open('POST', this.host, false);
    request.send(JSON.stringify(payload));

    var result = request.responseText;
    // check request.status
    if(request.status !== 200)
        return;
    return JSON.parse(result);
};

module.exports = HttpSyncProvider;

