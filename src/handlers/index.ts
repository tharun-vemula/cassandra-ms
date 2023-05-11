import { FastifyInstance } from 'fastify';
import {
  selectOperation,
  insertoperation,
  updateOperation,
  deleteOperation,
} from './api';

export default (fastify: FastifyInstance, options: any, done: any) => {
  fastify.route({
    method: 'POST',
    url: '/select',
    handler: selectOperation,
  });

  fastify.route({
    method: 'POST',
    url: '/insert',
    handler: insertoperation,
  });

  fastify.route({
    method: 'PUT',
    url: '/update',
    handler: updateOperation,
  });

  fastify.route({
    method: 'DELETE',
    url: '/delete',
    handler: deleteOperation,
  });

  done();
};
