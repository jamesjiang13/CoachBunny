import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logOut } from '../../actions/session_actions';
import { fetchCoachingSessions } from '../../actions/coaching_session_actions';

const mapState = (state) => {
  return {
    currentUser: state.entities.user[state.session.currentUserId],
  };
};

const mapDispatch = (dispatch) => ({
  logout: () => dispatch(logOut()),
  fetchCoachingSessions: () => dispatch(fetchCoachingSessions()),
});

export default connect(
  mapState, mapDispatch,
)(Dashboard);
