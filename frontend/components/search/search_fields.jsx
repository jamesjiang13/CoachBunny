import React from 'react';
import { Link } from 'react-router-dom';
import classes from './search_fields.module.css';
// import { connect } from 'react-redux';
// import { fetchCoachSearch } from '../actions/coaching_sessions_search_actions';

const SearchFields = () => (
  <div className={classes.searchFieldMain}>
    <div className={classes.searchFieldBox}>
      <div className={classes.searchFieldBanner}>
        <h1>Find Your Next Coach</h1>
      </div>

      <div className={classes.searchFieldButtonsR1}>
        <Link to="/sports/1">Football</Link>
        <Link to="/sports/2">Basketball</Link>
        <Link to="/sports/3">Soccer</Link>
      </div>
      <div className={classes.searchFieldButtonsR2}>
        <Link to="/sports/4">Tennis</Link>
        <Link to="/sports/5">Golf</Link>
      </div>
    </div>
  </div>
);

export default SearchFields;
