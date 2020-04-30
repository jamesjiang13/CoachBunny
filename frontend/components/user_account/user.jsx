import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../nav_bar/nav_bar_container';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { logout } = this.props;
    return (
      <div>
        <NavigationBar />
        <h3>user show page</h3>
        <Link to="/" onClick={logout}> Log out </Link>
      </div>
    );
  }
}

export default UserShow;
