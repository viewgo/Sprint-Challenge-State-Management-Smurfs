import {
  FETCH_SMURFS_LOADING,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILED,
  POST_SMURFS_START,
  POST_SMURFS_SUCCESS,
  POST_SMURFS_FAILED,
  DELETE_SMURFS_START,
  DELETE_SMURFS_SUCCESS,
  DELETE_SMURFS_FAILED,
  EDIT_SMURFS_START,
  EDIT_SMURFS_SUCCESS,
  EDIT_SMURFS_FAILED
} from "../actions";

const initialState = {
  smurfs: [],
  error: null,
  isFetching: false,
  gotPostTrigger: false,
  changeTrigger: false
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
        changeTrigger: !state.changeTrigger
      };
    case POST_SMURFS_FAILED:
      return {
        ...state,
        error: action.payload
      };

    case DELETE_SMURFS_START:
      return {
        ...state
      };
    case DELETE_SMURFS_SUCCESS:
      return {
        ...state,
        changeTrigger: !state.changeTrigger
      };
    case DELETE_SMURFS_FAILED:
      return {
        ...state,
        error: action.payload
      };

      case EDIT_SMURFS_START:
      return {
        ...state
      };
    case EDIT_SMURFS_SUCCESS:
      return {
        ...state,
        changeTrigger: !state.changeTrigger
      };
    case EDIT_SMURFS_FAILED:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}

export default reducer;
