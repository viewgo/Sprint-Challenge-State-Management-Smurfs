import {
  FETCH_SMURFS_LOADING,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILED,
  POST_SMURFS_START,
  POST_SMURFS_SUCCESS,
  POST_SMURFS_FAILED
} from "../actions";

const initialState = {
  smurfs: [],
  error: null,
  isFetching: false,
  gotPostTrigger: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SMURFS_LOADING:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: null
      };
    case FETCH_SMURFS_FAILED:
      return {
        ...state,
        smurfs: [],
        isFetching: false,
        error: action.payload
      };

    case POST_SMURFS_START:
      return {
        ...state
      };
    case POST_SMURFS_SUCCESS:      
      return {
        ...state,
        gotPostTrigger: !state.gotPostTrigger
      };
    case POST_SMURFS_FAILED:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}

export default reducer;
