import { FastifyReply, FastifyRequest } from 'fastify';
import { insertQuery, selectQuery, updateQuery, deleteQuery } from './handler';
import {
  selectQueryType,
  updateQueryType,
  deleteQueryType,
} from '../types/model';

export const selectOperation = async (
  req: FastifyRequest<{ Body: { query: selectQueryType } }>,
  res: FastifyReply,
) => {
  const response = await selectQuery(req.body.query);
  res.code(200);
  res.send(response);
};

export const insertoperation = async (
  req: FastifyRequest<{ Body: { query: any } }>,
  res: FastifyReply,
) => {
  const response = await insertQuery(req.body.query);
  res.code(200);
  res.send(response);
};

export const updateOperation = async (
  req: FastifyRequest<{ Body: { query: updateQueryType } }>,
  res: FastifyReply,
) => {
  const response = await updateQuery(req.body.query);
  res.code(200);
  res.send(response);
};
export const deleteOperation = async (
  req: FastifyRequest<{ Body: { query: deleteQueryType } }>,
  res: FastifyReply,
) => {
  const response = await deleteQuery(req.body.query);
  res.code(200);
  res.send(response);
};
