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
        <h1> Find the best coaches to unlock your potential </h1>
        <h4> Perfect your game with an assist from thousands of trusted CoachBunnies </h4>
        <form className={classes.searchForm}>
          <input type="text" placeholder="I want to work on..." />
          <button type="button"> Train today </button>
        </form>
      </div>
    </div>
    <section className={classes.mainReviewSection}>
      <div className={classes.reviewStars}>
        <img
          className={classes.reviewPhoto}
          src="http://clipart-library.com/new_gallery/104-1043568_5-star-rating-png.png"
          alt="stars"
        />
        <p>1.1+ Million Reviews</p>
      </div>
      <div className={classes.mainPartner}>
        <img
          className={classes.reviewPhoto}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/MLS_crest_logo_RGB_gradient.svg/1200px-MLS_crest_logo_RGB_gradient.svg.png"
          alt="partner"
        />
        <p>Partnered with MLS</p>
      </div>
      <img
        className={classes.reviewPhoto}
        src="https://pluspng.com/img-png/download-on-app-store-png-open-2000.png"
        alt="appstore"
      />
    </section>
    <Footer />
  </div>
);

export default Splash;
