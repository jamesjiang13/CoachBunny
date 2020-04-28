import { connect } from 'react-redux';
import NavigationBar from './nav_bar';

const mapState = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatch = dispatch => ({
  logOut: () => dispatch(logOut())
})

export default connect(
  mapState, mapDispatch
) ( NavigationBar )