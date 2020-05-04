import { connect } from 'react-redux';
import CoachingSessions from './coaching_sessions';
import {
  editCoachingSession,
  deleteCoachingSession,
} from '../../actions/coaching_session_actions';

const mapState = (state) => ({
  coachingSessions: Object.values(state.coachingSessions),
});

const mapDispatch = (dispatch) => ({
  deleteSession: () => dispatch(deleteCoachingSession()),
  editSession: (coachingSessionId) => dispatch(editCoachingSession(coachingSessionId)),
});

export default connect(
  mapState, mapDispatch,
)(CoachingSessions);
