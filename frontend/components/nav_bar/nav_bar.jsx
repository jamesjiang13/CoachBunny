import React from 'react';
import { Link } from 'react-router-dom';
import classes from './nav_bar.module.css';
// import logo from '../../../app/assets/images/full_logo.png';

const NavigationBar = ({ currentUser, logout }) => {
  const loggedInNav = () => (
    <ul className={classes.navBarUl}>
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
      
    </ul>
    <ul className={classes.navBarUl}>
      <li key="sport">Sports</li>
      <li key="login">
        <Link to="/entrypage"> Log in </Link>
      </li>
      <button type="button"> Become a Coach </button>
    </ul>
  );

  return (
    <header className={classes.mainHeader}>
      <nav className={classes.navbar}>
        <Link to="/" className={classes.leftNav}>
          <img className={classes.imgResponsive} src="assets/full_logo2.png" alt="logo" />
        </Link>
        <div className={classes.rightNav}>
          { currentUser ? loggedInNav() : loggedOutNav() }
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
