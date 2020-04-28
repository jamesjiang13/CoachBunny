import { connect } from 'react-redux';
import React from 'react';
// import { Link } from 'react-router-dom';
import { logIn } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapState = state => ({
  errors: state.errors.sessionErrors
})

const mapDispatch = dispatch => ({
  submitForm: user => dispatch(logIn(user)),
  error: "Incorrect email or password." 
})

export default connect(
  mapState, mapDispatch
) (LoginForm)