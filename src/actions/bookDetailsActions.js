import { createAction } from 'redux-actions';
import * as api from '../utils/api';
import paths from '../utils/paths';
import Types from './actionTypes';

function fetchBookDetailsRequest() {
  return createAction(Types.FETCH_BOOK_DETAIL_REQUEST)();
}

function fetchBookDetailsResponse(data) {
  return createAction(Types.FETCH_BOOK_DETAIL_RESPONSE)(data);
}

function fetchBookDetailsFailure(err) {
  return createAction(Types.FETCH_BOOK_DETAIL_FAILURE)(err);
}

export function fetchBookDetails(id) {
  return dispatch => {
    dispatch(fetchBookDetailsRequest());
    return api.callEndpoint(`${paths.BOOKS}/${id}`)
      .then((data) => dispatch(fetchBookDetailsResponse(data)))
      .catch((err) => dispatch(fetchBookDetailsFailure(err.messaage)))
  };
}
