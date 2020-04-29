import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';
import classes from './entry_page.module.css';

const mapDispatch = (dispatch) => ({
  submitForm: (user) => dispatch(logIn(user)),
});

class EntryPage extends React.Component {
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
      <div className={classes.entrypage}>
        <div className={classes.entrypagePanel}>
          <div className={classes.entrypageButtons}>
            <Link className={classes.demoUserLogin} to="/" onSubmit={this.handleClick}> Demo User </Link>
            <button className={classes.buttonFirst} type="button"><Link to="/login"> Log in </Link></button>
            <button className={classes.buttonSecond} type="button"><Link to="/signup"> Sign up </Link></button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null, mapDispatch,
)(EntryPage);
