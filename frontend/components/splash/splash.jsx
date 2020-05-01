import React from 'react';
import NavigationBarContainer from '../nav_bar/nav_bar_container';
import Footer from '../footer/footer';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import classes from './splash.module.css';

const Splash = () => (
  <div>
    <NavigationBarContainer />
    <div className={classes.mainSplashBackground}>
      <div className={classes.mainSplashText}>
        <h1> Coaches at your fingertips,</h1>
        <h1> when you need them </h1>
        <form className={classes.searchForm}>
          <input type="text" placeholder="I want to work on..." />
          <button type="button"> Train today </button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
);

export default Splash;
