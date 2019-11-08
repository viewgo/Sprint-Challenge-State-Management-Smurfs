import axios from "axios";

export const FETCH_SMURFS_LOADING = "FETCH_SMURFS_LOADING";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILED = "FETCH_SMURFS_FAILED";

export const POST_SMURFS_START = "POST_SMURFS_START";
export const POST_SMURFS_SUCCESS = "POST_SMURFS_SUCCESS";
export const POST_SMURFS_FAILED = "POST_SMURFS_FAILED";

export const smurfLoading = () => ({ type: FETCH_SMURFS_LOADING });
export const smurfLoadSuccess = data => ({ type: FETCH_SMURFS_SUCCESS, payload: data });
export const smurfLoadFailure = error => ({ type: FETCH_SMURFS_FAILED, payload: error });

export const smurfPostStart = () => ({ type: POST_SMURFS_START });
export const smurfPostSuccess = data => ({ type: POST_SMURFS_SUCCESS, payload: data });
export const smurfPostFailure = error => ({ type: POST_SMURFS_FAILED, payload: error });

const default_api = "http://localhost:3333/smurfs";

export function fetchSmurfs(api = default_api) {
  return function(dispatch) {
    dispatch(smurfLoading());

    return axios
      .get(api)
      .then(response => {
        console.log(response);
        dispatch(smurfLoadSuccess(response.data));
      })
      .catch(error => {
        dispatch(smurfLoadFailure(error));
      });
  };
}

export function postSmurfs(values) {
  return function(dispatch) {
    dispatch(smurfPostStart());

    return axios
      .post("http://localhost:3333/smurfs", values)
      .then(response => {
        console.log("Response data after post", response.data);
        dispatch(smurfPostSuccess());
      })
      .then(() => {
        fetchSmurfs();
      })
      .catch(error => {
        dispatch(smurfPostFailure(error));
      });
  };
}
