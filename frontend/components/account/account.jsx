import React from 'react';
import { Link } from 'react-router-dom';
import classes from './account.module.css';

class Account extends React.Component {
  render() {
    const { logout } = this.props;
    const { emailAddress, firstName, lastName, zipCode } = this.props.currentUser;
    return (
      <div className={classes.mainAccount}>
        <h2>Account</h2>
        {/* <EditForm /> */}
        <div className={classes.userDetails}>
          <div className={classes.profilePhoto}>
            <img src="https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1408385393/default_avatar.jpg" alt="profile"></img>
          </div>
          <div className={classes.userAccount}>
            <p>
              {firstName} {lastName}
            </p>
            <p>
              Email: {emailAddress}
            </p>
            <p>
              Zip Code: {zipCode}
            </p>
            <Link to="/" onClick={logout}> Log out </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
