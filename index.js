var Swagger = require('swagger-client'),
    config = require('./config');

exports.client = function(callback) {
    console.log('Loading Unity Cloud Build schema from ' + config.schemaurl);
    new Swagger({
        url: config.schemaurl,
        usePromise: true
    })
    .then(function (client) {
        callback(client);
    })
    .catch(function(error) {
        console.log('UCB error: ' + error);
    });
};