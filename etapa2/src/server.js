import Fastify from 'fastify';
import { contatoRoutes } from './routes/contato.routes.js';

const fastify = Fastify({
  logger: true
});

// registra as rotas
fastify.register(contatoRoutes);

// inicia o servidor
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Servidor rodando em http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();