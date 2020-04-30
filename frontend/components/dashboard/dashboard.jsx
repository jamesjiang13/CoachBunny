import React from 'react';
import { Link } from 'react-router-dom';

// per Isaac, have dashboard render a buncha other components?!

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { logout } = this.props;
    return (
      <div>
        <Link to="/" onClick={logout}> Log out </Link>
        <h4>this is the users dashboard</h4>
        <Link to="/user"> link to user show page </Link>
      </div>
    );
  }
}

export default Dashboard;
