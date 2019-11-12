import Constants from '../constants';

export function picturesReducer(state = [], action) {
  switch (action.type) {
    case Constants.GET_PICTURES:
      return action.pictures;
    default:
      return state;
  }
}

export function isErrorReducer(state = {}, action) {
  switch (action.type) {
    case Constants.ERROR_GET_PICTURES:
      return {
        isError: action.isError,
        error: action.error,
      };
    default:
      return state;
  }
}

export function isLoadingReducer(state = false, action) {
  switch (action.type) {
    case Constants.PICTURES_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}
