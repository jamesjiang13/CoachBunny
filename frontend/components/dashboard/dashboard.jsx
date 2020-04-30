import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../nav_bar/nav_bar_container';
// per Isaac, have dashboard render a buncha other components?!

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { logout } = this.props;
    return (
      <div>
        <NavigationBar />
        <div>
          {/* < Link to="/" onClick={logout}> Log out </Link> */}
          <h4>this is the users dashboard</h4>
          <Link to="/user"> link to user show page </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
