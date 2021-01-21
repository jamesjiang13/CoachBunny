import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';
import classes from './entry_page.module.css';

class EntryPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const user = {
      emailAddress: 'demo@demo.com',
      password: 'demouser',
    };
    const { submitForm } = this.props;
    submitForm(user);
    window.location.href = '#/main';
  }

  render() {
    return (
      <div className={classes.mainLoginBackground}>
        <div className={classes.mainLoginPanel}>
          <div className={classes.textLogo}>
            <img className={classes.imgResponsive} src={window.textLogo} alt="textLogo" />
          </div>
          <button onClick={this.handleClick} className={classes.demoUserLogin} type="button">Demo User</button>
          <div className={classes.entrypageLinks}>
            <Link to="/login" className={classes.buttonFirst}> Log in </Link>
            <Link to="/signup" className={classes.buttonSecond}> Sign up </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return ({
    submitForm: (user) => dispatch(logIn(user)),
  });
};

export default connect(
  null, mapDispatch,
)(EntryPage);
