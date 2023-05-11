import { client } from '../plugins/cassandra';
import {
  insertQueryConverter,
  selectQueryConverter,
  updateQueryConverter,
  deleteQueryConverter,
} from '../helpers/converter';
import {
  deleteQueryType,
  selectQueryType,
  updateQueryType,
} from '../types/model';

export const selectQuery = async (query: selectQueryType) => {
  const queryString = selectQueryConverter(query);
  console.log(queryString);

  const res = await client.execute(queryString);
  return res;
};

export const insertQuery = async (queryString: any) => {
  const query = insertQueryConverter(queryString);
  const res = await client.execute(query);
  return res;
};

export const updateQuery = async (query: updateQueryType) => {
  const queryString = updateQueryConverter(query);
  const res = await client.execute(queryString);
  return res;
};

export const deleteQuery = async (query: deleteQueryType) => {
  const queryString = deleteQueryConverter(query);
  const res = await client.execute(queryString);
  return res;
};
