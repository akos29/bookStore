// import { configureStore } from '@reduxjs/toolkit';
import { createStore, combineReducers } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';
// import booksSlice from './modules/booksSlice';

// export default configureStore({
//   reducer: {
//     booksSlice,
//   },
// });

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = createStore(rootReducer);

export default store;
