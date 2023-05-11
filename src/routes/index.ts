import { FastifyInstance } from 'fastify';
import handlerRoutes from '../handlers';
import config from '../config';

export default (fastify: FastifyInstance) => {
  fastify.register(handlerRoutes, { prefix: `${config.api.prefix}/query` });
};
