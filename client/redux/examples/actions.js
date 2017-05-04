import {
  GET_EXAMPLES,
  GET_EXAMPLE,
} from './types';

export const getExamples = () => ({
  type: GET_EXAMPLES,
  promise: client => client.get('/api/examples'),
});

export const getExample = id => ({
  type: GET_EXAMPLE,
  promise: client => client.get(`/api/examples/${id}`),
});
