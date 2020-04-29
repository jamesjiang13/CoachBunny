import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import UserShow from './user';

const mapState = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatch = (dispatch) => ({
  logout: () => dispatch(logOut()),
});

export default connect(
  mapState, mapDispatch,
)(UserShow);
