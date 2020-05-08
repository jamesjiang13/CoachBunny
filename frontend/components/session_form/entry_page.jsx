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
  }

  render() {
    return (
      <div className={classes.mainLoginBackground}>
        <div className={classes.mainLoginPanel}>
          <div className={classes.textLogo}>
            <img className={classes.imgResponsive} src={window.textLogo} alt="textLogo" />
          </div>

          <button className={classes.myspace} type="button"> Facebook (coming soon)</button>
          <button className={classes.xanga} type="button"> Google (coming soon)</button>
          <Link
            className={classes.demoUserLogin}
            onClick={this.handleClick}
            to="/main"
          >
            Demo user
          </Link>
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

// selectively render loging page instead of posts dependings on login/logout
// route utils - auth y protected
// same process except instead of redirecting when theyre not logged in, return empty <div></div>
// export that
