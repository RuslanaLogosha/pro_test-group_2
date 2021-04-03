const getSomeExample = state => state.some.some;

const getSomeExample2 = (state, some) => {
  return getSomeExample(state).find(item => item.some === some);
};
// eslint-disable-next-line
export default {
  getSomeExample,
  getSomeExample2,
};
