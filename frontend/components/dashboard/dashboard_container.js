import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logOut } from '../../actions/session_actions';

const mapState = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatch = (dispatch) => ({
  logout: () => dispatch(logOut()),
});

export default connect(
  mapState, mapDispatch,
)(Dashboard);
