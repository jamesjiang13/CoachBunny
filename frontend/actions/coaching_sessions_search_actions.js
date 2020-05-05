import coachingSessionSearch from '../util/coaching_sessions_search';

export const RECEIVE_COACH_SEARCH = 'RECEIVE_COACH_SEARCH';

const receiveCoachSearch = (sportId) => ({
  type: RECEIVE_COACH_SEARCH,
  sportId,
});

export const fetchCoachSearch = (sportId) => (dispatch) => (
  coachingSessionSearch.coachingSessionSearch(sportId)
    .then((coaches) => dispatch(receiveCoachSearch(coaches)))
);
