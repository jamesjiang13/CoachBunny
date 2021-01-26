import React from 'react';
import { Link } from 'react-router-dom';
import classes from './account.module.css';

class Account extends React.PureComponent {
  render() {
    const { logout } = this.props;
    const {
      emailAddress, firstName, lastName, zipCode,
    } = this.props.currentUser;
    return (
      <div className={classes.accountContainer}>
        <div className={classes.mainAccount}>
          <h2>Account</h2>
          <div className={classes.userDetails}>
            <div className={classes.profilePhoto}>
              <img src={window.profilePic} alt="profile"></img>
            </div>
            <div className={classes.userAccount}>
              <ul>
                <li>{firstName} {lastName}</li>
                <li>Email: {emailAddress}</li>
                <li>Zip Code: {zipCode}</li>
              </ul>
              <Link className={classes.logoutButton} to="/#" onClick={logout}> Log out </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
