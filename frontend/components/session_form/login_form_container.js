import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapState = state => ({
  errors: "Incorrect email or password."
})

const mapDispatch = dispatch => ({
  submitForm: user => dispatch(logIn(user)) 
})

export default connect(
  mapState, mapDispatch
) (LoginForm)