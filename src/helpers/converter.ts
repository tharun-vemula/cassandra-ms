import {
  deleteQueryType,
  selectQueryType,
  updateQueryType,
} from '../types/model';
import { v4 as uuidv4 } from 'uuid';

export const selectQueryConverter = (query: selectQueryType) => {
  return 'SELECT * FROM *'
};

export const insertQueryConverter = (query: any) => {
  return 'SELECT * FROM *'
};

export const updateQueryConverter = (query: updateQueryType) => {
  return 'SELECT * FROM *'
};

export const deleteQueryConverter = (query: deleteQueryType) => {
  return 'SELECT * FROM *'
};
