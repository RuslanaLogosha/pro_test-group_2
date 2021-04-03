// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';

// import exampleActions from './exampleActions';

// // ! variable for initial state example #1
// const initialState = [];

// const example = createReducer(initialState, {
//   [exampleActions.action1]: (state, { _payload }) => {
//     return {};
//   },
//   [exampleActions.action2]: (state, { payload }) => {
//     return { payload };
//   },
// });

// /*
// если в редюсерах будут слишком объемные функции, которые будет неудобно читать - можно вынести
// функции в отдельный файл "functions" в этой же папке и импортировать их с вызовом внутри редюсеров
// */
// const someFunc = (state, payload) => {
//   return;
// };
// const someFunc2 = (state, payload) => {
//   return;
// };

// const example2 = createReducer(
//   // ! init state example #2
//   {},
//   {
//     [exampleActions.action3]: (state, { payload }) => {
//       return someFunc(state, payload);
//     },
//     [exampleActions.action4]: (state, { payload }) => {
//       return someFunc2(state, payload);
//     },
//   },
// );

// export default combineReducers({
//   example,
//   example2,
// });
