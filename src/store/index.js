import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const defaultState = {
  books: {},
  bookDetails: {},
};

const enhancer = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, defaultState, enhancer);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
