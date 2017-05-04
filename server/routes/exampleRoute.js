import Joi from 'joi';
import HttpStatus from 'http-status-codes';
import exampleDataSchema from '../schemas/exampleDataSchema';

const exampleData = [
  {
    id: '1',
    name: 'Item 1',
  },
  {
    id: '2',
    name: 'Item 2',
  },
  {
    id: '3',
    name: 'Item 3',
  },
  {
    id: '4',
    name: 'Item 4',
  },
  {
    id: '5',
    name: 'Item 5',
  },
];

export const getExampleData = {
  handler: (request, reply) => {
    reply(exampleData).code(HttpStatus.OK);
  },
  // documentation
  description: 'Get all example data',
  notes: 'Returns an array of example data objects',
  tags: ['api'],
  plugins: {
    'hapi-swagger': {
      responses: {
        200: {
          description: 'Success',
          schema: Joi.array().items(exampleDataSchema),
        },
      },
    },
  },
};

export const getExampleDataById = {
  handler: (request, reply) => {
    const id = request.params.id;
    const exampleItem = exampleData.find(item => item.id === id);

    if (exampleItem) {
      reply(exampleItem).code(HttpStatus.OK);
    } else {
      reply('Not found').code(HttpStatus.NOT_FOUND);
    }
  },
  // documentation
  description: 'Get a specific example data item by ID',
  notes: 'Returns the example data with the given ID',
  tags: ['api'],
  validate: {
    params: {
      id: Joi.string()
        .required()
        .description('The example data id'),
    },
  },
  plugins: {
    'hapi-swagger': {
      responses: {
        200: {
          description: 'Success',
          schema: Joi.array().items(exampleDataSchema),
        },
      },
    },
  },
};
