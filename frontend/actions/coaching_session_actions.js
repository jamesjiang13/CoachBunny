import * as APIUtil from '../util/coaching_session_api_util';

export const RECEIVE_COACHING_SESSION = 'RECEIVE_COACHING_SESSION';
export const RECEIVE_COACHING_SESSIONS = 'RECEIVE_COACHING_SESSIONS';
export const DELETE_COACHING_SESSION = 'DELETE_COACHING_SESSION';

export const receiveCoachingSession = (coachingSession) => ({
  type: RECEIVE_COACHING_SESSION,
  coachingSession,
});

export const receiveCoachingSessions = (coachingSessions) => ({
  type: RECEIVE_COACHING_SESSIONS,
  coachingSessions,
});

export const removeCoachingSession = () => ({
  type: DELETE_COACHING_SESSION,
});

// export const fetchCoachingSession = (id) => (dispatch) => APIUtil.fetchCoachingSession(id)
//   .then((session) => dispatch(receiveCoachingSession(session)));

export const fetchCoachingSessions = () => (dispatch) => APIUtil.fetchCoachingSessions()
  .then((sessions) => dispatch(receiveCoachingSessions(sessions)));

export const editCoachingSession = () => (dispatch) => APIUtil.fetchCoachingSessions()
  .then((sessions) => dispatch(receiveCoachingSessions(sessions)));

export const deleteCoachingSession = (id) => (dispatch) => APIUtil.deleteCoachingSession(id)
  .then(() => dispatch(removeCoachingSession(id)));