var request = require('request');
var Vow = require('vow');

//=========================================================
// Constructor Setup
//=========================================================

var restClient = function Constructor(settings) {
};

//Set up Promise for Post request
restClient.prototype.post = function (url, header, body) {
    var data = {
        url: url,
        json: true,
        headers: header,
        body: body,
        rejectUnauthorized: false
    };

    return new Vow.Promise(function (resolve, reject) {

        request.post(data, function (err, request, body) {
            if (err) {
                reject(err);

                return false;
            }

            try {

                if (body) {
                    resolve(body);
                } else {
                    reject(body);
                }

            } catch (e) {
                reject(e);
            }
        });
    });
};

//Export restClient
module.exports = restClient;