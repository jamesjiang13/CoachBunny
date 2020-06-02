import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCoachingSession } from '../../actions/coaching_session_actions';
import SearchSelectItem from './search_select_item';

const mapState = (state, ownProps) => ({
  coach: ownProps.history.location.state,
  userId: state.session.currentUserId,
  trainingDescription: state.search.searchParams.description,
});

const mapDispatch = (dispatch) => ({
  submitForm: (coachingSession) => dispatch(createCoachingSession(coachingSession)),
  // closeModal: () =>dispatch(closeModal()),
  // otherForm: (
  //   <button onClick={() => dispatch(openModal('select'))}>
  //     Select me
  //   </button>
  // )
});

export default withRouter(connect(
  mapState, mapDispatch,
)(SearchSelectItem));
