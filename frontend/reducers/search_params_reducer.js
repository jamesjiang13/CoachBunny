import { RECEIVE_COACH_SEARCH } from '../actions/coaching_sessions_search_actions';

const searchParamsReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger;
  switch (action.type) {
    // case RECEIVE_COACH_SEARCH:
    //   return null;
    default:
      return state;
  }
};

export default searchParamsReducer;
