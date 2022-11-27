import { createAction } from 'redux-actions';
import Types from './actionTypes';
import * as api from '../utils/api';
import paths from '../utils/paths';

function fetchBooksRequest() {
  return createAction(Types.FETCH_BOOKS_REQUEST)();
}

function fetchBooksResponse(data) {
  return createAction(Types.FETCH_BOOKS_RESPONSE)(data);
}

function fetchBooksFailure(err) {
  return createAction(Types.FETCH_BOOKS_FAILURE)(err.message);
}

export function fetchBooks() {
  return dispatch => {
    dispatch(fetchBooksRequest());
    return api.callEndpoint(`${paths.BOOKS}`)
      .then((data) => dispatch(fetchBooksResponse(data)))
      .catch((err) => dispatch(fetchBooksFailure(err)));
  };
}
