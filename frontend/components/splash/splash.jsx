import React from 'react';
import NavigationBar from '../nav_bar/nav_bar_container';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import classes from './splash.module.css';

class Splash extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className={classes.mainDiv}>
          splash
        </div>
      </div>
    );
  }
}

export default Splash;
