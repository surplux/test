import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import books from './books';
import bookDetails from './bookDetails';

const rootReducer = combineReducers({
  books,
  bookDetails,
  routing: routerReducer
});

export default rootReducer;