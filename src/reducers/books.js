import Types from '../actions/actionTypes';

const initialState = {
  data: [],
  isFetching: false,
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_BOOKS_REQUEST:
      return Object.assign({},
        state,
        { isFetching: true }
      );
    case Types.FETCH_BOOKS_RESPONSE:
      return Object.assign({},
        state,
        {
          data: action.payload.books,
          isFetching: false,
        }
      );
    case Types.FETCH_BOOKS_FAILURE:
      return Object.assign({},
        state,
        { isFetching: false }
      );
    default:
      return state;
  }
}
