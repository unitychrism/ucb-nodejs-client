var ucb = require('./index'),
    config = require('./config');

ucb.client(config.schemaurl, function(client) {
    for (var property in client.apis) {
        console.log('property: ' + property);
    }
});