import React from 'react';
import { Link } from 'react-router-dom';
import classes from './nav_bar.module.css';

const NavigationBar = ({ currentUser, logout }) => {
  const loggedInNav = () => (
    <ul>
      <li key="bookASession"> Book a Session</li>
      <li key="mySession"> My Sessions</li>
      <li key="account"> Account</li>
      <li key="logoutButton">
        <button type="button" onClick={logout}> Log out </button>
      </li>
    </ul>
  );

  const loggedOutNav = () => (
    <ul>
      <li key="sport">Sports</li>
      <li>
        <Link to="/entrypage"> Log in </Link>
      </li>
      <button type="button"> Become a Coach </button>
    </ul>
  );

  return (
    <nav className={classes.navbar}>
      <Link to="/" className={classes.logoLink}> CoachBunny </Link>
      { currentUser ? loggedInNav() : loggedOutNav() }
    </nav>
  );
};

export default NavigationBar;
