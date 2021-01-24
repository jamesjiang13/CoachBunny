import { connect } from 'react-redux';
import { editCoachingSession } from '../../actions/coaching_session_actions';
import { closeModal } from '../../actions/modal_actions';
import EditCoachingSession2 from './edit_session_form2';

const mapState = (state, ownProps) => {
  return ({
    session: ownProps.session,
    userId: state.session.currentUserId,
  });
};

const mapDispatch = (dispatch) => ({
  updateSession: (coachingSession) => dispatch(editCoachingSession(coachingSession)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(
  mapState, mapDispatch,
)(EditCoachingSession2);
