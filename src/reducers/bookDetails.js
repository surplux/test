import Types from '../actions/actionTypes';

const initialState = {
  data: {},
  isFetching: false,
};

export default function bookDetails(state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_BOOK_DETAIL_REQUEST:
      return Object.assign({},
        state,
        { isFetching: true });
    case Types.FETCH_BOOK_DETAIL_RESPONSE:
      return Object.assign({}, state,
        {
          data: action.payload.book,
          isFetching: false,
        });
    case Types.FETCH_BOOK_DETAIL_FAILURE:
      return Object.assign({}, state,
        { isFetching: false });
    default:
      return state;
  };
}
