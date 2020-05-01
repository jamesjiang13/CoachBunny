import React from 'react';
import { Link, Switch } from 'react-router-dom';
import UserContainer from '../user_account/user_container';
import classes from './nav_bar.module.css';
import { ProtectedRoute } from '../../util/route_util';

const LoggedInNav = ({ logout }) => (
  <ul className={classes.navBarUl}>
    <li key="bookASession"> Book a Session</li>
    <li key="mySession"> My Sessions</li>
    <li key="account">
        <Link to="/user"> Account </Link>
        <ProtectedRoute path="/user" component={UserContainer} />
    </li>
    <li key="logoutButton">
      <button type="button" onClick={logout}> Log out </button>
    </li>
  </ul>
);

const LoggedOutNav = () => (
  <ul className={classes.navBarUl}>
    <li key="sport">Sports</li>
    <li key="login">
      <Link to="/entrypage"> Log in </Link>
    </li>
    <button type="button"> Become a Coach </button>
  </ul>
);

const NavigationBar = ({ currentUser, logout }) => (
  <header className={classes.mainHeader}>
    <nav className={classes.navbar}>
      <Link to="/" className={classes.leftNav}>
        <img className={classes.imgResponsive} src={window.fullLogo2} alt="logo" />
      </Link>
      <div className={classes.rightNav}>
        { currentUser ? <LoggedInNav logout={logout} /> : <LoggedOutNav /> }
      </div>
    </nav>
  </header>
);

export default NavigationBar;
