import Joi from 'joi';

const exampleDataSchema = Joi.object().keys({
  id: Joi.string().required().example('abcc8d0c723646a4'),
  name: Joi.string().required().example('Example data'),
});

export default exampleDataSchema;
