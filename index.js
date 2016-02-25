var Swagger = require('swagger-client');

var apiToken = '';
var client = function(url, token, callback) {
    console.log('Loading Unity Cloud Build schema from ' + url);
    apiToken = token;
    new Swagger({
        url: url,
        usePromise: true
    })
    .then(function (client) {
        console.log('Unity Cloud Build client loaded OK.');
        client.clientAuthorizations.add('Basic', new Swagger.PasswordAuthorization(apiToken, ''));
        //client.authorizations.add('Basic', new auth.PasswordAuthorization(apiToken, ''));
        callback(client);
    })
    .catch(function(error) {
        console.log('UCB error: ' + error);
    });
};
exports.client = client;