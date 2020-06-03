import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCoachingSession } from '../../actions/coaching_session_actions';
import SearchSelectItem from './search_select_item';

const mapState = (state, ownProps) => {
  return ({
    coach: ownProps.history.location.state,
    userId: state.session.currentUserId,
    description: state.search.searchParams.description,
  });
};

const mapDispatch = (dispatch) => ({
  submitForm: (coachingSession) => dispatch(createCoachingSession(coachingSession)),

});

export default withRouter(connect(
  mapState, mapDispatch,
)(SearchSelectItem));
