import React from 'react';
import { Link } from 'react-router-dom';
import { FaAddressCard, FaRunning, FaTasks, FaUsers } from 'react-icons/fa';
import NavigationBarContainer from '../nav_bar/nav_bar_container';
import Footer from '../footer/footer';
import ViewCoaches from './view_coaches';
import classes from './splash.module.css';

const Splash = () => (
  <div className={classes.splashContainer}>
    <NavigationBarContainer />
    <div className={classes.mainSplashBackground}>
      <div className={classes.mainSplashText}>
        <h1> Find the best coaches to unlock your potential </h1>
        <h4> Perfect your game with an assist from thousands of trusted CoachBunnies </h4>
        <form className={classes.searchForm}>
          <Link className={classes.deadButton} to="/entrypage">
            Train today
          </Link>
        </form>
      </div>
    </div>
    <section className={classes.mainReviewSection}>
      <div className={classes.reviewStars}>
        <img
          className={classes.reviewPhoto}
          src={window.reviewStars}
          alt="stars"
        />
        <p>1.1+ Million Reviews</p>
      </div>
      <div className={classes.mainPartner}>
        <img
          className={classes.reviewPhoto}
          src={window.mlsLogo}
          alt="partner"
        />
        <p>Partnered with MLS</p>
      </div>
      <img
        className={classes.reviewPhoto}
        src={window.appStore}
        alt="appstore"
      />
    </section>
    <ViewCoaches />
    <section className={classes.howSectionContainer}>
      <div className={classes.howSectionTitle}>How It Works</div>
      <ul className={classes.howSectionUL}>
        <li>
          <FaTasks className={classes.howFontAwesome} />
          <h3>Describe your </h3>
          <p>Tell us what you would like to work on</p>
        </li>
        <li>
          <FaUsers className={classes.howFontAwesome} />
          <h3>Choose your Coach</h3>
          <p>Browse trusted coaches by skills, price, and more. Select the right coach for you and schedule your training time.</p>
        </li>
        <li>
          <FaRunning className={classes.howFontAwesome} />
          <h3>Train Hard</h3>
          <p>Meet with your coach and get moving! </p>
        </li>
      </ul>
    </section>
    <Footer />
  </div>
);

export default Splash;
