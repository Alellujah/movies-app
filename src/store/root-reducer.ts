import { combineReducers } from 'redux';

import { searchReducer } from '../containers/SearchPage/redux/reducers';

const rootReducer = combineReducers({
  movies: searchReducer,
});

export default rootReducer;
