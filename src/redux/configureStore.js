// import { configureStore } from '@reduxjs/toolkit';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';
import activeLinkReducer from './navlink/navlink';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
  activeLink: activeLinkReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
