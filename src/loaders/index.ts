import fastifyLoader from './fastify';
import gRPCLoader from './gRPC';

export default async () => {
  await fastifyLoader();
  await gRPCLoader();
};
