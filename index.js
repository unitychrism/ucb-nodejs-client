var Swagger = require('swagger-client');

var apiToken = '';
var client = function(url, token, callback) {
    console.log('Loading Unity Cloud Build schema from ' + url);

    if (typeof(token) !== 'function') {
        apiToken = token;
    } else {
        callback = token;
    }

    new Swagger({
        url: url,
        usePromise: true
    })
    .then(function (client) {
        console.log('Unity Cloud Build client loaded OK.');

        if (apiToken) {
            client.clientAuthorizations.add('Basic', new Swagger.PasswordAuthorization(apiToken, ''));
        }
        callback(client);
    })
    .catch(function(error) {
        console.log('UCB error: ' + error);
    });
};
exports.client = client;