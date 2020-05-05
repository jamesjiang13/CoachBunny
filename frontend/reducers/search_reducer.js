import { combineReducers } from 'redux';
import searchResultsReducer from './search_results_reducer';

const searchReducer = combineReducers({
  searchResults: searchResultsReducer,
});

export default searchReducer;
