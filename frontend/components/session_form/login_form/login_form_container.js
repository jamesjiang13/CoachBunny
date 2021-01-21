import { connect } from 'react-redux';
import { logIn, clearSessionErrors } from '../../../actions/session_actions';
import LoginForm from './login_form';

const mapState = (state) => ({
  errors: state.errors.session,
});

const mapDispatch = (dispatch) => ({
  submitForm: (user) => dispatch(logIn(user)),
  clearErrors: () => dispatch(clearSessionErrors()),
});

export default connect(
  mapState, mapDispatch,
)(LoginForm);
