import { connect } from 'react-redux';
import CoachingSessionItem from './coaching_session_item';
import { editCoachingSession, deleteCoachingSession } from '../../actions/coaching_session_actions';
import { openModal } from '../../actions/modal_actions';

const mapState = (state, ownProps) => {
  return ({
    session: ownProps.session,
  });
};

const mapDispatch = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  // deleteSession: (id) => dispatch(deleteCoachingSession(id)),
  // editSession: (coachingSessionId) => dispatch(editCoachingSession(coachingSessionId)),
});

export default connect(
  mapState, mapDispatch,
)(CoachingSessionItem);
