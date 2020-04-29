import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import { logOut } from '../../actions/session_actions';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav>
        <Link to='/'> CoachBunny </Link>
        <Link to='/entrypage'> Log in </Link>
        <Link to='/' onClick={() => logout()}> Log out </Link>
      </nav>
    )
  }
}

export default NavigationBar;