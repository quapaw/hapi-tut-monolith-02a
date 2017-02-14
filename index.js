'use strict';

//Go Look at https://medium.com/@dstevensio/manifests-plugins-and-schemas-organizing-your-hapi-application-68cf316730ef#.3s5j9o2yu

const Hapi = require('hapi');
const SampleCustomers = require('./samples/customers');
const SampleProducts = require('./samples/products');

const server = new Hapi.Server();

server.connection({port: 3000, host: 'localhost'});

server.route({method: 'GET',
              path: '/',
              handler: function (request, reply) {
                 reply('Hello, world');
              }
});

server.route({method: 'GET',
              path: '/{name}',
              handler: function (request, reply) {
                 reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
              }
});

server.route({method: 'GET',
              path: '/customers',
              handler: function (request, reply) {
                  reply(SampleCustomers);
              }});

server.route({method: 'GET',
    path: '/products',
    handler: function (request, reply) {
        reply(SampleProducts);
    }});

server.start((err) => {
  if(err) {
     throw err;
  }

  console.log('Server running at: ' + server.info.uri);
});
