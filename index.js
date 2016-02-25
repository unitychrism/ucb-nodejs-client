var Swagger = require('swagger-client');

exports.client = function(url, callback) {
    console.log('Loading Unity Cloud Build schema from ' + url);
    new Swagger({
        url: url,
        usePromise: true
    })
    .then(function (client) {
        console.log('Unity Cloud Build client loaded OK.');
        callback(client);
    })
    .catch(function(error) {
        console.log('UCB error: ' + error);
    });
};