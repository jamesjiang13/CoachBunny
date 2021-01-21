import { connect } from 'react-redux';
import { signUp, clearSessionErrors } from '../../../actions/session_actions';
import SignupForm from './signup_form';

const mapState = (state) => ({
  errors: state.errors.session,
});

const mapDispatch = (dispatch) => ({
  submitForm: (user) => dispatch(signUp(user)),
  clearErrors: () => dispatch(clearSessionErrors()),
});

export default connect(
  mapState, mapDispatch,
)(SignupForm);
