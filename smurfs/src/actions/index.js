export const FETCH_SMURFS_LOADING = "FETCH_SMURFS_LOADING";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILED = "FETCH_SMURFS_FAILED";


export const smurfLoading = () => ({ type: FETCH_SMURFS_LOADING });
export const smurfLoadSuccess = data => ({ type: FETCH_SMURFS_SUCCESS, payload: data });
export const smurfLoadFailure = error => ({ type: FETCH_SMURFS_FAILED, payload: error });

const default_api = "http://localhost:3333/smurfs";

export function fetchSmurfs(api = default_api) { 

  return function(dispatch) {
    dispatch(smurfLoading());

    return (
      fetch(api)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          dispatch(smurfLoadSuccess(json));
        })
        .catch(error => dispatch(smurfLoadFailure(error)))
    );
  };
}


