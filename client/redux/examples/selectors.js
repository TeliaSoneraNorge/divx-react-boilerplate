export const selectAllExamples = state => state.examples.all.toArray();
export const selectExampleById = (state, id) => state.examples.all.get(id);
export const selectExamplesStatus = state => state.examples.status;
