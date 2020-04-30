import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';
import classes from './entry_page.module.css';

const mapDispatch = (dispatch) => ({
  submitForm: (user) => dispatch(logIn(user)),
});

class EntryPage extends React.Component {
  constructor(props) {
    super(props);
    this.form = null;
  }

  handleClick(e) {
    e.preventDefault();
    const user = {
      email_address: 'demo@demo.com',
      password: 'demouserlogin',
    };
    const { submitForm } = this.props;
    submitForm(user);
  }

  render() {
    return (
      <div className={classes.mainLoginBackground}>
        <div className={classes.mainLoginPanel}>
          <button className={classes.button1} type="button">Myspace (coming soon)</button>
          <button className={classes.button2} type="button">Xanga (coming soon)</button>
          <Link className={classes.demoUserLogin} to="/" onSubmit={this.handleClick}> Demo User </Link>
          <div className={classes.entrypageButtons}>
            <Link to="/login" className={classes.buttonFirst}> Log in </Link>
            <Link to="/login" className={classes.buttonSecond}> Sign up </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null, mapDispatch,
)(EntryPage);
