import {combineReducers} from 'redux';
import {
  isLoadingReducer,
  isErrorReducer,
  picturesReducer,
} from './picturesReducer';

export default combineReducers({
  loading: isLoadingReducer,
  error: isErrorReducer,
  pictures: picturesReducer,
});
