import React from 'react';
import { Link } from 'react-router-dom';
import classes from './account.module.css';

class Account extends React.Component {
  render() {
    const { logout } = this.props;
    const { email_address, first_name, last_name, zip_code } = this.props.currentUser;
    return (
      <div className={classes.mainAccount}>
        <h2>Account</h2>
        {/* <EditForm /> */}
        <div className={classes.userDetails}>
          <div className={classes.profilePhoto}>
            <img src="https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1408385393/default_avatar.jpg"></img>
          </div>
          <div className={classes.userAccount}>
            <p>{first_name} {last_name}</p>
            <p>Email: {email_address}</p>
            <p>Zip Code: {zip_code}</p>
            <Link to="/" onClick={logout}> Log out </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
