// Config
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const fastify = require('fastify')({ logger: true })


// Declare a route
fastify
  .get('/', async (request, reply) => {
    return { hello: 'world' };
  })
  .get('/health', async (request, reply) => {
    const pkg = require('./package.json');
    return { version: pkg.version, code: 'ok' };
  })

// Run the server!
const start = async () => {
  try {
    await fastify.listen(PORT, HOST);
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

// Start server
start()
