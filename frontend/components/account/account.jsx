import React from 'react';
import { Link } from 'react-router-dom';
import classes from './account.module.css';

class Account extends React.PureComponent {
  render() {
    const { logout } = this.props;
    const {
      email, firstName, lastName, zipCode,
    } = this.props.currentUser;
    return (
      <div className={classes.accountContainer}>
        <div className={classes.mainAccount}>
          <h2>Account</h2>
          <div className={classes.userDetails}>
            <div className={classes.profilePhoto}>
              <img src="https://i.pinimg.com/236x/c4/34/d8/c434d8c366517ca20425bdc9ad8a32de.jpg" alt="profile"></img>
            </div>
            <div className={classes.userAccount}>
              <ul>
                <li>{firstName} {lastName}</li>
                <li>Email: {email}</li>
                <li>Zip Code: {zipCode}</li>
              </ul>
              <Link className={classes.logoutButton} to="/" onClick={logout}> Log out </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
