const Hapi = require('@hapi/hapi');
const server = Hapi.server({
  port: 5000,
  host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
  routes: {
    cors: {
      origin: ['*'],
    },
  },
});
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });
 
  const routes = require('./routes');
 
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();