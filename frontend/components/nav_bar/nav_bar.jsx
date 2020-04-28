import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav>
        this is the navbar

        <Link to='/entrypage'> Log in </Link>
      </nav>
    )
  }
}

export default NavigationBar;