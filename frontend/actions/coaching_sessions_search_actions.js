import * as SearchAPIUtil from '../util/coaching_sessions_search';

export const RECEIVE_COACH_SEARCH = 'RECEIVE_COACH_SEARCH';

const receiveCoachSearch = (coaches) => ({
  type: RECEIVE_COACH_SEARCH,
  coaches,
});

export const fetchCoachSearch = ({ sportId, duration }) => (dispatch) => (
  SearchAPIUtil.coachingSessionSearch({ sportId, duration })
    .then((coaches) => dispatch(receiveCoachSearch(coaches)))
);
