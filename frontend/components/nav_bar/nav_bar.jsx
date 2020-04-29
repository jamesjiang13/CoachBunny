import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import { logOut } from '../../actions/session_actions';
import { login } from '../../util/session_api_util';

class NavigationBar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  // }


  loggedInNav() {
    return (
      <ul>
        <li>Book a Session</li>
        <li>My Sessions</li>
        <li>Account</li>
        <li><Link to="/" onClick={() => this.logout()}> Log out </Link></li>
      </ul>
    );
  }

  loggedOutNav() {
    return (
      <ul>
        <li>Sports</li>
        <li><Link to="/entrypage"> Log in </Link></li>
      </ul>
    );
  }

  render() {
    return (
      <nav>
        nav bar
        <Link to="/"> CoachBunny </Link>
        {/* { props.currentUser ? loggedInNav() : loggedOutNav() } */}
      </nav>
    );
  }
}

export default NavigationBar;
