import React from 'react';
import NavigationBarContainer from '../nav_bar/nav_bar_container';
import Footer from '../footer/footer';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import classes from './splash.module.css';

const Splash = () => (
  <div className={classes.splashContainer}>
    <NavigationBarContainer />
    <div className={classes.mainSplashBackground}>
      <div className={classes.mainSplashText}>
        <h1> Find the best coaches </h1>
        <h1> to unlock your potential </h1>
        <h4> Perfect your game with help from </h4>
        <h4> thousands of trusted CoachRabbits </h4>
        <form className={classes.searchForm}>
          <input type="text" placeholder="I want to work on..." />
          <button type="button"> Train today </button>
        </form>
      </div>
    </div>
    <section className={classes.mainReviewSection}>
      <div className={classes.reviewStars}>
        <img
          className={classes.mainReviewsStars}
          src="http://clipart-library.com/new_gallery/104-1043568_5-star-rating-png.png" />
        <p>1.1+ Million Reviews</p>
      </div>
      <div className={classes.mainPartner}>
        <p>Partnered with MLS</p>
      </div>
      <img 
        className={classes.mainAppStore} 
        src="https://pluspng.com/img-png/download-on-app-store-png-open-2000.png" alt="appstore" />
    </section>
    <Footer />
  </div>
);

export default Splash;
